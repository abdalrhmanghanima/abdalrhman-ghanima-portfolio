import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/Button';
import {
  DownloadIcon,
  ArrowUpRightIcon,
} from '../components/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-grid">
        {/* Left: Text & CTAs */}
        <div data-reveal className="hero-content reveal-fade-up">
          <div className="hero-badge-wrap">
            <span className="badge badge-burgundy">
              <span className="badge-dot" />
              Flutter Developer &bull; Mobile Engineering
            </span>
          </div>

          <h1 className="hero-title">
            {siteConfig.name}
            <span className="title-accent">{siteConfig.title}</span>
          </h1>

          <div className="hero-statement">{siteConfig.positioning}</div>

          <p className="hero-description">
            Building maintainable, high-performance cross-platform mobile
            applications using Flutter and Dart. Specializing in Clean
            Architecture, Riverpod, BLoC, Firebase backend integrations, and
            production-grade REST APIs.
          </p>

          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              icon={<ArrowUpRightIcon size={18} />}
              iconPosition="right"
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={siteConfig.resume.pdfPath}
              target="_blank"
              download={siteConfig.resume.filename}
              icon={<DownloadIcon size={18} />}
            >
              Download Resume
            </Button>
          </div>

          <div className="hero-stack-strip">
            <span className="hero-stack-label">Core Focus:</span>
            <div className="hero-stack-tags">
              <span className="hero-stack-pill">Flutter & Dart</span>
              <span className="hero-stack-pill">Clean Architecture</span>
              <span className="hero-stack-pill">Riverpod & BLoC</span>
              <span className="hero-stack-pill">Firebase Suite</span>
              <span className="hero-stack-pill">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Right: Real Profile Image Frame */}
        <div className="hero-visual">
          <div
            data-reveal
            data-reveal-delay="150"
            className="hero-portrait-card reveal-scale"
          >
            <div className="hero-image-wrapper">
              <img
                src={siteConfig.profile.imagePath}
                alt={siteConfig.profile.altText}
                className="hero-portrait-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
