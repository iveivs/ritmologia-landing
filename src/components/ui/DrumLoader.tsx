import { Meta } from "./Typography";
import styles from "./DrumLoader.module.css";

/** A small "waiting" mark: a stick tapping a drum. Used only where something
 *  really takes time (the third-party map), never as a page preloader. */
export function DrumLoader({ label }: { label: string }) {
  return (
    <div className={styles.loader} role="status">
      <svg
        className={styles.mark}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M10 40v10a22 7 0 0 0 44 0V40" />
        <ellipse cx="32" cy="40" rx="22" ry="7" />
        <path className={styles.stick} d="M52 6 36 36" />
      </svg>
      <Meta>{label}</Meta>
    </div>
  );
}
