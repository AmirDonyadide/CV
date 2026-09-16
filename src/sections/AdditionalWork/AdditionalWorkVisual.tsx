import { point, rectangleAnchor, segmentPath, polylinePath } from "../../geometry/geometry";
import {
  classifierImages,
  classifierBaseline,
  classifierMatrix,
  classifierNodes,
  classifierConnections,
  landsatBaseline,
  landsatGrid,
  landsatOutput,
  landsatOutputAnchor,
  sliderBaseline,
  sliderRows,
  yogaPanel,
  yogaOutput,
} from "./additional.geometry";
import { useId } from "react";
import type { AdditionalProjectId } from "./additionalWork.types";
import styles from "./AdditionalWork.module.css";

interface AdditionalWorkVisualProps {
  id: AdditionalProjectId;
  label: string;
  steps: string[];
  title: string;
}

interface WorkflowGraphicProps {
  markerId: string;
}

function LandsatVisual({ markerId }: WorkflowGraphicProps) {
  return (
    <g>
      <g className={styles.layerStack}>
        <path d="m64 100 62-32 62 32-62 32Z" />
        <path d="m64 118 62-32 62 32-62 32Z" />
        <path d="m64 136 62-32 62 32-62 32Z" />
      </g>
      <path
        className={styles.connector}
        d={segmentPath({ start: { x: 194, y: landsatBaseline }, end: { x: landsatGrid.x - 10, y: landsatBaseline } })}
        markerEnd={`url(#${markerId})`}
      />
      <g className={styles.pixelGrid} transform={`translate(${landsatGrid.x} ${landsatGrid.y})`}>
        {Array.from({ length: 25 }, (_, index) => (
          <rect key={index} x={(index % 5) * 15} y={Math.floor(index / 5) * 15} width="10" height="10" />
        ))}
      </g>
      <path
        className={styles.connector}
        d={segmentPath({
          start: { x: landsatGrid.x + landsatGrid.width + 16, y: landsatBaseline },
          end: landsatOutputAnchor,
        })}
        markerEnd={`url(#${markerId})`}
      />
      <path className={styles.outputShape} d={`${polylinePath(landsatOutput)}Z`} />
      <path className={styles.accentPath} d={`M419 ${landsatBaseline + 21}c18-6 20-31 39-32 17 0 20 19 34 23`} />
    </g>
  );
}

function LayerAlteratorVisual({ markerId }: WorkflowGraphicProps) {
  return (
    <g>
      <g className={styles.pixelGrid} transform="translate(56 66)">
        {Array.from({ length: 36 }, (_, index) => (
          <rect key={index} x={(index % 6) * 17} y={Math.floor(index / 6) * 17} width="12" height="12" />
        ))}
      </g>
      <path className={styles.maskShape} d="m82 82 64-9 31 50-42 39-70-22Z" />
      <path className={styles.connector} d={`M184 ${sliderBaseline}h78`} markerEnd={`url(#${markerId})`} />
      <g className={styles.ruleLines} transform="translate(278 0)">
        {sliderRows.map((node) => (
          <path key={node.y} d={`M0 ${node.y}h92`} />
        ))}
        {sliderRows.map((node) => (
          <circle key={node.y} cx={node.x} cy={node.y} r="4" />
        ))}
      </g>
      <path className={styles.connector} d={`M385 ${sliderBaseline}h54`} markerEnd={`url(#${markerId})`} />
      <g className={styles.pixelGrid} transform="translate(452 66)">
        {Array.from({ length: 36 }, (_, index) => (
          <rect
            key={index}
            className={index === 15 || index === 16 || index === 21 || index === 22 ? styles.pixelActive : undefined}
            x={(index % 6) * 17}
            y={Math.floor(index / 6) * 17}
            width="12"
            height="12"
          />
        ))}
      </g>
    </g>
  );
}

