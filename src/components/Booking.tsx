import { Button } from "./ui/Button";
import { contactLinks } from "@/lib/content";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <section id="booking" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.label}>Запись</span>
          <h2 className={styles.heading}>Бесплатный первый урок</h2>
          <p className={styles.lead}>
            Познакомимся, определим цель и сыграем первый ритм за установкой.
            Продолжительность — 30 минут.
          </p>
          <div className={styles.contacts}>
            <a href={contactLinks.phoneHref}>{contactLinks.phoneLabel}</a>
            <a
              href={contactLinks.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactLinks.telegramLabel}
            </a>
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
