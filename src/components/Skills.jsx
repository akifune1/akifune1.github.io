/**
 * @file src/components/Skills.jsx
 * @description Technical skills and capability matrix component for Kolby Hernandez.
 * Displays programming languages, web engineering frameworks, databases, and cybersecurity tools
 * paired with custom vector tech logos and detailed competency descriptions.
 * Rendered in App.jsx.
 */

import React from 'react';
import { Layout, Server, Code2, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import '../styles/skills.css';

/**
 * Returns a sleek, high-contrast SVG vector logo matching the technology.
 * Styled to seamlessly harmonize with the Catppuccin Mocha theme.
 *
 * @param {string} skillName - Name of the technology.
 * @returns {JSX.Element} SVG vector logo.
 */
function TechLogo({ skillName }) {
  switch (skillName) {
    case 'JavaScript & TypeScript':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M8 9h8" />
          <path d="M12 9v9" />
        </svg>
      );
    case 'Python':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 8 4 8 4v3h4v1H6s-4 0-4 4 3 4 3 4h2v-2s0-2 2-2h4c3 0 3-2 3-2V4s0-2-5-2z" />
          <path d="M12 22c4 0 4-2 4-2v-3h-4v-1h6s4 0 4-4-3-4-3-4h-2v2s0 2-2 2h-4c-3 0-3 2-3 2v5s0 2 5 2z" />
          <circle cx="9" cy="5" r="0.8" fill="currentColor" />
          <circle cx="15" cy="19" r="0.8" fill="currentColor" />
        </svg>
      );
    case 'Java':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
    case 'SQL':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'C# & C++':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      );
    case 'PHP':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M7 15V9h2.5a2 2 0 0 1 0 4H7" />
          <path d="M15 15V9h2.5a2 2 0 0 1 0 4H15" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      );
    case 'React 19':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 16.5V7.5L16.5 17" />
          <path d="M15 7.5v4" />
        </svg>
      );
    case 'HTML5 & CSS3':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" />
          <path d="M8 8h8l-.5 5H8.5l.2 2.5 3.3.9 3.3-.9.2-2.5" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12c.5-2.5 2-4 4.5-4 3 0 3.5 3 5.5 3 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-3-5.5-3-1.5 0-2.5 1-3 2.5z" />
          <path d="M2 17c.5-2.5 2-4 4.5-4 3 0 3.5 3 5.5 3 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-3-5.5-3-1.5 0-2.5 1-3 2.5z" />
        </svg>
      );
    case 'Framer Motion':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3h16l-8 9z" />
          <path d="M4 12h8l8 9H4z" />
          <path d="M4 12l8 9-8-9z" />
        </svg>
      );
    case 'Figma':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        </svg>
      );
    case 'PostgreSQL & Supabase':
    case 'MySQL':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'Node.js & Express':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 22V12" />
          <path d="M12 12L3 7" />
          <path d="M12 12l9-5" />
        </svg>
      );
    case 'Firebase':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5L4 4l9.5 16-5-5.5z" />
          <path d="M15.5 14.5L12 2l-2.5 5 6 7.5z" />
          <path d="M4 4l16 16-8-2-8-14z" />
        </svg>
      );
    case 'XAMPP / Apache':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="8" x2="6.01" y2="8" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'Nessus & Vulnerability Scanners':
    case 'Kali Linux':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case 'Cisco Packet Tracer':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M15 9h.01" />
          <path d="M9 15h.01" />
          <path d="M15 15h.01" />
        </svg>
      );
    case 'Playwright':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="9" r="3" />
          <path d="M6 9v6" />
          <path d="M9 6h4a5 5 0 0 1 5 5v0" />
        </svg>
      );
    case 'VS Code & Arduino IDE':
    default:
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

/**
 * Skills Component
 * Displays technical proficiencies in sharp domain cards with practical descriptions.
 *
 * @returns {JSX.Element} The rendered Skills section.
 */
export default function Skills() {
  /**
   * Helper to return icon component based on domain category.
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} />;
      case 'Layout':
        return <Layout size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 03. CAPABILITIES_MATRIX ]</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, web engineering frameworks, databases,
            and cybersecurity auditing tools from coursework and industry internships.
          </p>
        </div>

        {/* Domain Categories Grid */}
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className={`skills-category-card reveal stagger-${idx + 1}`}
            >
              {/* Header with Title, Subtitle, and Domain Icon Container */}
              <div className="skills-card-header">
                <div>
                  <h3 className="skills-category-title">{category.category}</h3>
                  <div className="skills-category-subtitle">{category.subtitle}</div>
                </div>

                <div className="skills-icon-wrap">
                  {getCategoryIcon(category.icon)}
                </div>
              </div>

              {/* Skills Items List */}
              <div className="skills-items-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-top-line">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-tech-logo" title={skill.name}>
                        <TechLogo skillName={skill.name} />
                      </span>
                    </div>
                    <div className="skill-desc">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
