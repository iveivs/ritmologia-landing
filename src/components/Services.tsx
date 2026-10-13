import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { beatByBitLink, platformLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";
import { PhoneFrame } from "./ui/PhoneFrame";
import {
  Accent,
  Body,
  ItemTitle,
  Lead,
  Meta,
  SectionHeading,
} from "./ui/Typography";
import styles from "./Services.module.css";

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

/** The student services of the school: the practice diary (Beat by Bit, open
 *  to everyone for now) and the student cabinet (Tyuttori, login only). Two
 *  rows with opposite compositions under one heading. */
export function Services() {
  return (
    <section className="section section--sunken">
      <div className="container stack stack--xl">
        <div className="stack reveal">
          <Eyebrow label="05 / Для учеников" />
          <SectionHeading>
            ДВА СЕРВИСА
            <br />
            <Accent>ДЛЯ УЧЕНИКОВ</Accent>
          </SectionHeading>
          <Lead>
            Для учеников «Ритмологии» я сделал два своих сервиса: один помогает
            заниматься самому, другой держит все уроки под рукой.
          </Lead>
        </div>

        <div id="diary" className="split split--5-7">
          <div className="stack reveal">
            <div className={styles.name}>
              <ItemTitle>Beat by Bit</ItemTitle>
              <Meta>дневник занятий</Meta>
            </div>
            <Body>
              Добавляй упражнения, ставь себе задачи и оценивай каждую
              тренировку. Так ты видишь, что уже получается и над чем ещё нужно
              поработать. Дневник работает на телефоне и компьютере.
            </Body>
            <Meta ruled>задачи · оценки · заметки · история занятий</Meta>
            <Button
              href={beatByBitLink.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="self-start"
            >
              Открыть Beat by Bit
            </Button>
          </div>
          <div className={`${styles.mockup} reveal reveal--late`}>
            <div className={styles.window}>
              <div className={styles.windowBar}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotAmber}`} />
                <span className={`${styles.dot} ${styles.dotOlive}`} />
              </div>
              <Image
                src={withBasePath("/images/bbb-desktop.webp")}
                alt="Beat by Bit — дневник занятий, десктоп"
                width={1600}
                height={782}
              />
            </div>
            <div className={styles.phone}>
              <PhoneFrame tone="dark">
                <Image
                  src={withBasePath("/images/bbb-mobile.webp")}
                  alt="Beat by Bit — дневник занятий, мобильная версия"
                  width={640}
                  height={1391}
                />
              </PhoneFrame>
            </div>
          </div>
        </div>

        <div
          id="cabinet"
          className="split split--7-5 split--reverse split--stretch"
        >
          <Card tone="plain" className={`${styles.stage} reveal reveal--late`}>
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
          <div className="stack reveal">
            <div className={styles.brand}>
              <Image
                className={styles.logo}
                src={withBasePath("/images/tyuttori-logo.webp")}
                alt=""
                width={192}
                height={192}
              />
              <div className={styles.name}>
                <ItemTitle>Тьюттори</ItemTitle>
                <Meta>личный кабинет · {platformLink.label}</Meta>
              </div>
            </div>
            <Body>
              Расписание ближайших уроков и запросы на перенос или отмену. После
              урока там же появляются домашнее задание и материалы: PDF,
              документы, фото. К уроку можно оставить заметку, а ещё всегда
              видно, сколько оплаченных занятий осталось.
            </Body>
            <Meta ruled>расписание · материалы · заметки · баланс занятий</Meta>
            <Button
              href={platformLink.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="self-start"
            >
              Войти в «Тьюттори»
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
