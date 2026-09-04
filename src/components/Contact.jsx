/**
 * @file src/components/Contact.jsx
 * @description Contact and direct connections section featuring portrait vertical channel cards
 * (Email copy, LinkedIn, GitHub, Resume) with instant action triggers.
 * Depends on portfolioData.js for social URLs; rendered in App.jsx.
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/contact.css';

/**
 * Contact Component
 * Renders direct communication channels in a 4-card vertical rectangle grid with 1-click
 * email copy functionality, professional external links, and resume download.
 *
 * @returns {JSX.Element} The rendered Contact section.
 */
export default function Contact() {
  // State for email clipboard feedback: switches icon, label, and footer to "Copied" for 2 seconds
  const [emailCopied, setEmailCopied] = useState(false);

  /**
   * Copies email address to system clipboard and triggers temporary copied feedback.
   *
   * @returns {Promise<void>}
   * @sideEffects Writes to navigator.clipboard and sets emailCopied timeout state.
   */
  const handleCopyEmail = async () => {
    try {
      // Modern Clipboard API write
      await navigator.clipboard.writeText(personalInfo.socials.email);
      setEmailCopied(true);

      // Auto-reset back to default state after 2000 milliseconds for smooth UX
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 05. TRANSMISSION_CHANNEL ]</span>
          <h2 className="section-title">Initiate Connection</h2>
          <p className="section-subtitle">
            Reach out directly via email, connect on professional networks, or review my credentials.
          </p>
        </div>

        {/* 4-Card Vertical Rectangle Direct Channels Grid */}
        <div className="contact-channels-grid">
          {/* Card 1: 1-Click Email Copy */}
          <button
            type="button"
            className="contact-channel-card reveal stagger-1"
            onClick={handleCopyEmail}
            title="Click to copy email address"
          >
            <div className="contact-channel-top">
              <div className="contact-channel-icon-wrap">
                <Mail size={24} />
              </div>
              <div className={`contact-channel-action-icon ${emailCopied ? 'copied' : ''}`}>
                {emailCopied ? <Check size={18} /> : <Copy size={18} />}
              </div>
            </div>

            <div className="contact-channel-body">
              <span className="contact-channel-tag">[ DIRECT_EMAIL ]</span>
              <div className="contact-channel-title" title={personalInfo.socials.email}>
                {personalInfo.socials.email}
              </div>
              <p className={`contact-channel-subtitle ${emailCopied ? 'copied-text' : ''}`}>
                {emailCopied ? 'Copied to clipboard!' : 'Click to copy email address'}
              </p>
            </div>

            <div className="contact-channel-footer">
              <span className={`contact-channel-cta ${emailCopied ? 'copied-text' : ''}`}>
                {emailCopied ? 'Copied to Clipboard ✓' : 'Copy Address →'}
              </span>
            </div>
          </button>

          {/* Card 2: LinkedIn Profile */}
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card reveal stagger-2"
          >
            <div className="contact-channel-top">
              <div className="contact-channel-icon-wrap">
                <Linkedin size={24} />
              </div>
              <div className="contact-channel-action-icon">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="contact-channel-body">
              <span className="contact-channel-tag">[ PROFESSIONAL ]</span>
              <div className="contact-channel-title">LinkedIn Profile</div>
              <p className="contact-channel-subtitle">Connect professionally</p>
            </div>

            <div className="contact-channel-footer">
              <span className="contact-channel-cta">Visit Profile →</span>
            </div>
          </a>

          {/* Card 3: GitHub Profile */}
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card reveal stagger-3"
          >
            <div className="contact-channel-top">
              <div className="contact-channel-icon-wrap">
                <Github size={24} />
              </div>
              <div className="contact-channel-action-icon">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="contact-channel-body">
              <span className="contact-channel-tag">[ REPOSITORIES ]</span>
              <div className="contact-channel-title">GitHub Profile</div>
              <p className="contact-channel-subtitle">Explore open-source repositories</p>
            </div>

            <div className="contact-channel-footer">
              <span className="contact-channel-cta">View Projects →</span>
            </div>
          </a>

          {/* Card 4: Download Resume (PDF) */}
          <a
            href={personalInfo.socials.resume}
            download="KolbyHernandez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card reveal stagger-4"
            title="Download Kolby Hernandez CV (PDF)"
          >
            <div className="contact-channel-top">
              <div className="contact-channel-icon-wrap">
                <FileText size={24} />
              </div>
              <div className="contact-channel-action-icon">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="contact-channel-body">
              <span className="contact-channel-tag">[ CREDENTIALS ]</span>
              <div className="contact-channel-title">Download Resume</div>
              <p className="contact-channel-subtitle">Latest updated curriculum vitae (PDF)</p>
            </div>

            <div className="contact-channel-footer">
              <span className="contact-channel-cta">Download CV →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
