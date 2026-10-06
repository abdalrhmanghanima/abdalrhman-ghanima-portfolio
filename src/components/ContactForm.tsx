import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Button } from './Button';
import { EmailIcon, CheckIcon } from './Icons';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    // Compose mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Hi Abdalrhman,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

    setStatus('success');
    setStatusMessage('Launching your email client to send the message...');

    // Trigger user email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            className="form-input"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            className="form-input"
            placeholder="e.g. john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Message *
          </label>
          <textarea
            id="contact-message"
            className="form-textarea"
            placeholder="Tell me about your mobile project, opportunity, or inquiry..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {status === 'error' && (
          <div className="form-feedback error" role="alert">
            {statusMessage}
          </div>
        )}

        {status === 'success' && (
          <div className="form-feedback success" role="alert">
            <CheckIcon size={18} />
            <span>{statusMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={<EmailIcon size={18} />}
        >
          Send Message via Email
        </Button>

        <p className="form-note">
          This form launches your default email client directly with your message addressed to{' '}
          <strong style={{ color: 'var(--text-primary)' }}>{siteConfig.contact.email}</strong>.
        </p>
      </form>
    </div>
  );
};
