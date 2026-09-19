import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Tag } from "./ui/Tag";
import {
  Accent,
  Body,
  Lead,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Diary.module.css";

export function Diary() {
  return (
    // Same background as the "Online" section above: no top padding.
    <section className="section section--flush-top">
      <div className="container split split--5-7">
        <div className="stack">
          <div className={styles.eyebrow}>
            <SectionLabel>05 / Дневник барабанщика</SectionLabel>
            <Tag tone="accent">Только для учеников</Tag>
          </div>
          <SectionHeading>
            ПРОГРЕСС,
            <br />
            <Accent>КОТОРЫЙ ВИДНО</Accent>
          </SectionHeading>
          <Lead>
            Для учеников «Ритмологии» я создал Beat by Bit — дневник
            самостоятельных занятий.
          </Lead>
          <Body>
            Добавляй упражнения, ставь себе задачи и оценивай каждую
            тренировку. Так ты видишь, что уже получается и над чем ещё нужно
            поработать.
          </Body>
          <Body>
            Дневник работает на телефоне и компьютере. Доступ — только для
            учеников школы.
          </Body>
          <Meta ruled>задачи · оценки · заметки · история занятий</Meta>
        </div>
        <div className={styles.mockup}>
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
            <Image
              src={withBasePath("/images/bbb-mobile.webp")}
              alt="Beat by Bit — дневник занятий, мобильная версия"
              width={640}
              height={1391}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
