import type { Locale } from "../Hero/hero.types";
import type { ProjectSlug } from "../SelectedWork/selectedWork.types";
import type { CaseStudiesByLocale, CaseStudyUiCopy, ProjectCaseStudyCopy } from "./projectCaseStudy.types";

const links = {
  nl2map: [
    { label: "Open public study", href: "https://amirdonyadide.github.io/Thesis_UserStudy/", kind: "study" as const },
    { label: "View source repository", href: "https://github.com/AmirDonyadide/Thesis_UserStudy", kind: "repository" as const },
  ],
  se4g: [
    { label: "View source repository", href: "https://github.com/AmirDonyadide/SE4G", kind: "repository" as const },
  ],
  landslide: [
    { label: "Open project WebGIS", href: "https://amirdonyadide.github.io/GIS-Course-Polimi-2024/", kind: "demo" as const },
    { label: "View source repository", href: "https://github.com/AmirDonyadide/GIS-Course-Polimi-2024", kind: "repository" as const },
  ],
};

const sharedEvidence = {
  nl2map: [
    {
      src: "/assets/projects/evidence/nl2map-input-1069.png",
      webpSrcSet: "/assets/projects/evidence/nl2map-input-1069-640.webp 640w, /assets/projects/evidence/nl2map-input-1069-800.webp 800w, /assets/projects/evidence/nl2map-input-1069-1000.webp 1000w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1000,
      height: 912,
      alt: "Original building map from NL2MAP study pair 1069",
      title: "Original map",
      caption: "Public thesis study pair 1069 - input building geometry.",
      featured: true,
    },
    {
      src: "/assets/projects/evidence/nl2map-generalized-1069.png",
      webpSrcSet: "/assets/projects/evidence/nl2map-generalized-1069-640.webp 640w, /assets/projects/evidence/nl2map-generalized-1069-800.webp 800w, /assets/projects/evidence/nl2map-generalized-1069-1000.webp 1000w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1000,
      height: 912,
      alt: "Generalized building map from NL2MAP study pair 1069",
      title: "Generalized map",
      caption: "The corresponding generalized state shown to study participants.",
      featured: true,
    },
  ],
  se4g: [
    {
      src: "/assets/projects/evidence/se4g-dashboard.webp",
      webpSrcSet: "/assets/projects/evidence/se4g-dashboard-640.webp 640w, /assets/projects/evidence/se4g-dashboard-800.webp 800w, /assets/projects/evidence/se4g-dashboard.webp 1235w",
      sizes: "(max-width: 767px) 88vw, 76vw",
      width: 1235,
      height: 940,
      alt: "Implemented SE4G dashboard state with city controls, map, table, and pie chart",
      title: "Implemented dashboard state",
      caption: "Extracted from page 14 of the public SE4G design document; no interface elements were added.",
      featured: true,
    },
  ],
  landslide: [
    {
      src: "/assets/projects/evidence/landslide-dtm.png",
      webpSrcSet: "/assets/projects/evidence/landslide-dtm-640.webp 640w, /assets/projects/evidence/landslide-dtm-800.webp 800w, /assets/projects/evidence/landslide-dtm-1000.webp 1000w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1000,
      height: 1000,
      alt: "Digital terrain model used by the landslide project",
      title: "Terrain input",
      caption: "Digital Terrain Model used as an input and for derived terrain variables.",
      contain: true,
    },
    {
      src: "/assets/projects/evidence/landslide-ndvi.webp",
      webpSrcSet: "/assets/projects/evidence/landslide-ndvi-640.webp 640w, /assets/projects/evidence/landslide-ndvi-800.webp 800w, /assets/projects/evidence/landslide-ndvi.webp 1080w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1080,
      height: 1080,
      alt: "NDVI input map from the landslide project",
      title: "Vegetation input",
      caption: "NDVI layer documenting vegetation cover within the wider source area and study boundary.",
      contain: true,
    },
    {
      src: "/assets/projects/evidence/landslide-slope.webp",
      webpSrcSet: "/assets/projects/evidence/landslide-slope-640.webp 640w, /assets/projects/evidence/landslide-slope-800.webp 800w, /assets/projects/evidence/landslide-slope.webp 1080w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1080,
      height: 1080,
      alt: "Slope raster derived for the landslide study area",
      title: "Derived slope",
      caption: "Slope classes derived from terrain data and used as an environmental factor.",
      contain: true,
    },
    {
      src: "/assets/projects/evidence/landslide-confidence.webp",
      webpSrcSet: "/assets/projects/evidence/landslide-confidence-640.webp 640w, /assets/projects/evidence/landslide-confidence-800.webp 800w, /assets/projects/evidence/landslide-confidence.webp 1080w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1080,
      height: 1080,
      alt: "Random Forest classification confidence map from the landslide project",
      title: "Classification confidence",
      caption: "Confidence surface produced by the QGIS classification workflow.",
      contain: true,
    },
    {
      src: "/assets/projects/evidence/landslide-reclassified.webp",
      webpSrcSet: "/assets/projects/evidence/landslide-reclassified-640.webp 640w, /assets/projects/evidence/landslide-reclassified-800.webp 800w, /assets/projects/evidence/landslide-reclassified.webp 1080w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1080,
      height: 1080,
      alt: "Reclassified landslide susceptibility raster",
      title: "Reclassified susceptibility",
      caption: "Susceptibility values grouped into four classes for exposure assessment.",
      contain: true,
    },
    {
      src: "/assets/projects/evidence/landslide-susceptibility.png",
      webpSrcSet: "/assets/projects/evidence/landslide-susceptibility-640.webp 640w, /assets/projects/evidence/landslide-susceptibility-800.webp 800w, /assets/projects/evidence/landslide-susceptibility-1000.webp 1000w",
      sizes: "(max-width: 767px) 88vw, 42vw",
      width: 1000,
      height: 1000,
      alt: "Final landslide susceptibility map produced by the project",
      title: "Final susceptibility surface",
      caption: "Repository-native final map showing the produced susceptibility surface.",
      featured: true,
      contain: true,
    },
  ],
};

