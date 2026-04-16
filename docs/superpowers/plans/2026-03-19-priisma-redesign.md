# Priisma Full-Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire Priisma portfolio site with a neobrutalism + Evangelion aesthetic — dark hero sections, cool blue-grey body sections, Instrument Serif headlines with glow, brutalist nav, and precise microanimations.

**Architecture:** Token-first approach — update CSS variables in `tailwind.css` first so all downstream `bg-paper`/`bg-mist` references pick up new cool values automatically. Rebuild shared components (Nav, Footer), then homepage section-by-section, then case study pages (layout system applied, hero color palettes preserved), then remaining pages.

**Tech Stack:** Astro v6, TailwindCSS v4, Instrument Serif (Google Fonts, already loaded), Mona Sans, IntersectionObserver API, gstack headless browser for visual QA.

**Spec:** `docs/superpowers/specs/2026-03-19-priisma-redesign-design.md`

**Dev server:** `cd /Users/altair/Public/sites/priisma-pf && npm run dev` → http://localhost:4321
**Build check:** `npm run build`
**Visual QA:** Use gstack `$B goto http://localhost:4321 && $B screenshot /tmp/check.png` — read the PNG with the Read tool after each screenshot.

---

## Task 1: Update CSS color tokens + add scroll-reveal utility

**Files:**
- Modify: `src/styles/tailwind.css`

- [ ] **Step 1: Update the two color tokens**

In `src/styles/tailwind.css`, find and replace these two lines inside `@theme { ... }`:

```css
/* BEFORE */
--color-paper: oklch(0.985 0.006 70);
--color-mist: oklch(0.93 0.006 70);

/* AFTER */
--color-paper: oklch(0.955 0.006 240);
--color-mist:  oklch(0.92 0.006 240);
```

- [ ] **Step 2: Add scroll-reveal utility inside `@layer base { ... }`**

Add at the end of the `@layer base` block (before the closing `}`):

```css
  /* Scroll reveal — managed by IntersectionObserver in JS */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(12px);
    transition:
      opacity 400ms cubic-bezier(0.16, 1, 0.3, 1),
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

  /* Brutalist offset shadow — used on portrait and featured tile */
  .shadow-brutal {
    box-shadow: 6px 6px 0 #000;
  }
  .shadow-brutal-sm {
    box-shadow: 4px 4px 0 #000;
  }
```

- [ ] **Step 3: Update `.primary-cta` to remove border-radius and tighten**

Find `.primary-cta` in `tailwind.css` and update:

```css
.primary-cta {
  @apply font-extrabold tracking-[0.1em] uppercase text-paper bg-ink rounded-none border-2 border-ink hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink/50 px-6 py-3 inline-block mt-8;
}
```

- [ ] **Step 4: Update `.section-header` line-height**

Find `.section-header` and change to:
```css
.section-header {
  @apply text-5xl font-display tracking-tight leading-[0.97];
}
```

- [ ] **Step 5: Start dev server and verify no errors**

```bash
cd /Users/altair/Public/sites/priisma-pf && npm run dev
```
Expected: server starts at http://localhost:4321, no compilation errors in terminal.

- [ ] **Step 6: Take screenshot and verify cool paper tone**

```bash
$B goto http://localhost:4321
$B screenshot /tmp/task1-tokens.png
```
Read `/tmp/task1-tokens.png`. The page background should now be a noticeably cooler grey-blue (not warm cream). If it still looks warm, the oklch value needs more chroma — try `oklch(0.955 0.010 240)`.

- [ ] **Step 7: Commit**

```bash
cd /Users/altair/Public/sites/priisma-pf
git add src/styles/tailwind.css
git commit -m "feat: update color tokens to cool blue-grey + add scroll-reveal utility"
```

---

## Task 2: Rebuild Nav.astro (brutalist)

**Files:**
- Modify: `src/components/Nav.astro` (full rewrite — keep the same file, replace all content)

The current nav has a `HomeLink` sub-component and a dropdown for Work items. The new nav is a single dark bar — no dropdown, links go directly to homepage sections or case study pages.

- [ ] **Step 1: Rewrite Nav.astro**

Replace the entire file with:

