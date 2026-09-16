import type { Locale } from "../Hero/hero.types";

export interface WhatIBuildCopy {
  heading: string;
  supporting: string;
  stages: Array<{
    name: string;
    detail: string;
  }>;
}

export const whatIBuildCopy: Record<Locale, WhatIBuildCopy> = {
  en: {
    heading: "What I Build",
    supporting: "Remote sensing · GIS · Machine learning",
    stages: [
      { name: "Spatial", detail: "Coordinates · raster · vector" },
      { name: "Analysis", detail: "Python · pipelines · models" },
      { name: "Systems", detail: "APIs · dashboards · WebGIS" },
    ],
  },
  de: {
    heading: "Was ich entwickle",
    supporting: "Fernerkundung · GIS · Machine Learning",
    stages: [
      { name: "Raum", detail: "Koordinaten · Raster · Vektor" },
      { name: "Analyse", detail: "Python · Pipelines · Modelle" },
      { name: "Systeme", detail: "APIs · Dashboards · WebGIS" },
    ],
  },
  it: {
    heading: "Cosa realizzo",
    supporting: "Telerilevamento · GIS · Machine learning",
    stages: [
      { name: "Spazio", detail: "Coordinate · raster · vettori" },
      { name: "Analisi", detail: "Python · pipeline · modelli" },
      { name: "Sistemi", detail: "API · dashboard · WebGIS" },
    ],
  },
};
