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
      <path className={styles.geographicArc} d="M70 475C178 545 326 575 522 562" />

      <path
        className={styles.routeGuide}
        d="M70 80H635C780 80 836 80 903 160C945 210 968 240 1044 240H1150"
      />
      <path
        className={styles.routeProgress}
        data-journey-segment="main"
        d="M70 80H635C780 80 836 80 903 160C945 210 968 240 1044 240H1150"
      />
      <path className={styles.routeGuide} d="M1044 240C995 290 994 446 1044 486H1150" />
      <path
        className={styles.routeProgress}
        data-journey-segment="branch"
        d="M1044 240C995 290 994 446 1044 486H1150"
      />

      <path className={styles.originDrop} d="M70 80v82" />
      <path className={styles.originDrop} d="M635 80v82" />
      <path className={styles.exchangeTick} d="M1150 204v72M1150 450v72" />

      {[
        { id: "tehran", x: 70, y: 80, primary: true },
        { id: "milan", x: 635, y: 80, primary: true },
        { id: "karlsruhe", x: 1150, y: 240, primary: false },
        { id: "bonn", x: 1150, y: 486, primary: false },
      ].map((node) => (
        <g
          key={node.id}
          className={styles.routeNode}
          data-journey-node={node.id}
          data-primary={node.primary ? "true" : undefined}
          transform={`translate(${node.x} ${node.y})`}
        >
          <circle className={styles.nodeHalo} r={node.primary ? 17 : 14} />
          <circle className={styles.nodeCore} r={node.primary ? 5 : 4} />
        </g>
      ))}

      <g className={styles.routeContinuation}>
        <path d="M70 520v70c0 25 17 37 42 37h490" />
        <circle cx="168" cy="627" r="7" />
        <path d="M602 627h40m-10-9 10 9-10 9" />
      </g>
    </svg>
  );
}