```astro
---
// Nav.astro — brutalist dark nav
---

<nav
  class="flex items-center justify-between h-14 mx-auto max-w-7xl px-6 sm:px-12 lg:px-16"
  aria-label="Primary"
>
  <!-- Logo -->
  <a
    href="/"
    class="font-body font-black text-xs tracking-[0.2em] uppercase text-white opacity-100 hover:opacity-70 transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
  >
    Priisma
  </a>

  <!-- Desktop links -->
  <ul class="hidden md:flex items-center gap-6 list-none">
    <li>
      <a href="/#work" class="font-body font-bold text-xs tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]">
        Work
      </a>
    </li>
    <li>
      <a href="/#about" class="font-body font-bold text-xs tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]">
        About
      </a>
    </li>
    <li>
      <a href="/#contact" class="font-body font-bold text-xs tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]">
        Contact
      </a>
    </li>
    <li>
      <a
        href="mailto:fede@priisma.com"
        class="font-body font-extrabold text-xs tracking-[0.1em] uppercase bg-yellow text-ink px-4 py-2 border-2 border-yellow rounded-none hover:bg-yellow/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
      >
        Start a project →
      </a>
    </li>
  </ul>

  <!-- Mobile hamburger -->
  <button
    class="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none focus:ring-2 focus:ring-yellow"
    aria-expanded="false"
    aria-controls="mobile-nav-overlay"
    id="nav-hamburger"
    type="button"
  >
    <span class="sr-only">Open navigation</span>
    <span class="hamburger-bar block w-5 h-0.5 bg-white origin-center transition-transform duration-200"></span>
    <span class="hamburger-bar block w-5 h-0.5 bg-white origin-center transition-[transform,opacity] duration-200"></span>
    <span class="hamburger-bar block w-5 h-0.5 bg-white origin-center transition-transform duration-200"></span>
  </button>
</nav>

<!-- Mobile full-screen overlay -->
<div
  id="mobile-nav-overlay"
  class="fixed inset-0 bg-[#0d0d0d] z-[100] flex flex-col items-center justify-center gap-10 opacity-0 pointer-events-none transition-opacity duration-200"
  aria-hidden="true"
>
  <!-- Close button -->
  <button
    id="nav-close"
    class="absolute top-4 right-6 text-2xl text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow"
    type="button"
    aria-label="Close navigation"
  >
    ×
  </button>

  <ul class="flex flex-col items-center gap-8 list-none" id="mobile-nav-links">
    <li>
      <a href="/#work" class="font-display italic text-3xl text-white opacity-0 translate-y-2 transition-[opacity,transform] duration-300 hover:text-yellow">
        Work
      </a>
    </li>
    <li>
      <a href="/#about" class="font-display italic text-3xl text-white opacity-0 translate-y-2 transition-[opacity,transform] duration-300 hover:text-yellow">
        About
      </a>
    </li>
    <li>
      <a href="/#contact" class="font-display italic text-3xl text-white opacity-0 translate-y-2 transition-[opacity,transform] duration-300 hover:text-yellow">
        Contact
      </a>
    </li>
    <li>
      <a href="mailto:fede@priisma.com" class="font-body font-extrabold text-sm tracking-[0.1em] uppercase bg-yellow text-ink px-6 py-3 border-2 border-yellow opacity-0 translate-y-2 transition-[opacity,transform] duration-300">
        Start a project →
      </a>
    </li>
  </ul>
</div>

<script>
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('nav-close');
  const links = overlay?.querySelectorAll('#mobile-nav-links a');

  function openNav() {
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    overlay?.setAttribute('aria-hidden', 'false');
    hamburger?.setAttribute('aria-expanded', 'true');
    // Stagger link reveals
    links?.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', 'translate-y-2');
      }, i * 60);
    });
  }

  function closeNav() {
    overlay?.classList.add('opacity-0', 'pointer-events-none');
    overlay?.setAttribute('aria-hidden', 'true');
    hamburger?.setAttribute('aria-expanded', 'false');
    links?.forEach(link => link.classList.add('opacity-0', 'translate-y-2'));
  }

  hamburger?.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', closeNav);
  overlay?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
</script>
```

- [ ] **Step 2: Update `.nav-floater` in `tailwind.css` to match new dark bg**

Find `.nav-floater` and replace:
```css
.nav-floater {
  @apply sticky z-50 border-b top-0 border-white/20 bg-[#0d0d0d];
}
```

- [ ] **Step 3: Verify nav renders correctly**

```bash
$B goto http://localhost:4321
$B screenshot /tmp/task2-nav.png
```
Read the screenshot. Nav should be dark with white logo + links, yellow CTA button. Check mobile by resizing:
```bash
$B viewport 390x844
$B screenshot /tmp/task2-nav-mobile.png
```
Read it. Should show hamburger button only.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.astro src/styles/tailwind.css
git commit -m "feat: rebuild Nav to brutalist dark bar with full-screen mobile overlay"
```

---

## Task 3: Update Footer.astro

**Files:**
- Modify: `src/components/Footer.astro`

The footer already uses `bg-black` and yellow tones — minor update only to align with new system.

- [ ] **Step 1: Update footer colors**

Replace entire file with:

```astro
---
const year = new Date().getFullYear();
---

<footer class="border-t border-white/10 py-8 bg-[#0d0d0d]">
  <div class="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <nav aria-label="Footer navigation" class="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold tracking-[0.1em] uppercase text-white/40">
      <a href="/#work" class="hover:text-white motion-safe:transition-colors duration-150">Work</a>
      <a href="/#about" class="hover:text-white motion-safe:transition-colors duration-150">About</a>
      <a href="mailto:fede@priisma.com" class="hover:text-white motion-safe:transition-colors duration-150">fede@priisma.com</a>
      <a href="https://www.linkedin.com/in/fedebozo/" target="_blank" rel="noopener noreferrer" class="hover:text-white motion-safe:transition-colors duration-150">
        LinkedIn<span class="sr-only"> (opens in new tab)</span>
      </a>
    </nav>
    <p class="text-xs text-white/25 font-mono">© {year} Priisma · Miami, FL</p>
  </div>
