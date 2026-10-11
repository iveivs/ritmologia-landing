import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { platformLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { PhoneFrame } from "./ui/PhoneFrame";
import { Eyebrow } from "./ui/Eyebrow";
import { Accent, Body, Lead, Meta, SectionHeading } from "./ui/Typography";
import styles from "./Platform.module.css";

// Screenshots show demo data with invented students.
const screens = [
  {
    src: "/images/tyuttori-home.webp",
    alt: "Тьюттори — ближайший урок и кнопки переноса и отмены",
  },
  {
    src: "/images/tyuttori-lesson.webp",
    alt: "Тьюттори — домашнее задание, заметка ученика и документы урока",
  },
  {
    src: "/images/tyuttori-balance.webp",
    alt: "Тьюттори — баланс оплаченных занятий и история",
  },
];

export function Platform() {
  return (
    <section id="cabinet" className="section">
      <div className="container split split--7-5 split--reverse split--stretch">
        <div className="stack reveal">
          <Eyebrow label="06 / Личный кабинет" tag="Для учеников" />
          <SectionHeading>
            ВСЁ ПО УРОКАМ
            <br />
            <Accent>В ОДНОМ МЕСТЕ</Accent>
          </SectionHeading>
          <Lead>
            Кроме дневника у учеников есть личный кабинет «Тьюттори» — мой
            собственный сервис для занятий.
          </Lead>
          <Body>
            В нём расписание ближайших уроков и запросы на перенос или отмену.
            После урока там же появляются домашнее задание и материалы: PDF,
            документы, фото.
          </Body>
          <Body>
            К уроку можно оставить заметку, а ещё всегда видно, сколько
            оплаченных занятий осталось.
          </Body>
          <Button
            href={platformLink.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="self-start"
          >
            Открыть «Тьюттори»
          </Button>
        </div>
        <Card tone="sunken" className={`${styles.stage} reveal reveal--late`}>
          <div className={styles.brand}>
            <Image
              className={styles.logo}
              src={withBasePath("/images/tyuttori-logo.webp")}
              alt=""
              width={192}
              height={192}
            />
            <Meta>Тьюттори · {platformLink.label}</Meta>
          </div>
          <ul className={styles.phones}>
            {screens.map((screen) => (
              <li key={screen.src} className={styles.item}>
                <PhoneFrame tone="dark">
                  <Image
                    src={withBasePath(screen.src)}
                    alt={screen.alt}
                    width={640}
                    height={1112}
                  />
                </PhoneFrame>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
