import { Body } from "./Typography";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
};

/** Native <details>: no JS, keyboard accessible, works in a static export. */
export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>
        <h3>{question}</h3>
        <span className={styles.icon} aria-hidden="true" />
      </summary>
      <div className={styles.answer}>
        <Body>{answer}</Body>
      </div>
    </details>
  );
}
