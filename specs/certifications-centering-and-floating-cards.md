# Feature Spec: Certifications Viewport Centering, Space Optimization & Universal Floating Hover Fix

## 1. Overview & Objectives
- **Summary**: Resolve the card hover floating animation conflict across all sections caused by `.reveal.active` transform collisions, make the Certifications section full-viewport centered (matching Hero and Contact), and optimize the vertical real estate in both Certifications and Contact sections by scaling card dimensions, vertical padding, and typography without adding unnecessary text clutter.
- **Goals**:
  - **Universal Floating Hover Fix**:
    - Fix the CSS specificity and transition conflict where `.reveal.active` (`transform: translateY(0)`) overrides the `:hover` state (`transform: translateY(-6px)`) on cards.
    - Ensure every card on the site (Projects, Skills, Certifications, Contact, Experience, Hero) smoothly floats upward on hover with `transform: translateY(-6px)` and `--shadow-floating`.
  - **Certifications Section Viewport Centering**:
    - Configure `.certifications-section` to have `min-height: calc(100vh - 64px)` with flexbox vertical and horizontal centering, so when navigating to `#certifications` via the navbar or scrolling, the section fills the viewport in a focused, balanced frame.
  - **Capitalize on Extra Space in Certifications & Contact**:
    - **Certifications**: Increase card vertical padding (`1.75rem 1.6rem`), typography scale (title, description, credential ID), icon size, and min-height (`min-height: 380px` or proportional height) so the 3 credential cards fill the centered screen naturally with generous breathing room.
    - **Contact**: Enlarge the 4 channel cards with larger icon containers (48px), expanded typography, increased min-height (`min-height: 320px`), and generous vertical spacing to fill the viewport height cleanly.
  - **Strict Anti-Clutter Standard**:
    - Adhere strictly to section 5 of `AGENTS.md`: no ornamental badges, no superficial status pills, vertical card anatomy with natural breathing room.
- **Non-Goals**:
  - Adding extra text, fake audit metrics, or redundant banners to Certifications or Contact.
  - Modifying project case studies data or skills data.

---

## 2. User Experience & Design

### 2.1 Universal Floating Card Standard
- All cards share the same physics and elevation:
  - Default: `transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1);`
  - Hover: `transform: translateY(-6px); box-shadow: var(--shadow-floating);`
  - Specificity override: Ensure `.card-name:hover, .card-name.reveal.active:hover` always applies the `-6px` lift without interference from scroll reveal keyframes.

### 2.2 Certifications Section Layout & Viewport Ergonomics
- Layout:
  ```css
  .certifications-section {
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;
    position: relative;
  }
  .certifications-section .container {
    width: 100%;
  }
  ```
- Grid & Card Scale:
  - 3-column responsive grid with `gap: 1.5rem`.
  - `.cert-card`: `min-height: 360px`, `padding: 1.75rem 1.6rem`, generous vertical spacing between header, body, credential ID box, and verification action button.
  - `.cert-title`: scaled up to `1.2rem` with high legibility.
  - `.cert-desc`: scaled up to `0.875rem` with comfortable line height (`1.55`).
  - Action button (`Verify Credential ↗`): prominent monospaced button with smooth hover glow.

### 2.3 Contact Section Viewport & Card Scale
- Layout:
  - `min-height: calc(100vh - 64px)` with flexbox centering.
  - `.contact-channels-grid`: 4-column portrait vertical cards.
- Card Scale:
  - `.contact-channel-card`: `min-height: 320px`, `padding: 1.85rem 1.5rem`.
  - Icon wrap enlarged to `48px × 48px`.
  - Title enlarged to `1.05rem` (semi-bold) with clear monospaced tag.
  - CTA action prompt (`Copy Address →`, `Visit Profile →`, etc.) neatly anchored at the bottom with divider.

---

## 3. Architecture & Technical Design
- **Files Modified**:
  - `src/styles/index.css`:
    - Ensure `.reveal.active` doesn't block hover transforms by setting `pointer-events` properly and adding card hover selector rules that maintain priority.
  - `src/styles/certifications.css`:
    - Add viewport centering (`min-height: calc(100vh - 64px)`).
    - Increase card padding, typography scale, and card min-height.
    - Ensure card hover has priority: `.cert-card:hover, .cert-card.reveal.active:hover { transform: translateY(-6px); box-shadow: var(--shadow-floating); }`.
  - `src/styles/contact.css`:
    - Refine viewport centering and enlarge card padding, icon boxes, typography, and card min-height.
    - Ensure card hover has priority: `.contact-channel-card:hover, .contact-channel-card.reveal.active:hover { transform: translateY(-6px); box-shadow: var(--shadow-floating); }`.
  - `src/styles/projects.css`:
    - Ensure `.project-card:hover, .project-card.reveal.active:hover { transform: translateY(-6px); box-shadow: var(--shadow-floating); }`.
  - `src/styles/skills.css`:
    - Ensure `.skills-category-card:hover, .skills-category-card.reveal.active:hover { transform: translateY(-6px); box-shadow: var(--shadow-floating); }`.
  - `src/styles/hero.css`:
    - Ensure `.hero-terminal-card:hover, .hero-terminal-card.reveal.active:hover { transform: translateY(-6px); box-shadow: var(--shadow-floating); }`.

---

## 4. Acceptance Criteria
- [ ] Hovering on cards in Projects, Skills, Certifications, Contact, and Hero causes them to smoothly float upward (`translateY(-6px)`) with the floating drop shadow.
- [ ] No `.reveal.active` style overrides or prevents the card hover animations.
- [ ] Clicking "Certifications" in the navbar smoothly scrolls to a perfectly vertically and horizontally centered section filling the screen (just like Hero and Contact).
- [ ] Certifications cards have increased scale, padding, and vertical breathing room, eliminating empty dead space.
- [ ] Contact channel cards have increased vertical scale, icon sizes, and padding, eliminating empty dead space while remaining anti-cluttered.
- [ ] Application builds with zero errors (`npm run build`).
