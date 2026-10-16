/** Both fixed margin rails, with shared section tracking and keyboard labels; used by App.jsx. */
import React from 'react';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import '../styles/scrollProgressNav.css';

export default function ScrollProgressNav({ activeSection }) {
  return <>{['left', 'right'].map((side) => <nav key={side} className={`scroll-nav-rail ${side}-rail`} aria-label={`${side === 'left' ? 'Left' : 'Right'} section navigation`}>
    {SECTIONS.map(({ id, label }) => <button type="button" key={id}
      className={`scroll-nav-item ${activeSection === id ? 'is-active' : ''}`}
      aria-label={`Navigate to ${label}`} aria-current={activeSection === id ? 'location' : undefined}
      onClick={() => scrollToSection(id)}>
      <span className="scroll-nav-dash" aria-hidden="true" /><span className="scroll-nav-label">{label}</span>
    </button>)}
  </nav>)}</>;
}
