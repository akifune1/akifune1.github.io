/** Closing identity, navigation, theme control, and hero artwork credit; used by App.jsx. */
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SECTIONS } from '../hooks/useActiveSection';
import { scrollToSection } from '../hooks/scrollToSection';
import ThemeToggle from './ThemeToggle';
import '../styles/footer.css';

export default function Footer() {
  return <footer className="footer-container">
    <div className="container">
      <div className="footer-main-row">
        <div><p className="footer-brand-name">{personalInfo.name}<span aria-hidden="true">.</span></p>
          <p>Full-Stack Software Engineer &amp; Cybersecurity Specialist</p></div>
        <button className="text-link back-to-top-btn" type="button" onClick={() => scrollToSection('hero')}>Back to Top <ArrowUp size={14.4} /></button>
      </div>
      <nav className="footer-nav" aria-label="Footer quick navigation">{SECTIONS.map(({ id, label }) =>
        <a key={id} href={`#${id}`} onClick={(event) => { event.preventDefault(); scrollToSection(id); }}>{label}</a>)}</nav>
      <div className="footer-bottom-row">
        <div><p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p><p>{personalInfo.degree}</p>
          <p className="footer-art-credit">Hero backgrounds by <a href="https://www.pixiv.net/en/users/41736171" target="_blank" rel="noopener noreferrer">furi / <span lang="ja">ふーり</span></a> on Pixiv.</p>
        </div>
        <ThemeToggle />
      </div>
    </div>
  </footer>;
}
