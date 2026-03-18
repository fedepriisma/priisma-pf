# DESIGN.md — Priisma Design System

Source of truth for all design decisions. Updated via `/plan-design-review` and `/design-review`.
Last updated: 2026-03-18 (plan-design-review run)

---

## Brand Summary

**Studio:** Priisma
**Led by:** Fede Bozo
**Positioning:** Product design leadership for scaling SaaS companies
**Tone:** Clear, warm, confident, light. Founder-friendly.

---

## Typography

| Role | Token | Font |
|------|-------|------|
| Display / headings | `font-display` | Instrument Serif |
| Body | `font-body` | Mona Sans |
| Mono | `font-mono` | system mono stack |

**Heading glow:** Applied globally to `h1, h2, h3` via `text-shadow` using oklch relative color syntax. Bright halo derived from `currentColor + 0.38 lightness`. Do not override this per-component — it's a global brand signature.

**Type scale:** Fluid via `clamp()` — defined in `tailwind.css` @theme. Do not hardcode font sizes in components. Use the scale tokens (`text-sm`, `text-base`, `text-lg`, etc.).

---

## Color Palette

| Name | Token | oklch | Use |
|------|-------|-------|-----|
| Paper | `bg-paper` | 0.985 0.006 70 | Default page background |
| Ink | `text-ink` / `bg-ink` | 0.10 0 0 | Text, borders, primary CTA |
| Mist | `bg-mist` | 0.93 0.006 70 | Alternate section background |
| Yellow | `bg-yellow` / `text-yellow` | 0.885 0.162 92 | Active state, hover, accent |
| Black | `bg-black` | 0.08 0 0 | Contact section (inverted) |
| Midnight | `text-midnight` | 0.383 0 89 | Subtle text |

**Section alternation rule:** Sections alternate `bg-paper` and `bg-mist`. Contact section is `bg-black text-yellow` (inverted, always last).

**Yellow = positive action.** Yellow is the active/hover/selected state color across the site. Work cards turn yellow on hover. Selected diagnostic answers turn yellow. The availability badge uses a yellow dot (`bg-yellow`). Do NOT introduce green or other semantic colors for "available/active" states — use yellow.

---

## Component Patterns

### Section anatomy
```astro
<section id="[id]" class="border-t section-space border-current/10 [bg-mist?]">
  <div class="mx-auto max-w-7xl">
    <h2 class="section-header">[Section title]</h2>
    ...
  </div>
</section>
```

### Typography utilities
- `.section-header` → `text-5xl font-display tracking-tight` — section headings
- `.text-statement` → `font-display italic text-2xl leading-snug` — pull quotes, testimonials
- `.eyebrow` → `text-xs font-medium tracking-widest uppercase opacity-60` — labels, tags, section eyebrows
- `.primary-cta` → `bg-ink text-paper border-2 border-ink px-6 py-3` — primary button
- `.section-space` → `px-6 py-24 sm:px-12 lg:px-16`

### Service card pattern (left-border)
```astro
<div class="pl-4 border-l-2 border-yellow">
  <h3 class="mb-3 text-lg font-semibold">[Title]</h3>
  <p class="mb-4 text-sm">[Description]</p>
  <ul class="space-y-1 text-sm list-none">...</ul>
</div>
```
**Use for:** Service items, engagement model types. Warm, personal. NOT a pricing table.

### Work card pattern (brutalist)
```astro
<a href="..." class="flex flex-col justify-between p-8 border-2 w-70 sm:w-85
  border-ink rounded-3xl bg-paper hover:bg-yellow focus:outline-none
  focus:ring-2 focus:ring-ink focus:ring-offset-2 motion-safe:transition-colors">
```
**Use for:** Work project cards. Do NOT use for engagement model or diagnostic answers — too heavy.

### DiagnosticTool answer option pattern
```astro
<!-- Answer option: inherits work card DNA but as a label/radio -->
<label class="flex items-center gap-4 p-5 border-2 border-ink rounded-2xl
  cursor-pointer has-[:checked]:bg-yellow has-[:checked]:border-yellow
  hover:bg-yellow/20 motion-safe:transition-colors min-h-[44px]">
  <input type="radio" name="q1" value="[value]" class="sr-only">
  <span>[Answer text]</span>
</label>
```
Selected state: `bg-yellow border-yellow text-ink`. Same language as work card hover.

---

## Page Structure & Section Order

Single-page layout. Sections in this exact order:

```
1. Header / Nav       (sticky, bg-paper)
2. #home              Hero — hook + availability badge + CTAs
3. #what-we-do        Problem — the design leadership gap
4. #services          Services — what we offer (4 cards, left-border pattern)
5. #testimonials      Testimonials — 1-2 founder quotes (bg-mist)
6. #work              Work — brutalist card carousel + case study links
7. #about             About — Fede's story + portrait
8. #how-we-work       Process — 4 steps + engagement model (bg-mist)
9. #diagnostic        Design Maturity Diagnostic — interactive tool (bg-paper)
10. #contact          Contact — CTA + booking + email (bg-black, inverted)
Footer
```

