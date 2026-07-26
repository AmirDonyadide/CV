# Ground / Orbit Portfolio Website

Personal CV and portfolio website for Amirhossein Donyadidegan. The site is a
single-page, responsive static portfolio for GIS, geoinformatics, remote
sensing, Python, spatial data, software, data, and web roles.

## Features

- Recruiter-focused hierarchy with the profile, selected work, experience,
  capabilities, education, and contact details in one page.
- English, German, and Italian language switcher.
- Persistent dark mode with system-preference and saved-state support.
- "Ground / Orbit" hero using supplied Politecnico and Earth-observation imagery.
- Six evidence-led projects with real project imagery, summaries, technology
  signals, and GitHub links.
- Chronological experience log and four-layer technical capability stack.
- Politecnico panorama with MSc, exchange, thesis, and BSc evidence.
- Downloadable CV PDF at `assets/amirhossein-donyadidegan-cv.pdf`.
- Locally served Manrope webfont and optimized WebP display assets.
- Accessible mobile navigation, visible keyboard focus, reduced-motion support,
  semantic headings, and 44 px minimum touch targets.
- Static HTML, CSS, and JavaScript suitable for GitHub Pages.

## Files

- `index.html` contains the page content, semantic structure, SEO metadata, and
  recruiter-focused portfolio sections.
- `styles.css` contains the responsive visual design.
- `script.js` contains mobile navigation, active section highlighting,
  multilingual switching, and theme persistence.
- `assets/` contains the supplied source imagery, optimized display imagery,
  logos, the webfont, and the downloadable CV.

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.
For a local server that behaves more like GitHub Pages, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy With GitHub Pages

This repository is prepared to deploy from the root of the `main` branch.

In GitHub, enable Pages with:

Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /root

After GitHub Pages finishes building, the site will be available at the Pages
URL shown in the repository settings.

## Asset Credits

- Politecnico di Milano photos: supplied thesis presentation.
- Font: Manrope, served locally from `assets/fonts/`.
- Earth at Night: NASA.
- Venice, Italy: NASA Earth Observatory.
- Mendenhall Glacier and South Florida: NASA/USGS Landsat imagery.
- Institutional logos: Politecnico di Milano from the supplied deck; University
  of Bonn, Karlsruhe Institute of Technology, and University of Tehran public
  logo files.
- Project thumbnails: locally composed from available thesis outputs and local
  geospatial imagery to support recruiter scanning.
