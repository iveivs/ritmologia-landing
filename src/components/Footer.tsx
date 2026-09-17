import { StripeRule } from "./ui/StripeRule";
import { footerColumns, contacts } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span>
              <span className={styles.name}>Ритмология</span>
              <br />
              <span className={styles.tagline}>Школа барабанов</span>
            </span>
            <StripeRule tone="accent" count={14} thickness={18} length="180px" />
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.columnTitle}>{column.title}</span>
              {column.links.map((link) => (
                <span key={link} className={styles.columnLink}>
                  {link}
                </span>
              ))}
            </div>
          ))}
          <div className={styles.column}>
            <span className={styles.columnTitle}>Контакты</span>
            {contacts.map((contact) => (
              <span key={contact} className={styles.contactValue}>
                {contact}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          Ритмология · школа барабанов · пробный урок бесплатно
        </div>
      </div>
    </footer>
  );
}
