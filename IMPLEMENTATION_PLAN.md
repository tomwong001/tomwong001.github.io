# Implementation Plan: Tom's Living Website

Based on PRD.md - A comprehensive plan to build a living, content-driven personal website.

---

## 1. Technology Stack Recommendation

### Option A: Static Site Generator (Recommended)
**Astro** or **Next.js** (Static Export)

**Why:**
- Fast, modern, and easy to deploy to GitHub Pages
- Great for content-heavy sites
- Markdown support built-in
- Easy to update (just edit markdown files)
- SEO-friendly out of the box

**Alternative:** Jekyll (native GitHub Pages support, but older)

### Option B: Pure HTML/CSS/JS
- Maximum simplicity
- Full control
- No build step
- Harder to maintain at scale

### Recommendation: **Astro**
- Perfect balance of simplicity and power
- Excellent markdown support for Writing/Progress section
- Component-based for reusable sections
- Fast builds and deployments

---

## 2. Project Structure

```
tomwong001.github.io/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── about.astro          # About
│   │   ├── journey.astro        # Journey
│   │   ├── now.astro            # Now
│   │   ├── writing/
│   │   │   ├── index.astro      # Writing/Progress listing
│   │   │   └── [slug].astro     # Individual posts
│   │   ├── projects/
│   │   │   ├── index.astro      # Projects listing
│   │   │   └── steplify.astro   # Failed startup detail
│   │   ├── life.astro           # Life
│   │   └── contact.astro        # Contact
│   ├── components/
│   │   ├── Layout.astro         # Main layout wrapper
│   │   ├── Navigation.astro     # Site navigation
│   │   ├── Hero.astro           # Home hero section
│   │   ├── JourneyCard.astro    # Journey chapter cards
│   │   ├── WritingCard.astro    # Writing post cards
│   │   └── Footer.astro         # Footer
│   ├── content/
│   │   ├── writing/             # Markdown files for posts
│   │   │   ├── 2025-01-15-first-note.md
│   │   │   └── ...
│   │   └── journey/              # Journey chapters (markdown or data)
│   │       ├── chapter-1.md
│   │       └── ...
│   ├── styles/
│   │   ├── global.css           # Global styles
│   │   └── variables.css        # CSS variables (colors, typography)
│   └── config.ts                # Site configuration
├── public/
│   ├── images/                  # Images, photos
│   └── favicon.ico
├── package.json
├── astro.config.mjs
└── README.md
```

---

## 3. Design System

### Design Principles
1. **Minimal but thoughtful** - Clean, readable, not flashy
2. **Content-first** - Typography and whitespace are heroes
3. **Professional yet human** - Not corporate, not influencer-y
4. **Mobile-first** - Responsive from the start

### Visual Identity

**Typography:**
- Headings: System font stack (SF Pro, Segoe UI, etc.) or Inter
- Body: System font stack or a readable serif (for longer content)
- Monospace: For code snippets (if any)

