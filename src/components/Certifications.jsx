/**
 * @file src/components/Certifications.jsx
 * @description Official cybersecurity and cloud certifications showcase section.
 * Renders verified credential cards for Google Cybersecurity, IBM SkillsBuild Cybersecurity,
 * Oracle Cloud Infrastructure Foundations, and Fortinet Network Security Expert (NSE 1, 2, 3)
 * with prominent badge banners and direct verification links.
 * Consumes certificationsData from portfolioData.js; rendered in App.jsx.
 */

import React, { useState } from 'react';
import { Award, ShieldCheck, Cloud, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import '../styles/certifications.css';

/**
 * Certifications Component
 * Displays industry certifications with prominent badge banners, verified credential IDs,
 * and direct verification triggers.
 *
 * @returns {JSX.Element} The rendered Certifications section.
 */
export default function Certifications() {
  // Track failed image loads per badge filename to gracefully fall back to vector icons
  // Keying by filename ensures updating the image name immediately clears previous 404 state
  const [imgErrors, setImgErrors] = useState({});

  /**
   * Helper function to return icon component based on certification type.
   * Used as an elegant fallback when custom badge image is loading or missing.
   *
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
        return <Award size={32} />;
      case 'ShieldCheck':
        return <ShieldCheck size={32} />;
      case 'Cloud':
      default:
        return <Cloud size={32} />;
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
            Industry-recognized credentials validating practical competence in threat analysis,
            cloud architecture, defensive security operations, and incident response.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => {
            const hasError = cert.badgeImage ? !!imgErrors[cert.badgeImage] : true;

            return (
              <div
                key={cert.id}
                className={`cert-card reveal stagger-${idx + 1}`}
              >
                {/* Prominent Badge Banner Centered at the Top */}
                <div className="cert-badge-banner">
                  {!hasError && cert.badgeImage ? (
                    <img
                      key={cert.badgeImage}
                      src={`${import.meta.env.BASE_URL}badges/${cert.badgeImage}`}
                      alt={`${cert.title} Badge`}
                      className="cert-badge-img"
                      onError={() => setImgErrors((prev) => ({ ...prev, [cert.badgeImage]: true }))}
                    />
                  ) : (
                    <div className="cert-badge-fallback-wrap" title={cert.title}>
                      {getCertIcon(cert.icon)}
                    </div>
                  )}
                </div>

              {/* Card Header: Issuer Name, Issue Date & Title */}
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.issueDate}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