</footer>
```

- [ ] **Step 2: Verify and commit**

```bash
$B goto http://localhost:4321
$B scroll
$B screenshot /tmp/task3-footer.png
```
Read screenshot. Footer should be dark with muted white text.

```bash
git add src/components/Footer.astro
git commit -m "feat: update footer to dark system colors"
```

---

## Task 4: Update DiagnosticTool.astro colors

**Files:**
- Modify: `src/components/DiagnosticTool.astro`

The tool lives in a dark section. Only color classes change — no logic, copy, or API changes.

- [ ] **Step 1: Read the current file**

Read `src/components/DiagnosticTool.astro` fully before making any changes.

- [ ] **Step 2: Replace color classes throughout the file**

Apply these replacements (use replace-all where applicable):

| Find | Replace | Notes |
|---|---|---|
| `text-ink` (on non-CTA elements) | `text-white` | Body text |
| `bg-paper` | `bg-white/10` | Input backgrounds |
| `bg-mist` | `bg-white/5` | Secondary backgrounds |
| `border-current/20` | `border-white/20` | Borders |
| `border-ink` | `border-white/30` | Borders |
| `placeholder:text-ink/40` | `placeholder:text-white/30` | Input placeholders |
| `focus:ring-woodstock` | `focus:ring-yellow` | Focus rings |
| Option buttons (unselected): add `text-white/70 border-white/20` | | |
| Option buttons (selected state): add `border-yellow bg-yellow/10 text-yellow` | | |
| Progress dots inactive: `bg-ink/20` → `bg-white/20` | | |
| Progress dots active: keep red or set `bg-red` | | |
| CTA/submit button: ensure `bg-yellow text-ink font-extrabold border-2 border-yellow rounded-none` | | |
| Input fields: `bg-white/10 border-white/20 text-white` + `focus:border-yellow focus:ring-0` | | |

- [ ] **Step 3: Verify tool renders correctly in dark context**

```bash
$B goto http://localhost:4321
$B scroll "#diagnostic"
$B screenshot /tmp/task4-diagnostic.png
```
Read screenshot. Tool should be readable on dark background — white text, yellow CTAs.

- [ ] **Step 4: Commit**

```bash
git add src/components/DiagnosticTool.astro
git commit -m "feat: update DiagnosticTool colors for dark section context"
```

---

## Task 5: Homepage — Hero section

**Files:**
- Modify: `src/pages/index.astro` (hero section only — leave all other sections for now)

- [ ] **Step 1: Replace the hero section**

In `index.astro`, find the `<!-- HERO -->` section comment and replace the entire `<section id="home" ...>` block with:

```astro
<!-- HERO -->
<section id="home" class="section-space min-h-screen bg-[#0d0d0d] text-white flex items-start">
  <div class="mx-auto max-w-7xl w-full">
    <!-- Availability badge -->
    <p class="inline-flex items-center gap-2 text-xs text-white/50">
      <span class="w-2 h-2 rounded-full bg-yellow shrink-0" aria-hidden="true"></span>
      Now booking Q2 2026
    </p>
    <!-- Eyebrow -->
    <p class="mt-8 text-xs font-bold tracking-[0.25em] uppercase text-red scroll-reveal">
      Product Design Studio · Miami
    </p>
    <!-- Headline -->
    <h1 class="mt-3 font-display text-5xl max-w-3xl leading-[0.97] tracking-tight scroll-reveal" style="transition-delay: 60ms">
      We don't design screens.<br>We design systems.
    </h1>
    <!-- Secondary line -->
    <p class="mt-5 text-base text-white/45 max-w-sm scroll-reveal" style="transition-delay: 120ms">
      Built to scale without losing what makes them good.
    </p>
    <!-- Red divider -->
    <div class="w-8 h-px bg-red mt-6 scroll-reveal" style="transition-delay: 160ms" aria-hidden="true"></div>
    <!-- CTAs -->
    <div class="flex flex-wrap items-center gap-4 mt-8 scroll-reveal" style="transition-delay: 200ms">
      <a
        href="#work"
        class="font-extrabold text-sm tracking-[0.1em] uppercase bg-yellow text-ink px-6 py-3 border-2 border-yellow rounded-none hover:bg-yellow/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
      >
        See the work →
      </a>
      <a
        href="mailto:fede@priisma.com"
        class="text-sm font-medium text-white/60 underline underline-offset-4 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
      >
        Start a conversation ↓
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify hero renders**

