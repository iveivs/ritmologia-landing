"use client";

import { useEffect, useSyncExternalStore } from "react";

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

/** Keeps the browser chrome (address bar) in the page's colour. The layout
 *  declares one <meta theme-color> per system theme; when the visitor forces a
 *  theme that differs from the system's, both are set to the page background
 *  actually shown. "Auto" restores the declared values. */
function syncThemeColor(mode: ThemeMode) {
  const metas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  const shown = getComputedStyle(document.documentElement).backgroundColor;
  metas.forEach((meta) => {
    meta.dataset.declaredContent ??= meta.content;
    meta.dataset.declaredMedia ??= meta.media;
    if (mode === "auto") {
      meta.content = meta.dataset.declaredContent;
      meta.media = meta.dataset.declaredMedia;
    } else {
      meta.content = shown;
      meta.media = "all";
    }
  });
}

/** Run once on mount so a saved choice also colours the address bar. */
export function useThemeColorSync() {
  const mode = useThemeMode();
  useEffect(() => syncThemeColor(mode), [mode]);
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
  syncThemeColor(mode);
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
