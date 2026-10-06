import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { LightboxModal, LightboxImageItem } from '../components/LightboxModal';
import { certificates } from '../data/certificates';
import {
  DownloadIcon,
  ZoomInIcon,
} from '../components/Icons';

export const CertificatesSection: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImageItem[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: '',
  });

  const handleOpenCertificate = (index: number) => {
    const certImages: LightboxImageItem[] = certificates.map((c) => ({
      path: c.previewImage,
      caption: `${c.title} — ${c.organization} (${c.date || ''})`,
      title: c.title,
    }));

    setLightboxState({
      isOpen: true,
      images: certImages,
      currentIndex: index,
      title: 'Verified Certificate',
    });
  };

  const handleClose = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleIndexChange = (index: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: index }));
  };

  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <SectionHeader
          kicker="05. Credentials & Certifications"
          title="Verified Technical Certifications"
          description="Formal diplomas and institute certifications demonstrating comprehensive mobile development training and real-world project execution."
        />

        <div className="certificates-grid">
          {certificates.map((cert, idx) => (
            <article key={cert.id} className="certificate-card">
              <div
                className="cert-thumbnail-box"
                onClick={() => handleOpenCertificate(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenCertificate(idx);
                  }
                }}
                aria-label={`View certificate preview for ${cert.title}`}
              >
                <img
                  src={cert.previewImage}
                  alt={`${cert.title} Certificate`}
                  className="cert-thumbnail-img"
                  loading="lazy"
                />
                <div className="cert-zoom-btn">
                  <ZoomInIcon size={18} />
                  <span>Preview Certificate</span>
                </div>
              </div>

              <div className="cert-info-content">
                <div className="cert-org-badge">{cert.organization}</div>

                <h3 className="cert-title">{cert.title}</h3>

                <p className="cert-desc">{cert.description}</p>

                <div className="cert-metadata-row">
                  {cert.date && (
                    <span className="badge badge-surface">Date: {cert.date}</span>
                  )}
                  {cert.score && (
                    <span className="badge badge-cyan">Score: {cert.score}</span>
                  )}
                  {cert.hours && (
                    <span className="badge badge-surface">{cert.hours}</span>
                  )}
                  {cert.credentialId && (
                    <span className="badge badge-surface">{cert.credentialId}</span>
                  )}
                </div>

                <div className="cert-actions">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenCertificate(idx)}
                    icon={<ZoomInIcon size={15} />}
                  >
                    View
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    href={cert.pdfPath}
                    target="_blank"
                    download
                    icon={<DownloadIcon size={15} />}
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleClose}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onIndexChange={handleIndexChange}
        modalTitle={lightboxState.title}
      />
    </section>
  );
};