**Color Palette:**
- Primary: Deep, thoughtful color (navy, charcoal, or dark green)
- Text: Near-black (#1a1a1a) on white/off-white
- Accents: Subtle, one accent color for CTAs/links
- Background: White or very light gray (#fafafa)

**Spacing:**
- Generous whitespace
- Comfortable reading line length (max 65-75ch)
- Consistent rhythm (8px or 12px base unit)

**Layout:**
- Single column for content
- Centered, max-width containers
- Subtle animations (fade-ins, not bouncy)

---

## 4. Internationalization (i18n) - English/Chinese Language Switcher

### Overview
**Yes, this is absolutely doable!** Adding bilingual support (English/Chinese) with a top-right language switcher is a great feature that will make your site accessible to a broader audience.

### Implementation Approach

**Option A: Astro i18n (Recommended)**
- Use Astro's built-in i18n routing support
- URL structure: `/en/about` vs `/zh/about` (or `/about` defaults to English)
- Clean separation of content by language
- SEO-friendly (separate URLs per language)

**Option B: Client-side Language Toggle**
- Single set of pages with language state management
- Use localStorage to remember preference
- Content stored in JSON/JS files or frontmatter
- Simpler setup, but less SEO-friendly

**Recommendation: Hybrid Approach**
- Use Astro i18n for routing (`/en/` and `/zh/` paths)
- Language switcher component in top-right navigation
- Content stored in separate markdown files or data files per language
- Default to English, detect browser language (optional)

### Language Switcher Component

**Location:** Top-right corner of navigation bar

**Design:**
```
┌─────────────────────────────────────┐
│  [Navigation]        [EN | 中文]   │
└─────────────────────────────────────┘
```

**Functionality:**
- Click to toggle between English and Chinese
- Visual indicator of current language
- Smooth transition (no page reload if using client-side)
- Persist preference in localStorage
- Update URL to reflect language (`/en/about` → `/zh/about`)

### Content Organization

**Structure:**
```
src/
├── content/
│   ├── writing/
│   │   ├── en/
│   │   │   └── 2025-01-15-first-note.md
│   │   └── zh/
│   │       └── 2025-01-15-first-note.md
│   ├── journey/
│   │   ├── en/
│   │   │   └── chapter-1.md
│   │   └── zh/
│   │       └── chapter-1.md
│   └── translations/
│       ├── en.json    # UI strings (nav, buttons, etc.)
│       └── zh.json
```

**Translation Strategy:**
1. **UI Elements** (nav, buttons, labels): JSON translation files
2. **Page Content** (About, Now, etc.): Separate markdown/data files per language
3. **Writing Posts**: Optional - translate key posts, not all
4. **Journey**: Full translation (important narrative)
5. **Projects**: Full translation (Steplify story)

### Technical Implementation

**Astro Config:**
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false  // /about vs /en/about
    }
  }
});
```

**Language Switcher Component:**
```astro
<!-- LanguageSwitcher.astro -->
<script>
  function switchLanguage(lang) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|zh)/, '') || '/';
    window.location.href = `/${lang}${newPath}`;
  }
</script>

<div class="language-switcher">
  <button onclick="switchLanguage('en')">EN</button>
  <span>|</span>
  <button onclick="switchLanguage('zh')">中文</button>
</div>
```

### Considerations

**What to Translate:**
- ✅ All main pages (Home, About, Journey, Now, Projects, Life, Contact)
- ✅ Navigation and UI elements
- ✅ Journey chapters (full narrative)
- ✅ Featured project (Steplify)
- ⚠️ Writing/Progress posts (translate selectively - key posts only)

**What NOT to Translate:**
- Code snippets (keep in English)
- Technical terms (can keep English with Chinese explanation)
- External links (keep as-is)

**Translation Workflow:**
- Start with English content (primary)
- Translate to Chinese incrementally
- Mark incomplete translations (show "English only" badge)
- Don't block launch - ship English first, add Chinese over time

### Updated Project Structure

```
src/
├── pages/
│   ├── [lang]/              # Language-specific routes
│   │   ├── index.astro      # /en/ or /zh/
│   │   ├── about.astro
│   │   ├── journey.astro
│   │   └── ...
│   └── index.astro          # Redirects to /en/
├── components/
│   ├── LanguageSwitcher.astro  # NEW: Top-right switcher
│   └── ...
├── content/
│   ├── writing/
│   │   ├── en/
│   │   └── zh/
│   └── translations/
│       ├── en.json
│       └── zh.json
└── i18n/
    └── utils.ts             # Translation helper functions
