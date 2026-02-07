# Tom's Living Website

A personal website built with [Astro](https://astro.build/) — documenting growth as a builder, in public.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Structure

```
src/
├── pages/           # English pages (default)
│   ├── zh/          # Chinese pages
│   ├── writing/     # Writing/blog section
│   └── projects/    # Projects section
├── components/      # Reusable components
├── layouts/         # Page layouts
├── styles/          # Global styles
└── i18n/            # Translations (EN/ZH)
```

## 🌐 Features

- Bilingual support (English / 中文)
- Responsive design
- Fast static site generation
- Auto-deployment via GitHub Actions

## 📦 Deployment

Push to `main` branch → GitHub Actions auto-builds and deploys to GitHub Pages.

Make sure to enable GitHub Pages in your repository settings:
1. Go to Settings → Pages
2. Set Source to "GitHub Actions"
