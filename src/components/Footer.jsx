/**
 * @file src/components/Footer.jsx
 * @description Website footer component with developer signature, IT degree,
 * and smooth back-to-top shortcut. Rendered at the bottom of App.jsx.
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/footer.css';

/**
 * Footer Component
 * Renders the clean bottom footer with branding and smooth page scroll-up trigger.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function Footer() {
  /**
   * Smoothly scrolls viewport back to the top hero section.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-inner">
          {/* Left: Branding & Tagline */}
          <div className="footer-brand-side">
            <div className="footer-brand-title">{personalInfo.name}</div>
            <div>Full-Stack Software Engineer & Cybersecurity Specialist • {personalInfo.degree}</div>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="footer-right">
            <span>Engineered with modern full-stack & cybersecurity rigor.</span>

            <button
              className="back-to-top-btn"
              onClick={scrollToTop}
              title="Return to top of page"
            >
              <ArrowUp size={14} />
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
