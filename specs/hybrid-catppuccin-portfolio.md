# Feature Spec: Perfect Hybrid Catppuccin Mocha Portfolio

## 1. Overview & Objectives
- **Summary**: Build the ideal hybrid developer portfolio uniting human-friendly, recruiter-ready copywriting with sharp-cornered terminal aesthetics, high-contrast Catppuccin Mocha colors, and viewport-centered ergonomics.
- **Goals**:
  - **Philosophy Cards (Direct Implementation from User Reference)**: Implement the exact 4 design philosophy cards featuring sharp borders, icon containers, subtitles in Catppuccin Sapphire (`#74c7ec`), monospaced badge chips (`[ ✓ Accessibility & Simplicity ]`), and "Core Standard" metadata.
  - **Balanced Hybrid Copy & Tone**: Welcoming, professional, and recruiter-friendly copywriting (highlighting B.S. in Information Technology, user empathy, problem-solution case studies) combined with sharp terminal UI touches (window dot controls `[●][●][●]`, breadcrumbs `kolby@dev:~$`, monospaced tag chips, git branch indicators).
  - **Viewport-Centered Hero Section**: Hero is vertically and horizontally centered in the initial landing screen (`min-height: calc(100vh - 64px)`), pairing recruiter snapshot cards with a high-contrast terminal profile card.
  - **High-Contrast Catppuccin Mocha Design Tokens**: Deep Crust canvas (`#11111b`), Base cards (`#1e1e2e`), Surface0 elevated items (`#313244`), crisp Surface1 borders (`#45475a`), with vibrant Blue (`#89b4fa`), Sapphire (`#74c7ec`), Green (`#a6e3a1`), Peach (`#fab387`), and Mauve (`#cba6f7`).
  - **Scroll-Triggered Reveal Motion**: Fluid `IntersectionObserver` animations on all sections and cards.
- **Non-Goals**:
  - Unreadable raw code-dump screens or cryptic command puzzles.
  - Generic rounded cards that lose the sleek developer terminal edge.

---

## 2. Component Layout & Section Design

### 2.1 Navigation Bar (`Navbar.jsx`)
- Fixed header with terminal prompt branding: `kolby@dev:~$` with subtitle `Software Engineer & UI Developer`.
- Human-friendly links: `About`, `Philosophy`, `Projects`, `Skills`, `Experience`, `Contact`.
- Availability beacon: `● Available for Roles`.
- Sharp CTA button: `[ $ ./connect ]`.

### 2.2 Viewport-Centered Hero Section (`Hero.jsx`)
- Full viewport centering (`min-height: calc(100vh - 64px)`).
- Left:
  - Terminal badge: `[ $ whoami ] Software Engineer & UI Developer`
  - Headline: "Hi, I'm Kolby Hernandez" with Catppuccin Blue/Sapphire gradient.
  - Subhead: "Crafting intuitive, accessible, and high-performance web products with a user-first mindset."
  - Bio detailing IT degree and full-stack capabilities.
  - Action buttons: `[ View Selected Projects → ]` (Primary Blue) and `[ $ ./contact.sh ]` (Outline).
  - Recruiter Snapshot Grid (4 sharp cards: B.S. in Information Technology, Full-Stack & UI/UX, Immediate Availability, Remote / Worldwide).
- Right:
  - Sharp Catppuccin profile card with window dots `[●][●][●]`, title `kolby_profile.json`, avatar `KH`, core stack tags (`React 19`, `Next.js`, `TypeScript`, `Node.js`, `PostgreSQL`, `Docker`, `UI/UX Design`), and career stats.

### 2.3 Design & Engineering Philosophy (`Philosophy.jsx` - Exact Reference Match)
- 4 high-contrast sharp cards:
  1. **User-First Thinking** (Subtitle: `Empathy-driven design`, Body: "Every line of code and UI component should solve a real human problem. I prioritize accessibility (WCAG AA), intuitive layouts, and effortless navigation.", Badge: `[ ✓ Accessibility & Simplicity ]`, Meta: `Core Standard`, Icon: `<HeartHandshake>`).
  2. **Clean & Scalable Code** (Subtitle: `Maintainability that lasts`, Body: "Writing self-documenting, modular, and well-tested code that teams can easily maintain, extend, and collaborate on without friction.", Badge: `[ ✓ TypeScript & Modularity ]`, Meta: `Core Standard`, Icon: `<Code2>`).
  3. **Performance & Speed** (Subtitle: `Snappy feels trustworthy`, Body: "Fast loading times, smooth 60fps transitions, and optimized server queries directly enhance user trust and conversion rates.", Badge: `[ ✓ Sub-second Page Loads ]`, Meta: `Core Standard`, Icon: `<Zap>`).
  4. **Cross-Functional Bridge** (Subtitle: `Translating tech to value`, Body: "Bridging the gap between engineering, product design, and business goals to deliver cohesive products that delight both users and stakeholders.", Badge: `[ ✓ Product & Engineering ]`, Meta: `Core Standard`, Icon: `<Users>`).

### 2.4 Featured Projects Showcase (`Projects.jsx` & `ProjectCard.jsx`)
- Category filter buttons: `All Works`, `Full-Stack Apps`, `Frontend & UI/UX`, `Cloud & APIs`.
- Sharp terminal project cards with git branch headers (`git:main` • `status: 200_ACTIVE` • `[●][●][●]`).
- Problem & Solution summary box, Peach impact metrics (`⚡ 12M+ Events Monitored Daily`), tech tags, and direct `[ Live Website Demo ↗ ]` / `[ View Source Code ↗ ]` buttons.

### 2.5 Capabilities Matrix (`Skills.jsx`)
- Sharp domain cards (`[DOMAIN: FRONTEND_ENG]`, `[DOMAIN: BACKEND_API]`, `[DOMAIN: DEVOPS_CLOUD]`, `[DOMAIN: CORE_PRACTICES]`) with high-contrast proficiency badges and practical context.

### 2.6 Career & Education Timeline (`Experience.jsx`)
- Sharp git commit graph timeline documenting engineering positions and university IT degree with impact points.

### 2.7 Accessible Contact & Social Binaries (`Contact.jsx`)
- Sharp terminal mailer `$ sendmail` with form validation and instant feedback alert.
- Recruiter quick-connect actions: 1-click email copy, LinkedIn, GitHub, and Resume download.

### 2.8 Terminal Statusline Footer (`Footer.jsx`)
- Catppuccin statusline bar (`STATUS: 200 OK`, `THEME: CATPPUCCIN-MOCHA`, `BRANCH: main`, `BUILD: 2026.08.31`).

---

## 3. Acceptance Criteria
- [ ] Philosophy section matches the user-provided reference screenshot (sharp cards, icon boxes, Sapphire subtitles, monospaced `[ ✓ ... ]` badge chips, and "Core Standard" metadata).
- [ ] Hero section is vertically and horizontally centered in the initial landing screen (`min-height: calc(100vh - 64px)`).
- [ ] Sharp corners (`0px` / `2px`) applied consistently across all cards, buttons, tabs, and window frames.
- [ ] Catppuccin Mocha high-contrast palette used throughout (Crust `#11111b`, Base `#1e1e2e`, Surface `#313244`, crisp 1px borders `#45475a`).
- [ ] Copywriting is welcoming, human, and recruiter-ready.
- [ ] Scroll reveal animations operate smoothly on all sections.
- [ ] Build succeeds with zero errors, and passes all repository documentation guidelines.
