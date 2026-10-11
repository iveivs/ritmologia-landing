import { Button } from "./Button";
import { Card } from "./Card";
import { Tag } from "./Tag";
import { Index } from "./Typography";
import styles from "./PriceCard.module.css";

type PriceCardProps = {
  title: string;
  price: string;
  unit: string;
  cta: string;
  features: string[];
  /** Highlighted (dark) card with a badge, e.g. "Выгодно". */
  badge?: string;
  href?: string;
};

export function PriceCard({
  title,
  price,
  unit,
  cta,
  features,
  badge,
  href = "#booking",
}: PriceCardProps) {
  const featured = Boolean(badge);

  return (
    <Card
      tone={featured ? "featured" : "paper"}
      className={featured ? styles.featured : undefined}
    >
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        {badge ? <Tag tone="accent">{badge}</Tag> : null}
      </div>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        <span className={styles.unit}>{unit}</span>
      </div>
      <ul className={styles.features}>
        {features.map((feature, i) => (
          <li key={feature} className={styles.feature}>
            <Index>{String(i + 1).padStart(2, "0")}</Index>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "inverse" : "outline"}
        full
        href={href}
        className={styles.cta}
      >
        {cta}
      </Button>
    </Card>
  );
}
