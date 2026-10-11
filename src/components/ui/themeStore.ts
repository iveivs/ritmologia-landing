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

const cycle: ThemeMode[] = ["auto", "light", "dark"];

export function nextThemeMode(mode: ThemeMode): ThemeMode {
  return cycle[(cycle.indexOf(mode) + 1) % cycle.length];
}
