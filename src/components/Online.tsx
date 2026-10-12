import { Button } from "./ui/Button";
import { Frame } from "./ui/Frame";
import { Photo } from "./ui/Photo";
import { PhoneFrame } from "./ui/PhoneFrame";
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
            Для начала достаточно камеры и пэда с палочками. Я вижу и слышу вашу
            игру в реальном времени, сразу замечаю ошибки и корректирую их прямо
            на занятии.
          </Body>
          <Body>Подходит и тем, кто начинает с нуля.</Body>
          <Button href="#booking" className="self-start">
            ПОПРОБОВАТЬ ОНЛАЙН БЕСПЛАТНО →
          </Button>
          <Meta ruled>камера · пэд с палочками</Meta>
        </div>
        <div className={styles.media}>
          <Frame ratio="3/2" zoom>
            <Photo
              src="/images/online-lesson.webp"
              alt="Онлайн-занятие: преподаватель за ноутбуком, пэд и палочки"
              sizes="(max-width: 900px) 100vw, 50vw"
              fit="contain"
            />
          </Frame>
          <div className={styles.phone}>
            <PhoneFrame tone="cutout">
              <Frame ratio="9/16" square>
                <Photo
                  src="/images/online-call.webp"
                  alt="Видеозвонок с учеником во время онлайн-занятия"
                  sizes="20vw"
                  focus="top"
                />
              </Frame>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
