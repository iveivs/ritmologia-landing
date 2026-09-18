import Image from "next/image";
import { Button } from "./ui/Button";
import { navLinks } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logoLink}>
        <Image
          src={withBasePath("/images/logo-mark.svg")}
          alt="Ритмология"
          width={1024}
          height={1024}
          className={styles.mark}
        />
        <span className={styles.wordmark}>
          <span className={styles.name}>Ритмология</span>
          <span className={styles.tagline}>Школа барабанов</span>
        </span>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[styles.navLink, i === 0 ? styles.navLinkActive : ""]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button size="sm" href="#booking">
          Бесплатный урок
        </Button>
      </nav>
    </header>
  );
}
