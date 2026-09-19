import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import {
  Accent,
  Body,
  Lead,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Studio.module.css";

export function Studio() {
  return (
    <section className="section">
      <div className="container split split--5-7 split--reverse">
        <div className="stack">
          <SectionLabel>02 / Студия</SectionLabel>
          <SectionHeading>
            ПРОФЕССИОНАЛЬНАЯ
            <br />
            <Accent>СТУДИЯ</Accent>
          </SectionHeading>
          <Lead>
            Занятия проходят в оборудованной студии, на профессиональном
            оборудовании и на живых барабанах. Играй по-настоящему с первого
            урока.
          </Lead>
          <Body>
            Ничего покупать или приносить не нужно: просто приходи на занятие.
          </Body>
          <Meta ruled inline>
            <span>акустическая установка ·</span>
            <span>профессиональное оборудование</span>
            <span>звукоизолированный зал</span>
          </Meta>
        </div>
        <div className={styles.photo}>
          <Image
            src={withBasePath("/images/studio-pro.webp")}
            alt="Студия школы: установка Sonor, мониторы Yamaha"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
