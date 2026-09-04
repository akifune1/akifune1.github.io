/**
 * @file src/components/ProjectCard.jsx
 * @description Project case study card component adhering to the Catppuccin Mocha pastel rainbow design standard.
 * Displays project title, Mauve category tagline, problem/solution summary, multi-color syntax tech tags,
 * and understated repository/demo action triggers. Rendered inside Projects.jsx.
 */

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Maps technology names to Catppuccin Mocha pastel syntax tag classes
 * matching modern developer syntax highlighting standards.
 *
 * @param {string} tech - The technology name (e.g. 'Next.js 16', 'Supabase').
 * @param {number} idx - Fallback index for dynamic rainbow cycling.
 * @returns {string} CSS class name for the pastel tag.
 */
const getTechTagClass = (tech, idx) => {
  const lower = tech.toLowerCase();
  if (lower.includes('next')) return 'tag-sapphire';
  if (lower.includes('react')) return 'tag-mauve';
  if (lower.includes('typescript') || lower.includes('html') || lower.includes('css')) return 'tag-sky';
  if (lower.includes('supabase') || lower.includes('node') || lower.includes('mongo')) return 'tag-green';
  if (lower.includes('tailwind') || lower.includes('figma') || lower.includes('npm')) return 'tag-peach';
  if (lower.includes('face') || lower.includes('security') || lower.includes('crypto')) return 'tag-pink';
  if (lower.includes('playwright') || lower.includes('jest') || lower.includes('test')) return 'tag-teal';
  if (lower.includes('php') || lower.includes('mysql') || lower.includes('python')) return 'tag-yellow';
  if (lower.includes('framer') || lower.includes('motion')) return 'tag-blue';
  if (lower.includes('apache') || lower.includes('xampp') || lower.includes('firebase')) return 'tag-lavender';

  // Fallback palette cycling across the full Catppuccin Mocha pastel rainbow
  const rainbowCycle = [
    'tag-sapphire',
    'tag-mauve',
    'tag-sky',
    'tag-green',
    'tag-peach',
    'tag-blue',
    'tag-pink',
    'tag-teal',
    'tag-yellow',
    'tag-lavender'
  ];
  return rainbowCycle[idx % rainbowCycle.length];
};

/**
 * ProjectCard Component
 * Displays a single project with sharp borders, problem/solution breakdown,
 * multi-colored pastel tech tags, and clean action buttons.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.project - The project data object.
 * @returns {JSX.Element} The rendered project card.
 */
export default function ProjectCard({ project }) {
  // Determine if project has a distinct live URL separate from GitHub repository
  const hasDistinctLiveUrl = project.liveUrl && project.liveUrl !== project.repoUrl;

  return (
    <article className="project-card reveal">
      {/* Header with Title, Mauve Category Subtitle, and Top-Right GitHub Link Box */}
      <div className="project-card-header">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-category-tagline">{project.badge}</div>
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icon-wrap"
          title="Open GitHub repository"
        >
          <Github size={18} />
        </a>
      </div>

      {/* Body: Problem & Solution Summary + Multi-Color Syntax Tech Stack */}
      <div className="project-card-body">
        <p className="project-tagline">{project.tagline}</p>

        {/* Problem / Solution Overview */}
        <div className="case-item">
          <span className="case-label">Challenge:</span>
          <span>{project.problem}</span>
        </div>
        <div className="case-item" style={{ marginTop: '0.4rem' }}>
          <span className="case-label">Architecture:</span>
          <span>{project.solution}</span>
        </div>

        {/* Multi-Colored Technology Stack Tags */}
        <div className="project-tech-stack">
          {project.techStack.map((tech, idx) => (
            <span
              key={tech}
              className={`tag ${getTechTagClass(tech, idx)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Row with Understated Action Buttons */}
      <div className="project-card-footer">
        <div className="project-action-links">
          {hasDistinctLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            <Github size={14} />
            <span>{hasDistinctLiveUrl ? 'Source Code' : 'View Repository'}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

