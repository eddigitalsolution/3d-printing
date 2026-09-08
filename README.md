# NEXUS 3D — From Pixel to Object

> **Industrial Additive Manufacturing & Generative Physical Engineering Platform**

NEXUS 3D is a high-performance web application designed for next-generation industrial 3D printing services, titanium/metal laser sintering, and real-time interactive 3D model configuration.

---

## ✨ Features

- **Interactive 3D Pipeline Visualizer**: Real-time 3D interactive rendering using Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`).
- **Instant Quote Configurator**: Dynamic material selection (Titanium Ti-6Al-4V, Inconel 718, Carbon Fiber PEEK, Surgical Stainless) with real-time price estimation.
- **Glassmorphism & Industrial Design**: Clean Dark Mode interface with custom CSS design tokens, smooth micro-interactions, and Framer Motion animations.
- **Mobile-First Responsive Layout**: Optimized navigation, mobile drawer menu, and layout tuned for high performance.
- **Cloudflare Ready**: Built-in Content Security Policy (CSP), SPA routing fallback (`200.html`), and optimized static assets.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Custom HSL Design Tokens
- **3D Engine**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons & Motion**: [Lucide React](https://lucide.dev/) + [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 20+** installed.

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/eddigitalsolution/3d-printing.git

# Navigate into project directory
cd 3d-printing

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Build & Production

### Production Build
```bash
npm run build
```
This runs TypeScript compilation (`tsc`) and bundles static production assets into `./dist` along with `dist/200.html` for Cloudflare SPA fallback routing.

### Preview Local Production Build
```bash
npm run preview
```

---

## ☁️ Deployment

### Cloudflare Pages (GitHub Integration)
1. Link repository `eddigitalsolution/3d-printing` in Cloudflare Pages Dashboard.
2. Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Environment Variable**: `NODE_VERSION=20`

### Cloudflare Pages (Wrangler Direct Upload)
```bash
npx wrangler pages deploy dist --project-name=pixel-to-object-3d-printing
```

---

## 🔒 Security & Performance Headers

Security headers are pre-configured in [`public/_headers`](public/_headers) and synchronized in [`index.html`](index.html):
- **Content Security Policy (CSP)**: Includes rules for WebGL, Google Fonts, and internal blob/data resources.
- **X-Frame-Options**: `SAMEORIGIN`
- **X-Content-Type-Options**: `nosniff`
- **Referrer-Policy**: `strict-origin-when-cross-origin`

---

## 📄 License

MIT © [ED Digital Solution](https://github.com/eddigitalsolution)
