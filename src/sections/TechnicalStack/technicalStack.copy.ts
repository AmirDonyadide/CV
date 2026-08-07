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
    eyebrow: "07 / Technical stack",
    heading: "Technical Stack",
    supporting: "Tools are strongest when they appear in working systems. The evidence sits in the projects, research workflows, and repositories above.",
    groupLabel: "Technical skill groups",
    evidenceLabel: "Evidence",
    footer: "A stack built for spatial systems.",
    flow: ["Data", "Models", "Applications", "Decisions"],
    groups: [
      { ...skillGroups[0], title: "Programming", evidence: "CV · project code · portfolio" },
      { ...skillGroups[1], title: "Geospatial", evidence: "NL2MAP · LayerAlterator · landslide mapping" },
      { ...skillGroups[2], title: "Data / ML", evidence: "NL2MAP · computer vision · research workflows" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Project repositories · research computing" },
    ],
  },
  de: {
    eyebrow: "07 / Technischer Stack",
    heading: "Technischer Stack",
    supporting: "Werkzeuge überzeugen in funktionierenden Systemen. Die Nachweise stehen in den Projekten, Forschungsworkflows und Repositories oben.",
    groupLabel: "Technische Kompetenzgruppen",
    evidenceLabel: "Nachweis",
    footer: "Ein Stack für räumliche Systeme.",
    flow: ["Daten", "Modelle", "Anwendungen", "Entscheidungen"],
    groups: [
      { ...skillGroups[0], title: "Programmierung", evidence: "CV · Projektcode · Portfolio" },
      { ...skillGroups[1], title: "Geospatial", evidence: "NL2MAP · LayerAlterator · Hangrutschungskartierung" },
      { ...skillGroups[2], title: "Daten / ML", evidence: "NL2MAP · Computer Vision · Forschungsworkflows" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Projekt-Repositories · Research Computing" },
    ],
  },
  it: {
    eyebrow: "07 / Stack tecnico",
    heading: "Stack tecnico",
    supporting: "Gli strumenti hanno più valore quando compaiono in sistemi funzionanti. Le prove sono nei progetti, nei workflow di ricerca e nei repository qui sopra.",
    groupLabel: "Gruppi di competenze tecniche",
    evidenceLabel: "Evidenza",
    footer: "Uno stack costruito per sistemi spaziali.",
    flow: ["Dati", "Modelli", "Applicazioni", "Decisioni"],
    groups: [
      { ...skillGroups[0], title: "Programmazione", evidence: "CV · codice dei progetti · portfolio" },
      { ...skillGroups[1], title: "Geospaziale", evidence: "NL2MAP · LayerAlterator · mappatura frane" },
      { ...skillGroups[2], title: "Dati / ML", evidence: "NL2MAP · computer vision · workflow di ricerca" },
      { ...skillGroups[3], title: "Web", evidence: "SE4G · PoliYoga · WebGIS" },
      { ...skillGroups[4], title: "Engineering", evidence: "Repository dei progetti · research computing" },
    ],
  },
};
