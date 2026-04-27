# testcodex

Personal CV and portfolio website for Amirhossein Donyadidegan. The site is a
single-page, responsive static website built with plain HTML, CSS, and
JavaScript for recruiters and hiring managers reviewing junior geoinformatics,
GIS, remote sensing, data analysis, and Python-development work.

## Features

- Multilingual content switcher for English, German, and Italian.
- PowerPoint-inspired visual theme using the thesis presentation palette and a
  local Manrope webfont.
- Institutional logos for study and work sections.
- Project descriptions with direct GitHub repository links.
- Responsive, semantic, accessible static HTML suitable for GitHub Pages.

## Files

- `index.html` contains the page content and semantic structure.
- `styles.css` contains the responsive visual design.
- `script.js` contains mobile navigation, active section highlighting, and
  language switching.
- `assets/` contains local imagery, logos, and the local webfont.

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
- The Naghsheh Gostaran Fartak Co. logo is intentionally marked as a TODO
  placeholder because no verified official logo file was provided.
- The Politecnico di Milano logo was taken from the supplied thesis
  presentation. Other institutional logo files are stored locally in
  `assets/logos/`.

## Asset Credits

- Theme, typography reference, and Politecnico di Milano photos: supplied
  thesis presentation.
- Font: Manrope, served locally from `assets/fonts/`.
- Earth at Night: NASA.
- Venice, Italy: NASA Earth Observatory.
- Mendenhall Glacier and South Florida: NASA/USGS Landsat imagery.
- Institutional logos: Politecnico di Milano from the supplied deck; University
  of Bonn, Karlsruhe Institute of Technology, and University of Tehran public
  logo files.
