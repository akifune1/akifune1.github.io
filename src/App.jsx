/**
 * @file src/App.jsx
 * @description Main application layout component for Kolby Hernandez's portfolio.
 * Coordinates global scroll reveal animations and arranges sections in a compelling narrative:
 * Hero (Intro) -> Experience (Background) -> Projects (Engineering) -> Skills (Toolkit) ->
 * Certifications (Validation) -> Contact (Outreach) -> Footer.
 * Root component mounted by main.jsx.
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

/**
 * App Component
 * Coordinates scroll-triggered animations and assembles portfolio sections in story order.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  // Initialize scroll-triggered reveal animations across all sections
  useScrollReveal();

  return (
    <div className="portfolio-app-root">
      {/* Top Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections in Narrative Order */}
      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Bottom Statusline Footer */}
      <Footer />
    </div>
  );
}
