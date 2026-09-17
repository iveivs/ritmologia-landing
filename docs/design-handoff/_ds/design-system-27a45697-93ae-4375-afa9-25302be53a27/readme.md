# Ритмология — Design System

**Ритмология** is a drum school in Saint Petersburg. It teaches drums from zero — primarily adults who have never played, plus teenagers and children. The teaching approach is not only technique: it builds rhythm, coordination and musical thinking. The brand must read modern, intelligent, friendly and professional, with none of the usual rock-school clichés.

The commercial core of the product is one offer: **пробный урок бесплатно** — a free first lesson, 60 minutes, no obligation. Every surface in this system is designed to make that offer easy to take and never salesy.

## Sources

Everything here was derived from seven brand files supplied by the user (no codebase, no Figma file, no live site was provided):

| Source file | What it gave us |
|---|---|
| `ChatGPT Image 16 июл. 2026 г., 11_13_07.png` → `assets/logo-p-solid-cream.png` | Solid extruded «Р» mark, red on cream |
| `ChatGPT Image 16 июл. 2026 г., 13_59_17.png` → `assets/logo-badge-dark.png` | Circular badge, striped «Р» with drumstick, on near-black |
| `ChatGPT Image 29 июл. 2026 г., 12_16_38.png` → `assets/logo-badge-light.png` | Circular badge on cream — primary mark used in this system |
| `ChatGPT Image 28 июл. 2026 г., 14_20_24.png` → `assets/poster-ritm.png` | Poster: cream ground, perspective «РИТМ», red disc, lockup «РИТМОЛОГИЯ / ШКОЛА БАРАБАНОВ» |
| `CE16B282-…_SnapseedCopy.jpg` → `assets/poster-skills.jpg` | Poster: «РИТМ ДРАЙВ КРЕАТИВ МЫШЛЕНИЕ ПОСТАНОВКА КООРДИНАЦИЯ», price line `1500 ₽ / 60 МИНУТ`, contacts `@IVEIVS`, `8 (931) 00-77-390` |
| `E12A2719-…_SnapseedCopy.jpg` → `assets/photo-free-lesson.jpg` | Photo: «БЕСПЛАТНЫЙ УРОК» social creative (off-palette blue/red stage lighting — kept as reference, not a style to extend) |
| `AC71116D-….jpg` → `assets/photo-studio.jpg` | Photo: the school's own studio (Sonor kit, Yamaha monitors) |

No design tokens, component library or production code existed, so the foundations below were authored from the poster artwork.

## Index

- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css`
- `components/` — `core/`, `forms/`, `content/`, `navigation/` (see list below)
- `ui_kits/website/` — clickable recreation of the school's site: `index.html`, `Home.jsx`, `Prices.jsx`, `Booking.jsx`, `README.md`
- `templates/landing/` — «Лендинг: бесплатный урок» — a one-page landing template consuming projects can copy
- `guidelines/` — 19 specimen cards for colour, type, spacing, shape and brand
- `assets/` — logos, posters, photography
- `thumbnail.html` — homepage tile
- `SKILL.md` — portable skill wrapper

### Components

Core: **Button**, **Tag**, **Card**, **StripeRule**, **Logo**
Forms: **Input**, **Textarea**, **Select**, **Checkbox**
Content: **SectionLabel**, **SectionHeading**, **StatBlock**, **PriceCard**, **PersonCard**, **FaqItem**, **Quote**
Navigation: **SiteHeader**, **SiteFooter**

No source defined a component inventory, so this is an authored set sized to the school's marketing site. **Intentional additions:** `StripeRule` (the logo's stripe motif as a reusable divider — the brand's one sanctioned decoration) and `Logo` (a lockup wrapper so the raster mark is never redrawn).

## Content fundamentals

**Language.** Russian, always. No English mixed in except handles (`@iveivs`).

**Person.** «Вы», never «ты» — the audience is adults. The school speaks as «мы» («учим», «ставим руки», «напишем в мессенджер»). Never «я».

**Tone.** Matter-of-fact, specific, unhurried. State what happens and how long it takes. No hype words (эксклюзивный, уникальный, лучший), no urgency (осталось 2 места!), no exclamation marks in body copy.

**Casing.** Display headings and labels are UPPERCASE — that is the brand's voice, inherited from the posters. Body copy is normal sentence case. Never capitalise mid-sentence for emphasis.

**Length.** Headings 2–5 words («РИТМ СТАВИТСЯ С НУЛЯ», «60 МИНУТ, ЧТОБЫ ПОПРОБОВАТЬ»). Leads one sentence. Body paragraphs two or three sentences max.

**The free lesson** is described honestly and concretely: «Бесплатное занятие — это не демо-версия, а обычный полный урок», «Занимает час, ничего не нужно приносить и ничего не нужно решать сразу». Never «БЕСПЛАТНО!!!», never a countdown.

**Objection handling** is plain: «Я взрослый и никогда не играл. Не поздно?» → «Нет. Большинство наших учеников начали после 25.» Answer first, explain second.

**Numbers** are written with a thin space and the ruble sign after: `1500 ₽`, `10 400 ₽`, `60 минут`, `8 (931) 00-77-390`. Prices and technical metadata are set in mono.

**Emoji: never.** No emoji anywhere — not in headings, buttons, lists or social copy. Unicode symbols are limited to `·` as a separator and `₽`.

**Vocabulary that belongs to the brand:** ритм, драйв, креатив, мышление, постановка, координация, грув, метроном, с нуля, пробный урок.

## Visual foundations

**Base.** Warm cream paper (`--cream-100` #F5EBE1) across every page; `--cream-50` for raised cards and `--cream-200` for alternating sections. Nothing is white.

**Ink.** Warm near-black (`--ink-900` #17120F) for type and for the one dark band per page. Never pure black, never cool gray.

**Accent.** A single brand red (`--red-500` #C62A1E). It carries actions, the mono section indices, active nav state and one emphasis word per view — nothing else. Muted olive and amber exist only as status colours. No second accent, no gradients, no neon.

**Colour pairings** are limited to four: ink on cream, cream on ink, cream on red, red on cream. See the “Approved pairings” card.

**Type.** One family, `Golos Text` (Cyrillic-native geometric grotesque), in two registers: display 800 uppercase at −0.035em / line-height 0.92 for posters and heroes, and 400–500 for body at line-height 1.55. The signature small type is 13/11px uppercase at **0.22em tracking**. `JetBrains Mono` carries prices, phone numbers, BPM and `01 02 03` indices.

**Layout.** 1240px container, 24px gutter, 12-column grid, `--section-y` clamp(72px, 10vw, 140px) between sections. Compositions are deliberately asymmetric: 1.15fr / 0.85fr hero, 0.7fr / 1.3fr FAQ. Text measures cap at 62ch (46ch for leads). Generous empty space on the left or right of a block is correct, not a gap to fill.

**Backgrounds.** Flat colour only. No gradients, no noise, no repeating textures other than the stripe motif, which is used at most once per section. Photography is inset within the grid or used at full-bleed on posters — never as a tinted background behind body text.

**Graphic elements.** The stripe sequence (`StripeRule`) and a solid red disc. Both reference repetition and timing. Explicitly forbidden: flames, grunge, neon, drumsticks as dividers, scattered musical notes, waveform decorations.

**Imagery.** The school's own photography. Hero and studio shots keep their warm colour; people and secondary shots are rendered grayscale with a slight contrast lift (`filter: grayscale(1) contrast(1.05)`), so colour reads as an editorial choice. Photo ratios: 3/4 hero, 4/3 studio, 4/5 portraits. Radius 4px.

**Corners.** Near-square: `--radius-1` 2px for buttons and slot chips, `--radius-2` 4px for cards and images, `--radius-pill` only for `Tag` and compact pill buttons. Nothing is app-rounded.

**Cards.** Flat: 4px radius, 1px hairline `rgba(23,18,15,.12)`, no resting shadow. Elevation is expressed by paper tone (`sunken` / `paper` / `ink`) and hairlines. On hover an interactive card lifts 2px, its border turns red, and a warm shadow appears (`--shadow-2`, 12/32px at −18px spread, 28% ink).

**Borders.** Three weights: 1px hairline (dividers, cards), 1.5px strong (buttons, outline cards, input underlines), 2px heavy (the rule above content blocks, the red rule on quotes).

**Forms.** Underline-only fields — no boxes, no fills. Caps label above, hint or error below in 15px. Checkbox is a 18px square that fills red with a small square tick.

**Hover.** Colour shift, never scale: red → `--red-600`, ink → `--ink-800`, outline inverts to ink fill, ghost text turns red and its underline turns red. Nav items get a red underline when active. Photos inside `PersonCard` scale 1.03 over 560ms.

**Press.** `translateY(1px)` plus the darker press red (`--red-700`). No shrink, no bounce, no ripple.

**Motion.** Purposeful and short: 120ms for colour, 200ms for movement, 320ms for accordion height, 560ms for image scale. Easing `cubic-bezier(.2,.7,.2,1)`. Fades and height reveals only — no bounce, no spring, no parallax, no scroll-jacking. All durations collapse to 0 under `prefers-reduced-motion`.

**Transparency & blur.** Effectively unused. Alpha appears only in hairlines and in shadows. No frosted glass, no protection gradients over images — captions sit outside images instead of on top of them. Text is always full-opacity ink on a flat ground.

**Fixed elements.** The header is static, not sticky, and the page has no floating chat bubbles or sticky CTA bars. The CTA reappears as real content instead.

**Focus.** 2px `--red-500` outline at 2px offset, never removed.

## Iconography

**The brand has no icon set, and none was invented.** The supplied material contains only the logo mark, type and photography. Rather than bolt on a third-party icon family, the system expresses affordances with type and geometry:

- Section indices — mono numerals `01 02 03` in red (`SectionLabel`, `PriceCard` feature lists, step lists).
- The FAQ accordion toggle is two 14×2px bars that rotate to form a plus/minus. It is drawn from primitives, not an icon font.
- `StripeRule` is the only graphic motif.
- The `Р` mark is a **raster asset** (`assets/logo-badge-light.png`, `logo-badge-dark.png`, `logo-p-solid-cream.png`). It must never be redrawn, retraced, recoloured or rebuilt as SVG.
- Unicode use is limited to `·` and `₽`. **No emoji, ever.**

If the school later needs a UI icon set (schedule, location, messengers), the closest match to this brand's line quality is Lucide at 1.5px stroke, CDN-linked — but that is a decision to confirm, not a default. Flagged as an open question below.

## Substitutions & gaps to confirm

1. **Font.** No font files were supplied. The posters use a heavy geometric grotesque with Cyrillic; the nearest Google Fonts match is **Golos Text** (weights 400–900), loaded from the Google CDN, with **JetBrains Mono** for numerals. If the school owns the real poster typeface, send the files and this system will be repointed.
2. **Logo files are raster PNGs** with baked backgrounds. Vector (SVG/AI) masters would let the mark scale, invert and sit on any ground cleanly.
3. **Prices beyond `1500 ₽ / 60 минут`** (the 4- and 8-lesson packages in the UI kit) are placeholders.
4. **Teacher names, bios and photos** — only the founder's photo exists; the other two `PersonCard`s are intentionally blank.
5. **No icon set** — see above.
