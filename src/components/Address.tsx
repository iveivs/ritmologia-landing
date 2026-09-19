import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Accent, Lead, SectionHeading, SectionLabel } from "./ui/Typography";
import styles from "./Address.module.css";

export function Address() {
  return (
    <section className="section section--sunken">
      <div className="container split split--7-5 split--reverse">
        <div className="stack">
          <SectionLabel>07 / Адрес</SectionLabel>
          <SectionHeading>
            ВАСИЛЬЕВСКИЙ
            <br />
            <Accent>ОСТРОВ</Accent>
          </SectionHeading>
          <div className={styles.address}>
            <Lead>13-я линия Васильевского острова, дом 72, студия А1.</Lead>
          </div>
        </div>
        <div className={styles.map}>
          <Image
            src={withBasePath("/images/map-address.webp")}
            alt="Карта: 13-я линия Васильевского острова, 72 — 10 минут от метро Василеостровская"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
