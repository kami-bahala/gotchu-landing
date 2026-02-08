# Gotchu Landing Page

A modern, responsive landing page for the Gotchu home services marketplace platform. Built with Next.js 16, TypeScript, and CSS Modules.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build and Deployment](#build-and-deployment)
- [Architecture](#architecture)
- [Author](#author)

## Overview

Gotchu is a home services marketplace that connects customers with trusted local professionals for cleaning, repairs, errands, and other household tasks. This repository contains the public-facing landing page designed to:

- Communicate the platform's value proposition
- Showcase available service categories
- Explain the booking process
- Highlight trust and safety features
- Drive mobile application downloads

## Technology Stack

| Technology  | Version | Purpose                         |
| ----------- | ------- | ------------------------------- |
| Next.js     | 16.x    | React framework with App Router |
| TypeScript  | 5.x     | Type-safe development           |
| React       | 19.x    | UI component library            |
| CSS Modules | -       | Scoped component styling        |
| ESLint      | 9.x     | Code quality and linting        |

## Project Structure

```
gotchu-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system and global styles
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main landing page
│   └── components/
│       ├── index.ts             # Barrel export
│       ├── Header/
│       │   ├── index.tsx
│       │   └── Header.module.css
│       ├── HeroSection/
│       │   ├── index.tsx
│       │   └── HeroSection.module.css
│       ├── ServicesSection/
│       │   ├── index.tsx
│       │   └── ServicesSection.module.css
│       ├── HowItWorks/
│       │   ├── index.tsx
│       │   └── HowItWorks.module.css
│       ├── TrustSection/
│       │   ├── index.tsx
│       │   └── TrustSection.module.css
│       ├── DownloadCTA/
│       │   ├── index.tsx
│       │   └── DownloadCTA.module.css
│       └── Footer/
│           ├── index.tsx
│           └── Footer.module.css
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd gotchu-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create production build                  |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint for code quality checks       |

### Component Development

Components follow a modular folder structure. Each component resides in its own directory containing:

- `index.tsx` - Component logic and JSX
- `ComponentName.module.css` - Scoped styles

Import components using the barrel export:

```typescript
import { Header, Footer, HeroSection } from "@/components";
```

### Design System

The design system is defined in `src/app/globals.css` and includes:

- CSS custom properties for colors, typography, and spacing
- Utility classes for common patterns
- Responsive breakpoints (480px, 768px, 1024px)
- Animation keyframes

## Build and Deployment

### Production Build

```bash
npm run build
```

This generates an optimized production build in the `.next` directory.

### Static Export

For static hosting, configure `next.config.ts`:

```typescript
const nextConfig = {
  output: "export",
};
```

### Deployment Options

- **Vercel**: Recommended platform with zero-configuration deployment
- **AWS S3 + CloudFront**: Static export with CDN distribution
- **Docker**: Containerized deployment for orchestrated environments

## Architecture

### Component Hierarchy

```
Layout
└── Page
    ├── Header
    ├── Main
    │   ├── HeroSection
    │   ├── ServicesSection
    │   ├── HowItWorks
    │   ├── TrustSection
    │   └── DownloadCTA
    └── Footer
```

### SEO Configuration

SEO metadata is configured in `src/app/layout.tsx` including:

- Page title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- Viewport configuration
- Robots directives

### Accessibility

The application implements accessibility best practices:

- Semantic HTML elements
- ARIA labels for interactive components
- Skip navigation link
- Focus state indicators
- Keyboard navigation support

## Author

**Tristan Mahinay**

## License

This project is proprietary software. All rights reserved.
