# Feature Spec: Unified Catppuccin Mocha Portfolio (Philosophy-Adapted Design)

## 1. Overview & Objectives
- **Summary**: Unify the entire portfolio under the exact visual design language of the Philosophy section, optimize the layout for 100% zoom screen ergonomics, and replace all residual CLI/shell text with clean, professional, and accessible copywriting.
- **Goals**:
  - **Philosophy Design Language Across All Sections**:
    - Every section (Hero, Philosophy, Projects, Skills, Experience, Contact) will use the high-contrast card architecture from the reference design:
      - Sharp corners (`border-radius: 0px` / `2px` micro-bevel).
      - Solid `#1e1e2e` (Base) card surface with crisp 1px `#45475a` (Surface1) border.
      - Top-right icon container box (`background: #313244; border: 1px solid #45475a`).
      - Clean white/lavender heading (`#cdd6f4`, bold sans-serif).
      - Sapphire subtitle (`#74c7ec`, font-weight 500).
      - Human-friendly body description (`#a6adc8`).
      - Bottom footer row with monospaced check badge (`[ ✓ Tag Name ]`) on the left and metadata label (`Core Standard`, `Active Metric`, `Production Ready`) on the right.
  - **100% Zoom Screen-Friendly Ergonomics**:
    - Calibrate vertical padding, card heights, and container gaps so the Hero section fits naturally in standard desktop viewports (1536×744 / 1920×1080 at 100% zoom) without cramped overflow or excessive scrolling fatigue.
    - Compact section padding (`3.5rem 0`), refined card padding (`1.5rem 1.75rem`), and tight 1.5rem grid gaps.
  - **100% User-Friendly & Recruiter-Ready Copywriting**:
    - Remove all terminal/CLI command text (`$ whoami`, `$ ls`, `$ ./demo`, `$ sendmail`, `--sender-name`, `commit_9e4a1b`, `$ cd ~`, etc.).
    - Replace with clear, elegant text: `Get In Touch`, `View Selected Works`, `Live Demo ↗`, `View Source Code ↗`, `All Works`, `Full-Stack Apps`, `Your Name`, `Back to Top ↑`.
- **Non-Goals**:
  - Cryptic shell commands or confusing terminal syntax anywhere in the UI.

---

## 2. Section-by-Section Design Specification

### 2.1 Navigation Bar (`Navbar.jsx`)
- **Branding**: `Kolby Hernandez` with subtitle `Software Engineer & UI Developer` (clean text, no CLI prompts).
- **Navigation Links**: `About`, `Philosophy`, `Projects`, `Skills`, `Experience`, `Contact`.
- **Status Indicator**: `● Available for Roles` (Green beacon).
- **Action Button**: `[ Get In Touch ]` (Primary Catppuccin Blue button).

### 2.2 Screen-Friendly Hero Section (`Hero.jsx`)
- **Dimensions**: `min-height: calc(100vh - 64px); display: flex; align-items: center; justify-content: center; padding: 2rem 0;`
- **Left Column**:
  - Badge: `Full-Stack Software Engineer & UI Developer`
  - Headline: "Hi, I'm Kolby Hernandez" with Catppuccin gradient.
  - Subheading: "Crafting intuitive, accessible, and high-performance web products with a user-first mindset."
  - Bio: Concise summary of IT education and full-stack engineering focus.
  - Actions: `[ View Selected Works → ]` (Primary Blue) and `[ Get In Touch ]` (Secondary).
  - Recruiter Snapshot: 4 sharp cards (B.S. in Information Technology, Full-Stack & UI/UX, Immediate Availability, Remote / Worldwide).
- **Right Column (Philosophy-Styled Profile Card)**:
  - Header: Title `Candidate Profile` + Subtitle `B.S. in Information Technology` + Top-right User icon box.
  - Body: Summary of core strengths, accessibility focus, and engineering values.
  - Core Stack Tags: `React 19`, `Next.js`, `TypeScript`, `Node.js`, `PostgreSQL`, `Docker`, `UI/UX Design`.
  - Footer Row: `[ ✓ 4+ Years Experience ]` on left, `Available for Hire` on right.

