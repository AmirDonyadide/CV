import legendColors from "./legendColors.json";

export type RasterLayerId = "dtm" | "ndvi" | "slope" | "confidence" | "reclassified" | "susceptibility";
interface RasterLayer {
  width: number;
  range?: readonly [string, string];
  colors?: readonly string[];
  classes?: readonly { label: string; color: string }[];
}

// Values and palette order read from the original legends. Scientific colors
// are intentionally independent of the portfolio's cyan UI accent.
export const rasterLayers: Record<RasterLayerId, RasterLayer> = {
  dtm: { width: 1000, range: ["33", "3,948"], colors: legendColors.dtm },
  ndvi: { width: 1080, range: ["−0.985611", "0.997303"], colors: legendColors.ndvi },
  slope: { width: 1080, classes: [
    {label:"<5",color:legendColors.slope[0]},{label:"5–10",color:legendColors.slope[1]},
    {label:"10–15",color:legendColors.slope[2]},{label:"15–20",color:legendColors.slope[3]},{label:">20",color:legendColors.slope[4]},
  ] },
  confidence: { width: 1080, range: ["51", "100"], colors: legendColors.confidence },
  reclassified: { width: 1080, classes: [
    {label:"0–25",color:legendColors.reclassified[0]},{label:"25–50",color:legendColors.reclassified[1]},
    {label:"50–75",color:legendColors.reclassified[2]},{label:"75–100",color:legendColors.reclassified[3]},
  ] },
  susceptibility: { width: 1000, range: ["0", "100"], colors: legendColors.susceptibility },
};
