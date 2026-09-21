# Changelog

All notable changes to this project will be documented in this file.

## [2026-09-21 15:06] - Mobile Hero Typewriter Layout Shift Fix & Codebase Performance Optimization Pass

- **Mobile Hero Typewriter Layout Shift Resolution (`hero.css` & `Hero.jsx`)**:
  - Diagnosed cumulative layout shift (CLS) on mobile where multi-line titles (such as *"Penetration Testing & Secure Web Architect"*) expanded and collapsed the typewriter container dynamically, jarring the whole page up and down during typing and backspacing.
  - Succeeded with top-alignment (`align-items: flex-start; line-height: 1.45`) and reserved 2-line height (`min-height: 3.1rem`) on viewport breakpoints `<= 768px` and `<= 480px`, guaranteeing zero vertical displacement or layout bounce during the entire cycle.
  - Bundled `<span className="cursor-blink" />` inline inside `.hero-typewriter-text` so the terminal cursor naturally hugs wrapped lines, while eliminating nested `setTimeout` handles and potential memory leaks during the word completion pause.
- **Garbage Collection & Allocation Churn Optimization (`Hero.jsx`, `Navbar.jsx`, `MobileBottomNav.jsx`, `Skills.jsx`)**:
  - Hoisted static arrays (`ROLES`, `NAV_ITEMS`, `NAV_TABS`, `DOMAIN_TABS`) and utility resolver functions outside React component bodies, eliminating redundant object/array allocations on rapid re-renders and animation frames.
- **Scroll Event & Carousel Rendering Optimization (`Navbar.jsx`, `MobileBottomNav.jsx`, `Carousel.jsx`, `useScrollReveal.js`)**:
  - Throttled passive scroll-spy listeners across `Navbar` and `MobileBottomNav` using `requestAnimationFrame` and a ticking flag, preventing forced synchronous layout reflows and excessive DOM element measurements during mobile touch scrolling.
  - Replaced Embla carousel's drag-subpixel `'scroll'` event subscriber with `'settle'` and properly registered unmount cleanup for `'reInit'`, preventing continuous cascading React re-renders while dragging slides.
  - Destructured primitives from `useScrollReveal` configuration options to prevent unnecessary IntersectionObserver teardowns and reconstructions.
- **Component Memoization & Tag Lookup Optimization (`ProjectCard.jsx`, `Skills.jsx`, `Contact.jsx`)**:
  - Wrapped `ProjectCard` and `TechLogo` in `React.memo` to eliminate wasteful re-rendering of cards and 30+ SVG vector logos during parent state changes or mobile domain tab switching.
  - Pre-cached syntax tag class evaluations in `ProjectCard` via an in-memory Map for $O(1)$ lookup performance.
  - Added timeout reference tracking with automatic unmount cleanup in `Contact.jsx` to prevent state updates on unmounted components after copying email addresses.
- **Files Touched**:
  - `src/components/Hero.jsx`
  - `src/styles/hero.css`
  - `src/components/Navbar.jsx`
  - `src/components/MobileBottomNav.jsx`
  - `src/components/Carousel.jsx`
  - `src/components/Skills.jsx`
  - `src/components/ProjectCard.jsx`
  - `src/components/Contact.jsx`
  - `src/hooks/useScrollReveal.js`

## [2026-09-20 13:06] - Glow Removal, Oracle OCI Image Resolution, Persistent Fixed Navbar & Section Focal Centering

- **Glow & Halo Effect Removal (`certifications.css`)**:
  - Eliminated artificial ambient glow pseudo-elements (`.cert-badge-banner::before`), radial highlight flares, and hover halos per the anti-clutter standard.
  - Succeeded with a clean, sleek, matte dark showcase stage (`var(--ctp-crust)`) with crisp 1px boundary and natural drop shadows on the 155px badge artwork.
- **Oracle `oci-cloud.png` Error State Resolution (`Certifications.jsx`)**:
  - Diagnosed image fallback trigger caused by Vite HMR preserving stale `imgErrors["oracle-oci"]` boolean from the previous 404.
  - Re-architected `imgErrors` tracking to key dynamically on `cert.badgeImage` and attached a matching `key` attribute, instantly clearing stale error states and rendering `oci-cloud.png` cleanly.
- **Persistent Fixed Navbar (`navbar.css` & `index.css`)**:
  - Upgraded `.navbar-container` from `position: sticky` to `position: fixed; top: 0; left: 0; right: 0; z-index: 1000;` with frosted glass backdrop blur (`backdrop-filter: blur(16px)`).
  - Added `#main-content { padding-top: 64px; }` and aligned `scroll-padding-top: 64px;`, guaranteeing the top navbar remains 100% visible at all times across all scroll positions and devices without depending on parent overflow behavior.
- **Flawless Section Focal Centering (`Navbar.jsx`, `contact.css`, `certifications.css`, `projects.css`, `skills.css`)**:
  - Standardized section geometry to `min-height: calc(100vh - 64px)` and `scroll-margin-top: 64px`.
  - Calibrated `handleNavClick` scroll target to `Math.max(0, Math.round(elementTop - 64))`, seamlessly framing clicked sections (Certifications, Contact, Skills, Projects) in the center of the available viewport without adjacent section bleed or footer intrusion.
  - Enhanced scroll spy with reverse iteration and page-bottom threshold detection to cleanly activate the Contact channel.
- **Files Touched**:
  - `src/components/Certifications.jsx`
  - `src/styles/certifications.css`
  - `src/components/Navbar.jsx`
  - `src/styles/navbar.css`
  - `src/styles/index.css`
  - `src/styles/contact.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/components/MobileBottomNav.jsx`

## [2026-09-20 12:59] - Hero Digital Badge Centerpiece & Oracle Asset Fix: Atmospheric Pedestal & High-Res Focal Point

