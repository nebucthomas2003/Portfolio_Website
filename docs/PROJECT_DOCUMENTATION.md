# Portfolio Website — Project Documentation

**Project:** Nebu Chirackal Thomas — Personal Portfolio (v2)
**Author:** Nebu Chirackal Thomas
**Repository:** `Portfolio_Website`
**Live URL:** nebucthomas2003.github.io/Portfolio_Website
**Document version:** 1.0
**Last updated:** August 2026

---

## 1. Project Overview

### 1.1 Purpose

Replace a 3-year-old static portfolio site with a modern, minimal, animated single-application
portfolio that accurately reflects current education, experience, skills, and career goals — built
to a standard consistent with how a professional software team would plan, design, and ship a small
web product.

### 1.2 Objectives

- Present an accurate, up-to-date professional profile (education, experience, skills, publication)
- Communicate three career signals clearly: currently building (Folio/Graphia), recent experience
  (Mavano, Infosys), and forward direction (MSc in Germany, target roles)
- Achieve a distinctive, professional minimal visual identity — not a generic template
- Be fully responsive and safe across devices, screen sizes, and reduced-motion preferences
- Ship as a static site deployable to GitHub Pages with no backend dependency

### 1.3 Scope

**In scope:** Home, Experience, Contact pages; navigation; animation system; content sourced from
the owner's real profile; deployment-ready static build.

**Out of scope (v1):** CMS/backend, blog, project case-study pages beyond what's on Experience,
analytics, contact form backend (email/WhatsApp/LinkedIn links used instead of a form).

### 1.4 Stakeholders

| Role | Owner |
|---|---|
| Product owner / end user | Nebu Chirackal Thomas |
| Design & engineering | Nebu Chirackal Thomas (with AI pair-programming assistance) |
| Hosting | GitHub Pages (free static hosting) |

---

## 2. SDLC Methodology

A compressed **3-day Agile-style sprint** was used — appropriate for a small, single-owner static
site where requirements are well understood and there's no multi-team coordination overhead. Each
day maps to a classic SDLC phase, ending with a working, reviewable increment rather than a single
big-bang delivery at the end.

| Day | Phase | Goal | Exit criteria |
|---|---|---|---|
| **Day 1** | Planning & Requirements | Define scope, content, information architecture, tech stack | Signed-off requirements + sitemap |
| **Day 2** | Design | Visual identity, design system, component/page layout | Approved design direction (tokens, typography, layout) |
| **Day 3** | Development, Testing & Deployment | Build, verify, ship | Type-checked, built, deployed static site |

This mirrors a standard **Plan → Design → Build/Test/Release** lifecycle, compressed into a single
sprint instead of spread across multi-week phases, which is standard practice for small, well-scoped
products with one decision-maker.

---

## 3. Day 1 — Planning & Requirements

### 3.1 Requirements Gathering

Requirements were gathered directly from the project owner through structured Q&A covering:

- Current site audit (what existed, what was outdated)
- Desired page structure and navigation
- Content to feature on each page (identity, skills, experience, education, contact channels)
- Visual direction (minimal, professional, one accent color)
- Tech stack preference

### 3.2 Functional Requirements

| ID | Requirement |
|---|---|
| FR-1 | Site must have three routed pages: Home, Experience, Contact |
| FR-2 | Home must show name, role, location, short bio, skills, current/experience/future status, and CTA buttons (Hire me, Résumé download, GitHub, LinkedIn) |
| FR-3 | Home must show a photo (with graceful fallback if not yet supplied) |
| FR-4 | Experience page must show, in order: work experience (Graphia, Mavano, Infosys), education (with extracurricular roles), leadership, certifications, languages, publication |
| FR-5 | Contact page must provide direct-action links for Email, WhatsApp, LinkedIn, and both Instagram accounts |
| FR-6 | Navigation must be usable on both desktop and mobile (collapsible menu) |
| FR-7 | Publication entry must link out to the paper's DOI |
| FR-8 | Mavano experience entry must link to the live site (mavanosportsacademy.com) |

### 3.3 Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-1 | Fully responsive from ~320px mobile width up through desktop |
| NFR-2 | All animation must respect `prefers-reduced-motion` for accessibility |
| NFR-3 | Site must build to static assets deployable on GitHub Pages (no server required) |
| NFR-4 | TypeScript strict type-checking must pass with zero errors before every release |
| NFR-5 | No tracking/ads; no third-party data collection |
| NFR-6 | Content must be centralized in one data file for easy non-visual editing |

### 3.4 Information Architecture (Sitemap)

