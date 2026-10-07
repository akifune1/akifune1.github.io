/**
 * @file src/components/Certifications.jsx
 * @description Official cybersecurity, cloud, and network operations certifications showcase section.
 * Renders verified credential cards in an interactive horizontal carousel with continuous slow drift
 * auto-scrolling, seamless infinite looping, pause on hover/interaction, authentic provider brand logos,
 * horizontally scrollable credential ID containers with clipboard copy triggers, and direct verification links.
 * Consumes certificationsData from portfolioData.js; rendered in App.jsx.
 */

import React, { useState, useCallback, memo } from 'react';
import { Award, ShieldCheck, Cloud, ExternalLink, Copy, Check } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import Carousel from './Carousel';
import '../styles/certifications.css';

/**
 * Renders an optimized SVG vector logo for the certifying provider using official, authentic brand colors.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.issuer - Logo identifier slug ('google' | 'ibm' | 'oracle' | 'fortinet' | 'appkademiya' | 'cyberwarfare' | 'redteamleaders').
 * @param {number} [props.size=15] - Desired icon bounding box size in pixels.
 * @returns {JSX.Element|null} The rendered SVG logo mark in authentic brand palette.
 */
const CompanyLogo = memo(function CompanyLogo({ issuer, size = 15 }) {
  switch (issuer) {
    case 'google':
      // Official Google 4-color 'G' mark
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          aria-label="Google logo"
          className="company-logo-svg"
        >
          {/* Blue segment */}
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          {/* Green segment */}
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          {/* Yellow segment */}
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          {/* Red segment */}
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      );

    case 'ibm':
      // Official IBM Carbon Blue (#0F62FE) 8-bar mark with 2.4:1 aspect ratio
      return (
        <svg
          viewBox="0 0 1000 401.15"
          width={Math.round(size * 2.4)}
          height={size}
          fill="#0F62FE"
          aria-label="IBM logo"
          className="company-logo-svg"
        >
          <path d="M0 373.17h194.43v27.93H0zm0-53.34h194.43v27.93H0zm55.47-53.29h83.4v27.93h-83.4zm0-53.29h83.4v27.93h-83.4zm0-53.29h83.4v27.93h-83.4zm0-53.38h83.4v27.93h-83.4zm-55.47-53.29h194.43v27.93H0zm0-53.29h194.43v27.93H0zM222.17 400.85l207.11.3c27.73 0 52.79-10.7 71.51-27.93h-278.62zm0-53.09h299.03c5.05-8.62 8.82-18.03 11.09-27.93h-310.12zm55.56-81.22h83.3v27.93h-83.3zm166.7 0v27.93h90.93c0-9.61-1.29-19.02-3.76-27.93zm53.49-53.29H277.73v27.93h243.46c-6.34-10.7-14.17-20.11-23.28-27.93zm-220.19-53.29v27.93h220.19c9.31-7.83 17.14-17.24 23.28-27.93zm0-53.38h83.3v27.93h-83.3zm166.7 27.93h87.16c2.48-8.91 3.76-18.32 3.76-27.93h-90.92zm76.77-81.22H222.17v27.93h310.12c-2.58-9.91-6.34-19.31-11.09-27.93zm-91.92-53.29H222.17v27.93h278.53c-18.62-17.23-43.88-27.93-71.42-27.93zM555.57 81.22h187.1l-9.61-27.93H555.57zm0-53.29h168.68l-9.61-27.93H555.57zm305.46 373.24h138.97v-27.93H861.03zm0-53.41h138.97v-27.93H861.03zm-83.3-138.62l-7.82-22.58h-75.48h-83.4v27.93h83.4v-25.65l8.82 25.65h148.97l8.81-25.65v25.65h83.4v-27.93h-83.4l-75.47.03zm83.3-75.96h-140.45l-9.61 27.93h150.06zm138.97-78.65h-159.07l-9.61 27.93H1000zM768.13 373.22l9.6 27.63 9.61-27.63zm-18.63-53.39l9.81 27.93h36.85l9.9-27.93zm-18.72-53.29l9.81 27.93h74.29l9.8-27.93zm-8.81-25.36h111.63l9.51-27.93H712.36zm-110.94-106.67h150.06l-9.6-27.93H611.03zm388.97-81.23H822.4l-9.5 27.94H1000zm-444.43 320h138.97v27.93H555.57zm0-53.39h138.97v27.93H555.57zm55.46-53.29h83.4v27.93h-83.4zm0-53.29h83.4v27.93h-83.4zm250-53.29h83.4v27.93h-83.4zm0 53.29h83.4v27.93h-83.4z" />
        </svg>
      );

    case 'oracle':
      // Official Oracle Red (#C74634) geometric oval mark
      return (
        <svg
          viewBox="0 0 47 30"
          width={Math.round(size * 1.55)}
          height={size}
          fill="#C74634"
          aria-label="Oracle logo"
          className="company-logo-svg"
        >
          <path d="M14.88 30H32.15a14.86 14.86 0 0 0 0-29.71H14.88a14.86 14.86 0 1 0 0 29.71m16.88-5.23H15.26a9.62 9.62 0 0 1 0-19.23h16.5a9.62 9.62 0 1 1 0 19.23" />
        </svg>
      );

    case 'fortinet':
      // Official Fortinet Red (#DA291C) 4-segment security fabric mark
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="#DA291C"
          aria-label="Fortinet logo"
          className="company-logo-svg"
        >
          <path d="M0 9.785h6.788v4.454H0zm8.666-6.33h6.668v4.453H8.666zm0 12.637h6.668v4.454H8.666zm8.522-6.307H24v4.454h-6.812zM2.792 3.455C1.372 3.814.265 5.404 0 7.425v.506h6.788V3.454zM0 16.091v.554c.24 1.926 1.276 3.466 2.624 3.9h4.188v-4.454zm24-8.184v-.506c-.265-1.998-1.372-3.587-2.792-3.972h-4.02v4.454H24zM21.376 20.57c1.324-.458 2.36-1.974 2.624-3.9v-.554h-6.812v4.454Z" />
        </svg>
      );

    case 'appkademiya':
      // Official AppKademiya Vibrant Blue (#0066FF) apex chevron mark from official credential badge
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="#0066FF"
          aria-label="AppKademiya logo"
          className="company-logo-svg"
        >
          <path d="M12 2.5L2.8 20.8h4.6L12 11.6l4.6 9.2h4.6L12 2.5z" />
        </svg>
      );

    case 'cyberwarfare':
      // Official CyberWarfare Labs defensive cyber shield & crosshair mark
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="#00D2D3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="CyberWarfare Labs logo"
          className="company-logo-svg"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(0, 210, 211, 0.15)" />
          <circle cx="12" cy="11" r="3" fill="#00D2D3" />
        </svg>
      );

    case 'redteamleaders':
      // Official Red Team Leaders offensive & AI security insignia
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="#E02424"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Red Team Leaders logo"
          className="company-logo-svg"
        >
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="rgba(224, 36, 36, 0.18)" />
          <path d="M13 7l-3 5h4l-2 5" stroke="#FFFFFF" strokeWidth="1.75" />
        </svg>
      );

    default:
      return null;
  }
});

