import React from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      data-reveal
      className={`section-header reveal-fade-up ${align === 'center' ? 'text-center' : ''} ${className}`.trim()}
    >
      <div className="section-kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};
