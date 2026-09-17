import { skillsItems } from "@/lib/content";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.label}>01 / Чему учим</span>
          <h2 className={styles.heading}>
            НЕ ПРОСТО
            <br />
            ПОВТОРЯТЬ —
            <br />
            А ИГРАТЬ ОСОЗНАННО
          </h2>
        </div>
        <div className={styles.grid}>
          {skillsItems.map((item) => (
            <div key={item.index} className={styles.item}>
              <span className={styles.index}>{item.index}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
