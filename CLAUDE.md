# CLAUDE.md — Priisma Portfolio Rebuild

This file tells you everything you need to know about this project.
Read it fully before touching any file.

---

## gstack

For all web browsing, use the `/browse` skill from gstack. Never use `mcp__claude-in-chrome__*` tools.

Available gstack skills:
- `/browse` — open and interact with URLs in a real browser
- `/plan-ceo-review` — review a plan from a CEO/business perspective
- `/plan-eng-review` — review a plan from an engineering perspective
- `/plan-design-review` — review a plan from a design perspective
- `/design-consultation` — design consultation and critique
- `/review` — code review
- `/ship` — ship a feature end-to-end
- `/browse` — web browsing with a real browser
- `/qa` — QA a feature with browser + design review
- `/qa-only` — QA without design review
- `/qa-design-review` — QA with design review only
- `/setup-browser-cookies` — configure browser session cookies
- `/retro` — run a retrospective
- `/document-release` — document a release

---

## What this project is

Priisma is the portfolio site of Fede Bozo — a product designer and strategist who works with Series B SaaS companies and funded founders.

The site lives at https://www.priisma.com
Stack: Astro + Tailwind CSS
Output: static, single-page portfolio

This is not a full redesign from scratch. We are updating the existing site with new copy, better structure, improved semantics, and a stronger positioning. Keep implementation simple and the site performant.

---

## The one thing this site needs to communicate

> "This is not just a designer. This is someone who can help us shape, lead, and elevate a product."

The target visitor is a Series B founder or product leader who understands that design at their stage is a strategic decision, not a production task. The site should make them feel like they found the right person — not a vendor, but a partner who thinks like they do.

---

## Brand

**Studio name:** Priisma
**Led by:** Fede Bozo
**Positioning line:** Product design leadership for scaling SaaS companies
**Tone:** Clear, warm, confident, light. Founder-friendly. Not corporate, not buzzword-heavy, not trying too hard.

**Voice rules — always:**
- Simple and direct
- Honest and human
- Concise — no padding
- Warm but not informal
- Confident but not arrogant

**Voice rules — never:**
- No jargon: synergy, leverage, disrupt, world-class, cutting-edge, visionary, transformational
- No hype or overclaiming
- No questions as headlines or openers
- No "remember" or any form of it
- No "Unlock ___" unless specifically requested
- No "Master", "Ultimate", or "Definitive"
- Em dashes only when they genuinely improve readability — not as a default

---

## Target audience (ICP)

- Series B SaaS companies preparing to scale
- Funded founders building or refining a digital product
- Teams that need product design leadership, not just execution
- US market primary, Latin America secondary
- High-income decision makers who understand the cost of bad design

---

## Site structure

Single page. Sections in this order:

1. Header / Navigation
2. Hero
3. Product Design Leadership (the problem + the value)
4. What We Help With (services)
5. Selected Work
6. How We Work
7. About
8. Contact / Footer

### Section IDs to use
```
#home
#what-we-do
#services
#work
#cigarwell
#quotingbill
#mchanywhere
#airtrfx
#godark
#about
#contact
```

---

## Navigation

- Sticky or static top nav — keep it simple
- Brand: Priisma (left)
- Nav links: What We Do · Work · About · Contact
- Include project anchor links under Work, either as a dropdown or inline sublist
- Mobile: stacked nav or simple disclosure — no heavy JS menus
- Use `<nav aria-label="Primary">` 
- Anchor links scroll to section IDs

---

## Copy — use exactly as written

### Hero

**Eyebrow:** Priisma

**H1:** Designing products that are ready to scale.

**Subheadline:**
Priisma helps funded startups and SaaS companies turn good products into great ones. From product strategy and design leadership to hands-on execution — we help teams shape, build, and evolve digital products people genuinely enjoy using.

**CTA:** Start a conversation → mailto:fede@priisma.com

---

### Product Design Leadership section

**H2:** More than design. Product thinking.

**Body:**
Growing products reach a point where design decisions start affecting the entire company.

Features become harder to prioritize. User experience becomes inconsistent. Teams move fast but not always in the same direction.

That's where we come in.

Priisma works with founders and product teams to bring clarity to the product experience — shaping how the product works, how it looks, and how it evolves.

Sometimes that means defining the design direction. Sometimes it means helping teams think more clearly about the product itself. Often it's both.

---

### What We Help With section

**H2:** Where we bring the most value

**Four blocks:**

