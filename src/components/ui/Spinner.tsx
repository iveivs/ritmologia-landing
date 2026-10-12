import { Meta } from "./Typography";
import styles from "./Spinner.module.css";

/** The standard "waiting" mark: a thin ring with a rotating arc and a short
 *  label in a pill. Used only where something really takes time (the
 *  third-party map), never as a page preloader. */
export function Spinner({ label }: { label: string }) {
  return (
    <div className={styles.pill} role="status">
      <svg
        className={styles.ring}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle className={styles.track} cx="12" cy="12" r="9" />
        <circle className={styles.arc} cx="12" cy="12" r="9" />
      </svg>
      <Meta>{label}</Meta>
    </div>
  );
}
