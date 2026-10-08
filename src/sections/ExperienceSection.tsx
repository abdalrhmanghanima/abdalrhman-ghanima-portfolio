import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { experiences } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <div className="container">
        <SectionHeader
          kicker="03. Experience & Training"
          title="Professional Journey & Internships"
          description="Hands-on software development experience across real-world enterprise applications, client solutions, and rigorous engineering programs."
        />

        <div className="experience-timeline stagger-group">
          {experiences.map((exp) => (
            <div key={exp.id} data-reveal className="timeline-item reveal-fade-up">
              <div className="timeline-node" aria-hidden="true" />

              <article className="timeline-card">
                <header className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                </header>

                <div className="timeline-tech-tags" aria-label="Core Technologies">
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="timeline-contributions">
                  {exp.contributions.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                {exp.appsBuilt && exp.appsBuilt.length > 0 && (
                  <div className="timeline-apps-built">
                    <span className="apps-built-label">Applications Built:</span>
                    {exp.appsBuilt.map((app) => (
                      <span key={app} className="apps-built-pill">
                        {app}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
