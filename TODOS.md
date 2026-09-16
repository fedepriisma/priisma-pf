# TODOS

## Cigarwell case study

### Add real Cigarwell assets when available
**What:** Replace the three interim placeholder visuals in `src/pages/work/cigarwell.astro` with real screenshots/brand board images:
1. Brand board (section 01 Brand) — currently shows CSS palette + typography preview
2. Product screens (section 02 Product) — currently shows abstract wireframe outlines
3. Rating system (section 04 Interaction) — currently shows wireframe rating UI
**Why:** Real visuals will make the case study significantly more compelling.
**Context:** Each placeholder uses the `<figure>` + `figcaption` pattern. Media lives in `src/assets/portfolio/cigarwell/`. Run `scripts/compress-videos.sh` on any video assets before adding them.
**Effort:** S **Priority:** P2 **Depends on:** Design assets from Cigarwell project files.

---

## Case studies

### Gather outcome metrics for case study pages
**What:** For each project, identify one concrete, verifiable outcome to add to the case study page. Examples: "Launched Dec 2024," "Deployed to 20+ airlines," "Shipped in 6 weeks."
**Why:** DESIGN.md asks for honest numbers. One real outcome per project turns a portfolio piece into evidence.
**Context:** Start with what is already public or known: launch dates, platform/scale, specific deliverables. Anything that implies a business outcome (revenue, conversion, NPS) needs client permission before publishing. Never invent a metric.
**Effort:** S per project **Priority:** P2 **Depends on:** Client permission for business metrics.

---

## Completed

### Edit DiagnosticTool question and result content
**Completed:** v0.0.1 (2026-09-16) — retired. `DiagnosticTool.astro` was never rendered on any page and has been deleted.

### Set up Notion Calendar booking link
**Completed:** v0.0.1 (2026-09-16) — done earlier; the link lives on the about page (`src/pages/about.astro`). The homepage CTAs are a plain `mailto:` (DESIGN.md 2026-09-13).

### Upload Fede's portrait photo
**Completed:** v0.0.1 (2026-09-14) — `public/assets/fede-portrait.jpeg` (78KB, 800×772px), used in the homepage contact section and as the social image.

### Replace founder quote before launch
**Completed:** v0.0.1 (2026-09-14) — placeholder blockquote removed from `src/pages/work/cigarwell.astro`; DESIGN.md 2026-09-13 forbids fabricated endorsements, so nothing replaces it.

### Gather real founder/PM testimonials
**Completed:** v0.0.1 (2026-09-14) — retired. The homepage no longer has a testimonial section (DESIGN.md 2026-09-13).

### Update availability badge each quarter
**Completed:** v0.0.1 (2026-09-14) — retired. The "Now booking" badge no longer exists on the homepage (DESIGN.md 2026-09-13).
