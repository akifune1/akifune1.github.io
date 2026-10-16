/** Portfolio document, shared theme state, and repeatable viewport motion; mounted by src/main.jsx. */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ScrollProgressNav from './components/ScrollProgressNav';
import { ThemeProvider } from './components/ThemeToggle';
import { useActiveSection } from './hooks/useActiveSection';
import { useScrollMotion } from './hooks/useScrollMotion';

export default function App() {
  const activeSection = useActiveSection();
  useScrollMotion();
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar activeSection={activeSection} />
      <ScrollProgressNav activeSection={activeSection} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav activeSection={activeSection} />
    </ThemeProvider>
  );
}
