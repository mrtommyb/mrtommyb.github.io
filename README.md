# Dr. Thomas Barclay — Personal Website

Professional website for Dr. Thomas Barclay, astrophysicist and technical leader at NASA Goddard Space Flight Center.

## About

This site showcases my work across five NASA space missions, open-source software contributions, and 150+ peer-reviewed publications in astrophysics and space science.

**Key sections:**
- **Missions & Leadership**: 15+ years leading NASA flight missions from Kepler/K2 through TESS to Roman Space Telescope
- **Open Source Software**: Python packages used by thousands of researchers including Lightkurve, Pandora flight planning tools, and Kepler/K2 community software
- **Publications**: Selected papers in signal detection, statistical modeling, and exoplanet discovery
- **About**: Background, awards, core competencies, and future research interests

## Tech Stack

- **Frontend**: Semantic HTML5, modern CSS with CSS Grid and custom properties
- **Design**: Custom navy/blue professional theme with Roboto Slab + Inter typography
- **JavaScript**: Vanilla ES5 for progressive enhancement
- **Hosting**: GitHub Pages
- **Domain**: Custom domain via CNAME (dr.tombarclay.com)

## Structure

```
.
├── index.html              # Main single-page site
├── assets/
│   ├── css/main.css        # All styles (CSS custom properties, responsive)
│   └── js/main.js          # Interactions (nav toggle, smooth scroll)
├── files/
│   └── CVBarclay.pdf       # Full curriculum vitae
├── images/                 # Profile photos and assets
└── CNAME                   # Custom domain configuration
```

## Features

- Fully responsive design (mobile-first)
- Accessible navigation with keyboard support
- Smooth scrolling and progressive enhancement
- Fixed navigation with scroll-triggered shadow
- Stats bar with key metrics (15+ years, 150+ pubs, 31k+ citations)
- Timeline-based mission history
- Software cards with GitHub links
- Publication highlights with ADS links
- Schema.org structured data for rich snippets

## Local Development

Simply open `index.html` in a browser, or use any static server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

## License

© 2026 Thomas Barclay. All rights reserved.

Content and design are copyright. Please do not reproduce without permission.