```
/                  → Home        (identity, bio, skills, status, CTAs)
/experience        → Experience  (work history, education, leadership,
                                   certifications, languages, publication)
/contact           → Contact     (email, WhatsApp, LinkedIn, Instagram ×2)
```

Routing uses `HashRouter` specifically so page refreshes and direct links work correctly on GitHub
Pages' static hosting (which has no server-side rewrite rules for client-side routes).

### 3.5 Content Inventory

Content was sourced entirely from the owner's real, current professional details:

- **Identity:** Nebu Chirackal Thomas, Software Developer, Pathanamthitta, Kerala, India
- **Education:** B.E. Computer Science and Engineering, Mahendra Engineering College, Tamil Nadu —
  First Class with Distinction (8.60 CGPA), completed March 2025
- **Experience:** Founder & Developer at Graphia (Folio project); Freelance Developer at Mavano
  Sports Academy (Jan–Apr 2026); AI Intern at Infosys Springboard (May–Jul 2024)
- **Leadership/roles:** Red Hat Academy Student Ambassador (3 years, Top 5 Nationwide), Web
  Development Lead (Coders Club), English Club Vice President, hackathon runner-up
- **Certification:** AWS Academy Cloud Foundations
- **Publication:** IEEE paper, ICSCDS 2025, "Long Short-Term Memory Networks for Text Summarization
  using NLP and ML"
- **Languages:** English (IELTS 7.0), German (A2–B1)
- **Skills:** Java, Python, HTML/CSS, React, MySQL, AWS, Azure, Linux, JavaScript, Node.js, Machine
  Learning, RAG, NLP, Git, Cloud, Docker, Infrastructure

### 3.6 Tech Stack Decision

| Decision | Choice | Reasoning |
|---|---|---|
| Framework | React 18 + TypeScript | Requested by owner; strong typing catches content/prop errors early |
| Build tool | Vite | Fast dev server, minimal config, industry-standard for modern static React apps |
| Routing | react-router-dom (HashRouter) | Client-side routing that works on GitHub Pages without server config |
| Styling | Plain CSS with CSS custom properties (design tokens) | No framework lock-in, full control over a distinctive minimal design, small bundle |
| Animation | Native CSS keyframes + IntersectionObserver | No animation library dependency; keeps bundle small; full control over reduced-motion handling |
| Hosting | GitHub Pages | Free, matches existing repo, static-only is sufficient for scope |
| Fonts | Google Fonts (Instrument Serif, Inter, JetBrains Mono, Sacramento) | Distinctive editorial/technical pairing rather than default system fonts |

---

## 4. Day 2 — Design

### 4.1 Design Direction

**Concept:** A paper-white, professional minimal identity with one navy accent color, styled with a
quiet "software engineer's file system" motif — section labels formatted like file paths
(`~/nebu/skills.json`) — as a signature detail that reflects the owner's technical background without
resorting to a literal dark-terminal theme.

### 4.2 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#faf9f6` | Page background |
| `--paper-alt` | `#f1f0ea` | Card/section backgrounds |
| `--ink` | `#14171a` | Primary text |
| `--muted` | `#6b7178` | Secondary text |
| `--line` | `#e2e1d9` | Borders, dividers |
| `--accent` | `#16305c` | Navy accent — links, highlights, key phrases, CTAs |
| `--accent-soft` | `#eef1f6` | Accent-tinted backgrounds (hover states) |

### 4.3 Typography System

| Role | Font | Used for |
|---|---|---|
| Display | Instrument Serif | Name, page headings, quote statement |
| Body | Inter | Paragraphs, bio, descriptions |
| Mono | JetBrains Mono | Section labels (file-path style), tags, meta info |
| Signature | Sacramento | "Portfolio" wordmark in the nav bar |

### 4.4 Layout System

- Fixed, translucent (blurred) top navigation bar, sticky across all pages
- Centered single-column content, max-width 900px, generous whitespace (`clamp()`-based gutters for
  fluid responsiveness)
- Hero: text + circular photo side-by-side on desktop, stacked on mobile
- Card-based layout for Experience entries and Contact channels
- Horizontal auto-scrolling marquee for the skills list

### 4.5 Motion Design

| Element | Motion | Purpose |
|---|---|---|
| Ambient background | Three blurred navy/ink blobs drifting slowly + two faint animated line paths | Adds a sense of life to the white background without competing with content |
| Section reveal | Fade + translateY on scroll into view, reversing on scroll out (via `IntersectionObserver`) | Directional, responsive scroll storytelling |
| Nav links | Pill-shaped background scale-in + underline on hover | Clear, tactile interaction feedback |
| Photo | Slow vertical bounce loop | Friendly, human touch echoing the previous site's photo treatment |
| Terminal tagline | Typewriter reveal of `whoami` + blinking cursor | Reinforces the developer/file-system motif |
| Status dot | Slow pulse | Small "live" signal next to the role/location eyebrow |

