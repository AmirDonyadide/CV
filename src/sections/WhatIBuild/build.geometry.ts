import { rectangleAnchor, transformPoint, resolveEdges } from "../../geometry/geometry.ts";

export const middlePlane = [
  { x: 44, y: 261 },
  { x: 195, y: 178 },
  { x: 367, y: 240 },
  { x: 213, y: 327 },
];
export const spatialOutput = { x: middlePlane[2].x + 30, y: middlePlane[2].y };
const flowY = spatialOutput.y;
export const tableFrame = { x: 470, y: 92, width: 254, height: 308 };
export const tableTransform = {
  x: 157,
  y: flowY - (tableFrame.y + tableFrame.height / 2) * 0.84,
  scaleX: 0.84,
  scaleY: 0.84,
};
export const tableInput = transformPoint(rectangleAnchor(tableFrame, "left"), tableTransform);
export const tableOutput = transformPoint(rectangleAnchor(tableFrame, "right"), tableTransform);
export const tableRows = Array.from({ length: 6 }, (_, i) => ({ top: 108 + i * 48, center: 126 + i * 48 }));
export const modelBaseline = tableOutput.y;
const modelTransform = { x: 72, y: 37.8, scaleX: 0.86, scaleY: 0.86 };
const modelY = 242.1;
const originalBaseline = transformPoint({ x: 0, y: modelY }, modelTransform).y;
const modelPoints = [
  [904.65, modelY, true],
  [970, 178, false],
  [970, 316, false],
  [1038, modelY, true],
  [1078, 330, false],
  [1120, modelY, true],
] as const;
export const buildModelNodes = Object.fromEntries(
  modelPoints.map(([x, y, accent], index) => {
    const p = transformPoint({ x, y }, modelTransform);
    return [
      String(index),
      {
        point: { x: p.x, y: modelBaseline + p.y - originalBaseline },
        radius: (accent ? 9 : 8) * modelTransform.scaleX,
        accent,
      },
    ];
  }),
);
export const buildModelEdges = [
  { from: "0", to: "1" },
  { from: "0", to: "2" },
  { from: "0", to: "3", accent: true },
  { from: "1", to: "3" },
  { from: "1", to: "5" },
  { from: "2", to: "3" },
  { from: "2", to: "4" },
  { from: "3", to: "4" },
  { from: "3", to: "5", accent: true },
  { from: "4", to: "5" },
];
export const buildModelConnections = resolveEdges(buildModelNodes, buildModelEdges);
export const systemFrame = { x: 1228, y: 54, width: 346, height: 370 };
export const systemTransform = {
  x: -379,
  y: flowY - (systemFrame.y + systemFrame.height / 2),
  scaleX: 1.245,
  scaleY: 1,
};
export const systemInput = transformPoint(rectangleAnchor(systemFrame, "left"), systemTransform);
export const spatialRoute = [
  [92, 278],
  [123, 247],
  [159, 255],
  [185, 227],
  [226, 239],
  [268, 220],
  [315, 237],
].map(([x, y]) => ({ x, y }));
export const mobileSpatialRoute = [
  [25, 117],
  [52, 96],
  [81, 104],
  [111, 77],
  [145, 90],
  [188, 69],
].map(([x, y]) => ({ x, y }));
export const mobileModel = { point: { x: 202, y: 106 }, radius: 8 };
export const mobileModelVertices = [
  [202, 52],
  [241, 74],
  [241, 124],
  [202, 149],
  [164, 124],
  [164, 75],
].map(([x, y]) => ({ x, y }));
