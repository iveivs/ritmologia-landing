"use client";

import {
  applyThemeMode,
  themeLabels,
  useThemeMode,
  type ThemeMode,
} from "./themeStore";
import styles from "./ThemeToggle.module.css";

const options: ThemeMode[] = ["auto", "light", "dark"];

/** Full choice: Auto (follow the system) / Light / Dark. The choice is kept
 *  in the browser's localStorage only: no cookies, nothing is sent anywhere. */
export function ThemeToggle() {
  const mode = useThemeMode();

  return (
    <div className={styles.group} role="group" aria-label="Тема оформления">
      <span>Тема:</span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={styles.option}
          aria-pressed={mode === option}
          onClick={() => applyThemeMode(option)}
        >
          {themeLabels[option]}
        </button>
      ))}
    </div>
  );
}
