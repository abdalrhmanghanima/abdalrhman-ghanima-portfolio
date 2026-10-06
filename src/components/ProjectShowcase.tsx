import React, { useState } from 'react';
import { Project } from '../types';
import { Button } from './Button';
import {
  GitHubIcon,
  ZoomInIcon,
  CheckIcon,
} from './Icons';

interface ProjectShowcaseProps {
  project: Project;
  onOpenLightbox: (projectIndex: number, screenshotIndex: number) => void;
  projectIndex: number;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  onOpenLightbox,
  projectIndex,
}) => {
  // State for which screenshot is currently focused in the device mockup frame
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);

  const activeScreenshot =
    project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <article
      className={`project-case-study ${project.layoutDirection}`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Visual Mockup & Screenshots Gallery */}
      <div className="project-visual-col">
        <div
          className="mockup-frame"
          onClick={() => onOpenLightbox(projectIndex, selectedScreenshotIndex)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onOpenLightbox(projectIndex, selectedScreenshotIndex);
            }
          }}
          aria-label={`Open screenshot viewer for ${activeScreenshot.caption}`}
        >
          <div className="mockup-screen">
            <img
              src={activeScreenshot.path}
              alt={activeScreenshot.caption}
              loading="lazy"
            />
            <div className="mockup-zoom-overlay">
              <ZoomInIcon size={20} />
              <span>Click to Expand</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="project-gallery-thumbs" aria-label="Project Screenshots">
          {project.screenshots.map((shot, idx) => (
            <button
              key={shot.filename}
              type="button"
              className={`project-thumb-btn ${idx === selectedScreenshotIndex ? 'active' : ''}`}
              onClick={() => setSelectedScreenshotIndex(idx)}
              aria-label={`Select screenshot: ${shot.caption}`}
              title={shot.caption}
            >
              <img src={shot.path} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Content */}
      <div className="project-content-col">
        <div className="project-meta-top">
          <span className="project-index">CASE STUDY {project.number}</span>
          <span className="badge badge-surface">Mobile App</span>
        </div>

        <h3 id={`project-title-${project.id}`} className="project-case-title">
          {project.title}
        </h3>

        <p className="project-case-desc">{project.shortDescription}</p>

        {/* Technology Tags */}
        <div className="project-tech-tags" aria-label="Technologies Used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features Bullet List */}
        <ul className="project-features-list" aria-label="Key Features">
          {project.keyFeatures.map((feature, idx) => (
            <li key={idx} className="project-feature-item">
              <CheckIcon size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action CTAs */}
        <div className="project-actions">
          <Button
            variant="primary"
            size="md"
            href={project.githubUrl}
            target="_blank"
            icon={<GitHubIcon size={18} />}
          >
            View on GitHub
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => onOpenLightbox(projectIndex, selectedScreenshotIndex)}
            icon={<ZoomInIcon size={18} />}
          >
            View Screenshots ({project.screenshots.length})
          </Button>
        </div>
      </div>
    </article>
  );
};
