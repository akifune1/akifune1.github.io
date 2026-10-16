/** Mobile/tablet section index equivalent to both desktop rails; rendered in App.jsx. */
import React from 'react';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import '../styles/mobileNav.css';

export default function MobileBottomNav({ activeSection }) {
  return <nav className="mobile-bottom-dock" aria-label="Mobile bottom navigation">
    {SECTIONS.map(({ id, label }) => <button type="button" key={id}
      className={activeSection === id ? 'is-active' : ''}
      aria-current={activeSection === id ? 'location' : undefined} onClick={() => scrollToSection(id)}>
      {label === 'Experience' ? 'Work' : label === 'Certifications' ? 'Certs' : label}
    </button>)}
  </nav>;
}
