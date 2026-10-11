"use client";

import {
  applyThemeMode,
  nextThemeMode,
  themeLabels,
  useThemeMode,
} from "./themeStore";

/** One compact button: each press goes Auto -> Light -> Dark -> Auto.
 *  The caller styles it (it lives in the header's contact bar). */
export function ThemeCycle({ className }: { className?: string }) {
  const mode = useThemeMode();

  return (
    <button
      type="button"
      className={className}
      aria-label={`Тема оформления: ${themeLabels[mode]}. Нажмите, чтобы переключить`}
      onClick={() => applyThemeMode(nextThemeMode(mode))}
    >
      Тема: {themeLabels[mode]}
    </button>
  );
}
