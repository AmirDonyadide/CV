import styles from "./WhatIBuild.module.css";

type Plane = readonly [
  readonly [number, number],
  readonly [number, number],
  readonly [number, number],
  readonly [number, number],
];

const topPlane: Plane = [[42, 96], [188, 14], [364, 71], [213, 158]];
const bottomPlane: Plane = [[46, 430], [199, 347], [368, 407], [214, 498]];

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
  [0.12, 0.2], [0.28, 0.16], [0.46, 0.18], [0.65, 0.15], [0.82, 0.2],
  [0.18, 0.4], [0.38, 0.36], [0.57, 0.42], [0.76, 0.38], [0.88, 0.46],
  [0.1, 0.62], [0.3, 0.58], [0.5, 0.64], [0.7, 0.6], [0.84, 0.68],
  [0.2, 0.8], [0.42, 0.78], [0.62, 0.82], [0.78, 0.8],
] as const;

const observationPoints = observationCoordinates.map(([u, v]) => pointOnPlane(bottomPlane, u, v));

const modelNodes = [
  { x: 904.65, y: 242.1, accent: true },
  { x: 970, y: 178, accent: false },
  { x: 970, y: 316, accent: false },
  { x: 1038, y: 242.1, accent: true },
  { x: 1078, y: 330, accent: false },
  { x: 1120, y: 242.1, accent: true },
] as const;

const modelEdges = [
  { from: 0, to: 1, accent: false },
  { from: 0, to: 2, accent: false },
  { from: 0, to: 3, accent: true },
  { from: 1, to: 3, accent: false },
  { from: 1, to: 5, accent: false },
  { from: 2, to: 3, accent: false },
  { from: 2, to: 4, accent: false },
  { from: 3, to: 4, accent: false },
  { from: 3, to: 5, accent: true },
  { from: 4, to: 5, accent: false },
] as const;

function DesktopDefinitions() {
  return (
    <defs>
      <marker id="build-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0 0L10 5 0 10z" fill="currentColor" stroke="none" />
      </marker>
      <clipPath id="build-spatial-top-clip" clipPathUnits="userSpaceOnUse">
        <path d="M42 96l146-82 176 57-151 87z" />
      </clipPath>
      <clipPath id="build-spatial-middle-clip" clipPathUnits="userSpaceOnUse">
        <path d="M44 261l151-83 172 62-154 87z" />
      </clipPath>
      <clipPath id="build-spatial-bottom-clip" clipPathUnits="userSpaceOnUse">
        <path d="M46 430l153-83 169 60-154 91z" />
      </clipPath>
    </defs>
  );
}

