---
name: project-overview
description: |
  Project overview and workspace workflows for 3d printing web app development, Cloudflare deployment, and UI/UX design standards.
license: Apache-2.0
metadata:
  version: v1
  publisher: workspace
---

# Workspace Project Overview & Runbooks

This skill provides workspace-specific guidelines and instructions for building, testing, and deploying web applications within this project.

## Development Workflow
1. **Initial Setup**: Run Vite / static dev server locally.
2. **Design Verification**: Test UI responsive layout across mobile (`375px`), tablet (`768px`), and desktop (`1440px`).
3. **Navbar & Navigation**: Ensure navbar adheres to `navbar-adjustment` guidelines (sticky header, responsive mobile drawer, smooth backdrop blur).
4. **Cloudflare Deployment**: Build static output and verify `public/_headers` and `public/_redirects` are in place.