```bash
$B goto http://localhost:4321
$B screenshot /tmp/task5-hero.png
```
Read screenshot. Dark background, white Instrument Serif headline, yellow CTA, red eyebrow.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: redesign homepage hero — dark bg, new headline, yellow CTA"
```

---

## Task 6: Homepage — Work section (featured + index + image preview)

**Files:**
- Modify: `src/pages/index.astro` (work section)

The work section replaces the current horizontal card carousel with a featured tile (Cigarwell) + index list. Image previews use `src/pages/portfolio/*/` assets. Cigarwell has no static image — it gets a CSS gradient preview.

Note: The `<Image>` component from `astro:assets` is already imported at the top of index.astro; if not present, add `import { Image } from 'astro:assets';`. Also add these image imports at the top of the frontmatter:

```astro
import AirtrfxPreview from "./portfolio/flyairways/fly-airways-devices.png";
import MchPreview from "./portfolio/mch/mch-tablet-view.png";
import GodarkPreview from "./portfolio/godark/godark-web-01.jpg";
import QbPreview from "./portfolio/quotingbill/qb-cancellations-selected.jpg";
```

- [ ] **Step 1: Replace the entire work section**

Find `<!-- SELECTED WORK -->` and replace the entire `<section id="work" ...>` block with:

```astro
<!-- SELECTED WORK -->
<section id="work" class="border-t-2 border-ink bg-paper section-space">
  <div class="mx-auto max-w-7xl">

    <!-- Section eyebrow -->
    <p class="text-xs font-bold tracking-[0.22em] uppercase text-red mb-4 scroll-reveal">
      Selected work
    </p>

    <!-- Featured block — Cigarwell -->
    <div class="grid gap-[3px]" style="grid-template-columns: 5fr 3fr;">

      <!-- Main featured tile -->
      <a
        href="/work/cigarwell"
        class="relative bg-white border-2 border-ink p-6 flex flex-col justify-between min-h-[260px] overflow-hidden group focus:outline-none focus:ring-2 focus:ring-ink"
      >
        <!-- Grid texture -->
        <div
          class="absolute inset-0 pointer-events-none"
          style="background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: 24px 24px;"
          aria-hidden="true"
        ></div>
        <!-- Content -->
        <div class="relative">
          <p class="text-xs font-bold tracking-[0.15em] uppercase text-red">Featured · 2023–2024</p>
          <h2 class="font-display text-[40px] text-ink leading-[0.95] tracking-tight mt-1">Cigarwell</h2>
          <p class="text-xs text-ink/60 leading-relaxed max-w-[260px] mt-3">
            The first cigar platform built for how collectors actually think. Product, brand, and design system from the ground up.
          </p>
        </div>
        <div class="relative">
          <p class="text-3xl font-black text-red leading-none mt-4">$1.5M</p>
          <p class="text-xs text-ink/50 tracking-[0.1em] uppercase mt-1">new sales in a single quarter</p>
          <span class="inline-block mt-4 bg-ink text-paper text-xs font-extrabold tracking-[0.1em] uppercase px-4 py-2 group-hover:bg-ink/80 transition-colors duration-150">
            View case study →
          </span>
        </div>
      </a>

      <!-- Side tiles -->
      <div class="flex flex-col gap-[3px]">
        <a href="/work/airtrfx" class="flex-1 bg-mist border border-[#d0d4dc] p-4 flex flex-col justify-between group hover:border-ink transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ink">
          <h3 class="font-display text-lg text-ink leading-none">airTRFX</h3>
          <p class="text-xs text-ink/50 font-bold tracking-[0.1em] uppercase mt-1">Product Design · Web</p>
        </a>
        <a href="/work/mchanywhere" class="flex-1 bg-mist border border-[#d0d4dc] p-4 flex flex-col justify-between group hover:border-ink transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ink">
          <h3 class="font-display text-lg text-ink leading-none">MCH Anywhere</h3>
          <p class="text-xs text-ink/50 font-bold tracking-[0.1em] uppercase mt-1">UX · iOS · Android</p>
        </a>
        <a href="/work/godark" class="flex-1 bg-mist border border-[#d0d4dc] p-4 flex flex-col justify-between group hover:border-ink transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ink">
          <h3 class="font-display text-lg text-ink leading-none">GoDark</h3>
          <p class="text-xs text-ink/50 font-bold tracking-[0.1em] uppercase mt-1">Brand · Web</p>
        </a>
      </div>
    </div>

    <!-- Index list -->
    <div class="mt-[3px]">
      <!-- Header row -->
      <div class="grid gap-x-4 border-b-2 border-ink pb-3" style="grid-template-columns: 28px 1fr 160px 60px;">
        <span class="text-xs font-bold tracking-[0.15em] uppercase text-ink/30">#</span>
        <span class="text-xs font-bold tracking-[0.15em] uppercase text-ink/30">Project</span>
        <span class="text-xs font-bold tracking-[0.15em] uppercase text-ink/30 hidden md:block">Discipline</span>
        <span class="text-xs font-bold tracking-[0.15em] uppercase text-ink/30 text-right hidden md:block">Year</span>
      </div>

      <!-- Row macro -->
      {[
        { num: "001", name: "Cigarwell",       href: "/work/cigarwell",   role: "Product · Growth",       year: "2023", imgType: "gradient", gradient: "linear-gradient(135deg, #1a0a05, #2d0d0d)" },
        { num: "002", name: "airTRFX",         href: "/work/airtrfx",     role: "Product Design · Web",   year: "2016", imgType: "image",    imgSrc: AirtrfxPreview },
        { num: "003", name: "MCH Anywhere",    href: "/work/mchanywhere", role: "UX · iOS · Android",     year: "2015", imgType: "image",    imgSrc: MchPreview },
        { num: "004", name: "GoDark Chocolates", href: "/work/godark",    role: "Brand · Web",            year: "2017", imgType: "image",    imgSrc: GodarkPreview },
        { num: "005", name: "QuotingBill",     href: "/work/quotingbill", role: "Product Design · SaaS",  year: "2019", imgType: "image",    imgSrc: QbPreview },
      ].map((item) => (
        <a
          href={item.href}
          class="index-row grid gap-x-4 border-b border-[#d0d4dc] py-[14px] relative group focus:outline-none focus:ring-2 focus:ring-ink"
          style="grid-template-columns: 28px 1fr 160px 60px;"
        >
          <span class="text-xs text-red font-bold font-mono self-center">{item.num}</span>
          <span class="font-display text-[22px] text-[#1a1a1a] leading-none self-center group-hover:text-ink transition-colors duration-150">{item.name}</span>
          <span class="text-xs text-[#888] font-bold tracking-[0.1em] uppercase self-center hidden md:block">{item.role}</span>
          <span class="text-xs text-[#bbb] font-mono text-right self-center hidden md:block">{item.year}</span>
          <!-- Arrow -->
          <span class="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-ink opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-[opacity,transform] duration-150" aria-hidden="true">→</span>
          <!-- Image preview -->
          {item.imgType === "image" ? (
            <div class="index-preview absolute right-10 top-1/2 -translate-y-1/2 scale-[0.92] w-[140px] h-[88px] border-2 border-ink shadow-brutal-sm z-20 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-[180ms] ease-out pointer-events-none" aria-hidden="true">
              <Image src={item.imgSrc} alt="" width={140} height={88} class="w-full h-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div class="index-preview absolute right-10 top-1/2 -translate-y-1/2 scale-[0.92] w-[140px] h-[88px] border-2 border-ink shadow-brutal-sm z-20 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-[180ms] ease-out pointer-events-none" aria-hidden="true" style={`background: ${item.gradient};`}></div>
          )}
        </a>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Verify work section**

```bash
$B goto http://localhost:4321
$B scroll "#work"
$B screenshot /tmp/task6-work.png
```
Read screenshot. Featured Cigarwell tile left, 3 side tiles right, index list below with 5 rows.

Hover test for image previews:
```bash
$B hover "a[href='/work/airtrfx'].index-row"
$B screenshot /tmp/task6-hover.png
```
Read screenshot. airTRFX preview image should appear.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: redesign work section — featured Cigarwell + index list with image previews"
```

---

## Task 7: Homepage — Services section

**Files:**
- Modify: `src/pages/index.astro` (services section only)

- [ ] **Step 1: Replace the `<!-- PRODUCT DESIGN LEADERSHIP -->` and `<!-- SERVICES -->` sections**

These two sections will merge into one dark services section. Find both `<section id="what-we-do" ...>` and `<section id="services" ...>` blocks and replace them both with a single block:

```astro
<!-- SERVICES -->
<section id="services" class="border-t border-white/10 bg-[#0d0d0d] text-white section-space">
  <div class="mx-auto max-w-7xl">
    <p class="text-xs font-bold tracking-[0.25em] uppercase text-red mb-4 scroll-reveal">What we do</p>
    <h2 class="section-header text-white max-w-2xl scroll-reveal">
      Senior design expertise,<br>without the full-time overhead.
    </h2>
    <p class="mt-4 text-base text-white/45 max-w-sm scroll-reveal">From product direction to hands-on execution.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

      <div class="pl-4 border-l-2 border-yellow scroll-reveal">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mb-3 opacity-50">
          <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
        </svg>
        <h3 class="font-display text-xl font-normal text-white leading-tight mb-2">Product direction</h3>
        <p class="text-xs text-white/45 leading-relaxed mb-4">Helping teams define the product more clearly.</p>
        <ul class="space-y-1 text-sm text-white/50 list-none">
          <li>Feature prioritization</li>
          <li>UX architecture</li>
          <li>Product vision alignment</li>
          <li>User experience strategy</li>
        </ul>
      </div>

      <div class="pl-4 border-l-2 border-yellow scroll-reveal" style="transition-delay: 60ms">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mb-3 opacity-50">
          <path d="M10 16V5M10 5L6 9M10 5L14 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 16H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <h3 class="font-display text-xl font-normal text-white leading-tight mb-2">Fractional leadership</h3>
        <p class="text-xs text-white/45 leading-relaxed mb-4">Supporting teams as they scale.</p>
        <ul class="space-y-1 text-sm text-white/50 list-none">
          <li>Design direction</li>
          <li>Design system thinking</li>
          <li>Product consistency</li>
          <li>Mentoring design teams</li>
        </ul>
      </div>

      <div class="pl-4 border-l-2 border-yellow scroll-reveal" style="transition-delay: 120ms">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mb-3 opacity-50">
          <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <rect x="6" y="7" width="8" height="2" rx="1" fill="currentColor"/>
          <rect x="6" y="11" width="5" height="2" rx="1" fill="currentColor"/>
        </svg>
        <h3 class="font-display text-xl font-normal text-white leading-tight mb-2">Product design</h3>
        <p class="text-xs text-white/45 leading-relaxed mb-4">Hands-on design from concept to polished interface.</p>
        <ul class="space-y-1 text-sm text-white/50 list-none">
          <li>UX design</li>
          <li>Interface design</li>
          <li>Product flows</li>
          <li>Design systems</li>
        </ul>
      </div>

      <div class="pl-4 border-l-2 border-yellow scroll-reveal" style="transition-delay: 180ms">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mb-3 opacity-50">
          <path d="M4 10a6 6 0 016-6 6 6 0 014.24 1.76L16 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M16 4v3.5H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 10a6 6 0 01-6 6 6 6 0 01-4.24-1.76L4 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <h3 class="font-display text-xl font-normal text-white leading-tight mb-2">Launch and evolution</h3>
        <p class="text-xs text-white/45 leading-relaxed mb-4">Products improve through iteration.</p>
        <ul class="space-y-1 text-sm text-white/50 list-none">
          <li>Usability improvements</li>
          <li>Product refinement</li>
          <li>Growth-focused design</li>
          <li>Ongoing product evolution</li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
$B goto http://localhost:4321
$B scroll "#services"
$B screenshot /tmp/task7-services.png
```
Read screenshot. Dark section, 4-column service cards with yellow left borders.

```bash
git add src/pages/index.astro
git commit -m "feat: redesign services section — dark bg, Instrument Serif, yellow borders"
```

---

## Task 8: Homepage — About/Fede section

**Files:**
- Modify: `src/pages/index.astro` (about section)

- [ ] **Step 1: Replace the `<!-- ABOUT -->` section**

```astro
<!-- ABOUT -->
<section id="about" class="border-t-2 border-ink bg-paper section-space">
  <div class="grid items-start gap-12 mx-auto max-w-7xl md:grid-cols-2">
    <div class="scroll-reveal">
      <h2 class="section-header text-ink">Hi, I'm Fede.</h2>
      <div class="mt-8 max-w-xs border-2 border-ink shadow-brutal overflow-hidden" style="aspect-ratio: 4/5;">
        <img
          src="/assets/fede-portrait.jpeg"
          alt="Portrait of Fede Bozo, product designer at Priisma"
          width="800"
          height="1000"
          class="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
    <div class="space-y-4 text-base text-ink scroll-reveal" style="transition-delay: 60ms">
      <p>I'm a product designer who enjoys helping teams turn ideas into real products.</p>
      <p>Over the years I've worked with startups and product teams to shape digital experiences from early concept to launch and growth. What I enjoy most is the full journey — thinking through the product itself, designing the experience, and helping teams build something meaningful.</p>
      <p>Priisma is the studio through which I collaborate with founders and companies looking to elevate their product experience.</p>
      <p>Over 10 years of product design across healthcare tech, SaaS platforms, aviation, and consumer products.</p>
      <p>Based in Miami. Working with teams across the US and Latin America.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
$B scroll "#about"
$B screenshot /tmp/task8-about.png
```
Read screenshot. Cool-grey section, portrait with brutalist shadow, bio text.

```bash
git add src/pages/index.astro
git commit -m "feat: redesign about section — cool bg, brutalist portrait shadow"
```

---

## Task 9: Homepage — Testimonials section

**Files:**
- Modify: `src/pages/index.astro` (testimonials section)

- [ ] **Step 1: Replace the `<!-- TESTIMONIALS -->` section**

```astro
<!-- TESTIMONIALS -->
<section id="testimonials" class="border-t border-white/10 bg-[#0d0d0d] text-white section-space">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow text-red mb-10 scroll-reveal">What clients say</p>
    <div class="grid gap-12 md:grid-cols-2">

      <blockquote class="scroll-reveal">
        <p class="font-display italic text-2xl text-white leading-snug">
          "Fede came up to speed in days, not weeks. What surprised me was how quickly his iterations moved us — each round felt considered, not just fast. We went from a scrappy MVP to a product people actually pay for and recommend."
        </p>
        <footer class="mt-4 text-sm text-white/35">
          — [CEO Name], CEO · Cigarwell
        </footer>
      </blockquote>

      <blockquote class="scroll-reveal" style="transition-delay: 60ms">
        <p class="font-display italic text-2xl text-white leading-snug">
          "Fede doesn't just design — he helps you think through the product itself. That's the rarer skill, and the one we needed most."
        </p>
        <footer class="mt-4 text-sm text-white/35">
          — Founder name, Title · Company name
        </footer>
      </blockquote>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
$B scroll "#testimonials"
$B screenshot /tmp/task9-testimonials.png
```

```bash
git add src/pages/index.astro
git commit -m "feat: redesign testimonials section — dark bg, Instrument Serif italic quotes"
```

---

## Task 10: Homepage — How We Work + Engagement section

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace the `<!-- HOW WE WORK + ENGAGEMENT MODEL -->` section**

```astro
<!-- HOW WE WORK -->
<section id="how-we-work" class="border-t-2 border-ink bg-paper section-space">
  <div class="grid items-start gap-16 mx-auto max-w-7xl md:grid-cols-2">

    <div class="scroll-reveal">
      <h2 class="section-header text-ink max-w-sm">Thoughtful process.<br>No unnecessary complexity.</h2>
      <ol class="mt-10 space-y-6 list-none">
        <li class="flex items-baseline gap-4">
          <span class="font-display text-4xl text-ink/15 leading-none shrink-0" aria-hidden="true">1</span>
          <span class="text-base text-ink">Understand the product.</span>
        </li>
        <li class="flex items-baseline gap-4">
          <span class="font-display text-4xl text-ink/15 leading-none shrink-0" aria-hidden="true">2</span>
          <span class="text-base text-ink">Clarify the opportunity.</span>
        </li>
        <li class="flex items-baseline gap-4">
          <span class="font-display text-4xl text-ink/15 leading-none shrink-0" aria-hidden="true">3</span>
          <span class="text-base text-ink">Design the experience.</span>
        </li>
        <li class="flex items-baseline gap-4">
          <span class="font-display text-4xl text-ink/15 leading-none shrink-0" aria-hidden="true">4</span>
          <span class="text-base text-ink">Ship and refine.</span>
        </li>
      </ol>
      <p class="mt-6 text-sm text-ink/50">No complicated frameworks. Just steady progress and thoughtful decisions.</p>
    </div>

    <div class="scroll-reveal" style="transition-delay: 60ms">
      <p class="eyebrow text-red mb-8">How we engage</p>
      <div class="space-y-8">
        <div class="pl-4 border-l-2 border-yellow">
          <p class="eyebrow mb-1">Product Audit</p>
          <p class="text-xs text-ink/50 mb-2">2 weeks</p>
          <p class="text-sm text-ink/70">A focused look at where your product design is working and where it isn't. Clear findings, clear next steps.</p>
        </div>
        <div class="pl-4 border-l-2 border-yellow">
          <p class="eyebrow mb-1">Fractional Leadership</p>
          <p class="text-xs text-ink/50 mb-2">3–12 months</p>
          <p class="text-sm text-ink/70">Embedded design direction for teams that need someone to set the vision, mentor the team, and ship work — without the overhead of a full-time hire.</p>
        </div>
        <div class="pl-4 border-l-2 border-yellow">
          <p class="eyebrow mb-1">Project Engagement</p>
          <p class="text-xs text-ink/50 mb-2">Fixed scope</p>
          <p class="text-sm text-ink/70">A specific deliverable — a redesign, a design system, a new feature — with clear scope and a defined end point.</p>
        </div>
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
$B scroll "#how-we-work"
$B screenshot /tmp/task10-process.png
```

```bash
git add src/pages/index.astro
git commit -m "feat: redesign how-we-work section — cool bg, process steps, engagement types"
```

---

## Task 11: Homepage — Diagnostic + Contact sections + wire scroll-reveal

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace `<!-- DESIGN MATURITY DIAGNOSTIC -->` section**

```astro
<!-- DIAGNOSTIC -->
<section id="diagnostic" class="border-t border-white/10 bg-[#0d0d0d] text-white section-space">
  <div class="mx-auto max-w-7xl">
    <div class="max-w-2xl">
      <p class="text-xs font-bold tracking-[0.25em] uppercase text-red mb-3 scroll-reveal">Design Health Check</p>
      <h2 class="section-header text-white scroll-reveal">Where does your product design stand?</h2>
      <p class="mt-4 text-base text-white/45 scroll-reveal">3 questions. 30 seconds.</p>
    </div>
    <div class="mt-12 max-w-2xl scroll-reveal">
      <DiagnosticTool />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Replace `<!-- CONTACT -->` section**

```astro
<!-- CONTACT -->
<section id="contact" class="border-t-2 border-yellow bg-[#0d0d0d] text-white section-space">
  <div class="mx-auto max-w-7xl">
    <h2 class="section-header text-white scroll-reveal">Building something interesting?</h2>
    <p class="mt-4 text-base text-white/60 scroll-reveal">Let's talk.</p>
    <div class="flex flex-wrap items-center gap-6 mt-8 scroll-reveal">
      <a
        href="mailto:fede@priisma.com"
        class="text-lg font-bold text-yellow border-b-2 border-yellow pb-1 hover:text-white hover:border-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow"
      >
        fede@priisma.com
      </a>
      <a
        href="https://calendar.notion.so/meet/federicobozo/book-a-call-with-fede"
        target="_blank"
        rel="noopener noreferrer"
        class="text-base text-white/50 border-b border-white/25 pb-px hover:text-yellow hover:border-yellow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow"
      >
        Book a 30-min intro call →
      </a>
    </div>
    <div class="mt-6 scroll-reveal">
      <a
        href="https://www.linkedin.com/in/fedebozo/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-white/35 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow"
      >
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="inline mr-1 align-middle relative -top-px">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
        LinkedIn: in/fedebozo<span class="sr-only"> (opens in new tab)</span>
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add IntersectionObserver script for scroll-reveal**

Find the existing `<script>` tag at the bottom of `index.astro` (the PhotoSwipe one) and add a second `<script>` block immediately before it:

```astro
<script>
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach(el => observer.observe(el));
</script>
```

- [ ] **Step 4: Full homepage screenshot + build check**

```bash
$B goto http://localhost:4321
$B scroll "#diagnostic"
$B screenshot /tmp/task11-diagnostic.png
$B scroll "#contact"
$B screenshot /tmp/task11-contact.png
```
Read both screenshots.

```bash
cd /Users/altair/Public/sites/priisma-pf && npm run build
```
Expected: build completes with no errors.

- [ ] **Step 5: Responsive check**

```bash
$B goto http://localhost:4321
$B responsive /tmp/homepage
```
Read `/tmp/homepage-mobile.png`, `/tmp/homepage-tablet.png`, `/tmp/homepage-desktop.png`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: complete homepage redesign — diagnostic, contact, scroll-reveal wired"
```

---

## Task 12: Case study — cigarwell.astro

**Files:**
- Modify: `src/pages/work/cigarwell.astro`

Read the full file first. Apply these changes systematically:

- [ ] **Step 1: Read `src/pages/work/cigarwell.astro` fully**

- [ ] **Step 2: Apply layout system changes**

1. **Eyebrows:** Find all elements with `eyebrow` class. Add `text-red` to any eyebrow inside a light (`bg-paper`, `bg-mist`) section.
2. **`bg-mist` sections:** Change to `bg-paper` (the token update makes them visually identical, but unify the class).
3. **Section headers (h2):** Already `section-header` + `font-display` — no changes needed, glow picks up from CSS.
4. **CTA section at bottom:** Replace the existing CTA block with the standard contact block:

```astro
<section class="section-space bg-[#0d0d0d] text-white border-t-2 border-yellow">
  <div class="flex flex-col gap-8 mx-auto max-w-7xl sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="section-header text-white">Building something interesting?</h2>
      <p class="mt-2 text-base text-white/60">Let's talk.</p>
    </div>
    <div class="flex flex-col items-start gap-4 shrink-0 sm:flex-row sm:items-center">
      <a href="mailto:fede@priisma.com" class="font-extrabold text-sm tracking-[0.1em] uppercase bg-yellow text-ink px-6 py-3 border-2 border-yellow rounded-none hover:bg-yellow/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow">
        Start a project →
      </a>
      <a href="/#work" class="text-sm font-bold text-white/50 underline underline-offset-4 hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow">
        ← Back to work
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify**

```bash
$B goto http://localhost:4321/work/cigarwell
$B screenshot /tmp/task12-cigarwell.png
```
Read screenshot. Hero gradient preserved, body sections cool-grey, contact section dark with yellow border.

- [ ] **Step 4: Commit**

```bash
git add src/pages/work/cigarwell.astro
git commit -m "feat: apply layout system to cigarwell case study"
```

---

## Task 13: Case study — airtrfx.astro

Same pattern as Task 12. The hero uses `bg-linear-(--skyfly-gradient) text-paper`.

- [ ] **Step 1: Read `src/pages/work/airtrfx.astro`**
- [ ] **Step 2: Apply layout system changes** (eyebrows → `text-red` in light sections, `bg-mist` → `bg-paper`, replace CTA block with standard dark contact block from Task 12)
- [ ] **Step 3: Verify**
```bash
$B goto http://localhost:4321/work/airtrfx && $B screenshot /tmp/task13-airtrfx.png
```
- [ ] **Step 4: Commit**
```bash
git add src/pages/work/airtrfx.astro && git commit -m "feat: apply layout system to airtrfx case study"
```

---

## Task 14: Case study — mchanywhere.astro

Same pattern. Hero uses `bg-linear-(--mch-gradient) text-sunset`.

- [ ] **Step 1: Read `src/pages/work/mchanywhere.astro`**
- [ ] **Step 2: Apply layout system changes**
- [ ] **Step 3: Verify**
```bash
$B goto http://localhost:4321/work/mchanywhere && $B screenshot /tmp/task14-mch.png
```
- [ ] **Step 4: Commit**
```bash
git add src/pages/work/mchanywhere.astro && git commit -m "feat: apply layout system to mchanywhere case study"
```

---

## Task 15: Case study — godark.astro

Same pattern. Hero uses `bg-linear-(--gd-gradient) text-paper`.

- [ ] **Step 1: Read `src/pages/work/godark.astro`**
- [ ] **Step 2: Apply layout system changes**
- [ ] **Step 3: Verify**
```bash
$B goto http://localhost:4321/work/godark && $B screenshot /tmp/task15-godark.png
```
- [ ] **Step 4: Commit**
```bash
git add src/pages/work/godark.astro && git commit -m "feat: apply layout system to godark case study"
```

---

## Task 16: Case study — quotingbill.astro

Same pattern. Hero uses `bg-linear-(--qb-gradient)`.

- [ ] **Step 1: Read `src/pages/work/quotingbill.astro`**
- [ ] **Step 2: Apply layout system changes**
- [ ] **Step 3: Verify**
```bash
$B goto http://localhost:4321/work/quotingbill && $B screenshot /tmp/task16-qb.png
```
- [ ] **Step 4: Commit**
```bash
git add src/pages/work/quotingbill.astro && git commit -m "feat: apply layout system to quotingbill case study"
```

---

## Task 17: Rebuild about.astro

**Files:**
- Modify: `src/pages/about.astro` (full rewrite — currently uses old styles)

- [ ] **Step 1: Rewrite `src/pages/about.astro`**

```astro
---
import MainHead from "../components/MainHead.astro";
import Nav from "../components/Nav.astro";
import Footer from "../components/Footer.astro";
---

<html lang="en">
  <head>
    <MainHead
      title="About Fede Bozo — Product Designer | Priisma"
      description="Fede Bozo is a product designer based in Miami with 10+ years designing healthcare tech, SaaS platforms, aviation, and consumer products."
      canonical="https://www.priisma.com/about/"
      image="/assets/mesh-gradient.jpg"
    />
  </head>
  <body class="body-base">

    <header class="nav-floater">
      <Nav />
    </header>

    <main>

      <!-- Hero -->
      <section class="section-space bg-[#0d0d0d] text-white min-h-[50vh] flex items-end">
        <div class="mx-auto max-w-7xl w-full">
          <p class="text-xs font-bold tracking-[0.25em] uppercase text-red mb-3">About</p>
          <h1 class="font-display text-5xl text-white leading-[0.97] tracking-tight">Hola, I'm Fede.</h1>
        </div>
      </section>

      <!-- Bio -->
      <section class="section-space bg-paper border-t-2 border-ink">
        <div class="grid items-start gap-12 mx-auto max-w-7xl md:grid-cols-2">
          <div>
            <div class="max-w-xs border-2 border-ink shadow-brutal overflow-hidden" style="aspect-ratio: 4/5;">
              <img
                src="/assets/fede-portrait.jpeg"
                alt="Portrait of Fede Bozo, product designer at Priisma"
                width="800"
                height="1000"
                class="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </div>
          <div class="space-y-4 text-base text-ink">
            <p>I'm a product designer who enjoys helping teams turn ideas into real products.</p>
            <p>Over the years I've worked with startups and product teams across healthcare tech, SaaS, aviation, and consumer — shaping digital experiences from early concept to launch and growth.</p>
            <p>What I enjoy most is the full journey: thinking through the product itself, designing the experience, and helping teams build something meaningful.</p>
            <p>Priisma is the studio through which I collaborate with founders and companies looking to elevate their product experience.</p>
            <p>Over 10 years of product design. Based in Miami. Working with teams across the US and Latin America.</p>
            <p class="text-ink/60">En español, la vida es más sabrosa. 🌶️</p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="section-space bg-[#0d0d0d] text-white border-t-2 border-yellow">
        <div class="mx-auto max-w-7xl">
          <h2 class="section-header text-white">Building something interesting?</h2>
          <p class="mt-4 text-base text-white/60">Let's talk.</p>
          <div class="flex flex-wrap items-center gap-6 mt-8">
            <a href="mailto:fede@priisma.com" class="text-lg font-bold text-yellow border-b-2 border-yellow pb-1 hover:text-white hover:border-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow">
              fede@priisma.com
            </a>
            <a href="https://calendar.notion.so/meet/federicobozo/book-a-call-with-fede" target="_blank" rel="noopener noreferrer" class="text-base text-white/50 border-b border-white/25 pb-px hover:text-yellow hover:border-yellow transition-colors duration-150">
              Book a 30-min intro call →
            </a>
          </div>
        </div>
      </section>

    </main>

    <Footer />

  </body>
</html>
```

- [ ] **Step 2: Verify**

```bash
$B goto http://localhost:4321/about
$B screenshot /tmp/task17-about.png
```
Read screenshot. Dark hero, cool-grey bio section with portrait, dark contact section.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: rebuild about page with new design system"
```

---

## Task 18: Update 404.astro + final build verification

**Files:**
- Modify: `src/pages/404.astro`
- Final: run full build + visual sweep

- [ ] **Step 1: Read `src/pages/404.astro`**

- [ ] **Step 2: Update to match new system**

Replace content to align with new aesthetic — dark hero, cool-grey body, Nav + Footer:

```astro
---
import MainHead from "../components/MainHead.astro";
import Nav from "../components/Nav.astro";
import Footer from "../components/Footer.astro";
---

<html lang="en">
  <head>
    <MainHead
      title="Page not found — Priisma"
      description="This page doesn't exist."
      canonical="https://www.priisma.com/404"
      image="/assets/mesh-gradient.jpg"
    />
  </head>
  <body class="body-base">
    <header class="nav-floater">
      <Nav />
    </header>
    <main class="min-h-screen bg-[#0d0d0d] text-white section-space flex items-center">
      <div class="mx-auto max-w-7xl w-full">
        <p class="text-xs font-bold tracking-[0.25em] uppercase text-red mb-3">404</p>
        <h1 class="font-display text-5xl text-white leading-[0.97] tracking-tight max-w-lg">This page doesn't exist.</h1>
        <p class="mt-5 text-base text-white/45">But the work does.</p>
        <a href="/" class="inline-block mt-8 font-extrabold text-sm tracking-[0.1em] uppercase bg-yellow text-ink px-6 py-3 border-2 border-yellow rounded-none hover:bg-yellow/90 transition-colors duration-150">
          ← Back to Priisma
        </a>
      </div>
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 3: Final production build**

```bash
cd /Users/altair/Public/sites/priisma-pf && npm run build
```
Expected: exits with code 0, no errors. Note any warnings but don't block on them.

- [ ] **Step 4: Full visual sweep with gstack**

```bash
$B goto http://localhost:4321 && $B screenshot /tmp/final-home.png
$B goto http://localhost:4321/work/cigarwell && $B screenshot /tmp/final-cigarwell.png
$B goto http://localhost:4321/work/airtrfx && $B screenshot /tmp/final-airtrfx.png
$B goto http://localhost:4321/about && $B screenshot /tmp/final-about.png
```
Read all four screenshots. Verify consistent dark/cool-grey system, Instrument Serif headlines, no obvious layout breaks.

```bash
$B viewport 390x844
$B goto http://localhost:4321 && $B screenshot /tmp/final-home-mobile.png
```
Read it. Mobile layout should be single-column, hamburger nav visible.

- [ ] **Step 5: Commit 404 + tag**

```bash
git add src/pages/404.astro
git commit -m "feat: update 404 page to new design system"
git tag redesign-complete
```

---

## Summary

| Task | Component | Type |
|---|---|---|
| 1 | tailwind.css tokens + scroll-reveal | Foundation |
| 2 | Nav.astro | Rebuild |
| 3 | Footer.astro | Color update |
| 4 | DiagnosticTool.astro | Color update |
| 5–11 | index.astro (homepage) | Rebuild per section |
| 12–16 | 5× case study pages | Layout system |
| 17 | about.astro | Rebuild |
| 18 | 404.astro + final build | Cleanup + verify |
