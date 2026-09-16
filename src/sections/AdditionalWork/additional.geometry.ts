import { rectangleAnchor, resolveEdges } from "../../geometry/geometry.ts";

export const classifierImages = { x: 62, y: 76, width: 106, height: 106 };
export const classifierBaseline = rectangleAnchor(classifierImages, "right").y;
export const classifierMatrix = { x: 468, y: classifierBaseline - 46, width: 92, height: 92 };
export const classifierNodes = Object.fromEntries(
  Array.from({ length: 12 }, (_, index) => {
    const column = Math.floor(index / 3),
      row = index % 3;
    return [
      `${column}-${row}`,
      {
        point: { x: 257 + column * 45, y: classifierBaseline + (row - 1) * 38 },
        radius: column === 2 && row === 1 ? 7 : 4,
      },
    ];
  }),
);
export const classifierEdges = [
  ["0-0", "1-1"],
  ["1-1", "2-0"],
  ["2-0", "3-1"],
  ["0-1", "1-1"],
  ["1-1", "2-1"],
  ["2-1", "3-1"],
  ["0-2", "1-1"],
  ["1-1", "2-2"],
  ["2-2", "3-1"],
].map(([from, to]) => ({ from, to }));
export const classifierConnections = resolveEdges(classifierNodes, classifierEdges);
export const landsatBaseline = 118;
export const landsatGrid = { x: 260, y: landsatBaseline - 35, width: 70, height: 70 };
export const landsatOutput = [
  { x: 414, y: 69 },
  { x: 498, y: 85 },
  { x: 486, y: 167 },
  { x: 402, y: 153 },
];
const [topLeft, , , bottomLeft] = landsatOutput;
export const landsatOutputAnchor = {
  x: topLeft.x + ((bottomLeft.x - topLeft.x) * (landsatBaseline - topLeft.y)) / (bottomLeft.y - topLeft.y),
  y: landsatBaseline,
};
export const sliderBaseline = 114.5;
export const sliderRows = [12, 48, 76, 27].map((x, index) => ({ x, y: sliderBaseline + (index - 1.5) * 28 }));
export const yogaPanel = { x: 218, y: 105, width: 138, height: 61 };
export const yogaOutput = rectangleAnchor(yogaPanel, "right");
