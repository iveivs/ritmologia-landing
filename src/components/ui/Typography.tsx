import type { ReactNode } from "react";
import styles from "./Typography.module.css";

type Tone = "default" | "onInk";

const cx = (...names: (string | false | undefined)[]) =>
  names.filter(Boolean).join(" ");

/** Hero H1. There is exactly one per page. */
export function DisplayHeading({ children }: { children: ReactNode }) {
  return <h1 className={styles.display}>{children}</h1>;
}

/** Section H2 — one size for every section. */
export function SectionHeading({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <h2 className={cx(styles.heading, tone === "onInk" && styles.headingOnInk)}>
      {children}
    </h2>
  );
}

/** Red highlighted part of a heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className={styles.accent}>{children}</span>;
}

/** Wide-tracked caps eyebrow, e.g. "02 / Студия". */
export function SectionLabel({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={cx(styles.label, tone === "onInk" && styles.labelOnInk)}>
      {children}
    </span>
  );
}

export function Lead({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <p className={cx(styles.lead, tone === "onInk" && styles.leadOnInk)}>
      {children}
    </p>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return <p className={styles.body}>{children}</p>;
}

/** Monospace metadata line. `ruled` adds a hairline above, `inline` lays
 *  children out in a wrapping row. */
export function Meta({
  children,
  tone = "default",
  ruled = false,
  inline = false,
}: {
  children: ReactNode;
  tone?: Tone;
  ruled?: boolean;
  inline?: boolean;
}) {
  return (
    <div
      className={cx(
        styles.meta,
        tone === "onInk" && styles.metaOnInk,
        ruled && styles.metaRuled,
        inline && styles.metaInline,
      )}
    >
      {children}
    </div>
  );
}

/** Red mono numeral: 01, 02, … */
export function Index({ children }: { children: ReactNode }) {
  return <span className={styles.index}>{children}</span>;
}
