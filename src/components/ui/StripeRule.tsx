type StripeRuleProps = {
  tone?: "accent" | "ink" | "sand";
  count?: number;
  length?: string;
  thickness?: number;
};

export function StripeRule({
  tone = "accent",
  count = 16,
  length = "100%",
  thickness = 28,
}: StripeRuleProps) {
  const color =
    tone === "accent"
      ? "var(--red-500)"
      : tone === "ink"
        ? "var(--ink-900)"
        : "var(--sand-300)";

  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        width: length,
        height: thickness,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            background: color,
            flex: "1 1 0",
            minWidth: "3px",
            opacity: 1 - (i / count) * 0.75,
          }}
        />
      ))}
    </div>
  );
}