- Spec: specs/certifications-badge-update.md
- **Hero Digital Badge Stage Overhaul (`certifications.css`)**:
  - Re-architected `.cert-badge-banner` into an illuminated 220px centerpiece hero stage (`padding: 2.25rem 1.5rem`) with radial backdrop spotlighting (`radial-gradient(circle, rgba(249, 226, 175, 0.09) 0%, rgba(17, 17, 27, 0.85) 75%)`).
  - Scaled digital badges up from small 84px thumbnails to high-resolution 155px hero assets with layered 3D depth shadows (`filter: drop-shadow(...)`).
  - Implemented dynamic hover float elevation (`transform: translateY(-8px) scale(1.08)`) with an expanding ambient aura ring.
  - Centered card header typography (issuer, issue date, credential title, and description) to establish a unified vertical trophy axis that draws the eye directly to the badge.
  - Sized mobile showcase stage to 185px with 135px badge height for immediate visual punch on touch devices.
- **Oracle Badge Filename Resolution (`portfolioData.js`)**:
  - Corrected Oracle OCI badge image mapping to reference user-provided asset `oci-cloud.png`, resolving the missing image fallback.
- **Files Touched**:
  - `src/styles/certifications.css`
  - `src/data/portfolioData.js`

## [2026-09-20 12:55] - Certifications & Digital Badges Update: IBM SkillsBuild & Oracle Cloud OCI with Badge Banners

- Spec: specs/certifications-badge-update.md
- **Updated Accreditations & Credentials (`portfolioData.js`)**:
  - Removed deprecated entries (LearnKartS CEH v12 and HP LIFE).
  - Added verified **IBM SkillsBuild Cybersecurity Certificate** (Issued Sep 2026, Credential ID: `8c04a2d8-dd91-4060-9339-4516f8604a54`, with Credly badge and verification URL).
  - Added verified **Oracle Cloud Infrastructure Certified Foundations Associate** (Issued Sep 2026, Credential ID: `331624516OCI26FNDCFA`, with Oracle University CertView badge and verification link).
  - Retained **Google Cybersecurity Professional Certificate** and added badge image support.
- **Prominent Badge Banner UI (`Certifications.jsx` & `certifications.css`)**:
  - Structured credentials cards to feature a prominent centered badge banner at the top (`.cert-badge-banner`) with subtle inset shading and hover micro-zoom (`scale(1.05)`).
  - Created `public/badges/` asset directory to host digital badge PNGs and SVGs (`ibm-cybersecurity.png`, `oracle-oci.png`).
  - Added graceful fallback state (`.cert-badge-fallback-wrap`) rendering Lucide vector icons (`Award`, `ShieldCheck`, `Cloud`) if a badge asset is loading or missing.
- **Hero Diagnostic Synchronization (`Hero.jsx`)**:
  - Updated fastfetch system diagnostics terminal block to accurately reflect active certifications (`Google Cybersecurity, IBM SkillsBuild, Oracle Cloud OCI`).
- **Files Touched**:
  - `src/data/portfolioData.js`
  - `src/components/Certifications.jsx`
  - `src/styles/certifications.css`
  - `src/components/Hero.jsx`
  - `public/badges/ibm-cybersecurity.png`
  - `public/badges/oracle-oci.png`
  - `specs/certifications-badge-update.md`

## [2026-09-20 12:40] - Apple iOS Mobile Redesign: Vertical Case Stream, Segmented Domain Control & Inset Cards

- Spec: specs/apple-ios-mobile-redesign.md
- **Eliminated Mobile Carousel Failure via Native Vertical Stream (`Projects.jsx` & `projects.css`)**:
  - Retired the touch-conflicted horizontal carousel on mobile (<768px) in favor of `.projects-mobile-stream`, a 100% natural vertical narrative feed of case studies that completely eliminates carousel swipe locks and touch stalls.
  - Preserved the full desktop horizontal carousel with flanking buttons and depth shadow on screens >768px.
  - Styled mobile project case studies as Apple iOS Inset Grouped cards with continuous 16px corner radius, frosted glass surfaces (`backdrop-filter: blur(20px)`), and 48px full-width action buttons with active tap scale (`transform: scale(0.98)`).
- **Apple iOS Segmented Domain Control for Skills (`Skills.jsx` & `skills.css`)**:
  - Replaced the mobile skills carousel with an Apple-style segmented pill picker (Languages, Web Tech, Cloud/DB, Security) allowing 1-tap switching.
  - Rendered active domain capabilities in a clean 3-column squircle grid (`border-radius: 12px`) with domain pastel accents.
- **Harmonized iOS Inset Grouped Geometry Across Site**:
  - Upgraded timeline cards, contact channels, and certification cards to matching 16px Inset Grouped architecture with frosted translucent surfaces and generous breathing room.
