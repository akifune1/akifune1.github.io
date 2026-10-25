/** Glass section dock that travels from the hero top to the viewport bottom; used by App.jsx. */
import React from 'react';
import { UserRound, BriefcaseBusiness, Layers, Sparkles, Award, Send } from 'lucide-react';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import ThemeToggle from './ThemeToggle';
import '../styles/mobileNav.css';

const SECTION_ICONS = { hero: UserRound, experience: BriefcaseBusiness, projects: Layers, skills: Sparkles, certifications: Award, contact: Send };

export default function MobileBottomNav({ activeSection }) {
  const activeIndex = Math.max(0, SECTIONS.findIndex(({ id }) => id === activeSection));
  return <div className="mobile-navigation-group" data-placement={activeSection === 'hero' ? 'top' : 'bottom'}>
    <nav className="mobile-bottom-dock" aria-label="Mobile section navigation" style={{ '--active-index': activeIndex }}>
    <span className="mobile-dock-indicator" aria-hidden="true" />
    {SECTIONS.map(({ id, label }) => {
      const Icon = SECTION_ICONS[id];
      return <button type="button" key={id} aria-label={label}
        className={activeSection === id ? 'is-active' : ''}
        aria-current={activeSection === id ? 'location' : undefined} onClick={() => scrollToSection(id)}>
        <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
        <span>{label === 'Experience' ? 'Work' : label === 'Certifications' ? 'Certs' : label}</span>
      </button>;
    })}
    </nav>
    <div className="mobile-theme-control"><ThemeToggle /></div>
  </div>;
}
