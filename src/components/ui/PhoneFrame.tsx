import type { ReactNode } from "react";
import styles from "./PhoneFrame.module.css";

type PhoneFrameProps = {
  tone?: "cutout" | "dark";
  children: ReactNode;
};

export function PhoneFrame({ tone = "dark", children }: PhoneFrameProps) {
  return (
    <div className={`${styles.phone} ${styles[tone]}`}>
      <div className={styles.screen}>{children}</div>
    </div>
  );
}
