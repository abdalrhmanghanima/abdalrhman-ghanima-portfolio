import { CertificateItem } from '../types';

export const certificates: CertificateItem[] = [
  {
    id: 'route-flutter-diploma',
    title: 'Flutter Development Diploma',
    organization: 'Route IT Training Center',
    date: '20/11/2025',
    description:
      'Completed the intensive 5-month Flutter development diploma covering cross-platform mobile engineering, Dart, state management, and practical application development.',
    previewImage: './assets/certificates/Route_preview.png',
    pdfPath: './assets/certificates/Route.pdf',
  },
  {
    id: 'nti-mobile-app-development',
    title: 'Mobile App Development',
    organization: 'National Telecommunication Institute (NTI)',
    date: '11/01/2026 – 09/03/2026',
    score: '100%',
    hours: '90 hrs Technical | 30 hrs Freelancing',
    credentialId: 'Student ID: 223364',
    description:
      'Completed intensive technical training in Mobile App Development with Flutter, Dart, BLoC, and Clean Architecture, graduating with a perfect score of 100%.',
    previewImage: './assets/certificates/Nti_preview.png',
    pdfPath: './assets/certificates/Nti.pdf',
  },
  {
    id: 'nami-flutter-training',
    title: 'Mobile Development Training',
    organization: 'Nami Software Development',
    date: '12/07/2026',
    description:
      'Successfully completed intensive Flutter training in Mobile Development, architecting and developing real-world applications with Clean Architecture and Riverpod.',
    previewImage: './assets/certificates/Nami_preview.png',
    pdfPath: './assets/certificates/Nami.pdf',
  },
];
