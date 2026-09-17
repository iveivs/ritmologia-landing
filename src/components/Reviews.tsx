"use client";

import { useRef } from "react";
import { reviews } from "@/lib/content";
import styles from "./Reviews.module.css";

export function Reviews() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * Math.max(280, el.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headRow}>
          <div className={styles.head}>
            <span className={styles.label}>06 / Отзывы</span>
            <h2 className={styles.heading}>
              ЧТО ГОВОРЯТ
              <br />
              <span className={styles.accent}>УЧЕНИКИ</span>
            </h2>
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              aria-label="Предыдущий отзыв"
              className={styles.arrowButton}
              onClick={() => scroll(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Следующий отзыв"
              className={styles.arrowButton}
              onClick={() => scroll(1)}
            >
              ›
            </button>
          </div>
        </div>
        <div ref={railRef} className={styles.rail}>
          {reviews.map((review) => (
            <div key={`${review.name}-${review.meta}`} className={styles.card}>
              <div className={styles.stars} aria-label="Оценка 5 из 5">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.footer}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.meta}>{review.meta}</span>
              </div>
            </div>
          ))}
        </div>
        <span className={styles.caption}>Отзывы с сайтов репетиторов</span>
      </div>
    </section>
  );
}