const english: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    slug: "nl2map",
    number: "01",
    shortTitle: "NL2MAP",
    title: "Inferring Map Generalization Operations from User Prompts",
    context: "MSc thesis research · University of Bonn + Politecnico di Milano",
    summary: "A research workflow connecting the language people use to describe visible map changes with structured cartographic generalization operations.",
    overview: [
      "This MSc thesis investigates how a system can infer cartographic generalization operations from the language people use to describe visible changes between two maps.",
      "A public comparison study presents original and generalized building maps side by side and collects short participant-written prompts about how the second state could be produced from the first.",
    ],
    problem: [
      "Map generalization changes geometry so maps remain legible at different scales. A person can describe those changes in ordinary language, while a software system needs a structured operation it can interpret.",
      "The research problem is to bridge that language-to-operation gap while retaining the visual relationship between the original and generalized map states.",
    ],
    contribution: [
      "Amirhossein conducted the MSc thesis research and built the public study interface used to present paired maps and collect written descriptions.",
      "The case study reports only the workflow and artifacts that can be verified publicly. It makes no claim about unpublished accuracy, model performance, or participant outcomes.",
    ],
    data: [
      { label: "Paired maps", detail: "Original and generalized building maps representing the same areas." },
      { label: "Participant language", detail: "Short prompts describing how the generalized map could be derived from the input." },
      { label: "Spatial geometry", detail: "Paired building geometries stored with the public study assets." },
    ],
    methodIntro: "The thesis workflow turns a visual comparison task into records that can support operation inference.",
    method: [
      { title: "Present paired states", detail: "Show the original and generalized maps together so the change remains visually inspectable." },
      { title: "Collect descriptions", detail: "Ask participants for a concise natural-language prompt describing the visible transformation." },
      { title: "Prepare model inputs", detail: "Structure the prompt language and its paired map context for analysis." },
      { title: "Classify the operation", detail: "Use the prepared representation to infer a cartographic operation category." },
      { title: "Relate back to the map", detail: "Connect the inferred operation with the corresponding generalized map state." },
    ],
    workflow: [
      { label: "Natural-language request", detail: "Participant description" },
      { label: "Text representation", detail: "Model-ready features" },
      { label: "Classifier", detail: "Operation inference" },
      { label: "Cartographic operation", detail: "Remove, merge, simplify, or another class" },
      { label: "Resulting map state", detail: "Paired generalized geometry" },
    ],
    outputs: [
      "A public map-comparison user-study interface.",
      "Paired original and generalized building-map artifacts.",
      "A model-oriented research pipeline for connecting descriptions to generalization operations.",
    ],
    technologies: ["Python", "Scikit-learn", "GeoPandas", "Shapely", "JavaScript", "GeoJSON"],
    evidenceIntro: "The images below are unmodified study assets from public pair 1069. They are evidence of the comparison task, not generated portfolio artwork.",
    evidence: sharedEvidence.nl2map,
    links: links.nl2map,
    nextSlug: "se4g",
    nextTitle: "SE4G Geoinformatics Dashboard",
  },
  se4g: {
    slug: "se4g",
    number: "02",
    shortTitle: "SE4G",
    title: "Geoinformatics Data Visualization Dashboard",
    context: "Software Engineering for Geoinformatics · Four-person team project",
    summary: "A geospatial application that links prepared spatial data, API endpoints, interactive maps, tables, and plots in one dashboard.",
    overview: [
      "SE4G is a team-built Dash application for exploring geographic information through interactive maps and charts.",
      "Its public repository and design document show a system that combines city selection, hydrogeological indicators, Olympic-event locations, user reports, downloadable tables, and plot selection.",
    ],
    problem: [
      "Hazard indicators, municipality geometry, event locations, and reports are useful only when they can be queried and inspected together.",
      "The project addresses that integration problem with a database-backed application rather than a collection of disconnected files and static outputs.",
    ],
    contribution: [
      "Amirhossein contributed as one member of the four-person project team named in the public design document.",
      "The repository does not document a reliable individual task split, so this page does not assign exclusive ownership of specific modules or interface features.",
    ],
    data: [
      { label: "Municipal geometry", detail: "Spatial city records prepared for map display and queries." },
      { label: "Hazard indicators", detail: "Selected hydrogeological indicators associated with target cities." },
      { label: "Event locations", detail: "Olympic-event records linked to cities and venues." },
      { label: "User records", detail: "Application users and submitted reports represented in the project schema." },
    ],
    methodIntro: "The implementation separates persistence, API access, and interactive presentation into connected application layers.",
    method: [
      { title: "Prepare and persist", detail: "Load tabular and geographic records into PostgreSQL/PostGIS." },
      { title: "Expose endpoints", detail: "Serve cities, indicators, events, users, and reports through Flask routes." },
      { title: "Retrieve by selection", detail: "Request the relevant records when a visitor chooses a city and parameter." },
      { title: "Compose the view", detail: "Connect Folium maps, Dash controls, tables, and Plotly charts." },
      { title: "Support inspection", detail: "Allow selected data to be compared visually and downloaded as tables." },
    ],
    workflow: [
      { label: "Source records", detail: "Cities, indicators, events, reports" },
      { label: "Spatial database", detail: "PostgreSQL + PostGIS" },
      { label: "API layer", detail: "Flask endpoints" },
      { label: "Application logic", detail: "Dash callbacks" },
      { label: "Interactive output", detail: "Folium maps + Plotly charts" },
    ],
    outputs: [
      "An interactive city and parameter selection workflow.",
      "Map views with event locations and geographic context.",
      "Indicator and event tables with downloadable CSV output.",
      "Pie and bar-chart views generated from selected indicator records.",
    ],
    technologies: ["Python", "Dash", "Flask", "Plotly", "Folium", "GeoPandas", "PostgreSQL", "PostGIS"],
    evidenceIntro: "The dashboard image is extracted from the repository's public design document. It documents an implemented interface state; it is not a recreated or generated dashboard.",
    evidence: sharedEvidence.se4g,
    links: links.se4g,
    nextSlug: "landslide",
    nextTitle: "Landslide Susceptibility Mapping",
  },
  landslide: {
    slug: "landslide",
    number: "03",
    shortTitle: "Landslide",
    title: "AI-Based Landslide Susceptibility Mapping",
    context: "MSc GIS course project · Three-person team · Bergamo, Italy",
    summary: "A GIS and machine-learning workflow that combines terrain, land-cover, proximity, and inventory layers into a susceptibility surface and exposure analysis.",
    overview: [
      "This MSc course project assesses landslide susceptibility in a study area in the province of Bergamo, Italy.",
      "The public project site documents the complete path from input collection and raster preprocessing through Random Forest classification, susceptibility mapping, population exposure analysis, validation, and WebGIS presentation.",
    ],
    problem: [
      "Landslide susceptibility depends on several spatially varying conditions. Evaluating them requires consistent raster preparation, a reproducible modelling workflow, and outputs that can still be inspected geographically.",
      "The project brings those inputs into one analysis and then translates the model output into mapped susceptibility classes and an interactive presentation.",
    ],
    contribution: [
      "Amirhossein is one of the three contributors named on the public project site, alongside Firoozeh Rahimian and Hadi Kheiri.",
      "Because the repository does not document an individual task split, this case study describes the verified team workflow without assigning exclusive ownership of a particular analysis step.",
    ],
    data: [
      { label: "Terrain", detail: "Digital Terrain Model plus slope, aspect, plan curvature, and profile curvature derivatives." },
      { label: "Environment", detail: "DUSAF land use, NDVI, river and road buffers, and geological-fault buffers." },
      { label: "Reference labels", detail: "Landslide inventory and generated no-landslide zones used to prepare training and testing points." },
      { label: "Exposure", detail: "Population raster aligned with reclassified susceptibility data." },
    ],
    methodIntro: "The repository documents six connected stages; the central analytical sequence is summarized here.",
    method: [
      { title: "Standardize layers", detail: "Reproject, clip, rasterize, and align the source datasets to the study area." },
      { title: "Derive terrain variables", detail: "Generate slope, aspect, and curvature layers from the terrain model." },
      { title: "Build model inputs", detail: "Combine the environmental variables into a virtual raster and prepare training and testing points." },
      { title: "Classify", detail: "Run a Random Forest classifier through the Dzetsaka QGIS plugin and produce classification and confidence surfaces." },
      { title: "Derive susceptibility", detail: "Use raster calculation to express landslide-class probability on a 0-100 surface and reclassify the result." },
      { title: "Assess and publish", detail: "Overlay population data, validate with an error matrix, and expose the results through WebGIS." },
    ],
    workflow: [
      { label: "Terrain + environment", detail: "Aligned raster variables" },
      { label: "Training samples", detail: "Inventory + no-landslide points" },
      { label: "Random Forest", detail: "QGIS Dzetsaka classification" },
      { label: "Susceptibility surface", detail: "Probability and four reclassified bands" },
      { label: "Exposure + WebGIS", detail: "Population analysis and interactive output" },
    ],
    outputs: [
      "Classification and confidence rasters.",
      "A continuous landslide susceptibility surface and four-class reclassified map.",
      "Population exposure calculations using zonal statistics.",
      "A validation workflow and interactive WebGIS presentation.",
    ],
    technologies: ["QGIS", "Dzetsaka", "Random Forest", "Python", "Remote sensing", "OpenLayers", "WebGIS"],
    evidenceIntro: "Every map below comes from the public project repository. The gallery follows the analysis from source and derived layers to model confidence and final susceptibility output.",
    evidence: sharedEvidence.landslide,
    links: links.landslide,
    nextSlug: "nl2map",
    nextTitle: "NL2MAP Thesis Research",
  },
};

