"use client";

import { useState } from "react";
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

// How many reviews are visible before "show all": the first row on phones, two
// rows on tablets and desktop (tiers 0 and 1 respectively, see the CSS).
const PREVIEW_PHONE = 3;
const PREVIEW_WIDE = 6;

export function Reviews() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section section--sunken">
      <div className="container stack stack--xl">
        <div className="stack">
          <SectionLabel>07 / Отзывы</SectionLabel>
          <SectionHeading>
            ЧТО ГОВОРЯТ
            <br />
            <Accent>УЧЕНИКИ</Accent>
          </SectionHeading>
        </div>
        <ul className={styles.grid} data-expanded={expanded}>
          {reviews.map((review, i) => (
            <li
              key={`${review.name}-${review.meta}`}
              className={styles.item}
              data-tier={i < PREVIEW_PHONE ? 0 : i < PREVIEW_WIDE ? 1 : 2}
            >
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
        <div className={styles.more}>
          <Button
            variant="outline"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded
              ? "Свернуть отзывы"
              : `Показать все отзывы (${reviews.length})`}
          </Button>
          <Meta>Отзывы с сайтов репетиторов</Meta>
        </div>
      </div>
    </section>
  );
}
