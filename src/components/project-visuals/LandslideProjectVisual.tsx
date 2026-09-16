import { resolveEdges, segmentPath } from "../../geometry/geometry";
import type { Locale } from "../../sections/Hero/hero.types";
import { RasterMapPanel } from "./RasterMapPanel";
import { projectVisualCopy } from "./projectVisual.copy";
import { PipelineArrow, ProjectVisualFrame, TechnicalLabel } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

const treeNodes = Object.fromEntries(
  [
    [55, 5],
    [25, 30],
    [85, 30],
    [9, 59],
    [43, 59],
    [68, 59],
    [102, 59],
  ].map(([x, y], index) => [String(index), { point: { x, y }, radius: 3 }]),
);
const treeEdges = resolveEdges(
  treeNodes,
  [
    ["0", "1"],
    ["1", "3"],
    ["1", "4"],
    ["0", "2"],
    ["2", "5"],
    ["2", "6"],
  ].map(([from, to]) => ({ from, to })),
);

export function LandslideProjectVisual({ locale, eager = false }: { locale: Locale; eager?: boolean }) {
  const copy = projectVisualCopy[locale];
  return (
    <ProjectVisualFrame title="BERGAMO / LANDSLIDE" meta={copy.originalPalette}>
      <div className={styles.landslidePipeline} aria-label={copy.pipeline} role="group">
        <RasterMapPanel layer="dtm" locale={locale} eager={eager} />
        <PipelineArrow />
        <div className={styles.modelStage}>
          <div className={styles.variableList}>
            <TechnicalLabel>{copy.variables}</TechnicalLabel>
            <ul>
              {["NDVI", "DUSAF", "SLOPE", "ASPECT", "BUFFERS", "INVENTORY"].map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
          <div className={styles.model}>
            <svg viewBox="0 0 110 66" aria-hidden="true">
              {treeEdges.map(
                ({ segment }) => segment && <path key={segmentPath(segment)} d={segmentPath(segment)} fill="none" />,
              )}
              {Object.entries(treeNodes).map(([id, node]) => (
                <circle key={id} cx={node.point.x} cy={node.point.y} r={node.radius} />
              ))}
            </svg>
            <span>{copy.model}</span>
            <small>{copy.qgis}</small>
          </div>
        </div>
        <PipelineArrow />
        <RasterMapPanel layer="susceptibility" locale={locale} />
      </div>
    </ProjectVisualFrame>
  );
}
