export interface ProjectScreenshot {
  filename: string;
  path: string;
  caption: string;
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  screenshots: ProjectScreenshot[];
  layoutDirection: 'image-left' | 'image-right';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  technologies: string[];
  contributions: string[];
  appsBuilt?: string[];
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  score?: string;
  hours?: string;
  credentialId?: string;
  previewImage: string;
  pdfPath: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  faculty: string;
  university: string;
  status?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  positioning: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    linkedinUrl: string;
    githubUrl: string;
  };
  profile: {
    imagePath: string;
    altText: string;
  };
  resume: {
    pdfPath: string;
    filename: string;
  };
  languages: {
    language: string;
    level: string;
  }[];
}
