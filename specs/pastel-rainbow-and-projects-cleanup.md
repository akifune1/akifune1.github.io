# Feature Spec: Pastel Rainbow Palette Distribution & Projects Filter Cleanup

## 1. Overview & Objectives
- **Summary**: Innovate and elevate the portfolio's visual identity by adopting the authentic Catppuccin Mocha pastel rainbow design philosophy demonstrated in the reference card architecture, while removing the buggy category filter sub-buttons from the Projects section.
- **Goals**:
  - **Adopt Pastel Rainbow Dev/Terminal Syntax Aesthetic**:
    - Style all technology tags, metadata chips, and category sub-headers using the distinctive multi-color pastel palette (Sapphire, Mauve, Sky, Green, Peach, Pink/Red, Teal, Yellow, Lavender).
    - Give each tag a dedicated 1px pastel border, a subtle matching tinted background (`rgba(color, 0.08)` to `0.12`), and crisp pastel foreground text in a monospaced font.
    - Give section subtitles, project card category taglines (e.g., `Full-Stack & AI Security` in Mauve), and key metadata distinct pastel hues for high visual hierarchy.
  - **Remove Projects Sub-Buttons**:
    - Completely eliminate the category filter bar (`.projects-filter-bar`) and category filtering state from `src/components/Projects.jsx` and `src/styles/projects.css`.
    - Directly showcase all selected projects in a clean, uncluttered layout with zero filter-related bugs or state friction.
    - Format project action triggers (e.g., `View Repository`, `Live Demo`) as clean, understated terminal buttons matching the screenshot reference.
  - **Systematic Site-Wide Innovation**:
    - Distribute pastel rainbow accents purposefully across every section (Hero, Philosophy, Projects, Skills, Experience, Research, Certifications, Contact) so the entire portfolio feels cohesive, vibrant, and unmistakably engineered.
  - **Strict Anti-Clutter Adherence**:
    - Comply with all `AGENTS.md` rules: no superficial rating chips or star meters, no decorative footer badge containers, clean vertical card flow, and genuine functional verification links.
- **Non-Goals**:
  - Removing project cards or modifying portfolio project data content.
  - Using arbitrary high-saturation neon colors outside the curated Catppuccin Mocha spectrum.

---

## 2. User Experience & Design

### 2.1 The Pastel Rainbow Design Philosophy (Reference-Driven)
The design philosophy draws directly from modern developer terminals, syntax highlighters, and the provided reference card:
- **Dark Deep Canvas**: Catppuccin Crust (`#11111b`) backdrop with Base (`#1e1e2e`) cards and Surface0 (`#313244`) subtle dividers.
- **Subheading Accents**: Card and section category tags are rendered in vibrant pastel tints (e.g., Mauve `#cba6f7`, Sapphire `#74c7ec`, Peach `#fab387`) rather than dull muted gray.
- **Multi-Color Tech Badges (The "Syntax Tag" Standard)**:
  - **Sapphire / Blue** (`#74c7ec` / `#89b4fa`): Next.js, React, Frontend frameworks
  - **Mauve / Purple** (`#cba6f7`): TypeScript, React 19, UI engines
  - **Sky / Cyan** (`#89dceb`): Cloud, WebSockets, APIs, Tooling
  - **Green** (`#a6e3a1`): Supabase, Node.js, Databases, Operational status
  - **Peach / Orange** (`#fab387`): Tailwind CSS, UI styling, Performance
  - **Pink / Red** (`#f38ba8` / `#f5c2e7`): Security, Cryptography, face-api.js, AI
  - **Teal / Mint** (`#94e2d5`): Testing, Playwright, CI/CD, Documentation
  - **Yellow / Gold** (`#f9e2af`): Auth, Hardware, Biometrics, Credentials
  - **Lavender** (`#b4befe`): Architecture, Research, Standards
- **Tag Anatomy**:
  ```css
  padding: 0.22rem 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  border-radius: 2px;
  border: 1px solid var(--tag-border);
  background: var(--tag-bg);
  color: var(--tag-color);
  ```
- **Understated Action Triggers**:
  - Direct repository and demo buttons styled with a subtle dark container (`#313244`), 1px border (`#45475a`), monospaced text, and vector icon (`Github`, `ExternalLink`) with smooth pastel hover transition.

### 2.2 Section-by-Section Palette Mapping
1. **Header & Navigation**:
   - Active section link highlighted with subtle pastel rainbow indicator or glowing dot.
