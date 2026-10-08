import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../config/siteConfig';
import {
  EmailIcon,
  PhoneIcon,
  WhatsAppIcon,
  LinkedInIcon,
  GitHubIcon,
} from '../components/Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <SectionHeader
          kicker="07. Get In Touch"
          title="Let's Build Something Great"
          description="I am open to full-time Flutter developer roles, team collaborations, and mobile application engineering opportunities."
        />

        <div className="contact-grid">
          {/* Direct Channels */}
          <div data-reveal className="contact-info-col reveal-fade-up">
            <p className="contact-info-desc">
              Whether you have an upcoming mobile project, want to discuss
              architecture and Flutter engineering, or have an open position, feel
              free to reach out directly through any of the channels below.
            </p>

            <div className="contact-links-list" aria-label="Contact Methods">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="contact-link-item"
                aria-label="Send Email"
              >
                <div className="contact-item-icon">
                  <EmailIcon size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Email Address</div>
                  <div className="contact-item-value">{siteConfig.contact.email}</div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="contact-link-item"
                aria-label="Call Phone Number"
              >
                <div className="contact-item-icon">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Phone Number</div>
                  <div className="contact-item-value">{siteConfig.contact.phone}</div>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Chat on WhatsApp"
              >
                <div className="contact-item-icon">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div className="contact-item-label">WhatsApp</div>
                  <div className="contact-item-value">Chat on WhatsApp ({siteConfig.contact.whatsappNumber})</div>
                </div>
              </a>

              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="LinkedIn Profile"
              >
                <div className="contact-item-icon">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">linkedin.com/in/abdalrhman-ghanima</div>
                </div>
              </a>

              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="GitHub Profile"
              >
                <div className="contact-item-icon">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <div className="contact-item-label">GitHub</div>
                  <div className="contact-item-value">github.com/abdalrhmanghanima</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div data-reveal data-reveal-delay="150" className="contact-form-col reveal-fade-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
