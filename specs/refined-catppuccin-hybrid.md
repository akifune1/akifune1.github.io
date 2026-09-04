# Feature Spec: Refined Catppuccin Mocha Terminal-SaaS Hybrid Portfolio

## 1. Overview & Objectives
- **Summary**: Refine the portfolio by uniting the sleek developer terminal aesthetic (sharp corners, window headers, dot controls, CLI hints) with high-contrast Catppuccin Mocha colors and modern SaaS screen ergonomics.
- **Goals**:
  - **Sharp & Sleek Terminal-SaaS Balance**: Restore sharp corners (`border-radius: 0px` / `2px` micro-edges), window dot controls, prompt breadcrumbs (`kolby@dev:~$`), and subtle action prompts (`$ view-projects`), while keeping copywriting accessible, human, and recruiter-friendly.
  - **Screen-Friendly Centering & Layout Ergonomics**: The Hero section will be vertically and horizontally centered in the first viewport (`min-height: calc(100vh - 70px)`). Section padding, card proportions, and scroll pacing are optimized for effortless scanning.
  - **High-Contrast Catppuccin Mocha Palette**: Eliminate washed-out blending by utilizing the full depth of Catppuccin Mocha:
    - Background Canvas: Deep Crust `#11111b` / Mantle `#181825`
    - Cards & Windows: Crisp Base `#1e1e2e` and Surface0 `#313244`
    - Sharp Borders: Distinct `#45475a` (Surface1) & `#585b70` (Surface2)
    - Accents: Sapphire `#74c7ec` (Cyan/Sky), Blue `#89b4fa` (Primary), Mauve `#cba6f7` (Tags), Green `#a6e3a1` (Status), Peach `#fab387` (Metrics), Rosewater `#f5e0dc` (Highlights).
  - **Smooth Scroll-Triggered Reveal Animations**: Retain lightweight `IntersectionObserver` scroll animations for all sections.
- **Non-Goals**:
  - Overly cryptic bash syntax that confuses non-technical recruiters.
  - Cluttered layouts that extend past standard viewports.

---

## 2. Design System & High-Contrast Catppuccin Tokens

### 2.1 Color Palette
- **Canvas Base**: `#11111b` (Catppuccin Crust - deep, rich backdrop)
- **Container / Navigation Bar**: `#181825` (Catppuccin Mantle)
- **Cards & Windows**: `#1e1e2e` (Catppuccin Base) with `#313244` (Surface0) headers
- **Borders**: `#45475a` (Default 1px sharp border), `#585b70` (Hover), `#89b4fa` / `#74c7ec` (Active glow)
- **Text Primary**: `#cdd6f4` (Catppuccin Text - crisp light lavender/white)
- **Text Secondary**: `#a6adc8` (Subtext0)
- **Vibrant Highlights**:
  - **Blue**: `#89b4fa` (Primary actions & brand focus)
  - **Sapphire**: `#74c7ec` (Terminal prompts & secondary accents)
  - **Mauve**: `#cba6f7` (Language tags & UI design badges)
  - **Green**: `#a6e3a1` (Available status & git success)
  - **Peach**: `#fab387` (Impact telemetry & metric callouts)
  - **Red/Yellow/Green Dots**: `#f38ba8`, `#f9e2af`, `#a6e3a1`

### 2.2 Geometry & Typography
- **Corners**: Strictly sharp (`0px` or `2px` micro-bevel) on all cards, buttons, tabs, and input controls.
- **Typography**: `Inter` for primary body/headings with `JetBrains Mono` for prompts, line numbers, command tags, and status segments.

---

## 3. Section Architecture & Ergonomics

### 3.1 Top Navigation Bar (`Navbar.jsx`)
- Fixed header with terminal breadcrumb (`kolby@dev:~$`) + subtitle (`Software Engineer & UI Developer`).
- Quick navigation links (`/about`, `/inspector`, `/projects`, `/skills`, `/experience`, `/contact`).
- Live status indicator: `● NODE: ONLINE (Available for Roles)`.

### 3.2 Viewport-Centered Hero Section (`Hero.jsx`)
- Full viewport centering (`min-height: calc(100vh - 70px)`).
- Left: `$ whoami` prompt with animated typewriter headline, recruiter highlights (B.S. in Information Technology, Full-Stack & UI/UX, Immediate Availability), and sharp CTA buttons (`$ view-projects`, `$ ./contact.sh`).
- Right: Sharp Catppuccin terminal window with window controls (`[●][●][●]`), `system_diagnostics.sh` preview, core stack badges, and career stats.

### 3.3 Interactive Terminal Sandbox & Philosophy (`TerminalViewer.jsx`)
- Sharp tabbed window supporting:
  - `01. principles.md` (User-First Thinking, Clean Architecture, High Speed)
  - `02. system_info.sh` (IT background, developer telemetry, uptime)
  - `03. capabilities.json` (Structured tech stack matrix)
  - `04. architecture.ts` (Clean TypeScript event stream pattern)
- Features line numbers, syntax highlighting, and 1-click clipboard copy.

### 3.4 High-Contrast Projects Showcase (`Projects.jsx` & `ProjectCard.jsx`)
- Category filter buttons (`$ ls ./all`, `$ ls --fullstack`, `$ ls --frontend`, `$ ls --cloud`).
- Sharp terminal project cards with git branch tags (`git:main`), impact metrics in Catppuccin Peach, problem/solution summaries, and direct `[ $ ./demo ↗ ]` / `[ $ git clone ↗ ]` buttons.

### 3.5 Skills Matrix (`Skills.jsx`)
- Sharp domain cards (`[DOMAIN: FRONTEND_ENG]`, `[DOMAIN: BACKEND_API]`, `[DOMAIN: DEVOPS_CLOUD]`, `[DOMAIN: CORE_PRACTICES]`) with high-contrast proficiency badges.

### 3.6 Career & Education Timeline (`Experience.jsx`)
- Git commit graph log detailing engineering roles and B.S. in Information Technology degree with measurable outcome bullets.

### 3.7 Contact Mailer & Executable Socials (`Contact.jsx`)
- Sharp `$ sendmail` terminal contact form with instant validation feedback.
- Executable social binaries (`./github`, `./linkedin`, `./email`, `./resume.pdf`).

### 3.8 Terminal Statusline Footer (`Footer.jsx`)
- Catppuccin statusline segments (`STATUS: 200 OK`, `CATPPUCCIN: MOCHA`, `BRANCH: main`, `BUILD: 2026.08.31`).

---

## 4. Acceptance Criteria
- [ ] Sharp corners (`0px` / `2px`) restored across all cards, buttons, windows, and badges.
- [ ] Hero section is vertically and horizontally centered on initial viewport entry (`min-height: calc(100vh - 70px)`).
- [ ] Catppuccin Mocha color palette features crisp, high-contrast visual separation (Crust canvas `#11111b`, Base cards `#1e1e2e`, Surface headers `#313244`, sharp borders `#45475a`, and multi-color accents).
- [ ] Interactive terminal sandbox restored with user-friendly principles and system diagnostics.
- [ ] Scroll reveal animations operate smoothly with ergonomic section padding.
- [ ] Build succeeds with zero errors, and passes all repository documentation guidelines.
