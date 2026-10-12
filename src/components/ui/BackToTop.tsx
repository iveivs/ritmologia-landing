"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import styles from "./BackToTop.module.css";

/** A square "up" button that appears at the very end of the page: when the empty
 *  strip under the footer (#page-end) is fully in view, so it never covers
 *  content. Hidden (and out of the tab order) until then. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const end = document.getElementById("page-end");
    if (!end || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.9 },
    );
    observer.observe(end);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.dock} data-visible={visible}>
      <Button href="#" square aria-label="Наверх">
        <svg
          className={styles.arrow}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </Button>
    </div>
  );
}
