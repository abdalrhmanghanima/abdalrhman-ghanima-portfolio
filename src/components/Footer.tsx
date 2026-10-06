import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, EmailIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-title">{siteConfig.name}</div>
            <div className="footer-brand-subtitle">
              {siteConfig.title} — Scalable Cross-Platform Mobile Applications
            </div>
          </div>

          <div className="footer-social-links" aria-label="Social and Contact Profiles">
            <a
              href={siteConfig.contact.githubUrl}
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={19} />
            </a>
            <a
              href={siteConfig.contact.linkedinUrl}
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={19} />
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Message"
            >
              <WhatsAppIcon size={19} />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="footer-social-icon"
              aria-label="Send Email"
            >
              <EmailIcon size={19} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} {siteConfig.name}. Built with React, TypeScript & Vite.
          </div>

          <a href="#hero" className="back-to-top" aria-label="Back to top of page">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
