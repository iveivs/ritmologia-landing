import { Button } from "./Button";
import { Tag } from "./Tag";
import styles from "./PriceCard.module.css";

type PriceCardProps = {
  title: string;
  price: string;
  unit: string;
  cta: string;
  features: string[];
  featured?: boolean;
  href?: string;
};

export function PriceCard({
  title,
  price,
  unit,
  cta,
  features,
  featured = false,
  href = "#booking",
}: PriceCardProps) {
  const tone = featured ? "ink" : "paper";

  return (
    <div className={`${styles.card} ${styles[tone]}`}>
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        {featured ? <Tag tone="accent">Популярно</Tag> : null}
      </div>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        <span
          className={`${styles.unit} ${featured ? styles.unitInk : styles.unitPaper}`}
        >
          {unit}
        </span>
      </div>
      {features.length ? (
        <ul
          className={`${styles.features} ${featured ? styles.featuresInk : styles.featuresPaper}`}
        >
          {features.map((feature, i) => (
            <li key={feature} className={styles.feature}>
              <span className={styles.featureIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <Button
        variant={featured ? "onInk" : "outline"}
        full
        href={href}
        className={styles.cta}
        style={{ whiteSpace: "normal", textAlign: "center" }}
      >
        {cta}
      </Button>
    </div>
  );
}
