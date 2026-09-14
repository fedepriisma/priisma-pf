# Fede Bozo — Design direction

Updated 2026-09-13. This direction governs the homepage. Existing case studies retain their visual systems; avoid global restyling or unrelated refactors. It supersedes the former studio positioning, yellow accents, heading glow, section alternation and lead-generation template for the homepage.

## The idea

A personal reason to make something, followed by the real thing. The opening is the slightly absurd truth: Fede wanted to see a play, and ended up building a platform. ShowBliz is evidence of thinking, product design, engineering, launch and continued care. The beginning of a community matters more than invented scale metrics.

The audience is stakeholders considering hiring Fede. They should see independent judgment, the ability to execute, and a human reason behind that ability. The page should feel like an authored theater program: compact, direct, asymmetrical, and unfolding as one story.

## Content sequence

1. Fede Bozo: product designer, design engineer, writer.
2. The personal hook beside actual desktop and mobile ShowBliz captures.
3. Why ShowBliz exists, with ownership from concept through launch.
4. Community: the meaningful result, in the owner's own terms.
5. Independent thought, empathy, collaboration and responsibility.
6. Writing from Ummaguma, explicitly a book in progress. Notes adapted from conversations must not be presented as published articles or verbatim manuscript excerpts.
7. Two supporting projects. Earlier case studies remain reachable in a disclosure.
8. A human introduction, email and the provided LinkedIn profile.

No services grid, availability badges, generic process diagram, diagnostic funnel, fabricated endorsements or speculative metrics. Do not add socials or publication links that Fede has not provided.

## Voice

Specific observations, plain language, understated humor. Questions are substantive, not decorative. No grand declarations, designer mystique, manufactured rebellion, jargon or aggressive posturing. The punk quality comes from independent thinking and deliberate choices, not swearing or distressed decoration.

Core stance, synthesized from Fede's Ummaguma discussions: question automatic answers; make complexity understandable; build through empathy and collaboration; use technology to serve human experience. AI expands capability without assuming responsibility for purpose.

## Visual composition

Near-white bone `#efefe8`, ink `#121310`, electric blue `#164bea`. Supporting text `#595b53`, rules `#bebfb5`. Blue is a deliberate editorial emphasis and link/focus signal. One blue community passage gives the story a change of pace. Real product screenshots retain their authentic colors; do not recolor the product to match this site.

Use the existing Mona Sans and Instrument Serif. No font installation. Editorial serif for the personal story and writing, direct sans-serif for product and thought, small monospace for sparse metadata. No heading glow on the homepage.

Desktop opening: approximately 43% story / 57% product, with both real desktop and mobile views visible. Slight rotations distinguish the product composition and notebook. The underlying layout is a precise grid. No fake paper texture, decorative terminal, sticker collection, empty numbered sections, gradients, repeated cards or default section alternation.

## Product preview and motion

Real ShowBliz screenshots from September 2026, not invented interface mockups. Discover and This week controls switch coordinated desktop/mobile views. View larger opens a native dialog with device selection and a link to the live site. Captures are dated because listings change. Never describe screenshots as a live embed or recorded video.

Motion supports the story: brief transitions between actual preview states, subtle entry movement of the community statement where CSS scroll-driven animation is supported, and clear disclosure feedback. No perpetual animation, scroll hijacking, custom cursor or forced playback. Respect reduced motion. All content and links remain usable without JavaScript; enhancement-only controls are initially hidden.

## Responsive and accessibility

Stack the opening on narrow screens, retaining both actual product views. Avoid horizontal page overflow. Native disclosures for writing and earlier work; native modal dialog for enlarged previews (Escape closes, focus returns to the opener). Use real buttons with pressed states for preview/device choices. Keep visible focus, semantic headings, explicit image dimensions, informative alt text, and contrast of at least 4.5:1 for normal text. Load the first product previews eagerly and defer other captures.

## Implementation boundaries

Astro, existing shared head/analytics, local homepage styles and minimal JavaScript. Preserve case-study routes, dependencies, lockfiles and unrelated user edits. Production build plus desktop/mobile visual inspection and preview/disclosure/modal interaction checks before delivery. No deployment without request.
