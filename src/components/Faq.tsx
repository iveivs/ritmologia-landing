import { Button } from "./ui/Button";
import styles from "./Faq.module.css";
import { FaqItem } from "./ui/FaqItem";
import { Accent, Body, SectionHeading, SectionLabel } from "./ui/Typography";
import { faqItems, telegramLinks } from "@/lib/content";

// schema.org FAQPage, built from the same data as the visible list.
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}).replace(/</g, "\\u003c");

export function Faq() {
  return (
    // Same background as the prices above: no top padding.
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container split split--5-7 split--start">
        <div className="stack reveal">
          <SectionLabel>07 / Вопросы</SectionLabel>
          <SectionHeading>
            ЧАСТЫЕ
            <br />
            <Accent>ВОПРОСЫ</Accent>
          </SectionHeading>
          <Body>Не нашли ответ? Напишите, отвечу в мессенджере.</Body>
          <Button
            size="lg"
            href={telegramLinks.question}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            Написать в Telegram
          </Button>
        </div>
        <ul className="reveal reveal--late">
          {faqItems.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </ul>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
    </section>
  );
}
