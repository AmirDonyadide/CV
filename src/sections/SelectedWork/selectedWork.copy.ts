import type { Locale } from "../Hero/hero.types";
import type { SelectedWorkCopy } from "./selectedWork.types";

const technologies = {
  nl2map: ["Python", "Scikit-learn", "GeoPandas", "Shapely"],
  se4g: ["Python", "Dash", "Flask", "Plotly", "Folium", "GeoPandas", "PostgreSQL / PostGIS"],
  landslide: ["QGIS", "Random Forest", "Remote sensing", "Python", "OpenLayers", "WebGIS"],
};

export const selectedWorkCopy: Record<Locale, SelectedWorkCopy> = {
  en: {
    heading: "Selected Work",
    workflowVisualizationsLabel: "Project workflow visualizations",
    caseStudyCta: "View project",
    fields: { role: "Role", technologies: "Stack", output: "Output" },
    projects: [
      {
        slug: "nl2map",
        number: "01",
        shortTitle: "NL2MAP",
        title: "Map operations from language",
        context: "MSc thesis · University of Bonn + Politecnico di Milano",
        role: "Thesis researcher · Study interface developer",
        technologies: technologies.nl2map,
        output: "Map-comparison study and operation-inference pipeline.",
        evidenceLinks: [
          { label: "Open study", href: "https://amirdonyadide.github.io/Thesis_UserStudy/" },
          { label: "Source code", href: "https://github.com/AmirDonyadide/Thesis_UserStudy" }
        ],
        summary: "Classify cartographic generalization operations from user descriptions of paired building maps, linking natural language to geometric changes."
      },
      {
        slug: "se4g",
        number: "02",
        shortTitle: "SE4G",
        title: "Olympic venue hazard dashboard",
        context: "Geoinformatics course project",
        role: "Contributor · Four-person team",
        technologies: technologies.se4g,
        output: "Maps, charts, tables, and CSV export.",
        evidenceLinks: [
          { label: "Source code", href: "https://github.com/AmirDonyadide/SE4G" }
        ],
        summary: "Explore hydrogeological indicators, Olympic venues, and user reports by municipality through a PostGIS-backed Dash application."
      },
      {
        slug: "landslide",
        number: "03",
        shortTitle: "Landslide",
        title: "Landslide susceptibility mapping",
        context: "MSc GIS project · Bergamo, Italy",
        role: "Contributor · Three-person team",
        technologies: technologies.landslide,
        output: "Susceptibility maps, population exposure, and WebGIS.",
        evidenceLinks: [
          { label: "Open WebGIS", href: "https://amirdonyadide.github.io/GIS-Course-Polimi-2024/" },
          { label: "Source code", href: "https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" }
        ],
        summary: "Map landslide susceptibility with Random Forest using DTM-derived terrain, DUSAF land use, NDVI, buffers, and landslide inventory."
      }
    ]
  },
  de: {
    heading: "Ausgewählte Projekte",
    workflowVisualizationsLabel: "Visualisierungen der Projektabläufe",
    caseStudyCta: "Projekt ansehen",
    fields: { role: "Rolle", technologies: "Stack", output: "Ergebnis" },
    projects: [
      {
        slug: "nl2map",
        number: "01",
        shortTitle: "NL2MAP",
        title: "Kartenoperationen aus Sprache",
        context: "Masterarbeit · Universität Bonn + Politecnico di Milano",
        role: "Thesisforscher · Entwickler der Studienoberfläche",
        technologies: technologies.nl2map,
        output: "Kartenvergleichsstudie und Pipeline zur Operationsinferenz.",
        evidenceLinks: [
          { label: "Studie öffnen", href: "https://amirdonyadide.github.io/Thesis_UserStudy/" },
          { label: "Quellcode", href: "https://github.com/AmirDonyadide/Thesis_UserStudy" }
        ],
        summary: "Kartografische Generalisierungsoperationen aus Beschreibungen gepaarter Gebäudekarten klassifizieren und mit Geometrieänderungen verknüpfen."
      },
      {
        slug: "se4g",
        number: "02",
        shortTitle: "SE4G",
        title: "Gefahren an Olympia-Standorten",
        context: "Geoinformatik-Kursprojekt",
        role: "Mitwirkender · Vierköpfiges Team",
        technologies: technologies.se4g,
        output: "Karten, Diagramme, Tabellen und CSV-Export.",
        evidenceLinks: [
          { label: "Quellcode", href: "https://github.com/AmirDonyadide/SE4G" }
        ],
        summary: "Hydrogeologische Indikatoren, Olympia-Standorte und Nutzermeldungen je Gemeinde in einer PostGIS-gestützten Dash-Anwendung erkunden."
      },
      {
        slug: "landslide",
        number: "03",
        shortTitle: "Landslide",
        title: "Anfälligkeit für Hangrutschungen",
        context: "MSc-GIS-Projekt · Bergamo, Italien",
        role: "Mitwirkender · Dreiköpfiges Team",
        technologies: technologies.landslide,
        output: "Suszeptibilitätskarten, Bevölkerungsexposition und WebGIS.",
        evidenceLinks: [
          { label: "WebGIS öffnen", href: "https://amirdonyadide.github.io/GIS-Course-Polimi-2024/" },
          { label: "Quellcode", href: "https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" }
        ],
        summary: "Hangrutschungssuszeptibilität mit Random Forest aus DGM-Geländeparametern, DUSAF-Landnutzung, NDVI, Puffern und Hangrutschungsinventar kartieren."
      }
    ]
  },
  it: {
    heading: "Progetti selezionati",
    workflowVisualizationsLabel: "Visualizzazioni dei flussi di progetto",
    caseStudyCta: "Vedi progetto",
    fields: { role: "Ruolo", technologies: "Stack", output: "Output" },
    projects: [
      {
        slug: "nl2map",
        number: "01",
        shortTitle: "NL2MAP",
        title: "Operazioni cartografiche dal linguaggio",
        context: "Tesi magistrale · Università di Bonn + Politecnico di Milano",
        role: "Ricercatore di tesi · Sviluppatore dell’interfaccia di studio",
        technologies: technologies.nl2map,
        output: "Studio di confronto cartografico e pipeline di inferenza.",
        evidenceLinks: [
          { label: "Apri lo studio", href: "https://amirdonyadide.github.io/Thesis_UserStudy/" },
          { label: "Codice", href: "https://github.com/AmirDonyadide/Thesis_UserStudy" }
        ],
        summary: "Classificare operazioni di generalizzazione dalle descrizioni di coppie di mappe di edifici, collegando il linguaggio naturale alle variazioni geometriche."
      },
      {
        slug: "se4g",
        number: "02",
        shortTitle: "SE4G",
        title: "Dashboard dei rischi nelle sedi olimpiche",
        context: "Progetto di geoinformatica",
        role: "Contributore · Team di quattro persone",
        technologies: technologies.se4g,
        output: "Mappe, grafici, tabelle ed esportazione CSV.",
        evidenceLinks: [
          { label: "Codice", href: "https://github.com/AmirDonyadide/SE4G" }
        ],
        summary: "Esplorare indicatori idrogeologici, sedi olimpiche e segnalazioni per comune in un’applicazione Dash con database PostGIS."
      },
      {
        slug: "landslide",
        number: "03",
        shortTitle: "Landslide",
        title: "Suscettibilità alle frane",
        context: "Progetto GIS magistrale · Bergamo, Italia",
        role: "Contributore · Team di tre persone",
        technologies: technologies.landslide,
        output: "Mappe di suscettibilità, esposizione della popolazione e WebGIS.",
        evidenceLinks: [
          { label: "Apri WebGIS", href: "https://amirdonyadide.github.io/GIS-Course-Polimi-2024/" },
          { label: "Codice", href: "https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" }
        ],
        summary: "Mappare la suscettibilità alle frane con Random Forest: parametri del DTM, uso del suolo DUSAF, NDVI, buffer e inventario frane."
      }
    ]
  }
};