function translatedEvidence(
  slug: ProjectSlug,
  locale: Exclude<Locale, "en">,
): ProjectCaseStudyCopy["evidence"] {
  const translations = {
    de: {
      nl2map: [
        ["Originalkarte", "Öffentliches Thesis-Studienpaar 1069 - ursprüngliche Gebäudegeometrie."],
        ["Generalisierte Karte", "Der zugehörige generalisierte Zustand, der den Teilnehmenden gezeigt wurde."],
      ],
      se4g: [["Implementierter Dashboard-Zustand", "Aus Seite 14 des öffentlichen SE4G-Designdokuments extrahiert; es wurden keine Oberflächenelemente ergänzt."]],
      landslide: [
        ["Geländeeingabe", "Digitales Geländemodell als Eingabe und Grundlage abgeleiteter Geländevariablen."],
        ["Vegetationseingabe", "NDVI-Layer zur Vegetationsbedeckung im Quellgebiet und innerhalb der Untersuchungsgrenze."],
        ["Abgeleitete Hangneigung", "Aus Geländedaten abgeleitete Neigungsklassen als Umweltfaktor."],
        ["Klassifikationskonfidenz", "Konfidenzfläche aus dem QGIS-Klassifikationsworkflow."],
        ["Reklassifizierte Suszeptibilität", "Vier Klassen der Suszeptibilitätswerte für die Expositionsanalyse."],
        ["Finale Suszeptibilitätsfläche", "Repository-native Ergebniskarte der erzeugten Suszeptibilitätsfläche."],
      ],
    },
    it: {
      nl2map: [
        ["Mappa originale", "Coppia pubblica 1069 dello studio di tesi - geometria iniziale degli edifici."],
        ["Mappa generalizzata", "Lo stato generalizzato corrispondente mostrato ai partecipanti."],
      ],
      se4g: [["Stato implementato della dashboard", "Estratto dalla pagina 14 del design document pubblico SE4G; non sono stati aggiunti elementi dell'interfaccia."]],
      landslide: [
        ["Input del terreno", "Modello digitale del terreno usato come input e per derivare le variabili topografiche."],
        ["Input di vegetazione", "Layer NDVI che documenta la copertura vegetale nell'area sorgente e nel perimetro di studio."],
        ["Pendenza derivata", "Classi di pendenza derivate dai dati del terreno e usate come fattore ambientale."],
        ["Confidenza della classificazione", "Superficie di confidenza prodotta dal workflow di classificazione QGIS."],
        ["Suscettibilità riclassificata", "Valori di suscettibilità raggruppati in quattro classi per l'analisi dell'esposizione."],
        ["Superficie finale di suscettibilità", "Mappa finale nativa del repository con la superficie prodotta."],
      ],
    },
  } as const;

  return sharedEvidence[slug].map((item, index) => ({
    ...item,
    title: translations[locale][slug][index][0],
    caption: translations[locale][slug][index][1],
  }));
}