2. **Hero**:
   - Terminal prompt with Mauve user (`kolby@dev`), Sapphire path (`~/portfolio`), and Green git branch status (`main*`).
   - "Full-Stack Engineer & Systems Architect" highlighted with soft pastel Rosewater & Sapphire.
3. **Philosophy (3 Pillars)**:
   - Pillar 1 (Performance & Systems): Sapphire accent (`#74c7ec`)
   - Pillar 2 (Zero-Trust Security & Cryptography): Pink/Red accent (`#f38ba8`)
   - Pillar 3 (Clean Architecture & DX): Green accent (`#a6e3a1`)
4. **Projects (Featured Works)**:
   - Section tag in Peach (`#fab387`).
   - Category tags on cards in Mauve (`#cba6f7`).
   - Multi-colored pastel tech tags on every project card.
   - Understated repository & demo action buttons.
5. **Skills**:
   - 4 Category blocks, each headed by a dedicated pastel color:
     - Frontend Engineering: Mauve (`#cba6f7`)
     - Systems & Backend: Sapphire (`#74c7ec`)
     - Database & Infrastructure: Teal (`#94e2d5`)
     - Architecture & Tools: Green (`#a6e3a1`)
   - Skill items rendered as pastel syntax badges with appropriate pastel borders and tints.
6. **Experience**:
   - Timeline nodes and dates in Green (`#a6e3a1`) & Teal (`#94e2d5`).
   - Company tags in Peach (`#fab387`), role titles in crisp White, tech pills in multi-color pastel.
7. **Research**:
   - Academic tags in Sky (`#89dceb`) and Lavender (`#b4befe`).
   - Publication badge with 1px Lavender border and direct external link.
8. **Certifications**:
   - Credential category tags in Yellow (`#f9e2af`) and Peach (`#fab387`).
   - Functional `Verify ↗` links with subtle hover glow.
9. **Contact**:
   - Direct connection cards illuminated with individual pastel identities:
     - Email: Sky (`#89dceb`)
     - LinkedIn: Sapphire (`#74c7ec`)
     - GitHub: Mauve (`#cba6f7`)
     - Resume: Green (`#a6e3a1`)

---

## 3. Architecture & Technical Design
- **Tech Stack**: React 19, Vanilla CSS.
- **Component Breakdown**:
  - `src/styles/index.css`:
    - Define comprehensive pastel syntax tokens (`--ctp-tag-*` colors, backgrounds, borders).
    - Provide `.tag-sapphire`, `.tag-mauve`, `.tag-sky`, `.tag-green`, `.tag-peach`, `.tag-pink`, `.tag-teal`, `.tag-yellow`, `.tag-lavender` utility classes.
  - `src/components/Projects.jsx`:
    - Remove `useState`, `activeCategory`, and `setActiveCategory`.
    - Remove `projectCategories` import.
    - Remove `.projects-filter-bar` markup.
    - Render `projectsData` directly.
  - `src/components/ProjectCard.jsx`:
    - Refine card header, category tagline (`.project-category-tagline` in Mauve), tech tag color mapping, and clean footer action buttons.
  - `src/styles/projects.css`:
    - Remove all `.projects-filter-bar` and `.filter-btn` CSS.
    - Align project card styles with the reference card: deep background, sharp borders, clean dividers, and syntax tags.
  - Component CSS Files (`hero.css`, `philosophy.css`, `skills.css`, `experience.css`, `research.css`, `certifications.css`, `contact.css`):
    - Align tags and accents to their designated pastel rainbow color scheme.

---

## 4. Acceptance Criteria
- [ ] Category filter buttons ("All", "Full-Stack Web", "Biometric / Security", "Civic Tech") are completely removed from the Projects section.
- [ ] All project case studies render directly in the grid without requiring category tab switches.
- [ ] Tech stack tags across all project cards feature the exact multi-color pastel syntax aesthetic from the reference image (1px pastel border, subtle matching translucent background, crisp pastel text, monospaced font).
- [ ] Project category taglines (e.g. "Full-Stack & AI Security") are rendered in vibrant pastel Mauve/Peach.
- [ ] Project card action buttons are styled cleanly and predictably without bugs.
- [ ] Pastel rainbow palette is systematically integrated across Hero, Philosophy, Skills, Experience, Research, Certifications, and Contact.
- [ ] Anti-clutter minimalist standard from `AGENTS.md` is strictly maintained.
- [ ] Project builds cleanly without errors or broken links.