```

### Phase Integration

**Phase 1 (Foundation):**
- [ ] Set up Astro i18n configuration
- [ ] Create LanguageSwitcher component
- [ ] Add to Navigation component (top-right)
- [ ] Create translation JSON files structure

**Phase 2+ (Content):**
- [ ] Translate UI strings first
- [ ] Translate main pages as they're built
- [ ] Add Chinese content incrementally

---

## 5. Content Management Strategy

### Writing/Progress Section
- **Format:** Markdown files in `src/content/writing/`
- **Naming:** `YYYY-MM-DD-slug.md`
- **Frontmatter:**
  ```yaml
  ---
  title: "Post Title"
  date: 2025-01-15
  type: "note" | "reflection" | "product-thought" | "ai-commentary" | "learning-log"
  draft: false
  ---
  ```
- **Workflow:** Just create a new markdown file, commit, push → auto-updates

### Journey Section
- **Format:** Markdown files or JSON data
- Each chapter is a card with:
  - Title
  - Content (markdown)
  - Optional image
- Displayed as scrollable cards (not timeline)

### Now Section
- **Format:** Single markdown file or data file
- Easy to update regularly
- Auto-timestamp on last update

### Projects
- **Format:** Individual pages or markdown files
- Featured project (Steplify) gets its own detailed page

---

## 6. Key Features & Components

### Navigation
- Simple, clean navigation bar
- Sticky or top-of-page
- Mobile hamburger menu
- Current page indicator
- **Language switcher (EN | 中文) in top-right corner**

### Home Page
- Hero section with:
  - Name + tagline
  - Subtext
  - 3 CTA buttons/links
- Maybe a preview of latest writing or "Now" section
- Minimal, impactful

### Journey Page
- Scrollable chapter cards
- Each card reveals on scroll
- Smooth transitions
- No dates visible (per PRD)

### Writing/Progress Page
- List view of all posts
- Filter by type (optional)
- Chronological (newest first)
- Preview cards with:
  - Title
  - Date
  - Excerpt
  - Type badge

### Now Page
- Two-column layout (Life | Work)
- Last updated timestamp
- Easy to edit and update

### Projects Page
- Featured project prominently displayed
- Future projects can be added easily

### Life Page
- Photo gallery or card-based layout
- Sections for: Fitness, Music, Reading, Busking
- Optional: Instagram-style grid or blog-style posts

### Contact Page
- Simple, centered layout
- Copy from PRD
- Social links (Email, LinkedIn, GitHub)
- Optional: Simple contact form (but PRD suggests email is fine)

---

## 7. Implementation Phases

### Phase 1: Foundation (Week 1)
**Goal:** Get basic structure and design system in place

- [ ] Set up Astro project
- [ ] Configure GitHub Pages deployment
- [ ] **Set up i18n (English/Chinese routing)**
- [ ] **Create LanguageSwitcher component**
- [ ] Create basic layout component
- [ ] Design system (colors, typography, spacing)
- [ ] Navigation component (with language switcher in top-right)
- [ ] Home page (hero + CTAs)
- [ ] Basic routing for all pages (with language support)

**Deliverable:** Site structure with placeholder content

---

### Phase 2: Core Pages (Week 2)
**Goal:** Build out main content pages

- [ ] About page (all 3 sections)
- [ ] Contact page (simple, clean)
- [ ] Now page (with timestamp functionality)
- [ ] Life page (basic structure)
- [ ] Projects page (intro + Steplify placeholder)

**Deliverable:** All main pages with real content from PRD

---

### Phase 3: Journey Page (Week 2-3)
**Goal:** Create the narrative-driven Journey section

- [ ] Design chapter card component
- [ ] Create scrollable card layout
- [ ] Write first 2-3 journey chapters
- [ ] Add smooth scroll animations
- [ ] Mobile optimization

**Deliverable:** Interactive Journey page with real story

---

### Phase 4: Writing/Progress System (Week 3-4)
**Goal:** Build the content engine

- [ ] Set up markdown processing
- [ ] Create writing listing page
- [ ] Individual post template
- [ ] Write 3-5 initial posts
- [ ] Add post type filtering (optional)
- [ ] RSS feed (optional but recommended)

**Deliverable:** Fully functional blog/writing section

---

### Phase 5: Projects Detail (Week 4)
**Goal:** Deep dive into Steplify story

- [ ] Design project detail page
- [ ] Write Steplify story (all sections from PRD)
- [ ] Add GitHub link integration
- [ ] Optional: Screenshots or diagrams

**Deliverable:** Complete Steplify project page

---

### Phase 6: Polish & Launch (Week 5)
**Goal:** Refine and deploy

- [ ] Mobile responsiveness check
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Analytics setup (optional)
- [ ] Final content review
- [ ] Deploy to production
- [ ] Test all links and pages

**Deliverable:** Live, polished website

---

## 8. Technical Implementation Details

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://tomwong001.github.io',
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },
  integrations: [
    // Markdown support, RSS, etc.
  ]
});
```