All motion is disabled under `prefers-reduced-motion: reduce` per NFR-2.

### 4.6 Component Inventory

| Component | Responsibility |
|---|---|
| `Nav` | Top navigation bar, brand mark, mobile menu |
| `Aurora` | Ambient animated background (blobs + lines) |
| `Reveal` | Reusable scroll-triggered show/hide wrapper |
| `Button` | Primary/ghost CTA buttons |
| `Tag` | Skill/tech chip |
| `Home`, `Experience`, `Contact` | Page-level views |

---

## 5. Day 3 — Development, Testing & Deployment

### 5.1 Development Approach

- Project scaffolded with `npm create vite@latest -- --template react-ts`
- Content centralized in a single `src/data/content.ts` file — all page components import from
  here, so factual updates (skills, roles, links) never require touching layout code
- Component-first build order: design tokens → layout shell → nav → reusable components (Button,
  Tag, Reveal) → pages (Home → Experience → Contact)

### 5.2 Tools Used

| Tool | Purpose |
|---|---|
| Vite | Dev server, bundler, production build |
| TypeScript compiler (`tsc`) | Static type-checking |
| npm | Package management |
| React Router DOM | Client-side routing |
| Google Fonts | Typography delivery |
| Git / GitHub | Version control and hosting (GitHub Pages) |

### 5.3 Testing & QA

| Check | Method | Result |
|---|---|---|
| Type safety | `npx tsc --noEmit` | Zero errors |
| Production build | `npm run build` | Successful static build, no warnings |
| Responsive layout | Manual review at mobile/tablet/desktop breakpoints | Nav collapses to mobile menu below 720px; hero stacks below 640px |
| Reduced motion | CSS media query audit | All animations gated behind `prefers-reduced-motion` |
| Broken-link check | Manual review of all external hrefs (GitHub, LinkedIn, Instagram ×2, DOI, Mavano site) | All links verified against real, current URLs |
| Placeholder handling | Manual test with missing image assets | Photo and certificate images fall back to a labeled placeholder box instead of a broken-image icon |

### 5.4 Deployment

**Target:** GitHub Pages, serving the existing `Portfolio_Website` repository.

```bash
# 1. Install dependencies
npm install

# 2. Production build
npm run build
# outputs static assets to /dist

# 3. Deploy /dist to the GitHub Pages branch
#    (e.g. via gh-pages package, or manually pushing /dist
#    contents to the gh-pages branch / Pages source folder)
```

`HashRouter` is used deliberately so that direct navigation to `/#/experience` or `/#/contact`
resolves correctly on GitHub Pages, which has no server-side route rewriting.

### 5.5 Post-Launch Checklist (owner action items)

- [ ] Add real headshot to `public/assets/photo.jpg`
- [ ] Add résumé PDF to `public/assets/resume.pdf`
- [ ] Add Infosys internship certificate image to `public/assets/infosys-certificate.jpg`
- [ ] Verify all external links after deployment (GitHub, LinkedIn, Instagram, DOI, Mavano site)
- [ ] Set custom domain / confirm GitHub Pages URL is correct in repo settings, if applicable

---

## 6. Maintenance & Future Roadmap

| Area | Notes |
|---|---|
| Content updates | Edit `src/data/content.ts` only — no component changes needed for new skills, roles, or experience entries |
| Fonts | Centralized as CSS variables (`--font-display`, `--font-body`, `--font-mono`) in `src/index.css`; swap once, applies site-wide |
| Design system | Colors/spacing centralized as CSS custom properties in `src/index.css` |
| Future scope (v2 candidates) | Dedicated project case-study pages, dark mode, blog/notes section, contact form with backend |

---

## 7. Appendix — File Structure

```
portfolio/
├── docs/
│   └── PROJECT_DOCUMENTATION.md
├── public/
│   ├── assets/            (photo, résumé, certificate — owner-supplied)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.tsx / Nav.css
│   │   ├── Aurora.tsx / Aurora.css
│   │   ├── Reveal.tsx / Reveal.css
│   │   ├── Button.tsx / Button.css
│   │   └── Tag.tsx / Tag.css
│   ├── data/
│   │   └── content.ts      (single source of truth for all page content)
│   ├── pages/
│   │   ├── Home.tsx / Home.css
│   │   ├── Experience.tsx / Experience.css
│   │   └── Contact.tsx / Contact.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           (design tokens + global styles)
├── index.html
├── package.json
└── tsconfig.json
```
