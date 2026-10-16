/** Complete editorial project entry, including challenge, architecture, stack, and links; used by Projects.jsx. */
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl !== project.repoUrl);
  return <article className="project-card">
    <div className="project-heading">
      <h3>{project.title}</h3>
      <p className="project-category">{project.badge}</p>
      <div className="project-action-links">
        {hasLiveDemo && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={13.5} /></a>}
        <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          {hasLiveDemo ? 'Source Code' : 'View Repository'} <Github size={13.5} />
        </a>
      </div>
    </div>
    <div className="project-content">
      <p className="project-tagline">{project.tagline}</p>
      <dl className="project-details">
        <div><dt>Challenge</dt><dd>{project.problem}</dd></div>
        <div><dt>Architecture</dt><dd>{project.solution}</dd></div>
      </dl>
      <ul className="project-tech-stack" aria-label="Technology stack">{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
    </div>
  </article>;
}
