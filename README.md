<div align="center">

# Jeel Bhoot — Portfolio

Personal portfolio of **Jeel Bhoot**, a Front-End Software Developer specializing in **React** and **Next.js**.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

</div>

## Overview

A fast, responsive single-page portfolio that introduces who I am, the technologies I work with, where I've worked and what I've built. It is designed with a clean, Apple-inspired look, follows the visitor's system light or dark theme, and is rendered as static HTML for quick loading and good SEO.

## Features

- **Single-page layout** with smooth-scrolling sections: Home, About, Experience, Projects and Contact
- **Automatic light and dark mode** based on the visitor's system preference
- **Fully responsive**, with an animated full-screen menu on mobile and tablet
- **Skills showcase** grouped by category, with technology icons
- **Experience and project cards** with subtle hover effects
- **Downloadable resume** linked from the navigation
- **SEO ready** with page metadata, Open Graph and Twitter cards, `robots.txt` and a sitemap
- **Optimized fonts** self-hosted through `next/font`, with no layout shift
- **Statically generated** at build time with the Next.js App Router

## Tech Stack

| Area          | Technology                                                     |
| ------------- | -------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router, Turbopack)      |
| UI library    | [React 19](https://react.dev/)                                 |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/)                     |
| UI components | [Headless UI](https://headlessui.com/) (mobile menu dialog)    |
| Icons         | [React Icons](https://react-icons.github.io/react-icons/)      |
| Animation     | [Typewriter Effect](https://github.com/tameemsafi/typewriterjs) |
| Linting       | ESLint 9 with `eslint-config-next`                             |

## Project Structure

```
portfolio/
├── public/                       # Static files served as-is
│   ├── Jeel_Bhoot_React_NextJS_Developer.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── fonts/                # Self-hosted SF Pro and SF Mono fonts
│   │   ├── globals.css           # Tailwind theme and global styles
│   │   ├── icon.svg              # Favicon
│   │   ├── layout.jsx            # Root layout, fonts and SEO metadata
│   │   ├── not-found.jsx         # Custom 404 page
│   │   └── page.jsx              # Home page that composes all sections
│   ├── components/               # Page sections
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── icons/                # SVG icon components
│   └── data/
│       └── data.json             # Site text content
├── eslint.config.mjs
├── jsconfig.json                 # "@/" import alias for src/
├── next.config.mjs
└── postcss.config.mjs
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or later
- npm

### Installation

```bash
git clone https://github.com/Jeel-Bhoot/Portfolio.git
cd Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the development server on port 3000   |
| `npm run build` | Create an optimized production build        |
| `npm run start` | Serve the production build                  |
| `npm run lint`  | Check the code with ESLint                  |

## Customization

- **Text content** such as the name, roles, introduction and section titles lives in [`src/data/data.json`](./src/data/data.json).
- **Skills** are defined in [`src/components/About.jsx`](./src/components/About.jsx).
- **Work experience** is defined in [`src/components/Experience.jsx`](./src/components/Experience.jsx).
- **Projects** are defined in [`src/components/Projects.jsx`](./src/components/Projects.jsx).
- **Colors, fonts and breakpoints** are set in the `@theme` block of [`src/app/globals.css`](./src/app/globals.css).
- **SEO metadata** is set in [`src/app/layout.jsx`](./src/app/layout.jsx).
- **Resume**: replace the PDF in `public/` and update its link in [`src/components/Header.jsx`](./src/components/Header.jsx).

## Deployment

The site can be deployed to any platform that supports Next.js, such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Import the repository and the platform detects Next.js automatically. No environment variables are required.

## Featured Projects

- **[CodeLens AI](https://codelens-ai-dev.netlify.app/)**: an AI front-end code reviewer that uses the Claude API to flag performance, accessibility, security and best-practice issues in React files.
- **[PX to REM Converter](https://github.com/Jeel-Bhoot/PX-to-REM)**: converts pixel values to CSS `rem` units.
- **[React Template](https://github.com/Jeel-Bhoot/React-Template)**: a clean, well-structured starter template for React projects.

## Contact

I'm always open to new opportunities, collaborations or just a friendly hello.

- **Email**: [jeelbhut30b@gmail.com](mailto:jeelbhut30b@gmail.com)
- **GitHub**: [@Jeel-Bhoot](https://github.com/Jeel-Bhoot)

## License

This project is licensed under the [MIT License](./LICENSE).

© Jeel Bhoot
