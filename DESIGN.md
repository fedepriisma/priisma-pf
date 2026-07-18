# DESIGN.md — Priisma quiet system

Source of truth: the `<style is:global>` block in `src/pages/index.astro`.
Revised July 18, 2026: lines removed, webfonts removed, four-size scale.
The homepage is self-contained; it does NOT use `src/styles/tailwind.css`
(that file serves the legacy `/portfolio`, `/about`, `/recraftr`, `/swatseo`
pages only).

## Color

Unchanged from the spec-sheet era: warm paper, near-black ink, hot coral.

| Token | Value | Use |
|---|---|---|
| `--paper` | `oklch(95% 0.008 85)` | Page background |
| `--ink` | `oklch(17% 0.012 60)` | Text, solid buttons, Showbliz band |
| `--accent` | `oklch(63% 0.19 33)` | Coral: stamp, rail, eyebrow in ink band, contact band, ::selection |
| `--accent-text` | `oklch(50% 0.185 33)` | Coral for small text on paper (AA) |

Bands carry structure: ink band (Showbliz), coral band (contact). No border
rules anywhere; separation is spacing and background changes only.

## Typography

System stack only, one family: `--sans: system-ui, -apple-system, "Segoe
UI", Roboto, "Helvetica Neue", Arial, sans-serif`. No webfonts, no mono.

Exactly four sizes (tokens, page-wide):

| Token | Value | Use |
|---|---|---|
| `--fs-caption` | 0.75rem | Smallest: captions, coords, meta, years, footer, ticker venues, toggle |
| `--fs-eyebrow` | 0.8125rem | Tags/eyebrows, buttons, brand, ticker titles |
| `--fs-body` | 1rem | Body, subs, notes, ledger names, cycle titles |
| `--fs-title` | `clamp(1.9rem, 1.45rem + 1.9vw, 2.75rem)` | h1, Showbliz title, mail, stat numbers |

Hierarchy leans on weight (800 titles, 650 emphasis, 600 eyebrows/buttons)
and uppercase+tracking for eyebrow/caption roles. Never add a fifth size.

## Layout

- No borders, no rules, no sheet frame. `--pad` inline padding +
  `--measure: 68rem` centered content blocks.
- Hero: centered text. Rail (`.hero-side`: spinning coral stamp, coordinates,
  ✳ palm) sits horizontal on top for mobile, vertical left column on desktop
  (`writing-mode: vertical-rl` coords), hero-main compensates with extra
  inline-end padding for optical centering.
- Cycle: quiet 4-up strip under the hero CTAs (numbers coral, caption size).
- Ledger: numbered rows, each with an 88×66 project screenshot
  (`.row-thumb`, object-fit cover, top crop). Every screenshot belongs to
  its own project.
- Footer: single caption-size flex row, no cells.

## Signature elements (kept through the redesign)

- Rotating circular stamp badge (coral SVG).
- ✳ palm glyph, coordinates line.
- Numbered markers (01–04 cycle, 001–005 ledger), coral.
- Showbliz ink band with live RSS ticker (`feed/today.xml`, build-time
  fetch, snapshot fallback, nightly rebuild) + Pause/Play control.

## Motion

Hero load reveal (rise, expo-out, staggered), stamp spin, ticker slide.
Nothing scroll-driven. `prefers-reduced-motion` kills all animation; ticker
becomes a scrollable strip.

## Accessibility

- Four-size scale keeps captions at 12px minimum; contrast tokens AA.
- Ticker: `role="marquee"`, visible Pause/Play (WCAG 2.2.2), offscreen
  idling via IntersectionObserver.
- Links ≥24px targets (padding-block on caption-size links).
- Focus: 2px coral outline (ink outline inside the coral band).

## Legacy (do not extend)

`src/styles/tailwind.css` powers old sub-pages only. Archivo + Martian Mono
and all ink-border spec-sheet styling are retired; do not reintroduce.
