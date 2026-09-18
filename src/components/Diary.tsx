import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Tag } from "./ui/Tag";
import styles from "./Diary.module.css";

export function Diary() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.label}>05 / Дневник барабанщика</span>
            <Tag tone="accent">Только для учеников</Tag>
          </div>
          <h2 className={styles.heading}>
            ПРОГРЕСС,
            <br />
            <span className={styles.accent}>КОТОРЫЙ ВИДНО</span>
          </h2>
          <p className={styles.lead}>
            Для учеников «Ритмологии» я создал Beat by Bit — дневник
            самостоятельных занятий.
          </p>
          <p className={styles.body}>
            Добавляй упражнения, ставь себе задачи и оценивай каждую
            тренировку. Так ты видишь, что уже получается и над чем ещё нужно
            поработать.
          </p>
          <p className={styles.body}>
            Дневник работает на телефоне и компьютере. Доступ — только для
            учеников школы.
          </p>
          <div className={styles.monoNote}>
            задачи · оценки · заметки · история занятий
          </div>
        </div>
        <div className={styles.mockup}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <Image
              src={withBasePath("/images/bbb-desktop.png")}
              alt="Beat by Bit — дневник занятий, десктоп"
              width={2976}
              height={1454}
            />
          </div>
          <div className={styles.mobileMockup}>
            <Image
              src={withBasePath("/images/bbb-mobile.png")}
              alt="Beat by Bit — дневник занятий, мобильная версия"
              width={1320}
              height={2868}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
