import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { LightboxModal, LightboxImageItem } from '../components/LightboxModal';
import { projects } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImageItem[];
    currentIndex: number;
    projectTitle: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectTitle: '',
  });

  const handleOpenLightbox = (projectIndex: number, screenshotIndex: number) => {
    const project = projects[projectIndex];
    if (!project) return;

    const modalImages: LightboxImageItem[] = project.screenshots.map((s) => ({
      path: s.path,
      caption: s.caption,
      title: project.title,
    }));

    setLightboxState({
      isOpen: true,
      images: modalImages,
      currentIndex: screenshotIndex,
      projectTitle: `${project.title} — Screenshots`,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleIndexChange = (index: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: index }));
  };

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        <SectionHeader
          kicker="02. Featured Projects"
          title="Production-Oriented Mobile Applications"
          description="A selection of cross-platform Flutter applications built with Clean Architecture, modern state management, and real-time backend integrations."
        />

        <div className="projects-list">
          {projects.map((project, idx) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              projectIndex={idx}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onIndexChange={handleIndexChange}
        modalTitle={lightboxState.projectTitle}
      />
    </section>
  );
};
