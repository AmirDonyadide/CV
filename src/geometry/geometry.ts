export type Point = { readonly x: number; readonly y: number };
export type CircleNode = { readonly point: Point; readonly radius: number };
export type Segment = { readonly start: Point; readonly end: Point };
export type Rectangle = Point & { readonly width: number; readonly height: number };
export type Transform = Point & { readonly scaleX: number; readonly scaleY: number };
export function trimSegmentBetweenCircles(a: CircleNode, b: CircleNode): Segment | null {
  if (a.radius < 0 || b.radius < 0) throw new RangeError("Circle radii must be nonnegative");
  const dx = b.point.x - a.point.x;
  const dy = b.point.y - a.point.y;
  const length = Math.hypot(dx, dy);
  if (length <= a.radius + b.radius) return null;
  return {
    start: { x: a.point.x + (dx / length) * a.radius, y: a.point.y + (dy / length) * a.radius },
    end: { x: b.point.x - (dx / length) * b.radius, y: b.point.y - (dy / length) * b.radius },
  };
}
export function resolveEdges<Key extends string>(
  nodes: Record<Key, CircleNode>,
  edges: readonly { from: Key; to: Key }[],
) {
  return edges.map((edge) => ({
    from: nodes[edge.from],
    to: nodes[edge.to],
    segment: trimSegmentBetweenCircles(nodes[edge.from], nodes[edge.to]),
  }));
}
export function rectangleAnchor(rectangle: Rectangle, side: "left" | "right" | "top" | "bottom"): Point {
  return {
    x: rectangle.x + rectangle.width * (side === "left" ? 0 : side === "right" ? 1 : 0.5),
    y: rectangle.y + rectangle.height * (side === "top" ? 0 : side === "bottom" ? 1 : 0.5),
  };
}
export function transformPoint(point: Point, transform: Transform): Point {
  return { x: transform.x + point.x * transform.scaleX, y: transform.y + point.y * transform.scaleY };
}

export const point = ({ x, y }: Point) => `${x} ${y}`;
export const segmentPath = ({ start, end }: Segment) => `M${point(start)}L${point(end)}`;
export const polylinePath = (points: readonly Point[]) => points.map((p, i) => `${i ? "L" : "M"}${point(p)}`).join("");
