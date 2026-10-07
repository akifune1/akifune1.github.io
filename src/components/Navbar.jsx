/**
 * @file src/components/Navbar.jsx
 * @description Top navigation bar component for Kolby Hernandez's portfolio.
 * Displays developer branding, active section scroll tracking in chronological narrative order
 * (About, Experience, Projects, Skills, Certifications, Contact), and direct contact action.
 * Auto-hides when the user scrolls past the Hero section; reappears when scrolling back.
 * Rendered at the top of App.jsx.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/navbar.css';

// Navigation items mapping to sections in narrative order.
// Hoisted outside component to prevent array allocation on every render.
const NAV_ITEMS = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Navbar Component
 * Renders the top navigation bar with clean branding, scroll spy, and quick contact action.
 * Automatically hides when the user scrolls past the Hero section and reappears upon return.
 * Supports a responsive mobile navigation drawer with backdrop blur and touch ergonomics.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  // Tracks whether the user has scrolled past the Hero section to trigger auto-hide
  const [isPastHero, setIsPastHero] = useState(false);
  const navRef = useRef(null);

  /**
   * Track scroll position to update active navigation item and determine Hero visibility.
   * Throttled with requestAnimationFrame to eliminate layout thrashing during scroll.
   * Combines active section tracking and Hero-boundary detection into a single scroll handler
   * to avoid registering redundant event listeners.
   */
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      // --- Hero boundary detection for auto-hide ---
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        // 80px buffer before the Hero section fully leaves the viewport
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setIsPastHero(window.scrollY > heroBottom - 80);
      }

      // --- Active section tracking ---
      // If user has scrolled near the bottom of the page, activate the final section ('contact')
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        ticking = false;
        return;
      }

      // Check sections from bottom to top against the focal threshold (100px buffer)
      const scrollPosition = window.scrollY + 164;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
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
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    updateScrollState();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when clicking outside or pressing Escape key,
   * or when window is resized past the desktop breakpoint (960px).
   */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Smoothly scrolls to target section with appropriate offset.
   * Uses a minimal offset since the navbar auto-hides past Hero.
   *
   * @param {string} id - Target DOM ID.
   */
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // When navigating to Hero, scroll to top; otherwise use a small offset
      const navbarOffset = id === 'hero' ? 0 : 20;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetScrollTop = Math.max(0, Math.round(elementTop - navbarOffset));

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`navbar-container ${isPastHero ? 'navbar-hidden' : ''}`}
      ref={navRef}
    >
      <div className="container">
        <div className="navbar-inner">
          {/* Developer Brand */}
          <a href="#hero" className="nav-brand" onClick={() => handleNavClick('hero')}>
            <span className="nav-brand-title">{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="nav-link-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={activeSection === item.id ? `active nav-active-${item.id}` : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTA */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-primary nav-desktop-cta"
              style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              <Send size={13} />
              <span>Get In Touch</span>
            </a>

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Mobile Navigation Drawer with Backdrop Blur */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="mobile-menu mobile-menu-open">
          <ul className="mobile-nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-link-item">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={activeSection === item.id ? `active nav-active-${item.id}` : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Direct CTA inside the mobile drawer */}
          <div className="mobile-menu-cta">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              <Send size={14} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
