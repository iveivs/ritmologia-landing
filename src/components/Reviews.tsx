"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/content";
import { Card } from "./ui/Card";
import {
  Accent,
  Body,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Reviews.module.css";

type Position = {
  first: number;
  visible: number;
  atStart: boolean;
  atEnd: boolean;
};

/** Points right; the "previous" button mirrors it in CSS. */
function Chevron() {
  return (
    <svg
      className={styles.chevron}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 4l8 8-8 8" />
    </svg>
  );
}

export function Reviews() {
  const railRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Position>({
    first: 0,
    visible: 3,
    atStart: true,
    atEnd: false,
  });
  const total = reviews.length;

  // Where the rail is now: which reviews are in view and whether an end is reached.
  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail || rail.children.length < 2) return;
    const [a, b] = [
      rail.children[0] as HTMLElement,
      rail.children[1] as HTMLElement,
    ];
    const step = b.offsetLeft - a.offsetLeft;
    const visible = Math.max(1, Math.floor((rail.clientWidth + 1) / step));
    const atStart = rail.scrollLeft <= 2;
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    const first = atEnd ? total - visible : Math.round(rail.scrollLeft / step);
    setPos({ first, visible, atStart, atEnd });
    const track = trackRef.current;
    if (track) {
      track.style.setProperty("--total", String(total));
      track.style.setProperty("--first", String(first));
      track.style.setProperty("--visible", String(visible));
    }
  }, [total]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scroll = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el || el.children.length < 2) return;
    const step =
      (el.children[1] as HTMLElement).offsetLeft -
      (el.children[0] as HTMLElement).offsetLeft;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const last = Math.min(total, pos.first + pos.visible);

  return (
    <section className="section">
      <div className="container stack stack--xl">
        <div className="stack">
          <SectionLabel>06 / Отзывы</SectionLabel>
          <SectionHeading>
            ЧТО ГОВОРЯТ
            <br />
            <Accent>УЧЕНИКИ</Accent>
          </SectionHeading>
        </div>
        <div className="stack">
          <div className={styles.carousel}>
            {/* Bare chevrons in the lanes beside the rail, no frame or fill, so
                they never cover a card. On phones the rail is swiped. */}
            <button
              type="button"
              className={`${styles.arrow} ${styles.prev}`}
              aria-label="Предыдущие отзывы"
              disabled={pos.atStart}
              onClick={() => scroll(-1)}
            >
              <Chevron />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              aria-label="Следующие отзывы"
              disabled={pos.atEnd}
              onClick={() => scroll(1)}
            >
              <Chevron />
            </button>
            <ul
              ref={railRef}
              className={styles.rail}
              tabIndex={0}
              aria-label="Отзывы учеников"
              onScroll={measure}
            >
              {reviews.map((review) => (
                <li
                  key={`${review.name}-${review.meta}`}
                  className={styles.slide}
                >
                  <Card tone="paper">
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
          </div>
          <div className={styles.progress}>
            <Meta>
              {pos.first + 1}–{last} из {total}
            </Meta>
            <div ref={trackRef} className={styles.track} aria-hidden="true">
              <i className={styles.thumb} />
            </div>
          </div>
        </div>
        <Meta>Отзывы с сайтов репетиторов</Meta>
      </div>
    </section>
  );
}
