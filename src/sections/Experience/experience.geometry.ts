import { point } from "../../geometry/geometry.ts";

const timelineX = 150;
const timelineY = 706;
export const experienceNodes = {
  safe: { point: { x: timelineX, y: 84 }, radius: 18 },
  iip: { point: { x: timelineX, y: 296 }, radius: 18 },
  nova: { point: { x: timelineX, y: 506 }, radius: 18 },
  fartak: { point: { x: 320, y: timelineY }, radius: 18 },
} as const;
export const experienceDestination = { x: 562, y: timelineY };
const { safe, nova, fartak } = experienceNodes;
export const experiencePath = `M${point(safe.point)}V${nova.point.y}C${point({ x: nova.point.x, y: nova.point.y + 110 })} ${point({ x: fartak.point.x - 110, y: fartak.point.y })} ${point(fartak.point)}H${experienceDestination.x}`;
