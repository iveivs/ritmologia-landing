import { PriceCard } from "./ui/PriceCard";
import { trialFeatures, singleFeatures, monthFeatures } from "@/lib/content";
import styles from "./Prices.module.css";

const NBSP = " "; // keeps "1 800 ₽" on one line

export function Prices() {
  return (
    <section id="prices" className="section">
      <div className={`container ${styles.grid}`}>
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
          badge="Выгодно"
          features={monthFeatures}
        />
      </div>
    </section>
  );
}