function translatedLinks(
  slug: ProjectSlug,
  locale: Exclude<Locale, "en">,
): ProjectCaseStudyCopy["links"] {
  const labels = {
    de: {
      nl2map: ["Öffentliche Studie öffnen", "Quellcode ansehen"],
      se4g: ["Quellcode ansehen"],
      landslide: ["Projekt-WebGIS öffnen", "Quellcode ansehen"],
    },
    it: {
      nl2map: ["Apri lo studio pubblico", "Vedi repository sorgente"],
      se4g: ["Vedi repository sorgente"],
      landslide: ["Apri il WebGIS del progetto", "Vedi repository sorgente"],
    },
  } as const;

  return links[slug].map((link, index) => ({ ...link, label: labels[locale][slug][index] }));
}

const german: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    ...english.nl2map,
    context: "Masterarbeit · Universität Bonn + Politecnico di Milano",
    summary: "Ein Forschungsworkflow, der sprachliche Beschreibungen sichtbarer Kartenänderungen mit strukturierten kartografischen Generalisierungsoperationen verbindet.",
    overview: [
      "Diese Masterarbeit untersucht, wie ein System aus der Sprache, mit der Menschen sichtbare Unterschiede zwischen zwei Karten beschreiben, kartografische Generalisierungsoperationen ableiten kann.",
      "Eine öffentliche Vergleichsstudie zeigt originale und generalisierte Gebäudekarten nebeneinander und erfasst kurze Prompts dazu, wie der zweite Zustand aus dem ersten entstehen könnte.",
    ],
    problem: [
      "Kartengeneralisierung verändert Geometrien, damit Karten in unterschiedlichen Maßstäben lesbar bleiben. Menschen beschreiben solche Änderungen frei, ein Softwaresystem benötigt dagegen eine strukturierte Operation.",
      "Die Forschungsfrage ist, diese Lücke zwischen Sprache und Operation zu schließen und zugleich den visuellen Bezug zwischen Ausgangs- und Zielkarte zu erhalten.",
    ],
    contribution: [
      "Amirhossein führte die Masterarbeitsforschung durch und entwickelte die öffentliche Studienoberfläche zur Darstellung der Kartenpaare und Erfassung schriftlicher Beschreibungen.",
      "Die Fallstudie nennt nur öffentlich überprüfbare Workflows und Artefakte. Sie macht keine Aussagen zu unveröffentlichten Genauigkeiten, Modellleistungen oder Studienergebnissen.",
    ],
    data: [
      { label: "Kartenpaare", detail: "Originale und generalisierte Gebäudekarten derselben Gebiete." },
      { label: "Teilnehmendensprache", detail: "Kurze Prompts, die die Ableitung der generalisierten Karte beschreiben." },
      { label: "Räumliche Geometrie", detail: "Gepaarte Gebäudegeometrien in den öffentlichen Studienartefakten." },
    ],
    methodIntro: "Der Thesis-Workflow überführt eine visuelle Vergleichsaufgabe in Datensätze zur Ableitung von Operationen.",
    method: [
      { title: "Kartenstände zeigen", detail: "Original und Generalisierung gemeinsam darstellen, damit die Veränderung prüfbar bleibt." },
      { title: "Beschreibungen erfassen", detail: "Kurze natürlichsprachige Prompts zur sichtbaren Transformation sammeln." },
      { title: "Modelleingaben vorbereiten", detail: "Prompt-Sprache und Kartenkontext strukturiert für die Analyse aufbereiten." },
      { title: "Operation klassifizieren", detail: "Aus der vorbereiteten Repräsentation eine kartografische Operationsklasse ableiten." },
      { title: "Mit der Karte verknüpfen", detail: "Die abgeleitete Operation dem zugehörigen generalisierten Kartenstand zuordnen." },
    ],
    workflow: [
      { label: "Natürlichsprachiger Prompt", detail: "Beschreibung der Teilnehmenden" },
      { label: "Textrepräsentation", detail: "Modellierbare Merkmale" },
      { label: "Klassifikator", detail: "Ableitung der Operation" },
      { label: "Kartografische Operation", detail: "Entfernen, Zusammenführen, Vereinfachen oder andere Klasse" },
      { label: "Resultierender Kartenstand", detail: "Gepaarte generalisierte Geometrie" },
    ],
    outputs: ["Öffentliche Oberfläche für die Kartenvergleichsstudie.", "Gepaarte originale und generalisierte Gebäudekarten.", "Modellorientierter Forschungsworkflow zur Verbindung von Beschreibungen und Generalisierungsoperationen."],
    evidenceIntro: "Die Bilder sind unveränderte Studienartefakte des öffentlichen Paars 1069 - Nachweise der Vergleichsaufgabe, keine generierte Portfolio-Grafik.",
    evidence: translatedEvidence("nl2map", "de"),
    links: translatedLinks("nl2map", "de"),
    nextTitle: "SE4G Geoinformatik-Dashboard",
  },
  se4g: {
    ...english.se4g,
    context: "Software Engineering for Geoinformatics · Vierköpfiges Teamprojekt",
    summary: "Eine Geodatenanwendung, die aufbereitete räumliche Daten, API-Endpunkte, interaktive Karten, Tabellen und Diagramme in einem Dashboard verbindet.",
    overview: ["SE4G ist eine im Team entwickelte Dash-Anwendung zur Untersuchung geografischer Informationen mit interaktiven Karten und Diagrammen.", "Repository und Designdokument zeigen Stadtauswahl, hydrogeologische Indikatoren, olympische Veranstaltungsorte, Nutzerberichte, herunterladbare Tabellen und auswählbare Diagramme."],
    problem: ["Gefahrenindikatoren, Gemeindegeometrien, Veranstaltungsorte und Berichte sind erst dann gemeinsam nutzbar, wenn sie zusammen abgefragt und untersucht werden können.", "Das Projekt löst diese Integrationsaufgabe mit einer datenbankgestützten Anwendung statt mit getrennten Dateien und statischen Ergebnissen."],
    contribution: ["Amirhossein arbeitete als eines der vier im öffentlichen Designdokument genannten Teammitglieder am Projekt mit.", "Das Repository dokumentiert keine belastbare individuelle Aufgabenverteilung; daher weist diese Seite keine Module oder Funktionen exklusiv einer Person zu."],
    data: [{ label: "Gemeindegeometrien", detail: "Räumliche Stadtobjekte für Kartendarstellung und Abfragen." }, { label: "Gefahrenindikatoren", detail: "Ausgewählte hydrogeologische Indikatoren für Zielstädte." }, { label: "Veranstaltungsorte", detail: "Olympische Veranstaltungen mit Städten und Austragungsorten." }, { label: "Nutzerdaten", detail: "Anwendungsnutzende und eingereichte Berichte im Projektschema." }],
    methodIntro: "Die Implementierung trennt Persistenz, API-Zugriff und interaktive Darstellung in verbundene Anwendungsschichten.",
    method: [{ title: "Aufbereiten und speichern", detail: "Tabellarische und geografische Datensätze in PostgreSQL/PostGIS laden." }, { title: "Endpunkte bereitstellen", detail: "Städte, Indikatoren, Events, Nutzende und Berichte über Flask-Routen ausgeben." }, { title: "Nach Auswahl abrufen", detail: "Bei Stadt- und Parameterauswahl die relevanten Datensätze anfragen." }, { title: "Ansicht zusammensetzen", detail: "Folium-Karten, Dash-Steuerung, Tabellen und Plotly-Diagramme verbinden." }, { title: "Untersuchung ermöglichen", detail: "Ausgewählte Daten visuell vergleichen und als Tabelle herunterladen." }],
    workflow: [{ label: "Quelldatensätze", detail: "Städte, Indikatoren, Events, Berichte" }, { label: "Geodatenbank", detail: "PostgreSQL + PostGIS" }, { label: "API-Schicht", detail: "Flask-Endpunkte" }, { label: "Anwendungslogik", detail: "Dash-Callbacks" }, { label: "Interaktive Ausgabe", detail: "Folium-Karten + Plotly-Diagramme" }],
    outputs: ["Interaktive Auswahl von Stadt und Parameter.", "Kartenansichten mit Veranstaltungsorten und geografischem Kontext.", "Indikator- und Veranstaltungstabellen mit CSV-Download.", "Kreis- und Balkendiagramme aus den ausgewählten Indikatordatensätzen."],
    evidenceIntro: "Das Dashboard-Bild stammt aus dem öffentlichen Designdokument des Repositorys. Es dokumentiert einen implementierten Zustand und ist keine nachgebaute oder generierte Oberfläche.",
    evidence: translatedEvidence("se4g", "de"),
    links: translatedLinks("se4g", "de"),
    nextTitle: "Kartierung der Hangrutschungssuszeptibilität",
  },
  landslide: {
    ...english.landslide,
    context: "MSc-GIS-Kursprojekt · Dreiköpfiges Team · Bergamo, Italien",
    summary: "Ein GIS- und Machine-Learning-Workflow, der Gelände-, Landbedeckungs-, Distanz- und Inventardaten zu einer Suszeptibilitätsfläche und Expositionsanalyse verbindet.",
    overview: ["Dieses MSc-Kursprojekt untersucht die Hangrutschungssuszeptibilität in einem Gebiet der Provinz Bergamo in Italien.", "Die öffentliche Projektseite dokumentiert den Weg von Datenerfassung und Rastervorverarbeitung über Random-Forest-Klassifikation, Suszeptibilitätskartierung, Bevölkerungsexposition und Validierung bis zur WebGIS-Darstellung."],
    problem: ["Hangrutschungssuszeptibilität hängt von mehreren räumlich variierenden Bedingungen ab. Ihre Auswertung erfordert konsistente Raster, einen reproduzierbaren Modellworkflow und geografisch prüfbare Ergebnisse.", "Das Projekt führt diese Eingaben in einer Analyse zusammen und übersetzt das Modellergebnis in Suszeptibilitätsklassen und eine interaktive Darstellung."],
    contribution: ["Amirhossein ist neben Firoozeh Rahimian und Hadi Kheiri einer der drei auf der öffentlichen Projektseite genannten Mitwirkenden.", "Da das Repository keine individuelle Aufgabenverteilung dokumentiert, beschreibt die Fallstudie den verifizierten Teamworkflow ohne einzelne Analyseschritte exklusiv zuzuordnen."],
    data: [{ label: "Gelände", detail: "Digitales Geländemodell sowie Neigung, Exposition, Plan- und Profilkrümmung." }, { label: "Umwelt", detail: "DUSAF-Landnutzung, NDVI sowie Fluss-, Straßen- und Störungspuffer." }, { label: "Referenzlabels", detail: "Hangrutschungsinventar und erzeugte Nicht-Rutschungszonen für Trainings- und Testpunkte." }, { label: "Exposition", detail: "Bevölkerungsraster, ausgerichtet mit reklassifizierten Suszeptibilitätsdaten." }],
    methodIntro: "Das Repository dokumentiert sechs verbundene Phasen; hier ist die zentrale analytische Folge zusammengefasst.",
    method: [{ title: "Layer vereinheitlichen", detail: "Quellen reprojizieren, zuschneiden, rasterisieren und auf das Untersuchungsgebiet ausrichten." }, { title: "Geländevariablen ableiten", detail: "Neigung, Exposition und Krümmungen aus dem Geländemodell erzeugen." }, { title: "Modelleingaben erstellen", detail: "Umweltvariablen in einem virtuellen Raster kombinieren und Trainings- sowie Testpunkte vorbereiten." }, { title: "Klassifizieren", detail: "Random Forest über das QGIS-Plugin Dzetsaka ausführen und Klassifikations- sowie Konfidenzflächen erzeugen." }, { title: "Suszeptibilität ableiten", detail: "Die Hangrutschungswahrscheinlichkeit per Rasterberechnung auf einer 0-100-Fläche ausdrücken und reklassifizieren." }, { title: "Auswerten und publizieren", detail: "Bevölkerungsdaten überlagern, mit einer Fehlermatrix validieren und im WebGIS bereitstellen." }],
    workflow: [{ label: "Gelände + Umwelt", detail: "Ausgerichtete Rastervariablen" }, { label: "Trainingsstichprobe", detail: "Inventar + Nicht-Rutschungspunkte" }, { label: "Random Forest", detail: "QGIS-Dzetsaka-Klassifikation" }, { label: "Suszeptibilitätsfläche", detail: "Wahrscheinlichkeit und vier Klassen" }, { label: "Exposition + WebGIS", detail: "Bevölkerungsanalyse und interaktive Ausgabe" }],
    outputs: ["Klassifikations- und Konfidenzraster.", "Kontinuierliche Suszeptibilitätsfläche und reklassifizierte Karte mit vier Klassen.", "Berechnung der Bevölkerungsexposition mit zonaler Statistik.", "Validierungsworkflow und interaktive WebGIS-Darstellung."],
    evidenceIntro: "Alle Karten stammen aus dem öffentlichen Projekt-Repository. Die Galerie folgt der Analyse von Eingaben und Ableitungen bis zu Modellkonfidenz und finaler Suszeptibilität.",
    evidence: translatedEvidence("landslide", "de"),
    links: translatedLinks("landslide", "de"),
    nextTitle: "NL2MAP-Thesisforschung",
  },
};

