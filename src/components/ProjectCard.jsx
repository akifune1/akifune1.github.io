/**
 * @file src/components/ProjectCard.jsx
 * @description Project case study card component adhering to the Catppuccin Mocha pastel rainbow design standard.
 * Displays project title, Mauve category tagline, problem/solution summary, multi-color syntax tech tags,
 * and understated repository/demo action triggers. Rendered inside Projects.jsx.
 */

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const RAINBOW_CYCLE = [
  'tag-sapphire',
  'tag-mauve',
  'tag-sky',
  'tag-green',
  'tag-peach',
  'tag-blue',
  'tag-pink',
  'tag-teal',
  'tag-yellow',
  'tag-lavender',
];

// In-memory cache for tag class resolution to prevent redundant regex/lower-casing operations
const tagClassCache = new Map();

/**
 * Maps technology names to Catppuccin Mocha pastel syntax tag classes
 * matching modern developer syntax highlighting standards.
 * Results are cached in memory for fast O(1) retrieval.
 *
 * @param {string} tech - The technology name (e.g. 'Next.js 16', 'Supabase').
 * @param {number} idx - Fallback index for dynamic rainbow cycling.
 * @returns {string} CSS class name for the pastel tag.
 */
const getTechTagClass = (tech, idx) => {
  if (tagClassCache.has(tech)) {
    return tagClassCache.get(tech);
  }

  const lower = tech.toLowerCase();
  let result;
  if (lower.includes('next')) result = 'tag-sapphire';
  else if (lower.includes('react')) result = 'tag-mauve';
  else if (lower.includes('typescript') || lower.includes('html') || lower.includes('css')) result = 'tag-sky';
  else if (lower.includes('supabase') || lower.includes('node') || lower.includes('mongo')) result = 'tag-green';
  else if (lower.includes('tailwind') || lower.includes('figma') || lower.includes('npm')) result = 'tag-peach';
  else if (lower.includes('face') || lower.includes('security') || lower.includes('crypto')) result = 'tag-pink';
  else if (lower.includes('playwright') || lower.includes('jest') || lower.includes('test')) result = 'tag-teal';
  else if (lower.includes('php') || lower.includes('mysql') || lower.includes('python')) result = 'tag-yellow';
  else if (lower.includes('framer') || lower.includes('motion')) result = 'tag-blue';
  else if (lower.includes('apache') || lower.includes('xampp') || lower.includes('firebase')) result = 'tag-lavender';
  else result = RAINBOW_CYCLE[idx % RAINBOW_CYCLE.length];

  tagClassCache.set(tech, result);
  return result;
};

/**
 * ProjectCard Component
 * Displays a single project with sharp borders, problem/solution breakdown,
 * multi-colored pastel tech tags, and clean action buttons.
 * Wrapped in React.memo to prevent wasteful re-renders when parent states change.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.project - The project data object.
 * @returns {JSX.Element} The rendered project card.
 */
function ProjectCard({ project }) {
  // Determine if project has a distinct live URL separate from GitHub repository
  const hasDistinctLiveUrl = Boolean(project.liveUrl && project.liveUrl !== project.repoUrl);

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

export default React.memo(ProjectCard);


