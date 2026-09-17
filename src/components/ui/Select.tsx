import type { SelectHTMLAttributes } from "react";
import styles from "./FormField.module.css";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  tone?: "paper" | "ink";
  options: string[];
};

export function Select({
  label,
  hint,
  error,
  tone = "paper",
  options,
  className,
  ...rest
}: SelectProps) {
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
      <select
        className={[
          styles.control,
          styles.select,
          onInk ? styles.controlInk : styles.controlPaper,
          error ? styles.error : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
