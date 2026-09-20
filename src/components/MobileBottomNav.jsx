/**
 * @file src/components/MobileBottomNav.jsx
 * @description Floating thumb-zone bottom navigation dock for mobile devices (<768px).
 * Houses quick-access tab actions with active section highlights and safe-area inset support.
 * Mounted in App.jsx.
 */

import React, { useState, useEffect } from 'react';
import { User, Briefcase, Code2, Cpu, Mail } from 'lucide-react';
import '../styles/mobileNav.css';

/**
 * MobileBottomNav Component
 * Renders an ergonomic, floating glassmorphism dock pinned to the bottom of the screen on mobile.
 *
 * @returns {JSX.Element} The rendered MobileBottomNav component.
 */
export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation tabs matching the portfolio's chronological narrative
  const navTabs = [
    { id: 'hero', label: 'About', icon: User, colorClass: 'tab-hero' },
    { id: 'experience', label: 'Work', icon: Briefcase, colorClass: 'tab-experience' },
    { id: 'projects', label: 'Projects', icon: Code2, colorClass: 'tab-projects' },
    { id: 'skills', label: 'Skills', icon: Cpu, colorClass: 'tab-skills' },
    { id: 'contact', label: 'Contact', icon: Mail, colorClass: 'tab-contact' },
  ];

  /**
   * Passive scroll listener keeping active bottom dock tab synchronized with viewport position.
   */
  useEffect(() => {
    const handleScroll = () => {
      // If near the bottom of the page, activate the contact tab
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // 160px offset balances top fixed header height + mobile focal zone
      const scrollPosition = window.scrollY + 160;

      for (let i = navTabs.length - 1; i >= 0; i--) {
        const tab = navTabs[i];
        const element = document.getElementById(tab.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smoothly scrolls to target section with sticky header offset.
   *
   * @param {string} id - Target DOM element id.
   */
  const handleTabClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 64;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, Math.round(elementTop - navbarOffset)),
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="mobile-bottom-dock" aria-label="Mobile bottom navigation">
      <div className="mobile-dock-pill">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              className={`mobile-dock-item ${tab.colorClass} ${isActive ? 'is-active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
              aria-label={`Scroll to ${tab.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="dock-icon-wrap">
                <Icon size={19} />
              </span>
              <span className="dock-label">{tab.label}</span>
              {isActive && <span className="dock-active-dot" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
