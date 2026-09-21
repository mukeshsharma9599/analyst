# Data Analyst Portfolio

A complete, recruiter-focused Data Analyst portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **One-Page Scroll Story** - Experience my professional story as you scroll
- **Responsive Design** - Works on desktop, tablet, and mobile
- **React Router** - Multi-page navigation with sticky navbar
- **Data-Driven** - All content in `src/data/` for easy updates
- **Modern Stack** - React 18, Tailwind CSS, Lucide icons, Recharts

## Tech Stack

- React 18
- Vite
- React Router DOM v6
- Tailwind CSS
- Lucide React (icons)
- Recharts (for future dashboard visualizations)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Resume

The Download Resume buttons point to `/resume/Mukesh_2026.pdf`.

To replace the resume:

1. Copy your updated PDF to `public/resume/Mukesh_2026.pdf` (keep the same file name), or
2. Update `resumeUrl` in `src/data/profile.js` to match your new file name.

## Customization

All placeholder content is in the `src/data/` directory:

- `profile.js` - Your name, title, contact info, summary
- `skills.js` - Your skills organized by category
- `experience.js` - Work experience
- `projects.js` - Project details
- `caseStudies.js` - Case study content
- `dashboards.js` - Dashboard gallery items

Update these files with your actual information to personalize the portfolio.

## Folder Structure

```
src/
├── assets/           # Images, dashboards, documents
├── components/       # React components (section + shared)
├── data/            # All content data files
├── pages/           # Route-level page components
├── styles/          # Global CSS, animations, responsive
├── App.jsx          # Router configuration
└── main.jsx         # Entry point
public/              # Static assets
```

## License

Private project.
