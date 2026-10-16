# Kolby Hernandez Portfolio _(akifune1.github.io)_


[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite 6](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A developer portfolio and cybersecurity showcase built with React 18, Vite 6, and vanilla CSS.

This repository powers the personal website and engineering portfolio of **Kolby Hernandez** (IT graduate from Mapúa University, Cum Laude & DOST-SEI Scholar). It presents full-stack applications, cybersecurity certifications, and technical capabilities for recruiters. Research material remains in the repository. The interface pairs Junicode headings with comfortably weighted Bricolage Grotesque reading text, cream `#f2f0e3` and charcoal `#2e2e2e` themes, and purple-only accents.

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
2. **Minimalist Presentation**: Editorial project entries, readable skill groups, and a static credential register keep the existing evidence directly accessible.
3. **Warm Dual Themes**: Locally hosted Junicode and Bricolage Grotesque fonts, a shared cream/charcoal canvas, and flat square controls. First visits start in light mode; an explicit choice is restored before the application renders. Theme changes fade smoothly, with reduced-motion support. The hero uses the supplied `hero_light.jpg` and `hero_dark.jpg` images with a soft readability wash and a bottom fade into the page canvas.
4. **Responsive Navigation**: A header that hides past the introduction, both desktop scroll-tracking rails, and a six-section mobile/tablet bottom index. Keyboard labels and reduced-motion navigation are supported.

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

### Verification

```sh
npm test
npm run build
```

The tests use Node's built-in test runner to verify the pre-paint theme bootstrap, role-based motion definitions, replay lifecycle, and credential transparency math. No test dependencies are required. The user verifies visual appearance and interactions; automated browser/rendered checks are run only when explicitly requested.

---

## Architecture & Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Declarative component hierarchy and state management |
| **Tooling** | [Vite 6](https://vite.dev/), [ESBuild](https://esbuild.github.io/) | Lightning-fast bundling, HMR, and production tree-shaking |
| **Styling** | Vanilla CSS3 | Semantic cream/charcoal theme tokens, CSS Grid, and Flexbox |
| **Retained carousel utility** | [Embla Carousel](https://www.embla-carousel.com/) `v8` | Existing utility remains available; active sections use static layouts |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), self-hosted fonts | Junicode headings and normal-width Bricolage Grotesque; licenses in `public/fonts/` |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Automatic builds and deployment to GitHub Pages on `main` push |

### Directory Structure

```text
akifune1.github.io/
├── .github/workflows/deploy.yml    # GitHub Pages deployment pipeline
├── public/
│   ├── badges/                     # Official provider credential badges (.png)
│   ├── images/                     # User-supplied light/dark hero backgrounds
│   └── KolbyHernandez_CV.pdf       # Curriculum Vitae
├── src/
│   ├── components/                 # Modular React UI components
│   │   ├── Carousel.jsx            # Reusable horizontal loop carousel
│   │   ├── Certifications.jsx      # Verified cybersecurity credentials
│   │   ├── Contact.jsx             # Email copy, direct links, and CV access
│   │   ├── Experience.jsx          # Professional & academic timeline
│   │   ├── Footer.jsx              # Minimalist quick-nav footer
│   │   ├── Hero.jsx                # Editorial introduction and credentials
│   │   ├── MobileBottomNav.jsx     # Bottom section index (< 922px)
│   │   ├── Navbar.jsx              # Auto-hiding header navigation
│   │   ├── Philosophy.jsx          # Engineering & cybersecurity mindset
│   │   ├── ProjectCard.jsx         # Project showcase card
│   │   ├── Projects.jsx            # Software & civic tech projects
│   │   ├── Research.jsx            # Academic publications
│   │   ├── ScrollProgressNav.jsx   # Dual-sidebar interactive rails (>= 922px)
│   │   ├── Skills.jsx              # Categorized technical toolkit
│   │   └── TerminalViewer.jsx      # Monospace terminal emulator viewer
│   ├── data/                       # Portfolio content stores & terminal scripts
│   ├── hooks/                      # Active-section tracking and document navigation
│   ├── styles/                     # Component-scoped CSS stylesheets
│   ├── App.jsx                     # Layout composer & narrative flow
│   └── main.jsx                    # Application entry point
├── vite.config.js                  # Hardened Vite bundler configuration
└── package.json                    # Dependencies and scripts
```

### Key Features

- **Centered introduction**: Single-line Junicode name with a clipped type entrance, existing summary/credentials, working section actions, and direct CV access. The full-viewport hero uses themed blurred scenery and a pausable credential loop with faded edges, and keeps the next section out of the landing view; the wider masthead omits the repeated name.
- **Varied repeatable motion**: Projects/credentials slide laterally, skill groups slide and scale, separate heading covers wipe away while section rules remain static, and experience entries move vertically. Work stops offscreen and respects reduced motion.
- **Light/dark preference**: Accessible synchronized controls in the header and footer. Manual choices persist when browser storage permits.
- **Readable evidence**: Full experience and project entries, skill groups, and all credentials remain directly accessible without carousel navigation.
- **Integrated icons**: Skill pictograms use purple ink. Credential badges use their original colors and PNG transparency, preserving white artwork without a color-key filter; issuer names and dates use a middle dot without separate provider logos. Original badge files, selectable credential IDs, clipboard feedback, and verification links remain preserved.
- **Both side rails**: Left and right desktop section navigation with active tracking and keyboard-visible labels; equivalent section access below 922px.
- **Hero artwork**: Backgrounds credited to [furi / ふーり on Pixiv](https://www.pixiv.net/en/users/41736171), as supplied by the site owner. The visible footer carries the same credit.
- **Normal-zoom proportions**: Responsive type, spacing, icons, and breakpoints approximate the previous 90% view at normal browser zoom. The credential loop includes UI/UX Design.
- **Contact actions**: Visible email address with copy/failure feedback, LinkedIn, GitHub, and downloadable CV.

See [DESIGN.md](DESIGN.md) for the implemented design tokens and component conventions.

---

## Maintainers

[@akifune1](https://github.com/akifune1) — Kolby Hernandez

## License

[MIT](LICENSE) © 2026 Kolby Hernandez
