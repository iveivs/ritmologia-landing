import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import styles from "./Studio.module.css";

export function Studio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.photo}>
          <Image
            src={withBasePath("/images/studio-pro.png")}
            alt="Студия школы: установка Sonor, мониторы Yamaha"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className={styles.copy}>
          <span className={styles.label}>02 / Студия</span>
          <h2 className={styles.heading}>
            ПРОФЕССИОНАЛЬНАЯ
            <br />
            <span className={styles.accent}>СТУДИЯ</span>
          </h2>
          <p className={styles.lead}>
            Занятия проходят в оборудованной студии, на профессиональном
            оборудовании и на живых барабанах. Играй по-настоящему с первого
            урока.
          </p>
          <p className={styles.body}>
            Ничего покупать или приносить не нужно: просто приходи на
            занятие.
          </p>
          <div className={styles.equipment}>
            <span>акустическая установка ·</span>
            <span>профессиональное оборудование</span>
            <span>звукоизолированный зал</span>
          </div>
        </div>
      </div>
    </section>
  );
}
