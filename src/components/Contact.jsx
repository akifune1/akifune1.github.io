/** Direct contact links and honest clipboard feedback; uses portfolioData.js, rendered by App.jsx. */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Copy, Check, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(personalInfo.socials.email);
      setStatus('Email copied.');
      timer.current = setTimeout(() => setStatus(''), 2500);
    } catch {
      setStatus('Could not copy. Select the address or use the email link.');
    }
  };
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="container">
      <div className="section-header">
        <h2 id="contact-title" className="section-title">Get in Touch<span className="heading-wipe" aria-hidden="true" /></h2>
        <p className="section-subtitle">Reach out directly via email, connect on professional networks, or review my credentials.</p>
      </div>
      <div className="contact-email-row">
        <a className="contact-email" href={`mailto:${personalInfo.socials.email}`}>{personalInfo.socials.email}</a>
        <button className="btn btn-outline" type="button" onClick={copyEmail}>
          {status === 'Email copied.' ? <Check size={14.4} /> : <Copy size={14.4} />} Copy email
        </button>
      </div>
      <p className="copy-status" role="status">{status}</p>
      <div className="contact-links">
        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn Profile<small>Professional network</small></span><ArrowUpRight size={19.8} /></a>
        <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer"><span>GitHub Profile<small>Explore open-source repositories</small></span><ArrowUpRight size={19.8} /></a>
        <a href={personalInfo.socials.resume} download="KolbyHernandez_CV.pdf"><span>Download Resume<small>Latest updated curriculum vitae (PDF)</small></span><ArrowDown size={19.8} /></a>
      </div>
    </div>
  </section>;
}
