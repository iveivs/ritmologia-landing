import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  tone?: "paper" | "plain" | "sunken" | "featured" | "inverseOutline";
  padding?: "lg" | "xl";
  gap?: "md" | "sm";
  className?: string;
  children: ReactNode;
};

export function Card({
  tone = "paper",
  padding = "lg",
  gap = "md",
  className,
  children,
}: CardProps) {
  const classes = [
    styles.card,
    styles[tone],
    padding === "xl" ? styles.padXl : "",
    gap === "sm" ? styles.gapSm : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
