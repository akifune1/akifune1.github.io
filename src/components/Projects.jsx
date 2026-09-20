/**
 * @file src/components/Projects.jsx
 * @description Featured projects showcase section presenting engineering case studies.
 * Imports projectsData from portfolioData.js and renders responsive ProjectCard components
 * in a smooth horizontal carousel with flanking controls and edge depth effects.
 * Displayed as section #projects in App.jsx.
 */

import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import Carousel from './Carousel';
import '../styles/projects.css';

/**
 * Projects Component
 * Renders the featured project case studies in an interactive horizontal carousel.
 *
 * @returns {JSX.Element} The rendered Projects section.
 */
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 02. FEATURED_WORKS ]</span>
          <h2 className="section-title">Selected Projects & Case Studies</h2>
          <p className="section-subtitle">
            Full-stack web applications, biometric security systems, and civic platforms engineered
            with Next.js, Supabase, PHP, and strict cryptographic access control.
          </p>
        </div>

        {/* Desktop Carousel: Horizontal scroll-snap track with flanking controls & depth shadows */}
        <div className="projects-desktop-carousel">
          <Carousel ariaLabel="Featured Projects & Case Studies" className="projects-carousel">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Carousel>
        </div>

        {/* Mobile Stream: Apple iOS Inset Grouped Vertical Case Studies (<768px) */}
        <div className="projects-mobile-stream" aria-label="Featured Projects List">
          {projectsData.map((project) => (
            <ProjectCard key={`mobile-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

