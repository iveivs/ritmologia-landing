import { Body } from "./Typography";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
};

/** One row of a FAQ <ul>. Native <details>: no JS, keyboard accessible, works
 *  in a static export. The row (<li>) owns the separator lines. */
export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <li className={styles.row}>
      <details className={styles.item}>
        <summary className={styles.question}>
          <h3>{question}</h3>
          <span className={styles.icon} aria-hidden="true" />
        </summary>
        <div className={styles.answer}>
          <Body>{answer}</Body>
        </div>
      </details>
    </li>
  );
}
