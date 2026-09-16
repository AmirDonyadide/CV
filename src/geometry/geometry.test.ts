import assert from "node:assert/strict";
import { test } from "node:test";
import { trimSegmentBetweenCircles, resolveEdges, rectangleAnchor, transformPoint } from "./geometry.ts";

const node = (x: number, y: number, radius: number) => ({ point: { x, y }, radius });
const near = (actual: number, expected: number) =>
  assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} != ${expected}`);

for (const { name, a, b, start, end } of [
  { name: "horizontal", a: node(0, 0, 10), b: node(100, 0, 20), start: [10, 0], end: [80, 0] },
  { name: "vertical", a: node(0, 0, 10), b: node(0, 100, 20), start: [0, 10], end: [0, 80] },
  { name: "diagonal", a: node(0, 0, 10), b: node(60, 80, 20), start: [6, 8], end: [48, 64] },
  { name: "reversed", a: node(100, 0, 20), b: node(0, 0, 10), start: [80, 0], end: [10, 0] },
  { name: "translated", a: node(-70, -90, 10), b: node(-10, -10, 20), start: [-64, -82], end: [-22, -26] },
]) {
  test(`trims ${name} edges to both circumferences`, () => {
    const segment = trimSegmentBetweenCircles(a, b);
    assert.ok(segment);
    near(segment.start.x, start[0]);
    near(segment.start.y, start[1]);
    near(segment.end.x, end[0]);
    near(segment.end.y, end[1]);
    near(Math.hypot(segment.start.x - a.point.x, segment.start.y - a.point.y), a.radius);
    near(Math.hypot(segment.end.x - b.point.x, segment.end.y - b.point.y), b.radius);
  });
}
test("omits coincident, touching and overlapping edges instead of reversing them or emitting NaN", () => {
  for (const x of [0, 15, 20]) assert.equal(trimSegmentBetweenCircles(node(0, 0, 10), node(x, 0, 10)), null);
});
test("zero-radius anchors retain their exact points", () => {
  assert.deepEqual(trimSegmentBetweenCircles(node(0, 0, 0), node(100, 0, 0)), {
    start: { x: 0, y: 0 },
    end: { x: 100, y: 0 },
  });
});
test("rejects negative circle radii", () => {
  assert.throws(() => trimSegmentBetweenCircles(node(0, 0, -1), node(10, 0, 1)), RangeError);
});
test("every edge at a hub resolves the same node and responds to radius changes", () => {
  const nodes = { hub: node(0, 0, 10), right: node(100, 0, 20), down: node(0, 100, 20), diagonal: node(60, 80, 20) };
  const edges = [
    { from: "hub", to: "right" },
    { from: "hub", to: "down" },
    { from: "hub", to: "diagonal" },
  ] as const;
  for (const edge of resolveEdges(nodes, edges)) assert.strictEqual(edge.from, nodes.hub);
  nodes.hub.radius = 20;
  for (const edge of resolveEdges(nodes, edges)) {
    assert.ok(edge.segment);
    near(Math.hypot(edge.segment.start.x, edge.segment.start.y), 20);
  }
});
test("rectangle anchors follow the center and boundary after size changes", () => {
  const rect = { x: 10, y: 20, width: 80, height: 40 };
  assert.deepEqual(rectangleAnchor(rect, "left"), { x: 10, y: 40 });
  assert.deepEqual(rectangleAnchor(rect, "right"), { x: 90, y: 40 });
  assert.deepEqual(rectangleAnchor(rect, "top"), { x: 50, y: 20 });
  assert.deepEqual(rectangleAnchor(rect, "bottom"), { x: 50, y: 60 });
  rect.height = 80;
  assert.deepEqual(rectangleAnchor(rect, "right"), { x: 90, y: 60 });
});
test("anchors and artwork use the same translate/scale transform", () => {
  assert.deepEqual(transformPoint({ x: 100, y: 50 }, { x: 20, y: -10, scaleX: 0.5, scaleY: 2 }), { x: 70, y: 90 });
});
