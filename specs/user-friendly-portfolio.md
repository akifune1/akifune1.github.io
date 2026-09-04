# Feature Spec: User-Friendly & Recruiter-Ready Portfolio (Catppuccin Edition)

## 1. Overview & Objectives
- **Summary**: Complete redesign of the portfolio to transition from an overly technical terminal aesthetic to a polished, human-centered, and recruiter/HR-friendly modern SaaS showcase.
- **Goals**:
  - Adopt the **Catppuccin Mocha** color palette (`#1e1e2e` base with `#89b4fa` blue and `#74c7ec` sapphire accents) for soothing, gentle dark mode aesthetics.
  - Replace confusing terminal syntax (`$ whoami`, `$ ls`, shell commands, monospace overload) with clear, elegant copywriting, recruiter-friendly metrics, and intuitive UI components.
  - Implement smooth scroll-triggered reveal animations that gracefully transition elements into view as the user scrolls down the page.
  - Highlight user-friendly product design principles, frontend & full-stack development skills, education (IT Graduate), and real project impact.
- **Non-Goals**:
  - Harsh CLI terminal prompts, bash diagnostics commands, or raw code dump widgets.
  - Complex multi-megabyte heavy 3D canvas libraries that slow down mobile performance.

---

## 2. Design System: Catppuccin Mocha & User-Centric UI

### 2.1 Catppuccin Mocha Color Tokens
- **Base (Main Background)**: `#1e1e2e` (Warm, gentle dark slate-purple)
- **Mantle (Headers & Footers)**: `#181825` (Subtle deeper container layer)
- **Crust (Deepest background layer)**: `#11111b`
- **Surface0 (Cards & Containers)**: `#313244` (Clean, distinct card surfaces)
- **Surface1 (Card Hover / Elevated Items)**: `#45475a`
- **Surface2 (Active borders / Accents)**: `#585b70`
- **Text (Primary Headings & Body)**: `#cdd6f4` (Crisp, soft white/lavender text)
- **Subtext0 / Subtext1 (Descriptions & Subtitles)**: `#a6adc8` / `#bac2de`
- **Blue (Primary Brand Accent)**: `#89b4fa` (Friendly, trustworthy modern blue)
- **Sapphire (Secondary Vibrant Accent)**: `#74c7ec` (Glowing highlights and links)
- **Lavender (Creative / UI/UX Tags)**: `#b4befe`
- **Green (Available for Work / Success)**: `#a6e3a1`
- **Peach (Special Highlights & Badges)**: `#fab387`

### 2.2 Typography & Shape Language
- **Primary Typography**: `Inter` (300, 400, 500, 600, 700, 800) for supreme readability and modern web elegance.
- **Accent Monospace**: `JetBrains Mono` reserved *only* for subtle technical chips/tags (e.g. `React 19`, `TypeScript`), not for main titles or body text.
- **Corners & Borders**: Refined modern rounded corners (`border-radius: 8px` to `12px`) with subtle 1px Catppuccin surface borders (`#313244` / `#45475a`) and gentle ambient glow shadows (`0 8px 30px rgba(0,0,0,0.25)`).

### 2.3 Scroll Animations & Motion
- **IntersectionObserver Scroll Reveal**: Reusable scroll-trigger engine that monitors viewport entry for sections and cards.
- **Animation Style**: Smooth upward slide (`translateY(24px) -> translateY(0px)`) + opacity fade-in (`0 -> 1`) with custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and staggered delay on child grids.

---

## 3. Section-by-Section Component Architecture

### 3.1 Top Navigation Bar (`Navbar.jsx`)
- Clear branding: `Kolby Hernandez` with subtitle `Software Engineer & UI Developer`.
- Human-friendly links: `About`, `Projects`, `Skills`, `Experience`, `Contact`.
- Status pill: `● Available for Full-Time Roles` (soft Catppuccin green badge).
- Primary Action CTA: `Get In Touch` and `Resume` download.

### 3.2 Hero Section (`Hero.jsx`)
- Recruiter-focused headline: "Building intuitive, high-performance web products with a user-first mindset."
- Sub-bio emphasizing user-friendly engineering, full-stack technical depth, and clean design.
- Quick Recruiter Snapshot Cards:
  - 🎓 **Education**: B.S. in Information Technology
  - 🚀 **Specialization**: Full-Stack & UI/UX Design
  - 💼 **Status**: Open to Opportunities
  - 📍 **Location**: Remote / Worldwide
- Prominent action buttons: `View Selected Works`, `Download Resume`, `Contact Me`.

### 3.3 Product Design & Engineering Philosophy (`Philosophy.jsx` - Replaces Terminal Sandbox)
- Focuses on user-friendly principles:
  1. **User-First Architecture**: Intuitive user flows, clear navigation, and accessibility (WCAG AA).
  2. **Clean & Resilient Code**: Modular React & TypeScript architectures with robust backend APIs.
  3. **High Performance & Speed**: Sub-second load times, snappy interactions, and zero layout shift.
  4. **Empathetic Collaboration**: Bridging the gap between engineering, product design, and business goals.

### 3.4 Featured Projects Showcase (`Projects.jsx` & `ProjectCard.jsx`)
- Filterable by: `All Works`, `Full-Stack Apps`, `Frontend & UI/UX`, `Cloud & APIs`.
- Human-friendly project cards featuring:
  - Project title and clear 1-sentence value proposition.
  - Problem & Solution summary explaining *why* it was built and *how* users benefit.
  - Measurable impact & user metrics (e.g. `10k+ Monthly Users`, `99.9% Uptime`).
  - Clear, labeled buttons: `Live Website Demo ↗` and `View GitHub Source ↗`.

### 3.5 Skills & Technologies Matrix (`Skills.jsx`)
- Visual, friendly cards categorized into:
  - **Frontend & Design Systems** (React, Next.js, TypeScript, UI/UX Design, CSS Architecture)
  - **Backend & Cloud Services** (Node.js, Express, REST/GraphQL APIs, Python, PostgreSQL)
  - **DevOps & Developer Tools** (Docker, Git, CI/CD, Linux, AWS)
  - **Core Engineering Principles** (Accessibility, Responsive Design, State Management, Clean Code)

### 3.6 Career & Education Timeline (`Experience.jsx`)
- Modern clean milestone timeline detailing education, engineering roles, and achievements with measurable metrics.

### 3.7 Contact & Direct Connect (`Contact.jsx`)
- Friendly contact form: Name, Email, Subject, and Message with instant feedback.
- Recruiter quick contact cards with 1-click email copy, LinkedIn profile, GitHub, and Resume.

---

## 4. Acceptance Criteria
- [ ] Palette updated to authentic **Catppuccin Mocha** (`#1e1e2e` base, `#89b4fa` blue, `#74c7ec` sapphire).
- [ ] All cryptic terminal/bash syntax replaced with clear, welcoming, HR-friendly copywriting.
- [ ] Scroll-triggered animations smoothly reveal elements as the user scrolls down the page.
- [ ] Clean responsive layout with modern rounded cards (`8px-12px`) and soft ambient shadows.
- [ ] All interactive buttons, tabs, filters, and form actions work seamlessly with instant feedback.
- [ ] Follows repository standards: file headers, docstrings, inline comments, and changelog update.
