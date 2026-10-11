"use client";

import {
  applyThemeMode,
  useEffectiveTheme,
  useThemeColorSync,
} from "./themeStore";
import styles from "./ThemeIconButton.module.css";

/** A small sun/moon button: it shows the theme you will switch TO and sets
 *  that theme explicitly. Going back to "Auto" is done in the footer group.
 *  The caller positions it; the look lives here. */
export function ThemeIconButton({ className }: { className?: string }) {
  useThemeColorSync();
  const theme = useEffectiveTheme();
  const target = theme === "dark" ? "light" : "dark";
  const label =
    target === "dark" ? "Включить тёмную тему" : "Включить светлую тему";

  return (
    <button
      type="button"
      className={`${styles.button} ${className ?? ""}`}
      aria-label={label}
      title={label}
      onClick={() => applyThemeMode(target)}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {target === "dark" ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        )}
      </svg>
    </button>
  );
}
