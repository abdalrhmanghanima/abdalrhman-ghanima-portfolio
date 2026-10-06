import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Button } from './Button';
import { DownloadIcon, MenuIcon, CloseIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = [
        'hero',
        'about',
        'projects',
        'experience',
        'skills',
        'certifications',
        'education',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-brand" aria-label="Abdalrhman Ghanima Home">
            <span className="brand-monogram">AG</span>
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-role">Flutter</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions: Resume CTA + Mobile Menu Button */}
          <div className="navbar-actions">
            <div className="btn-resume-desktop">
              <Button
                variant="outline"
                size="sm"
                href={siteConfig.resume.pdfPath}
                target="_blank"
                download={siteConfig.resume.filename}
                icon={<DownloadIcon size={16} />}
              >
                Resume
              </Button>
            </div>

            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <Button
              variant="primary"
              size="lg"
              href={siteConfig.resume.pdfPath}
              target="_blank"
              download={siteConfig.resume.filename}
              icon={<DownloadIcon size={18} />}
              onClick={handleLinkClick}
            >
              Download Resume (CV)
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
