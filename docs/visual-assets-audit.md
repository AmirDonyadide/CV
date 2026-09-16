# Visual asset audit and implementation record

Audit taken before implementation, 2026-09-16. Scope: all repository files, including hidden files, excluding dependency trees, Git internals and generated dist copies. Asset searches covered img/picture/source/SVG image elements, CSS URLs and backgroundImage, imported files, project copy/data, HTML metadata and Vite's static copying. No public/ or src/assets/ directories, CMS, external raster URLs, or visible OpenGraph images exist. All 31 raster files are in assets/projects/evidence/. The nine families were opened and visually inspected. Responsive copies contain the same artwork.

## Existing design system

| Token / convention | Observed value |
|---|---|
| Canvas / raised surface | --graphite #0b0d0f / --graphite-raised #13171a |
| Foreground | --paper #f2f4f3 |
| Muted / quiet | --muted #8d969d / --quiet #727b82 |
| Border | --hairline #293137; section-specific gray variations |
| Accent / focus | --accent #45bfe6 / --focus #8adfff |
| Fonts | Manrope body; Geologica headings; ui-monospace, SFMono-Regular, Cascadia Mono metadata |
| Sizes | Body ~0.82–1rem; metadata ~0.58–0.78rem; fluid Geologica headings |
| Corners | Square panels; circular nodes only; no rounded-card system |
| Spacing | 0.5 / 0.75 / 1 / 1.25 / 1.5 / 2rem; fluid 2–4.75rem desktop page gutters, 1rem mobile |
| Lines / opacity | 1px borders; SVG 0.7–1.35 strokes (accent occasionally 1.8); grid rgba(122,139,149,0.035) |
| Grid | CSS horizontal/vertical linear gradients, 5rem spacing; section-edge masks |
| Motion | Deferred GSAP, scroll-linked desktop scene changes, stacked mobile, global reduced-motion overrides |
| Responsive | Selected Work switches to stacked at 1099px; detailed case layouts at 799px; further small-phone handling |

React 19 + Vite + CSS modules, no Tailwind, shadcn or visualization library. Existing HeroStage, WhatIBuildVisual, ProjectVisuals, AdditionalWorkVisual, ExperiencePath and JourneyRoute are code-native SVG/CSS, not raster assets. Additional Work's four projects already use conceptual diagrams and need no replacement. CV, contact, stack and 404 have no raster visuals. The CV PDF is a download, not a frontend image. Inline SVG favicon is excluded.

## Classification and information strategy

A = keep raster, B = rebuild, C = hybrid, D = decorative/redundant. Each file has one classification. The scientifically meaningful layers inside C remain raster; no complete asset family falls into A because each currently includes foreign presentation.

| Family | Content / light regions / theme conflict | Recoverability and decision |
|---|---|---|
| NL2MAP input | Gray building footprints on white 0–400m plotting canvas; severe light-background conflict | B: actual GeoJSON recovered from the already documented source commit. Render polygons, not traced or invented outlines. |
| NL2MAP generalized | Corresponding simplified footprints, same plotting canvas | B: actual generalized GeoJSON; same extent and orientation as input. |
| SE4G dashboard | Blue header/footer, white controls, satellite map, sport/venue table, indicator table and donut; severe chrome conflict | C: rebuild selectable HTML labels, accurate table and SVG chart from readable counts (778 low / 36 medium / 36 high flood-risk buildings); crop original satellite content, retain attribution separately. Do not invent map geometry or other city states. |
| Landslide DTM | Detailed colored terrain, red study-area outline, black exterior, white legend | C: keep data, mask only legend footprint, move title, range 33–3,948 and study-area key into native HTML. |
| Landslide NDVI | Detailed vegetation raster and red study-area outline, white legend | C: retain raster and original scientific palette; native range −0.985611–0.997303. |
| Landslide slope | Five-color classified raster, red outline, white legend | C: preserve color encoding; native classes <5, 5–10, 10–15, 15–20, >20. Do not infer units absent from the image. |
| Landslide confidence | Grayscale classification confidence with red boundary, white legend | C: retain grayscale data, native range 51–100 (white to black as source). |
| Landslide reclassified | Coarse four-class output, white legend partly adjoining data edge | C: preserve all data pixels; carefully isolate legend without erasing adjoining cells; native classes 0–25, 25–50, 50–75, 75–100. |
| Landslide susceptibility | Detailed blue/yellow/red output, white legend | C: retain full result, range 0–100 and study-area boundary; source colors have meaning. |

