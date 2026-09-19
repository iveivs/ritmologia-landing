import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import styles from "./Logo.module.css";

type LogoProps = {
  /** Show the round "Р" mark next to the wordmark. */
  mark?: boolean;
  /** "cream" is for dark backgrounds. */
  tone?: "ink" | "cream";
  /** On phones, pin the mark and the wordmark to opposite edges. */
  spread?: boolean;
};

export function Logo({ mark = false, tone = "ink", spread = false }: LogoProps) {
  const classes = [
    styles.logo,
    tone === "cream" ? styles.cream : "",
    spread ? styles.spread : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {mark ? (
        <Image
          src={withBasePath("/images/logo-mark.svg")}
          alt=""
          width={1024}
          height={1024}
          className={styles.mark}
        />
      ) : null}
      <span className={styles.words}>
        <span className={styles.name}>Ритмология</span>
        <span className={styles.tagline}>Школа барабанов</span>
      </span>
    </span>
  );
}
