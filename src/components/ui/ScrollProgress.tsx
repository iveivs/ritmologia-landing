import styles from "./ScrollProgress.module.css";

/** A thin accent line at the top of the page that fills as you scroll. CSS
 *  only; browsers without scroll-driven animations simply do not show it. */
export function ScrollProgress() {
  return <div className={styles.bar} aria-hidden="true" />;
}
