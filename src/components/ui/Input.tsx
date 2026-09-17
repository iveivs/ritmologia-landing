import type { InputHTMLAttributes } from "react";
import styles from "./FormField.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  tone?: "paper" | "ink";
};

export function Input({
  label,
  hint,
  error,
  tone = "paper",
  className,
  ...rest
}: InputProps) {
  const onInk = tone === "ink";
  return (
    <label className={styles.field}>
      {label ? (
        <span
          className={`${styles.label} ${onInk ? styles.labelInk : styles.labelPaper}`}
        >
          {label}
        </span>
      ) : null}
      <input
        className={[
          styles.control,
          onInk ? styles.controlInk : styles.controlPaper,
          error ? styles.error : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : hint ? (
        <span
          className={`${styles.hint} ${onInk ? styles.hintInk : styles.hintPaper}`}
        >
          {hint}
        </span>
      ) : null}
    </label>
  );
}
