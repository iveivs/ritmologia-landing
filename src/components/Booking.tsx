"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Checkbox } from "./ui/Checkbox";
import { experienceOptions } from "@/lib/content";
import styles from "./Booking.module.css";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = {
  name?: string;
  contact?: string;
  consent?: string;
};

export function Booking() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [goal, setGoal] = useState(experienceOptions[0]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Укажите, как к вам обращаться";
    if (!contact.trim()) nextErrors.contact = "Укажите телефон или мессенджер";
    if (!consent) nextErrors.consent = "Нужно согласие на обработку данных";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: подключить реальный endpoint/CRM
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="booking" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <span className={styles.label}>Запись</span>
            <h2 className={styles.heading}>Бесплатный первый урок</h2>
            <p className={styles.lead}>
              Познакомимся, определим цель и сыграем первый ритм за
              установкой. Продолжительность — 30 минут.
            </p>
            <div className={styles.contacts}>
              <span>8 (931) 00-77-390</span>
              <span>@iveivs</span>
            </div>
          </div>
          <div className={styles.success}>
            <h3 className={styles.successTitle}>Заявка отправлена</h3>
            <p className={styles.successText}>
              Напишем в мессенджер, чтобы договориться о времени.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.label}>Запись</span>
          <h2 className={styles.heading}>Бесплатный первый урок</h2>
          <p className={styles.lead}>
            Познакомимся, определим цель и сыграем первый ритм за установкой.
            Продолжительность — 30 минут.
          </p>
          <div className={styles.contacts}>
            <span>8 (931) 00-77-390</span>
            <span>@iveivs</span>
          </div>
        </div>
        <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
          <Input
            label="Имя"
            tone="ink"
            placeholder="Как к вам обращаться"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <Input
            label="Телефон"
            tone="ink"
            placeholder="+7"
            hint={errors.contact ? undefined : "Напишем в Telegram или WhatsApp"}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            error={errors.contact}
          />
          <Select
            label="Опыт"
            tone="ink"
            options={experienceOptions}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <Checkbox
            label="Даю согласие на обработку персональных данных"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          {errors.consent ? (
            <p className={styles.submitError}>{errors.consent}</p>
          ) : null}
          <Button
            type="submit"
            variant="onInk"
            size="lg"
            full
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Отправляем…" : "Записаться"}
          </Button>
          {status === "error" ? (
            <p className={styles.submitError}>
              Не получилось отправить заявку. Попробуйте ещё раз.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
