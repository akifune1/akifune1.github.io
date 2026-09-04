/**
 * @file src/components/Certifications.jsx
 * @description Official cybersecurity certifications and industry accreditations section.
 * Renders verified credential cards for Google Cybersecurity, Certified Ethical Hacking (v12),
 * and HP LIFE Security Awareness with direct verification links.
 * Consumes certificationsData from portfolioData.js; rendered in App.jsx.
 */

import React from 'react';
import { Award, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import '../styles/certifications.css';

/**
 * Certifications Component
 * Displays industry certifications with verified credential IDs and direct verification links.
 *
 * @returns {JSX.Element} The rendered Certifications section.
 */
export default function Certifications() {
  /**
   * Helper function to return icon component based on certification type.
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
        return <Award size={24} />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} />;
      case 'Lock':
      default:
        return <Lock size={24} />;
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 04. CREDENTIALS_CERTIFICATIONS ]</span>
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating practical competence in penetration testing,
            threat analysis, SIEM tools, and defensive cyber operations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => (
            <div
              key={cert.id}
              className={`cert-card reveal stagger-${idx + 1}`}
            >
              {/* Top Header: Issuer Icon, Title, and Issuer Name */}
              <div className="cert-card-header">
                <div>
                  <div className="cert-issuer-badge">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.issueDate}</span>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                </div>

                <div className="cert-icon-wrap">
                  {getCertIcon(cert.icon)}
                </div>
              </div>

              {/* Description */}
              <p className="cert-desc">{cert.description}</p>

              {/* Credential ID Bar */}
              <div className="cert-credential-box">
                <span className="credential-label">CREDENTIAL ID:</span>
                <code className="credential-value">{cert.credentialId}</code>
              </div>

              {/* Direct Verification Action Trigger */}
              <div className="cert-action-row">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary cert-verify-btn"
                  title={`Verify ${cert.title}`}
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
