import type { InputHTMLAttributes } from "react";
import styles from "./FormField.module.css";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  checked: boolean;
};

export function Checkbox({ label, checked, ...rest }: CheckboxProps) {
  return (
    <label className={styles.checkboxLabel}>
      <span
        className={[
          styles.checkboxBox,
          checked ? styles.checkboxBoxChecked : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {checked ? <span className={styles.checkboxDot} /> : null}
      </span>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkboxInput}
        {...rest}
      />
      <span className={styles.checkboxText}>{label}</span>
    </label>
  );
}
