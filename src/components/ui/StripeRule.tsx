// token-check:allow-file inline-style px (per-instance size and per-stripe opacity)
type StripeRuleProps = {
  count?: number;
  length?: string;
  thickness?: number;
};

/** The "rhythm lines" motif from the logo, in the accent colour. */
export function StripeRule({
  count = 16,
  length = "100%",
  thickness = 28,
}: StripeRuleProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        gap: "var(--space-1)",
        width: length,
        height: thickness,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            background: "var(--color-accent)",
            flex: "1 1 0",
            minWidth: "3px",
            opacity: 1 - (i / count) * 0.75,
          }}
        />
      ))}
    </div>
  );
}
