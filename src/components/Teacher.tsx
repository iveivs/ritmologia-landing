import { teacherFacts } from "@/lib/content";
import { Frame } from "./ui/Frame";
import { Photo } from "./ui/Photo";
import {
  Accent,
  Body,
  Index,
  Lead,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Teacher.module.css";

export function Teacher() {
  return (
    <section id="teacher" className="section section--sunken">
      <div className="container split split--7-5 split--start">
        <div className="stack">
          <SectionLabel>03 / Преподаватель</SectionLabel>
          <SectionHeading>
            ОТ УЧЕБНОГО КЛАССА
            <br />
            <Accent>ДО СТУДИИ И СЦЕНЫ</Accent>
          </SectionHeading>
          <Lead>
            Меня зовут Светослав Богданов. Я преподаватель ударных с опытом
            более 15 лет и действующий музыкант.
          </Lead>
          <Body>
            У меня два профессиональных музыкальных образования: музыкальный
            колледж и консерватория им. А. К. Глазунова. Я выступаю на сцене и
            записываю музыку в студии, поэтому объясняю не только как выполнить
            упражнение, но и как применять его в настоящей музыке.
          </Body>
          <Body>
            За это время у меня занимались сотни учеников — от тех, кто впервые
            взял палочки, до опытных барабанщиков.
          </Body>
          <div className={styles.facts}>
            {teacherFacts.map((fact, i) => (
              <div
                key={fact.index}
                className={`${styles.fact} ${i === 0 ? styles.factFirst : ""}`}
              >
                <Index>{fact.index}</Index>
                <span className={styles.factText}>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.collage}>
          <Frame ratio="4/5">
            <Photo
              src="/images/teacher-studio.webp"
              alt="Светослав Богданов за установкой в студии"
              sizes="(max-width: 900px) 100vw, 40vw"
              focus="upper"
            />
          </Frame>
          <div className={styles.subGrid}>
            <Frame ratio="4/3">
              <Photo
                src="/images/teacher-lesson.webp"
                alt="Занятие с учеником"
                sizes="(max-width: 900px) 50vw, 20vw"
              />
            </Frame>
            <Frame ratio="4/3">
              <Photo
                src="/images/teacher-concert.webp"
                alt="Концерт с группой"
                sizes="(max-width: 900px) 50vw, 20vw"
              />
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
}
