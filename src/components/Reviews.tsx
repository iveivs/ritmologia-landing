"use client";

import { useRef } from "react";
import { reviews } from "@/lib/content";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import {
  Accent,
  Body,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Reviews.module.css";

export function Reviews() {
  const railRef = useRef<HTMLUListElement>(null);

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
            <SectionLabel>07 / Отзывы</SectionLabel>
            <SectionHeading>
              ЧТО ГОВОРЯТ
              <br />
              <Accent>УЧЕНИКИ</Accent>
            </SectionHeading>
          </div>
          <div className={styles.arrows}>
            <Button
              variant="outline"
              square
              aria-label="Предыдущий отзыв"
              onClick={() => scroll(-1)}
            >
              ‹
            </Button>
            <Button
              variant="outline"
              square
              aria-label="Следующий отзыв"
              onClick={() => scroll(1)}
            >
              ›
            </Button>
          </div>
        </div>
        <ul ref={railRef} className={styles.rail}>
          {reviews.map((review) => (
            <li key={`${review.name}-${review.meta}`} className={styles.slide}>
              <Card tone="plain">
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
              </Card>
            </li>
          ))}
        </ul>
        <Meta>Отзывы с сайтов репетиторов</Meta>
      </div>
    </section>
  );
}