export function WhatIBuildVisual() {
  return (
    <>
      <div className={styles.desktopVisual} data-build-visual aria-hidden="true">
        <svg viewBox="0 0 1600 500" role="presentation" focusable="false">
          <DesktopDefinitions />

          <g data-build-spatial transform="translate(30 0)">
            <g data-spatial-layer className={styles.spatialLayerTop}>
              <path data-layer-boundary d="M42 96l146-82 176 57-151 87z" />
              <g data-spatial-content="top" clipPath="url(#build-spatial-top-clip)">
                {topGridLines.map((path) => <path key={path} d={path} />)}
                <path className={styles.cellFill} d={cellPath(2, 1)} />
                <path d={cellPath(4, 3)} />
              </g>
            </g>

            <g data-spatial-layer>
              <path data-layer-boundary d="M44 261l151-83 172 62-154 87z" />
              <g data-spatial-content="middle" clipPath="url(#build-spatial-middle-clip)">
                <path d="M70 281c32-49 75-56 119-28 40 25 80 17 133-25" />
                <path d="M72 248c45-2 84-13 115-34 39-26 82-12 133 30" />
                <path className={styles.accentPath} d="M92 278l31-31 36 8 26-28 41 12 42-19 47 17" />
                {[92, 123, 159, 185, 226, 268, 315].map((cx, index) => <circle className={index === 4 ? styles.accentNode : undefined} key={cx} cx={cx} cy={[278, 247, 255, 227, 239, 220, 237][index]} r="4" />)}
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
            <path d="M408 246h132" markerEnd="url(#build-arrow)" />
            <circle className={styles.accentFill} cx="494" cy="246" r="5" />
          </g>

          <g className={styles.intelligenceComposite} data-build-intelligence transform="translate(72 0)">
            <g transform="translate(85 8) scale(.84 .84)">
              <g data-build-data>
                <rect className={styles.dataFrame} x="470" y="92" width="254" height="308" />
                {Array.from({ length: 6 }, (_, index) => (
                  <g data-data-row key={`data-row-${108 + index * 48}`}>
                    <rect x="486" y={108 + index * 48} width="42" height="36" />
                    <path d={`M542 ${126 + index * 48}h68M626 ${126 + index * 48}h70`} />
                    <path className={styles.accentPath} d={`M648 ${126 + index * 48}h20`} />
                  </g>
                ))}
                <path d="M528 92v308M616 92v308" />
              </g>
            </g>

            <g className={styles.streams} data-build-streams>
              {[114, 194, 234, 314].map((y, index) => (
                <path data-stream key={y} className={index === 1 || index === 2 ? styles.accentPath : undefined} d={`M696 ${y}C730 ${y} 746 246 778 246`} />
              ))}
            </g>

            <g transform="translate(-140 0) translate(1000 270) scale(.86) translate(-1000 -270)">
              <g data-build-model>
                {modelEdges.map(({ from, to, accent }) => {
                  const start = modelNodes[from];
                  const end = modelNodes[to];
                  return <path data-model-edge className={accent ? styles.accentPath : undefined} key={`${from}-${to}`} d={`M${start.x} ${start.y}L${end.x} ${end.y}`} />;
                })}
                {modelNodes.map(({ x, y, accent }) => (
                  <circle data-model-node className={accent ? styles.accentNode : undefined} key={`${x}-${y}`} cx={x} cy={y} r={accent ? 9 : 8} />
                ))}
              </g>
            </g>
          </g>

          <path className={`${styles.connector} ${styles.systemArrow}`} data-system-arrow d="M1048 246h92" markerEnd="url(#build-arrow)" />

          <g transform="translate(-379 -40) scale(1.245 1)">
            <g data-build-system>
              <rect className={styles.systemOuter} x="1228" y="54" width="346" height="370" rx="8" />
              <path d="M1228 86h346M1280 86v338M1506 86v338" />
              <circle cx="1244" cy="70" r="3" />
              <circle cx="1257" cy="70" r="3" />
              <circle cx="1270" cy="70" r="3" />
              {Array.from({ length: 7 }, (_, index) => (
                <g data-system-control key={`left-${index}`}>
                  <rect className={index === 2 || index === 3 ? styles.accentPath : undefined} x="1244" y={110 + index * 38} width="9" height="9" />
                  <path d={`M1260 ${115 + index * 38}h13`} />
                </g>
              ))}
              <path d="M1300 352c34-83 70-56 88-135 18-77 74-76 116-10" />
              <path d="M1310 116c42 43 79 68 111 77 36 10 59 43 72 92" />
              <path d="M1316 378c45-27 85-38 120-27 29 9 50 5 70-12" />
              <path className={styles.accentSelection} d="M1406 204l52-24 39 43-21 61-59 8-31-48z" />
              {Array.from({ length: 7 }, (_, index) => (
                <g data-system-control key={`right-${index}`}>
                  <rect className={index === 1 || index === 5 ? styles.accentPath : undefined} x="1524" y={110 + index * 38} width="9" height="9" />
                  <path d={`M1540 ${115 + index * 38}h20`} />
                </g>
              ))}
            </g>
          </g>
        </svg>
      </div>

      <div className={styles.mobileVisual} data-build-mobile aria-hidden="true">
        <div className={styles.mobileStage} data-mobile-stage>
          <svg viewBox="0 0 320 190" role="presentation">
            <defs>
              <clipPath id="build-mobile-vector-clip" clipPathUnits="userSpaceOnUse">
                <path d="M4 91l110-42 102 38-111 45z" />
              </clipPath>
            </defs>
            <g transform="translate(18 10)">
              <path d="M4 46l110-42 102 38-111 45z" />
              <path d="M4 91l110-42 102 38-111 45z" />
              <path d="M4 136l110-42 102 38-111 45z" />
              <g data-mobile-spatial-content clipPath="url(#build-mobile-vector-clip)">
                <path className={styles.accentPath} d="M25 117l27-21 29 8 30-27 34 13 43-21" />
                {[25,52,81,111,145,188].map((cx,index)=><circle className={index===3?styles.accentNode:undefined} key={cx} cx={cx} cy={[117,96,104,77,90,69][index]} r="4" />)}
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.mobileConnector}><span /></div>
        <div className={styles.mobileStage} data-mobile-stage>
          <svg viewBox="0 0 320 210" role="presentation">
            <rect x="12" y="28" width="120" height="154" />
            {[0,1,2,3].map((row)=><g key={row}><rect x="26" y={44+row*34} width="22" height="20"/><path d={`M60 ${54+row*34}h55`}/><path className={styles.accentPath} d={`M84 ${61+row*34}h20`}/></g>)}
            {[0,1,2,3].map((row)=><path className={row===1?styles.accentPath:undefined} key={row} d={`M132 ${54+row*34}C166 ${54+row*34} 166 106 198 106`}/>)}
            <path d="M202 52l39 22 0 50-39 25-38-25V75z"/>
            <path d="M202 52v97M164 75l77 49M241 74l-77 50"/>
            <circle className={styles.accentNode} cx="202" cy="106" r="8"/>
          </svg>
        </div>
        <div className={styles.mobileConnector}><span /></div>
        <div className={styles.mobileStage} data-mobile-stage>
          <svg viewBox="0 0 320 220" role="presentation">
            <rect className={styles.systemOuter} x="26" y="16" width="268" height="188" rx="5"/>
            <path d="M26 43h268M67 43v161M258 43v161"/>
            <circle cx="39" cy="30" r="2.5"/><circle cx="49" cy="30" r="2.5"/><circle cx="59" cy="30" r="2.5"/>
            <path d="M82 169c30-67 57-37 76-89 18-48 58-38 91 12"/>
            <path d="M85 64c39 34 69 47 93 46 24-1 47 17 69 53"/>
            <path className={styles.accentSelection} d="M168 87l40-16 30 31-18 45-43 7-25-36z"/>
            {[0,1,2,3].map((row)=><g key={row}><rect className={row===1?styles.accentPath:undefined} x="39" y={62+row*31} width="7" height="7"/><path d={`M51 ${66+row*31}h10`}/><rect x="269" y={62+row*31} width="7" height="7"/></g>)}
          </svg>
        </div>
      </div>
    </>
  );
}
