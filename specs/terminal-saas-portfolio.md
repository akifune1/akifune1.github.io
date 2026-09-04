# Feature Spec: Terminal & Modern SaaS Hybrid Portfolio

## 1. Overview & Objectives
- **Summary**: A modern, high-performance portfolio website blending a retro-futuristic developer terminal aesthetic with polished SaaS web design patterns.
- **Goals**:
  - Deliver a sharp-cornered, terminal-inspired interface utilizing a gentle dark background with vibrant blue neon accents.
  - Implement fluid modern SaaS micro-animations, smooth hover states, and staggered entrance transitions without relying on frosted glassmorphism.
  - Provide a visual-first navigation experience navigated via clicking, scrolling, and tab switching, complemented by interactive terminal-styled inspect panels.
  - Organize content comprehensively: Hero / Profile, Interactive Terminal Code Inspector, Featured Projects with metrics, Skills & Tech Matrix, Experience Timeline, and a Terminal Contact form.
- **Non-Goals**:
  - Pure CLI shell mode requiring mandatory keyboard input to navigate (the primary navigation is visual, intuitive, and accessible).
  - Glassmorphic / frosted translucent blur designs (strictly uses solid, clean, dark slate/navy-tinted panels with sharp 1px borders).

---

## 2. User Experience & Design System

### 2.1 Color Palette (Gentle Dark & Electric Blue)
- **Background Base**: `#0b0f17` (Deep gentle dark slate/navy, not pitch black)
- **Surface Layer 1 (Cards & Windows)**: `#101726` (Solid dark blue-gray container)
- **Surface Layer 2 (Elevated & Active Items)**: `#172033`
- **Border Default**: `#1e293b` (Subtle dark border)
- **Border Active / Highlight**: `#3b82f6` (Electric Blue) and `#38bdf8` (Cyan Blue)
- **Primary Accent**: `#3b82f6` (Vibrant Blue) / `#60a5fa` (Hover Blue)
- **Secondary Accent / Success**: `#10b981` (Terminal Green prompt indicator / online status)
- **Text Primary**: `#f1f5f9` (Crisp light slate)
- **Text Secondary**: `#94a3b8` (Muted developer comment / subtitle gray)
- **Text Accent**: `#38bdf8` (Terminal variables, keywords, and paths)

### 2.2 Typography & Structure
- **Primary Body Font**: `Inter`, system-ui, sans-serif for optimal readability.
- **Monospaced Font**: `JetBrains Mono`, `Fira Code`, monospace for headers, prompts, tags, line numbers, and terminal code blocks.
- **Corner Style**: Sharp corners (`border-radius: 0px` or `2px` micro-edges) on all cards, buttons, modals, and input fields.
- **Borders & Shadows**: 1px solid borders (`#1e293b` / `#2d436e`) paired with subtle blue glow box-shadows on hover (`0 0 20px rgba(59, 130, 246, 0.12)`).

### 2.3 Animations & Micro-Interactions
- Smooth typing effect on the hero sub-headline.
- Staggered fade-and-slide up on scroll for project and skill cards.
- Interactive tab switching on the code inspector with instant transition.
- Micro-interactions on buttons: subtle lift, active border glow, monospaced cursor blink indicator.
- Live status pulsating beacon in the navigation header (`● SYSTEM READY: 200 OK`).

---

## 3. Architecture & Technical Design

### 3.1 Tech Stack
- **Framework**: React (Vite-powered SPA for fast HMR and clean component tree).
- **Styling**: Vanilla CSS (Modular CSS / CSS Custom Properties design tokens in `index.css`).
- **Icons**: `lucide-react` for clean developer & UI icons.
- **Build Tool**: Vite.

### 3.2 Component Hierarchy
```
src/
├── assets/                  # Icons and static images
├── components/
│   ├── Navbar.jsx           # Terminal window header bar + navigation links
│   ├── Hero.jsx             # Hero banner, $ whoami prompt, stats, and action CTAs
│   ├── TerminalViewer.jsx   # Interactive code & system info terminal inspector
│   ├── Projects.jsx         # Featured projects grid with tags, metrics, and modals
│   ├── ProjectCard.jsx      # Individual sharp-bordered project terminal card
│   ├── Skills.jsx           # Grouped tech stack & skills matrix with command badges
│   ├── Experience.jsx       # Git commit / timeline history log
│   ├── Contact.jsx          # Terminal mailer contact form + executable social links
│   └── Footer.jsx           # Status bar with system metrics and copyright
├── data/
│   ├── portfolioData.js     # Structured portfolio data (projects, skills, timeline, bio)
│   └── terminalSnippets.js  # Code snippets and data for the interactive inspector
├── styles/
│   ├── index.css            # Global CSS variables, reset, typography & utilities
│   ├── navbar.css           # Navigation & status bar styles
│   ├── hero.css             # Hero & prompt styles
│   ├── terminalViewer.css   # Terminal inspector window styles
│   ├── projects.css         # Project cards & grid layout
│   ├── skills.css           # Skills grid & category badges
│   ├── experience.css       # Git log timeline styles
│   └── contact.css          # Contact form & social buttons styles
├── App.jsx                  # Main application layout wrapper
└── main.jsx                 # Vite entrypoint
```

