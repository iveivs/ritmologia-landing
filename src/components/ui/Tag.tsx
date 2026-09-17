import type { ReactNode, CSSProperties } from "react";

type TagProps = {
  tone?: "neutral" | "accent" | "soft" | "ink" | "onInk";
  children: ReactNode;
};

const tones: Record<string, CSSProperties> = {
  neutral: {
    color: "var(--text-muted)",
    borderColor: "var(--line-strong)",
    background: "transparent",
  },
  accent: {
    color: "var(--text-on-accent)",
    borderColor: "var(--surface-accent)",
    background: "var(--surface-accent)",
  },
  soft: {
    color: "var(--red-700)",
    borderColor: "transparent",
    background: "var(--surface-accent-soft)",
  },
  ink: {
    color: "var(--text-on-ink)",
    borderColor: "var(--surface-ink)",
    background: "var(--surface-ink)",
  },
  onInk: {
    color: "var(--text-on-ink-muted)",
    borderColor: "var(--line-on-ink)",
    background: "transparent",
  },
};

export function Tag({ tone = "neutral", children }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-text)",
        fontSize: "var(--label-sm)",
        fontWeight: "var(--weight-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        padding: "5px 10px 4px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid",
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
}