### 2.3 Design & Engineering Philosophy (`Philosophy.jsx`)
- 4 sharp cards exactly matching the reference:
  1. **User-First Thinking** (`Empathy-driven design` • `[ ✓ Accessibility & Simplicity ]` • `Core Standard` • `<HeartHandshake>`).
  2. **Clean & Scalable Code** (`Maintainability that lasts` • `[ ✓ TypeScript & Modularity ]` • `Core Standard` • `<Code2>`).
  3. **Performance & Speed** (`Snappy feels trustworthy` • `[ ✓ Sub-second Page Loads ]` • `Core Standard` • `<Zap>`).
  4. **Cross-Functional Bridge** (`Translating tech to value` • `[ ✓ Product & Engineering ]` • `Core Standard` • `<Users>`).

### 2.4 Featured Projects Showcase (`Projects.jsx` & `ProjectCard.jsx`)
- Category Filter Pills: `All Works`, `Full-Stack Apps`, `Frontend & UI/UX`, `Cloud & APIs`.
- Project Cards (Philosophy Architecture):
  - Header: Project Title + Sapphire Category Subtitle + Top-right External Link icon box.
  - Body: Tagline + Problem/Solution summary box with high contrast.
  - Stack Tags: High-contrast blue/sapphire/mauve tags.
  - Footer Row: `[ ✓ 12M+ Events / 99.9% Uptime ]` badge on left + `[ Live Demo ↗ ]` and `[ Source Code ↗ ]` buttons on right.

### 2.5 Skills & Capabilities Matrix (`Skills.jsx`)
- 4 Domain Cards (Philosophy Architecture):
  - Header: Category Title (e.g. `Frontend & Design Systems`) + Sapphire Subtitle (`Responsive, intuitive user interfaces`) + Top-right Domain icon box.
  - Body: Clear list of skills with name, proficiency badge, and practical description.
  - Footer Row: `[ ✓ 6 Core Technologies ]` on left + `Production Ready` on right.

### 2.6 Career & Education Timeline (`Experience.jsx`)
- Milestone Cards (Philosophy Architecture):
  - Header: Role Title + Sapphire Company & Location Subtitle + Top-right Period badge (`2023 - Present`).
  - Body: Concise role overview + 2-3 high-impact achievement bullet points.
  - Footer Row: `[ ✓ Full-Time Position / Honors Degree ]` on left + `Verified Milestone` on right.

### 2.7 Accessible Contact & Recruiter Connect (`Contact.jsx`)
- Left: Clean Contact Form Card (Philosophy Architecture) with fields: `Your Name`, `Email Address`, `Subject`, `Message`, and `[ Send Message ]` button with instant feedback alert.
- Right: Direct Connections Card with 1-click email copy, LinkedIn, GitHub, and Resume download.

### 2.8 Clean Footer (`Footer.jsx`)
- `© 2026 Kolby Hernandez • Full-Stack Software Engineer & UI Developer • B.S. in Information Technology`
- Right: `[ Back to Top ↑ ]`

---

## 3. Acceptance Criteria
- [ ] Visual architecture of the Philosophy section (sharp card, top-right icon box, Sapphire subtitle, monospaced check badge, metadata label) applied consistently across Hero, Projects, Skills, Experience, and Contact sections.
- [ ] Layout is screen-friendly and comfortable at 100% zoom (1536×744 / 1920×1080) with centered Hero and compact section padding (`3.5rem 0`).
- [ ] All CLI/terminal syntax (`$`, `./`, `commit_`, `--flags`, etc.) removed from navbar, buttons, tags, and labels.
- [ ] High-contrast Catppuccin Mocha colors used throughout.
- [ ] Build succeeds with zero errors, and all repository documentation rules are met.
