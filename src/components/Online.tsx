import Image from "next/image";
import { Button } from "./ui/Button";
import styles from "./Online.module.css";

export function Online() {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.label}>04 / Онлайн</span>
        <h2 className={styles.heading}>
          НЕ В ПЕТЕРБУРГЕ?
          <br />
          <span className={styles.accent}>
            МОЖНО
            <br />
            ОНЛАЙН!
          </span>
        </h2>
        <p className={styles.lead}>
          Провожу индивидуальные онлайн-занятия: разбираем технику, ритм,
          координацию, упражнения — и ваши любимые треки.
        </p>
        <p className={styles.body}>
          Для начала достаточно камеры и пэда с палочками. Я вижу и слышу
          вашу игру в реальном времени, сразу замечаю ошибки и корректирую их
          прямо на занятии.
        </p>
        <p className={styles.body}>Подходит и тем, кто начинает с нуля.</p>
        <div className={styles.ctaRow}>
          <Button href="#booking">ПОПРОБОВАТЬ ОНЛАЙН БЕСПЛАТНО →</Button>
        </div>
        <div className={styles.monoNote}>камера · пэд с палочками</div>
      </div>
      <div className={styles.photoWrap}>
        <div className={styles.mainPhoto}>
          <Image
            src="/images/online-lesson.png"
            alt="Онлайн-занятие: преподаватель за ноутбуком, пэд и палочки"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneInner}>
            <Image
              src="/images/online-call.jpg"
              alt="Видеозвонок с учеником во время онлайн-занятия"
              fill
              sizes="20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
