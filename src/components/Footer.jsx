/**
 * @file src/components/Footer.jsx
 * @description Revamped website footer component for Kolby Hernandez's portfolio.
 * Implements a clean, minimalist horizontal layout featuring developer branding,
 * inline navigation pills for rapid section jumping, degree attribution, and a
 * smooth Back-to-Top trigger. Rendered at the bottom of App.jsx.
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/footer.css';

/**
 * Quick navigation anchors hoisted outside component to prevent re-allocation.
 */
const FOOTER_NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Footer Component
 * Renders the clean, standard portfolio footer with brand statement,
 * inline navigation links, degree attribution, and smooth scroll trigger.
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

  /**
   * Smoothly scrolls to target section by DOM ID with calibrated navbar offset.
   *
   * @param {string} id - Target DOM element identifier.
   */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 20;
    const elTop = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: Math.max(0, elTop - offset), behavior: 'smooth' });
  };

  return (
    <footer className="footer-container" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Upper Tier: Brand statement and inline navigation links */}
          <div className="footer-main-row">
            <div className="footer-brand-wrap">
              <span className="footer-brand-name">{personalInfo.name}</span>
              <span className="footer-brand-separator" aria-hidden="true">•</span>
              <span className="footer-brand-desc">
                Full-Stack Software Engineer &amp; Cybersecurity Specialist
              </span>
            </div>

            {/* Inline Navigation Pills */}
            <nav className="footer-nav" aria-label="Footer quick navigation">
              {FOOTER_NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className="footer-nav-link"
                  onClick={() => scrollToSection(link.id)}
                  type="button"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Minimal Divider */}
          <div className="footer-divider" aria-hidden="true" />

          {/* Lower Tier: Copyright, degree note, and Back to Top action */}
          <div className="footer-bottom-row">
            <div className="footer-copyright-wrap">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
              <span className="footer-degree-note">{personalInfo.degree}</span>
            </div>

            <button
              className="back-to-top-btn"
              onClick={scrollToTop}
              title="Return to top of page"
              aria-label="Scroll back to top"
              type="button"
            >
              <ArrowUp size={14} aria-hidden="true" />
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
