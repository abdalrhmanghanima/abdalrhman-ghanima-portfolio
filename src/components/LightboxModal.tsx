import React, { useEffect, useCallback } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export interface LightboxImageItem {
  path: string;
  caption: string;
  title?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImageItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  modalTitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  modalTitle,
}) => {
  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <div className="lightbox-title">
            {modalTitle || currentImage.title || 'Screenshot Preview'}
          </div>
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close modal (Esc)"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="lightbox-body">
          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous image (Left arrow)"
            >
              <ChevronLeftIcon size={22} />
            </button>
          )}

          <img
            src={currentImage.path}
            alt={currentImage.caption || 'Project Screenshot'}
            className="lightbox-image"
          />

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={handleNext}
              aria-label="Next image (Right arrow)"
            >
              <ChevronRightIcon size={22} />
            </button>
          )}
        </div>

        {currentImage.caption && (
          <div className="lightbox-caption">{currentImage.caption}</div>
        )}

        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`lightbox-thumb ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => onIndexChange(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img.path} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