**Product direction**
Helping teams define the product more clearly.
- Feature prioritization
- UX architecture
- Product vision alignment
- User experience strategy

**Design leadership**
Supporting teams as they scale.
- Design direction
- Design system thinking
- Product consistency
- Mentoring design teams

**Product design**
Hands-on design from early concepts to polished interfaces.
- UX design
- Interface design
- Product flows
- Design systems

**Launch and evolution**
Products improve through iteration.
- Usability improvements
- Product refinement
- Growth-focused design
- Ongoing product evolution

---

### Selected Work section

**H2:** Products we've helped bring to life

**Intro:**
Over the years we've worked with founders, startups, and product teams to design and evolve digital products across different industries. Here are a few examples.

---

**Project: Cigarwell** ← list this first

Eyebrow: Product concept, design, and launch.

Summary: A platform for cigar enthusiasts to track their collection, explore new cigars, and build a more intentional experience around enjoying them.

Role: Product strategy · UX · Interface design · Design system · Illustration

Date: 2023–2024

Company: Cigarwell

Use placeholder hero image. Alt text: "Cigarwell product interface — designed by Priisma"

---

**Project: QuotingBill**

Summary: A recurring billing platform built for the telecom industry — designed and built from concept to production.

Role: Principal designer + Front-end (HTML/CSS/Vue)

Date: 2019–2021

Company: QuotingBill.com

Keep existing images. Keep existing playground link.

---

**Project: MCH Anywhere**

Summary: A telemedicine app for Miami Children's Hospital — making remote pediatric consultations simple and accessible.

Role: UI/UX Design for iOS & Android + Web development

Date: 2015