## Complete file inventory (before edits)

All paths below are relative to assets/projects/evidence/. Home means /, /de/, /it/. Case study means /projects/{slug}, /de/projects/{slug}, /it/projects/{slug}.

Before changes: Home uses SelectedWork/ProjectVisuals.tsx. Case-study heroes use ProjectCaseStudy/CaseStudyHeroMedia.tsx; gallery uses ProjectCaseStudy.tsx; URLs and responsive variants live in projectCaseStudy.copy.ts. All render through ResponsiveEvidenceImage.tsx. DTM and final susceptibility appear in hero and gallery; NDVI/slope/confidence/reclassified appear in gallery only. Both NL2MAP maps and SE4G dashboard appear in hero and gallery.

| File | Dimensions / ratio | Format | KiB | Placement | Class | Family |
|---|---|---|---:|---|---|---|
| `landslide-confidence-640.webp` | 640 × 640 (1.000:1) | WebP | 81.3 | Landslide case study | C | `landslide-confidence.webp` |
| `landslide-confidence-800.webp` | 800 × 800 (1.000:1) | WebP | 117.3 | Landslide case study | C | `landslide-confidence.webp` |
| `landslide-confidence.webp` | 1080 × 1080 (1.000:1) | WebP | 183.0 | Landslide case study | C | `landslide-confidence.webp` |
| `landslide-dtm-1000.webp` | 1000 × 1000 (1.000:1) | WebP | 139.5 | Home + Landslide case study | C | `landslide-dtm.webp` |
| `landslide-dtm-640.webp` | 640 × 640 (1.000:1) | WebP | 62.8 | Home + Landslide case study | C | `landslide-dtm.webp` |
| `landslide-dtm-800.webp` | 800 × 800 (1.000:1) | WebP | 94.7 | Home + Landslide case study | C | `landslide-dtm.webp` |
| `landslide-dtm.png` | 1000 × 1000 (1.000:1) | PNG | 907.6 | Home + Landslide case study | C | `landslide-dtm.webp` |
| `landslide-ndvi-640.webp` | 640 × 640 (1.000:1) | WebP | 112.5 | Landslide case study | C | `landslide-ndvi.webp` |
| `landslide-ndvi-800.webp` | 800 × 800 (1.000:1) | WebP | 161.7 | Landslide case study | C | `landslide-ndvi.webp` |
| `landslide-ndvi.webp` | 1080 × 1080 (1.000:1) | WebP | 237.0 | Landslide case study | C | `landslide-ndvi.webp` |
| `landslide-reclassified-640.webp` | 640 × 640 (1.000:1) | WebP | 62.0 | Landslide case study | C | `landslide-reclassified.webp` |
| `landslide-reclassified-800.webp` | 800 × 800 (1.000:1) | WebP | 80.5 | Landslide case study | C | `landslide-reclassified.webp` |
| `landslide-reclassified.webp` | 1080 × 1080 (1.000:1) | WebP | 90.6 | Landslide case study | C | `landslide-reclassified.webp` |
| `landslide-slope-640.webp` | 640 × 640 (1.000:1) | WebP | 85.4 | Landslide case study | C | `landslide-slope.webp` |
| `landslide-slope-800.webp` | 800 × 800 (1.000:1) | WebP | 119.9 | Landslide case study | C | `landslide-slope.webp` |
| `landslide-slope.webp` | 1080 × 1080 (1.000:1) | WebP | 179.4 | Landslide case study | C | `landslide-slope.webp` |
| `landslide-susceptibility-1000.webp` | 1000 × 1000 (1.000:1) | WebP | 221.8 | Home + Landslide case study | C | `landslide-susceptibility.webp` |
| `landslide-susceptibility-640.webp` | 640 × 640 (1.000:1) | WebP | 81.2 | Home + Landslide case study | C | `landslide-susceptibility.webp` |
| `landslide-susceptibility-800.webp` | 800 × 800 (1.000:1) | WebP | 132.0 | Home + Landslide case study | C | `landslide-susceptibility.webp` |
| `landslide-susceptibility.png` | 1000 × 1000 (1.000:1) | PNG | 1049.4 | Home + Landslide case study | C | `landslide-susceptibility.webp` |
| `nl2map-generalized-1069-1000.webp` | 1000 × 912 (1.096:1) | WebP | 76.5 | Home + NL2MAP case study | B | `nl2map-generalized-1069.webp` |
| `nl2map-generalized-1069-640.webp` | 640 × 584 (1.096:1) | WebP | 47.3 | Home + NL2MAP case study | B | `nl2map-generalized-1069.webp` |
| `nl2map-generalized-1069-800.webp` | 800 × 730 (1.096:1) | WebP | 65.8 | Home + NL2MAP case study | B | `nl2map-generalized-1069.webp` |
| `nl2map-generalized-1069.png` | 1000 × 912 (1.096:1) | PNG | 217.3 | Home + NL2MAP case study | B | `nl2map-generalized-1069.webp` |
| `nl2map-input-1069-1000.webp` | 1000 × 912 (1.096:1) | WebP | 77.9 | Home + NL2MAP case study | B | `nl2map-input-1069.webp` |
| `nl2map-input-1069-640.webp` | 640 × 584 (1.096:1) | WebP | 48.0 | Home + NL2MAP case study | B | `nl2map-input-1069.webp` |
| `nl2map-input-1069-800.webp` | 800 × 730 (1.096:1) | WebP | 67.0 | Home + NL2MAP case study | B | `nl2map-input-1069.webp` |
| `nl2map-input-1069.png` | 1000 × 912 (1.096:1) | PNG | 219.9 | Home + NL2MAP case study | B | `nl2map-input-1069.webp` |
| `se4g-dashboard-640.webp` | 640 × 488 (1.311:1) | WebP | 54.1 | Home + SE4G case study | C | `se4g-dashboard.webp` |
| `se4g-dashboard-800.webp` | 800 × 609 (1.314:1) | WebP | 75.9 | Home + SE4G case study | C | `se4g-dashboard.webp` |
| `se4g-dashboard.webp` | 1235 × 940 (1.314:1) | WebP | 108.9 | Home + SE4G case study | C | `se4g-dashboard.webp` |

