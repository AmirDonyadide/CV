import { transformPoint, rectangleAnchor, segmentPath, polylinePath } from "../../geometry/geometry.ts";
export const coordinateCenter = { x: 128, y: 372 };
export const gridCenter = { x: 632, y: 372 };
export const heroDataFrame = { x: 884, y: 280, width: 142, height: 190 };
export const heroSystemFrame = { x: 1178, y: 238, width: 356, height: 286 };

export type VisualStateKey = "coordinate" | "points" | "grid" | "layers" | "data" | "model" | "system";
interface StateLayout {
  key: VisualStateKey;
  origin: readonly [number, number];
  activeX: number;
  activeScale: number;
  historyX: number;
  historyScale: number;
  historyOpacity: number;
  overviewX: number;
  overviewScale: number;
  overviewOpacity: number;
}

export const stateLayouts: readonly StateLayout[] = [
  {
    key: "coordinate",
    origin: [coordinateCenter.x, coordinateCenter.y],
    activeX: 672,
    activeScale: 1.18,
    historyX: 12,
    historyScale: 0.72,
    historyOpacity: 0.38,
    overviewX: -10,
    overviewScale: 0.72,
    overviewOpacity: 0.52,
  },
  {
    key: "points",
    origin: [391, 372],
    activeX: 409,
    activeScale: 1,
    historyX: -116,
    historyScale: 0.58,
    historyOpacity: 0.4,
    overviewX: -10,
    overviewScale: 0.58,
    overviewOpacity: 0.48,
  },
  {
    key: "grid",
    origin: [gridCenter.x, gridCenter.y],
    activeX: 168,
    activeScale: 1,
    historyX: -227,
    historyScale: 0.66,
    historyOpacity: 0.42,
    overviewX: -15,
    overviewScale: 0.66,
    overviewOpacity: 0.56,
  },
  {
    key: "layers",
    origin: [766, 381],
    activeX: 34,
    activeScale: 1,
    historyX: -246,
    historyScale: 0.62,
    historyOpacity: 0.44,
    overviewX: 25,
    overviewScale: 0.62,
    overviewOpacity: 0.58,
  },
  {
    key: "data",
    origin: [955, 375],
    activeX: -155,
    activeScale: 1,
    historyX: -335,
    historyScale: 0.66,
    historyOpacity: 0.48,
    overviewX: 75,
    overviewScale: 0.66,
    overviewOpacity: 0.6,
  },
  {
    key: "model",
    origin: [1023, 363],
    activeX: -223,
    activeScale: 1,
    historyX: -293,
    historyScale: 0.64,
    historyOpacity: 0.52,
    overviewX: 205,
    overviewScale: 0.64,
    overviewOpacity: 0.65,
  },
  {
    key: "system",
    origin: [1356, 381],
    activeX: -376,
    activeScale: 1.03,
    historyX: -376,
    historyScale: 1.03,
    historyOpacity: 1,
    overviewX: 180,
    overviewScale: 0.82,
    overviewOpacity: 0.92,
  },
];

interface OverviewLayout {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

export const mobileOverviewLayouts: Record<VisualStateKey, OverviewLayout> = {
  coordinate: { x: 402, y: -112, scale: 0.62, opacity: 0.58 },
  points: { x: 309, y: -112, scale: 0.52, opacity: 0.56 },
  grid: { x: 238, y: -112, scale: 0.55, opacity: 0.62 },
  layers: { x: 274, y: -121, scale: 0.5, opacity: 0.66 },
  data: { x: -335, y: 65, scale: 0.62, opacity: 0.68 },
  model: { x: -203, y: 77, scale: 0.6, opacity: 0.74 },
  system: { x: -360, y: 59, scale: 0.58, opacity: 0.96 },
};

// Bounds and reference centers belong to the artwork. Overview connectors use
// the exact same translations/scales as the animation, including on mobile.
const bounds = {
  coordinate: { x: 66, y: 310, width: 124, height: 124 },
  points: { x: 273, y: 255, width: 236, height: 234 },
  grid: { x: 560, y: 280, width: 144, height: 184 },
  layers: { x: 682, y: 278, width: 186, height: 206 },
  data: heroDataFrame,
  model: { x: 942, y: 264, width: 162, height: 197 },
  system: heroSystemFrame,
};
export function overviewAnchors(mobile: boolean) {
  return stateLayouts.map((state) => {
    const layout = mobile
      ? mobileOverviewLayouts[state.key]
      : { x: state.overviewX, y: stateLayouts[0].origin[1] - state.origin[1], scale: state.overviewScale };
    const transform = {
      x: layout.x + state.origin[0] * (1 - layout.scale),
      y: layout.y + state.origin[1] * (1 - layout.scale),
      scaleX: layout.scale,
      scaleY: layout.scale,
    };
    const left = transformPoint({ ...rectangleAnchor(bounds[state.key], "left"), y: state.origin[1] }, transform);
    const right = transformPoint({ ...rectangleAnchor(bounds[state.key], "right"), y: state.origin[1] }, transform);
    const top = transformPoint(rectangleAnchor(bounds[state.key], "top"), transform);
    return { left, right, top };
  });
}
export const overviewArrows = (mobile: boolean) => {
  const anchors = overviewAnchors(mobile);
  const gap = 12;
  return anchors.slice(0, -1).map((from, index) => {
    const to = anchors[index + 1];
    const start = { x: from.right.x + gap, y: from.right.y };
    if (mobile && index === 3) {
      const turnX = start.x + 24;
      const turnY = (start.y + to.left.y) / 2;
      return polylinePath([
        start,
        { x: turnX, y: start.y },
        { x: turnX, y: turnY },
        { x: to.top.x, y: turnY },
        { x: to.top.x, y: to.top.y - gap },
      ]);
    }
    return segmentPath({ start, end: { x: to.left.x - gap, y: to.left.y } });
  });
};
