import { PriceCard } from "./ui/PriceCard";
import { trialFeatures, singleFeatures, monthFeatures } from "@/lib/content";
import styles from "./Prices.module.css";

const NBSP = " ";

export function Prices() {
  return (
    <section id="prices" className={styles.section}>
      <PriceCard
        title="Пробный урок"
        price={`0${NBSP}₽`}
        unit="/ 30 минут"
        cta="Попробовать бесплатно"
        features={trialFeatures}
      />
      <PriceCard
        title="Разовое занятие"
        price={`1${NBSP}800${NBSP}₽`}
        unit="/ 60 минут"
        cta="Записаться на занятие"
        features={singleFeatures}
      />
      <PriceCard
        title="Абонемент"
        price={`6${NBSP}400${NBSP}₽`}
        unit="/ 4 занятия"
        cta="Выбрать абонемент"
        featured
        features={monthFeatures}
      />
    </section>
  );
}