const italian: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    ...english.nl2map,
    context: "Tesi magistrale · Università di Bonn + Politecnico di Milano",
    summary: "Un workflow di ricerca che collega il linguaggio usato per descrivere i cambiamenti visibili tra mappe a operazioni strutturate di generalizzazione cartografica.",
    overview: ["Questa tesi magistrale studia come un sistema possa inferire operazioni di generalizzazione cartografica dal linguaggio usato per descrivere le differenze visibili tra due mappe.", "Uno studio pubblico mostra affiancate mappe di edifici originali e generalizzate e raccoglie brevi prompt su come il secondo stato potrebbe derivare dal primo."],
    problem: ["La generalizzazione modifica le geometrie affinché le mappe restino leggibili a scale diverse. Le persone descrivono liberamente questi cambiamenti, mentre un sistema software necessita di un'operazione strutturata.", "Il problema di ricerca è collegare linguaggio e operazione mantenendo il rapporto visivo tra lo stato iniziale e quello generalizzato."],
    contribution: ["Amirhossein ha condotto la ricerca di tesi e sviluppato l'interfaccia pubblica usata per mostrare le coppie di mappe e raccogliere le descrizioni scritte.", "Il caso studio riporta solo workflow e artefatti verificabili pubblicamente, senza affermare accuratezze, prestazioni del modello o risultati dei partecipanti non pubblicati."],
    data: [{ label: "Coppie di mappe", detail: "Mappe di edifici originali e generalizzate delle stesse aree." }, { label: "Linguaggio dei partecipanti", detail: "Brevi prompt che descrivono come ottenere la mappa generalizzata." }, { label: "Geometrie spaziali", detail: "Geometrie di edifici abbinate negli artefatti pubblici dello studio." }],
    methodIntro: "Il workflow di tesi trasforma un confronto visivo in record utili all'inferenza delle operazioni.",
    method: [{ title: "Mostrare gli stati", detail: "Presentare insieme mappa originale e generalizzata per rendere il cambiamento verificabile." }, { title: "Raccogliere descrizioni", detail: "Chiedere un breve prompt in linguaggio naturale sulla trasformazione visibile." }, { title: "Preparare gli input", detail: "Strutturare il linguaggio del prompt e il contesto cartografico per l'analisi." }, { title: "Classificare l'operazione", detail: "Inferire una categoria di operazione cartografica dalla rappresentazione preparata." }, { title: "Ricollegare alla mappa", detail: "Associare l'operazione inferita allo stato generalizzato corrispondente." }],
    workflow: [{ label: "Richiesta in linguaggio naturale", detail: "Descrizione del partecipante" }, { label: "Rappresentazione testuale", detail: "Feature utilizzabili dal modello" }, { label: "Classificatore", detail: "Inferenza dell'operazione" }, { label: "Operazione cartografica", detail: "Rimuovi, unisci, semplifica o altra classe" }, { label: "Stato risultante", detail: "Geometria generalizzata abbinata" }],
    outputs: ["Interfaccia pubblica per lo studio di confronto cartografico.", "Artefatti abbinati di mappe di edifici originali e generalizzate.", "Pipeline di ricerca orientata al modello per collegare descrizioni e operazioni."],
    evidenceIntro: "Le immagini sono artefatti invariati della coppia pubblica 1069: evidenza del compito di confronto, non grafica generata per il portfolio.",
    evidence: translatedEvidence("nl2map", "it"),
    links: translatedLinks("nl2map", "it"),
    nextTitle: "Dashboard geoinformatica SE4G",
  },
  se4g: {
    ...english.se4g,
    context: "Software Engineering for Geoinformatics · Progetto in team di quattro persone",
    summary: "Un'applicazione geospaziale che collega dati preparati, endpoint API, mappe interattive, tabelle e grafici in una sola dashboard.",
    overview: ["SE4G è un'applicazione Dash sviluppata in team per esplorare informazioni geografiche attraverso mappe e grafici interattivi.", "Il repository e il design document pubblici mostrano selezione della città, indicatori idrogeologici, sedi olimpiche, segnalazioni, tabelle scaricabili e selezione dei grafici."],
    problem: ["Indicatori di pericolosità, geometrie comunali, luoghi degli eventi e segnalazioni diventano utili insieme solo quando possono essere interrogati e ispezionati nello stesso contesto.", "Il progetto affronta l'integrazione con un'applicazione basata su database invece di file separati e output statici."],
    contribution: ["Amirhossein ha contribuito come uno dei quattro membri indicati nel design document pubblico.", "Il repository non documenta una divisione individuale affidabile dei compiti; la pagina quindi non attribuisce in esclusiva moduli o funzioni specifiche."],
    data: [{ label: "Geometrie comunali", detail: "Record spaziali delle città per visualizzazione e query." }, { label: "Indicatori di pericolosità", detail: "Indicatori idrogeologici selezionati e associati alle città target." }, { label: "Sedi degli eventi", detail: "Record degli eventi olimpici collegati a città e sedi." }, { label: "Record utente", detail: "Utenti e segnalazioni rappresentati nello schema del progetto." }],
    methodIntro: "L'implementazione separa persistenza, accesso API e presentazione interattiva in livelli collegati.",
    method: [{ title: "Preparare e memorizzare", detail: "Caricare record tabellari e geografici in PostgreSQL/PostGIS." }, { title: "Esporre gli endpoint", detail: "Servire città, indicatori, eventi, utenti e segnalazioni tramite route Flask." }, { title: "Recuperare per selezione", detail: "Richiedere i record pertinenti quando si scelgono città e parametro." }, { title: "Comporre la vista", detail: "Collegare mappe Folium, controlli Dash, tabelle e grafici Plotly." }, { title: "Supportare l'ispezione", detail: "Confrontare visivamente i dati selezionati e scaricarli in tabella." }],
    workflow: [{ label: "Record sorgente", detail: "Città, indicatori, eventi, segnalazioni" }, { label: "Database spaziale", detail: "PostgreSQL + PostGIS" }, { label: "Livello API", detail: "Endpoint Flask" }, { label: "Logica applicativa", detail: "Callback Dash" }, { label: "Output interattivo", detail: "Mappe Folium + grafici Plotly" }],
    outputs: ["Workflow interattivo per città e parametro.", "Mappe con luoghi degli eventi e contesto geografico.", "Tabelle di indicatori ed eventi scaricabili in CSV.", "Grafici a torta e a barre derivati dagli indicatori selezionati."],
    evidenceIntro: "L'immagine della dashboard è estratta dal design document pubblico del repository. Documenta uno stato implementato e non è un'interfaccia ricreata o generata.",
    evidence: translatedEvidence("se4g", "it"),
    links: translatedLinks("se4g", "it"),
    nextTitle: "Mappatura della suscettibilità alle frane",
  },
  landslide: {
    ...english.landslide,
    context: "Progetto GIS magistrale · Team di tre persone · Bergamo, Italia",
    summary: "Un workflow GIS e machine learning che combina terreno, copertura del suolo, prossimità e inventario in una superficie di suscettibilità e un'analisi dell'esposizione.",
    overview: ["Questo progetto di corso magistrale valuta la suscettibilità alle frane in un'area della provincia di Bergamo.", "Il sito pubblico documenta il percorso da raccolta e preprocessing dei raster a classificazione Random Forest, mappatura della suscettibilità, analisi dell'esposizione, validazione e presentazione WebGIS."],
    problem: ["La suscettibilità alle frane dipende da più condizioni variabili nello spazio. Valutarle richiede raster coerenti, un workflow di modellazione riproducibile e output ancora ispezionabili geograficamente.", "Il progetto riunisce questi input in un'analisi e traduce il modello in classi di suscettibilità e una presentazione interattiva."],
    contribution: ["Amirhossein è uno dei tre contributori indicati sul sito pubblico, insieme a Firoozeh Rahimian e Hadi Kheiri.", "Poiché il repository non documenta la divisione individuale dei compiti, il caso studio descrive il workflow verificato del team senza attribuzioni esclusive."],
    data: [{ label: "Terreno", detail: "Modello digitale del terreno, pendenza, esposizione e curvature planimetrica e di profilo." }, { label: "Ambiente", detail: "Uso del suolo DUSAF, NDVI e buffer di fiumi, strade e faglie." }, { label: "Etichette di riferimento", detail: "Inventario frane e zone senza frane per preparare punti di training e test." }, { label: "Esposizione", detail: "Raster di popolazione allineato con i dati di suscettibilità riclassificati." }],
    methodIntro: "Il repository documenta sei fasi collegate; qui è sintetizzata la sequenza analitica centrale.",
    method: [{ title: "Uniformare i layer", detail: "Riproiettare, ritagliare, rasterizzare e allineare i dati sorgente all'area di studio." }, { title: "Derivare variabili del terreno", detail: "Generare pendenza, esposizione e curvature dal modello del terreno." }, { title: "Costruire gli input", detail: "Combinare le variabili ambientali in un raster virtuale e preparare punti di training e test." }, { title: "Classificare", detail: "Eseguire Random Forest con il plugin QGIS Dzetsaka e produrre superfici di classificazione e confidenza." }, { title: "Derivare la suscettibilità", detail: "Esprimere la probabilità della classe frana su una superficie 0-100 e riclassificare il risultato." }, { title: "Valutare e pubblicare", detail: "Sovrapporre la popolazione, validare con una matrice degli errori e pubblicare tramite WebGIS." }],
    workflow: [{ label: "Terreno + ambiente", detail: "Variabili raster allineate" }, { label: "Campioni di training", detail: "Inventario + punti senza frana" }, { label: "Random Forest", detail: "Classificazione QGIS Dzetsaka" }, { label: "Superficie di suscettibilità", detail: "Probabilità e quattro classi" }, { label: "Esposizione + WebGIS", detail: "Analisi della popolazione e output interattivo" }],
    outputs: ["Raster di classificazione e confidenza.", "Superficie continua di suscettibilità e mappa riclassificata in quattro classi.", "Calcolo dell'esposizione della popolazione con statistiche zonali.", "Workflow di validazione e presentazione WebGIS interattiva."],
    evidenceIntro: "Ogni mappa proviene dal repository pubblico. La galleria segue l'analisi dagli input e layer derivati fino alla confidenza del modello e all'output finale.",
    evidence: translatedEvidence("landslide", "it"),
    links: translatedLinks("landslide", "it"),
    nextTitle: "Ricerca di tesi NL2MAP",
  },
};

