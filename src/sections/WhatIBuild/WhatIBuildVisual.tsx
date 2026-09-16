import { NodeMask } from "../../geometry/NodeMask";
import { point, polylinePath, segmentPath } from "../../geometry/geometry";
import {
  middlePlane,
  spatialOutput,
  tableFrame,
  tableTransform,
  tableRows,
  tableInput,
  tableOutput,
  buildModelNodes,
  buildModelEdges,
  buildModelConnections,
  systemFrame,
  systemTransform,
  systemInput,
  spatialRoute,
  mobileSpatialRoute,
  mobileModel,
  mobileModelVertices,
} from "./build.geometry";
import styles from "./WhatIBuild.module.css";

type Plane = readonly [
  readonly [number, number],
  readonly [number, number],
  readonly [number, number],
  readonly [number, number],
];

const topPlane: Plane = [
  [42, 96],
  [188, 14],
  [364, 71],
  [213, 158],
];
const bottomPlane: Plane = [
  [46, 430],
  [199, 347],
  [368, 407],
  [214, 498],
];

const pointOnPlane = (plane: Plane, u: number, v: number) => {
  const [[ax, ay], [bx, by], [cx, cy], [dx, dy]] = plane;
  return [
    (1 - u) * (1 - v) * ax + u * (1 - v) * bx + u * v * cx + (1 - u) * v * dx,
    (1 - u) * (1 - v) * ay + u * (1 - v) * by + u * v * cy + (1 - u) * v * dy,
  ] as const;
};

const linePath = (start: readonly [number, number], end: readonly [number, number]) =>
  `M${start[0].toFixed(1)} ${start[1].toFixed(1)}L${end[0].toFixed(1)} ${end[1].toFixed(1)}`;

const cellPath = (column: number, row: number) => {
  const corners = [
    pointOnPlane(topPlane, column / 6, row / 5),
    pointOnPlane(topPlane, (column + 1) / 6, row / 5),
    pointOnPlane(topPlane, (column + 1) / 6, (row + 1) / 5),
    pointOnPlane(topPlane, column / 6, (row + 1) / 5),
  ];
  return `${corners.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join("")}z`;
};

const topGridLines = [
  ...Array.from({ length: 5 }, (_, index) => {
    const u = (index + 1) / 6;
    return linePath(pointOnPlane(topPlane, u, 0), pointOnPlane(topPlane, u, 1));
  }),
  ...Array.from({ length: 4 }, (_, index) => {
    const v = (index + 1) / 5;
    return linePath(pointOnPlane(topPlane, 0, v), pointOnPlane(topPlane, 1, v));
  }),
];

const observationCoordinates = [
  [0.12, 0.2],
  [0.28, 0.16],
  [0.46, 0.18],
  [0.65, 0.15],
  [0.82, 0.2],
  [0.18, 0.4],
  [0.38, 0.36],
  [0.57, 0.42],
  [0.76, 0.38],
  [0.88, 0.46],
  [0.1, 0.62],
  [0.3, 0.58],
  [0.5, 0.64],
  [0.7, 0.6],
  [0.84, 0.68],
  [0.2, 0.8],
  [0.42, 0.78],
  [0.62, 0.82],
  [0.78, 0.8],
] as const;

const observationPoints = observationCoordinates.map(([u, v]) => pointOnPlane(bottomPlane, u, v));

function DesktopDefinitions() {
  return (
    <defs>
      <NodeMask
        id="build-spatial-node-mask"
        nodes={spatialRoute.map((center) => ({ point: center, radius: 4 }))}
        width={1600}
        height={500}
      />
      <NodeMask id="build-model-node-mask" nodes={Object.values(buildModelNodes)} width={1600} height={500} />
      <marker id="build-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0 0L10 5 0 10z" fill="currentColor" stroke="none" />
      </marker>
      <clipPath id="build-spatial-top-clip" clipPathUnits="userSpaceOnUse">
        <path d="M42 96l146-82 176 57-151 87z" />
      </clipPath>
      <clipPath id="build-spatial-middle-clip" clipPathUnits="userSpaceOnUse">
        <path d={`${polylinePath(middlePlane)}Z`} />
      </clipPath>
      <clipPath id="build-spatial-bottom-clip" clipPathUnits="userSpaceOnUse">
        <path d="M46 430l153-83 169 60-154 91z" />
      </clipPath>
    </defs>
  );
}

