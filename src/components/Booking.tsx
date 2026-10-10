import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Lead, Meta, SectionHeading, SectionLabel } from "./ui/Typography";
import { contactLinks } from "@/lib/content";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <section id="booking" className="section section--inverse">
      <div className="container split split--6-6">
        <div className="stack">
          <SectionLabel tone="inverse">Запись</SectionLabel>
          <SectionHeading tone="inverse">Бесплатный первый урок</SectionHeading>
          <Lead tone="inverse">
            Познакомимся, определим цель и сыграем первый ритм за установкой.
            Продолжительность — 30 минут.
          </Lead>
          <div className={styles.contacts}>
            <Meta tone="inverse" inline>
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
        <Card tone="inverseOutline" padding="xl" gap="sm">
          <Button
            variant="inverse"
            size="lg"
            full
            href={contactLinks.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </Button>
          <Button
            variant="inverseOutline"
            size="lg"
            full
            href={contactLinks.vkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать во ВКонтакте
          </Button>
          <Button
            variant="inverseOutline"
            size="lg"
            full
            href={contactLinks.phoneHref}
          >
            Позвонить
          </Button>
        </Card>
      </div>
    </section>
  );
}
