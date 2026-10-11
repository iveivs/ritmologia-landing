import type { ReactNode } from "react";
import { Tag } from "./Tag";
import { SectionLabel } from "./Typography";
import styles from "./Eyebrow.module.css";

/** Section label with an optional tag. The tag ALWAYS sits on its own line
 *  under the label, so every section looks the same whatever the label's
 *  length or the column's width. */
export function Eyebrow({ label, tag }: { label: ReactNode; tag?: string }) {
  return (
    <div className={styles.eyebrow}>
      <SectionLabel>{label}</SectionLabel>
      {tag ? <Tag tone="accent">{tag}</Tag> : null}
    </div>
  );
}
