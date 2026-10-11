import { logoMarkInkPath, logoMarkRedPath } from "./logoMarkPaths";
import styles from "./Logo.module.css";

type LogoProps = {
  /** Show the round "Р" mark next to the wordmark. */
  mark?: boolean;
  /** "inverse" is for dark backgrounds. */
  tone?: "default" | "inverse";
  /** On phones, pin the mark and the wordmark to opposite edges. */
  spread?: boolean;
};

export function Logo({
  mark = false,
  tone = "default",
  spread = false,
}: LogoProps) {
  const classes = [
    styles.logo,
    tone === "inverse" ? styles.inverse : "",
    spread ? styles.spread : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {mark ? (
        <svg
          className={styles.mark}
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className={styles.markRed}
            fillRule="evenodd"
            d={logoMarkRedPath}
          />
          <path
            className={styles.markInk}
            fillRule="evenodd"
            d={logoMarkInkPath}
          />
        </svg>
      ) : null}
      <span className={styles.words}>
        <span className={styles.name}>Ритмология</span>
        <span className={styles.tagline}>Школа барабанов</span>
      </span>
    </span>
  );
}
