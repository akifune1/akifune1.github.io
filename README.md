# Kolby Hernandez Portfolio _(akifune1.github.io)_


[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite 6](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A high-assurance developer portfolio and cybersecurity showcase built with React 19, Vite 6, and Vanilla CSS.

This repository powers the personal website and interactive engineering portfolio of **Kolby Hernandez** (IT graduate from Mapúa University, Cum Laude & DOST-SEI Scholar). It presents real-world full-stack web applications, verified cybersecurity certifications, academic research papers, and technical capabilities through an authentic Catppuccin Mocha theme inspired by rural Japan.

**Live Website**: [https://akifune1.github.io](https://akifune1.github.io)

---

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Architecture & Tech Stack](#architecture--tech-stack)
  - [Directory Structure](#directory-structure)
  - [Key Features](#key-features)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

---

## Background

Traditional developer portfolios often rely on heavyweight UI libraries, third-party template bloat, or superficial rating bars. This project was engineered from the ground up to demonstrate:
1. **Defensive Web Engineering**: Building fast, accessible, zero-dependency web interfaces using modern Vanilla CSS3, custom CSS properties, and native browser APIs instead of bulky CSS-in-JS runtimes.
2. **Minimalist Anti-Clutter Standard**: Clear negative space, authentic provider credentials, and verified achievements rather than arbitrary skill percentage meters or decorative badges.
3. **Atmospheric Visual Identity**: A pixel-art nightscape of rural Japan layered with deep Catppuccin Mocha crust/mantle overlays ensuring AAA text contrast and high readability.
4. **Ergonomic Responsive Navigation**: Context-aware top navigation that auto-hides past the landing hero, desktop dual-sidebar scroll tracking rails, and a thumb-zone mobile bottom dock.

---

## Security

Given the portfolio's focus on defensive cybersecurity and systems engineering, the client-side bundle implements several hardening measures:
- **Zero Source Map Exposure**: Source maps are explicitly disabled in production builds (`vite.config.js`) to prevent exposing raw source files.
- **Diagnostic Stripping**: Console logs, warnings, and debugger statements are stripped out during the `esbuild` minification pass to eliminate info leakage.
- **Hardened HTTP Headers**: The base HTML template enforces `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`.
- **Credential Verification**: All displayed certifications link directly to immutable public verification records (Credly, Coursera, Oracle CertView, CyberWarfare Labs, Red Team Leaders).

To report vulnerabilities or security concerns, please open a private security advisory or contact the maintainer directly.

---

## Install

Ensure you have [Node.js](https://nodejs.org/) (`v18.x` or `v20.x` recommended) and [npm](https://www.npmjs.com/) installed.

Clone the repository and install all dependencies:

```sh
git clone https://github.com/akifune1/akifune1.github.io.git
cd akifune1.github.io
npm install
```

---

## Usage

### Local Development Server

To launch the Vite development server with Hot Module Replacement (HMR):

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to inspect the site locally.

### Production Build

To compile and bundle optimized static production assets into `dist/`:

```sh
npm run build
```

### Local Preview

To preview the production bundle locally:

```sh
npm run preview
```

---

## Architecture & Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18 / 19](https://react.dev/) | Declarative component hierarchy and state management |
| **Tooling** | [Vite 6](https://vite.dev/), [ESBuild](https://esbuild.github.io/) | Lightning-fast bundling, HMR, and production tree-shaking |
| **Styling** | Vanilla CSS3 | Catppuccin Mocha design tokens, CSS Grid, Flexbox, zero runtime overhead |
| **Carousels** | [Embla Carousel](https://www.embla-carousel.com/) `v8` | Hardware-accelerated continuous drift and touch interaction |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), Google Fonts | Crisp SVGs with `Inter`, `JetBrains Mono`, and `Fira Code` fonts |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Automatic builds and deployment to GitHub Pages on `main` push |

### Directory Structure

```text
akifune1.github.io/
├── .github/workflows/deploy.yml    # GitHub Pages deployment pipeline
├── public/
│   ├── badges/                     # Official provider credential badges (.png)
│   ├── images/                     # Rural Japan pixel-art background assets
│   └── KolbyHernandez_CV.pdf       # Curriculum Vitae
├── src/
│   ├── components/                 # Modular React UI components
│   │   ├── Carousel.jsx            # Reusable horizontal loop carousel
│   │   ├── Certifications.jsx      # Verified cybersecurity credentials
│   │   ├── Contact.jsx             # Contact cards & outreach form
│   │   ├── Experience.jsx          # Professional & academic timeline
│   │   ├── Footer.jsx              # Minimalist quick-nav footer
│   │   ├── Hero.jsx                # Viewport-centered landing section
│   │   ├── MobileBottomNav.jsx     # Floating bottom navigation (< 768px)
│   │   ├── Navbar.jsx              # Auto-hiding header navigation
│   │   ├── Philosophy.jsx          # Engineering & cybersecurity mindset
│   │   ├── ProjectCard.jsx         # Project showcase card
│   │   ├── Projects.jsx            # Software & civic tech projects
│   │   ├── Research.jsx            # Academic publications
│   │   ├── ScrollProgressNav.jsx   # Dual-sidebar interactive rails (>= 1024px)
│   │   ├── Skills.jsx              # Categorized technical toolkit
│   │   └── TerminalViewer.jsx      # Monospace terminal emulator viewer
│   ├── data/                       # Portfolio content stores & terminal scripts
│   ├── hooks/                      # Custom hooks (e.g. useScrollReveal)
│   ├── styles/                     # Component-scoped CSS stylesheets
│   ├── App.jsx                     # Layout composer & narrative flow
│   └── main.jsx                    # Application entry point
├── vite.config.js                  # Hardened Vite bundler configuration
└── package.json                    # Dependencies and scripts
```

### Key Features
- **Hero Landing**: Centered introduction with single-row credential badges and dual direct calls-to-action.
- **Auto-Hiding Navbar**: Slides out of view past the Hero section to maximize viewport reading real estate.
- **Continuous Drift Certifications**: Infinite-scroll carousel rendering authentic vector marks for Google, IBM, Oracle, Fortinet, AppKademiya, CyberWarfare Labs, and Red Team Leaders.
- **Dual-Sidebar Rails**: Left and right sidebars on desktop indicating scroll progress with quick jumping.

---

## Maintainers

[@akifune1](https://github.com/akifune1) — Kolby Hernandez

## License

[MIT](LICENSE) © 2026 Kolby Hernandez