---

## 4. Detailed Section Breakdown

### 4.1 Navigation Bar (`Navbar.jsx`)
- Terminal window title bar (`user@portfolio: ~ (zsh)`).
- Visual window control dots (Monochromatic blue/slate or colored buttons).
- Section jump links: `01. /about`, `02. /inspector`, `03. /projects`, `04. /skills`, `05. /experience`, `06. /contact`.
- Live system status badge (`● ONLINE / LATENCY: 24ms`).
- Mobile-friendly collapsible terminal menu.

### 4.2 Hero Section (`Hero.jsx`)
- Terminal prompt greeting: `$ whoami` -> Output: Full Stack Software Engineer / Architect.
- Dynamic animated text displaying expertise (e.g. `React`, `TypeScript`, `Node.js`, `Cloud Systems`).
- Brief bio with highlight chips for quick stats (Projects completed, Years of Experience, Tech Stack size).
- Action buttons: `[ $ view-projects --featured ]` (primary blue glow) and `[ $ cat contact.txt ]` (secondary outline).

### 4.3 Interactive Terminal Inspector (`TerminalViewer.jsx`)
- Window frame with file tabs: `system_info.sh`, `skills_matrix.json`, `architecture_highlight.ts`, `about_me.md`.
- Clickable tabs with syntax-highlighted code output, line numbers, and a 1-click `[ Copy Code ]` button.
- Command buttons for non-typing visual interaction: users can click preset commands to dynamically switch file views and outputs.

### 4.4 Projects Section (`Projects.jsx` & `ProjectCard.jsx`)
- Filterable project grid (e.g. `[ ALL ]`, `[ FULL STACK ]`, `[ CLOUD & API ]`, `[ FRONTEND / UI ]`).
- Terminal Card format:
  - Header: `git branch: main` • `status: 200 active`
  - Project Title & High-impact summary.
  - Tech tags (e.g. `React`, `Node.js`, `PostgreSQL`, `Docker`).
  - Performance / Impact metric badge (e.g., `⚡ 99.9% Uptime`, `🔥 10k+ MAU`).
  - Action buttons: `[ $ ./demo ]` (Live URL) and `[ $ git clone ]` (GitHub repository).

### 4.5 Skills & Tech Stack Matrix (`Skills.jsx`)
- Organized into developer domains:
  - **Frontend Engineering**: React, Next.js, TypeScript, Tailwind/Vanilla CSS, State Management.
  - **Backend & APIs**: Node.js, Express, Python/FastAPI, GraphQL, REST APIs.
  - **Databases & Storage**: PostgreSQL, Redis, MongoDB, Supabase.
  - **DevOps & Infrastructure**: Docker, AWS, CI/CD, Git, Linux.
- Interactive level bars / chip indicators with command tags (e.g. `npm i`, `docker run`).

### 4.6 Experience & Timeline (`Experience.jsx`)
- Git commit graph style (`commit #a8f029` -> `v3.0.0 Current Role`).
- Role title, company name, dates, location, and key accomplishments with bulleted technical impact.

### 4.7 Contact & Executable Socials (`Contact.jsx`)
- Terminal mail form (`$ sendmail --recipient="kolby" --secure`).
- Inputs: Name, Email, Subject, Message, with terminal-style focus borders.
- Executable binary links for socials:
  - `./github` -> opens GitHub profile
  - `./linkedin` -> opens LinkedIn profile
  - `./email` -> opens mailto link
  - `./resume` -> downloads / views resume

---

## 5. Acceptance Criteria
- [ ] Responsive, sharp-cornered terminal + SaaS design implemented without glassmorphism.
- [ ] Gentle dark background (`#0b0f17`) with electric blue and cyan accent system.
- [ ] All navigation links and buttons work with smooth scroll spy and interactive feedback.
- [ ] Interactive Terminal Inspector supports tab switching, syntax highlighting, and copy to clipboard.
- [ ] Projects showcase includes category filtering, tags, live links, and GitHub links.
- [ ] Skills and Experience timeline render cleanly on both desktop and mobile devices.
- [ ] Contact form validates inputs and displays terminal-style confirmation feedback.
- [ ] Follows all repository rules: file headers, docstrings, junior-dev comments, and changelog entry.
