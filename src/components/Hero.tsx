import { Button } from "./ui/Button";
import { Photo } from "./ui/Photo";
import {
  Accent,
  DisplayHeading,
  Lead,
  Meta,
  SectionLabel,
} from "./ui/Typography";
import { heroCopy } from "@/lib/content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className="section section--tight-top">
      <div className="container split split--5-7 split--stretch">
        {/* On tablets/phones `.copy` dissolves (display: contents) and its
            children are re-ordered around the photo in Hero.module.css.
            If you add/remove/reorder children here, update the nth-child
            order rules there. */}
        <div className={`stack stack--lg ${styles.copy}`}>
          <SectionLabel>{heroCopy.eyebrow}</SectionLabel>
          <DisplayHeading>
            {heroCopy.title}
            <br />
            <Accent>{heroCopy.accent}</Accent>
          </DisplayHeading>
          <Lead>{heroCopy.lead}</Lead>
          <Button
            variant="primary"
            size="lg"
            href="#booking"
            className="self-start"
          >
            Записаться на бесплатный урок
          </Button>
          <Meta>{heroCopy.note}</Meta>
        </div>
        <div className={styles.photo}>
          <Photo
            src="/images/hero.webp"
            alt=""
            sizes="(max-width: 900px) 100vw, 60vw"
            fit="scaleDown"
            focus="bottom"
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
