/**
 * @file src/data/portfolioData.js
 * @description Central portfolio content and configuration data for Kolby Hernandez.
 * Contains authentic CV details: education from Mapúa University (Cum Laude, DOST-SEI Scholar),
 * verified cybersecurity certifications, academic research papers, software projects, and industry experience.
 */

export const personalInfo = {
  name: "Kolby Hernandez",
  fullName: "Kolby Jaynielle Luiz P. Hernandez",
  headline: "Full-Stack Software Engineer & Cybersecurity Specialist",
  subHeadline: "Building high-assurance, performant web applications and secure digital systems with modern engineering rigor.",
  status: "Available for Full-Time Roles & Opportunities",
  location: "Cavite City, Cavite / Metro Manila, Philippines",
  gwa: "1.6923 (Cum Laude)",
  scholarship: "DOST-SEI Scholar (RA 7687)",
  degree: "B.S. in Information Technology – Cybersecurity",
  university: "Mapúa University – Makati Branch",
  bio: "Hi! I'm an IT graduate from Mapúa University majoring in Cybersecurity (Cum Laude & DOST-SEI Scholar) and a Full-Stack Software Engineer. I combine deep cybersecurity awareness with modern web engineering—architecting resilient applications with Next.js, React, TypeScript, and secure database schemas, while conducting hands-on vulnerability assessments and security research.",
  recruiterHighlights: [
    { label: "Education", value: "B.S. in IT – Cybersecurity (Mapúa Univ)", icon: "GraduationCap" },
    { label: "Honors", value: "Cum Laude | DOST-SEI Scholar (GWA 1.69)", icon: "Award" },
    { label: "Core Expertise", value: "Full-Stack & Secure Web Engineering", icon: "ShieldCheck" },
    { label: "Work Availability", value: "Immediate / Full-Time Worldwide", icon: "Clock" }
  ],
  socials: {
    github: "https://github.com/akifune1",
    linkedin: "https://www.linkedin.com/in/kolby-hernandez-584885362/",
    email: "kolbyhernandezbiz@gmail.com",
    resume: `${import.meta.env.BASE_URL}KolbyHernandez_CV.pdf`,
  }
};

/**
 * Academic Papers, Cybersecurity Research & Systems Case Studies
 * Repurposed from the previous generic philosophy section to highlight authentic research.
 */
export const researchPapersData = [
  {
    id: "cve-2025-6218",
    title: "Assessing CVE-2025-6218: WinRAR Path Traversal Exploit",
    category: "Vulnerability Analysis & Sandbox Simulation",
    badge: "Academic Research",
    highlight: "100% Exploit Rate in Sandbox",
    award: "Highest Grade in Course Award",
    summary: "Co-authored an empirical vulnerability analysis of CVE-2025-6218, a directory-traversal flaw in WinRAR. Successfully reproduced the exploit using benign proof-of-concept files in an isolated virtual sandbox lab.",
    details: [
      "Performed root-cause analysis comparing vulnerable vs. patched software builds to identify unchecked relative path parameters.",
      "Designed a controlled experiment across repeated trials that quantified a 100% exploit success rate for placing files into the Startup folder.",
      "Formulated mitigation recommendations including patch management, sandboxed file extraction, and endpoint monitoring."
    ],
    icon: "ShieldAlert",
    monoTag: "[ CVE_ANALYSIS ]"
  },
  {
    id: "log4shell-analysis",
    title: "Log4Shell (CVE-2021-44228): Critical Cybersecurity Analysis",
    category: "Cybersecurity & Incident Research",
    badge: "Security Paper",
    highlight: "JNDI / LDAP Attack Vector",
    award: "Vulnerability Root-Cause Study",
    summary: "Co-authored a critical technical analysis of Log4Shell (CVE-2021-44228), breaking down remote code execution via undocumented JNDI string-substitution features in Apache Log4j.",
    details: [
      "Analyzed remote JNDI lookup exploitation mechanisms querying attacker-controlled LDAP endpoints to execute malicious Java bytecode.",
      "Evaluated systemic impacts across affected global enterprise software and public cloud infrastructure.",
      "Proposed layered defense mechanisms incorporating proactive honeypots and machine-learning-based intrusion detection."
    ],
    icon: "Bug",
    monoTag: "[ ZERO_DAY_DEFENSE ]"
  },
  {
    id: "alertoph-emergency",
    title: "AlertoPH: Centralized Emergency Service Mobile Platform",
    category: "Civic UI/UX & System Design",
    badge: "Design Prototype",
    highlight: "Interactive Figma Architecture",
    award: "Lead UI/UX Designer",
    summary: "Co-authored a research study and engineered the interactive UI/UX architecture for a centralized emergency-response mobile platform tailored for the Philippines.",
    details: [
      "Designed real-time GPS tracking and 1-tap emergency dispatch dialing for police, fire, and medical responders.",
      "Created complete visual layouts and interactive Figma prototypes for onboarding, live emergency maps, and community reporting.",
      "Conducted user testing to ensure panic-resilient UX with high-contrast accessibility under stressful scenarios."
    ],
    icon: "Smartphone",
    monoTag: "[ SYSTEM_PROTOTYPE ]"
  }
];

