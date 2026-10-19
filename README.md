# vyivrain.github.io

Personal site of Oleksandr Verhun. Plain HTML/CSS, no build step.

- `index.html` — all content
- `style.css` — design tokens at the top (colors, fonts); dark mode follows the OS
- `script.js` — assembles the email link at runtime (anti-scraper), footer year, and sidebar section highlight
- `fonts/` — self-hosted Newsreader (variable) and IBM Plex Mono, latin subset; no external requests
- `Oleksandr-Verhun-CV.pdf` — replace this file to update the downloadable CV

Preview locally: `python3 -m http.server 8765` → http://localhost:8765

Deploy: push to `main` of the `vyivrain/vyivrain.github.io` repo; GitHub Pages serves it at https://vyivrain.github.io
