import { Button } from "./ui/Button";
import { MapEmbed } from "./ui/MapEmbed";
import {
  Accent,
  Body,
  Lead,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import { studioMap } from "@/lib/content";
import styles from "./Address.module.css";

export function Address() {
  return (
    <section className="section section--sunken">
      <div className="container split split--7-5 split--reverse">
        <div className="stack">
          <SectionLabel>08 / Адрес</SectionLabel>
          <SectionHeading>
            ВАСИЛЬЕВСКИЙ
            <br />
            <Accent>ОСТРОВ</Accent>
          </SectionHeading>
          <div className={styles.address}>
            <Lead>13-я линия Васильевского острова, дом 72, студия А1.</Lead>
          </div>
          <Body>От метро «Василеостровская» пешком около 12 минут.</Body>
          <div className={styles.actions}>
            <Button
              full
              href={studioMap.routeHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Построить маршрут
            </Button>
            <Button
              full
              variant="outline"
              href={studioMap.openHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть в Яндекс Картах
            </Button>
          </div>
        </div>
        <MapEmbed
          src={studioMap.embedSrc}
          alt="Карта: 13-я линия Васильевского острова, 72"
        />
      </div>
    </section>
  );
}
