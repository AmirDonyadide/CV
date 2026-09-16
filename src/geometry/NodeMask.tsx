import type { CircleNode } from "./geometry";

// Mask connectors rather than relying on node opacity or the page background.
// The same centers/radii render the visible nodes and the holes beneath them.
export function NodeMask({
  id,
  nodes,
  width,
  height,
}: {
  id: string;
  nodes: readonly CircleNode[];
  width: number;
  height: number;
}) {
  return (
    <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
      <rect width={width} height={height} style={{ fill: "white", stroke: "none" }} />
      {nodes.map(({ point, radius }) => (
        <circle
          key={`${point.x}:${point.y}`}
          cx={point.x}
          cy={point.y}
          r={radius}
          style={{ fill: "black", stroke: "none" }}
        />
      ))}
    </mask>
  );
}
