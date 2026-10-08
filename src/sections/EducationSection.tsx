import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { educationList } from '../data/education';
import { AcademicCapIcon } from '../components/Icons';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <SectionHeader
          kicker="06. Academic Background"
          title="Education"
          description="Foundational computer science degree focusing on software engineering, data structures, and computer systems."
        />

        <div className="education-wrapper">
          {educationList.map((edu, idx) => (
            <article key={idx} data-reveal className="education-card reveal-fade-up">
              <div className="education-icon-box" aria-hidden="true">
                <AcademicCapIcon size={26} />
              </div>

              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-faculty">{edu.faculty}</div>
                <div className="education-university">{edu.university}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
