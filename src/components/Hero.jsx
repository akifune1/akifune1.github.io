/**
 * @file src/components/Hero.jsx
 * @description Impactful, viewport-centered Hero landing section for Kolby Hernandez's portfolio.
 * Presents a focused narrative with the developer's name, concise subtitle, credential mini badges,
 * and dual call-to-action buttons. No terminal card — streamlined for maximum first-impression impact.
 * Rendered at the top of App.jsx.
 */

import React from 'react';
import { ArrowDown, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/hero.css';

// Credential mini badges displayed in a flex-wrapped row beneath the subtitle.
// Hoisted outside the component to prevent array re-allocation on every render cycle.
const HERO_BADGES = [
  { label: 'B.S. Information Technology', accent: 'var(--ctp-sapphire)' },
  { label: 'Cybersecurity Analyst', accent: 'var(--ctp-red)' },
  { label: 'Full-Stack Developer', accent: 'var(--ctp-blue)' },
  { label: 'Mapúa University', accent: 'var(--ctp-mauve)' },
  { label: 'DOST-SEI Scholar', accent: 'var(--ctp-yellow)' },
];

/**
 * Hero Component
 * Renders a focused, centered landing section with impactful typography, credential badges,
 * and dual navigation CTAs ("Learn More" and "Get in Touch").
 *
 * @returns {JSX.Element} The rendered Hero section.
 */
export default function Hero() {
  /**
   * Smoothly scrolls to target section with calibrated navbar offset.
   * Uses a 20px offset since the navbar auto-hides past the Hero section.
   *
   * @param {string} id - Target DOM ID.
   */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Minimal offset since the navbar hides when leaving the Hero section
    const offset = 20;
    const elTop = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: Math.max(0, elTop - offset), behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-centered reveal">
          {/* Primary Title — Developer Name */}
          <h1 className="hero-title">
            <span className="hero-title-accent">{personalInfo.name}</span>
          </h1>

          {/* Concise Professional Subtitle */}
          <p className="hero-subtitle">
            Full-Stack Software Engineer &amp; Cybersecurity Specialist building
            high-assurance, performant web applications and secure digital systems.
          </p>

          {/* Credential Mini Badges */}
          <div className="hero-badges" role="list" aria-label="Professional credentials">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="hero-badge"
                role="listitem"
                style={{
                  '--badge-accent': badge.accent,
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Dual Call-to-Action Buttons */}
          <div className="hero-cta-group">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('experience')}
            >
              <span>Learn More</span>
              <ArrowDown size={15} />
            </button>

            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              <Send size={15} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
