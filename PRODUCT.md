# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters evaluating Kolby Hernandez's qualifications and engineering work are the primary audience.

## Product Purpose

A personal portfolio presenting Kolby Hernandez's software engineering work, cybersecurity credentials, professional and academic background, and technical capabilities. Help recruiters assess the existing evidence and reach the available CV and contact options.

## Operating Context

Visitors browse the public portfolio across desktop and mobile devices. The existing React/Vite application assembles the introduction, experience, projects, skills, certifications, contact section, and navigation in `src/App.jsx`.

## Capabilities and Constraints

- Preserve factual content, functional capabilities, identity, assets, verified credentials and verification links, CV, project and research material, responsive behavior, accessibility accommodations, technical constraints, and GitHub Pages hosting.
- The user approved the redesign in `specs/editorial-brutalist-redesign.md`, including replacement of the prior visual presentation and carousel layouts. Both left and right desktop scroll rails remain required; all sections retain accessible mobile navigation.
- Retain the existing React, Vite, and vanilla CSS implementation and established project conventions.
- Future changes must respect the preservation requirement; ask before changing preserved material when the requested scope is ambiguous.

## Brand Commitments

Preserve Kolby Hernandez's name and factual professional identity. The approved appearance is warm editorial minimalism with purple as the only accent, Junicode headings at weight 500, and comfortable normal-width Bricolage Grotesque reading text at weight 400. The centered hero keeps “Kolby Hernandez” on one line. The transparent masthead has no repeated name and contains a centered group of navigation links. The hero owns its landing viewport and uses the user-provided hero_light/hero_dark scenery, gently blurred and faded into the chosen page canvas. The five original credential statements plus UI/UX Design form a seamless pausable loop. The hero summary describes cybersecurity specialization and a passion for User Interface and Experience Design. Other sections use the chosen page background without tinted bands. Scroll motion varies by content role, including lateral entrances and heading wipes, and replays on return visits with reduced-motion alternatives. Light mode starts at `#f2f0e3`; dark mode uses `#2e2e2e`, with synchronized root-palette transitions and persisted manual preference. Skills use purple line icons; credential badges keep their original colors, white details, and native PNG transparency. Separate provider-logo icons are removed; issuer and date use a middle-dot separator. Original credential files remain unchanged. Both desktop scroll rails remain required. `DESIGN.md` records the implemented visual system. The user performs visual and interaction verification; automated browser checks are opt-in.

## Evidence on Hand

- `src/data/portfolioData.js`: existing portfolio content.
- `src/components/`: existing presentation of experience, projects, skills, certifications, and contact options.
- `public/`: existing CV, credential badges, and image assets described in `README.md`.
- `README.md`: repository background and documented capabilities; documentation is evidence of intent, not independent verification of every claim.

Preserve authentic evidence. Do not invent credentials, testimonials, achievements, project results, or verification claims.

## Product Principles

- Help recruiters evaluate relevant qualifications using the existing evidence.
- Preserve all existing content, functionality, and identity unless a later explicit request authorizes a change.
- Keep information and navigation usable across the existing supported device sizes.
- Keep claims grounded in the project's real content and supporting links.

Latest sizing and attribution: normal browser zoom approximates the previous 90% view through responsive type, spacing, icon, and breakpoint sizes. The footer credits the user-supplied hero backgrounds to [furi / ふーり on Pixiv](https://www.pixiv.net/en/users/41736171).
