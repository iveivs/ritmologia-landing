import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import styles from "./Logo.module.css";

type LogoProps = {
  /** Show the round "Р" mark next to the wordmark. */
  mark?: boolean;
  /** "cream" is for dark backgrounds. */
  tone?: "ink" | "cream";
};

export function Logo({ mark = false, tone = "ink" }: LogoProps) {
  return (
    <span className={`${styles.logo} ${tone === "cream" ? styles.cream : ""}`}>
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