/**
 * Fallback clipboard copy using hidden textarea for legacy or restricted iframe contexts.
 *
 * @param {string} text - Text content to copy to clipboard.
 * @returns {void}
 */
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  // Position offscreen to prevent visible layout shift
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy command failed:', err);
  }
  document.body.removeChild(textArea);
}

/**
 * Certifications Component
 * Displays industry certifications in an interactive horizontal carousel with smooth slow drift
 * auto-scrolling, seamless infinite loop wrapping, breathable badge banners, official provider logos,
 * horizontally scrollable credential ID containers, and direct verification triggers.
 *
 * @returns {JSX.Element} The rendered Certifications section.
 */
export default function Certifications() {
  // Track failed image loads per badge filename to gracefully fall back to vector icons
  const [imgErrors, setImgErrors] = useState({});

  // Track which credential ID is currently active in the copied feedback state
  const [copiedId, setCopiedId] = useState(null);

  /**
   * Copies credential ID to clipboard and displays transient checkmark feedback for 2 seconds.
   *
   * @param {string} credentialId - The unique credential identifier string.
   */
  const handleCopyId = useCallback((credentialId) => {
    if (!credentialId) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(credentialId).catch(() => {
        fallbackCopyText(credentialId);
      });
    } else {
      fallbackCopyText(credentialId);
    }

    setCopiedId(credentialId);

    // Revert visual check feedback back to copy icon after 2000ms
    setTimeout(() => {
      setCopiedId((curr) => (curr === credentialId ? null : curr));
    }, 2000);
  }, []);

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
        return <Award size={28} />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} />;
      case 'Cloud':
      default:
        return <Cloud size={28} />;
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

        {/* Horizontal Carousel Track with Slow Drift Auto-Scroll, Infinite Loop & Depth Masks */}
        <Carousel
          ariaLabel="Industry certifications and accreditations carousel"
          className="certifications-carousel"
          autoScroll={true}
          loop={true}
          autoScrollSpeed={1}
        >
          {certificationsData.map((cert) => {
            const hasError = cert.badgeImage ? !!imgErrors[cert.badgeImage] : true;
            const isCopied = copiedId === cert.credentialId;

            return (
              <div key={cert.id} className="cert-carousel-slide">
                <div className="cert-card">
                  {/* Breathable Scaled Digital Badge Banner Centered at the Top */}
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

                  {/* Card Header: Official Brand Vector Logo, Dot Separator, Issue Date & Streamlined Title */}
                  <div className="cert-card-header">
                    <div className="cert-issuer-badge">
                      <CompanyLogo issuer={cert.issuerLogo} size={15} />
                      <span className="cert-issuer-dot">•</span>
                      <span className="cert-issuer-date">{cert.issueDate}</span>
                    </div>
                    <h3 className="cert-title">{cert.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="cert-desc">{cert.description}</p>

                  {/* Horizontally Scrollable Credential ID Box with 1-Click Copy Button */}
                  <div className="cert-credential-box">
                    <span className="credential-label">CREDENTIAL ID:</span>
                    <div className="credential-scroll-container">
                      <code className="credential-value" title={cert.credentialId}>
                        {cert.credentialId}
                      </code>
                    </div>
                    <button
                      type="button"
                      className={`credential-copy-btn ${isCopied ? 'is-copied' : ''}`}
                      onClick={() => handleCopyId(cert.credentialId)}
                      title={isCopied ? 'Copied to clipboard!' : 'Copy credential ID'}
                      aria-label={isCopied ? `Copied ${cert.title} credential ID` : `Copy ${cert.title} credential ID`}
                    >
                      {isCopied ? (
                        <Check size={14} className="copy-icon-check" />
                      ) : (
                        <Copy size={14} className="copy-icon-idle" />
                      )}
                    </button>
                  </div>

                  {/* Direct External Verification Action Trigger */}
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
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