- **Files Touched**:
  - `src/components/Projects.jsx`
  - `src/components/Skills.jsx`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/experience.css`
  - `src/styles/contact.css`
  - `src/styles/certifications.css`
  - `specs/apple-ios-mobile-redesign.md`

## [2026-09-20 12:31] - Mobile Ergonomics & Native Card Overhaul: Pill Dock Focus and De-Claustrophobication

- Spec: specs/mobile-ergonomics-card-redesign.md
- **Pill Dock Precision Centering & Subpixel Clarity**:
  - Replaced `left: 50%; transform: translateX(-50%)` in `src/styles/mobileNav.css` with a full-width flex auto-centering container (`left: 0; right: 0; display: flex; justify-content: center;`).
  - Completely eliminated subpixel coordinate anti-aliasing blur (rendering text and icons razor-sharp and in focus) and prevented rightward screen overflow on mobile displays.
  - Configured flexible item bounds (`flex: 1; max-width: 64px`) ensuring a clean fit on 360px–430px viewports.
- **De-Claustrophobic Native Mobile Cards**:
  - Overhauled Projects, Skills, Timeline, and Contact cards on mobile to feel purpose-built for touch screens rather than squished desktop cards.
  - Sized carousel cards to `calc(84vw - 0.75rem)` with generous ~20px–25px outer breathing space, eliminating edge crowding.
  - Expanded internal card padding to `1.45rem 1.35rem`, broke Challenge & Architecture blocks into clean micro-cards, and enlarged touch action buttons to 46px.
- **Layout & Container Edge Breathing Room**:
  - Shifted experience timeline line/nodes inward (`padding-left: 1.75rem`), added `overflow-x: hidden` to `html`, and set mobile container gutters to 1.25rem minimum.
- **Files Touched**:
  - `src/styles/mobileNav.css`
  - `src/styles/carousel.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/experience.css`
  - `src/styles/contact.css`
  - `src/styles/certifications.css`
  - `src/styles/hero.css`
  - `src/styles/index.css`
  - `specs/mobile-ergonomics-card-redesign.md`

## [2026-09-20 12:22] - Mobile-Standard Portfolio Redesign: Floating Thumb-Zone Dock & Carousel Touch Indicators

- Spec: specs/mobile-standard-redesign.md
- **Floating Bottom Navigation Dock (`MobileBottomNav.jsx`)**:
  - Implemented an ergonomic floating glassmorphism pill dock pinned to the bottom thumb zone on mobile screens (<768px), supporting iPhone home indicator safe-areas (`env(safe-area-inset-bottom)`).
  - Features 5 primary section tabs (About, Work, Projects, Skills, Contact) with live scroll synchronization, active indicator dots, and section pastel accent glow.
  - Eliminated redundant top hamburger toggles on mobile viewports (<768px) to provide an uncluttered, app-like header experience.
- **Minimalist Carousel Pagination Dots (`Carousel.jsx` & `carousel.css`)**:
  - Replaced bulky mobile flanking chevron arrows with minimalist pagination dots positioned underneath the cards, preventing edge obstruction and interference with touch gestures.
  - Integrated dynamic pill expansion (`width: 22px`) on active slide with smooth Embla `scrollTo(index)` transitions.
- **Fluid Mobile Sizing & Dock Clearance**:
  - Configured fluid mobile card widths (`calc(88vw - 0.5rem)`) with subtle peek to indicate horizontal swipe flow.
  - Added dedicated bottom clearance padding across projects, skills, contact, and footer so floating dock never overlaps content or action controls.
- **Files Touched**:
  - `src/components/MobileBottomNav.jsx`
  - `src/styles/mobileNav.css`
  - `src/components/Carousel.jsx`
  - `src/styles/carousel.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/contact.css`
  - `src/styles/footer.css`
  - `src/styles/navbar.css`
  - `src/App.jsx`
  - `specs/mobile-standard-redesign.md`

## [2026-09-20 12:09] - Contact Section Viewport Isolation & Centered Skills Grid Tiles
- **Contact Section Alignment & Footer Isolation**:
  - Configured `#contact` with `min-height: calc(100vh - 72px)` and vertical flex centering in `src/styles/contact.css`.
  - Updated `Navbar.jsx` `handleNavClick` so clicking Contact aligns flush with the sticky navbar, displaying the Contact section centered in the viewport with the footer completely hidden below the screen fold.
- **Skills Grid Design Inside Domain Cards**:
  - Replaced subcard list design and repetitive descriptions with a clean 3-column grid (`.skills-grid-inside` and `.skill-grid-cell`) in `src/components/Skills.jsx` and `src/styles/skills.css`.
  - Scaled custom vector tech logos with centered icon containers (`.skill-grid-icon-wrap`) and placed skill names directly beneath each logo.
  - Integrated domain pastel rainbow hover borders and icon glow across all 4 skill domains.
- **Files Touched**:
  - `src/styles/contact.css`
  - `src/components/Navbar.jsx`
  - `src/components/Skills.jsx`
  - `src/styles/skills.css`

## [2026-09-20 12:01] - Refined GPU Mask Carousel Depth Shadow, Section Viewport Isolation, and Contact Centering

- Spec: specs/horizontal-carousel-projects-skills.md
- **Embla Carousel & GPU Alpha Mask Depth Shadow**:
  - Integrated `embla-carousel-react` for smooth drag physics, momentum, and boundary state synchronization.
  - Replaced buggy physical gradient overlay `div`s with CSS `mask-image` (GPU alpha masking) and layered card drop shadows (`box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.55)`), eliminating text obscuration and edge graphical seams.
- **Viewport Section Isolation & Centering**:
  - Configured `min-height: calc(100vh - 72px)` and vertical flex centering for both `#projects` and `#skills`, guaranteeing that only the selected section is in view without overlapping headers or cards from adjacent sections.
  - Enhanced `Navbar.jsx` `handleNavClick` calculation to center clicked sections vertically in the available viewport.
- **Contact Section & Footer Centering**:
  - Set Contact section `min-height: calc(100vh - 72px - 68px)` and vertical flex centering, creating equal top and bottom spacing between the fixed navbar and the footer.
- **Files Touched**:
  - `src/components/Carousel.jsx`
  - `src/styles/carousel.css`
  - `src/components/Navbar.jsx`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/contact.css`
  - `src/styles/footer.css`
  - `package.json`

## [2026-09-20 11:52] - Projects & Skills Horizontal Carousels with Flanking Controls and Depth Fades

- Spec: specs/horizontal-carousel-projects-skills.md
- **Horizontal Carousel Transformation**:
  - Replaced static multi-column grid layouts in both Selected Projects (`#projects`) and Skills & Technologies (`#skills`) with smooth, interactive horizontal carousels while keeping both sections distinct.
  - Implemented reusable `Carousel` component (`src/components/Carousel.jsx` and `src/styles/carousel.css`) with CSS scroll-snap, dynamic scroll boundary detection, and accessible keyboard/touch navigation.
