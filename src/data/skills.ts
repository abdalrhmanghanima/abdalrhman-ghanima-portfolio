import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    iconName: 'smartphone',
    description:
      'Crafting fluid, pixel-perfect cross-platform mobile experiences for iOS and Android with Dart and Flutter.',
    skills: [
      'Flutter',
      'Dart',
      'Responsive UI',
      'Adaptive Layouts',
      'Theming (Dark/Light)',
      'Localization (i18n)',
    ],
  },
  {
    title: 'Architecture & State Management',
    iconName: 'layers',
    description:
      'Designing testable, decoupled, and maintainable software structures with strict layer isolation and modern reactive state.',
    skills: [
      'Clean Architecture',
      'SOLID Principles',
      'MVVM Pattern',
      'Riverpod',
      'BLoC',
      'Cubit',
      'Dependency Injection',
    ],
  },
  {
    title: 'Backend & Cloud APIs',
    iconName: 'cloud',
    description:
      'Integrating robust serverless cloud infrastructure, authentication services, real-time sync, and HTTP networking.',
    skills: [
      'Firebase',
      'Firebase Authentication (OTP)',
      'Cloud Firestore',
      'Realtime Database',
      'Firebase Storage',
      'Firebase Cloud Messaging (FCM)',
      'REST APIs',
      'Dio',
      'HTTP',
      'JSON Serialization',
    ],
  },
  {
    title: 'Local Storage & Persistence',
    iconName: 'database',
    description:
      'Implementing offline-first data caching and device key-value storage for reliable offline mobile experiences.',
    skills: ['Hive', 'SharedPreferences'],
  },
  {
    title: 'DevOps, Tooling & Version Control',
    iconName: 'tool',
    description:
      'Collaborative source control, continuous integration pipelines, and API testing workflows.',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'Postman'],
  },
];