### Content Collections (Astro)
- Use Astro's content collections for type-safe markdown
- Schema validation for frontmatter
- Easy querying and filtering

### Deployment
- GitHub Actions for auto-deployment
- Push to main → auto-build → deploy to GitHub Pages
- Or use GitHub Pages with Jekyll (if using Jekyll)

### Performance
- Static generation = fast loads
- Image optimization (Astro's built-in)
- Minimal JavaScript (Astro is mostly static)
- Lazy loading for images

---

## 9. Content Strategy

### Initial Content
1. **Home:** Use PRD copy exactly
2. **About:** Write from PRD structure
3. **Journey:** Start with 3-5 chapters
4. **Now:** Update weekly/monthly
5. **Writing:** 3-5 initial posts to establish tone
6. **Projects:** Full Steplify story
7. **Life:** Start with 1-2 sections (fitness, music)

### Ongoing Content
- **Writing/Progress:** Aim for 1-2 posts per week
- **Now:** Update monthly or when focus changes
- **Journey:** Add chapters as story evolves
- **Projects:** Add new projects as they're built

---

## 10. Design Mockups (Conceptual)

### Home Page
```
┌─────────────────────────────────────┐
│  [Navigation]                       │
├─────────────────────────────────────┤
│                                     │
│         Hi, I'm Tom.                │
│  I build things — products,         │
│  systems, and a life I actually     │
│  want to live.                      │
│  This site is where I document      │
│  the process.                       │
│                                     │
│  AI, software, product design,      │
│  fitness, music, and honest         │
│  progress — in public.              │
│                                     │
│  [Start from beginning] [What I'm   │
│  working on now] [Latest notes]    │
│                                     │
└─────────────────────────────────────┘
```

### Journey Page
```
┌─────────────────────────────────────┐
│  [Navigation]                       │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Before I knew what I was    │   │
│  │ doing                        │   │
│  │ [Content...]                 │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ The first time I tried to   │   │
│  │ build something real        │   │
│  │ [Content...]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Scroll for more...]               │
│                                     │
└─────────────────────────────────────┘
```

---

## 11. Success Criteria

### Technical
- ✅ Site loads in < 2 seconds
- ✅ Mobile-responsive
- ✅ All pages accessible
- ✅ Easy to add new content (just create markdown file)

### Content
- ✅ All PRD sections implemented
- ✅ Tone matches PRD (professional, thoughtful, human)
- ✅ Initial content written and published

### User Experience
- ✅ Clear navigation
- ✅ Easy to find content
- ✅ Engaging but not overwhelming
- ✅ Feels "living" (updated content visible)

---

## 12. Next Steps

1. **Review this plan** - Adjust based on preferences
2. **Choose tech stack** - Confirm Astro or alternative
3. **Set up project** - Initialize repository structure
4. **Start Phase 1** - Build foundation
5. **Iterate** - Build, test, refine

---

## 13. Questions to Consider

1. **Language switcher:** ✅ Confirmed - EN/中文 in top-right
2. **Translation priority:** Which pages should be translated first? (Recommend: Home, About, Journey)
3. **Writing posts:** Translate all or selectively? (Recommend: Selective - key posts only)
4. **Do you want a contact form** or just email link?
5. **RSS feed** for Writing section? (Recommended for "building in public")
6. **Analytics?** (Google Analytics, Plausible, or none?)
7. **Comments system?** (Probably not per PRD, but consider)
8. **Search functionality?** (For Writing section as it grows)
9. **Dark mode?** (Nice-to-have, not essential)

---

## 14. Maintenance & Updates

### Weekly
- Add new Writing/Progress posts
- Update Now section if focus changes

### Monthly
- Review and refine content
- Add Journey chapters if story evolves
- Update Projects if new work completed

### Quarterly
- Design refresh (if needed)
- Performance audit
- Content archive review

---

**Ready to start building?** Let's begin with Phase 1!