- **Flanking Navigation & Depth Vignette**:
  - Added floating chevron navigation buttons flanking the track edges with subtle hover scale/glow and auto-hiding at boundary limits.
  - Engineered left and right gradient edge fades with inset drop shadows to provide depth perception and indicate overflowing content.
  - Configured multi-card peek responsive layouts (~1.8 cards visible on desktop, ~1.15 cards on mobile) without clipping card floating elevations.
- **Files Touched**:
  - `src/components/Carousel.jsx`
  - `src/styles/carousel.css`
  - `src/components/Projects.jsx`
  - `src/styles/projects.css`
  - `src/components/Skills.jsx`
  - `src/styles/skills.css`
  - `specs/horizontal-carousel-projects-skills.md`

## [2026-09-04 17:37] - Added Project .gitignore with Standard and AI Exclusion Rules

- **Repository Cleanliness & Security**:
  - Created `.gitignore` encompassing standard Node.js, dependencies (`node_modules/`), build outputs (`dist/`, `build/`), logs, environment variables (`.env*`), and OS/IDE metadata.
  - Added exclusion rules for AI-generated assistant files, rule sets, specifications, and scratch plans (`specs/`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.agents/`, `.gemini/`, `.claude/`, `.cursor/`, `.windsurf/`, `*.prompt.md`).
- **Files Touched**:
  - `.gitignore`

## [2026-09-04 17:35] - Automated GitHub Pages Vite Deployment Workflow
- **Automated Production Build & Deployment**:
  - Created `.github/workflows/deploy.yml` configured to trigger on push to `main` and manual dispatch.
  - Automatically runs `npm ci`, compiles production assets via `npm run build`, and deploys `./dist` to the GitHub Pages environment using `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v5`.
- **Files Touched**:
  - `.github/workflows/deploy.yml`

## [2026-09-04 17:21] - Real PDF CV Download & GitHub Pages Hosting Base Configuration
- **GitHub Pages Relative Base Path**:
  - Configured `base: './'` in `vite.config.js` to ensure all asset bundles and public resources resolve correctly when hosted at `https://akifune1.github.io/` or repository sub-paths.
- **Enabled Real PDF Resume/CV Download**:
  - Connected the Resume card in `src/components/Contact.jsx` directly to `public/KolbyHernandez_CV.pdf` via `personalInfo.socials.resume`.
  - Added HTML5 `download="KolbyHernandez_CV.pdf"`, `target="_blank"`, and `rel="noopener noreferrer"` attributes, replacing the mock `alert()` placeholder with actual file downloading.
- **Files Touched**:
  - `vite.config.js`
  - `src/data/portfolioData.js`
  - `src/components/Contact.jsx`

## [2026-09-04 17:14] - Updated Project Repositories and Certification Verification URLs
- **Project Repositories & Demos**:
  - Updated `amsirs` repository and live links to `https://github.com/akifune1/amsirs`.
  - Updated `e-Barangay` repository and live links to `https://github.com/akifune1/e-Barangay`.
  - Updated `sems` repository and live links to `https://github.com/akifune1/sems-project`.
- **Certification Credential Verification Links**:
  - Updated Google Cybersecurity Professional Certificate verification URL to `https://www.coursera.org/account/accomplishments/specialization/1VRX3BGDO6H8`.
  - Updated LearnKartS Certified Ethical Hacking (v12) verification URL to `https://www.coursera.org/account/accomplishments/specialization/KMT5JGSHYI20`.
- **Files Touched**:
  - `src/data/portfolioData.js`

## [2026-09-04 16:58] - Mobile Responsiveness Overhaul & Touch Design Standards
- Spec: [specs/mobile-responsiveness-and-touch-standards.md](specs/mobile-responsiveness-and-touch-standards.md)
- **Full-Width Mobile Navigation Drawer**:
  - Implemented an animated mobile navigation drawer in `src/components/Navbar.jsx` and `src/styles/navbar.css` with `backdrop-filter: blur(12px)`, background `rgba(24, 24, 37, 0.96)`, and 48px touch rows styled with section-specific active pastel colors.
  - Added click-outside, `Escape` key, window resize dismiss listeners, ARIA accessibility attributes (`aria-expanded`, `aria-controls`), and an integrated mobile "Get In Touch" action button.
- **Touch-Calibrated Hover & Interaction Standards**:
  - Scoped `-6px` upward floating elevation to `@media (hover: hover) and (pointer: fine)` in `src/styles/index.css` to prevent hover effects from remaining stuck after touch taps on mobile screens.
  - Added tactile `:active { transform: scale(0.985); }` touch feedback across all interactive cards and ensured minimum 44×44px touch targets on mobile viewports.
- **Responsive Layouts & Fastfetch Terminal Formatting**:
  - Hero title typography now scales fluidly via `clamp()` without text clipping on narrow phone viewports.
  - Enabled soft word-wrapping and responsive font sizing on the Hero Fastfetch terminal output to prevent horizontal overflow on smartphone screens (320px–430px).
  - Responsive stacking and padding adjustments across the Experience timeline, single-column Projects and Skills cards, and natural auto-height viewport scrolling for Certifications, Contact, and Footer.
- **Files Touched**:
  - `specs/mobile-responsiveness-and-touch-standards.md`
  - `src/components/Navbar.jsx`
  - `src/styles/navbar.css`
  - `src/styles/index.css`
  - `src/styles/hero.css`
  - `src/styles/experience.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/certifications.css`
  - `src/styles/contact.css`
  - `src/styles/footer.css`

## [2026-09-04 16:49] - Production Build Security Hardening & Source Map Protection
- **Source Map & Diagnostic Leakage Prevention**:
  - Hardened `vite.config.js` by explicitly enforcing `build.sourcemap: false` to ensure raw `.jsx` source files, directory layout, and developer comments are never distributed or exposed in browser DevTools.
  - Configured esbuild in production mode to drop all `console.log`, `console.warn`, and `debugger` statements, and stripped legal license comments (`legalComments: 'none'`) to minimize the inspectable footprint and bundle size.
- **Security Meta Headers**:
  - Added `X-Content-Type-Options: nosniff` and `referrer: strict-origin-when-cross-origin` meta tags in `index.html` to enforce modern browser MIME protection and referrer privacy.
- **Files Touched**:
  - `vite.config.js`
  - `index.html`

## [2026-09-04 16:46] - Updated Hero Terminal to Fastfetch & Streamlined Command Output
- **Fastfetch Transition**:
  - Replaced legacy `neofetch --developer-profile` command in `src/components/Hero.jsx` with standard `fastfetch` command invocation.
- **Terminal Output Streamlining**:
  - Removed secondary `git status` execution block (`kolby@workstation:~$ git status`, `# On branch main (production-ready)`, `nothing to commit, working tree clean`) to reduce clutter and bring the terminal card into balanced vertical alignment with the Hero intro column.
- **Files Touched**:
  - `src/components/Hero.jsx`

## [2026-09-04 16:42] - Centered Certifications Viewport, Enriched Space Utilization, & Universal Floating Hover Fix
- Spec: [specs/certifications-centering-and-floating-cards.md](specs/certifications-centering-and-floating-cards.md)
- **Resolved Card Floating Hover Collision**:
  - Diagnosed and resolved the root cause of cards not floating on hover: `.reveal.active { transform: translateY(0); }` had higher specificity and a 0.7s transition that overrode card `:hover` transform rules.
  - Implemented universal card hover rules in `src/styles/index.css` targeting `.card:hover, .card.reveal.active:hover` with `transform: translateY(-6px) !important;` and `box-shadow: var(--shadow-floating) !important;` across all project, skill, cert, contact, experience, and terminal cards.
- **Certifications Viewport Centering & Natural Spatial Capitalization**:
  - Configured `.certifications-section` to `min-height: calc(100vh - 64px)` with flexbox vertical alignment (`align-items: center; justify-content: center;`) so it centers cleanly in the viewport when navigated to from the navbar.
  - Capitalized on the viewport vertical space by expanding card dimensions without adding superficial clutter: increased `.cert-card` `min-height` to 380px, padding to `1.85rem 1.65rem`, typography scale (`1.2rem` titles, `0.9rem` descriptions, `0.8rem` issuer tags), enlarged icon wraps to 44px (with 24px Lucide icons), and centered the full-width verification action button.
- **Contact Section Spatial Enrichment**:
  - Capitalized on vertical viewport space in `.contact-section` by increasing `.contact-channel-card` `min-height` to 330px, padding to `2rem 1.65rem`, icon containers to 50px (with 24px Lucide icons), titles to `1.15rem`, and subtitles to `0.85rem` with comfortable vertical line heights.
- **Files Touched**:
  - `specs/certifications-centering-and-floating-cards.md`
  - `src/styles/index.css`
  - `src/styles/certifications.css`
  - `src/components/Certifications.jsx`
  - `src/styles/contact.css`
  - `src/components/Contact.jsx`

## [2026-09-04 16:22] - Viewport-Centered Contact Section & Universal Floating Card Elevation Hover
- **Contact Section Viewport Centering**:
  - Configured `#contact` in `src/styles/contact.css` to match the Hero section's viewport layout (`min-height: calc(100vh - 64px)`, `display: flex`, `align-items: center`, `justify-content: center`).
  - When focused or clicked via the navbar, the Contact section cleanly occupies the full screen, perfectly centered with no visual competition.
- **Universal Floating Card Elevation Standard**:
  - Added `--shadow-floating: 0 16px 36px -4px rgba(0, 0, 0, 0.55), 0 4px 12px rgba(0, 0, 0, 0.35);` to `src/styles/index.css`.
  - Upgraded card hover states across the entire portfolio (Timeline milestone cards in `experience.css`, Project case study cards in `projects.css`, Domain cards in `skills.css`, Credential cards in `certifications.css`, Channel cards in `contact.css`, and the Terminal window in `hero.css`) to the smooth floating elevation effect (`transform: translateY(-6px)` with `--shadow-floating`).
- **Files Touched**:
  - `src/styles/contact.css`
  - `src/styles/index.css`
  - `src/styles/experience.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/certifications.css`
  - `src/styles/hero.css`

## [2026-09-04 16:16] - Section-Specific Active Navbar Theming & Site-Wide Smooth Card Upward Hover Animations
- **Section-Specific Active Navbar Colors**:
  - Configured active navigation links in `src/components/Navbar.jsx` and `src/styles/navbar.css` to dynamically match each section's primary pastel color: About/Hero (Mauve), Experience (Green), Projects (Peach), Skills (Sapphire), Certifications (Yellow), and Contact (Lavender).
  - Applied immediate active state synchronization upon click and smooth ease-in-out transition curves (`cubic-bezier(0.25, 1, 0.5, 1)`).
- **Removed Card Hover Highlights**:
  - Removed all bright background color switches, border color flashes, and colored glow boxes on hover across Projects (`projects.css`), Skills (`skills.css`), Certifications (`certifications.css`), and Contact (`contact.css`).
- **Added Uniform Smooth Moving-Up Hover Animations**:
  - Applied the smooth upward translation (`transform: translateY(-5px)`) with natural depth shadow (`0 12px 28px rgba(0, 0, 0, 0.55)`) and `0.35s cubic-bezier(0.25, 1, 0.5, 1)` ease-in-out curves across all cards (Hero terminal, Experience timeline, Projects case studies, Skills categories, Certifications, and Contact channel cards).
  - Upgraded global button and interactive link transitions to smooth ease-in-out curves, eliminating abrupt instant jumps.
- **Files Touched**:
  - `src/components/Navbar.jsx`
  - `src/styles/navbar.css`
  - `src/styles/projects.css`
  - `src/styles/skills.css`
  - `src/styles/certifications.css`
  - `src/styles/experience.css`
  - `src/styles/hero.css`
  - `src/styles/contact.css`
  - `src/styles/index.css`

## [2026-09-04 15:58] - Pastel Rainbow Palette Distribution & Projects Filter Cleanup
- Spec: [specs/pastel-rainbow-and-projects-cleanup.md](specs/pastel-rainbow-and-projects-cleanup.md)
- **Projects Section Sub-Buttons Removal**:
  - Completely removed the category filter buttons bar (`.projects-filter-bar`) and state (`activeCategory`) from `src/components/Projects.jsx` and `src/styles/projects.css`.
  - All selected project case studies now render directly in the responsive grid without filter bugs or tab-switching friction.
- **Reference-Driven Multi-Color Pastel Syntax Tags**:
  - Styled all technology pills with the Catppuccin Mocha pastel rainbow standard: individual 1px borders, matching subtle tinted backgrounds, and monospaced pastel text (Next.js Sapphire, React Mauve, TypeScript Blue, Supabase Green, Tailwind Peach, face-api.js Pink, Playwright Teal).
  - Elevated project category subtitles (e.g. `Full-Stack & AI Security`) with vibrant Mauve pastel accents.
  - Refined project card action buttons into understated terminal buttons with clean dark containers and smooth hover transitions.
- **Site-Wide Pastel Rainbow Theming**:
  - Expanded `src/styles/index.css` with full Catppuccin Mocha pastel rainbow tokens and `--gradient-rainbow-pastel`.
  - Distributed dedicated pastel themes across all narrative sections: Hero (Mauve/Lavender), Experience (Green/Teal), Projects (Peach/Mauve), Skills (domain-specific Mauve, Sapphire, Teal, Pink/Red), Certifications (Yellow/Peach), and Contact (Sky, Sapphire, Mauve, Green).
  - Added subtle pastel rainbow hairline accents across the sticky navbar, footer, and card top borders.
- **Files Touched**:
  - `specs/pastel-rainbow-and-projects-cleanup.md`
  - `src/components/Projects.jsx`
  - `src/components/ProjectCard.jsx`
  - `src/styles/index.css`
  - `src/styles/projects.css`
  - `src/styles/navbar.css`
  - `src/styles/skills.css`
  - `src/styles/experience.css`
  - `src/styles/certifications.css`
  - `src/styles/contact.css`
  - `src/styles/footer.css`

## [2026-09-04 15:32] - Section Reordering, Minimalist Style Tweaks & Verification Links
- Spec: [specs/portfolio-layout-and-style-tweaks.md](specs/portfolio-layout-and-style-tweaks.md)
- **Navbar Layout & Typography Cleanup**:
  - Removed the "Available for Roles" status badge from the top right for a distraction-free header.
  - Removed the subtitle under candidate name, leaving a clean, bold `Kolby Hernandez` brand mark.
  - Reordered navigation links to reflect the narrative progression: `About`, `Experience`, `Projects`, `Skills`, `Certifications`, `Contact`.
- **Narrative Section Flow Reordering**:
  - Reordered the entire page layout: `Hero` (About) → `Experience` → `Projects` → `Skills` → `Certifications` → `Contact`.
  - Re-indexed section tags sequentially: `[ 01. CAREER_TIMELINE ]`, `[ 02. FEATURED_WORKS ]`, `[ 03. CAPABILITIES_MATRIX ]`, `[ 04. CREDENTIALS_CERTIFICATIONS ]`, `[ 05. TRANSMISSION_CHANNEL ]`.
- **Hero Actions Simplification**:
  - Updated the primary call-to-action to `View Experiences` (smooth-scrolling to `#experience`).
  - Retained `Get In Touch` (smooth-scrolling to `#contact`) and eliminated extra tertiary action buttons.
- **Removed Academic Papers Section**:
  - Completely removed the Academic Papers / Research section from the UI and application render tree.
- **Certifications Direct Verification Links**:
  - Added direct verification action buttons (`Verify Credential ↗`) with links to official verification pages for Google Cybersecurity, LearnKartS CEH v12, and HP LIFE.
  - Removed the green "Verified Credential" badge footer containers.
- **Curated Projects & Minimalist Project Cards**:
  - Removed the "US Wellness & Therapy E-Commerce Brand" card, keeping the 3 core technical engineering systems (AMSIRS, e-Barangay, SEMS).
  - Removed the bottom brown impact metric boxes from card footers for a cleaner card profile.
- **Skills Matrix with Modern Tech Logos**:
  - Removed the green skill level badge pills on the right side of skill rows.
  - Integrated custom vector technology logos for all programming languages, frameworks, databases, and security tools styled in Catppuccin Mocha colors.
  - Removed the green "X Core Technologies" badge footer boxes.
- **Experience Timeline Refinement**:
  - Removed the "Verified Milestone" subtext and bottom brown badge containers from all milestone cards.
- **Files Touched**:
  - `src/App.jsx`
  - `src/components/Navbar.jsx`
  - `src/components/Hero.jsx`
  - `src/components/Experience.jsx`
  - `src/components/Projects.jsx`, `src/components/ProjectCard.jsx`
  - `src/components/Skills.jsx`, `src/styles/skills.css`
  - `src/components/Certifications.jsx`, `src/styles/certifications.css`
  - `src/components/Contact.jsx`
  - `src/data/portfolioData.js`
  - `specs/portfolio-layout-and-style-tweaks.md`

## [2026-09-04 15:07] - Authentic CV Data Integration, Research & Certifications Showcase
- Spec: [specs/cv-portfolio-integration.md](specs/cv-portfolio-integration.md)
- **Authentic Credentials & Candidate Bio Integration**:
  - Replaced all placeholder data with Kolby Jaynielle Luiz P. Hernandez's authentic credentials: B.S. in Information Technology – Cybersecurity from Mapúa University (Cum Laude, DOST-SEI Scholar, GWA: 1.6923), official email `kolbyhernandezbiz@gmail.com`, GitHub `https://github.com/akifune1`, and LinkedIn `https://www.linkedin.com/in/kolby-hernandez-584885362/`.
  - Updated Hero neofetch diagnostic window and typewriter animations with real degrees, academic honors, and specialization.
- **Academic Research & Vulnerability Analysis (`#research`)**:
  - Repurposed the previous Philosophy section into an Academic Papers & Security Analysis section highlighting the WinRAR Path Traversal Exploit (CVE-2025-6218, 100% sandbox simulation, highest course grade), Log4Shell (CVE-2021-44228) root-cause study, and AlertoPH emergency response UI/UX design.
- **Dedicated Certifications & Accreditations Section (`#certifications`)**:
  - Created a new section displaying verified credentials with official IDs: Google Cybersecurity (`1VRX3BGDO6H8`), Certified Ethical Hacking v12 (`KMT5JGSHYI20`), and HP LIFE Security Awareness (`30ff0262-6775-4d76-896c-c81b956f5dc3`).
- **Real Academic Software Projects & Industry Experience**:
  - Showcased AMSIRS (facial recognition with liveness detection and AES-256-GCM encryption), e-Barangay (2FA and QR verification), SEMS (RBAC and MySQL), and US Wellness E-Commerce.
  - Featured Adventus IT Services (Best Intern of the Batch Award across 500 hours), RAVA Digital Marketing Services, and Mapúa University academic timeline.
- **Files Touched**:
  - `src/data/portfolioData.js`
  - `src/components/Research.jsx`, `src/styles/research.css`
  - `src/components/Certifications.jsx`, `src/styles/certifications.css`
  - `src/components/Hero.jsx`, `src/components/Navbar.jsx`, `src/components/Projects.jsx`, `src/components/ProjectCard.jsx`, `src/components/Skills.jsx`, `src/components/Experience.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`, `src/App.jsx`
  - `specs/cv-portfolio-integration.md`

## [2026-09-04 14:51] - Refinement: Portrait Vertical Contact Cards & Availability Cleanup
- Spec: [specs/horizontal-contact-cards.md](specs/horizontal-contact-cards.md)
- **Removed Work Availability Banner**:
  - Removed the "Ready for Full-Time Roles" availability banner card to keep the contact page ultra-focused and minimal.
- **Portrait Vertical Cards Layout**:
  - Extended contact cards into taller portrait vertical rectangle cards (`min-height: 250px`, `padding: 1.5rem 1.35rem`) with generous vertical spacing.
  - Added monospaced category tags (`[ DIRECT_EMAIL ]`, `[ PROFESSIONAL ]`, `[ REPOSITORIES ]`, `[ CREDENTIALS ]`), prominent titles, and dedicated bottom action prompt footers (`Copy Address →`, `Visit Profile →`, `View Projects →`, `Download CV →`).
- **Files Touched**:
  - `src/components/Contact.jsx`
  - `src/styles/contact.css`

## [2026-09-04 14:45] - Contact Page Revamp: Horizontal Connection Cards
- Spec: [specs/horizontal-contact-cards.md](specs/horizontal-contact-cards.md)
- **Eliminated Message Form**:
  - Completely removed the "Send a Message" contact form, input controls, textarea, submit button, validation alert banners, and form submission state (`formData`, `isSubmitting`, `feedback`) to streamline user outreach.
- **Horizontal Direct Connection Cards**:
  - Transformed direct communication channels (1-click Email copy, LinkedIn Profile, GitHub Profile, and Resume PDF download) into a prominent 4-column horizontal card row on desktop, wrapping to 2 columns on tablet and 1 column on mobile.
  - Preserved 1-click clipboard copy with visual feedback ("Copied to clipboard!" + green check icon), external new-tab security links, and hover micro-animations.
- **Full-Width Work Availability Banner**:
  - Re-anchored the "Ready for Full-Time Roles" availability section as an expansive full-width status card directly underneath the horizontal cards.
- **Files Touched**:
  - `src/components/Contact.jsx`
  - `src/styles/contact.css`
  - `specs/horizontal-contact-cards.md`

- Spec: [specs/viewport-section-density.md](specs/viewport-section-density.md)
- **Viewport Section Fitting & Density Calibration**:
  - Calibrated vertical padding across all sections (`1.5rem 0 2rem/2.5rem`) and reduced `.section-header` margin-bottom (`0.85rem`) and font sizes (`1.5rem`) so section headers and primary content land cleanly in view without excessive vertical spacing.
  - Adjusted `scroll-padding-top` to `68px` in `index.css` to align section targets right below the 64px sticky navbar.
  - Optimized the **Contact** section form inputs, textarea min-height (`85px`), and sidebar cards so the entire form (name, email, subject, message, and submit button) and Direct Connections fit naturally on screen above the fold upon clicking navbar Contact.
  - Standardized compact grid gaps (`1rem`) and card paddings (`1.1rem 1.25rem`) across **Philosophy**, **Projects**, **Skills**, and **Experience** sections.
- **Files Touched**:
  - `src/styles/index.css`, `src/styles/contact.css`, `src/styles/hero.css`, `src/styles/philosophy.css`, `src/styles/projects.css`, `src/styles/skills.css`, `src/styles/experience.css`
  - `specs/viewport-section-density.md`

## [2026-08-31 10:05] - Rainbow Catppuccin Accents & Section Scroll Alignment Fix
- **Rainbow Catppuccin Mocha Palette**:
  - Assigned unique accent colors per section via CSS `--section-accent` custom properties: Sapphire for Philosophy, Mauve for Projects, Green for Skills, Peach for Experience, Blue for Contact.
  - Section tags (`[ 02. CORE_PHILOSOPHY ]`, etc.), subtitles, monospaced badges, skill level pills, and active filter states now inherit their section's rainbow accent color automatically.
  - Project tech stack tags cycle through Blue, Mauve, Sapphire, Green, and Peach for visual variety.
- **Section Scroll Alignment Fix (100% Default Zoom)**:
  - Added `scroll-padding-top: 72px` to `html` to account for the 64px sticky navbar + 8px breathing room.
  - Replaced `scrollIntoView()` in Navbar and Hero with manual `window.scrollTo()` using explicit offset calculation to reliably land each section's header just below the navbar on click.
  - Compacted section padding from `4.5rem` to `3.5rem` and section header margins from `2.75rem` to `2rem` so each section's header + first content row fits naturally within the viewport at 100% zoom.
- **Files Touched**:
  - `src/styles/index.css`, `src/styles/philosophy.css`, `src/styles/projects.css`, `src/styles/skills.css`, `src/styles/experience.css`, `src/styles/contact.css`
  - `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/ProjectCard.jsx`

## [2026-08-31 09:53] - Refinement: Clean Hybrid Portfolio with Professional Copywriting & 100% Zoom Ergonomics
- Spec: [specs/clean-hybrid-portfolio.md](specs/clean-hybrid-portfolio.md)
- **Refined Hero Layout & Screen-Friendly Ergonomics**:
  - Removed the 4 bottom cards from the hero section to achieve a clean, vertically balanced layout that fits comfortably in a single screen on 100% default zoom (`min-height: calc(100vh - 64px); padding: 2rem 0;`).
  - Integrated candidate credentials, IT degree, work availability, arrangement, and core stack directly into the right-hand Catppuccin terminal window (`developer_profile.sh`).
  - Replaced technical session prompts with a clean greeting badge: `✨ Full-Stack Software Engineer & UI Developer`.
  - Converted all hero action buttons to professional labels: `View Selected Works →`, `Design Philosophy`, `Get In Touch`.
- **Unified Philosophy Card Architecture Across All Sections**:
  - Maintained the exact 4 **Design & Engineering Philosophy** cards matching user reference (*User-First Thinking*, *Clean & Scalable Code*, *Performance & Speed*, *Cross-Functional Bridge*).
  - Applied the Philosophy card layout (sharp border, top-right icon container, Sapphire subtitle, monospaced `[ ✓ ... ]` badge, metadata label) across **Projects**, **Skills**, **Experience**, and **Contact** sections.
  - Eliminated all residual CLI/shell syntax (`$`, `./`, `--flags`, `commit_`, etc.) across navbar, filter pills, project cards, and form inputs.
- **Verified**:
  - Successful production build via `npm run build` in 1.40s.
  - End-to-end browser verification of landing viewport centering at 100% zoom, philosophy cards, project filters, and contact form submission feedback.
- **Files Touched**:
  - `src/styles/hero.css`, `src/styles/navbar.css`, `src/styles/projects.css`, `src/styles/skills.css`, `src/styles/experience.css`, `src/styles/contact.css`, `src/styles/footer.css`
  - `src/components/Hero.jsx`, `src/components/Navbar.jsx`, `src/components/Projects.jsx`, `src/components/ProjectCard.jsx`, `src/components/Skills.jsx`, `src/components/Experience.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`

## [2026-08-31 09:33] - Hybrid Release: Terminal-SaaS Aesthetics with User-Friendly Copywriting
- Spec: [specs/hybrid-catppuccin-portfolio.md](specs/hybrid-catppuccin-portfolio.md)
- **Built the Ideal Terminal-SaaS Hybrid**:
  - Implemented the exact **Design & Engineering Philosophy** section from the reference design with sharp borders, top-right icon containers, Sapphire subtitles, monospaced `[ ✓ ... ]` badge chips, and `Core Standard` labels.
  - Centered the Hero section vertically and horizontally in the initial viewport (`min-height: calc(100vh - 64px)`).
  - Applied high-contrast **Catppuccin Mocha** tokens (`#11111b` canvas, `#1e1e2e` cards, `#313244` elevated surfaces, `#45475a` crisp 1px borders) with multi-color highlights (Sapphire `#74c7ec`, Blue `#89b4fa`, Mauve `#cba6f7`, Green `#a6e3a1`, Peach `#fab387`).
  - Balanced techy design motifs (sharp corners, terminal headers `[●][●][●]`, breadcrumbs `kolby@dev:~$`, git branch indicators) with human-centric, recruiter-ready copywriting (B.S. in IT, user empathy, problem-solution case studies, accessible contact).
  - Verified scroll-triggered reveal animations across all sections and end-to-end form dispatch in browser.

## [2026-08-31 09:06] - Redesign: User-Friendly & Recruiter-Ready Portfolio (Catppuccin Edition)
- Spec: [specs/user-friendly-portfolio.md](specs/user-friendly-portfolio.md)
- **User-Centric & Recruiter-Friendly Design Transition**:
  - Migrated design palette to authentic **Catppuccin Mocha** (`#1e1e2e` base, `#89b4fa` blue, `#74c7ec` sapphire) for gentle, soothing dark-mode contrast.
  - Replaced technical terminal and cryptic bash syntax with clear, welcoming copywriting tailored for recruiters and prospective clients.
  - Highlighted IT graduate background (**B.S. in Information Technology**), core competencies, work availability, and recruiter snapshot cards.
