/** Full-viewport introduction, themed scenery, and pausable credential loop; used by App.jsx. */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../hooks/scrollToSection';
import { useTheme } from './ThemeToggle';
import '../styles/hero.css';

const CREDENTIALS = ['B.S. Information Technology', 'Cybersecurity Analyst', 'Full-Stack Developer', 'Mapúa University', 'DOST-SEI Scholar', 'UI/UX Design'];

export default function Hero() {
  const carousel = useRef(null);
  const [paused, setPaused] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const { theme } = useTheme();
  const [visitedThemes, setVisitedThemes] = useState(() => [theme]);

  useEffect(() => {
    // Retain visited scenery for later transitions, without fetching the unused theme on first load.
    setVisitedThemes((previous) => previous.includes(theme) ? previous : [...previous, theme]);
  }, [theme]);

  useEffect(() => {
    let inView = true;
    const update = () => setSuspended(!inView || document.hidden);
    const observer = window.IntersectionObserver ? new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }) : null;
    if (carousel.current) observer?.observe(carousel.current);
    document.addEventListener('visibilitychange', update);
    update();
    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" aria-labelledby="intro-title">
      <div className="hero-backdrop" aria-hidden="true">
        {['light', 'dark'].filter((appearance) => appearance === theme || visitedThemes.includes(appearance)).map((appearance) => (
          <img key={appearance} className={`hero-background hero-background-${appearance}`}
            src={`${import.meta.env.BASE_URL}images/hero_${appearance}-1920.webp`}
            srcSet={`${import.meta.env.BASE_URL}images/hero_${appearance}-960.webp 960w, ${import.meta.env.BASE_URL}images/hero_${appearance}-1920.webp 1920w`}
            sizes="calc(100vw + 32px)" alt="" loading="eager" decoding="async" fetchpriority={appearance === theme ? 'high' : 'low'} />
        ))}
      </div>
      <div className="container">
        <h1 id="intro-title" className="hero-title"><span className="hero-line"><span>{personalInfo.name.split(' ')[0]} <em>{personalInfo.name.split(' ').slice(1).join(' ')}</em></span></span></h1>
        <div className="hero-details">
          <div className="hero-copy">
            <p className="hero-subtitle">Full-Stack Software Engineer that specializes in Cybersecurity with a passion for User Interface and Experience Design.</p>
            <div className="hero-cta-group">
              <button type="button" className="btn btn-primary" onClick={() => scrollToSection('experience')}>Learn More <ArrowDown size={14.4} /></button>
              <button type="button" className="btn btn-outline" onClick={() => scrollToSection('contact')}>Get in Touch <ArrowUpRight size={14.4} /></button>
              <a className="text-link" href={personalInfo.socials.resume} download="KolbyHernandez_CV.pdf">Download CV <ArrowDown size={12.6} /></a>
            </div>
          </div>
          <div ref={carousel} className="hero-credentials" data-paused={paused || suspended ? 'true' : 'false'}>
            <div className="credential-window">
              <div className="credential-track">
                {[false, true].map((duplicate) => <ul className="credential-group" key={String(duplicate)} aria-label={duplicate ? undefined : 'Professional credentials'} aria-hidden={duplicate ? 'true' : undefined}>
                  {CREDENTIALS.map((credential) => <li key={credential}>{credential}</li>)}
                </ul>)}
              </div>
            </div>
            <button className="credential-pause" type="button" aria-label="Pause credential carousel" aria-pressed={paused}
              title={paused ? 'Resume credential carousel' : 'Pause credential carousel'} onClick={() => setPaused(!paused)}>
              {paused ? <Play size={12.6} aria-hidden="true" /> : <Pause size={12.6} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <button type="button" className="hero-scroll-cue" aria-label="Scroll to Experience" onClick={() => scrollToSection('experience')}>
          <span>Explore my work</span><ArrowDown size={14.4} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
