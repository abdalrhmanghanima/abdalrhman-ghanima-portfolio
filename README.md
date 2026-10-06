# Abdalrhman Ghanima — Personal Developer Portfolio

> **Flutter Developer** specializing in scalable cross-platform mobile applications, Clean Architecture, SOLID principles, modern reactive state management (Riverpod & BLoC), Firebase suite, and production-grade REST APIs.

---

## 🚀 Live Preview & Architecture

Built from the ground up with **React**, **TypeScript**, **Vite**, and **Modern CSS** with a **Deep Navy** visual identity tailored for a serious, high-end mobile engineer.

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Vanilla Modern CSS with CSS Custom Properties (Design Tokens)
- **Zero Heavy Dependencies**: Handcrafted SVG icon components, zero bloated UI libraries
- **Accessibility**: Keyboard navigable, WCAG contrast compliant, `prefers-reduced-motion` responsive
- **Production & GitHub Pages Ready**: Configured with relative base path (`./`) and an automated GitHub Actions deployment workflow.

---

## 📁 Repository Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── assets/                     # Original source-of-truth asset folder
│   ├── certificates/          # Official PDFs and generated crisp previews
│   ├── circle-mart/           # High-resolution screenshots
│   ├── elostaz-travel/        # High-resolution screenshots
│   ├── fork-up/               # High-resolution screenshots
│   ├── hrms/                  # High-resolution screenshots
│   ├── profile/               # Professional portrait image
│   └── resume/                # Official CV PDF
├── public/
│   └── assets/                # Vite static assets (exact mirror of assets/)
├── src/
│   ├── config/
│   │   └── siteConfig.ts      # Centralized personal info, links & WhatsApp helper
│   ├── data/
│   │   ├── projects.ts        # The 4 featured projects, screenshot paths & metadata
│   │   ├── experience.ts      # Verifiable professional internships and training
│   │   ├── skills.ts          # Grouped skill categories
│   │   ├── certificates.ts    # Official credential data & preview paths
│   │   └── education.ts       # Computer Science degree info
│   ├── types/
│   │   └── index.ts           # Strongly typed data models
│   ├── components/
│   │   ├── Button.tsx         # Reusable button with variants & download support
│   │   ├── Icons.tsx          # Scalable SVG icons (Flutter, GitHub, etc.)
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer & scroll spy
│   │   ├── Footer.tsx         # Minimal footer with social profiles & back to top
│   │   ├── SectionHeader.tsx  # Monospace kicker + title + description
│   │   ├── ProjectShowcase.tsx# Editorial alternating case-study presentation
│   │   ├── LightboxModal.tsx  # Accessible full-size screenshot & cert viewer
│   │   └── ContactForm.tsx    # Frontend-only mailto form with instant validation
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   ├── styles/
│   │   ├── tokens.css         # Deep Navy colors, shadows, borders, radii
│   │   ├── base.css           # Reset, typography, accessibility & reduced motion
│   │   ├── components.css     # Buttons, modals, navigation, inputs
│   │   └── sections.css       # Section-specific grid layouts & mockups
│   ├── App.tsx
│   └── main.tsx
├── index.html                 # Complete SEO metadata, Open Graph, Twitter cards, Inter font
├── vite.config.ts             # Configured with base: './' for GitHub Pages subpath compatibility
└── package.json
```

---

## ⚙️ Centralized Configuration

All personal information, links, and project data are centralized:

1. **Personal Information & Contact Links**:
   - File: `src/config/siteConfig.ts`
   - Modify your email, phone, LinkedIn, GitHub, or WhatsApp message in one place.
2. **Project Data & URLs**:
   - File: `src/data/projects.ts`
   - Replace any project repository URL (`githubUrl`), add features, or update descriptions.
3. **Experience & Internships**:
   - File: `src/data/experience.ts`
4. **Certifications**:
   - File: `src/data/certificates.ts`

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The repository is configured to deploy directly to GitHub Pages:

### Method A: Automated GitHub Actions (Recommended)
1. Push this repository to GitHub on branch `main`.
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your portfolio upon every push to `main`!

### Method B: Manual Build
1. Run `npm run build`.
2. The generated `dist/` directory contains the complete static website with relative paths (`./`), ready to be served anywhere.