---

## Hero Section Spec

```
● Now booking Q2 2026     ← yellow dot, text-sm, above CTA
H1: [headline]
P: [subheadline]
[Start a conversation →]  ← .primary-cta
[Book an intro call →]    ← Notion Calendar link, secondary style
[See our work ↓]          ← anchor link, underline style
```

**Availability badge:** `<span class="inline-flex items-center gap-2 text-sm font-medium">`
Dot: `<span class="w-2 h-2 rounded-full bg-yellow inline-block"></span>`
Updates quarterly: Q1 (Jan 1), Q2 (Apr 1), Q3 (Jul 1), Q4 (Oct 1).
If at capacity: "Currently at capacity — inquiries welcome."

---

## Testimonials Section Spec

**Visual treatment: editorial, NOT SaaS template.**

- NO star ratings
- NO circular avatars
- NO gradient cards
- NO "Featured testimonial" badges

```
<section id="testimonials" class="border-t section-space border-current/10 bg-mist">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">What clients say</p>
    <div class="grid gap-12 mt-12 md:grid-cols-2">
      <blockquote>
        <p class="text-statement">"Quote text in Instrument Serif italic.
          One to three sentences. Let it breathe."</p>
        <footer class="mt-4 text-sm opacity-60">
          — First Last, Title, Company
        </footer>
      </blockquote>
    </div>
  </div>
</section>
```

**Responsive:** 1 column on mobile, up to 2 columns on desktop. Never more than 2.
**Placeholder:** Until real quotes arrive, show 1 placeholder quote with subtle "coming soon" treatment (opacity-30 on the attribution only — the quote box should be fully visible, just attribution dimmed).

---

## Engagement Model Spec (inside How We Work)

Three types. Use the service card left-border pattern — warm and personal, NOT a pricing table.

```
🔍  Audit              ← .eyebrow label
    2 weeks. Clear diagnosis.
    [1-sentence description]

🏆  Fractional Leadership   ← .eyebrow label
    3–12 months. Embedded.
    [1-sentence description]

🚀  Project Engagement      ← .eyebrow label
    Fixed scope. Clear deliverables.
    [1-sentence description]
```

No pricing mentioned. No "starting at $X." Signals premium + invites conversation.

---

## Work Card Outcome Metric Spec

Added to existing brutalist work cards. Position: between description and "View case study →" link.

```astro
<!-- After description, before "View case study" link -->
<p class="mt-3 pt-3 border-t border-current/10 text-xs tracking-widest uppercase opacity-40">
  [Outcome: e.g. "Launched Dec 2024 · Android"]
</p>
```

Matches existing card metadata typography (`text-xs tracking-widest uppercase opacity-40`). Thin border-t to visually separate from the editorial description above.

---

## Design Maturity Diagnostic Spec

### Purpose
Convert "curious but not ready" visitors into warm pipeline leads. 3 questions → personalized result → optional email capture.

### Structure
```
Section #diagnostic (bg-paper, centered, max-w-2xl)
  Eyebrow: "Design Health Check"
  H2: "Where does your product design stand?"
  Subtext: "3 questions. 30 seconds."

  [DiagnosticTool island component]
    → Q1 with 4 answer options
    → Q2 with 4 answer options (auto-advance after Q1)
    → Q3 with 4 answer options (auto-advance after Q2)
    → Result card
    → Email capture (optional, "not ready to talk?")
```

### Questions & Answer Options

**Q1. How would you describe your product's design right now?**
- We're shipping fast but things feel inconsistent
- We have a designer but no real direction
- We have a design system but it's not being used
- We're pre-design — building what works

**Q2. What's your biggest design bottleneck?** *(primary result driver)*
- Prioritizing what to build next → **Design Strategy** result
- Consistency across the product → **Design Foundation** result
- Speed — design slows us down → **Design Process** result
- Growing or leading a design team → **Design Leadership** result

**Q3. What would a win look like in 60 days?**
- A cleaner, more consistent product
- A stronger design foundation
- A design direction the team can follow
- A specific feature shipped to a higher standard

### Result Types (Q2-driven)

> **Design Strategy**
> At your stage, design should be helping you decide what *not* to build, not just making things look good. The sign your product needs design leadership isn't a visual problem — it's a direction problem. The clearest symptom: good ideas compete with each other because there's no shared product vision to measure them against. Most teams at this stage benefit less from more design execution and more from someone who can help sharpen what the product actually is. That's usually the starting point.

> **Design Foundation**
> You've shipped a real product — now it's starting to fight itself. Navigation works one way here and another way there. Buttons look almost-but-not-quite right. Your users feel something is slightly off even if they can't name it. This is the design debt point — where the cost of inconsistency starts to show up in user confusion and in your team's velocity. A shared foundation (patterns, tokens, documentation) at this stage usually pays for itself within months.

