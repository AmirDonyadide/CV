# Flagship project evidence

These images are resized copies of public project outputs. They are evidence, not generated illustrations.

- `nl2map-input-1069.png`: `Thesis_UserStudy/images/pairs/1069/input_1069.png`
- `nl2map-generalized-1069.png`: `Thesis_UserStudy/images/pairs/1069/generalized_1069.png`
  - Source: https://github.com/AmirDonyadide/Thesis_UserStudy
  - Audited commit: `fb097118de4d975127a22e5c4a6adfdd1516724c`
- `landslide-dtm.png`: `GIS-Course-Polimi-2024/images/DTM_input.png`
- `landslide-susceptibility.png`: `GIS-Course-Polimi-2024/images/landslide_susceptibility_result.png`
- `landslide-ndvi.webp`: optimized copy of `GIS-Course-Polimi-2024/images/NDVI_input.png`
- `landslide-slope.webp`: optimized copy of `GIS-Course-Polimi-2024/images/slope.png`
- `landslide-confidence.webp`: optimized copy of `GIS-Course-Polimi-2024/images/confidence.png`
- `landslide-reclassified.webp`: optimized copy of `GIS-Course-Polimi-2024/images/susceptibility_reclass.png`
  - Source: https://github.com/AmirDonyadide/GIS-Course-Polimi-2024
  - Audited commit: `049bb479eb90b7212921d85bd239e3f2c3d15c8b`
- `se4g-dashboard.webp`: crop of the implemented dashboard screenshot on page 14 of
  `SE4G/documents/DD.pdf`. Only the surrounding PDF page was removed; no interface
  content was added or altered.
  - Source: https://github.com/AmirDonyadide/SE4G
  - Audited commit: `8ccc07d8fd128eeb1cea998afd6fd635b1af0724`

PNG copies are resized to a maximum dimension of 1000 pixels. WebP copies use
quality-focused compression. No project content was added or altered.

## Native portfolio presentation (2026-09-16)

Original files above remain unchanged and are linked from each case-study gallery.
The portfolio now separates source evidence from its presentation:

- **NL2MAP**: real GeoJSON for pair 1069 was retrieved at the same audited commit:
  - `images/pairs/1069/1069_input.geojson`
  - `images/pairs/1069/1069_generalized.geojson`
  - Exact source copies: `scripts/data/nl2map-1069-{input,generalized}.geojson`.
  - Each contains 441 Polygon features, CRS EPSG:25832. Both are translated to a
    shared local origin and inverted vertically for SVG; coordinates are rounded
    to 0.001 metres, with no geometry simplification. All features, rings and
    vertices are retained. The native view includes their complete shared bounds,
    whereas the published PNG plots clip some edge features. Both states use the
    same viewBox and accurate 100m scale. New colors encode input/output state,
    not a scientific classification.
- **SE4G**: `native/se4g-map.webp` crops the existing screenshot at
  `left=296, top=106, width=804, height=340`. This removes controls, mini-map and
  dashboard chrome; it does not create map data. The original attribution
  (OpenStreetMap contributors, CARTO, Google Earth) is transcribed below the crop.
  The native table/chart transcribes `ed_idr_p1=778`, `ed_idr_p2=36`,
  `ed_idr_p3=36` for Bormio / Building. Total 850 and displayed percentages are
  derived arithmetically. The documented sport/venue rows are retained in the
  detailed gallery. There are no simulated controls, additional cities or values.
- **Landslide**: `native/landslide-*.webp` keeps the raster content, original
  palettes and study-area boundaries. Only baked-in legend areas are masked.
  The reclassified map's legend adjoins colored cells, so that mask preserves
  colored pixels outside the safe legend rectangle. RGB channels are asserted
  unchanged before normal quality-90 WebP encoding; this is presentation
  extraction, not a regenerated scientific result. Full-size, 800px and 640px
  versions use the same mask. No recoloring, inversion or blending is applied.
  Native legends transcribe the source values; color ramps/swatches are sampled
  directly from the original legends. No units absent from the images are added.

`scripts/prepare-project-visuals.cjs` records the deterministic recipes
and generates the geometry module, legend samples and 20 raster derivatives.
Run from the repository root with Sharp installed in a temporary tools folder:

```sh
npm install --prefix /tmp/cv-visual-tools sharp
NODE_PATH=/tmp/cv-visual-tools/node_modules node scripts/prepare-project-visuals.cjs
```

Sharp is an offline preparation tool, not a website dependency. Source rasters
are preserved; these maps cannot be recovered as numerical GIS datasets from
screenshots alone. Native components live in `src/components/project-visuals/`.
