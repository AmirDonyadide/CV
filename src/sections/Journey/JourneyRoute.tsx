import styles from "./Journey.module.css";

interface JourneyRouteProps {
  label: string;
}

export function JourneyRoute({ label }: JourneyRouteProps) {
  return (
    <svg
      className={styles.routeGraphic}
      viewBox="0 0 1420 650"
      role="img"
      aria-label={label}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="journey-route-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#45bfe6" />
          <stop offset="0.52" stopColor="#45bfe6" />
          <stop offset="0.76" stopColor="#a5adb1" />
          <stop offset="1" stopColor="#69747a" />
        </linearGradient>
      </defs>

      <path className={styles.geographicArc} d="M106 62C305 -37 473 -33 635 57" />

      <path
        className={styles.routeGuide}
        d="M70 80H635C780 80 836 80 903 160C945 210 968 240 1044 240H1125"
      />
      <path
        className={styles.routeProgress}
        data-journey-segment="main"
        d="M70 80H635C780 80 836 80 903 160C945 210 968 240 1044 240H1125"
      />
      <path className={styles.routeGuide} d="M1125 240C1053 292 1053 434 1125 486" />
      <path
        className={styles.routeProgress}
        data-journey-segment="final"
        d="M1125 240C1053 292 1053 434 1125 486"
      />

      <path className={styles.originDrop} d="M70 80v82" />
      <path className={styles.originDrop} d="M635 80v82" />
      <path className={styles.exchangeTick} d="M1125 204v72M1125 450v36" />

      {[
        { id: "tehran", x: 70, y: 80, primary: true, terminal: false },
        { id: "milan", x: 635, y: 80, primary: true, terminal: false },
        { id: "karlsruhe", x: 1125, y: 240, primary: false, terminal: false },
        { id: "bonn", x: 1125, y: 486, primary: false, terminal: true },
      ].map((node) => (
        <g
          key={node.id}
          className={styles.routeNode}
          data-journey-node={node.id}
          data-primary={node.primary ? "true" : undefined}
          data-terminal={node.terminal ? "true" : undefined}
          transform={`translate(${node.x} ${node.y})`}
        >
          {node.terminal && <circle className={styles.terminalRing} r={19} />}
          <circle className={styles.nodeHalo} r={node.primary ? 17 : 14} />
          <circle className={styles.nodeCore} r={node.primary ? 5 : 4} />
        </g>
      ))}
    </svg>
  );
}