> **Design Process**
> Design shouldn't be the slow part. When it slows a team down, it's usually one of three things: the handoffs aren't working, the scope isn't clear before design starts, or there aren't strong enough patterns to work from. Sometimes all three. This is one of the more fixable problems — it rarely requires a big redesign. It usually requires better process and better tooling. Worth diagnosing before committing to a solution.

> **Design Leadership**
> Building a design team is harder than hiring designers. You can hire someone great and still end up with inconsistency and unclear ownership — if there's no one setting direction. The leadership layer isn't about managing people as much as it's about making sure the team has a clear point of view about what the product should be and how it should work. That clarity, more than any individual designer, is what makes a design team effective.

*Note: These are drafts. Edit to Fede's voice before shipping. See TODOS.md.*

### Interaction Behavior
- **Auto-advance:** Selecting an answer auto-advances to the next question after a 200ms delay (time for visual confirmation of selection).
- **No back navigation** in v1. Reset button appears on result screen.
- **Progress indicator:** `● ● ○` style (3 dots, filled = answered). Visually shown + `aria-label="Step N of 3"`.

### Answer Option Styling
```
Default:  border-2 border-ink rounded-2xl p-5 min-h-[44px]
Hover:    bg-yellow/20 (subtle preview)
Selected: bg-yellow border-yellow text-ink
```

### States
| State | What user sees |
|-------|---------------|
| Initial | Q1 with 4 options, progress `● ○ ○` |
| Q1 answered | Q1 collapses to summary, Q2 fades in, focus moves to Q2 option 1 |
| Q2 answered | Same, Q3 fades in |
| Q3 answered | Result card fades in, progress dots disappear |
| Result shown | Personalized paragraph + reset button + email form below |
| Email: loading | Submit button disabled + spinner |
| Email: success | "You're on the list ✓" replaces form |
| Email: duplicate | "You're already on the list ✓" |
| Email: error | "Something went wrong. Email me directly → fede@priisma.com" |
| Email: invalid | Inline validation before submit fires |

### Email form copy
```
"Get a full breakdown by email →"
[your@email.com]  [Send →]
"No cadence, no noise."
```

### ARIA requirements
```html
<fieldset>
  <legend class="sr-only">Step 1 of 3: [question text]</legend>
  <p aria-label="Step 1 of 3" aria-hidden="true">● ○ ○</p>
  <label class="[card styles]">
    <input type="radio" name="q1" value="[value]" class="sr-only">
    [Answer text]
  </label>
</fieldset>

<!-- Result container: announced when content changes -->
<div aria-live="polite" id="diagnostic-result">...</div>

<!-- Form feedback: announced on submit -->
<p aria-live="polite" id="form-feedback">...</p>

<!-- Email input: explicit label, not just placeholder -->
<label for="email">Your email address</label>
<input id="email" type="email" ...>
```

### Responsive behavior
| Viewport | Answer options | Email form |
|----------|---------------|------------|
| Mobile (< 640px) | Full-width stacked | Stacked (input above button) |
| Tablet+ | 2-column grid | Row (input + button) |

Max-width: `max-w-2xl mx-auto` for the entire tool.

### Lead destination
Buttondown or ConvertKit. API key stored in Cloudflare Pages env vars as `PUBLIC_EMAIL_API_KEY`. Use the public subscribe API (client-side safe). Tag leads with their Q2 answer (bottleneck) for segmentation.

---

## Analytics (PostHog)

Initialized in `src/components/PostHog.astro`, included via `MainHead.astro`.
Uses `posthog-js` npm package (bundled by Vite). Public project API key is safe to commit.

```js
// Diagnostic tool — implemented in DiagnosticTool.astro
posthog.capture('diagnostic_started')                          // Q1 answer selected
posthog.capture('diagnostic_completed', { result_type })       // Q3 answered; result_type = 'strategy' | 'foundation' | 'process' | 'leadership'
posthog.capture('diagnostic_email_captured', { result_type })  // Email form submitted successfully
```

---

## Responsive Breakpoints Summary

| Element | Mobile < 640px | Tablet 640-1024px | Desktop > 1024px |
|---------|---------------|-------------------|-----------------|
| Availability badge | Above CTA, full row | Inline with CTA | Inline with CTA |
| Hero CTAs | Stacked vertically | Row | Row |
| Testimonials | 1 column | 1 column | 2 columns |
| Services | 1 column | 2 columns | 4 columns |
| Engagement model | 1 column | 2 columns | 3 columns |
| Diagnostic answers | 1 column | 2-column grid | 2-column grid |
| Work cards | Horizontal scroll (existing) | Horizontal scroll | Horizontal scroll |
| About grid | 1 column | 2 columns | 2 columns |

---

## NOT in scope

- Blog / content hub (no CMS, no editorial cadence)
- Pricing page (intentionally opaque)
- Testimonial star ratings or avatars
- Green color in the palette (yellow is the positive-action color)
- Animation libraries
- Multiple pages beyond existing case studies
- IRU (never, anywhere)