type ResponsiveStageIndex = 0 | 1 | 2;

function SpatialStageVisual() {
  return (
    <svg viewBox="0 0 320 190" role="presentation" focusable="false">
      <defs>
        <NodeMask
          id="build-mobile-spatial-mask"
          nodes={mobileSpatialRoute.map((center) => ({ point: center, radius: 4 }))}
          width={320}
          height={190}
        />
        <clipPath id="build-responsive-vector-clip" clipPathUnits="userSpaceOnUse">
          <path d="M4 91l110-42 102 38-111 45z" />
        </clipPath>
      </defs>
      <g transform="translate(50 10)">
        <path d="M4 46l110-42 102 38-111 45z" />
        <path d="M4 91l110-42 102 38-111 45z" />
        <path d="M4 136l110-42 102 38-111 45z" />
        <g data-mobile-spatial-content clipPath="url(#build-responsive-vector-clip)">
          <path
            className={styles.accentPath}
            d={polylinePath(mobileSpatialRoute)}
            mask="url(#build-mobile-spatial-mask)"
          />
          {mobileSpatialRoute.map((node, index) => (
            <circle
              className={index === 3 ? styles.accentNode : styles.routePoint}
              key={point(node)}
              cx={node.x}
              cy={node.y}
              r="4"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

function IntelligenceStageVisual() {
  return (
    <svg viewBox="0 0 320 210" role="presentation" focusable="false">
      <defs>
        <NodeMask id="build-mobile-model-mask" nodes={[mobileModel]} width={320} height={210} />
      </defs>
      <g transform="translate(32 0)">
        <rect x="12" y="28" width="120" height="154" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            <rect x="26" y={44 + row * 34} width="22" height="20" />
            <path d={`M60 ${54 + row * 34}h55`} />
            <path className={styles.accentPath} d={`M84 ${61 + row * 34}h20`} />
          </g>
        ))}
        <g mask="url(#build-mobile-model-mask)">
          {[0, 1, 2, 3].map((row) => {
            const y = 54 + row * 34;
            return (
              <path
                className={row === 1 ? styles.accentPath : undefined}
                key={row}
                d={`M132 ${y}C166 ${y} 166 ${mobileModel.point.y} ${point(mobileModel.point)}`}
              />
            );
          })}
          <path d={`${polylinePath(mobileModelVertices)}Z`} />
          {mobileModelVertices.map((vertex) => (
            <path key={point(vertex)} d={segmentPath({ start: vertex, end: mobileModel.point })} />
          ))}
        </g>
        <circle
          className={styles.accentNode}
          cx={mobileModel.point.x}
          cy={mobileModel.point.y}
          r={mobileModel.radius}
        />
      </g>
    </svg>
  );
}

function SystemsStageVisual() {
  return (
    <svg viewBox="0 0 320 220" role="presentation" focusable="false">
      <rect className={styles.systemOuter} x="26" y="16" width="268" height="188" rx="5" />
      <path d="M26 43h268M67 43v161M258 43v161" />
      <circle cx="39" cy="30" r="2.5" />
      <circle cx="49" cy="30" r="2.5" />
      <circle cx="59" cy="30" r="2.5" />
      <path d="M82 169c30-67 57-37 76-89 18-48 58-38 91 12" />
      <path d="M85 64c39 34 69 47 93 46 24-1 47 17 69 53" />
      <path className={styles.accentSelection} d="M168 87l40-16 30 31-18 45-43 7-25-36z" />
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          <rect className={row === 1 ? styles.accentPath : undefined} x="39" y={62 + row * 31} width="7" height="7" />
          <path d={`M51 ${66 + row * 31}h10`} />
          <rect x="269" y={62 + row * 31} width="7" height="7" />
        </g>
      ))}
    </svg>
  );
}

