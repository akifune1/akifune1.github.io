---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Portfolio home

Mode: Persuade. Audience: recruiters. Scope: the existing single-page portfolio. Approved specification: specs/editorial-brutalist-redesign.md. Code-first.

## Direction contract

THESIS: A warm editorial dossier whose professional evidence is readable without opening a carousel. The user approved restrained brutalism, cream light mode, serif/sans typography, and both scroll rails.

OWN-WORLD: Cream #f2f0e3 and charcoal #2e2e2e with purple-only accents, Junicode headings 500 and Bricolage body 400. Transparent shared-canvas masthead, square controls, fine rules, and purple skill icons and original-color transparent credential badges. No white icon plates or independently transitioning header.

STORY: Meet Kolby, understand his discipline, review experience and detailed projects, verify skills and credentials, then download his CV or contact him.

FIRST VIEWPORT: A transparent masthead frames the centered single-line Kolby Hernandez name, with clipped entrance, purple italic surname, summary/actions/credentials, and working exploration cue. Both margin rails remain. Lateral project/credential entries, sliding/scaling skill groups, heading wipes, and vertical experience entries replay on re-entry. Seven shared palette tokens interpolate at the root in 280ms; descendants do not animate separate color transitions. Reduced motion remains supported. The user performs visual verification; no automated browser/rendered checks unless requested.

FORM: User-pinned editorial dossier; the approved specification overrides the generated assignment. seed:1d8f9db7eb346e3b.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Latest correction: each section shares the selected page canvas. The hero has a 100svh minimum and the rest have viewport minima plus vertical breathing room. Navigation omits the repeated name and uses wider outer gutters. Heading wipes target text-sized titles from the left, not the full-width rule. Provider logo icons are removed; badges preserve RGB and issuer/date uses a middle dot.

Latest hero refinement: user-supplied hero_light.jpg/hero_dark.jpg are layered behind the content with synchronized root-driven blending, a protective wash, static blur, and a blurred bottom fade. The five credential statements loop seamlessly with faded/blurred edges and pause/reduced-motion controls. Heading wipes animate a separate cover, never text clipping, with one entrance per genuine full-viewport visit and identity-safe cleanup.

Latest layout refinement: light scenery uses 2px blur and a lighter 50–72% wash; dark scenery keeps its prior treatment and both remain synchronized. Explicit zero-minimum hero grid tracks prevent the carousel from shifting the content sideways. At normal zoom, landing/nav/rail proportions approximate the earlier 125% view and remaining content approximates 110%. Navigation is a centered group, not full-width distributed links. Rail labels are transparent, and the native scrollbar is hidden without disabling scrolling.

Latest requested refinements supersede the earlier sizing: approximate the previous 90% view at normal zoom using a 90% rem base, reduced absolute layout/icon sizes, and corresponding responsive breakpoints. Preserve full-height sections and usable controls. Hero copy now states the user's cybersecurity specialization and UI/UX passion; UI/UX Design joins the credential loop. Footer credits the backgrounds to furi / ふーり on Pixiv (user 41736171). The scanner skill is Vulnerability Scanners. Badges use their native PNG alpha with no white-removal filter, preserving white artwork.

Latest navbar spacing: inherit the content container's responsive margins and align the outer navigation items to its edges. Desktop links have a minimum 36px gap, with 44px before the theme control. Use compact navigation below 1100px so the shared rail gutters do not crowd the links.
