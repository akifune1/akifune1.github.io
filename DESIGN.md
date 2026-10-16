---
name: Kolby Hernandez Portfolio
description: A warm editorial dossier with readable professional evidence and restrained brutalist detail.
colors:
  page: "#f2f0e3"
  surface: "#e8e6d8"
  text: "#2e2e2e"
  text-muted: "#605f55"
  rule: "#c8c7b7"
  control-border: "#767665"
  accent: "#655b7e"
  page-dark: "#2e2e2e"
  surface-dark: "#37363b"
  text-dark: "#f2f0e3"
  text-muted-dark: "#c2c2b4"
  rule-dark: "#55525b"
  control-border-dark: "#aaa5b5"
  accent-dark: "#c8bbe5"
  focus: "#655b7e"
  focus-dark: "#c8bbe5"
typography:
  display:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 9.5vw, 9rem)"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: ".005em"
  display-mobile:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 10.625vw, 5.625rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: ".005em"
  headline:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.585rem, 4.62vw, 3.85rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-.005em"
  headline-mobile:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "37.62px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-.005em"
  title:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "29.7px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  title-mobile:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "27.72px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  project-title:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "31.68px"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "0"
  skills-title:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "26.73px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  credential-title:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "24.75px"
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: "0"
  credential-title-mobile:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "22.77px"
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: "0"
  body:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "16.83px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  body-mobile:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "15.84px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  subtext:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "22.5px"
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: ".012em"
  subtext-mobile:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "20.25px"
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: ".012em"
  project-tagline:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "18.81px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: ".012em"
  project-tagline-mobile:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "17.82px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: ".012em"
  label:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "13.86px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  compact-label:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "11.88px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  credential-meta:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "12.87px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  compact-copy:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "14.85px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: ".012em"
  button:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "14.85px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".012em"
  emphasis:
    fontFamily: "'Bricolage Grotesque', Arial, sans-serif"
    fontSize: "13.86px"
    fontWeight: 600
    lineHeight: 1.8
    letterSpacing: ".012em"
  credential-id:
    fontFamily: "ui-monospace, Consolas, monospace"
    fontSize: "12.87px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: ".012em"
  contact-display:
    fontFamily: "Junicode, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.65rem, 3.3vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: "-.025em"
rounded:
  square: "0"
spacing:
  "8": "7.2px"
  "12": "10.8px"
  "16": "14.4px"
  "20": "18px"
  "24": "21.6px"
  "28": "25.2px"
  "32": "28.8px"
  "36": "32.4px"
  "48": "43.2px"
  "64": "57.6px"
  "88": "79.2px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.page}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "10.8px 19.8px"
  button-primary-hover:
    backgroundColor: "{colors.text}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "10.8px 19.8px"
  button-outline-hover:
    backgroundColor: "{colors.surface}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
  text-link-hover:
    textColor: "{colors.accent}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "8.1px 11.7px"
  theme-toggle-hover:
    backgroundColor: "{colors.surface}"
  project-entry:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "39.6px 0"
  navigation:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
  margin-rail:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    padding: "0 9px"
    width: "139.5px"
  mobile-section-index:
    backgroundColor: "{colors.page}"
    textColor: "{colors.text-muted}"
---

# Design System: Kolby Hernandez Portfolio

## Overview

Warm editorial minimalism: cream and charcoal canvases, a single purple accent, Junicode headings, and comfortably weighted Bricolage Grotesque reading text. The centered hero keeps Kolby Hernandez on one line. Both margin rails and all professional evidence remain required.

## Colors

The frontmatter is normative. Purple is the only interface accent: light #655b7e and dark #c8bbe5. Sections share the selected page canvas, exactly #f2f0e3 or #2e2e2e; the hero alone uses the user-supplied themed scenery beneath a protective wash. Do not add tinted section bands or technology-label fills. Credential badges retain their original source colors as an explicit exception to the interface accent palette.

Seven registered inherited color properties and one numeric hero-image blend interpolate together on the document root over 280ms. Descendant hover transitions are temporarily disabled so they do not lag behind the root palette. Theme attributes and native color-scheme change synchronously. Browsers without typed-property animation switch consistently without interpolation. Reduced motion removes the transition.

## Typography

Self-hosted Junicode uses weight 500 for headings and the single-line hero; only the surname is italic and purple. Bricolage Grotesque reading text is weight 400 at 16.83px/1.8, 15.84px on mobile, with .012em tracking. The landing uses a 22.5px summary and 16.875px navigation/actions. The latest sizing request supersedes the earlier 125%/110% proportions: normal browser zoom now approximates the previous layout at 90%. The root rem base is 90%; pixel-based type, spacing, icons, and layout breakpoints are reduced correspondingly. Viewport units remain unchanged and interactive targets retain a 44px minimum where needed. Subtitles, primary/outline buttons, and desktop navigation use 500; existing detail labels may use 600. Credential IDs remain monospace. Do not condense the type or tighten the reading measure.

Font provenance and licenses: [public/fonts/README.md](public/fonts/README.md). Upright/italic Junicode and the used Bricolage weights remain self-hosted with swap fallbacks.

## Layout

