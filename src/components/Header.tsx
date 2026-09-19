import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { navLinks } from "@/lib/content";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand}>
          <Logo mark spread />
        </a>
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.links}>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} ${i === 0 ? styles.linkActive : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button size="sm" href="#booking" className={styles.cta}>
            Бесплатный урок
          </Button>
        </nav>
      </div>
    </header>
  );
}