One additional embedded raster: ResponsiveEvidenceImage.tsx contains a 1 × 1 transparent GIF data URL, D (loading utility), used on deferred homepage evidence. It contains no visible artwork and has no theme conflict; retain. No other non-code visual assets were found. Existing SVG and CSS graphics are excluded from raster counts.

## Replacement design and implementation plan

This is one shared visual subsystem within existing project sections. The user's detailed brief authorizes audit, planning, implementation and verification; no additional design approval or generated concept is needed. The existing site and original artifacts are the visual references. Code-native reconstruction takes precedence over generic image-generation guidance.

1. Capture baseline desktop/mobile views before edits. Inventory every original and preserve provenance.
2. Add shared ProjectVisualFrame, TechnicalLabel, PipelineArrow, WorkflowNode and DataLegend primitives, using existing tokens, square panels and 1px rules. Use container queries so gallery, narrow hero and homepage layouts adapt to their actual available width.
3. Add BuildingMap using recovered real GeoJSON converted deterministically to local SVG coordinates, with shared bounds and no geometry simplification. Keep source metadata and verify feature counts, bounds and rendering against the old pair. Add Nl2MapVisual with a responsive native pair.
4. Add Se4gDashboardVisual with Bormio / building labels, the satellite crop, a semantic indicator table and SVG chart derived only from the readable 778 / 36 / 36 counts. Label it a portfolio reconstruction of the documented state. Keep the two documented sport/venue entries in the detailed version. No fake controls or invented records.
5. Add RasterMapPanel and LandslideProjectVisual. Mask legend areas only, retain source raster files and responsive loading, reproduce legible legend values and colors in native HTML. Source pixels and study boundaries remain intact. The pipeline is terrain → documented variables / Random Forest → susceptibility; stack on narrow containers.
6. Integrate the same components into Selected Work, case-study heroes and every evidence-gallery entry. Maintain localized explanatory copy and source-image links; distinguish original evidence from reconstructed presentation.
7. Run npm run check and Playwright on homepage and all case studies at wide desktop, laptop, tablet and mobile, including locales, reduced motion, normal scene transitions, keyboard source links, asset loading, console health and overflow. Inspect screenshots before and after with view_image.
8. Re-scan references, record replaced/hybrid/retained/unused files and final verification. Delete no raster assets.

