import assert from "node:assert/strict";
import { test } from "node:test";
const near = (actual: number, expected: number) =>
  assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} != ${expected}`);

// Consumer invariants: catch unrelated coordinate edits that disconnect diagrams.
import {
  buildModelNodes,
  buildModelConnections,
  tableInput,
  tableOutput,
  systemInput,
  spatialOutput,
} from "../sections/WhatIBuild/build.geometry.ts";
import {
  classifierNodes,
  classifierConnections,
  classifierBaseline,
  classifierImages,
  classifierMatrix,
} from "../sections/AdditionalWork/additional.geometry.ts";
import { overviewAnchors } from "../sections/Hero/hero.geometry.ts";
import { experienceNodes } from "../sections/Experience/experience.geometry.ts";
import { journeyNodes } from "../sections/Journey/journey.geometry.ts";

test("capability workflow anchors share one horizontal axis", () => {
  for (const anchor of [
    tableInput,
    tableOutput,
    systemInput,
    buildModelNodes["0"].point,
    buildModelNodes["3"].point,
    buildModelNodes["5"].point,
  ])
    near(anchor.y, spatialOutput.y);
});
test("classifier arrows, tiles, network and matrix share their vertical center", () => {
  near(classifierImages.y + classifierImages.height / 2, classifierBaseline);
  near(classifierMatrix.y + classifierMatrix.height / 2, classifierBaseline);
  for (const column of [0, 1, 2, 3]) near(classifierNodes[`${column}-1`].point.y, classifierBaseline);
});
for (const [name, nodes, edges] of [
  ["capability", buildModelNodes, buildModelConnections],
  ["classifier", classifierNodes, classifierConnections],
] as const) {
  test(`${name} actual edges retain node identity and terminate on both node boundaries`, () => {
    for (const edge of edges) {
      assert.ok(Object.values(nodes).includes(edge.from));
      assert.ok(Object.values(nodes).includes(edge.to));
      assert.ok(edge.segment);
      near(
        Math.hypot(edge.segment.start.x - edge.from.point.x, edge.segment.start.y - edge.from.point.y),
        edge.from.radius,
      );
      near(Math.hypot(edge.segment.end.x - edge.to.point.x, edge.segment.end.y - edge.to.point.y), edge.to.radius);
    }
  });
}
test("hero overview arrows use a common row center at both layouts", () => {
  for (const mobile of [false, true]) {
    const anchors = overviewAnchors(mobile);
    anchors.forEach((from, i) => {
      if (i < anchors.length - 1 && !(mobile && i === 3)) near(from.right.y, anchors[i + 1].left.y);
    });
  }
});
test("straight timeline events share their path axis", () => {
  near(experienceNodes.safe.point.x, experienceNodes.iip.point.x);
  near(experienceNodes.safe.point.x, experienceNodes.nova.point.x);
  near(journeyNodes.tehran.point.y, journeyNodes.milan.point.y);
  near(journeyNodes.karlsruhe.point.x, journeyNodes.bonn.point.x);
});
