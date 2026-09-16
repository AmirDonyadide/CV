import { point } from "../../geometry/geometry.ts";
export const journeySize = { width: 1420, height: 650 };
const degreeY = 80;
const exchangeX = 1125;
export const journeyNodes = {
  tehran: { point: { x: 70, y: degreeY }, radius: 17, primary: true, terminal: false },
  milan: { point: { x: 635, y: degreeY }, radius: 17, primary: true, terminal: false },
  karlsruhe: { point: { x: exchangeX, y: 240 }, radius: 14, primary: false, terminal: false },
  bonn: { point: { x: exchangeX, y: 486 }, radius: 19, primary: false, terminal: true },
} as const;
const { tehran, milan, karlsruhe, bonn } = journeyNodes;
const bend = { x: 903, y: 160 };
export const journeySegments = {
  main: `M${point(tehran.point)}H${milan.point.x}C${milan.point.x + 145} ${milan.point.y} ${bend.x - 67} ${milan.point.y} ${point(bend)}C${bend.x + 42} ${bend.y + 50} ${karlsruhe.point.x - 157} ${karlsruhe.point.y} ${karlsruhe.point.x - 81} ${karlsruhe.point.y}H${karlsruhe.point.x}`,
  final: `M${point(karlsruhe.point)}C${karlsruhe.point.x - 72} ${karlsruhe.point.y + 52} ${bonn.point.x - 72} ${bonn.point.y - 52} ${point(bonn.point)}`,
};
