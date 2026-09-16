import { useId } from "react";
import { NodeMask } from "../../geometry/NodeMask";
import { point } from "../../geometry/geometry";
import { journeyNodes, journeySegments, journeySize } from "./journey.geometry";
import styles from "./Journey.module.css";

interface JourneyRouteProps {
  label: string;
}

export function JourneyRoute({ label }: JourneyRouteProps) {
  const maskId = useId();
  return (
    <svg
      className={styles.routeGraphic}
      viewBox={`0 0 ${journeySize.width} ${journeySize.height}`}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <NodeMask id={maskId} nodes={Object.values(journeyNodes)} {...journeySize} />
        <linearGradient id="journey-route-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#45bfe6" />
          <stop offset="0.52" stopColor="#45bfe6" />
          <stop offset="0.76" stopColor="#a5adb1" />
          <stop offset="1" stopColor="#69747a" />
        </linearGradient>
      </defs>

      <path className={styles.geographicArc} d="M106 62C305 -37 473 -33 635 57" />

      <g mask={`url(#${maskId})`}>
        {Object.entries(journeySegments).map(([id, d]) => (
          <g key={id}>
            <path className={styles.routeGuide} d={d} />
            <path className={styles.routeProgress} data-journey-segment={id} d={d} />
          </g>
        ))}
        {Object.values(journeyNodes).map((node) => (
          <path
            key={node.point.x + ":" + node.point.y}
            className={node.primary ? styles.originDrop : styles.exchangeTick}
            d={
              node.primary
                ? `M${point(node.point)}v82`
                : `M${node.point.x} ${node.point.y - 36}V${node.point.y + (node.terminal ? 0 : 36)}`
            }
          />
        ))}
      </g>

      {Object.entries(journeyNodes).map(([id, node]) => (
        <g
          key={id}
          className={styles.routeNode}
          data-journey-node={id}
          data-primary={node.primary ? "true" : undefined}
          data-terminal={node.terminal ? "true" : undefined}
          transform={`translate(${point(node.point)})`}
        >
          {node.terminal && <circle className={styles.terminalRing} r={node.radius} />}
          <circle className={styles.nodeHalo} r={node.terminal ? journeyNodes.karlsruhe.radius : node.radius} />
          <circle className={styles.nodeCore} r={node.primary ? 5 : 4} />
        </g>
      ))}
    </svg>
  );
}
