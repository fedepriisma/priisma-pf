# TODOS

## Cigarwell case study

### Add real Cigarwell assets when available
**What:** Replace the three interim placeholder visuals with real screenshots/brand board images:
1. Brand board (section 01 Brand) — currently shows CSS palette + typography preview
2. Product screens (section 02 Product) — currently shows abstract wireframe outlines
3. Rating system (section 04 Interaction) — currently shows wireframe rating UI
**Why:** Real visuals will make the case study significantly more compelling.
**Context:** Each placeholder uses the `<figure>` + `figcaption` pattern. Run `scripts/compress-videos.sh` on any video assets before adding them.
**Depends on:** Design assets from Cigarwell project files.

---

## Design assets

### ~~[P1] Upload Fede's portrait photo~~ ✅ Done
Portrait added to `public/assets/fede-portrait.jpeg` (78KB, 800×772px) and wired into the About section in `src/pages/index.astro`.

---

## $1MM ARR — Conversion infrastructure

### ~~[P1] Set up Notion Calendar booking link~~ ✅ Done
Both CTAs now link to `https://calendar.notion.so/meet/federicobozo/book-a-call-with-fede` (hero + contact section).

### [P2] Gather outcome metrics for case study cards
**What:** For each project, identify 1 concrete business outcome metric to add to the work card and/or case study page. Examples: "Launched Dec 2024," "Deployed to 20+ airlines," "Shipped in 6 weeks."
**Why:** Work cards currently use craft language ("built for how collectors actually think"). One metric per card transforms them from portfolio pieces into evidence that the work had business impact.
**Pros:** Directly answers the Series B buyer's question: "what happened after Priisma worked on this?"
**Cons:** Some metrics may require client permission to publish. Some may not exist or be hard to verify.
**Context:** Start with what's already public or known: launch dates, platform/scale ("20+ airlines"), specific deliverables. For any metric that implies business outcome (revenue, conversion, NPS), verify with client before publishing.
**Effort:** S per project (human) → S per project (CC to implement)
**Priority:** P2 — strengthens conversion but not blocking launch.
**Depends on:** Memory of project details + client permission for any business metrics.

### ~~[P1] Edit DiagnosticTool question and result content~~ ✅ Done — content approved, 60-day framing locked
**What:** Review and edit the draft questions and result paragraphs for the Design Maturity Diagnostic before implementing the component.
**Why:** The draft is a solid starting point but the result paragraphs need Fede's voice — especially the 4 result types. They should sound like what Fede would actually say in a 30-minute discovery call, not AI copy. This is the hardest part to retrofit after implementation.
**Context:** Draft content lives in `DESIGN.md` (created by /plan-design-review). The 3 questions and 4 results (Design Strategy, Design Foundation, Design Process, Design Leadership) are complete drafts. Edit for tone, accuracy, and Fede's specific perspective. The result paragraphs are the most important — they determine whether the tool earns trust or feels like a lead gen trap.
**Effort:** S (human: ~30 min read + edit) → no CC needed
**Priority:** P1 — blocks DiagnosticTool from shipping with real impact. Tool should not ship with unedited draft content.
**Depends on:** DESIGN.md created (done).

---

## Completed

### Replace founder quote before launch
**Completed:** v0.0.1 (2026-09-14) — placeholder blockquote removed from `src/pages/work/cigarwell.astro`; DESIGN.md 2026-09-13 forbids fabricated endorsements, so nothing replaces it.

### Gather real founder/PM testimonials
**Completed:** v0.0.1 (2026-09-14) — retired. The homepage no longer has a testimonial section (DESIGN.md 2026-09-13).

### Update availability badge each quarter
**Completed:** v0.0.1 (2026-09-14) — retired. The "Now booking" badge no longer exists on the homepage (DESIGN.md 2026-09-13).
