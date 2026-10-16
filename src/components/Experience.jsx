/** Chronological experience and education entries from portfolioData.js; rendered in App.jsx. */
import React from 'react';
import { experienceData } from '../data/portfolioData';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <h2 id="experience-title" className="section-title">Experience &amp; Milestones<span className="heading-wipe" aria-hidden="true" /></h2>
          <p className="section-subtitle">A chronological record of enterprise IT support internships, commercial web development,
            and Mapúa University cybersecurity education.</p>
        </div>
        <div className="timeline-container">
          {experienceData.map((item) => <article key={item.id} className="timeline-item">
            <p className="timeline-period">{item.period}</p>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}<span aria-hidden="true"> / </span>{item.location}</p>
              <p className="timeline-description">{item.description}</p>
              <ul className="timeline-achievements-list">{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