Browser plugin not available; use local Playwright with installed Chromium. QA tools and screenshots live under /tmp/cv-visual-audit, outside repository source. No runtime dependency will be added.

## Verification and cleanup

Completed locally; no deployment and no asset deletions.

### What changed

- **REBUILT:** both NL2MAP plot families → BuildingMap / Nl2MapVisual, real source-derived SVG geometry. 441 Polygon features in each state. Shared projected bounds: X 367010.4750274004–367423.5964916968, Y 5628445.281359431–5628855.534684881. No invented boundaries; only translation, vertical axis inversion and 0.001m rounding. The complete shared source extent replaces the PNGs' slightly cropped plot extent.
- **HYBRID:** se4g-dashboard.webp → Se4gDashboardVisual, native metadata, HTML indicator/event tables and an SVG donut. The original satellite crop remains raster. 850 total is derived from 778 + 36 + 36; percentages are computed, with ordinary two-decimal rounding.
- **HYBRID:** all six Landslide map families → RasterMapPanel / LandslideProjectVisual. Scientific RGB is unchanged by masking; presentation layers then use the existing quality-focused WebP approach. Legends retain source values, sampled colors and red study-area keys. The workflow adapts to vertical mobile layout. The broader terrain source area is not presented as the same geographic extent as the final study-area result.
- Shared components now serve the homepage, three case-study heroes and every gallery. Removed retired screenshot-specific styles and the old illustrative numeric-looking bars. Gallery links explicitly open the original evidence.
- Updated evidence descriptions in EN/DE/IT to distinguish native presentation from original files. Preserved project headings, body content, navigation, CTAs, typography families and global tokens.
- Small responsive fixes: 320px hero heading sizing, German next-case-study wrapping, German chart stacking. Mobile visual content is no longer hidden from assistive technology. No fake interactive controls were added.

### New components and support files

All visual files are under src/components/project-visuals/:

| File | Responsibility |
|---|---|
| VisualPrimitives.tsx | ProjectVisualFrame, TechnicalLabel, DataLegend, WorkflowNode, PipelineArrow |
| BuildingMap.tsx | Reusable accessible SVG map and accurate HTML scale |
| Nl2MapVisual.tsx | Input/output map pair with optional workflow |
| Se4gDashboardVisual.tsx | Source satellite panel, semantic tables, count-derived SVG chart |
| RasterMapPanel.tsx | Responsive scientific raster, separate title and legend |
| LandslideProjectVisual.tsx | Terrain → variables / model → susceptibility composition |
| ProjectEvidenceVisual.tsx | Typed gallery visual selection |
| ProjectVisual.module.css | Shared styles, existing token references and container queries |
| projectVisual.copy.ts | English / German / Italian visualization copy |
| projectVisual.types.ts, rasterLayers.ts | Evidence identities and transcribed legend ranges/classes |
| buildingGeometry.json, legendColors.json | Deterministic source-derived geometry and sampled palettes |

scripts/prepare-project-visuals.cjs and scripts/data/ retain the extraction recipe and exact source GeoJSON copies. assets/projects/evidence/SOURCES.md records pinned source provenance, crop coordinates, masking rules and reproduction commands. Sharp is used only offline from /tmp; package.json and package-lock.json are unchanged.

### Added raster data layers

These 20 derivatives are **A — keep as raster**, because their retained satellite/scientific content cannot be faithfully replaced with invented vectors. The surrounding presentation is code. Paths below are relative to assets/projects/evidence/; route localization and project association match their original family above. Format is WebP. Aspect ratios are 1:1 for Landslide and approximately 2.365:1 for SE4G. None contains a white UI panel. Bright terrain/snow/vegetation and grayscale confidence pixels are meaningful imagery and intentionally remain.

