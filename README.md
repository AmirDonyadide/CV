# testcodex

Personal CV and portfolio website for Amirhossein Donyadidegan. The site is a
single-page, responsive static website built with plain HTML, CSS, and
JavaScript, designed for recruiters and hiring managers reviewing junior
geoinformatics, GIS, remote sensing, data analysis, and Python-development work.

## Files

- `index.html` contains the page content and semantic structure.
- `styles.css` contains the responsive visual design.
- `script.js` contains the mobile navigation, active section highlighting, and
  small interaction helpers.
- `assets/` contains local thematic imagery used by the portfolio.

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

## Content Notes

- No CV PDF exists in this repository yet, so the download button in the site is
  intentionally marked as a TODO placeholder.
- No certifications or awards were present in the provided CV master prompt, so
  none were invented.
- The current imagery is thematic NASA, NASA Earth Observatory, and NASA/USGS
  Landsat imagery. Replace it with personal or project-specific photos when
  those assets are available.

## Image Credits

- Earth at Night: NASA
- Venice, Italy: NASA Earth Observatory
- Mendenhall Glacier and South Florida: NASA/USGS Landsat imagery