Keep the existing responsive editorial columns and content sequence. The main container reserves 162px desktop gutters for both 139.5px-wide margin rails at 922px and above. Rail labels have transparent backgrounds and 13.5px text. Below that, the six-section bottom index provides equivalent navigation. Mobile content uses 18px side padding. Hide the native viewport scrollbar through scrollbar styling; preserve wheel, touch, keyboard, anchor, and rail scrolling.

The masthead is transparent and has no name or bottom separator. Its inner row inherits the shared content container's width, maximum, and responsive side margins without separate width overrides. The first link and theme control align with the content's outer edges. Six desktop links share the available space with a minimum 36px gap and 44px separation before the theme control. Below 1100px, About/Projects quick links sit beside the theme/menu controls, using 32px gaps or 18px on small phones; the drawer retains all sections. The earlier compact breakpoint protects navigation from crowding inside the shared rail gutters.

The hero owns at least one small viewport height (100svh), with content centered inside safe top/bottom padding. Its grid explicitly uses minmax(0, 1fr), and the content container has min-width: 0 so the max-content credential track cannot expand the grid or shift the hero sideways. Other sections also have a viewport minimum and 87.3px vertical breathing room so content boundaries feel intentional. Tall content grows naturally; do not add scroll snapping. The single-line hero name, centered summary, actions, and credentials remain intact. Use actual responsive type/spacing, not CSS zoom or a scaled page transform.

### Hero Scenery and Credential Loop

The user supplied `public/images/hero_light.jpg` and `hero_dark.jpg`. These are decorative, unmodified source assets, not generated artwork. Two cover images remain mounted, with the dark layer opacity driven by the inherited `--hero-dark` number in the same 280ms root transition as the palette. The light image remains opaque underneath, avoiding a mid-transition transparency dip. Both load eagerly; the initial mode receives high fetch priority. Light scenery uses a restrained 2px blur and a 50–72% page-colored wash so its detail remains present. Dark scenery retains 5px blur and a 70–88% wash. Wash strength follows the same numeric root blend, without a separate theme timer. The lower 40% receives additional blur and a mask fades the complete background to zero opacity at the hero bottom.

The five original credentials plus UI/UX Design scroll continuously in two identical groups; one exact group width is half the track. A 32-second linear translate loop has no reset gap. The duplicate is hidden from assistive technology. The edges fade and blur without painting separate panels. Pause/resume preserves phase; hover, leaving the viewport, or hiding the document pauses motion. Reduced motion presents a single static wrapping list and hides the animation control.

The hero summary is: “Full-Stack Software Engineer that specializes in Cybersecurity with a passion for User Interface and Experience Design.” The footer credits the supplied backgrounds to [furi / ふーり on Pixiv](https://www.pixiv.net/en/users/41736171), using the attribution provided by the user.

## Elevation & Depth

Flat surfaces and fine rules. No ornamental shadows, glow, or white icon plates.

## Shapes

Square controls and rectangular editorial regions. Skill icons use consistent line weight, scale, and purple ink. Credential badges retain their original colors. No separate provider-logo icons appear beside issuer names.

## Components

- Skills use contextual Lucide pictograms beside every skill and category heading. Individual icons are 16.2px with 1.75px stroke; category icons are 21.6px. Text remains the accessible label.
- Credential artwork occupies an 87.12px square on wide layouts, 71.28px at 990px and below, and 55.44px on small mobile. Original PNG alpha provides transparency. No white-removal or recoloring filter is applied: white lettering and panels belong to the artwork and must remain opaque. Issuer name and issue date are separated by a middle dot. Source PNGs and verification URLs remain unchanged.
- The hero has one clipped type entrance and reversible scroll movement. Projects alternate horizontal entrances; skills combine horizontal movement and a restrained scale change. A separate page-colored heading cover scales away from the left edge; the text itself is never clipped. The observer uses the full viewport and starts once per visit, cancelling only after a real exit. Identity-checked finish callbacks cannot erase newer playback. Section rules remain static. Credential rows/contact links enter horizontally, and experience retains a quieter vertical entrance. All repeat after leaving and re-entering view, return to a neutral resting pose, and cancel offscreen work.
- Skill lists use auto-fitting columns with a 198px minimum. The label is now Vulnerability Scanners; the old forced full-row layout is removed. Very narrow screens use 13.86px skill labels without truncation.
- Theme changes animate the inherited palette only. Keep controls synchronized, storage safe, and focus/scroll position untouched. No separate color animations on the header or descendants.
- Preserve keyboard labels, reduced-motion alternatives, clipboard success/failure feedback, CV access, and original factual content.

## Do's and Don'ts

- Use purple and neutrals only; preserve readable contrast in both themes.
- Keep the masthead visually integrated into the page.
- Keep the single-line name legible at narrow widths without clipping.
- Vary motion by content role rather than applying the same fade everywhere.
- Keep both scroll rails, all content, and accessible mobile equivalents.
- Do not add white plates, multicolor chip palettes, or independent theme-transition timers.
- Visual and interaction verification is performed by the user. Run builds and focused non-browser checks; do not use Playwright or automated rendered checks unless explicitly requested.
