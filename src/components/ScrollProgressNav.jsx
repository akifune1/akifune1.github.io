/**
 * @file src/components/ScrollProgressNav.jsx
 * @description Dual-sidebar scroll progress navigation system for Kolby Hernandez's portfolio.
 * Renders fixed vertical indicator rails in the left and right viewport gutters.
 * The right rail tracks the active section and automatically reveals its label on scroll,
 * while the left rail remains minimal and reveals section labels upon hover.
 * Rendered in App.jsx.
 */

import React, { useState, useEffect, useCallback } from 'react';
import '../styles/scrollProgressNav.css';

// Core portfolio narrative sections mapped to their DOM element IDs.
// Hoisted outside the component to avoid array re-allocations on render cycles.
const SECTIONS = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * ScrollProgressNav Component
 * Provides unobtrusive, interactive wayfinding via dual vertical dash rails.
 *
 * @returns {JSX.Element} The rendered dual-rail scroll navigation component.
 */
export default function ScrollProgressNav() {
  const [activeSection, setActiveSection] = useState('hero');

  /**
   * Smoothly scrolls to target section accounting for the 64px fixed navbar offset.
   *
   * @param {string} id - The DOM ID of the target section.
   */
  const handleNavClick = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Minimal offset since the navbar auto-hides past the Hero section;
    // for Hero, scroll to absolute top; for other sections, a small buffer keeps the header visible
    const navbarOffset = id === 'hero' ? 0 : 20;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollTop = Math.max(0, Math.round(elementTop - navbarOffset));

    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });
  }, []);

  /**
   * Tracks window scroll position to determine which section is currently in the focal zone.
   * Throttled with window.requestAnimationFrame to ensure 60fps rendering without layout thrashing.
   */
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      // If user has scrolled to the bottom of the page, activate the final section ('contact')
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        ticking = false;
        return;
      }

      // Check sections from bottom to top against the focal threshold (navbar 64px + 100px buffer)
      const scrollPosition = window.scrollY + 164;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const item = SECTIONS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial evaluation on mount
    updateActiveSection();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Navigation Rail: Minimal dashes, reveals label on hover */}
      <nav
        className="scroll-nav-rail left-rail"
        aria-label="Section Navigation Left Rail"
      >
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={`left-${section.id}`}
              type="button"
              className={`scroll-nav-item ${isActive ? 'is-active' : ''}`}
              onClick={() => handleNavClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              title={`Navigate to ${section.label}`}
            >
              <span className="scroll-nav-dash" />
              <span className="scroll-nav-label">{section.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Navigation Rail: Automatic active label reveal on scroll, hover preview for all */}
      <nav
        className="scroll-nav-rail right-rail"
        aria-label="Section Navigation Right Rail"
      >
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={`right-${section.id}`}
              type="button"
              className={`scroll-nav-item ${isActive ? 'is-active' : ''}`}
              onClick={() => handleNavClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              title={`Navigate to ${section.label}`}
            >
              <span className="scroll-nav-label">{section.label}</span>
              <span className="scroll-nav-dash" />
            </button>
          );
        })}
      </nav>
    </>
  );
}
