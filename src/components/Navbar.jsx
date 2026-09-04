/**
 * @file src/components/Navbar.jsx
 * @description Top navigation bar component for Kolby Hernandez's portfolio.
 * Displays developer branding, active section scroll tracking in chronological narrative order
 * (About, Experience, Projects, Skills, Certifications, Contact), and direct contact action.
 * Rendered at the top of App.jsx.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/navbar.css';

/**
 * Navbar Component
 * Renders the top navigation bar with clean branding, scroll spy, and quick contact action.
 * Supports a responsive mobile navigation drawer with backdrop blur and touch ergonomics.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  // Navigation items mapping to sections in narrative order
  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  /**
   * Track scroll position to update active navigation item.
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
   * Smoothly scrolls to target section with manual navbar offset.
   * Immediately activates the clicked section's color theme in the navbar.
   *
   * @param {string} id - Target DOM ID.
   */
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 72;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - navbarOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container" ref={navRef}>
      <div className="container">
        <div className="navbar-inner">
          {/* Developer Brand */}
          <a href="#hero" className="nav-brand" onClick={() => handleNavClick('hero')}>
            <span className="nav-brand-title">{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
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
            {navItems.map((item) => (
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
