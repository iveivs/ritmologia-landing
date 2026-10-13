import { skillsItems } from "@/lib/content";
import {
  Body,
  Index,
  ItemTitle,
  SectionHeading,
  SectionLabel,
} from "./ui/Typography";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="programs" className="section section--sunken">
      <div className="container split split--5-7 split--start">
        <div className="stack">
          <SectionLabel>01 / Чему учим</SectionLabel>
          <SectionHeading
            lines={["НЕ ПРОСТО", "ПОВТОРЯТЬ —", "А ИГРАТЬ ОСОЗНАННО"]}
          />
        </div>
        <ol className={`${styles.grid} reveal-stagger`}>
          {skillsItems.map((item) => (
            <li key={item.index} className={styles.item}>
              <Index>{item.index}</Index>
              <ItemTitle>{item.title}</ItemTitle>
              <Body>{item.text}</Body>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
