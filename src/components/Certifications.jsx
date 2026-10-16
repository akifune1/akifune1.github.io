/** Credential register using original PNG transparency, copy feedback, and verification links; used by App.jsx. */
import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Copy, Check } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import '../styles/certifications.css';

export default function Certifications() {
  const [imageErrors, setImageErrors] = useState({});
  const [copied, setCopied] = useState(null);
  const [feedback, setFeedback] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyId = async (cert) => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(cert.credentialId);
      setCopied(cert.id);
      setFeedback(`Credential ID copied for ${cert.title}.`);
      timer.current = setTimeout(() => { setCopied(null); setFeedback(''); }, 2500);
    } catch {
      setCopied(null);
      setFeedback('Could not copy. Select the credential ID to copy it manually.');
    }
  };
  return <section id="certifications" className="certifications-section" aria-labelledby="certifications-title">
    <div className="container">
      <div className="section-header">
        <h2 id="certifications-title" className="section-title">Certifications &amp; Accreditations<span className="heading-wipe" aria-hidden="true" /></h2>
        <p className="section-subtitle">Industry-recognized credentials validating practical competence in threat analysis,
          cloud architecture, defensive security operations, and incident response.</p>
      </div>
      <div className="certifications-list">{certificationsData.map((cert) => <article className="cert-card" key={cert.id}>
        <div className="cert-badge-banner">
          {cert.badgeImage && !imageErrors[cert.id] ? <img src={`${import.meta.env.BASE_URL}badges/${cert.badgeImage}`}
            alt={`${cert.title} badge`} width="100" height="100" loading="lazy"
            onError={() => setImageErrors((previous) => ({ ...previous, [cert.id]: true }))} /> : <Award size={36} aria-label="Credential badge unavailable" />}
        </div>
        <div className="cert-content">
          <div className="cert-issuer"><span>{cert.issuer}</span><span className="cert-issuer-separator" aria-hidden="true">·</span><span className="cert-date">{cert.issueDate}</span></div>
          <h3>{cert.title}</h3>
          <p className="cert-desc">{cert.description}</p>
          <div className="cert-credential-box"><span>Credential ID</span><code>{cert.credentialId}</code>
            <button type="button" className="copy-id-btn" aria-label={`Copy credential ID for ${cert.title}`} onClick={() => copyId(cert)}>
              {copied === cert.id ? <Check size={14.4} /> : <Copy size={14.4} />}
            </button>
          </div>
        </div>
        <a className="text-link cert-verify-btn" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
          aria-label={`Verify ${cert.title}`}>Verify Credential <ExternalLink size={12.6} /></a>
      </article>)}</div>
      <p className="copy-status" role="status">{feedback}</p>
    </div>
    </section>;
}
