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
    supporting: "Spatial data, analysis and software belong in one workflow.",
    stages: [
      { name: "Spatial", detail: "Coordinates · raster · vector" },
      { name: "Data / Intelligence", detail: "Python · pipelines · models" },
      { name: "Systems", detail: "APIs · dashboards · WebGIS" },
    ],
  },
  de: {
    heading: "Was ich entwickle",
    supporting: "Geodaten, Analyse und Software gehören in einen gemeinsamen Workflow.",
    stages: [
      { name: "Raum", detail: "Koordinaten · Raster · Vektor" },
      { name: "Daten / Intelligenz", detail: "Python · Pipelines · Modelle" },
      { name: "Systeme", detail: "APIs · Dashboards · WebGIS" },
    ],
  },
  it: {
    heading: "Cosa realizzo",
    supporting: "Dati spaziali, analisi e software appartengono a un unico flusso di lavoro.",
    stages: [
      { name: "Spazio", detail: "Coordinate · raster · vettori" },
      { name: "Dati / Intelligenza", detail: "Python · pipeline · modelli" },
      { name: "Sistemi", detail: "API · dashboard · WebGIS" },
    ],
  },
};
