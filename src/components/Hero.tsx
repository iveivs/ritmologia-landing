import Image from "next/image";
import { Button } from "./ui/Button";
import {
  Accent,
  DisplayHeading,
  Lead,
  Meta,
  SectionLabel,
} from "./ui/Typography";
import { heroCopy } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
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
          <SectionLabel>Санкт-Петербург</SectionLabel>
          <DisplayHeading>
            {heroCopy.line1}
            <br />
            {heroCopy.line2}
            <br />
            <Accent>{heroCopy.line3}</Accent>
          </DisplayHeading>
          <Lead>
            Развиваем чувство ритма, ставим технику и учимся уверенно играть за
            барабанами. <br />
            Первый урок — бесплатно.
          </Lead>
          <Button variant="primary" size="lg" href="#booking" className={styles.cta}>
            Записаться на бесплатный урок
          </Button>
          <Meta>Сыграй свой первый бит</Meta>
        </div>
        <div className={styles.photo}>
          <Image
            src={withBasePath("/images/hero.webp")}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
