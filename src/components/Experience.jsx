/**
 * @file src/components/Experience.jsx
 * @description Career progression and university education timeline component.
 * Adapts the sharp Philosophy card architecture to present chronological milestones.
 * Rendered in App.jsx.
 */

import React from 'react';
import { Calendar, MapPin, Check } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import '../styles/experience.css';

/**
 * Experience Component
 * Displays career milestones and academic background in sharp timeline cards.
 *
 * @returns {JSX.Element} The rendered Experience section.
 */
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 01. CAREER_TIMELINE ]</span>
          <h2 className="section-title">Experience & Milestones</h2>
          <p className="section-subtitle">
            A chronological record of enterprise IT support internships, commercial web development,
            and Mapúa University cybersecurity education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experienceData.map((item, idx) => (
            <div key={item.id} className={`timeline-item reveal stagger-${idx + 1}`}>
              {/* Sharp Timeline Node */}
              <div className="timeline-node" />

              <div className="timeline-card">
                {/* Header with Role Title, Company Subtitle, and Period Badge */}
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role-title">{item.role}</h3>
                    <div className="timeline-company-subtitle">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="timeline-period-badge">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Body Description & Bulleted Achievements */}
                <p className="timeline-description">{item.description}</p>

                <ul className="timeline-achievements-list">
                  {item.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="timeline-achievement-item">
                      <span className="achievement-bullet">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
