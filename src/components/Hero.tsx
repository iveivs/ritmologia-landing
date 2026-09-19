import Image from "next/image";
import { Button } from "./ui/Button";
import { StripeRule } from "./ui/StripeRule";
import { heroCopy } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <StripeRule count={12} thickness={16} length="96px" />
          <span className={styles.eyebrowLabel}>
            Санкт-Петербург · школа барабанов
          </span>
        </div>
        <h1 className={styles.title}>
          {heroCopy.line1}
          <br />
          {heroCopy.line2}
          <br />
          <span className={styles.accent}>{heroCopy.line3}</span>
        </h1>
        <p className={styles.lead}>
          Развиваем чувство ритма, ставим технику и учимся уверенно играть за
          барабанами. <br />
          Первый урок — бесплатно.
        </p>
        <div className={styles.ctaRow}>
          <Button variant="primary" size="lg" href="#booking">
            Записаться на бесплатный урок
          </Button>
        </div>
        <span className={styles.monoNote}>Сыграй свой первый бит</span>
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
    </section>
  );
}
