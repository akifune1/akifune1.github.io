# Feature Spec: Mobile Responsiveness & Touch Design Standards

## 1. Overview & Objectives
- **Summary**: Comprehensive mobile responsiveness overhaul adapting the Catppuccin Mocha portfolio across smartphone (320px–480px), tablet (481px–1024px), and desktop viewports. Implements mobile navigation drawer with backdrop blur, touch-calibrated hit targets (≥ 44px), adaptive typography clamps, responsive Fastfetch terminal text wrapping, and hover/touch interaction guards.
- **Goals**:
  - Full-width mobile navigation drawer with smooth slide-down animation, backdrop blur, auto-close on selection/outside click, and integrated CTA.
  - Fluid typography and layout scaling across all breakpoints (360px, 390px, 414px, 768px, 1024px, 1440px) using CSS `clamp()` and adaptive grid rules.
  - Hero Fastfetch terminal: soft word wrapping, responsive code font size, and zero horizontal viewport blowout.
  - Ergonomic touch targets adhering to Apple Human Interface Guidelines and WCAG 2.1 AA standards (minimum 44×44px hit targets).
  - Scope `:hover` floating elevation (`transform: translateY(-6px)`) to mouse devices via `@media (hover: hover) and (pointer: fine)`, preventing sticky hover on touchscreens, while adding immediate `:active` tap feedback (`transform: scale(0.985)`).
  - Section viewport scaling: switch `min-height: calc(100vh - 64px)` to `min-height: auto` with balanced padding on mobile/tablet viewports so vertically stacked cards scroll naturally without artificial gaps.
- **Non-Goals**:
  - Altering portfolio data or textual content in `portfolioData.js`.
  - Adding invasive mobile popups or modal overlays.
  - Adding external CSS libraries or frameworks.

---

## 2. User Experience & Design
- **Visual Aesthetic & Theme**:
  - Consistent Catppuccin Mocha palette across all mobile viewports (`--ctp-crust`, `--ctp-mantle`, `--ctp-base`).
  - Mobile drawer styled in `--ctp-mantle` with `backdrop-filter: blur(12px)`, subtle rainbow hairline bottom border, and active section pastel indicators.
  - Sharp 0px/2px geometry preserved uniformly.
- **Key UI Components**:
  - **Mobile Navigation Drawer**: Accessible from the hamburger button (`mobile-toggle-btn`), expands smoothly, displays all section links in 48px touch rows with active pastel indicators, plus a prominent "Get In Touch" action button. Closes automatically on nav link tap, backdrop tap, or window resize.
  - **Hero Section**: Responsive title (`font-size: clamp(2rem, 7vw, 2.85rem)`), full-width action buttons on narrow screens, and responsive Fastfetch terminal window.
  - **Fastfetch Terminal**: Text wrapped with `word-break: break-word; overflow-wrap: break-word; font-size: clamp(0.725rem, 3.2vw, 0.825rem)`.
  - **Experience Timeline**: Left vertical line and node repositioned on `< 640px` (`padding-left: 1.25rem`, `left: -1.25rem`); role title and period badge wrap naturally.
  - **Projects & Skills Grids**: Transition to 1 column on `< 900px` with generous touch button targets.
  - **Certifications & Contact Grids**: Transition to 1 column on `< 600px` / `< 720px`, with `min-height: auto` on mobile for natural scrolling.
- **Interactions & Animations**:
  - Hover elevation (`translateY(-6px)`) applied exclusively on devices supporting real hover (`@media (hover: hover) and (pointer: fine)`).
  - Touch feedback (`:active { transform: scale(0.985); }`) provides tactile mobile response.
  - Smooth drawer expansion (`transition: max-height 0.35s ease, opacity 0.25s ease`).

---

## 3. Architecture & Technical Design
- **Tech Stack**: Vanilla CSS with modern media queries (`hover: hover`, `pointer: fine`), CSS Grid, Flexbox, React 19 hooks (`useState`, `useEffect`, `useRef`).
- **Component Breakdown**:
  - `Navbar.jsx`: Refine mobile menu state, auto-close handler on route selection, click-outside listener, and ARIA attributes (`aria-expanded`, `aria-controls`).
  - `Hero.jsx`: Terminal block markup verified for mobile text wrapping.
  - CSS Files: Update media queries across `index.css`, `navbar.css`, `hero.css`, `experience.css`, `projects.css`, `skills.css`, `certifications.css`, `contact.css`, `footer.css`.
- **State Management**:
  - Local `mobileOpen` state in `Navbar.jsx` with window resize event listener to automatically reset when crossing desktop breakpoint (> 960px).

---

## 4. Detailed Feature Breakdown

