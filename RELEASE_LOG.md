# Release log

## 2026-09-14 — Fede Bozo direction across every page
**Branch:** claude/code-review-before-pr-dcabf9 · **PR:** https://github.com/fedepriisma/priisma-pf/pull/8
### What shipped
- Homepage in the Fede Bozo direction with real ShowBliz captures; mobile punchline copy fix.
- Shared masthead and footer (`Nav.astro`, `Footer.astro`) on all 8 pages; Priisma dark bar, hamburger overlay and their CSS removed.
- First-person titles and meta on case studies, about and 404; about page rewritten; placeholder Cigarwell founder quote removed.
- JSON-LD switched from a Priisma `ProfessionalService` to a `Person` entity for Fede Bozo.
- Orphaned swatseo/recraftr components and stylesheets deleted.
### Notes
Targets `new-mod-version` (dev deploy). Merging into `master` conflicts with PRs #5–#7 in 9 files; take this branch's homepage, footer and stylesheet.
