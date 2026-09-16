import { resolveEdges, segmentPath } from "../../geometry/geometry";
import { overviewArrows, coordinateCenter, gridCenter, heroDataFrame, heroSystemFrame } from "./hero.geometry";
import styles from "./Hero.module.css";

const points = [
  [276, 300], [294, 274], [314, 316], [334, 288], [352, 338], [370, 258], [389, 306], [408, 281],
  [426, 326], [445, 267], [466, 310], [486, 285], [506, 342], [320, 354], [346, 374], [382, 360],
  [414, 382], [450, 356], [478, 378], [300, 402], [336, 424], [372, 408], [404, 438], [438, 414],
  [470, 445], [502, 408], [278, 448], [314, 468], [352, 456], [390, 478], [428, 462], [466, 486],
];

const rasterCells = [
  [690, 278], [716, 278], [742, 304], [768, 330], [716, 356], [742, 356], [768, 382], [794, 382],
  [716, 408], [742, 434], [768, 434], [794, 460], [820, 460], [690, 382], [820, 356], [846, 408],
];

const modelPoints = [
  [968, 292], [1026, 270], [1086, 308], [948, 370], [1020, 360], [1098, 390], [980, 448], [1055, 455],
];

const modelEdges = [
  [0, 1], [1, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6],
  [4, 6], [4, 7], [5, 7], [6, 7],
];

const modelNodes = Object.fromEntries(modelPoints.map(([x,y], index) => [String(index), {point:{x,y},radius:index===4?8:6}]));
const modelConnections = resolveEdges(modelNodes, modelEdges.map(([from,to]) => ({from:String(from),to:String(to)})));
const desktopArrows = overviewArrows(false);
const mobileArrows = overviewArrows(true);

export function HeroStage() {
  return (
    <div className={styles.stageShell} data-stage-shell aria-hidden="true">
      <svg className={styles.stage} viewBox="0 0 1600 620" role="presentation" focusable="false">
        <defs>
          <marker id="sequence-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
          <clipPath id="system-viewport-clip">
            <rect x="1240" y="260" width="218" height="210" rx="2" />
          </clipPath>
        </defs>

        <g className={styles.sequenceArrows} data-layer="arrows">
          {desktopArrows.map(d => <path key={d} d={d} />)}
        </g>

        <g className={`${styles.sequenceArrows} ${styles.mobileSequenceArrows}`} data-layer="mobile-arrows">
          {mobileArrows.map(d => <path key={d} d={d} />)}
        </g>

        <g className={styles.layerCoordinate} data-layer="coordinate">
          <g data-state-artwork="coordinate">
            <g data-coordinate-mark>
              <g transform={`translate(${coordinateCenter.x} ${coordinateCenter.y})`}>
              <path d="M0 -62v124M-62 0h124" />
              <circle r="9" fill="var(--graphite)" />
              <circle className={styles.accentFill} r="4.5" />
              </g>
            </g>
          </g>
        </g>

        <g className={styles.layerPoints} data-layer="points">
          <g data-state-artwork="points">
            {points.map(([cx, cy], index) => (
              <circle
                data-point
                className={index === 8 ? styles.accentFill : undefined}
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={index % 5 === 0 ? 3 : 2}
              />
            ))}
          </g>
        </g>

        <g className={styles.layerGrid} data-layer="grid">
          <g data-state-artwork="grid">
            {Array.from({ length: 9 }, (_, index) => (
              <path data-grid-line key={`v-${index}`} d={`M${560 + index * 18} 280v184`} />
            ))}
            {Array.from({ length: 11 }, (_, index) => (
              <path data-grid-line key={`h-${index}`} d={`M560 ${282 + index * 18}h144`} />
            ))}
            <path className={styles.accentStroke} d={`M${gridCenter.x} 280v184M560 ${gridCenter.y}h144`} />
            <circle className={styles.accentFill} cx={gridCenter.x} cy={gridCenter.y} r="3.5" />
          </g>
        </g>

        <g className={styles.layerSpatial} data-layer="layers">
          <g data-state-artwork="layers">
            <path className={styles.mapOutline} data-vector-path d="M682 316l40-38 64 10 52 44-16 54 28 44-52 54-72-8-42-58 18-44z" />
            <path data-vector-path d="M694 424c34-18 54-42 62-74 11-42 35-55 71-54" />
            <path data-vector-path d="M708 456c31-22 62-29 92-26 22 2 37-5 47-20" />
            {rasterCells.map(([x, y], index) => (
              <rect
                data-raster-cell
                key={`${x}-${y}`}
                className={index === 10 ? styles.accentRaster : undefined}
                x={x}
                y={y}
                width="22"
                height="22"
              />
            ))}
          </g>
        </g>

        <g className={styles.layerData} data-layer="data">
          <g data-state-artwork="data">
            <rect {...heroDataFrame} />
            {Array.from({ length: 5 }, (_, index) => (
              <g data-data-row key={`data-row-${298 + index * 32}`}>
                <rect x="898" y={298 + index * 32} width="18" height="18" />
                <path d={`M930 ${305 + index * 32}h72M930 ${312 + index * 32}h44`} />
              </g>
            ))}
            <path className={styles.accentStroke} d="M916 371h86" />
          </g>
        </g>

        <g className={styles.layerModel} data-layer="model">
          <g data-state-artwork="model">
            {modelConnections.map(({segment}) => segment && <path data-model-edge key={segmentPath(segment)} d={segmentPath(segment)} />)}
            {Object.entries(modelNodes).map(([id, node]) => (
              <circle data-model-node className={id === '4' ? styles.accentNode : undefined} key={id}
                cx={node.point.x} cy={node.point.y} r={node.radius} />
            ))}
          </g>
        </g>

        <g className={styles.layerSystem} data-layer="system">
          <g data-state-artwork="system">
            <rect className={styles.systemOuter} {...heroSystemFrame} rx="8" />
            <path d={`M${heroSystemFrame.x} ${heroSystemFrame.y+32}h${heroSystemFrame.width}M${heroSystemFrame.x+40} ${heroSystemFrame.y+32}v${heroSystemFrame.height-32}M${heroSystemFrame.x+292} ${heroSystemFrame.y+32}v${heroSystemFrame.height-32}`} />
            <circle cx="1195" cy="254" r="3" />
            <circle cx="1207" cy="254" r="3" />
            <circle cx="1219" cy="254" r="3" />
            {Array.from({ length: 6 }, (_, index) => (
              <g key={`control-${index}`}>
                <rect className={index === 2 ? styles.accentStroke : undefined} x="1190" y={294 + index * 31} width="9" height="9" rx="1" />
                <path d={`M1207 ${299 + index * 31}h${index === 2 ? 0 : 44}`} />
              </g>
            ))}
            <g clipPath="url(#system-viewport-clip)">
              <path d="M1214 446c36-84 71-66 88-114 20-54 65-50 93-14 24 31 36 83 82 93" />
              <path d="M1238 288c31 30 58 46 91 53 37 8 66 34 85 77" />
              <path d="M1255 478c47-30 87-41 121-28 35 13 67 4 98-23" />
              <path className={styles.accentSelection} d="M1342 350l52-24 40 42-22 59-58 8-32-48z" />
            </g>
            {Array.from({ length: 6 }, (_, index) => (
              <g key={`right-${index}`}>
                <rect className={index === 1 || index === 4 ? styles.accentStroke : undefined} x="1484" y={294 + index * 31} width="9" height="9" rx="1" />
                <path d={`M1501 ${299 + index * 31}h20`} />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
