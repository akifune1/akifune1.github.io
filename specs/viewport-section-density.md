# Feature Spec: Viewport Section Density & Navbar Scroll Ergonomics

## 1. Overview & Objectives
- **Summary**: Optimize vertical spacing, card padding, form input heights, and grid gaps across all sections so that when a user clicks any navigation link in the top navbar, the corresponding section headers and primary content fit comfortably in view without awkward clipping or excessive dead space.
- **Goals**:
  - Make the **Contact** section (and specifically the message form and direct connections sidebar) fit naturally within standard screen viewports (1080p, laptop displays at 100% zoom) without pushing the form submit button or critical inputs off-screen.
  - Apply consistent, refined density adjustments across **all portfolio sections** (Hero, Philosophy, Projects, Skills, Experience, Contact).
  - Preserve scrolling capability for deep content while ensuring the immediate arrival view is clean, balanced, and aesthetic.
  - Maintain the sharp Catppuccin Mocha card visual language, typography hierarchy, and hover animations.
- **Non-Goals**:
  - Compressing content so much that text becomes unreadable or feels cramped.
  - Forcing every single sub-item of longer multi-card sections (like all timeline milestones) into a single screen if scrolling is more natural.

---

## 2. User Experience & Design
- **Visual Aesthetic & Theme**: Preserve Catppuccin Mocha dark theme (`#11111b` crust, `#1e1e2e` base, `#313244` surface0, `#45475a` borders) and sharp geometry (`border-radius: 0px`).
- **Layout Adjustments**:
  - **Section Vertical Padding**: Reduced from `2.5rem – 3.5rem` to `1.5rem – 2rem` for top/bottom padding across all sections.
  - **Section Headers**: Tighter margin bottom (`0.85rem`), slightly refined title size (`1.5rem`), and concise subtitle line heights.
  - **Card Padding & Gaps**: Standardized on compact, breathable padding (`1rem – 1.25rem`) and grid gaps (`1rem – 1.25rem`).
  - **Form Controls (Contact)**: Reduced label margins, input padding (`0.55rem 0.85rem`), and textarea min-height (`80px–90px` instead of `120px`), ensuring the Send button is immediately visible upon navbar click.
  - **Scroll Alignment (`scroll-padding-top`)**: Calibrated to `68px` to ensure section headers align right under the sticky navbar without cutoffs or extra blank space.

---

## 3. Architecture & Technical Design
- **Tech Stack**: React 19, Vanilla CSS with CSS custom properties.
- **Component Breakdown**:
  - `src/styles/index.css`: Global `.section-header`, `scroll-padding-top`, and layout tokens.
  - `src/styles/contact.css`: Contact section padding, form element heights, textarea sizing, quick-link list gaps.
  - `src/styles/hero.css`: Hero section vertical spacing, bio margin, greeting badge spacing.
  - `src/styles/philosophy.css`: Philosophy section padding, 2x2 grid gap, card padding and description spacing.
  - `src/styles/projects.css`: Projects section padding, filter bar spacing, project card padding.
  - `src/styles/skills.css`: Skills section padding, category card padding, skill row padding and badge spacing.
  - `src/styles/experience.css`: Experience section padding, timeline node and card padding/gaps.

---

## 4. Detailed Section Breakdown

### 4.1 Contact Section (`contact.css`)
- Reduce `.contact-section` padding from `3.5rem 0 4.5rem 0` to `1.5rem 0 2.5rem 0`.
- Reduce `.contact-grid` gap from `2.25rem` to `1.25rem`.
- Refine `.contact-form-card` padding from `1.75rem` to `1.25rem` and internal body gap from `1.15rem` to `0.65rem`.
- Optimize `.form-input` and `.form-textarea` padding (`0.55rem 0.85rem`) and set `.form-textarea` min-height to `85px` (3 visible rows by default, expandable).
- Refine `.socials-sidebar` gap and `.quick-link-btn` padding (`0.55rem 0.85rem`) to fit alongside the contact form smoothly.

### 4.2 Hero Section (`hero.css`)
- Refine `.hero-bio` bottom margin from `2rem` to `1.25rem`.
- Keep `.hero-section` viewport-centered (`min-height: calc(100vh - 64px)`), with responsive spacing.

### 4.3 Philosophy Section (`philosophy.css`)
- Reduce `.philosophy-section` padding from `2.5rem 0` to `1.5rem 0 2rem 0`.
- Reduce `.philosophy-grid` gap from `1.25rem` to `1rem`.
- Refine `.philosophy-card` padding from `1.25rem 1.5rem` to `1.1rem 1.25rem` and gap to `0.65rem`.

### 4.4 Projects Section (`projects.css`)
- Reduce `.projects-section` padding from `2.5rem 0` to `1.5rem 0 2rem 0`.
- Reduce `.projects-filter-bar` bottom margin from `1.25rem` to `0.85rem`.
- Reduce `.projects-grid` gap from `1.25rem` to `1rem`.
- Refine `.project-card` padding to `1.1rem 1.25rem` and problem/solution summary padding to `0.5rem 0.75rem`.

### 4.5 Skills Section (`skills.css`)
- Reduce `.skills-section` padding from `2.5rem 0` to `1.5rem 0 2rem 0`.
- Reduce `.skills-grid` gap from `1.25rem` to `1rem`.
- Refine `.skills-category-card` padding to `1.1rem 1.25rem`.
- Refine `.skill-row` padding from `0.45rem 0.75rem` to `0.35rem 0.65rem` and gap to `0.35rem`.

### 4.6 Experience Section (`experience.css`)
- Reduce `.experience-section` padding from `3.5rem 0` to `1.5rem 0 2.5rem 0`.
- Reduce `.timeline-container` gap from `1.75rem` to `1.25rem`.
- Refine `.timeline-card` padding from `1.75rem` to `1.25rem 1.4rem` and internal gap to `0.75rem`.

---

## 5. File Structure
```
src/
├── styles/
│   ├── index.css          # Global section headers & scroll padding
│   ├── contact.css        # Compact contact form & direct connection cards
│   ├── hero.css           # Balanced hero spacing
│   ├── philosophy.css     # Compact philosophy grid & cards
│   ├── projects.css       # Balanced projects grid & card density
│   ├── skills.css         # Compact skills domain cards & skill rows
│   └── experience.css     # Refined timeline cards & node spacing
```

---

## 6. Acceptance Criteria
- [ ] Clicking any navbar link (`About`, `Philosophy`, `Projects`, `Skills`, `Experience`, `Contact`) smoothly scrolls to the section with the title and header clearly visible below the navbar.
- [ ] In the **Contact** section, the entire message form (Name, Email, Subject, Message textarea, and Send button) plus Direct Connections card fit cleanly in view without clipping on standard viewports.
- [ ] In **Philosophy**, **Skills**, and **Projects**, cards have balanced proportions and tight, aesthetic gaps without feeling cramped.
- [ ] In **Experience**, milestone cards and Git commit nodes line up cleanly with optimized breathing room.
- [ ] Responsive behavior is preserved across mobile, tablet, and desktop breakpoints.
- [ ] Code follows all file header, docstring, junior-developer inline comment standards, and changelog update rules.
