import type { Locale } from "../Hero/hero.types";
import type { TechnicalStackCopy } from "./technicalStack.types";

const skillGroups = [
  {
    id: "programming",
    number: "01",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "C++"],
  },
  {
    id: "geospatial",
    number: "02",
    skills: ["QGIS", "ArcGIS", "GeoPandas", "Rasterio", "PostGIS", "Google Earth Engine", "Shapely"],
  },
  {
    id: "data-ml",
    number: "03",
    skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Matplotlib", "Jupyter"],
  },
  {
    id: "web",
    number: "04",
    skills: ["Flask", "Dash", "Plotly", "Folium", "OpenLayers", "Vue", "Nuxt", "REST APIs", "HTML / CSS"],
  },
  {
    id: "engineering",
    number: "05",
    skills: ["Git", "Linux / Bash", "Docker", "pytest", "GitHub Actions"],
  },
];

export const technicalStackCopy: Record<Locale, TechnicalStackCopy> = {
  en: {
    heading: "Stack",
    groupLabel: "Technical skill groups",
    evidenceLabel: "Evidence",
    groups: [
      { ...skillGroups[0], title: "Programming", evidence: "CV · project code · portfolio" },
      { ...skillGroups[1], title: "Geospatial", evidence: "NL2MAP · LayerAlterator · landslide mapping" },
      { ...skillGroups[2], title: "Data / ML", evidence: "NL2MAP · computer vision · research workflows" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Project repositories · research computing" },
    ],
  },
  de: {
    heading: "Stack",
    groupLabel: "Technische Kompetenzgruppen",
    evidenceLabel: "Nachweis",
    groups: [
      { ...skillGroups[0], title: "Programmierung", evidence: "CV · Projektcode · Portfolio" },
      { ...skillGroups[1], title: "Geospatial", evidence: "NL2MAP · LayerAlterator · Hangrutschungskartierung" },
      { ...skillGroups[2], title: "Daten / ML", evidence: "NL2MAP · Computer Vision · Forschungsworkflows" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Projekt-Repositories · Research Computing" },
    ],
  },
  it: {
    heading: "Stack",
    groupLabel: "Gruppi di competenze tecniche",
    evidenceLabel: "Evidenza",
    groups: [
      { ...skillGroups[0], title: "Programmazione", evidence: "CV · codice dei progetti · portfolio" },
      { ...skillGroups[1], title: "Geospaziale", evidence: "NL2MAP · LayerAlterator · mappatura frane" },
      { ...skillGroups[2], title: "Dati / ML", evidence: "NL2MAP · computer vision · workflow di ricerca" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Repository dei progetti · research computing" },
    ],
  },
};
