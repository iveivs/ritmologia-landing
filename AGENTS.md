<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ритмология — правила разработки для AI-агентов

Этот лендинг воссоздан по дизайн-хэндоффу из Claude Design, сохранённому
в `docs/design-handoff/` (HTML-эталон, README со спецификацией секций,
дизайн-система, скриншоты). Читай `README.md` для общей карты проекта.
Ниже — правила, которых стоит держаться при дальнейших правках.

## Что нельзя делать без явного запроса пользователя

- **Не менять копирайт.** Все тексты (заголовки, лиды, отзывы, цены,
  контакты) — финальные, согласованы с заказчиком. Правки формулировок,
  даже «улучшающие», требуют отдельного согласования.
- **Не менять дизайн-токены «на глаз».** Цвета/отступы/радиусы живут в
  `src/app/globals.css` как CSS-переменные и обязаны совпадать с
  `docs/design-handoff/_ds/design-system-*/tokens/*.css` из оригинального
  хэндоффа. Если токен нужно поменять — это решение по дизайну, не
  рефакторинг.
- **Не добавлять иконочные шрифты, emoji или сторонние UI-кит библиотеки.**
  В бренде нет иконок: индексы — mono-цифры, «+/−» аккордеона — два
  прямоугольника. Так и должно оставаться.
- **Не добавлять sticky-хедер, плавающие чаты, параллакс или
  скролл-джекинг** — явно исключены дизайном.

## Как устроен код

- Контент отделён от разметки: весь текстовый/структурный контент — в
  `src/lib/content.ts`. Если правишь текст или список (отзывы, тарифы,
  колонки футера) — правь там, а не в JSX компонентов.
- Каждая секция лендинга — отдельный компонент в `src/components/*.tsx` +
  свой `*.module.css`. Секции собираются по порядку в `src/app/page.tsx`.
- Переиспользуемые примитивы дизайн-системы (Button, Tag, StripeRule,
  PriceCard, Input, Select, Checkbox) — в `src/components/ui/`. Это
  минимальный React-порт компонентов, описанных в
  `docs/design-handoff/_ds/design-system-*/_ds_bundle.js` оригинального
  хэндоффа. Меняя их — сверяйся с оригинальным bundle, там прописаны все
  варианты/размеры.
- Клиентские компоненты (`"use client"`) — только там, где реально нужен
  интерактив: `Reviews.tsx` (карусель со scroll-snap) и `Booking.tsx`
  (форма с валидацией и состояниями `idle/submitting/success/error`).
  Остальное — серверные компоненты по умолчанию.
- Next.js 16 в этом проекте новее, чем в типичных обучающих данных —
  см. блок выше и `node_modules/next/dist/docs/` перед использованием
  малоизвестных API.

## Известные заглушки, которые ждут доработки

- `Booking.tsx` → `handleSubmit`: сейчас `setTimeout` вместо реального
  запроса. Нужно подключить endpoint/CRM, когда он появится.
- `Address.tsx`: статичный скриншот карты вместо встроенной Яндекс.Карты
  (открытый вопрос из дизайн-хэндоффа, ждёт данных от заказчика — время
  от метро, вход, этаж).

## Проверка изменений

После правок стоит прогонять:

```bash
npm run build   # ловит TS-ошибки и ошибки сборки
npm run lint
```

Для визуальной проверки — превью-сервер (`npm run dev`) и сверка с
`docs/design-handoff/screenshots/*.png` (эталонные скриншоты по
прокрутке) и/или `docs/design-handoff/Landing.dc.html`, который
открывается в браузере как статичный эталон.
