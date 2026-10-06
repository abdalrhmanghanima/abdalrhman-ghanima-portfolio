import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'circle-mart',
    number: '01',
    title: 'Circle Mart',
    shortDescription:
      'A full e-commerce mobile application rebuilt independently from scratch using Flutter and Clean Architecture without modifying the original codebase.',
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Clean Architecture',
      'SOLID',
      'Firebase',
      'REST API',
      'Google Maps',
      'FCM',
    ],
    keyFeatures: [
      'Phone OTP authentication via Firebase Auth',
      'Complete product catalog browsing and instant search',
      'Favorites wishlist and responsive cart management',
      'Streamlined checkout flow and order history tracking',
      'Google Maps integration for location picking and delivery addresses',
      'Firebase Cloud Messaging (FCM) real-time push notifications',
      'High-performance asynchronous networking with REST APIs',
    ],
    githubUrl: 'https://github.com/abdalrhmanghanima/circle-mart',
    layoutDirection: 'image-left',
    screenshots: [
      {
        filename: 'home.jpg',
        path: './assets/circle-mart/home.jpg',
        caption: 'Circle Mart — Home Catalog & Featured Deals',
        isPrimary: true,
      },
      {
        filename: 'home2.jpg',
        path: './assets/circle-mart/home2.jpg',
        caption: 'Circle Mart — Products & Category Feed',
      },
      {
        filename: 'login.jpg',
        path: './assets/circle-mart/login.jpg',
        caption: 'Circle Mart — Authentication & Sign-In Screen',
      },
      {
        filename: 'splash.jpg',
        path: './assets/circle-mart/splash.jpg',
        caption: 'Circle Mart — Brand Splash Screen',
      },
    ],
  },
  {
    id: 'elostaz-travel',
    number: '02',
    title: 'Elostaz Travel',
    shortDescription:
      'A transportation management mobile application designed for coordinating buses, drivers, active trips, and daily transportation operations with real-time synchronization.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Riverpod',
      'Clean Architecture',
    ],
    keyFeatures: [
      'Bus fleet management with detailed technical and capacity tracking',
      'Driver profiles and trip assignment workflows',
      'Active trip scheduling and daily transportation coordination',
      'Real-time data synchronization powered by Firebase',
      'Financial tracking including trip revenues and operational summaries',
      'Automated push notifications for vehicle license expiration alerts',
      'Role-tailored mobile interface optimized for swift operational updates',
    ],
    githubUrl: 'https://github.com/abdalrhmanghanima/elostaz-travel',
    layoutDirection: 'image-right',
    screenshots: [
      {
        filename: 'home.jpg',
        path: './assets/elostaz-travel/home.jpg',
        caption: 'Elostaz Travel — Operations Dashboard & Trips Overview',
        isPrimary: true,
      },
      {
        filename: 'busdetails.jpg',
        path: './assets/elostaz-travel/busdetails.jpg',
        caption: 'Elostaz Travel — Fleet Vehicle & Bus Management',
      },
      {
        filename: 'aiassistant.jpg',
        path: './assets/elostaz-travel/aiassistant.jpg',
        caption: 'Elostaz Travel — Operational Assistant & Dispatch Tools',
      },
      {
        filename: 'login.jpg',
        path: './assets/elostaz-travel/login.jpg',
        caption: 'Elostaz Travel — Secure Sign-In Portal',
      },
    ],
  },
  {
    id: 'fork-up',
    number: '03',
    title: 'Fork Up',
    shortDescription:
      'A production-grade mobile application refactored from BLoC/Cubit to Riverpod with Clean Architecture, reusable design system components, and offline-first storage.',
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Clean Architecture',
      'REST API',
      'Hive',
    ],
    keyFeatures: [
      'Architectural refactoring from BLoC/Cubit to Riverpod state management',
      'Clean Architecture separation across Domain, Data, and Presentation layers',
      'Secure phone-based OTP authentication flow',
      'Wishlist and shopping cart with synchronized reactive states',
      'High-speed offline caching using Hive local storage',
      'Efficient API pagination and infinite scrolling for product catalogs',
      'Modular, reusable UI components built for maintainability',
    ],
    githubUrl: 'https://github.com/abdalrhmanghanima/fork-up',
    layoutDirection: 'image-left',
    screenshots: [
      {
        filename: 'guest_home_screen.png',
        path: './assets/fork-up/guest_home_screen.png',
        caption: 'Fork Up — Guest Catalog & Product Discovery Screen',
        isPrimary: true,
      },
      {
        filename: 'cart.png',
        path: './assets/fork-up/cart.png',
        caption: 'Fork Up — Interactive Cart & Order Summary',
      },
      {
        filename: 'sign_with_phone.png',
        path: './assets/fork-up/sign_with_phone.png',
        caption: 'Fork Up — Phone OTP Verification & Login',
      },
      {
        filename: 'splash.png',
        path: './assets/fork-up/splash.png',
        caption: 'Fork Up — App Splash Experience',
      },
    ],
  },
  {
    id: 'hrms',
    number: '04',
    title: 'HR Management System',
    shortDescription:
      'A comprehensive mobile HR solution focusing on employee directory management, attendance tracking, payroll workflows, and role-based permissions.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Riverpod',
      'Clean Architecture',
    ],
    keyFeatures: [
      'Employee directory and individual profile management',
      'Department organization and departmental categorization',
      'Daily attendance tracking and timestamp verification',
      'Payroll calculations and automated salary summaries',
      'Groups and permission-based authorization models',
      'Company calendar with official holidays management',
      'Secure authentication with enterprise data sync via Firebase',
      'Responsive, high-density mobile interface designed for HR operators',
    ],
    githubUrl: 'https://github.com/abdalrhmanghanima/hr-management-system',
    layoutDirection: 'image-right',
    screenshots: [
      {
        filename: 'home.png',
        path: './assets/hrms/home.png',
        caption: 'HR Management System — Operations Dashboard',
        isPrimary: true,
      },
      {
        filename: 'attendance.png',
        path: './assets/hrms/attendance.png',
        caption: 'HR Management System — Attendance Logs & Records',
      },
      {
        filename: 'employees.png',
        path: './assets/hrms/employees.png',
        caption: 'HR Management System — Employee Directory & Roles',
      },
      {
        filename: 'login.png',
        path: './assets/hrms/login.png',
        caption: 'HR Management System — Authentication Screen',
      },
    ],
  },
];
