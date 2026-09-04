# Feature Spec: CV Data Integration, Research Showcase & Certifications Section

## 1. Overview & Objectives
- **Summary**: Replace all placeholder/dummy content across the entire portfolio with Kolby Jaynielle Luiz P. Hernandez's verified CV credentials. Convert the previous Philosophy section into an "Academic Papers & Security Research" section, introduce a dedicated "Certifications & Credentials" section, and populate real technical skills, academic software projects, and professional experience from the provided CV, LinkedIn, and GitHub.
- **Goals**:
  - Integrate real candidate data:
    - **Name**: Kolby Hernandez (Full: Kolby Jaynielle Luiz P. Hernandez)
    - **Title/Headline**: Full-Stack Software Engineer & Cybersecurity Specialist
    - **Education**: Bachelor of Science in Information Technology – Cybersecurity (2023 - 2026), Mapúa University – Makati Branch. GWA: 1.6923, Cum Laude, DOST-SEI Scholar (RA 7687).
    - **Location**: Cavite City, Cavite, Philippines
    - **Email**: `kolbyhernandezbiz@gmail.com`
    - **LinkedIn**: `https://www.linkedin.com/in/kolby-hernandez-584885362/`
    - **GitHub**: `https://github.com/akifune1`
  - Transform the Philosophy section into **Academic Papers & Security Research** (`#research`), highlighting:
    1. *Assessing CVE-2025-6218: WinRAR Path Traversal Exploit* (100% exploit rate simulation, highest course grade).
    2. *Log4Shell Vulnerability (CVE-2021-44228): Critical Cybersecurity Analysis* (JNDI/LDAP lookups, honeypots, ML defense).
    3. *AlertoPH: Centralized Mobile Emergency Response Platform* (Figma UI/UX lead, GPS tracking, 1-tap dispatch).
  - Add a dedicated **Certifications & Credentials** section (`#certifications`) with cards for:
    1. *Google Cybersecurity* (Google, Jun. 2025, ID: 1VRX3BGDO6H8)
    2. *Certified Ethical Hacking (v12)* (LearnKartS, Oct. 2025, ID: KMT5JGSHYI20)
    3. *Introduction to Cybersecurity Awareness* (HP LIFE, Mar. 2026, ID: 30ff0262-6775-4d76-896c-c81b956f5dc3)
  - Populate the **Projects** section (`#projects`) with real academic software projects:
    1. *AMSIRS — Attendance Monitoring, Student Incident Reporting & Support* (Next.js 16, React 19, TypeScript, Supabase RLS, AES-256-GCM, face-api.js, Playwright).
    2. *e-Barangay: Secure Document Request System* (HTML5, CSS3, JS, Firebase, 2FA, QR verification, Figma).
    3. *SEMS: School Enrollment Management System* (PHP, MySQL, HTML, CSS, Apache XAMPP, RBAC).
  - Populate the **Experience** section (`#experience`) with real work & education:
    1. *Adventus IT Services (Philippines) Inc.* (Dec. 2025 - Apr. 2026): IT Support Trainee (Intern) — Best Intern of the Batch Award (500 hrs), UAT, hardware diagnostics, inventory.
    2. *RAVA Digital Marketing Services* (Aug. 2025 - Dec. 2025): Junior Web Developer (Remote) — Wix e-commerce development for US Florida wellness business.
    3. *Mapúa University – Makati Branch* (2023 - 2026): B.S. in Information Technology – Cybersecurity, Cum Laude, DOST-SEI Scholar, GWA 1.6923.
  - Update **Skills** matrix to match CV languages (Java, Python, SQL, C#, C++, PHP, JS, TypeScript), web frameworks, databases, and networking/security tools (Nessus, Kali Linux, Cisco Packet Tracer, Playwright).
  - Update Navbar and smooth scroll links to include the new navigation structure.
- **Non-Goals**:
  - Breaking the Catppuccin Mocha aesthetic or sharp design language.
  - Hardcoding dummy placeholders.

---

## 2. User Experience & Design
- **Visual Aesthetic & Theme**: Catppuccin Mocha high contrast (`#11111b` crust, `#1e1e2e` base, `#313244` surface0, `#45475a` borders, vibrant accents).
- **Key UI Components**:
  - **Navbar**: Updated brand, tagline "Software Engineer & Cybersecurity Specialist", and navigation items: `About`, `Research`, `Certifications`, `Projects`, `Skills`, `Experience`, `Contact`.
  - **Hero**: Neofetch terminal updated with real Mapúa University degree, Cum Laude, DOST-SEI Scholar status, real core stack, and real Cavite City/Remote availability.
  - **Research & Papers Section** (formerly Philosophy): 3-card or 2x2 grid displaying empirical vulnerability research and system design case studies with monospaced tags and academic highlights.
  - **Certifications Section**: Sharp Catppuccin cards displaying certificate badge, issuer, issue date, verified credential ID, and verification indicator.
  - **Projects Section**: 3 core full-stack software applications from the CV with real problem/solution breakdowns, actual tech stacks, and live/repo links mapped to github.com/akifune1.
  - **Contact Section**: Updated cards reflecting `kolbyhernandezbiz@gmail.com`, `https://github.com/akifune1`, `https://www.linkedin.com/in/kolby-hernandez-584885362/`.
- **Interactions & Animations**:
  - Consistent hover elevations (`translateY(-4px)`), sapphire/blue border glow, and clipboard copy triggers.

---

## 3. Architecture & Technical Design
- **Tech Stack**: React 19, Vanilla CSS, Lucide React icons.
- **Component Breakdown**:
  - `src/data/portfolioData.js`: Central source of truth rewritten with complete real CV data (personal info, research papers, certifications, academic projects, skills matrix, and career timeline).
  - `src/components/Navbar.jsx`: Update nav items to include `Research` and `Certifications`.
  - `src/components/Hero.jsx`: Update neofetch terminal and titles.
  - `src/components/Research.jsx` (replacing `Philosophy.jsx` or updating `Philosophy.jsx` component/styling): Displays research papers & vulnerability analyses.
  - `src/components/Certifications.jsx`: New component displaying the 3 official credentials.
  - `src/styles/certifications.css`: Stylesheet for the certifications grid.
  - `src/components/Projects.jsx` & `ProjectCard.jsx`: Consume real academic software projects.
  - `src/components/Skills.jsx`: Real technical capability matrix.
  - `src/components/Experience.jsx`: Real internship, web dev, and Mapúa University milestones.
  - `src/components/Contact.jsx`: Real email and social links.
  - `src/App.jsx`: Mount new sections in logical order.

---

## 4. Detailed Feature Breakdown

### 4.1 Data Overhaul (`src/data/portfolioData.js`)
- Replace all placeholder objects with authentic data:
  - `personalInfo`: Real name, email `kolbyhernandezbiz@gmail.com`, GitHub `https://github.com/akifune1`, LinkedIn `https://www.linkedin.com/in/kolby-hernandez-584885362/`, degree `B.S. in Information Technology – Cybersecurity (Cum Laude, DOST-SEI Scholar)`.
  - `researchPapersData`: CVE-2025-6218 WinRAR Exploit Analysis, Log4Shell Critical Analysis, AlertoPH Emergency App design.
  - `certificationsData`: Google Cybersecurity, CEH v12, HP LIFE Cybersecurity Awareness with official Credential IDs.
  - `projectsData`: AMSIRS (Full-Stack & AI Security), e-Barangay (Civic Tech & Auth), SEMS (School Enrollment Management).
  - `skillsData`: Programming Languages, Web Dev, Databases & Backend, Networking & Security Tools (Nessus, Kali Linux, Cisco Packet Tracer).
  - `experienceData`: Adventus IT Services (Best Intern of Batch), RAVA Digital Marketing Services, Mapúa University (Cum Laude).

### 4.2 Research Section Component & Styles
- Convert `Philosophy.jsx` into `Research.jsx` (or repurpose `Philosophy.jsx`) presenting academic papers with research findings, methodology, and exploit simulation results.
- Assign dedicated section tag `[ 02. RESEARCH_AND_PAPERS ]`.

### 4.3 Certifications Section Component (`src/components/Certifications.jsx` & `src/styles/certifications.css`)
- Render 3 certification cards in a responsive grid.
- Display Issuer icon, title, issue date, credential ID, and verified status tag.
- Assign dedicated section tag `[ 03. CREDENTIALS_CERTIFICATIONS ]`.

### 4.4 App & Navigation Flow (`src/App.jsx`, `src/components/Navbar.jsx`)
- Hierarchy:
  1. `Hero` (`#hero`)
  2. `Research` (`#research`)
  3. `Certifications` (`#certifications`)
  4. `Projects` (`#projects`)
  5. `Skills` (`#skills`)
  6. `Experience` (`#experience`)
  7. `Contact` (`#contact`)
  8. `Footer`

---

## 5. File Structure
```
src/
├── data/
│   └── portfolioData.js     # Full real CV dataset
├── components/
│   ├── Navbar.jsx           # Updated navigation links
│   ├── Hero.jsx             # Updated neofetch terminal & headline
│   ├── Research.jsx         # Academic research & vulnerability analysis cards
│   ├── Certifications.jsx   # New: Official cybersecurity certifications cards
│   ├── Projects.jsx         # AMSIRS, e-Barangay, SEMS projects
│   ├── Skills.jsx           # Real skills & security tools matrix
│   ├── Experience.jsx       # Adventus IT, RAVA, Mapúa University
│   ├── Contact.jsx          # Real contact channels & CV links
│   └── Footer.jsx           # Real degree & branding
└── styles/
    ├── research.css         # Academic research card styles
    └── certifications.css   # Certifications grid & credential styles
```

---

## 6. Acceptance Criteria
- [ ] All dummy content across the portfolio is replaced with Kolby's authentic CV details.
- [ ] Email is set to `kolbyhernandezbiz@gmail.com`.
- [ ] LinkedIn links to `https://www.linkedin.com/in/kolby-hernandez-584885362/`.
- [ ] GitHub links to `https://github.com/akifune1`.
- [ ] Previous Philosophy section is revamped into an Academic Research & Vulnerability Analysis section with real CVE research and simulation results.
- [ ] New Certifications section displays Google Cybersecurity, Certified Ethical Hacker v12, and HP LIFE with their Credential IDs.
- [ ] Projects showcase AMSIRS, e-Barangay, and SEMS with actual tech stacks and architecture details.
- [ ] Experience timeline showcases Adventus IT Services (Best Intern of Batch), RAVA Digital Marketing, and Mapúa University (Cum Laude, DOST-SEI Scholar).
- [ ] Navbar tracks all sections with smooth scrolling offset.
- [ ] Code passes production build and follows all documentation standards (headers, JSDoc, inline comments).
- [ ] `CHANGELOG.md` is updated with system timestamp and link to this spec.