Company: MCH Anywhere (now Nicklaus Children's Hospital)

Keep existing images.

---

**Project: airTRFX / EveryMundo**

Summary: A modular fare publishing platform that helped 20+ airlines increase revenue and reach more travelers.

Role: UI/UX Design + Web development

Date: 2016–2018

Company: EveryMundo

Keep existing images.

---

**Project: GoDark Chocolates**

Summary: Brand and web design for a premium stone-ground chocolate company — fun, tropical, and colorful.

Role: Brand design + Website

Date: 2017–2022

Company: GoDarkChocolate.com

Keep existing images.

---

**Do not include IRU anywhere on the site. Not in nav, not in work, not anywhere.**

---

### How We Work section

**H2:** Thoughtful process. No unnecessary complexity.

**Body:**
Great products are built through collaboration. We work closely with founders, product managers, and engineers to move ideas from concept to real product.

The process is simple:

1. Understand the product.
2. Clarify the opportunity.
3. Design the experience.
4. Ship and refine.

No complicated frameworks. Just steady progress and thoughtful decisions.

---

### About section

**H2:** Hi, I'm Fede.

**Body:**
I'm a product designer who enjoys helping teams turn ideas into real products.

Over the years I've worked with startups and product teams to shape digital experiences from early concept to launch and growth. What I enjoy most is the full journey — thinking through the product itself, designing the experience, and helping teams build something meaningful.

Priisma is the studio through which I collaborate with founders and companies looking to elevate their product experience.

Based in Miami. Working with teams across the US and Latin America.
En español, la vida es más sabrosa. 🌶️

---

### Contact / Footer section

**H2:** Building something interesting?

**Body:** Let's talk.

**CTA:** fede@priisma.com

Optionally include LinkedIn: https://www.linkedin.com/in/fedebozo/

**Footer note:**
Priisma · Product Design & Strategy · Led by Fede
Miami, FL · © 2026 Priisma

---

## Project card structure

Every project must follow this consistent structure:

```
<article>
  <h3>[Project title]</h3>
  <p>[One-sentence summary]</p>
  <ul>
    <li>Role: ...</li>
    <li>Date: ...</li>
    <li>Company: ...</li>
  </ul>
  <figure>
    <img src="..." alt="..." width="..." height="..." loading="lazy" />
    <figcaption>...</figcaption> (optional)
  </figure>
  [optional supporting images]
  [optional external link]
</article>
```

---

## Placeholder images

Use placeholders for:
- Hero composition (16:9 or 16:10 — dark neutral, layered SaaS UI feel)
- Cigarwell hero (16:10)
- Product architecture / system diagram (16:10)
- How We Work process image (16:10)
- About portrait (4:5)

Placeholders must:
- Have explicit width and height
- Have descriptive alt text
- Match the tone of the site — neutral and polished
- Be optimized and compressed

Do not use generic colorful stock photography.

---

## SEO requirements

**Title tag:**
Priisma — Product Design Leadership for Scaling SaaS Companies

**Meta description:**
Priisma helps funded startups and SaaS companies shape, launch, and grow better digital products through product strategy, design leadership, and hands-on execution.

**Canonical:** https://www.priisma.com/

**Open Graph:**
```
og:title — Priisma — Product Design Leadership for Scaling SaaS Companies
og:description — [same as meta description]
og:type — website
og:url — https://www.priisma.com/
og:image — [placeholder or existing social image]
```

**Target keywords (use naturally in copy and headings — do not stuff):**
- product design leadership
- SaaS product design
- product strategy
- startup product design consultant
- fractional head of design
- UX strategy
- product design studio
- Fede Bozo designer

**Optional:** Add JSON-LD for `ProfessionalService` or `Person` schema if easy to add without bloat.

---

## Semantic HTML requirements

Use proper landmarks throughout:

```
<header>
<nav aria-label="Primary">
<main>
<section> for each content section
<article> for each project
<footer>
```

**Heading hierarchy:**
- One `<h1>` only — the hero headline
- `<h2>` for major sections
- `<h3>` for project titles and service blocks
- `<h4>` only if genuinely needed inside a project

**Other:**
- `<ul>` / `<li>` for service bullets and project metadata
- `<figure>` / `<figcaption>` for meaningful project images
- `<p>` for text — no div soup
- `<button>` only for actions; `<a>` for navigation and email links
- No "click here" link text

---

## Accessibility requirements

- Sufficient color contrast throughout
- All images have meaningful alt text
- Decorative images use `alt=""`
- Keyboard accessible navigation
- Visible focus states on all links and buttons
- Descriptive link text
- Mobile nav operable without complex JS
- Respect `prefers-reduced-motion` if any transitions are added

---

## Performance requirements

- Minimal JavaScript — avoid hydration unless genuinely needed
- Use Astro image optimization (`astro:assets`) where available
- Explicit `width` and `height` on all images
- Lazy-load below-the-fold images; do NOT lazy-load hero image
- Keep CSS lean using Tailwind utilities
- No render-blocking assets
- Prefer SVG for icons and simple diagrams
- Keep the DOM clean and not deeply nested
- No animation libraries

---

## Tailwind guidance

Use Tailwind for layout and spacing. Keep styling restrained.

**Use:**
- Responsive container widths
- Generous vertical spacing
- Balanced text measure for readability (`max-w-prose` where appropriate)
- Grid layout for service cards and project sections
- Subtle borders
- Clear hover and focus states

**Avoid:**
- Heavy gradients everywhere
- Flashy card hover effects
- Excessive border-radius unless already part of the existing brand
- Visual clutter

---

## File structure (suggested — adapt to existing structure)

```
src/
  pages/
    index.astro
  components/
    Header.astro
    ProjectCard.astro (or ProjectSection.astro)
  data/
    projects.ts
  layouts/
    BaseLayout.astro
```

If the existing site is mostly in one file, keep it simple. Do not over-componentize.

### Suggested project data shape

```ts
type Project = {
  slug: string
  title: string
  summary: string
  role: string
  date: string
  company: string
  companyUrl?: string
  externalUrl?: string
  heroImage: string
  heroAlt: string
  supportingImages?: {
    src: string
    alt: string
    caption?: string
  }[]
}
```

---

## What not to do

- Do not redesign the brand from scratch
- Do not build a CMS
- Do not add complex animations
- Do not add a blog or multiple pages
- Do not include IRU anywhere
- Do not overengineer the component architecture
- Do not use jargon in copy — refer to voice rules above
- Do not lazy-load the hero image
- Do not invent achievements or metrics for existing projects

---

## Acceptance criteria

The work is done when:

- [ ] Site still runs in Astro + Tailwind
- [ ] Remains a single-page portfolio
- [ ] Top nav added and works with anchor links
- [ ] Cigarwell is the first project in Work and appears in nav
- [ ] IRU does not appear anywhere
- [ ] All new copy is implemented exactly as written above
- [ ] Placeholder images used where final assets are missing
- [ ] HTML is semantic and accessible
- [ ] SEO metadata is updated
- [ ] Site is clearly positioned toward funded SaaS / scaling startups
- [ ] Site feels premium, clear, and intentional
- [ ] Implementation stays simple and performant