export const caseStudyUiCopy: Record<Locale, CaseStudyUiCopy> = {
  en: { navigationLabel: "Case study navigation", homeLabel: "Amirhossein Donyadidegan - home", allWork: "All work", quickCv: "Quick CV", languageLabel: "Language", realEvidence: "Real project evidence", documentedInterface: "Documented interface state", overview: "Overview", problem: "Problem", contribution: "My Contribution", data: "Data", method: "Method", workflow: "Architecture / Workflow", results: "Results / Output", technology: "Technology", visualEvidence: "Visual Evidence", evidenceSource: "Evidence source", openImage: "Open full image", projectLinks: "Project links", nextProject: "Next case study", backToWork: "Back to selected work", caseStudyLabel: "Project case study" },
  de: { navigationLabel: "Navigation der Fallstudie", homeLabel: "Amirhossein Donyadidegan - Startseite", allWork: "Alle Projekte", quickCv: "Kurzprofil", languageLabel: "Sprache", realEvidence: "Realer Projektnachweis", documentedInterface: "Dokumentierter Oberflächenzustand", overview: "Überblick", problem: "Problem", contribution: "Mein Beitrag", data: "Daten", method: "Methode", workflow: "Architektur / Workflow", results: "Ergebnisse / Output", technology: "Technologien", visualEvidence: "Visuelle Nachweise", evidenceSource: "Nachweisquelle", openImage: "Bild vollständig öffnen", projectLinks: "Projektlinks", nextProject: "Nächste Fallstudie", backToWork: "Zurück zu den Projekten", caseStudyLabel: "Projektfallstudie" },
  it: { navigationLabel: "Navigazione del caso studio", homeLabel: "Amirhossein Donyadidegan - home", allWork: "Tutti i progetti", quickCv: "CV rapido", languageLabel: "Lingua", realEvidence: "Evidenza reale del progetto", documentedInterface: "Stato documentato dell'interfaccia", overview: "Panoramica", problem: "Problema", contribution: "Il mio contributo", data: "Dati", method: "Metodo", workflow: "Architettura / Workflow", results: "Risultati / Output", technology: "Tecnologie", visualEvidence: "Evidenza visiva", evidenceSource: "Fonte dell'evidenza", openImage: "Apri immagine completa", projectLinks: "Link del progetto", nextProject: "Prossimo caso studio", backToWork: "Torna ai progetti", caseStudyLabel: "Caso studio del progetto" },
};

export const projectCaseStudies: CaseStudiesByLocale = {
  en: english,
  de: german,
  it: italian,
};
