import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
  tone?: "neutral" | "accent";
  children: ReactNode;
};

export function Tag({ tone = "neutral", children }: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>
  );
}
