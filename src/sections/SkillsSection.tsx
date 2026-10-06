import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import {
  SmartphoneIcon,
  LayersIcon,
  CloudIcon,
  DatabaseIcon,
  ToolIcon,
} from '../components/Icons';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone':
        return <SmartphoneIcon size={22} />;
      case 'layers':
        return <LayersIcon size={22} />;
      case 'cloud':
        return <CloudIcon size={22} />;
      case 'database':
        return <DatabaseIcon size={22} />;
      case 'tool':
        return <ToolIcon size={22} />;
      default:
        return <SmartphoneIcon size={22} />;
    }
  };

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <SectionHeader
          kicker="04. Technical Skills"
          title="Core Capabilities & Tech Stack"
          description="A categorized overview of the engineering paradigms, libraries, and developer tools I utilize to deliver robust mobile applications."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-badges-wrap" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
