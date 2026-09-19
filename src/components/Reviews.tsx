"use client";

import { useRef } from "react";
import { reviews } from "@/lib/content";
import { Accent, Body, Meta, SectionHeading, SectionLabel } from "./ui/Typography";
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
    <section className="section section--sunken">
      <div className="container stack stack--xl">
        <div className={styles.headRow}>
          <div className="stack">
            <SectionLabel>06 / Отзывы</SectionLabel>
            <SectionHeading>
              ЧТО ГОВОРЯТ
              <br />
              <Accent>УЧЕНИКИ</Accent>
            </SectionHeading>
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              aria-label="Предыдущий отзыв"
              className={styles.arrow}
              onClick={() => scroll(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Следующий отзыв"
              className={styles.arrow}
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
              <Body>{review.text}</Body>
              <div className={styles.footer}>
                <span className={styles.name}>{review.name}</span>
                <Meta>{review.meta}</Meta>
              </div>
            </div>
          ))}
        </div>
        <Meta>Отзывы с сайтов репетиторов</Meta>
      </div>
    </section>
  );
}