| Path | Dimensions | KiB | Class | Component | Placement |
|---|---|---:|---|---|---|
| `native/landslide-confidence-640.webp` | 640 × 640 | 76.4 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-confidence-800.webp` | 800 × 800 | 110.8 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-confidence.webp` | 1080 × 1080 | 192.6 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-dtm-640.webp` | 640 × 640 | 62.0 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/landslide-dtm-800.webp` | 800 × 800 | 82.3 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/landslide-dtm.webp` | 1000 × 1000 | 119.3 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/landslide-ndvi-640.webp` | 640 × 640 | 100.9 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-ndvi-800.webp` | 800 × 800 | 142.1 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-ndvi.webp` | 1080 × 1080 | 246.3 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-reclassified-640.webp` | 640 × 640 | 52.6 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-reclassified-800.webp` | 800 × 800 | 67.7 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-reclassified.webp` | 1080 × 1080 | 91.6 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-slope-640.webp` | 640 × 640 | 74.2 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-slope-800.webp` | 800 × 800 | 106.0 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-slope.webp` | 1080 × 1080 | 180.9 | A — retained data layer | RasterMapPanel | Gallery |
| `native/landslide-susceptibility-640.webp` | 640 × 640 | 84.7 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/landslide-susceptibility-800.webp` | 800 × 800 | 120.3 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/landslide-susceptibility.webp` | 1000 × 1000 | 196.0 | A — retained data layer | RasterMapPanel | Home + hero + gallery |
| `native/se4g-map-640.webp` | 640 × 271 | 55.9 | A — retained data layer | Se4gDashboardVisual | Home + hero + gallery |
| `native/se4g-map.webp` | 804 × 340 | 91.1 | A — retained data layer | Se4gDashboardVisual | Home + hero + gallery |

### Original files retained and unused candidates

All **31 original raster files were byte-compared with Git HEAD and are unchanged**. The nine original masters remain referenced by gallery source links and/or the offline preparation script:

- nl2map-input-1069.png, nl2map-generalized-1069.png: archived published plots, linked beside the native maps.
- se4g-dashboard.webp: original documentary screenshot, linked beside the reconstruction and used for the source crop.
- landslide-dtm.png, landslide-susceptibility.png, landslide-ndvi.webp, landslide-slope.webp, landslide-confidence.webp, landslide-reclassified.webp: original scientific evidence, source links and regeneration inputs.

The following **22 superseded responsive variants have no frontend references** after a complete src scan. They remain on disk. Their mentions in this audit are documentary; Vite's existing blanket directory copy still packages them. They are removal candidates, not deleted files:

- `assets/projects/evidence/landslide-confidence-640.webp`
- `assets/projects/evidence/landslide-confidence-800.webp`
- `assets/projects/evidence/landslide-dtm-1000.webp`
- `assets/projects/evidence/landslide-dtm-640.webp`
- `assets/projects/evidence/landslide-dtm-800.webp`
- `assets/projects/evidence/landslide-ndvi-640.webp`
- `assets/projects/evidence/landslide-ndvi-800.webp`
- `assets/projects/evidence/landslide-reclassified-640.webp`
- `assets/projects/evidence/landslide-reclassified-800.webp`
- `assets/projects/evidence/landslide-slope-640.webp`
- `assets/projects/evidence/landslide-slope-800.webp`
- `assets/projects/evidence/landslide-susceptibility-1000.webp`
- `assets/projects/evidence/landslide-susceptibility-640.webp`
- `assets/projects/evidence/landslide-susceptibility-800.webp`
- `assets/projects/evidence/nl2map-generalized-1069-1000.webp`
- `assets/projects/evidence/nl2map-generalized-1069-640.webp`
- `assets/projects/evidence/nl2map-generalized-1069-800.webp`
- `assets/projects/evidence/nl2map-input-1069-1000.webp`
- `assets/projects/evidence/nl2map-input-1069-640.webp`
- `assets/projects/evidence/nl2map-input-1069-800.webp`
- `assets/projects/evidence/se4g-dashboard-640.webp`
- `assets/projects/evidence/se4g-dashboard-800.webp`

The embedded transparent GIF remains in ResponsiveEvidenceImage as dormant deferred-loading support; the new visuals use native eager/lazy loading. No project image was classified as redundant merely because a new explanation exists. Existing SVG artwork was retained.

### Responsive and browser verification

Environment: production Vite preview at http://127.0.0.1:4173/; earlier baseline/review at http://127.0.0.1:5173/. Browser plugin not available; used local Playwright with installed Chromium 152. QA scripts, screenshots and JSON results are outside the repository under /tmp/cv-visual-audit/.

