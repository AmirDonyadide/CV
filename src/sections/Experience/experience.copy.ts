import type { ExperienceCopyByLocale } from "./experience.types";

export const experienceCopy: ExperienceCopyByLocale = {
  en: {
    heading: "Experience",
    timelineLabel: "Career trajectory from 2021 to the current role",
    pathCurrentLabel: "CURRENT",
    pathOriginLabel: "ORIGIN · 2021",
    currentRole: "Current role",
    roles: [
      {
        id: "safe",
        date: "August 2026 – Present",
        role: "Research Assistant",
        organization: "Leibniz Institute for Financial Research SAFE",
        location: "Frankfurt am Main, Germany",
        responsibilities: [
          "Process geospatial and environmental data in reproducible Python workflows.",
          "Support large-scale address geocoding, location linkage, and spatial research computing.",
          "Link company locations to environmental and remote-sensing data."
        ],
        focus: ["Python", "Geospatial data engineering", "Environmental data", "Research computing"],
        current: true,
        pathLabel: "SAFE · Frankfurt",
      },
      {
        id: "iip",
        date: "July 2025 – March 2026",
        role: "GIS & Data Analyst, Research Assistant",
        organization: "IIP, Karlsruhe Institute of Technology (KIT)",
        location: "Karlsruhe, Germany",
        responsibilities: [
          "Built Python pipelines for energy and mobility data.",
          "Analyzed spatial data for energy-demand and decarbonization models.",
          "Built research dashboards with integrated maps."
        ],
        focus: ["Python", "Spatial analysis", "Energy and mobility data", "Dashboards"],
        pathLabel: "IIP · KIT",
      },
      {
        id: "nova",
        date: "July 2025 – December 2025",
        role: "Web Developer, Research Assistant",
        organization: "KIT nova",
        location: "Karlsruhe, Germany",
        responsibilities: ["Contributed to web applications, usability, and geospatial visualizations.", "Supported VR/AR projects."],
        focus: ["Web applications", "VR/AR", "Geovisualization", "Digital maps"],
        pathLabel: "KIT nova",
      },
      {
        id: "fartak",
        date: "May 2021 – September 2021",
        role: "Intern",
        organization: "Naghsheh Gostaran Fartak Co.",
        responsibilities: [
          "Supported surveying, photogrammetry, data collection, and spatial analysis.",
          "Created and processed geodata with AutoCAD and GIS tools."
        ],
        focus: ["Surveying", "Photogrammetry", "AutoCAD", "GIS"],
        pathLabel: "Fartak Co.",
      },
    ],
  },
  de: {
    heading: "Erfahrung",
    timelineLabel: "Beruflicher Weg von 2021 bis zur aktuellen Position",
    pathCurrentLabel: "AKTUELL",
    pathOriginLabel: "ANFANG · 2021",
    currentRole: "Aktuelle Position",
    roles: [
      {
        id: "safe",
        date: "August 2026 – heute",
        role: "Research Assistant",
        organization: "Leibniz Institute for Financial Research SAFE",
        location: "Frankfurt am Main, Deutschland",
        responsibilities: [
          "Geo- und Umweltdaten in reproduzierbaren Python-Workflows verarbeiten.",
          "Großskaliges Adress-Geocoding, Standortverknüpfung und räumliches Research Computing unterstützen.",
          "Unternehmensstandorte mit Umwelt- und Fernerkundungsdaten verknüpfen."
        ],
        focus: ["Python", "Geodaten-Engineering", "Umweltdaten", "Research Computing"],
        current: true,
        pathLabel: "SAFE · Frankfurt",
      },
      {
        id: "iip",
        date: "Juli 2025 – März 2026",
        role: "GIS- und Datenanalyst, Hilfswissenschaftler",
        organization: "IIP, Karlsruher Institut für Technologie (KIT)",
        location: "Karlsruhe, Deutschland",
        responsibilities: [
          "Python-Pipelines für Energie- und Mobilitätsdaten entwickelt.",
          "Räumliche Daten für Energiebedarfs- und Dekarbonisierungsmodelle analysiert.",
          "Forschungsdashboards mit integrierten Karten entwickelt."
        ],
        focus: ["Python", "Räumliche Analyse", "Energie- und Mobilitätsdaten", "Dashboards"],
        pathLabel: "IIP · KIT",
      },
      {
        id: "nova",
        date: "Juli 2025 – Dezember 2025",
        role: "Webentwickler, Hilfswissenschaftler",
        organization: "KIT nova",
        location: "Karlsruhe, Deutschland",
        responsibilities: ["Webanwendungen, Benutzerfreundlichkeit und Geovisualisierungen mitentwickelt.", "VR/AR-Projekte unterstützt."],
        focus: ["Webanwendungen", "VR/AR", "Geovisualisierung", "Digitale Karten"],
        pathLabel: "KIT nova",
      },
      {
        id: "fartak",
        date: "Mai 2021 – September 2021",
        role: "Praktikant",
        organization: "Naghsheh Gostaran Fartak Co.",
        responsibilities: [
          "Vermessung, Photogrammetrie, Datenerhebung und räumliche Analyse unterstützt.",
          "Geodaten mit AutoCAD und GIS-Werkzeugen erstellt und verarbeitet."
        ],
        focus: ["Vermessung", "Photogrammetrie", "AutoCAD", "GIS"],
        pathLabel: "Fartak Co.",
      },
    ],
  },
  it: {
    heading: "Esperienza",
    timelineLabel: "Percorso professionale dal 2021 alla posizione attuale",
    pathCurrentLabel: "ATTUALE",
    pathOriginLabel: "INIZIO · 2021",
    currentRole: "Posizione attuale",
    roles: [
      {
        id: "safe",
        date: "Agosto 2026 – Presente",
        role: "Research Assistant",
        organization: "Leibniz Institute for Financial Research SAFE",
        location: "Francoforte sul Meno, Germania",
        responsibilities: [
          "Elaboro dati geospaziali e ambientali con workflow Python riproducibili.",
          "Supporto geocoding di indirizzi, collegamento di località e calcolo spaziale su larga scala.",
          "Collego sedi aziendali a dati ambientali e di telerilevamento."
        ],
        focus: ["Python", "Data engineering geospaziale", "Dati ambientali", "Research computing"],
        current: true,
        pathLabel: "SAFE · Francoforte",
      },
      {
        id: "iip",
        date: "Luglio 2025 – Marzo 2026",
        role: "Analista GIS e dati, assistente di ricerca",
        organization: "IIP, Karlsruhe Institute of Technology (KIT)",
        location: "Karlsruhe, Germania",
        responsibilities: [
          "Sviluppate pipeline Python per dati energetici e di mobilità.",
          "Analizzati dati spaziali per modelli di domanda energetica e decarbonizzazione.",
          "Sviluppate dashboard di ricerca con mappe integrate."
        ],
        focus: ["Python", "Analisi spaziale", "Dati energia e mobilità", "Dashboard"],
        pathLabel: "IIP · KIT",
      },
      {
        id: "nova",
        date: "Luglio 2025 – Dicembre 2025",
        role: "Sviluppatore web, assistente di ricerca",
        organization: "KIT nova",
        location: "Karlsruhe, Germania",
        responsibilities: ["Contributo ad applicazioni web, usabilità e visualizzazioni geospaziali.", "Supporto a progetti VR/AR."],
        focus: ["Applicazioni web", "VR/AR", "Geovisualizzazione", "Mappe digitali"],
        pathLabel: "KIT nova",
      },
      {
        id: "fartak",
        date: "Maggio 2021 – Settembre 2021",
        role: "Tirocinante",
        organization: "Naghsheh Gostaran Fartak Co.",
        responsibilities: [
          "Supporto a rilievo, fotogrammetria, raccolta dati e analisi spaziale.",
          "Creazione ed elaborazione di geodati con AutoCAD e strumenti GIS."
        ],
        focus: ["Rilievo", "Fotogrammetria", "AutoCAD", "GIS"],
        pathLabel: "Fartak Co.",
      },
    ],
  },
};
