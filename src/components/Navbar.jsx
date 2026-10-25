/** Editorial masthead and theme selection; the floating dock provides full mobile navigation. */
import React from 'react';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

export default function Navbar({ activeSection }) {
  const navigate = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };
  return (
    <header className={`navbar-container ${activeSection !== 'hero' ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {SECTIONS.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event, id)}>{label}</a>)}
        </nav>
        <nav className="compact-nav" aria-label="Quick navigation">
          {SECTIONS.filter(({ id }) => id === 'hero' || id === 'projects').map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event, id)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
