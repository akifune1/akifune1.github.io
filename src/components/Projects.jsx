/**
 * @file src/components/Projects.jsx
 * @description Featured projects showcase section presenting engineering case studies.
 * Imports projectsData from portfolioData.js and renders responsive ProjectCard components.
 * Displayed as section #projects in App.jsx.
 */

import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

/**
 * Projects Component
 * Renders the featured project case studies in a clean responsive grid without filter button clutter.
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

        {/* Projects Grid: Directly maps all case studies without buggy filter tab clutter */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