/**
 * Official Certifications and Industry Accreditations
 */
export const certificationsData = [
  {
    id: "google-cybersecurity",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    issueDate: "June 2025",
    credentialId: "1VRX3BGDO6H8",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/1VRX3BGDO6H8",
    badge: "Professional Certificate",
    icon: "Award",
    description: "Comprehensive training in network security, threat analysis, Linux administration, Python automation, and SIEM tools (Suricata, Splunk).",
    monoTag: "[ GOOGLE_VERIFIED ]"
  },
  {
    id: "certified-ethical-hacking",
    title: "Certified Ethical Hacking (v12)",
    issuer: "LearnKartS",
    issueDate: "October 2025",
    credentialId: "KMT5JGSHYI20",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/KMT5JGSHYI20",
    badge: "Penetration Testing",
    icon: "ShieldCheck",
    description: "In-depth penetration testing, reconnaissance, vulnerability scanning, system exploitation, and network countermeasures.",
    monoTag: "[ CEH_V12 ]"
  },
  {
    id: "hp-life-cybersecurity",
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE",
    issueDate: "March 2026",
    credentialId: "30ff0262-6775-4d76-896c-c81b956f5dc3",
    verifyUrl: "https://www.life-global.org/certificate/30ff0262-6775-4d76-896c-c81b956f5dc3",
    badge: "Security Awareness",
    icon: "Lock",
    description: "Foundational cyber defense, organizational data protection, safe digital operations, and social engineering mitigation.",
    monoTag: "[ HP_LIFE ]"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Security" },
  { id: "civic", label: "Civic Tech & Auth" },
  { id: "database", label: "Database Systems" }
];

export const projectsData = [
  {
    id: "amsirs",
    title: "AMSIRS — Campus Attendance & Incident Intelligence",
    tagline: "Full-stack campus management platform with biometric facial recognition, liveness detection, and AES-encrypted incident reporting.",
    category: "fullstack",
    featured: true,
    impact: "AES-256-GCM Encrypted",
    badge: "Full-Stack & AI Security",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "face-api.js", "Playwright"],
    problem: "Campus administrators faced slow, spoofable manual attendance lines and unencrypted student incident documentation prone to data leakage.",
    solution: "Architected a full-stack Next.js application with facial recognition entry/exit gates featuring anti-spoofing liveness checks, Supabase Row Level Security (RLS), and Node.js AES-256-GCM encryption for incident records at rest.",
    liveUrl: "https://github.com/akifune1/amsirs",
    repoUrl: "https://github.com/akifune1/amsirs",
    highlights: [
      "Designed intuitive front-end UI and architected relational backend schemas for facial entry/exit checkpoints.",
      "Implemented Row Level Security (RLS) policies in PostgreSQL/Supabase and AES-256-GCM encryption for sensitive student records.",
      "Conducted security audits testing API rate limits, Cross-Site Scripting (XSS), and photo/video liveness-spoofing attempts."
    ]
  },
  {
    id: "e-barangay",
    title: "e-Barangay: Secure Document Request System",
    tagline: "Civic digital service platform modernizing local municipal document issuance with two-factor authentication and QR validation.",
    category: "civic",
    featured: true,
    impact: "2FA + QR Verification",
    badge: "Civic Tech & Auth",
    techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "npm", "Figma"],
    problem: "Residents in the NCR area experienced long in-person lines and paper forgery risks for municipal certificates and clearances.",
    solution: "Served as Developer and Project Lead on a 4-person team, building a secure web platform featuring 2FA, encrypted resident data, and scannable QR verification for authentic document validation.",
    liveUrl: "https://github.com/akifune1/e-Barangay",
    repoUrl: "https://github.com/akifune1/e-Barangay",
    highlights: [
      "Led a 4-person development team through Figma UI prototyping and responsive frontend implementation in HTML, CSS, and JS.",
      "Integrated Firebase Authentication with two-factor verification to safeguard citizen identities.",
      "Engineered backend data encryption and QR-based authenticity checks for official barangay document verification."
    ]
  },
  {
    id: "sems",
    title: "SEMS — School Enrollment Management System",
    tagline: "End-to-end academic enrollment platform with role-based access control and relational database student record keeping.",
    category: "database",
    featured: true,
    impact: "Role-Based Access Control",
    badge: "Database & Admin Portal",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "Apache", "XAMPP"],
    problem: "Educational institutions struggled with disorganized student registration workflows, spreadsheet chaos, and lack of role-segregated administrative access.",
    solution: "Developed an end-to-end enrollment system featuring strict Role-Based Access Control (RBAC), secure authentication, relational MySQL schema design, and seamless CRUD operations.",
    liveUrl: "https://github.com/akifune1/sems-project",
    repoUrl: "https://github.com/akifune1/sems-project",
    highlights: [
      "Built full front end, back-end PHP logic, and MySQL database from the ground up to streamline student registration.",
      "Engineered user authentication distinguishing Admin and Student/Staff roles, password management, and student profiles.",
      "Structured local deployment via XAMPP with comprehensive configuration documentation for maintainers."
    ]
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    subtitle: "Core languages for systems, backend, and web engineering.",
    icon: "Code2",
    items: [
      { name: "JavaScript & TypeScript", level: "Expert", desc: "Modern ES6+, async architecture, strict typing, and full-stack integration." },
      { name: "Python", level: "Advanced", desc: "Automation scripts, security tooling, and backend data processing." },
      { name: "Java", level: "Advanced", desc: "Object-oriented software development and enterprise application logic." },
      { name: "SQL", level: "Advanced", desc: "Relational queries, complex joins, database schema design, and indexing." },
      { name: "C# & C++", level: "Proficient", desc: "Systems programming, algorithms, and sandbox test environments." },
      { name: "PHP", level: "Proficient", desc: "Server-side rendering, session management, and MySQL integration." }
    ]
  },
  {
    category: "Web & Frontend Engineering",
    subtitle: "Building responsive, modern, and accessible user interfaces.",
    icon: "Layout",
    items: [
      { name: "React 19", level: "Expert", desc: "Component architecture, modern hooks, and state management." },
      { name: "Next.js", level: "Advanced", desc: "Server-side rendering, App Router, and API route design." },
      { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic structure, responsive layouts, and cross-browser styling." },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility-first CSS, custom themes, and rapid UI development." },
      { name: "Framer Motion", level: "Advanced", desc: "Fluid micro-animations, layout transitions, and interactive UI." },
      { name: "Figma", level: "Advanced", desc: "User interface design, wireframing, and interactive prototyping." }
    ]
  },
  {
    category: "Databases & Backend Services",
    subtitle: "Secure data persistence, access control, and APIs.",
    icon: "Server",
    items: [
      { name: "PostgreSQL & Supabase", level: "Advanced", desc: "Relational modeling, Row Level Security (RLS), and real-time triggers." },
      { name: "MySQL", level: "Advanced", desc: "Relational database normalization, stored procedures, and CRUD operations." },
      { name: "Node.js & Express", level: "Advanced", desc: "RESTful endpoints, cryptographic hashing (crypto), and middleware." },
      { name: "Firebase", level: "Advanced", desc: "User authentication, two-factor auth, and cloud document storage." },
      { name: "XAMPP / Apache", level: "Advanced", desc: "Local server hosting, phpMyAdmin management, and environment setup." }
    ]
  },
  {
    category: "Cybersecurity & Developer Tools",
    subtitle: "Vulnerability analysis, defense tooling, and DevOps workflows.",
    icon: "ShieldCheck",
    items: [
      { name: "Nessus & Vulnerability Scanners", level: "Advanced", desc: "Network vulnerability assessment, CVE discovery, and reporting." },
      { name: "Kali Linux", level: "Advanced", desc: "Penetration testing environment, security auditing, and sandbox analysis." },
      { name: "Cisco Packet Tracer", level: "Advanced", desc: "Network topology design, routing protocols, and firewall simulation." },
      { name: "Playwright", level: "Advanced", desc: "End-to-end automated testing, cross-browser validation, and security tests." },
      { name: "Git & GitHub", level: "Expert", desc: "Branching strategies, collaborative version control, and code reviews." },
      { name: "VS Code & Arduino IDE", level: "Expert", desc: "Integrated development environments, debugging, and embedded firmware." }
    ]
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "IT Support Trainee (Intern)",
    company: "Adventus IT Services (Philippines) Inc.",
    period: "Dec. 2025 - Apr. 2026",
    type: "Best Intern of the Batch Award",
    location: "Makati City, Philippines",
    description: "Delivered hardware evaluation, quality assurance, diagnostics, and logistics coordination throughout a 500-hour enterprise IT internship.",
    achievements: [
      "Recognized as Best Intern of the Batch, an award reflecting consistent high performance, reliability, and dedication across 500 hours.",
      "Conducted comprehensive User Acceptance Testing (UAT) on laptops, monitors, keyboards, mice, and headsets to guarantee client quality standards.",
      "Diagnosed and resolved hardware malfunctions and technical issues across multiple device types prior to enterprise deployment.",
      "Coordinated closely with the logistics team to verify shipment accuracy and ensure mission-critical hardware reached clients on schedule.",
      "Maintained organized warehousing and storage protocols for defective hardware, properly logging and securing units pending repair."
    ]
  },
  {
    id: "exp-2",
    role: "Junior Web Developer (Remote)",
    company: "RAVA Digital Marketing Services",
    period: "Aug. 2025 - Dec. 2025",
    type: "Commercial Web Project",
    location: "Marikina City, Philippines",
    description: "Independently designed, engineered, and launched a full e-commerce web platform for an international wellness brand based in Florida, USA.",
    achievements: [
      "Independently designed and developed a full e-commerce website on Wix for a wellness and therapy products brand.",
      "Built a multi-category product catalog spanning physical devices (light therapy panels, terahertz wands, cold lasers), wearables, and digital healing courses.",
      "Delivered the completed website to a small wellness business in Florida, managing the project independently from conceptual planning through launch."
    ]
  },
  {
    id: "exp-3",
    role: "B.S. in Information Technology – Cybersecurity",
    company: "Mapúa University – Makati Branch",
    period: "2023 - 2026",
    type: "Cum Laude • DOST-SEI Scholar",
    location: "Makati City, Philippines",
    description: "Rigorous academic study in Cybersecurity, Web Development, Database Management, and Systems Security.",
    achievements: [
      "Graduating Cum Laude with a General Weighted Average (GWA) of 1.6923.",
      "Recognized as a Department of Science and Technology (DOST-SEI) Scholar under Republic Act 7687.",
      "Co-authored top-rated research papers on WinRAR directory-traversal vulnerabilities (CVE-2025-6218) and the Log4Shell zero-day exploit."
    ]
  }
];
