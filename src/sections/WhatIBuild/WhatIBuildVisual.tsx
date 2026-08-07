import styles from "./WhatIBuild.module.css";

const modelNodes = [
  [922, 190], [1006, 152], [1040, 252], [952, 286], [1080, 330], [970, 386], [1114, 220], [1124, 404],
];

const modelEdges = [
  [0, 1], [0, 2], [0, 3], [1, 2], [1, 6], [2, 3], [2, 4], [2, 6], [3, 4], [3, 5], [4, 5], [4, 7], [5, 7], [6, 7],
];

function ArrowMarker() {
  return (
    <defs>
      <marker id="build-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0 0L10 5 0 10z" fill="currentColor" stroke="none" />
      </marker>
    </defs>
  );
}

export function WhatIBuildVisual() {
  return (
    <>
      <div className={styles.desktopVisual} data-build-visual aria-hidden="true">
        <svg viewBox="0 0 1600 430" role="presentation" focusable="false">
          <ArrowMarker />

          <g data-build-spatial transform="translate(-45 0)">
            <g data-spatial-layer className={styles.spatialLayerTop}>
              <path d="M42 104l146-82 176 57-151 87z" />
              {Array.from({ length: 7 }, (_, index) => <path key={`top-v-${index}`} d={`M${70 + index * 37} ${88 - index * 9}l145 48`} />)}
              {Array.from({ length: 5 }, (_, index) => <path key={`top-h-${index}`} d={`M${72 + index * 30} ${88 + index * 15}l144-81`} />)}
              <rect className={styles.cellFill} x="182" y="68" width="24" height="17" transform="rotate(18 194 77)" />
              <rect x="238" y="96" width="28" height="18" transform="rotate(18 252 105)" />
            </g>

            <g data-spatial-layer>
              <path d="M44 218l151-83 172 62-154 87z" />
              <path d="M70 238c32-49 75-56 119-28 40 25 80 17 133-25" />
              <path d="M72 205c45-2 84-13 115-34 39-26 82-12 133 30" />
              <path className={styles.accentPath} d="M92 235l31-31 36 8 26-28 41 12 42-19 47 17" />
              {[92, 123, 159, 185, 226, 268, 315].map((cx, index) => <circle className={index === 4 ? styles.accentNode : undefined} key={cx} cx={cx} cy={[235, 204, 212, 184, 196, 177, 194][index]} r="4" />)}
            </g>

            <g data-spatial-layer className={styles.spatialLayerBottom}>
              <path d="M46 336l153-83 169 60-154 91z" />
              <path d="M70 350c44-58 96-69 151-35 43 27 80 19 121-9" />
              <path d="M82 370c37-36 75-51 112-45 49 8 87-5 126-38" />
              {Array.from({ length: 22 }, (_, index) => (
                <circle key={`spatial-point-${80 + (index * 47) % 240}-${290 + (index * 29) % 88}`} cx={80 + (index * 47) % 240} cy={290 + (index * 29) % 88} r={index % 4 === 0 ? 2.5 : 1.5} />
              ))}
            </g>
          </g>

          <g className={styles.connector} data-flow-connector>
            <path d="M372 246h86" markerEnd="url(#build-arrow)" />
            <circle className={styles.accentFill} cx="433" cy="246" r="5" />
          </g>

          <g transform="translate(-14 -12) scale(1 .88)">
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
            {[126, 176, 226, 276, 326, 376].map((y, index) => (
              <path data-stream key={y} className={index === 2 || index === 3 ? styles.accentPath : undefined} d={`M710 ${y * 0.88 - 12}C790 ${y * 0.88 - 12} 802 246 876 246`} />
            ))}
          </g>

          <g data-build-model>
            <path className={styles.modelOrbit} d="M884 246c0-117 198-117 198 0s-198 117-198 0z" />
            <path className={styles.modelOrbit} d="M946 126c114 0 114 250 0 250s-114-250 0-250z" />
            {modelEdges.map(([from, to]) => {
              const [x1, y1] = modelNodes[from];
              const [x2, y2] = modelNodes[to];
              return <path data-model-edge key={`${from}-${to}`} d={`M${x1} ${y1}L${x2} ${y2}`} />;
            })}
            {modelNodes.map(([cx, cy], index) => (
              <circle data-model-node className={index === 2 || index === 3 ? styles.accentNode : undefined} key={`${cx}-${cy}`} cx={cx} cy={cy} r={index === 2 || index === 3 ? 9 : 8} />
            ))}
          </g>

          <path className={`${styles.connector} ${styles.systemArrow}`} data-system-arrow d="M1138 246h32" markerEnd="url(#build-arrow)" />

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
            <g transform="translate(18 10)">
              <path d="M4 46l110-42 102 38-111 45z" />
              <path d="M4 91l110-42 102 38-111 45z" />
              <path d="M4 136l110-42 102 38-111 45z" />
              <path className={styles.accentPath} d="M25 117l27-21 29 8 30-27 34 13 43-21" />
              {[25,52,81,111,145,188].map((cx,index)=><circle className={index===3?styles.accentNode:undefined} key={cx} cx={cx} cy={[117,96,104,77,90,69][index]} r="4" />)}
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
