# Как работать с репозиторием

Короткие правила, чтобы история была чистой, а `main` всегда готов к выкладке.
Код — [`docs/ENGINEERING.md`](docs/ENGINEERING.md), дизайн —
[`docs/DESIGN-STANDARD.md`](docs/DESIGN-STANDARD.md).

## Ветки

- `main` — это продакшен: каждый коммит в него автоматически выкладывается на
  GitHub Pages. Прямых пушей в `main` нет, только через Pull Request.
- Работа ведётся в коротких ветках от `main`: `тип/кратко-через-дефис`.

| Тип         | Для чего                             | Пример                      |
| ----------- | ------------------------------------ | --------------------------- |
| `feat/`     | новая секция, компонент, возможность | `feat/platform-section`     |
| `fix/`      | исправление ошибки                   | `fix/price-list-alignment`  |
| `style/`    | вид без смены логики                 | `style/dark-theme-contrast` |
| `refactor/` | переделка кода без смены поведения   | `refactor/extract-card`     |
| `docs/`     | документация                         | `docs/design-standard`      |
| `chore/`    | зависимости, CI, инструменты         | `chore/deps-next-16-4`      |

Ветка живёт не дольше нескольких дней и удаляется после слияния.

## Коммиты — Conventional Commits

```
тип(область): краткое повелительное описание, до 72 знаков

Зачем это сделано (если неочевидно). Что изменилось по сути.
```

Типы: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `ci`, `perf`.
Область — по необходимости: `prices`, `footer`, `tokens`, `a11y`, `deps`.
Один коммит — одно логическое изменение; сообщение объясняет **почему**.
Если над кодом работал ИИ-ассистент, в конце добавляется строка
`Co-Authored-By: …`.

## Pull Request

1. Маленький и про одно. Большая задача — несколько PR.
2. Заполни шаблон: что и зачем, как проверено, скриншоты **в обеих темах**
   (390 и 1280 px) для любых визуальных изменений.
3. CI должен быть зелёным: форматирование, линт, типы, сборка, `audit:ui`.
4. Тексты (копирайт) меняются только по запросу владельца — ссылка на запрос
   в описании.
5. Слияние — **Squash and merge** (один коммит на PR, заголовок PR — по
   Conventional Commits). Ветка удаляется.

## Что нельзя

- Пушить в `main`, делать `force push` по `main`, переписывать историю.
- Коммитить секреты, `.env`, большие неоптимизированные картинки.
- Добавлять зависимости без обоснования в PR.
- Менять токены «на глаз» (значения — решение по дизайну).

## Релизы и история изменений

- Все заметные изменения пишутся в [`CHANGELOG.md`](CHANGELOG.md) по формату
  [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/).
- Версии — `vMAJOR.MINOR.PATCH` (теги и GitHub Releases): `MAJOR` — смена
  дизайна/структуры, `MINOR` — новая секция или возможность, `PATCH` —
  правки и исправления.

## Автоматизация

- `.github/workflows/ci.yml` — на каждый PR: `format:check`, `lint`, `tsc`,
  `build`, `audit:ui` на собранном сайте.
- `.github/workflows/deploy.yml` — при слиянии в `main` собирает и выкладывает
  сайт.
- Dependabot (`.github/dependabot.yml`) раз в неделю предлагает обновления npm
  и GitHub Actions отдельными PR.
- `CODEOWNERS` — владелец автоматически назначается ревьюером.

## Рекомендуемая защита `main` (настройки репозитория)

Settings → Branches → Branch protection rule для `main`:

- Require a pull request before merging;
- Require status checks to pass: `checks` (job из `ci.yml`);
- Require branches to be up to date; Require linear history;
- Do not allow force pushes и deletions.