| Check | Observed result |
|---|---|
| Production routes | 84 combinations passed: home + 3 project pages × EN/DE/IT × widths 1920, 1440, 1280, 1024, 768, 390, 320 |
| Viewport heights | 900 for the reduced-motion desktop/tablet matrix; 844 for phones; normal-motion desktop 1920×1080, 1440×900, laptop 1280×720 |
| Normal motion | 27 scene transitions passed across 3 desktop sizes × 3 locales × 3 projects; correct scene visibility and aria-hidden state; sticky visuals fit within the viewport |
| Reduced motion | Static stacked visuals render and remain accessible at all matrix widths |
| Page identity / not blank | Localized routes and html lang match; real headings and native content visible |
| Framework overlay / console | No overlays, page errors or console errors |
| Images / source links | No failed HTTP responses or broken image paths; all displayed project rasters use native data layers; original links return 200 |
| Overflow / labels | No page overflow or native component overflow in the final matrix; inspected desktop and mobile screenshots for clipping and overlap |
| Keyboard / navigation | EN → DE updates URL and dashboard labels; focusing source link + Enter opens original screenshot; back-to-work returns to localized home; homepage case-study CTA opens the right page |
| Data integrity | All 4,967 coordinate entries checked against source within 0.000501m; both feature counts 441; every original raster byte-equal to HEAD; mask preparation asserts original RGB before normal encoding |
| Lint / types / production build | npm run check passed (oxlint with denied warnings, tsc --noEmit, Vite build) |
| Diff hygiene | git diff --check passed |

### Visual comparison ledger

Original assets and baseline rendered screenshots were opened with view_image before implementation. Latest desktop heroes, full evidence galleries, homepage scenes and mobile views were opened again after changes. The references were the user's prescribed existing site and source evidence; no generated mockup or second design system was introduced.

| Comparison point | Before → after / decision |
|---|---|
| Palette | Large white plot/dashboard panels → existing graphite canvas, hairline borders and cyan UI accent |
| Typography | Baked screenshot text → selectable site fonts and technical HTML metadata; scientific labels no longer shrink with screenshots |
| Map fidelity | Raster building footprints → exact source geometry with shared extent; scientific rasters and satellite context retained |
| Information | Illegible SE4G pie/table → count-derived chart plus readable values and sport/venue rows; no invented numbers or controls |
| Proportions | Screenshot scaling and baked legends → correct raster aspect ratios, native legends and responsive map layout |
| Motion / size | First preview extended below laptop sticky stage → compact two-column homepage dashboard, confirmed within viewport |
| Raster edge cleanup | First extraction left two thin legend edges → mask bounds corrected and visually rechecked |
| Localization | German 320px chart crowded; existing next-project compound word overflowed → stacked chart and constrained wrapping, full matrix rerun |
| Above-the-fold copy | Existing headings/navigation/CTAs unchanged; new diagram metadata comes from verified source facts; evidence captions explicitly disclose reconstruction |

Representative screenshots (absolute local paths):

- /tmp/cv-visual-audit/before-nl2map-desktop.png and final-nl2map-1440-hero.png
- /tmp/cv-visual-audit/before-se4g-desktop.png and final-se4g-1440-hero.png
- /tmp/cv-visual-audit/before-landslide-desktop.png and final-landslide-1440-hero.png
- /tmp/cv-visual-audit/final-se4g-1440-gallery.png
- /tmp/cv-visual-audit/final-landslide-390-hero.png
- /tmp/cv-visual-audit/final-home-se4g-1280.png
- /tmp/cv-visual-audit/verification.json and motion-verification.json

### Performance and remaining data limits

No runtime dependency or visualization library was added. SVG geometry is static and shared; text remains HTML. Remaining images have width/height, responsive WebP sources, asynchronous decoding and eager hero/lazy gallery loading. The 20 new data-layer files total about 2.20 MiB on disk across all resolutions; browsers select one resolution per displayed image. The existing originals remain archived and copied by the current build. The new shared visual module is approximately 37.25 kB gzipped including both geometry states and localized copy; its CSS is approximately 2.45 kB gzipped. These figures describe assets, not an asserted whole-page transfer saving.

No underlying data is required to finish the implemented replacements. Complete vector/numeric reconstruction of the Landslide surfaces would require the actual GIS rasters, masks and metadata. A real interactive SE4G map or additional city/indicator states would require source geometries and records. Those unavailable values were not fabricated: meaningful raster content and the single verified Bormio state remain. NL2MAP geometry was recovered, so no further data is needed for that pair.

Verification used Chromium, not a multi-engine Safari/Firefox matrix. Scientific raster colors, snow and grayscale highlights are intentional exceptions to the dark UI palette. No original asset was deleted.

