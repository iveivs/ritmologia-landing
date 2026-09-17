import Image from "next/image";
import { teacherFacts } from "@/lib/content";
import styles from "./Teacher.module.css";

export function Teacher() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.label}>03 / Преподаватель</span>
          <h2 className={styles.heading}>
            ОТ УЧЕБНОГО КЛАССА
            <br />
            <span className={styles.accent}>ДО СТУДИИ И СЦЕНЫ</span>
          </h2>
          <p className={styles.lead}>
            Меня зовут Светослав Богданов. Я преподаватель ударных с опытом
            более 15 лет и действующий музыкант.
          </p>
          <p className={styles.body}>
            У меня два профессиональных музыкальных образования: музыкальный
            колледж и консерватория им. А. К. Глазунова. Я выступаю на сцене
            и записываю музыку в студии, поэтому объясняю не только как
            выполнить упражнение, но и как применять его в настоящей музыке.
          </p>
          <p className={styles.body}>
            За это время у меня занимались сотни учеников — от тех, кто
            впервые взял палочки, до опытных барабанщиков.
          </p>
          <div className={styles.facts}>
            {teacherFacts.map((fact, i) => (
              <div
                key={fact.index}
                className={`${styles.fact} ${i === 0 ? styles.factFirst : ""}`}
              >
                <span className={styles.factIndex}>{fact.index}</span>
                <span className={styles.factText}>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.collage}>
          <div className={styles.mainPhoto}>
            <Image
              src="/images/teacher-studio.png"
              alt="Светослав Богданов за установкой в студии"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.subGrid}>
            <div className={styles.subPhoto}>
              <Image
                src="/images/teacher-lesson.jpg"
                alt="Занятие с учеником"
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
              />
            </div>
            <div className={styles.subPhoto}>
              <Image
                src="/images/teacher-concert.webp"
                alt="Концерт с группой"
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
