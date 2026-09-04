/**
 * @file src/components/Philosophy.jsx
 * @description Design & Engineering Philosophy component implementing the sharp,
 * high-contrast Catppuccin Mocha cards matching the user's reference design.
 * Showcases User-First Thinking, Clean Code, Performance, and Cross-Functional Collaboration.
 * Rendered in App.jsx.
 */

import React from 'react';
import { HeartHandshake, Code2, Zap, Users, Check } from 'lucide-react';
import { designPhilosophies } from '../data/portfolioData';
import '../styles/philosophy.css';

/**
 * Philosophy Component
 * Displays the core software design principles in high-contrast sharp cards
 * with monospaced feature tags and user-friendly copywriting.
 *
 * @returns {JSX.Element} The rendered Philosophy section.
 */
export default function Philosophy() {
  /**
   * Helper function to return icon component based on philosophy key.
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getPhilosophyIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake size={20} />;
      case 'Code2':
        return <Code2 size={20} />;
      case 'Zap':
        return <Zap size={20} />;
      case 'Users':
      default:
        return <Users size={20} />;
    }
  };

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 02. CORE_PHILOSOPHY ]</span>
          <h2 className="section-title">Design & Engineering Principles</h2>
          <p className="section-subtitle">
            Strong technology is only as good as the user experience it delivers. Here are the core
            principles that guide every project I design and engineer.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="philosophy-grid">
          {designPhilosophies.map((item, idx) => (
            <div
              key={item.id}
              className={`philosophy-card reveal stagger-${idx + 1}`}
            >
              {/* Card Header with Title, Tagline, and Top-Right Icon */}
              <div className="philosophy-card-header">
                <div>
                  <h3 className="philosophy-title">{item.title}</h3>
                  <div className="philosophy-tagline">{item.tagline}</div>
                </div>

                <div className="philosophy-icon-wrap">
                  {getPhilosophyIcon(item.icon)}
                </div>
              </div>

              {/* Human-Friendly Description */}
              <p className="philosophy-desc">
                {item.description}
              </p>

              {/* Bottom Tag & Core Standard Label */}
              <div className="philosophy-footer-row">
                <div className="philosophy-monotag">
                  <Check size={12} style={{ strokeWidth: 3 }} />
                  <span>{item.highlight}</span>
                </div>
                <span className="philosophy-standard-label">Core Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
