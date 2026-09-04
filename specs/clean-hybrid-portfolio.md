# Feature Spec: Clean Hybrid Portfolio (Refined Hero & Professional Copywriting)

## 1. Overview & Objectives
- **Summary**: Refine the hero section and entire portfolio by removing the bottom snapshot cards from the hero, integrating their details directly into the right-hand terminal window, making all buttons professional and clean (no `$`, `./`, `--flags`), and standardizing the Philosophy card architecture across all sections.
- **Goals**:
  - **Refined Hero Layout**:
    - Remove the bottom 4 snapshot cards to make the hero section ultra-compact and perfectly screen-friendly at 100% zoom.
    - Replace `$ init-session --candidate="kolby" --role="fullstack"` with a clean, professional badge: `✨ Full-Stack Software Engineer & UI Developer`.
    - Make hero buttons professional: `View Selected Works →`, `Design Philosophy`, `Get In Touch`.
    - Integrate the information from the 4 cards (Education: B.S. in Information Technology, Availability: Immediate / Full-Time, Arrangement: Remote / Hybrid, Core Expertise: Full-Stack & UI/UX) directly into the right-side terminal window.
  - **Professional Copywriting Across All Sections**:
    - Remove all remaining CLI syntax (`$`, `./`, `--flags`, `commit_`, etc.) from navbar, buttons, project links, skills, and contact form.
    - Standardize clean labels: `All Works`, `Full-Stack Apps`, `Frontend & UI/UX`, `Cloud & APIs`, `Live Website ↗`, `View Source Code ↗`, `Send Message`, `Back to Top ↑`.
  - **Philosophy Card Architecture Across All Sections**:
    - Retain the sharp-cornered Catppuccin Mocha cards with top-right icon containers, Sapphire subtitles, monospaced `[ ✓ ... ]` badge chips, and metadata labels.
- **Non-Goals**:
  - Overly technical shell commands in user-facing buttons and labels.
  - Cluttered hero layout with redundant cards.

---

## 2. Section-by-Section Refinements

### 2.1 Top Navigation Bar (`Navbar.jsx`)
- Brand: `Kolby Hernandez` with subtitle `Software Engineer & UI Developer`.
- Links: `About`, `Philosophy`, `Projects`, `Skills`, `Experience`, `Contact`.
- Status: `● Available for Roles` (Green beacon).
- CTA: `[ Get In Touch ]` (Primary Blue button).

### 2.2 Refined Centered Hero Section (`Hero.jsx`)
- Left Column:
  - Top Badge: `✨ Full-Stack Software Engineer & UI Developer`
  - Title: `Hi, I'm Kolby Hernandez` (Catppuccin Blue/Sapphire gradient)
  - Animated Role Subhead: `Full-Stack Software Engineer`, `UI/UX & Design Systems Developer`, `IT Graduate`
  - Bio: Human-centered summary of engineering focus, IT degree, and scalable web apps.
  - Action Buttons: `[ View Selected Works → ]` (Primary Blue), `[ Design Philosophy ]` (Secondary Surface), `[ Get In Touch ]` (Outline/Surface).
  - *Bottom 4 cards removed for clean vertical space and screen-friendly layout*.
- Right Column (Terminal Window):
  - Window Title: `developer_profile.sh (zsh)` with dot controls `[●][●][●]`.
  - Content incorporates the 4 cards' data:
    - `Candidate: Kolby Hernandez`
    - `Education: B.S. in Information Technology (Honors)`
    - `Focus: Full-Stack Web & UI/UX Systems`
    - `Availability: Immediate / Full-Time`
    - `Arrangement: Remote / Hybrid / Worldwide`
    - `Core Stack: React 19, Next.js, TypeScript, Node.js, PostgreSQL, Docker`
    - `Philosophy: User-First, Accessible, High Performance`
    - `Status: Available for Full-Time Roles`
    - `Git Status: On branch main (production-ready)`

### 2.3 Design & Engineering Philosophy (`Philosophy.jsx`)
- Exact 4 cards from user reference:
  1. **User-First Thinking** (`Empathy-driven design` • `[ ✓ Accessibility & Simplicity ]` • `Core Standard` • `<HeartHandshake>`).
  2. **Clean & Scalable Code** (`Maintainability that lasts` • `[ ✓ TypeScript & Modularity ]` • `Core Standard` • `<Code2>`).
  3. **Performance & Speed** (`Snappy feels trustworthy` • `[ ✓ Sub-second Page Loads ]` • `Core Standard` • `<Zap>`).
  4. **Cross-Functional Bridge** (`Translating tech to value` • `[ ✓ Product & Engineering ]` • `Core Standard` • `<Users>`).

### 2.4 Featured Projects Showcase (`Projects.jsx` & `ProjectCard.jsx`)
- Category Filter Pills: `All Works`, `Full-Stack Apps`, `Frontend & UI/UX`, `Cloud & APIs`.
- Sharp Terminal Project Cards:
  - Header: Git branch `main` • Status `Active` • Dot controls.
  - Problem & Solution summary box with high contrast.
  - Peach impact metrics (`⚡ 12M+ Events Monitored Daily`).
  - Action Buttons: `[ Live Website ↗ ]` and `[ Source Code ↗ ]`.

### 2.5 Skills Matrix (`Skills.jsx`)
- 4 Domain Cards with sharp borders and top-right icon containers:
  - `Frontend & Design Systems`, `Backend & APIs`, `DevOps & Cloud`, `Engineering Standards`.
  - Skill items with proficiency pills and practical descriptions.
  - Bottom row with `[ ✓ Core Technologies ]` and `Production Ready`.

### 2.6 Career & Education Timeline (`Experience.jsx`)
- Clean milestone cards with role, company, dates, and measurable impact bullets.

### 2.7 Contact & Direct Connections (`Contact.jsx`)
- Clean contact form with fields `Your Name`, `Email Address`, `Subject`, `Message`, and `[ Send Message ]` with instant feedback alert.
- Quick connect actions: 1-click email copy, LinkedIn, GitHub, and Resume download.

### 2.8 Footer (`Footer.jsx`)
- Clean human footer: `© 2026 Kolby Hernandez • Full-Stack Software Engineer & UI Developer` with `[ Back to Top ↑ ]` button.

---

## 3. Acceptance Criteria
- [ ] Bottom 4 cards removed from Hero section; their info integrated into the right-hand terminal window.
- [ ] Top hero prompt replaced with professional badge (`✨ Full-Stack Software Engineer & UI Developer`).
- [ ] All buttons across the site made professional and user-friendly (`View Selected Works →`, `Design Philosophy`, `Get In Touch`, `Live Website ↗`, `Source Code ↗`, `Send Message`, `Back to Top ↑`).
- [ ] Layout is screen-friendly at 100% zoom with compact vertical rhythm and centered Hero.
- [ ] Philosophy cards strictly match the reference design.
- [ ] Build compiles with 0 errors and adheres to all repository guidelines.
