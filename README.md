# CV

Personal CV and portfolio website for Amirhossein Donyadidegan. The site is a
single-page, responsive static portfolio for junior GIS, geoinformatics, remote
sensing, Python, spatial data, and geospatial analyst roles.

## Features

- Recruiter-focused positioning for junior GIS and geospatial data roles.
- English, German, and Italian language switcher.
- Target roles and availability sections for fast recruiter scanning.
- Five flagship geospatial projects with recruiter-oriented summaries.
- Project filters for GIS, Python, remote sensing, machine learning, dashboards,
  and WebGIS.
- Compact technical skills grouped by hiring-relevant categories.
- Downloadable CV PDF at `assets/amirhossein-donyadidegan-cv.pdf`.
- PowerPoint-inspired visual theme using the thesis presentation palette and a
  local Manrope webfont.
- Static HTML, CSS, and JavaScript suitable for GitHub Pages.

## Files

- `index.html` contains the page content, semantic structure, SEO metadata, and
  recruiter-focused portfolio sections.
- `styles.css` contains the responsive visual design.
- `script.js` contains mobile navigation, active section highlighting,
  multilingual switching, and project filtering.
- `assets/` contains local imagery, logos, the webfont, and the downloadable CV.

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

- Theme, typography reference, and Politecnico di Milano photos: supplied thesis
  presentation.
- Font: Manrope, served locally from `assets/fonts/`.
- Earth at Night: NASA.
- Venice, Italy: NASA Earth Observatory.
- Mendenhall Glacier and South Florida: NASA/USGS Landsat imagery.
- Institutional logos: Politecnico di Milano from the supplied deck; University
  of Bonn, Karlsruhe Institute of Technology, and University of Tehran public
  logo files.
