# Copilot Instructions — dr.tombarclay.com

## Project Overview
Personal website for Dr. Tom Barclay, an astrophysicist and Operations Project Scientist for the Nancy Grace Roman Space Telescope at NASA Goddard Space Flight Center. Hosted on GitHub Pages at `dr.tombarclay.com`. Static HTML/CSS/JS site — no build system, no framework, no SSG. Push to `main` deploys.

## Architecture
- **Single page**: `index.html` is the only HTML file. Sections: Hero, Impact Stats Bar, Missions & Leadership (timeline), Publications (highlights + arXiv feed), About (bio + awards + core competencies), Contact (footer).
- **No dependencies**: Zero runtime dependencies. No jQuery, no frameworks, no icon libraries.
- **CSS**: `assets/css/main.css` — custom CSS using CSS custom properties, Grid, Flexbox. Navy/blue color palette (`--color-navy: #0B1D3A`, `--color-blue: #1070CA`).
- **Fonts**: Inter (body) + Roboto Slab (headings) loaded from Google Fonts.
- **Icons**: Inline SVGs (GitHub, LinkedIn, Email, Map pin). No icon font.

## Key Files
| File | Purpose |
|------|---------|
| `index.html` | All site content — semantic HTML5 (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`) |
| `assets/css/main.css` | Complete stylesheet with design tokens in `:root`, responsive breakpoints at 960px and 640px |
| `assets/js/writing.js` | Fetches recent papers from arXiv API (`export.arxiv.org`), filters to papers where "Barclay" is in the first 3 author positions, displays 3 most recent in `#recent-papers`. Uses `fetch()` and `DOMParser`. |
| `assets/js/main.js` | Vanilla JS IIFE: year auto-update, mobile nav toggle, scroll shadow on nav, smooth-scroll, calls `setupWriting()` |
| `files/CVBarclay.pdf` | Downloadable CV |
| `images/tom.jpg` | Hero portrait (circular crop via CSS) |
| `images/tomatkennedy.jpg` | About section photo |
| `CNAME` | Custom domain: `dr.tombarclay.com` |

## Conventions & Patterns
- **Section pattern**: `<section class="section {name}" id="{name}">` with `<div class="container">` inside.
- **Section titles**: `<h2 class="section-title">` with blue underline via `::after` pseudo-element.
- **Cards**: `.timeline-card`, `.pub-card`, `.research-card`, `.skill-card` — all use `border: 1px solid var(--color-border)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)` with hover elevation.
- **Stats bar**: `.stats-bar` with `.stats-grid` — navy background, centered flex layout with `.stat-number` + `.stat-label`.
- **Buttons**: `.btn .btn-primary` (solid blue) and `.btn .btn-outline` (bordered). Hero variants invert colors for dark background.
- **Colors**: Navy hero/footer, white/light-gray alternating sections. No salmon/coral.
- **Responsive**: Mobile-first, breakpoints at 960px (tablet) and 640px (mobile). Hamburger nav on mobile.
- **No analytics**: Google Analytics was removed. No tracking.
- **No consulting content**: Removed by design.
- **No Twitter/X**: Removed by design. Social links are GitHub and LinkedIn only.

## Content Notes
- Dr. Barclay is a **NASA civil servant** (since July 2023), NOT a contractor or UMBC employee.
- Title is **Operations Project Scientist** (not "Operations Scientist") for Roman.
- Missions: Roman (Operations Project Scientist), Pandora SmallSat (Deputy Project Scientist — launched Jan 11, 2026), ULTRASAT (Participating Scientist), TESS, Kepler/K2.
- 150+ refereed publications, 31,000+ citations.
- Awards: NASA Early Career Achievement Medal (2022), NASA Exceptional Public Service Medal (2017), ASD Peer Award (2019).
- `images/paintingoftom.png` exists but is not currently used — kept as an optional asset.
- The arXiv API call fetches 100 results and filters client-side. It can fail silently (shows "Unable to retrieve paper list.").
- Copyright year auto-updates via JS (`#year` span).

## Deployment
- GitHub Pages from `main` branch. `CNAME` file sets custom domain `dr.tombarclay.com`.
- No CI/CD pipeline. No build step. Files served as-is.
- Test by opening `index.html` locally in a browser. Verify arXiv feed loads (check console for CORS/network errors).
