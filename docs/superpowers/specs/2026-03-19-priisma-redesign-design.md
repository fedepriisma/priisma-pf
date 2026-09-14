# Priisma Full-Site Redesign — Design Spec
**Date:** 2026-03-19
**Status:** Approved for implementation

---

## 1. Design Direction

### Aesthetic
Neobrutalism + minimalism + Evangelion — the synthesis of directions B and C from the brainstorm. Dark hero sections with system-like precision, cool blue-grey body sections, red + yellow accent language, and Instrument Serif headlines with a glow. Structured, confrontational, and quietly elegant.

### Personality
A studio that knows what it's doing and doesn't need to shout about it. Bold propositions, restrained execution, work that compounds.

---

## 2. Color System

Update these two tokens in `src/styles/tailwind.css`. Everything using `bg-paper` and `bg-mist` will automatically pick up the new cool values.

| Token | Old value | New value | Use |
|---|---|---|---|
| `--color-paper` | `oklch(0.985 0.006 70)` | `oklch(0.955 0.006 240)` | Light section backgrounds (≈ #F0F2F5) |
| `--color-mist` | `oklch(0.93 0.006 70)` | `oklch(0.92 0.006 240)` | Secondary light surfaces, nested tiles (≈ #E8EBF0) |

**Verify oklch values visually in browser** before finalizing — confirm `paper` reads as a neutral cool off-white (not grey, not blue) and `mist` reads slightly darker than `paper`. Adjust chroma if needed.

All other existing color tokens remain unchanged. No new tokens are introduced — `#0d0d0d` and `#111` are written inline or as Tailwind arbitrary values where needed.

### Color usage reference
| Context | Color |
|---|---|
| Hero / dark section background | `bg-[#0d0d0d]` |
| Light section background | `bg-paper` |
| Nested card surfaces (dark) | `bg-[#111]`, `bg-[#161616]` etc. |
| Nested card surfaces (light) | `bg-mist` |
| Display/accent 1 | `text-red` / `border-red` / `bg-red` — eyebrows, numbers, dividers |
| Display/accent 2 | `text-yellow` / `bg-yellow` — metrics, highlights, CTA buttons |
| Body text on dark | `text-white` / `text-paper` |
| Body text on light | `text-ink` |

---

## 3. Typography

No changes to the font stack — it's already correct.

- **Display:** `font-display` → `Instrument Serif` — h1/h2/h3 and large project names
- **Body:** `font-body` → `Mona Sans` — body copy, UI labels, eyebrows, nav links
- **Mono:** existing — numbered indexes, dates

### Heading glow (keep exactly as-is)
The following rule already exists in `tailwind.css` and must not be changed:
```css
h1, h2, h3, .heading-glow {
  text-shadow:
    0px 0px 4px oklch(from currentColor clamp(0, calc(l + 0.38), 1) c h / 0.6),
    0px 0px 12px oklch(from currentColor clamp(0, calc(l + 0.22), 1) c h / 0.22),
    0px 2px 3px oklch(from currentColor clamp(0, calc(l - 0.25), 1) c h / 0.45);
}
```
This adapts to any text color — it will glow correctly on both dark (`text-white`) and light (`text-ink`) sections without modification.

---

## 4. Navigation (Nav.astro — full rebuild)

### Layout
```
[PRIISMA]        [Work]  [About]  [Contact]     [Start a project →]
──────────────────────────────────────────────────────────────────
```
- Container: `max-w-7xl`, `mx-auto`, `px-6 sm:px-12 lg:px-16`
- Height: `56px` on desktop
- Background: `bg-[#0d0d0d]`
- Bottom border: `border-b-2 border-white/20`
- Sticky, `z-50`

### Logo
- Text: `PRIISMA`
- Font: `font-body` (Mona Sans), `font-black` (weight 900), `text-xs`, `tracking-[0.2em]`, `uppercase`
- Color: `text-white`

### Nav links
- Font: `font-body`, `font-bold` (weight 700), `text-xs`, `tracking-[0.12em]`, `uppercase`
- Color: `text-white/60`, hover `text-white`
- Transition: `transition-colors duration-150`
- Gap between links: `gap-6`

### CTA button
- Text: `Start a project →`
- Style: `bg-yellow text-ink font-extrabold text-xs tracking-[0.1em] uppercase px-4 py-2 border-2 border-yellow`
- No `border-radius` (squared)
- Hover: `bg-yellow/90`

### Mobile (< `md` breakpoint)
- Hide nav links and CTA
- Show hamburger (3 bars, white, 20px)
- On open: full-screen `fixed inset-0 bg-[#0d0d0d] z-50` overlay
  - Links stacked vertically, centered, Instrument Serif, `text-2xl`, white, 40px gap
  - Close button: `×` top-right, `text-2xl text-white/60`
  - Animate: overlay fades in `opacity-0 → opacity-100` over `200ms`
  - Nav links stagger in: each link `translateY(8px) → 0` + `opacity-0 → 1`, 60ms apart

---

## 5. Homepage — Section Inventory

### 5.1 Hero
- **Background:** `bg-[#0d0d0d]`
- **Text:** `text-white`
- **Min height:** `min-h-screen`
- **Padding:** `section-space`

**Content (top to bottom):**
1. Availability badge: `<span>` with 8px yellow dot + `"Now booking Q2 2026"` — `text-xs text-white/50`
2. Eyebrow: `"PRODUCT DESIGN STUDIO · MIAMI"` — `text-xs font-bold tracking-[0.25em] uppercase text-red`, `mt-8`
3. H1: `"We don't design\nscreens. We design\nsystems."` — `font-display text-5xl leading-[0.97] tracking-tight text-white max-w-3xl`, `mt-3`
4. Secondary line: `"Built to scale without losing what makes them good."` — `font-body text-base text-white/45 max-w-sm`, `mt-5`
5. Red divider: `<div class="w-8 h-px bg-red mt-6"></div>`
6. CTAs row (`mt-8 flex flex-wrap items-center gap-4`):
   - Primary: `"See the work →"` — `bg-yellow text-ink font-extrabold text-sm tracking-[0.1em] uppercase px-6 py-3 border-2 border-yellow`
   - Ghost: `"Start a conversation ↓"` — `text-sm font-medium text-white/60 underline underline-offset-4 hover:text-white`

### 5.2 Work Section
- **Background:** `bg-paper`
- **Top border:** `border-t-2 border-ink`
- **Padding:** `section-space`

**Section eyebrow:** `"Selected work"` — red, `text-xs tracking-[0.22em] uppercase font-bold`, `mb-4`

#### Featured block (Cigarwell)
Two-column grid `grid grid-cols-[5fr_3fr] gap-[3px]`. On mobile (`< md`): single column.

**Main tile** — `bg-white border-2 border-ink p-6 relative overflow-hidden`:
- CSS grid texture (pseudo-element): `background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: 24px 24px; position: absolute; inset: 0; pointer-events: none`
- Red label: `"Featured · 2023–2024"` — `text-red text-xs font-bold tracking-[0.15em] uppercase`
- Project name: `font-display text-[40px] text-ink leading-[0.95] tracking-tight` — Instrument Serif with glow
- Descriptor: `font-body text-xs text-ink/60 leading-relaxed max-w-[260px] mt-3`
- Metric: large number `text-3xl font-black text-red leading-none mt-4` + label `text-xs text-ink/50 tracking-[0.1em] uppercase mt-1`
- CTA: `"View case study →"` — `bg-ink text-paper text-xs font-extrabold tracking-[0.1em] uppercase px-4 py-2 mt-4 inline-block`

**Side tiles** (airTRFX, MCH Anywhere, GoDark) — `bg-mist border border-[#d0d4dc] p-4` stacked `flex flex-col gap-[3px]`, each `flex-1`:
- Height: all three tiles together match the main tile height via `flex` stretch
- Project name: `font-display text-lg text-ink leading-none` — glow
- Discipline: `text-xs text-ink/50 font-bold tracking-[0.1em] uppercase mt-1`
- Hover: `border-color → border-ink` transition 150ms

**QuotingBill** does not appear in the featured or side tiles — it appears only in the index list below.

#### Index list
Immediately below featured block (`mt-1` to close the 3px gap feel). No section break.

Column layout: `grid grid-template-columns: 28px 1fr 160px 60px gap-x-4`.
On mobile (`< md`): `grid-template-columns: 28px 1fr`, hide discipline + year columns.

**Header row:** `border-b-2 border-ink pb-3 mb-0` — labels `text-xs font-bold tracking-[0.15em] uppercase text-ink/30`

**Each row** (`border-b border-[#d0d4dc] py-[14px] relative cursor-pointer`):
- Hover: `background: rgba(0,0,0,0.03)`, extend to full bleed with `mx-[-28px] px-[28px]` (negative margin trick). Arrow `→` appears at far right (`absolute right-0`, transitions from `opacity-0 translateX(-6px)` → `opacity-100 translateX(0)` in 150ms).
- Number: `text-xs text-red font-bold font-mono`
- Project name: `font-display text-[22px] text-[#1a1a1a] leading-none` — glow
- Discipline: `text-xs text-[#888] font-bold tracking-[0.1em] uppercase`
- Year: `text-xs text-[#bbb] font-mono text-right`
- **Image preview:** `position: absolute; right: 40px; top: 50%; transform: translateY(-50%) scale(0.92); width: 140px; height: 88px; border: 2px solid #000; box-shadow: 4px 4px 0 #000; z-index: 20; overflow: hidden; opacity: 0; transition: opacity 180ms ease-out, transform 180ms ease-out`. On row hover: `opacity: 1; transform: translateY(-50%) scale(1)`. Image: `object-fit: cover; width: 100%; height: 100%`. The preview overlaps the discipline/year columns — that's intentional and acceptable. Uses the project's hero image (`src/pages/portfolio/...`).

**Index order:** Cigarwell (001), airTRFX (002), MCH Anywhere (003), GoDark (004), QuotingBill (005).

### 5.3 Services
- **Background:** `bg-[#0d0d0d]`
- **Top border:** `border-t border-white/10`
- **Text:** `text-white`
- **Padding:** `section-space`

**Header:**
- Eyebrow: `"Where we bring the most value"` — red, small caps
- H2: `"Senior design expertise,\nwithout the full-time overhead."` — `font-display text-5xl text-white leading-[0.97] tracking-tight max-w-2xl`
- Subhead: `"From product direction to hands-on execution."` — `font-body text-base text-white/45 mt-4`

**4-column grid** (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12`):
Each card: `pl-4 border-l-2 border-yellow`
- Icon: `opacity-50 mb-3` (keep existing SVG icons)
- Service name: `font-display text-xl font-normal text-white leading-tight mb-2` — Instrument Serif, ~20px, weight 400 (Serif regular), glow
- Descriptor: `font-body text-xs text-white/45 leading-relaxed mb-4`
- List items: `font-body text-sm text-white/50 list-none space-y-1`

### 5.4 About / Fede
- **Background:** `bg-paper`
- **Top border:** `border-t-2 border-ink`
- **Padding:** `section-space`

2-column grid (`md:grid-cols-2 gap-12`). On mobile: stacks, portrait first.
- H2: `"Hi, I'm Fede."` — `font-display text-5xl text-ink leading-[0.97] tracking-tight`
- Portrait: `max-w-xs border-2 border-ink` (no border-radius) + `box-shadow: 6px 6px 0 #000` + `mt-8`
- Bio copy: `font-body text-base text-ink space-y-4` — use existing copy from homepage `index.astro`

### 5.5 Testimonials
- **Background:** `bg-[#0d0d0d]`
- **Top border:** `border-t border-white/10`
- **Text:** `text-white`
- **Padding:** `section-space`

- Eyebrow: `"What clients say"` — red
- 2-column grid (`md:grid-cols-2 gap-12 mt-10`). On mobile: 1 column.
- Each quote: `font-display italic text-2xl text-white leading-snug` — Instrument Serif with glow
- Attribution: `font-body text-sm text-white/35 mt-4`
- Placeholder content stays until real quotes are confirmed.

### 5.6 How We Work + Engagement
- **Background:** `bg-paper`
- **Top border:** `border-t-2 border-ink`
- **Padding:** `section-space`

2-column grid (`md:grid-cols-2 gap-16`).

**Left — Process:**
- H2: `"Thoughtful process.\nNo unnecessary complexity."` — `font-display text-5xl text-ink leading-[0.97] tracking-tight max-w-sm`
- Numbered steps: large faded numeral `font-display text-4xl text-ink/15 leading-none shrink-0` + step text `font-body text-base text-ink`
- Footer note: `font-body text-sm text-ink/50 mt-4`

**Right — Engagement types:**
- Eyebrow: `"How we engage"` — red, `mb-8`
- Each type: `pl-4 border-l-2 border-yellow space-y-8`
  - Type name: `eyebrow mb-1` (keep existing class)
  - Duration: `text-xs text-ink/50 mb-2`
  - Description: `text-sm text-ink/70`

### 5.7 Diagnostic Tool
- **Background:** `bg-[#0d0d0d]`
- **Top border:** `border-t border-white/10`
- **Padding:** `section-space`

- Eyebrow: `"Design Health Check"` — red
- H2: `"Where does your product design stand?"` — `font-display text-5xl text-white leading-[0.97] tracking-tight`
- Sub: `"3 questions. 30 seconds."` — `text-base text-white/45 mt-4`
- DiagnosticTool component: needs internal color update (see Section 9)

### 5.8 Contact
- **Background:** `bg-[#0d0d0d]`
- **Top border:** `border-t-2 border-yellow` (yellow top border — intentional anchor)
- **Text:** `text-white`
- **Padding:** `section-space`

- H2: `"Building something interesting?"` — `font-display text-5xl text-white leading-[0.97] tracking-tight`
- Sub: `"Let's talk."` — `text-base text-white/60 mt-4`
- Primary CTA: `"fede@priisma.com"` — `text-lg font-bold text-yellow border-b-2 border-yellow pb-1 hover:text-white hover:border-white` transition 150ms
- Secondary: `"Book a 30-min intro call →"` — `text-base text-white/50 border-b border-white/25 pb-px hover:text-yellow hover:border-yellow` transition 150ms
- LinkedIn: `text-sm text-white/35 hover:text-white` — inline SVG icon + text

---

## 6. Case Study Pages — What Changes vs. What Stays

### What stays (do not touch)
- Hero section gradient backgrounds (each page's `--*-gradient` CSS custom property)
- Hero text color per page (`text-paper`, `text-sunset`, etc.)
- All copy, image references, PhotoSwipe gallery markup
- Section structure order: hero → challenge/approach → numbered sections → result → credits → CTA

### Per-page hero color reference
| Page | Hero gradient | Hero text color |
|---|---|---|
| airTRFX | `bg-linear-(--skyfly-gradient)` | `text-paper` |
| MCH Anywhere | `bg-linear-(--mch-gradient)` | `text-sunset` |
| GoDark | `bg-linear-(--gd-gradient)` | `text-paper` |
| Cigarwell | `bg-linear-(--cw-gradient)` | `text-paper` (verify in file) |
| QuotingBill | `bg-linear-(--qb-gradient)` | `text-paper` (verify in file) |

### What changes (apply to all 5 case study pages)

**Hero section:**
- Layout: eyebrow (`text-xs font-bold tracking-[0.25em] uppercase opacity-60`) + sub-eyebrow (disciplines) + H1 (`font-display text-5xl leading-[0.97] tracking-tight`) + descriptor + hero image
- No color changes to the hero — text and background colors stay per-page

**All body sections (`bg-paper`, `bg-mist`, `bg-ink` alternating):**
- `bg-mist` → `bg-paper` (the new cool paper unifies all light sections)
- `bg-paper` → `bg-paper` (already correct after token update)
- `bg-ink` → stays `bg-ink` (dark sections)
- Section headers (h2): already `font-display` + glow — no changes needed, new system inherits automatically
- Eyebrows: add `text-red` where eyebrows are currently just `opacity-60`

**CTA/bottom section:**
- Replace current CTA block with the standard contact block from 5.8 (same dark bg, yellow border-top, email + calendar link)
- `"← Back to work"` link: `text-sm font-bold text-white/50 underline underline-offset-4 hover:text-white`

---

## 7. About Page (full rebuild)

Currently outdated. Full rebuild matching new system.

- Same brutalist nav
- **Hero:** `bg-[#0d0d0d] min-h-[50vh] section-space` — eyebrow `"About"` (red) + H1 `"Hola, I'm Fede."` (white Instrument Serif glow)
- **Bio section:** `bg-paper border-t-2 border-ink section-space` — 2-col grid, portrait left, bio copy right (same as homepage 5.4 but this page can have longer form bio)
- **Contact block:** same as homepage 5.8
- **Footer:** same footer component

---

## 8. Motion — Precise (Option B)

### Scroll reveals
- Mechanism: `IntersectionObserver`, threshold `0.1`, `once: true`
- Initial state: `opacity: 0; transform: translateY(12px)`
- Animated state: `opacity: 1; transform: translateY(0)`
- Duration: `400ms`, easing: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out)
- Apply `.scroll-reveal` class to: section headers, eyebrows, body paragraphs, cards, form elements — each as a single unit
- Stagger for list contexts (service cards, engagement types, process steps, testimonials, work index rows): each item delays by `60ms × index`. Maximum 4 items stagger (items beyond 4 all use the 4th delay, i.e., `240ms`).
- Respect `prefers-reduced-motion`: if set, skip all transform/opacity animation (render immediately visible)

### Hover transitions
All interactive elements: `transition: all 150ms ease`
- Nav links: `color` fade
- Nav CTA: `background-color` shift
- Work index rows: `background-color` + arrow `opacity` + arrow `transform`
- Image preview: `opacity` + `scale` — 180ms `ease-out`
- Featured tile side cards: `border-color` shift
- CTA buttons: `background-color` shift

### No parallax, no cursor effects, no page transitions.

---

## 9. Component: DiagnosticTool.astro

The tool lives in a dark (`#0d0d0d`) section. Update color classes for legibility:

- All body text: `text-white` (or `text-white/80` for secondary)
- Question text: `text-white`
- Option buttons (unselected): `border-white/20 text-white/70 bg-transparent hover:border-white/50`
- Option buttons (selected): `border-yellow bg-yellow/10 text-yellow`
- Progress indicators: `bg-white/20` (inactive), `bg-red` (active)
- Submit / CTA button: `bg-yellow text-ink font-extrabold border-2 border-yellow`
- Success state text: `text-white`
- Input fields: `bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-yellow`
- Error messages: `text-red`

No logic, copy, or API changes.

---

## 10. Footer (Footer.astro)

Minimal update — color alignment only. Keep existing structure and content.
- Background: `bg-[#0d0d0d]`
- Top border: `border-t border-white/10`
- Text: `text-white/40`
- Links: `text-white/50 hover:text-white`
- No layout restructure needed.

---

## 11. CSS / Tailwind Changes (tailwind.css)

### Token updates
```css
/* Change these two values: */
--color-paper: oklch(0.955 0.006 240);   /* was oklch(0.985 0.006 70) */
--color-mist:  oklch(0.92 0.006 240);    /* was oklch(0.93 0.006 70) */
```

### New utility class
```css
@layer base {
  .scroll-reveal {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 400ms cubic-bezier(0.16, 1, 0.3, 1),
                transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .scroll-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
}
```

### Inline JS for IntersectionObserver (add once to a shared layout or index.astro `<script>`)
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = Math.min(i, 4) * 60;
      setTimeout(() => entry.target.classList.add('revealed'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
```

### Existing utility updates
- `.primary-cta`: add `rounded-none font-extrabold tracking-[0.1em] uppercase` — remove any implicit border-radius
- `.section-header`: add `leading-[0.97]` — tighten line-height
- `.nav-floater`: will be replaced entirely by new Nav.astro markup

---

## 12. Files to Touch

| File | Type of change |
|---|---|
| `src/styles/tailwind.css` | Token updates, new `.scroll-reveal` utility, `.primary-cta` update |
| `src/components/Nav.astro` | Full rebuild |
| `src/components/Footer.astro` | Color class updates only |
| `src/components/DiagnosticTool.astro` | Color class updates only |
| `src/pages/index.astro` | Full homepage rebuild |
| `src/pages/about.astro` | Full page rebuild |
| `src/pages/work/cigarwell.astro` | Layout system update |
| `src/pages/work/airtrfx.astro` | Layout system update |
| `src/pages/work/mchanywhere.astro` | Layout system update |
| `src/pages/work/godark.astro` | Layout system update |
| `src/pages/work/quotingbill.astro` | Layout system update |
| `src/pages/404.astro` | Color + style updates |