function PoliYogaVisual({ markerId }: WorkflowGraphicProps) {
  return (
    <g>
      <rect className={styles.browserFrame} x="62" y="62" width="472" height="126" rx="2" />
      <path className={styles.guide} d="M62 87h472" />
      <circle className={styles.node} cx="78" cy="75" r="3" />
      <circle className={styles.node} cx="90" cy="75" r="3" />
      <circle className={styles.node} cx="102" cy="75" r="3" />
      <rect className={styles.panel} x="82" y="105" width="118" height="61" />
      <circle className={styles.accentNode} cx="109" cy="129" r="11" />
      <path className={styles.guide} d="M130 119h45M130 133h34M130 147h52" />
      <rect className={styles.panel} {...yogaPanel} />
      <path className={styles.guide} d="M236 122h102M236 138h72M236 154h89" />
      <g transform={`translate(390 ${yogaOutput.y - 27.5})`}>
        <ellipse className={styles.database} cx="44" cy="7" rx="38" ry="7" />
        <path className={styles.database} d="M6 7v34c0 4 17 7 38 7s38-3 38-7V7M6 24c0 4 17 7 38 7s38-3 38-7" />
      </g>
      <path
        className={styles.connector}
        d={segmentPath({ start: yogaOutput, end: { x: 389, y: yogaOutput.y } })}
        markerEnd={`url(#${markerId})`}
      />
    </g>
  );
}

function ClassifierVisual({ markerId }: WorkflowGraphicProps) {
  return (
    <g>
      <g className={styles.imageTiles} transform={`translate(${point(classifierImages)})`}>
        <rect x="0" y="0" width="48" height="48" />
        <rect x="58" y="0" width="48" height="48" />
        <rect x="0" y="58" width="48" height="48" />
        <rect x="58" y="58" width="48" height="48" />
        <path d="M10 36h28l-5-16H16Z M14 36v6M34 36v6" />
        <path d="M68 95h28l-5-16H74Z M72 95v6M92 95v6" />
      </g>
      <path
        className={styles.connector}
        d={segmentPath({
          start: { x: rectangleAnchor(classifierImages, "right").x + 13, y: classifierBaseline },
          end: { x: classifierNodes["0-1"].point.x - classifierNodes["0-1"].radius - 15, y: classifierBaseline },
        })}
        markerEnd={`url(#${markerId})`}
      />
      <g className={styles.modelNodes}>
        {classifierConnections.map(
          ({ segment }) => segment && <path key={segmentPath(segment)} d={segmentPath(segment)} />,
        )}
        {Object.entries(classifierNodes).map(([id, node]) => (
          <circle
            key={id}
            data-node-id={id}
            className={id === "2-1" ? styles.accentNode : undefined}
            cx={node.point.x}
            cy={node.point.y}
            r={node.radius}
          />
        ))}
      </g>
      <path
        className={styles.connector}
        d={segmentPath({
          start: { x: classifierNodes["3-1"].point.x + classifierNodes["3-1"].radius + 12, y: classifierBaseline },
          end: { x: classifierMatrix.x - 17, y: classifierBaseline },
        })}
        markerEnd={`url(#${markerId})`}
      />
      <g className={styles.matrix} transform={`translate(${point(classifierMatrix)})`}>
        <rect x="0" y="0" width="92" height="92" />
        <path d="M46 0v92M0 46h92" />
        <rect className={styles.matrixActive} x="5" y="5" width="36" height="36" />
        <rect className={styles.matrixActive} x="51" y="51" width="36" height="36" />
      </g>
    </g>
  );
}

export function AdditionalWorkVisual({ id, label, steps, title }: AdditionalWorkVisualProps) {
  const instanceId = useId().replaceAll(":", "");
  const markerId = `additional-arrow-${id}-${instanceId}`;

  return (
    <figure className={styles.visual} aria-label={`${label}: ${title}`}>
      <figcaption>{label}</figcaption>
      <svg viewBox="0 0 620 238" role="img" aria-hidden="true">
        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 6 3.5 0 7Z" />
          </marker>
        </defs>
        {id === "landsat" && <LandsatVisual markerId={markerId} />}
        {id === "layeralterator" && <LayerAlteratorVisual markerId={markerId} />}
        {id === "poliyoga" && <PoliYogaVisual markerId={markerId} />}
        {id === "classifier" && <ClassifierVisual markerId={markerId} />}
      </svg>
      <ol className={styles.previewSteps}>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
    </figure>
  );
}
