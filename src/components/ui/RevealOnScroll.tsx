"use client";

import { useEffect } from "react";

/** Starts the gentle reveal (see `.reveal` in styles/layout.css). Mounted once.
 *  Marks the page "ready" only when the browser can observe visibility, so
 *  without JS (or with reduced motion) nothing is ever hidden. */
export function RevealOnScroll() {
  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal--in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    document.documentElement.classList.add("reveal-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
