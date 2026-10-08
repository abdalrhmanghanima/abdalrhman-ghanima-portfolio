import { SiteConfig } from '../types';

// Helper to format WhatsApp URL from standard Egyptian phone format
export const createWhatsAppUrl = (phone: string, defaultMessage?: string): string => {
  // Strip non-numeric characters
  const cleanNumber = phone.replace(/\D/g, '');
  // If Egyptian local number starting with 01, replace leading 0 with country code 20
  const internationalNumber = cleanNumber.startsWith('01')
    ? `20${cleanNumber.slice(1)}`
    : cleanNumber.startsWith('20')
    ? cleanNumber
    : `20${cleanNumber}`;

  const messageParam = defaultMessage
    ? `?text=${encodeURIComponent(defaultMessage)}`
    : '';

  return `https://wa.me/${internationalNumber}${messageParam}`;
};

const PHONE_NUMBER = '01016934002';

export const siteConfig: SiteConfig = {
  name: 'Abdalrhman Ghanima',
  title: 'Flutter Developer',
  positioning: 'Flutter Developer specializing in scalable mobile applications.',
  summary:
    'I am a Junior Flutter Developer with hands-on experience building cross-platform mobile applications using Flutter and Dart. I specialize in Clean Architecture, SOLID principles, modern state management, Firebase, REST APIs, and responsive UI. I focus on building scalable, maintainable, and high-performance mobile applications and enjoy turning ideas and business requirements into polished real-world products.',
  contact: {
    email: 'abdoghanima2005@gmail.com',
    phone: PHONE_NUMBER,
    whatsappNumber: PHONE_NUMBER,
    whatsappUrl: createWhatsAppUrl(
      PHONE_NUMBER,
      'Hello Abdalrhman, I came across your Flutter developer portfolio and would like to connect!'
    ),
    linkedinUrl: 'https://linkedin.com/in/abdalrhman-ghanima-6961a536a',
    githubUrl: 'https://github.com/abdalrhmanghanima',
  },
  profile: {
    // Relative path works both locally and on GitHub Pages subpaths
    imagePath: './assets/profile/abdalrhman.jpeg',
    altText: 'Abdalrhman Ghanima — Flutter Developer',
  },
  resume: {
    pdfPath: './assets/resume/Abdalrhman_Ghanima_CV.pdf',
    filename: 'Abdalrhman_Ghanima_CV.pdf',
  },
  languages: [
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'Proficient' },
  ],
};
