# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal/lab website for JNiimiLab (名城大学 新美研究室), hosted on GitHub Pages at **https://jniimilab.ai**. Static site with no build system, framework, or package manager.

## Development

```bash
# Local preview — any static HTTP server works
python -m http.server 8000
```

No build step, no linting, no tests. Changes pushed to `main` are deployed automatically by GitHub Pages.

## Architecture

- **Pure static site**: HTML + CSS + vanilla JS. No bundler, no templating engine.
- **Single shared stylesheet**: `style.css` is used by all pages.
- **Pages**: `index.html` (top/profile), `research.html` (publications), `education.html` (teaching), `seminar.html` (seminar info). All share the same `<nav>` markup (no shared component — must be updated in each file manually).
- **index.html** uses full-viewport scroll-snap sections with CSS `scroll-snap-type: y mandatory`. Subpages use a simpler scrollable `.content` layout.
- **`rss.js`**: Fetches note.com RSS via rss2json API and renders into `#rss-feed` on the top page.
- **`theme-toggle.js`**: Dark/light theme toggle (currently not wired into any page).
- **Custom domain**: `CNAME` file contains `jniimilab.ai`.

## Conventions

- Language: HTML content is primarily in Japanese. Section headings and metadata use English.
- Fonts: Google Fonts — Cormorant Garamond, Great Vibes (hero title), Share Tech Mono (section headings).
- Color scheme: Dark base (`#181c25` background, `#f0f1f5` text). Accent colors: `#c15f3c` (research section), `#8b7ec8` (timeline dots), `#EE7674` (links in dark sections).
- Responsive: Mobile breakpoint at 768px via `@media` queries.
- Images: `img/` for photos/backgrounds, `icons/` for social brand icons (SuperTinyIcons).
- OG/Twitter meta tags are set per page — update them when changing page URLs or content.
