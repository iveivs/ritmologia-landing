import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import styles from "./Address.module.css";

export function Address() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.mapWrap}>
          <Image
            src={withBasePath("/images/map-address.png")}
            alt="Карта: 13-я линия Васильевского острова, 72 — 10 минут от метро Василеостровская"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div className={styles.copy}>
          <span className={styles.label}>07 / Адрес</span>
          <h2 className={styles.heading}>
            ВАСИЛЬЕВСКИЙ
            <br />
            <span className={styles.accent}>ОСТРОВ</span>
          </h2>
          <p className={styles.address}>
            13-я линия Васильевского острова, дом 72, студия А1.
          </p>
        </div>
      </div>
    </section>
  );
}
