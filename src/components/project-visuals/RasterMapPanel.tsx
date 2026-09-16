import type { Locale } from "../../sections/Hero/hero.types";
import { ResponsiveEvidenceImage } from "../ResponsiveEvidenceImage";
import { projectVisualCopy } from "./projectVisual.copy";
import { rasterLayers } from "./rasterLayers";
import type { RasterLayerId } from "./rasterLayers";
import { DataLegend, TechnicalLabel } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

export function RasterMapPanel({ layer, locale, eager = false }: { layer: RasterLayerId; locale: Locale; eager?: boolean }) {
  const copy = projectVisualCopy[locale];
  const spec = rasterLayers[layer];
  const base = `/assets/projects/evidence/native/landslide-${layer}`;
  return (
    <div className={styles.mapPanel} data-raster-layer={layer}>
      <div className={styles.panelHeading}><TechnicalLabel>{copy[layer]}</TechnicalLabel></div>
      <div className={styles.rasterCanvas}>
        <ResponsiveEvidenceImage src={`${base}.webp`}
          webpSrcSet={`${base}-640.webp 640w, ${base}-800.webp 800w, ${base}.webp ${spec.width}w`}
          sizes="(max-width: 599px) 90vw, (max-width: 1099px) 44vw, 32vw"
          alt={`${copy[layer]} · Bergamo. ${copy.originalPalette}.`}
          width={spec.width} height={spec.width} loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"} decoding="async" />
      </div>
      <DataLegend label={`${copy.legend}: ${copy[layer]}`} range={spec.range} colors={spec.colors} classes={spec.classes} boundaryLabel={copy.studyArea} />
    </div>
  );
}
