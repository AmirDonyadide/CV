# Spatial Systems Portfolio

Personal CV and portfolio website for Amirhossein Donyadidegan, positioned as a
Geospatial Data & Software Engineer. The current implementation slice contains
the approved cinematic Hero, navigation, “What I Build” workflow, Selected Work,
an editorial Additional Work index, an evidence-led career and education trajectory,
a verified Technical Stack, a calm Contact finale, a recruiter-first Quick CV,
and flagship project case studies.

## Features

- Cinematic Hero that moves from a coordinate through spatial data, modelling,
  and a usable software system.
- Continuous “What I Build” workflow connecting spatial information, data and
  intelligence, and software systems without a card grid.
- Scroll-driven Selected Work sequence with real project artifacts and technical
  summaries for NL2MAP, SE4G, and landslide susceptibility mapping.
- Dedicated case studies at `/projects/nl2map`, `/projects/se4g`, and
  `/projects/landslide`, with route-specific metadata and direct static-host entry pages.
- Scroll-linked Experience timeline with a semantic mobile fallback and SAFE as
  the newest/current role.
- Geographic Journey section connecting verified education in Tehran and Milan
  with MSc exchange study in Karlsruhe and Bonn—without campus photography.
- Editorial Additional Work index for LandsatToolkit, LayerAlterator, PoliYoga,
  and verified computer-vision coursework, using conceptual workflow diagrams
  instead of generic project imagery.
- Typography-led Technical Stack grouped into Programming, Geospatial, Data / ML,
  Web, and Engineering, with project-based evidence notes instead of logos.
- Minimal Contact finale with direct email, LinkedIn, GitHub, and CV actions.
- Static, recruiter-first Quick CV at `/cv`, with the current SAFE role, full
  experience timeline, education, core technologies, selected projects, and contact details.
- English, German, and Italian language switcher.
- Shareable localized routes: English at the existing URLs, German under `/de/`,
  and Italian under `/it/`, with language switching that preserves scroll and UI state.
- Route-specific titles, descriptions, canonicals, OpenGraph/Twitter metadata,
  `hreflang` alternates, JSON-LD, sitemap, and robots output for every localized page.
- Downloadable CV PDF at `assets/amirhossein-donyadidegan-cv.pdf`.
- Locally served Geologica and Manrope webfonts.
- Inline critical global styles, local font preloads, and route-specific chunk
  hints for faster first rendering without third-party requests.
- Deferred GSAP loading: the Hero starts after first-paint idle time or immediate
  user intent, while later timelines initialize only near their sections.
- Responsive 640/800/full-size WebP project evidence with fixed dimensions and
  intersection-based homepage loading; source PNG files remain available as fallbacks.
- Accessible mobile navigation, visible keyboard focus, semantic headings, and
  static reduced-motion alternatives for both implemented sections.

## Files

- `index.html` contains the Vite entry point, SEO metadata, structured data, and
  a no-script Hero fallback.
- `src/sections/Hero/` contains the navigation, SVG scene, and GSAP timeline.
- `src/sections/WhatIBuild/` contains the semantic capability workflow,
  responsive SVG compositions, and lighter scroll timeline.
- `src/sections/SelectedWork/` contains the flagship homepage sequence.
- `src/sections/ProjectCaseStudy/` contains localized, data-driven case-study pages,
  real evidence galleries, and restrained reveal motion.
- `src/sections/Experience/` contains the localized experience data, SVG career
  trajectory, and responsive GSAP timeline.
- `src/sections/Journey/` contains the localized education data, abstract SVG
  route, and lightweight responsive journey motion.
- `src/sections/AdditionalWork/` contains localized secondary-project data,
  editorial index rows, and code-native workflow previews.
- `src/sections/TechnicalStack/` contains the localized, evidence-led skill index.
- `src/sections/Contact/` contains the calm final contact composition.
- `src/sections/QuickCV/` contains the no-animation, recruiter-focused CV route.
- `src/data/contact.ts` is the canonical source for public contact and CV links.
- `src/i18n/routing.ts` owns locale-aware URLs and localized route parsing.
- `src/seo/` contains shared localized metadata, language alternates, and runtime SEO updates.
- `src/motion/` contains the shared deferred-activation and lazy GSAP runtime helpers.
- `src/components/ResponsiveEvidenceImage.tsx` owns responsive project-image
  selection and optional near-viewport loading.
- `src/styles/global.css` contains shared tokens, fonts, and accessibility rules.
- `assets/` contains local webfonts, the downloadable CV, and repository-sourced
  project evidence. Evidence provenance is documented in
  `assets/projects/evidence/SOURCES.md`.

## Run Locally

Install dependencies and start Vite:

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run check
```

`npm run check` runs the TypeScript-aware lint gate, type-check, and production build.

## Deploy With GitHub Pages

The workflow in `.github/workflows/pages.yml` installs the locked dependencies,
runs the complete quality gate, builds the static route matrix, uploads `dist/`,
and deploys it through the official GitHub Pages actions. The artifact includes
the custom-domain `CNAME`, `.nojekyll`, local fonts, and the downloadable CV PDF.

In GitHub, enable Pages with:

Settings → Pages → Build and deployment → Source: GitHub Actions

Pushing `main` or starting the workflow manually deploys only after linting,
type-checking, and the production build pass. Deep routes are emitted as static
`index.html` files, and unknown paths are handled by the generated `404.html`.

## Current Scope

The approved Hero/navigation, “What I Build,” Selected Work, Additional Work,
Experience, Journey, Technical Stack, Contact, Quick CV, and three flagship
case-study pages are implemented in React.