export function WhatIBuildResponsiveVisual({ stage }: { stage: ResponsiveStageIndex }) {
  if (stage === 0) return <SpatialStageVisual />;
  if (stage === 1) return <IntelligenceStageVisual />;
  return <SystemsStageVisual />;
}

export function WhatIBuildVisual() {
  return (
    <div className={styles.desktopVisual} data-build-visual aria-hidden="true">
      <svg viewBox="0 0 1600 500" role="presentation" focusable="false">
        <DesktopDefinitions />

        <g data-build-spatial transform="translate(30 0)">
          <g data-spatial-layer className={styles.spatialLayerTop}>
            <path data-layer-boundary d="M42 96l146-82 176 57-151 87z" />
            <g data-spatial-content="top" clipPath="url(#build-spatial-top-clip)">
              {topGridLines.map((path) => (
                <path key={path} d={path} />
              ))}
              <path className={styles.cellFill} d={cellPath(2, 1)} />
              <path d={cellPath(4, 3)} />
            </g>
          </g>

          <g data-spatial-layer>
            <path data-layer-boundary d={`${polylinePath(middlePlane)}Z`} />
            <g data-spatial-content="middle" clipPath="url(#build-spatial-middle-clip)">
              <g mask="url(#build-spatial-node-mask)">
                <path d="M70 281c32-49 75-56 119-28 40 25 80 17 133-25" />
                <path d="M72 248c45-2 84-13 115-34 39-26 82-12 133 30" />
                <path className={styles.accentPath} d={polylinePath(spatialRoute)} />
              </g>
              {spatialRoute.map((node, index) => (
                <circle
                  className={index === 4 ? styles.accentNode : styles.routePoint}
                  key={point(node)}
                  cx={node.x}
                  cy={node.y}
                  r="4"
                />
              ))}
            </g>
          </g>

          <g data-spatial-layer className={styles.spatialLayerBottom}>
            <path data-layer-boundary d="M46 430l153-83 169 60-154 91z" />
            <g data-spatial-content="bottom" clipPath="url(#build-spatial-bottom-clip)">
              <path d="M70 444c44-58 96-69 151-35 43 27 80 19 121-9" />
              <path d="M82 464c37-36 75-51 112-45 49 8 87-5 126-38" />
              {observationPoints.map(([cx, cy], index) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index % 4 === 0 ? 2.5 : 1.5} />
              ))}
            </g>
          </g>
        </g>

        <g className={styles.connector} data-flow-connector>
          <path
            d={segmentPath({
              start: { x: spatialOutput.x + 11, y: spatialOutput.y },
              end: { x: tableInput.x - 12, y: tableInput.y },
            })}
            markerEnd="url(#build-arrow)"
          />
          <circle
            className={styles.accentFill}
            cx={(spatialOutput.x + 11 + tableInput.x - 12) / 2}
            cy={spatialOutput.y}
            r="5"
          />
        </g>

        <g className={styles.intelligenceComposite} data-build-intelligence>
          <g
            transform={`translate(${tableTransform.x} ${tableTransform.y}) scale(${tableTransform.scaleX} ${tableTransform.scaleY})`}
          >
            <g data-build-data>
              <rect className={styles.dataFrame} {...tableFrame} />
              {tableRows.map(({ top, center }) => (
                <g data-data-row key={top}>
                  <rect x="486" y={top} width="42" height="36" />
                  <path d={`M542 ${center}h68M626 ${center}h70`} />
                  <path className={styles.accentPath} d={`M648 ${center}h20`} />
                </g>
              ))}
              <path
                d={`M${tableFrame.x + 58} ${tableFrame.y}v${tableFrame.height}M${tableFrame.x + 146} ${tableFrame.y}v${tableFrame.height}`}
              />
            </g>
          </g>

          <g className={styles.streams} data-build-streams mask="url(#build-model-node-mask)">
            {[0, 2, 3, 5].map((row, index) => {
              const start = { x: tableOutput.x, y: tableTransform.y + tableRows[row].center * tableTransform.scaleY };
              const end = buildModelNodes["0"].point;
              return (
                <path
                  data-stream
                  key={row}
                  className={index === 1 || index === 2 ? styles.accentPath : undefined}
                  d={`M${point(start)}C${start.x + 34} ${start.y} ${end.x - 32} ${end.y} ${point(end)}`}
                />
              );
            })}
          </g>
          <g data-build-model>
            {buildModelConnections.map(
              ({ segment }, index) =>
                segment && (
                  <path
                    data-model-edge
                    className={buildModelEdges[index].accent ? styles.accentPath : undefined}
                    key={segmentPath(segment)}
                    d={segmentPath(segment)}
                  />
                ),
            )}
            {Object.entries(buildModelNodes).map(([id, node]) => (
              <circle
                data-model-node
                className={node.accent ? styles.accentNode : styles.routePoint}
                key={id}
                cx={node.point.x}
                cy={node.point.y}
                r={node.radius}
              />
            ))}
          </g>
        </g>

        <path
          className={`${styles.connector} ${styles.systemArrow}`}
          data-system-arrow
          d={segmentPath({
            start: {
              x: buildModelNodes["5"].point.x + buildModelNodes["5"].radius + 8,
              y: buildModelNodes["5"].point.y,
            },
            end: { x: systemInput.x - 12, y: systemInput.y },
          })}
          markerEnd="url(#build-arrow)"
        />

        <g
          transform={`translate(${systemTransform.x} ${systemTransform.y}) scale(${systemTransform.scaleX} ${systemTransform.scaleY})`}
        >
          <g data-build-system>
            <rect className={styles.systemOuter} {...systemFrame} rx="8" />
            <path
              d={`M${systemFrame.x} ${systemFrame.y + 32}h${systemFrame.width}M${systemFrame.x + 52} ${systemFrame.y + 32}v${systemFrame.height - 32}M${systemFrame.x + 278} ${systemFrame.y + 32}v${systemFrame.height - 32}`}
            />
            {[1244, 1257, 1270].map((x) => (
              <circle
                key={x}
                r="3"
                transform={`translate(${x} ${systemFrame.y + 16}) scale(${1 / systemTransform.scaleX} ${1 / systemTransform.scaleY})`}
              />
            ))}
            {Array.from({ length: 7 }, (_, index) => (
              <g data-system-control key={`left-${index}`}>
                <rect
                  className={index === 2 || index === 3 ? styles.accentPath : undefined}
                  x="1244"
                  y={110 + index * 38}
                  width="9"
                  height="9"
                />
                <path d={`M1260 ${115 + index * 38}h13`} />
              </g>
            ))}
            <path d="M1300 352c34-83 70-56 88-135 18-77 74-76 116-10" />
            <path d="M1310 116c42 43 79 68 111 77 36 10 59 43 72 92" />
            <path d="M1316 378c45-27 85-38 120-27 29 9 50 5 70-12" />
            <path className={styles.accentSelection} d="M1406 204l52-24 39 43-21 61-59 8-31-48z" />
            {Array.from({ length: 7 }, (_, index) => (
              <g data-system-control key={`right-${index}`}>
                <rect
                  className={index === 1 || index === 5 ? styles.accentPath : undefined}
                  x="1524"
                  y={110 + index * 38}
                  width="9"
                  height="9"
                />
                <path d={`M1540 ${115 + index * 38}h20`} />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
