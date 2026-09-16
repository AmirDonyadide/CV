import type { Locale } from "../../sections/Hero/hero.types";
import { RasterMapPanel } from "./RasterMapPanel";
import { projectVisualCopy } from "./projectVisual.copy";
import { PipelineArrow, ProjectVisualFrame, TechnicalLabel } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

export function LandslideProjectVisual({ locale, eager = false }: { locale: Locale; eager?: boolean }) {
  const copy = projectVisualCopy[locale];
  return (
    <ProjectVisualFrame title="BERGAMO / LANDSLIDE" meta={copy.originalPalette}>
      <div className={styles.landslidePipeline} aria-label={copy.pipeline} role="group">
        <RasterMapPanel layer="dtm" locale={locale} eager={eager} />
        <div className={styles.modelStage}>
          <PipelineArrow />
          <div className={styles.variableList}>
            <TechnicalLabel>{copy.variables}</TechnicalLabel>
            <ul>{["NDVI", "DUSAF", "SLOPE", "ASPECT", "BUFFERS", "INVENTORY"].map(label => <li key={label}>{label}</li>)}</ul>
          </div>
          <div className={styles.model}>
            <svg viewBox="0 0 110 66" aria-hidden="true"><path d="M55 5 25 30 9 59M25 30l18 29M55 5l30 25-17 29M85 30l17 29" /><g>{[[55,5],[25,30],[85,30],[9,59],[43,59],[68,59],[102,59]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}</g></svg>
            <span>{copy.model}</span><small>{copy.qgis}</small>
          </div>
          <PipelineArrow />
        </div>
        <RasterMapPanel layer="susceptibility" locale={locale} />
      </div>
    </ProjectVisualFrame>
  );
}
