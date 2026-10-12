import { Frame } from "./ui/Frame";
import { Photo } from "./ui/Photo";
import {
  Accent,
  Body,
  Lead,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";

export function Studio() {
  return (
    <section id="studio" className="section">
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
        <Frame ratio="4/3" zoom>
          <Photo
            src="/images/studio-pro.webp"
            alt="Студия школы: установка Sonor, мониторы Yamaha"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </Frame>
      </div>
    </section>
  );
}
