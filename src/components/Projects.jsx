/** Directly browsable project case studies from portfolioData.js; rendered in App.jsx. */
import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

export default function Projects() {
  return <section id="projects" className="projects-section" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-header">
        <h2 id="projects-title" className="section-title">Selected Projects &amp; Case Studies<span className="heading-wipe" aria-hidden="true" /></h2>
        <p className="section-subtitle">Full-stack web applications, biometric security systems, and civic platforms engineered
          with Next.js, Supabase, PHP, and strict cryptographic access control.</p>
      </div>
      <div className="projects-list">{projectsData.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </div>
  </section>;
}
