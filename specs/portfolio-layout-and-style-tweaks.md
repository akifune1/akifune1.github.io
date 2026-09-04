# Feature Spec: Portfolio Section Reordering & Minimalist Style Tweaks

## 1. Overview & Objectives
- **Summary**: Refine the visual presentation, section flow, and styling across the portfolio to match the candidate's clean, minimalist design preferences. Reorder sections into a cohesive narrative progression, eliminate distracting badge containers and colored footer boxes, simplify the hero CTA actions, remove the academic papers section, add verification links to certifications, and integrate technology vector logos into the skills matrix.
- **Goals**:
  - **Navbar**:
    - Remove the "Available for Roles" status badge on the top right.
    - Remove the "software engineer & cybersecurity" subtitle below Kolby Hernandez in the brand header.
    - Align navigation links to match the new narrative section order: `About`, `Experience`, `Projects`, `Skills`, `Certifications`, `Contact`.
  - **Section Progression & Narrative**:
    - Reorder sections to paint a cohesive picture of background and work before reaching contact:
      1. Hero / About (`#hero`)
      2. Experience (`#experience`)
      3. Projects (`#projects`)
      4. Skills (`#skills`)
      5. Certifications (`#certifications`)
      6. Contact (`#contact`)
  - **Hero Section**:
    - Primary button updated to "View Experiences".
    - Outline button kept as "Get In Touch".
    - Removed extraneous tertiary button.
  - **Academic Papers**:
    - Completely remove the Academic Papers / Research section from the site.
  - **Certifications**:
    - Add a "Verify Credential ↗" action button linking directly to official credential verification URLs.
    - Remove the green status badge boxes ("Verified Credential") from the cards.
  - **Projects**:
    - Remove the "US Wellness & Therapy E-Commerce Brand" card to focus exclusively on core technical software systems (AMSIRS, e-Barangay, SEMS).
    - Remove the bottom brown impact metric boxes from card footers.
  - **Skills**:
    - Remove the green proficiency level badges on the right of skill items.
    - Replace them with modern vector technology logos styled in harmony with the Catppuccin Mocha theme.
    - Remove the green footer boxes ("X Core Technologies").
  - **Experience**:
    - Remove the "Verified Milestone" subtext and bottom brown badge boxes from career milestone cards.
- **Non-Goals**:
  - Altering the underlying Catppuccin Mocha color system or font tokens.
  - Removing authentic CV credentials or contact mechanisms.

---

## 2. User Experience & Design
- **Visual Aesthetic & Theme**: Clean, distraction-free Catppuccin Mocha theme with crisp 1px borders, subtle card elevations, and uncluttered typography.
- **Key UI Components**:
  - **Navbar**: Minimalist brand typography (`Kolby Hernandez`) and clean navigation tabs without busy badge pills.
  - **Hero CTAs**: Two primary actions: "View Experiences" and "Get In Touch".
  - **Timeline Cards**: Clean milestone description and role title without superfluous badge footer rows.
  - **Project Cards**: Clean problem/solution architecture and tech tags without bottom impact pill containers.
  - **Skill Cards**: Category title, count badge, clean skill items paired with monospaced tech logos.
  - **Certifications Cards**: Card header, credential title, issuer, issue date, credential ID, and clean "Verify Credential ↗" action button.
- **Interactions & Animations**:
  - Smooth scrolling to offset anchors.
  - External link triggers for certificate verification.

---

## 3. Architecture & Technical Design
- **Tech Stack**: React 19, Vanilla CSS, Lucide React icons.
- **Component Breakdown**:
  - `src/App.jsx`: Controls section render hierarchy.
  - `src/components/Navbar.jsx`: Brand title and reordered navigation list.
  - `src/components/Hero.jsx`: Dual CTA buttons.
  - `src/components/Experience.jsx`: Timeline layout without badge footers.
  - `src/components/Projects.jsx` & `ProjectCard.jsx`: 3 software projects without impact badge footers.
  - `src/components/Skills.jsx`: Skills grid featuring `<TechLogo />` SVGs.
  - `src/components/Certifications.jsx`: Cards featuring direct credential links.
  - `src/components/Contact.jsx`: Clean vertical contact cards.

---

## 4. Detailed Feature Breakdown
- **Section Ordering**: Flow updated from About -> Experience -> Projects -> Skills -> Certifications -> Contact.
- **Badge Removal**: Removed `.timeline-card-footer`, `.project-impact-badge`, `.skills-card-footer`, `.cert-footer-row`.
- **Tech Logos**: Implemented vector SVGs for Java, Python, SQL, C#, C++, PHP, JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind, Supabase, Firebase, MySQL, PostgreSQL, Nessus, Kali Linux, Cisco, Git, Figma, and Playwright.

---

## 5. File Structure
```
src/
├── App.jsx                       # Reordered section hierarchy
├── data/
│   └── portfolioData.js          # Filtered project list & cert verify URLs
├── components/
│   ├── Navbar.jsx                # Streamlined navbar & reordered anchors
│   ├── Hero.jsx                  # Simplified CTA buttons (View Experiences & Get In Touch)
│   ├── Experience.jsx            # Cleaned timeline cards without badge footer
│   ├── Projects.jsx              # Section 02 without brown impact footer
│   ├── ProjectCard.jsx           # Clean project cards
│   ├── Skills.jsx                # Tech vector logos & cleaned footer
│   ├── Certifications.jsx        # Verification redirect button & cleaned footer
│   └── Contact.jsx               # Section 05 transmission channel
└── styles/
    ├── skills.css                # Styled tech logos & cleaned footer
    └── certifications.css        # Verify button styles & cleaned footer
```

---

## 6. Acceptance Criteria
- [x] Navbar layout cleaned: "Available for Roles" removed, subtitle removed, links match section order.
- [x] Sections reordered to: Hero -> Experience -> Projects -> Skills -> Certifications -> Contact.
- [x] Hero CTA buttons updated to "View Experiences" and "Get In Touch".
- [x] Academic Papers / Research section completely removed.
- [x] Certifications section includes "Verify Credential ↗" external links and green boxes removed.
- [x] Projects section has US Wellness card removed and brown footer boxes removed.
- [x] Skills section has green badges removed, tech logos added, and green footer boxes removed.
- [x] Experience section has "verified milestone" and brown boxes removed.
- [x] Production build passes without errors.
