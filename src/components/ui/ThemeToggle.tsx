"use client";

import { useSyncExternalStore } from "react";
import styles from "./ThemeToggle.module.css";

type Mode = "auto" | "light" | "dark";

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";

const options: { value: Mode; label: string }[] = [
  { value: "auto", label: "Авто" },
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
];

function readMode(): Mode {
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

function applyMode(mode: Mode) {
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

/** Auto (follow the system) / Light / Dark. The choice is kept in the
 *  browser's localStorage only: no cookies, nothing is sent anywhere. */
export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, readMode, () => "auto" as Mode);

  return (
    <div className={styles.group} role="group" aria-label="Тема оформления">
      <span>Тема:</span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={styles.option}
          aria-pressed={mode === option.value}
          onClick={() => applyMode(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
