import { StripeRule } from "./ui/StripeRule";
import { Logo } from "./ui/Logo";
import { Meta } from "./ui/Typography";
import { footerColumns, contacts } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.rule}>
          <div className={styles.grid}>
            <div className={`stack ${styles.brand}`}>
              <Logo tone="cream" />
              <StripeRule tone="accent" count={14} thickness={18} length="180px" />
            </div>
            {footerColumns.map((column) => (
              <div key={column.title} className={styles.column}>
                <span className={styles.columnTitle}>{column.title}</span>
                {column.links.map((link) => (
                  <span key={link} className={styles.link}>
                    {link}
                  </span>
                ))}
              </div>
            ))}
            <div className={`${styles.column} ${styles.contacts}`}>
              <span className={styles.columnTitle}>Контакты</span>
              {contacts.map((contact) => (
                <span key={contact} className={styles.contact}>
                  {contact}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.note}>
            <Meta tone="onInk">
              Ритмология · школа барабанов · пробный урок бесплатно
            </Meta>
          </div>
        </div>
      </div>
    </footer>
  );
}
