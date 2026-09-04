/**
 * @file src/components/Research.jsx
 * @description Academic Papers & Security Analysis section displaying vulnerability analyses,
 * exploit simulations, and systems design case studies.
 * Consumes researchPapersData from portfolioData.js; rendered in App.jsx.
 */

import React from 'react';
import { ShieldAlert, Bug, Smartphone, Check, Award } from 'lucide-react';
import { researchPapersData } from '../data/portfolioData';
import '../styles/research.css';

/**
 * Research Component
 * Showcases academic research papers, CVE vulnerability analyses, and design case studies
 * in high-contrast sharp Catppuccin cards with verified experimental highlights.
 *
 * @returns {JSX.Element} The rendered Research section.
 */
export default function Research() {
  /**
   * Helper function to return icon component based on research icon identifier.
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getResearchIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert size={20} />;
      case 'Bug':
        return <Bug size={20} />;
      case 'Smartphone':
      default:
        return <Smartphone size={20} />;
    }
  };

  return (
    <section id="research" className="research-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 02. ACADEMIC_RESEARCH ]</span>
          <h2 className="section-title">Academic Papers & Security Analysis</h2>
          <p className="section-subtitle">
            Controlled vulnerability exploit simulations in sandbox environments, root-cause CVE analysis,
            and systems architecture studies authored at Mapúa University.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="research-grid">
          {researchPapersData.map((item, idx) => (
            <div
              key={item.id}
              className={`research-card reveal stagger-${idx + 1}`}
            >
              {/* Card Header with Title, Category, and Top-Right Icon */}
              <div className="research-card-header">
                <div>
                  <div className="research-award-badge">
                    <Award size={13} />
                    <span>{item.award}</span>
                  </div>
                  <h3 className="research-title">{item.title}</h3>
                  <div className="research-category-tagline">{item.category}</div>
                </div>

                <div className="research-icon-wrap">
                  {getResearchIcon(item.icon)}
                </div>
              </div>

              {/* Research Summary */}
              <p className="research-summary">
                {item.summary}
              </p>

              {/* Research Methodology & Findings Bullets */}
              <ul className="research-bullets-list">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="research-bullet-item">
                    <span className="bullet-indicator">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Tag & Milestone Highlight */}
              <div className="research-footer-row">
                <div className="research-monotag">
                  <Check size={12} style={{ strokeWidth: 3 }} />
                  <span>{item.highlight}</span>
                </div>
                <span className="research-badge-label">{item.monoTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
