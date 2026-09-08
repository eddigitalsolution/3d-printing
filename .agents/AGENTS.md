# Project Agent Guidelines & Workflow Rules

This project agent configuration governs the development, design, and deployment standards for this repository (`3d printing`).

## 1. Project Core Focus & Tech Stack
- **Framework**: Vite + React or modern HTML5/JS frontend stack.
- **Styling**: Vanilla CSS / modern CSS custom properties (variables) with rich aesthetics, glassmorphism, responsive grids, and dark mode support.
- **Components**: Reusable, modular UI components with smooth micro-interactions.
- **Deployment Target**: Cloudflare Pages / Workers.

## 2. Web Development & UI/UX Standards
- **Anti-AI-Slop Aesthetics**: Use curated color palettes, elegant typography (e.g. Inter / Outfit / Roboto), smooth hover states, and dynamic visual transitions.
- **Header & Navbar Navigation**:
  - Navbar height between `64px` and `80px`.
  - Sticky positioning (`sticky top-0 z-50`) with backdrop blur.
  - Responsive mobile drawer menu with seamless animation and `aria-label` access.
- **Responsive Layout**: Mobile-first grid and flexbox design.
- **Performance**: High Lighthouse score, optimized asset imports, zero layout shifts.

## 3. Deployment Checklist (Cloudflare Pages)
- Security headers in `public/_headers` (CSP, X-Frame-Options, HSTS).
- SPA routing fallback (`public/_redirects` or `200.html`).
- Synchronized Content Security Policy (`CSP`) in `index.html`.
- Node 20 runtime build settings (`NODE_VERSION=20`).

## 4. Active Skills Integration
- `web-development`: Standards for HTML/CSS/JS frontend apps.
- `cloudflare-deployment` & `cloudflare-setup`: Cloudflare static deployment guidelines.
- `navbar-adjustment` & `compact-ui-design`: Header tuning and navbar styling.
- `design-director` & `ui-ux-pro-max`: Visual art direction & component styling.
