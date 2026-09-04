/**
 * @file src/components/Hero.jsx
 * @description Viewport-centered Hero profile component for Kolby Hernandez combining
 * an authentic introductory bio, professional action buttons, and a comprehensive Catppuccin
 * terminal diagnostics window reflecting Mapúa University credentials and cybersecurity expertise.
 * Rendered at the top of App.jsx.
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Send, Sparkles, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/hero.css';

/**
 * Hero Component
 * Perfectly centered in the initial viewport at 100% zoom, presenting developer credentials,
 * animated role cycling, and a complete system/profile terminal preview.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic roles array for typewriter animation matching real CV credentials
  const roles = [
    "Full-Stack Software Engineer",
    "Cybersecurity Specialist",
    "Mapúa IT Graduate (Cum Laude)",
    "DOST-SEI Scholar (RA 7687)",
    "Penetration Testing & Secure Web Architect"
  ];

  /**
   * Typewriter effect loop cycling through developer titles.
   */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  /**
   * Smoothly scrolls to target section with calibrated navbar offset.
   * @param {string} id - Target DOM ID.
   */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 72;
      const elTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elTop - navbarOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Greeting, Bio, Professional Action Buttons */}
          <div className="hero-content reveal">
            <div className="hero-greeting-badge">
              <Sparkles size={14} />
              <span>Full-Stack Software Engineer & Cybersecurity Specialist</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-accent">{personalInfo.name}</span>
            </h1>

            {/* Typewriter role subhead */}
            <div className="hero-typewriter-container">
              <span className="hero-typewriter-prefix">$ whoami &gt;</span>
              <span>{displayText}</span>
              <span className="cursor-blink" />
            </div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Professional Action Buttons */}
            <div className="hero-cta-group">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('experience')}
              >
                <span>View Experiences</span>
                <ArrowRight size={15} />
              </button>

              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                <Send size={15} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Contrast Sharp Catppuccin Terminal Diagnostics Window */}
          <div className="hero-terminal-card terminal-window reveal stagger-2">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
              </div>
              <div className="terminal-title">
                <span>developer_profile.sh (zsh)</span>
              </div>
              <span className="tag tag-green" style={{ fontSize: '0.675rem' }}>
                READY: 200 OK
              </span>
            </div>

            <div className="terminal-body hero-code-block">
              {/* Fastfetch system information command invocation */}
              <div>
                <span className="code-prompt">kolby@workstation:~$ </span>
                <span className="code-cmd">fastfetch</span>
              </div>
              <br />
              {/* Fastfetch structured developer profile output */}
              <div className="code-output">
                <div><span className="code-keyword">Candidate:</span> {personalInfo.fullName}</div>
                <div><span className="code-keyword">Degree:</span> {personalInfo.degree}</div>
                <div><span className="code-keyword">University:</span> {personalInfo.university}</div>
                <div><span className="code-keyword">Honors:</span> <span style={{ color: 'var(--ctp-peach)', fontWeight: 600 }}>Cum Laude (GWA: 1.6923) • DOST-SEI Scholar</span></div>
                <div><span className="code-keyword">Specialization:</span> Full-Stack Web & Cybersecurity Defense</div>
                <div><span className="code-keyword">Certifications:</span> Google Cybersecurity, CEH (v12), HP LIFE</div>
                <div><span className="code-keyword">Core Stack:</span> React 19, Next.js, TypeScript, PostgreSQL, Supabase, PHP, MySQL</div>
                <div><span className="code-keyword">Location:</span> {personalInfo.location}</div>
                <div><span className="code-keyword">Status:</span> <span style={{ color: 'var(--ctp-green)', fontWeight: 600 }}>Available for Full-Time Roles</span></div>
              </div>
              <br />
              {/* Active prompt awaiting input */}
              <div>
                <span className="code-prompt">kolby@workstation:~$ </span>
                <span className="cursor-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
