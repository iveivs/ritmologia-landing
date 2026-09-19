import { Button } from "./ui/Button";
import { Lead, Meta, SectionHeading, SectionLabel } from "./ui/Typography";
import { contactLinks } from "@/lib/content";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <section id="booking" className="section section--ink">
      <div className="container split split--6-6">
        <div className="stack">
          <SectionLabel tone="onInk">Запись</SectionLabel>
          <SectionHeading tone="onInk">Бесплатный первый урок</SectionHeading>
          <Lead tone="onInk">
            Познакомимся, определим цель и сыграем первый ритм за установкой.
            Продолжительность — 30 минут.
          </Lead>
          <div className={styles.contacts}>
            <Meta tone="onInk" inline>
              <a href={contactLinks.phoneHref}>{contactLinks.phoneLabel}</a>
              <a
                href={contactLinks.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactLinks.telegramLabel}
              </a>
            </Meta>
          </div>
        </div>
        <div className={styles.card}>
          <Button
            variant="onInk"
            size="lg"
            full
            href={contactLinks.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </Button>
          <Button
            variant="outlineOnInk"
            size="lg"
            full
            href={contactLinks.vkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать во ВКонтакте
          </Button>
          <Button
            variant="outlineOnInk"
            size="lg"
            full
            href={contactLinks.phoneHref}
          >
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  );
}