### Section 1: Universal Mobile Layout & Interaction Standards (`src/styles/index.css`)
- Set `html, body { overflow-x: hidden; width: 100%; }` to prevent horizontal micro-scrolling.
- Update `.container`: `padding: 0 1rem;` on screens `< 480px`, `padding: 0 1.25rem;` on `< 768px`, and `padding: 0 1.75rem;` on desktop.
- Wrap card hover elevation in `@media (hover: hover) and (pointer: fine)`.
- Add `@media (hover: none)` tap feedback for all cards: `:active { transform: scale(0.985) !important; }`.
- Ensure all interactive buttons have `min-height: 44px` on mobile screens.

### Section 2: Mobile Navigation Drawer (`src/components/Navbar.jsx`, `src/styles/navbar.css`)
- Enhance `.mobile-menu`: fixed or absolute slide-down drawer with `background-color: rgba(24, 24, 37, 0.96)`, `backdrop-filter: blur(12px)`, and `border-bottom: 1px solid var(--border-color)`.
- Make `.mobile-nav-links a`: `display: flex; align-items: center; min-height: 48px; padding: 0.75rem 1rem; font-size: 1rem; border-radius: var(--radius-sharp);`.
- Add active indicator styling matching desktop active section colors.
- Add an integrated mobile "Get In Touch" primary action button inside the drawer.
- Add click-outside and `Escape` key listeners in `Navbar.jsx` to dismiss the drawer automatically.

### Section 3: Hero Section & Fastfetch Terminal (`src/styles/hero.css`)
- Adaptive typography: `.hero-title { font-size: clamp(2rem, 7.5vw, 2.85rem); }`.
- Terminal window: `.hero-code-block { font-size: clamp(0.725rem, 3.2vw, 0.825rem); line-height: 1.55; }`.
- Enable soft line wrapping: `.code-output div { overflow-wrap: break-word; word-break: break-word; }`.
- CTA group: on screens `< 480px`, `.hero-cta-group { flex-direction: column; width: 100%; } .hero-cta-group .btn { width: 100%; }`.

### Section 4: Experience Timeline (`src/styles/experience.css`)
- At `< 640px`: adjust `.timeline-container { padding-left: 1.25rem; }` and `.timeline-node { left: -1.25rem; width: 14px; height: 14px; }`.
- Header: allow `.timeline-card-header` to wrap with `flex-direction: column; gap: 0.5rem;` when screen width is constrained, keeping the period badge aligned.

### Section 5: Projects, Skills, Certifications & Contact (`projects.css`, `skills.css`, `certifications.css`, `contact.css`)
- Transition grids cleanly:
  - Projects: 1 column on `< 900px`.
  - Skills: 1 column on `< 900px`.
  - Certifications: 2 columns on `< 1080px`, 1 column on `< 720px`.
  - Contact: 2 columns on `< 1024px`, 1 column on `< 600px`.
- Viewport height resets:
  - On `< 1080px`, set `.certifications-section { min-height: auto; padding: 3rem 0; }`.
  - On `< 1024px`, set `.contact-section { min-height: auto; padding: 3rem 0; }`.
- Contact email truncation / wrapping: ensure `kolbyhernandezbiz@gmail.com` wraps or scales cleanly without overflowing card boundaries.

---

## 5. File Structure
```
src/
├── components/
│   ├── Navbar.jsx           # Auto-close on link/outside click, mobile menu ARIA
├── styles/
│   ├── index.css            # Universal mobile resets, touch-calibrated hover/active rules
│   ├── navbar.css           # Full-width slide-down drawer with backdrop blur & 48px hit targets
│   ├── hero.css             # Fluid clamp typography, soft terminal text wrapping, full-width CTA
│   ├── experience.css       # Narrow mobile timeline adjustments and period badge wrapping
│   ├── projects.css         # Single-column grid and touch-friendly action links
│   ├── skills.css           # Single-column grid and responsive skill rows
│   ├── certifications.css   # Single-column mobile stack, min-height: auto on mobile
│   ├── contact.css          # Responsive 1-col mobile channels, word-wrapping for email
│   └── footer.css           # Responsive mobile footer alignment
specs/
└── mobile-responsiveness-and-touch-standards.md  # Approved specification
```

---

## 6. Acceptance Criteria
- [ ] Mobile navigation drawer opens smoothly, provides min 44px touch targets, highlights active sections, auto-closes on item selection or outside click, and dismisses on `Escape`.
- [ ] Hero terminal displays Fastfetch output on 360px–430px smartphone screens with zero horizontal overflow and readable text wrapping.
- [ ] All cards (Hero terminal, Experience, Projects, Skills, Certifications, Contact) do NOT get stuck in elevated hover state upon touch tap on mobile devices; they provide instant `:active` scale feedback.
- [ ] Desktop devices retain the smooth `translateY(-6px)` floating lift on mouse hover.
- [ ] Certifications and Contact sections scroll naturally on mobile devices without artificial empty space or stretching (`min-height: auto` on mobile/tablet).
- [ ] All interactive buttons and links across the site satisfy minimum 44×44px hit targets on touchscreens.
- [ ] Production build (`npm run build`) succeeds with zero errors.
- [ ] Real-time timestamped entry added to `CHANGELOG.md` referencing this spec.
