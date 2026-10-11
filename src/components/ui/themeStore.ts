"use client";

import { useSyncExternalStore } from "react";

export type ThemeMode = "auto" | "light" | "dark";

export const themeLabels: Record<ThemeMode, string> = {
  auto: "Авто",
  light: "Светлая",
  dark: "Тёмная",
};

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";

function readMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "auto";
  } catch {
    return "auto";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Current choice: "auto" follows the system. Shared by every switch on the
 *  page, so the header button and the footer group stay in sync. */
export function useThemeMode(): ThemeMode {
  return useSyncExternalStore(subscribe, readMode, () => "auto" as ThemeMode);
}

export function applyThemeMode(mode: ThemeMode) {
  const root = document.documentElement;
  // Colours must change together, not fade one by one: turn transitions off,
  // apply the theme, force the style recalculation while they are still off,
  // and only then turn them back on.
  root.classList.add("theme-switching");
  try {
    if (mode === "auto") {
      delete root.dataset.theme;
      localStorage.removeItem(STORAGE_KEY);
    } else {
      root.dataset.theme = mode;
      localStorage.setItem(STORAGE_KEY, mode);
    }
  } catch {
    // Storage can be blocked (private mode): the choice then lasts until reload.
  }
  void root.offsetWidth;
  window.setTimeout(() => root.classList.remove("theme-switching"), 50);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribeEffective(onChange: () => void) {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const stop = subscribe(onChange);
  query.addEventListener("change", onChange);
  return () => {
    stop();
    query.removeEventListener("change", onChange);
  };
}

function readEffective(): "light" | "dark" {
  const mode = readMode();
  if (mode !== "auto") return mode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** The theme the page is showing right now ("auto" resolved to the system's). */
export function useEffectiveTheme(): "light" | "dark" {
  return useSyncExternalStore(
    subscribeEffective,
    readEffective,
    () => "light" as const,
  );
}
