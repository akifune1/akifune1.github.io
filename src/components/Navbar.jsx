/** Responsive masthead with document navigation and theme selection; used by App.jsx. */
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const menuButton = useRef(null);
  useEffect(() => {
    const closeOutside = (event) => { if (!header.current?.contains(event.target)) setOpen(false); };
    const escape = (event) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    };
    const resize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', escape);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', escape);
      window.removeEventListener('resize', resize);
    };
  }, [open]);
  const navigate = (event, id) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };
  return (
    <header ref={header} className={`navbar-container ${activeSection !== 'hero' && !open ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {SECTIONS.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event, id)}>{label}</a>)}
        </nav>
        <nav className="compact-nav" aria-label="Quick navigation">
          {SECTIONS.filter(({ id }) => id === 'hero' || id === 'projects').map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event, id)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button ref={menuButton} type="button" className="mobile-toggle-btn" aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} aria-controls="mobile-navigation-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation-menu" className="mobile-menu container" aria-label="Mobile section navigation">
        {SECTIONS.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}
          onClick={(event) => navigate(event, id)}>{label}</a>)}
      </nav>}
    </header>
  );
}
