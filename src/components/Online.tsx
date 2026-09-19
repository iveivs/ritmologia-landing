import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Button } from "./ui/Button";
import {
  Accent,
  Body,
  Lead,
  Meta,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Online.module.css";

export function Online() {
  return (
    <section className="section">
      <div className="container split split--6-6 split--reverse">
        <div className="stack">
          <SectionLabel>04 / Онлайн</SectionLabel>
          <SectionHeading>
            НЕ В ПЕТЕРБУРГЕ?
            <br />
            <Accent>
              МОЖНО
              <br />
              ОНЛАЙН!
            </Accent>
          </SectionHeading>
          <Lead>
            Провожу индивидуальные онлайн-занятия: разбираем технику, ритм,
            координацию, упражнения — и ваши любимые треки.
          </Lead>
          <Body>
            Для начала достаточно камеры и пэда с палочками. Я вижу и слышу
            вашу игру в реальном времени, сразу замечаю ошибки и корректирую их
            прямо на занятии.
          </Body>
          <Body>Подходит и тем, кто начинает с нуля.</Body>
          <Button href="#booking" className={styles.cta}>
            ПОПРОБОВАТЬ ОНЛАЙН БЕСПЛАТНО →
          </Button>
          <Meta ruled>камера · пэд с палочками</Meta>
        </div>
        <div className={styles.media}>
          <div className={styles.photo}>
            <Image
              src={withBasePath("/images/online-lesson.webp")}
              alt="Онлайн-занятие: преподаватель за ноутбуком, пэд и палочки"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <Image
                src={withBasePath("/images/online-call.webp")}
                alt="Видеозвонок с учеником во время онлайн-занятия"
                fill
                sizes="20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
