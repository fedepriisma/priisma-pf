# DESIGN.md — Priisma spec-sheet system

Source of truth: the `<style is:global>` block in `src/pages/index.astro`.
The homepage is self-contained; it does NOT use `src/styles/tailwind.css`
(that file serves the legacy `/portfolio`, `/about`, `/recraftr`, `/swatseo`
pages only).

## Color

Strategy: Restrained with one committed accent. Warm paper, near-black ink,
hot coral. Nothing else.

| Token | Value | Use |
|---|---|---|
| `--paper` | `oklch(95% 0.008 85)` | Page + sheet background |
| `--ink` | `oklch(17% 0.012 60)` | Text, borders, inverted panels |
| `--accent` | `oklch(63% 0.19 33)` | Hot coral: stamps, highlights, ::selection |
| `--accent-text` | `oklch(50% 0.185 33)` | Coral for small text on paper (AA) |
| `--line` | `1.5px solid var(--ink)` | Every structural border |

Rules: no other hues. Inverted sections are ink bg / paper text (Showbliz
panel, CURRENT FOCUS footer cell). Selection = accent bg, paper text.
`theme-color` meta = `#f2efe9`.

## Typography

| Token | Font | Use |
|---|---|---|
| `--display` | Archivo variable, `wdth 62..80, wght 700..900` | Condensed-black uppercase display headings (target wdth ~68, wght 900) |
| `--mono` | Martian Mono 400/700 | ALL body, labels, spec cells, nav, footer |

Body: 1rem, line-height 1.65. Loaded via Google Fonts in index.astro head.
No third typeface, ever.

## Layout

- Whole page framed in a `.sheet` with `--line` borders; body padding
  `clamp(0.5rem, 1.5vw, 1.25rem)` shows paper around the sheet.
- Section padding: `--pad: clamp(1.1rem, 3.5vw, 2.75rem)`.
- Sections divided by full `--line` rules, spec-sheet style: numbered cells
  (01–04 cycle), segmented footer strip, coordinates line.
- Grid cells with `border-inline-start/end: var(--line)`; no cards, no
  shadows, no rounded corners.

## Signature elements

- Rotating circular stamp badge (SVG, accent).
- ✳ palm glyph as ornament.
- `.hl` inverted-highlight words (ink bg, paper text) inside display headings.
- Numbered archive list 001–005; numbered method cells 01–04.
- Showbliz panel: ink background, live RSS marquee ticker from
  `https://showbliz.com/feed/today.xml` (build-time fetch, snapshot fallback,
  nightly cron rebuild in `.github/workflows/deploy.yml`).

## Motion

- Marquee ticker (continuous, pausable, `prefers-reduced-motion` respected).
- Rotating stamp. Nothing else animates. No scroll effects, no fades.

## Accessibility

- `--accent-text` exists because raw accent fails AA at small sizes on paper.
- Focus: `outline: 2px solid var(--accent)`.
- Padded ticker repeats are `aria-hidden` so screen readers hear each show
  once.

## Legacy (do not extend)

`src/styles/tailwind.css` (Mona Sans / Instrument Serif, whiterabbit,
gradients) powers old sub-pages only. New work follows the spec-sheet system
above.
