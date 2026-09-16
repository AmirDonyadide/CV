import type { Locale } from "../Hero/hero.types";
import type { ProjectSlug } from "../SelectedWork/selectedWork.types";
import type { CaseStudiesByLocale, CaseStudyUiCopy, ProjectCaseStudyCopy } from "./projectCaseStudy.types";

const english: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    slug: "nl2map",
    number: "01",
    shortTitle: "NL2MAP",
    title: "Map operations from language",
    context: "MSc thesis · University of Bonn + Politecnico di Milano",
    summary: "Infer cartographic operations from descriptions of building-map changes, using a public comparison study, text features, and classification.",
    problem: [
      "People describe map changes in everyday language; cartographic software needs explicit operations such as removal, merging, or simplification."
    ],
    contribution: ["Conducted the thesis research and built the public interface for collecting descriptions of paired maps."],
    data: [
      { label: "Maps", detail: "Paired original and generalized building geometries." },
      { label: "Language", detail: "Participant prompts describing each transformation." }
    ],
    method: [
      { title: "Collect", detail: "Present paired maps and collect written descriptions." },
      { title: "Represent", detail: "Structure prompts and map context as model inputs." },
      { title: "Classify", detail: "Infer an operation category from text features." },
      { title: "Link", detail: "Associate the operation with the generalized geometry." }
    ],
    outputs: [
      "Public map-comparison study and paired building maps.",
      "Research pipeline connecting descriptions to generalization operations."
    ],
    technologies: ["Python", "Scikit-learn", "GeoPandas", "Shapely", "JavaScript", "GeoJSON"],
    evidenceIntro: "Study pair 1069 · Source geometry redrawn at equal extent and scale.",
    evidence: [
      { visual: "nl2map-input", src: "/assets/projects/evidence/nl2map-input-1069.png", alt: "Original building map from NL2MAP study pair 1069", title: "Original map", caption: "Input building geometry.", featured: true },
      {
        visual: "nl2map-generalized",
        src: "/assets/projects/evidence/nl2map-generalized-1069.png",
        alt: "Generalized building map from NL2MAP study pair 1069",
        title: "Generalized map",
        caption: "Corresponding study geometry.",
        featured: true
      }
    ],
    links: [
      { label: "Open study", href: "https://amirdonyadide.github.io/Thesis_UserStudy/", kind: "study" },
      { label: "Source code", href: "https://github.com/AmirDonyadide/Thesis_UserStudy", kind: "repository" }
    ],
    nextSlug: "se4g",
    nextTitle: "SE4G"
  },
  se4g: {
    slug: "se4g",
    number: "02",
    shortTitle: "SE4G",
    title: "Olympic venue hazard dashboard",
    context: "Geoinformatics course project",
    summary: "Explore hydrogeological indicators and Olympic venues by municipality in a Dash application backed by PostGIS and Flask.",
    problem: [
      "Inspect hazard indicators, venue locations, and user reports together, with city-level queries and downloadable data."
    ],
    contribution: ["Contributor · Four-person team"],
    data: [
      { label: "Municipalities", detail: "Italian city geometries and hydrogeological indicators." },
      { label: "Events", detail: "Olympic venues and event records." },
      { label: "Reports", detail: "Application users and submitted reports." }
    ],
    method: [
      { title: "Store", detail: "Load spatial and tabular records into PostgreSQL/PostGIS." },
      { title: "Serve", detail: "Expose cities, indicators, events, users, and reports through Flask." },
      { title: "Connect", detail: "Use Dash callbacks to update Folium maps and Plotly charts by city and parameter." },
      { title: "Export", detail: "Download selected indicator and event tables as CSV." }
    ],
    outputs: ["Linked maps, tables, and pie/bar charts with city and parameter selection.", "CSV downloads of selected records."],
    technologies: ["Python", "Dash", "Flask", "Plotly", "Folium", "GeoPandas", "PostgreSQL", "PostGIS"],
    evidenceIntro: "Static reconstruction using published Bormio values and original satellite imagery.",
    evidence: [
      {
        visual: "se4g",
        src: "/assets/projects/evidence/se4g-dashboard.webp",
        alt: "Implemented SE4G dashboard state with city controls, map, table, and pie chart",
        title: "Bormio dashboard",
        caption: "City indicators and Olympic venues · Design document, p. 14.",
        featured: true
      }
    ],
    links: [
      { label: "Source code", href: "https://github.com/AmirDonyadide/SE4G", kind: "repository" }
    ],
    nextSlug: "landslide",
    nextTitle: "Landslide mapping"
  },
  landslide: {
    slug: "landslide",
    number: "03",
    shortTitle: "Landslide",
    title: "Landslide susceptibility mapping",
    context: "MSc GIS project · Bergamo, Italy",
    summary: "Random Forest landslide-susceptibility mapping for Bergamo, combining terrain, vegetation, land use, proximity, and inventory data. Outputs include susceptibility maps, population exposure, and WebGIS.",
    problem: ["Identify susceptible terrain from heterogeneous spatial layers, then assess population exposure."],
    contribution: ["Team contributor · With Firoozeh Rahimian and Hadi Kheiri"],
    data: [
      { label: "Terrain", detail: "DTM · Slope · Aspect · Plan and profile curvature" },
      { label: "Environment", detail: "DUSAF land use · NDVI · River, road, and fault buffers" },
      { label: "Labels", detail: "Landslide inventory and no-landslide zones for training/testing." },
      { label: "Exposure", detail: "Population raster aligned to susceptibility classes." }
    ],
    method: [
      { title: "Align", detail: "Reproject, clip, and rasterize sources; derive terrain variables and build a virtual raster." },
      { title: "Train", detail: "Prepare training/test points; classify with Random Forest in QGIS/Dzetsaka." },
      { title: "Map", detail: "Convert landslide-class probability to a 0–100 surface and four susceptibility classes." },
      { title: "Validate", detail: "Evaluate with an error matrix; calculate population exposure with zonal statistics." },
      { title: "Publish", detail: "Present results in an OpenLayers WebGIS." }
    ],
    outputs: [
      "Classification, confidence, and susceptibility rasters, including a four-class map.",
      "Population exposure analysis and interactive WebGIS."
    ],
    technologies: ["QGIS", "Dzetsaka", "Random Forest", "Python", "Remote sensing", "OpenLayers", "WebGIS"],
    evidenceIntro: "Original raster content · Source colors, values, and study boundaries preserved.",
    evidence: [
      { visual: "dtm", src: "/assets/projects/evidence/landslide-dtm.png", alt: "Digital terrain model used by the landslide project", title: "Terrain", caption: "DTM · Basis for terrain derivatives." },
      { visual: "ndvi", src: "/assets/projects/evidence/landslide-ndvi.webp", alt: "NDVI input map from the landslide project", title: "Vegetation", caption: "NDVI · Source area and study boundary." },
      { visual: "slope", src: "/assets/projects/evidence/landslide-slope.webp", alt: "Slope raster derived for the landslide study area", title: "Slope", caption: "Terrain-derived slope classes." },
      {
        visual: "confidence",
        src: "/assets/projects/evidence/landslide-confidence.webp",
        alt: "Random Forest classification confidence map from the landslide project",
        title: "Confidence",
        caption: "QGIS/Dzetsaka classification confidence."
      },
      {
        visual: "reclassified",
        src: "/assets/projects/evidence/landslide-reclassified.webp",
        alt: "Reclassified landslide susceptibility raster",
        title: "Susceptibility classes",
        caption: "Four classes for exposure analysis."
      },
      {
        visual: "susceptibility",
        src: "/assets/projects/evidence/landslide-susceptibility.png",
        alt: "Final landslide susceptibility map produced by the project",
        title: "Susceptibility surface",
        caption: "Continuous 0–100 output.",
        featured: true
      }
    ],
    links: [
      { label: "Open WebGIS", href: "https://amirdonyadide.github.io/GIS-Course-Polimi-2024/", kind: "demo" },
      { label: "Source code", href: "https://github.com/AmirDonyadide/GIS-Course-Polimi-2024", kind: "repository" }
    ],
    nextSlug: "nl2map",
    nextTitle: "NL2MAP"
  }
};

const german: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    ...english.nl2map,
    title: "Kartenoperationen aus Sprache",
    context: "Masterarbeit · Universität Bonn + Politecnico di Milano",
    summary: "Generalisierungsoperationen aus Beschreibungen von Kartenänderungen ableiten: öffentliche Vergleichsstudie, Textmerkmale und Klassifikation.",
    problem: [
      "Menschen beschreiben Kartenänderungen in Alltagssprache; Kartografiesoftware benötigt eindeutige Operationen wie Entfernen, Zusammenführen oder Vereinfachen."
    ],
    contribution: [
      "Thesisforschung durchgeführt und die öffentliche Oberfläche zur Erfassung von Beschreibungen gepaarter Karten entwickelt."
    ],
    data: [
      { label: "Karten", detail: "Gepaarte originale und generalisierte Gebäudegeometrien." },
      { label: "Sprache", detail: "Prompts der Teilnehmenden zu jeder Transformation." }
    ],
    method: [
      { title: "Erfassen", detail: "Kartenpaare zeigen und Beschreibungen sammeln." },
      { title: "Aufbereiten", detail: "Prompts und Kartenkontext als Modelleingaben strukturieren." },
      { title: "Klassifizieren", detail: "Operationskategorie aus Textmerkmalen ableiten." },
      { title: "Verknüpfen", detail: "Operation der generalisierten Geometrie zuordnen." }
    ],
    outputs: [
      "Öffentliche Kartenvergleichsstudie und gepaarte Gebäudekarten.",
      "Forschungspipeline zwischen Beschreibungen und Generalisierungsoperationen."
    ],
    evidenceIntro: "Studienpaar 1069 · Quellgeometrie mit gleichem Ausschnitt und Maßstab neu dargestellt.",
    evidence: english.nl2map.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Originalkarte", caption: "Ursprüngliche Gebäudegeometrie.", alt: "Originalkarte · Studienpaar 1069" },
        { title: "Generalisierte Karte", caption: "Zugehörige Studiengeometrie.", alt: "Generalisierte Karte · Studienpaar 1069" }
      ][index],
    })),
    links: english.nl2map.links.map((link, index) => ({ ...link, label: ["Studie öffnen", "Quellcode"][index] })),
  },
  se4g: {
    ...english.se4g,
    title: "Gefahren an Olympia-Standorten",
    context: "Geoinformatik-Kursprojekt",
    summary: "Hydrogeologische Indikatoren und Olympia-Standorte je Gemeinde erkunden: Dash-Anwendung mit PostGIS und Flask.",
    problem: [
      "Gefahrenindikatoren, Veranstaltungsorte und Nutzermeldungen gemeinsam abfragen, je Stadt untersuchen und herunterladen."
    ],
    contribution: ["Mitwirkender · Vierköpfiges Team"],
    data: [
      { label: "Gemeinden", detail: "Italienische Stadtgeometrien und hydrogeologische Indikatoren." },
      { label: "Events", detail: "Olympische Veranstaltungsorte und Ereignisdaten." },
      { label: "Meldungen", detail: "Anwendungsnutzende und eingereichte Berichte." }
    ],
    method: [
      { title: "Speichern", detail: "Räumliche und tabellarische Datensätze in PostgreSQL/PostGIS laden." },
      { title: "Bereitstellen", detail: "Städte, Indikatoren, Events, Nutzende und Meldungen über Flask ausgeben." },
      { title: "Verbinden", detail: "Folium-Karten und Plotly-Diagramme per Dash-Callback nach Stadt und Parameter aktualisieren." },
      { title: "Exportieren", detail: "Ausgewählte Indikator- und Veranstaltungstabellen als CSV herunterladen." }
    ],
    outputs: [
      "Verknüpfte Karten, Tabellen, Kreis- und Balkendiagramme mit Stadt- und Parameterauswahl.",
      "CSV-Downloads ausgewählter Datensätze."
    ],
    evidenceIntro: "Statische Rekonstruktion mit veröffentlichten Bormio-Werten und originalem Satellitenbild.",
    nextTitle: "Hangrutschungskartierung",
    evidence: english.se4g.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Bormio-Dashboard", caption: "Stadtindikatoren und Olympia-Standorte · Designdokument, S. 14.", alt: "Bormio-Dashboard · Bormio · SE4G" }
      ][index],
    })),
    links: english.se4g.links.map((link, index) => ({ ...link, label: ["Quellcode"][index] })),
  },
  landslide: {
    ...english.landslide,
    title: "Anfälligkeit für Hangrutschungen",
    context: "MSc-GIS-Projekt · Bergamo, Italien",
    summary: "Hangrutschungssuszeptibilität in Bergamo mit Random Forest kartieren: Gelände, Vegetation, Landnutzung, Distanzen und Inventardaten. Ergebnisse: Suszeptibilitätskarten, Bevölkerungsexposition und WebGIS.",
    problem: ["Anfälliges Gelände aus heterogenen Geodaten identifizieren und die Bevölkerungsexposition bewerten."],
    contribution: ["Teambeitrag · Mit Firoozeh Rahimian und Hadi Kheiri"],
    data: [
      { label: "Gelände", detail: "DGM · Neigung · Exposition · Plan- und Profilkrümmung" },
      { label: "Umwelt", detail: "DUSAF-Landnutzung · NDVI · Fluss-, Straßen- und Störungspuffer" },
      { label: "Labels", detail: "Hangrutschungsinventar und Nicht-Rutschungszonen für Training und Test." },
      { label: "Exposition", detail: "Bevölkerungsraster, an Suszeptibilitätsklassen ausgerichtet." }
    ],
    method: [
      { title: "Ausrichten", detail: "Quellen reprojizieren, zuschneiden und rasterisieren; Geländevariablen ableiten und virtuelles Raster erstellen." },
      { title: "Trainieren", detail: "Trainings-/Testpunkte vorbereiten; Random Forest in QGIS/Dzetsaka ausführen." },
      { title: "Kartieren", detail: "Rutschungswahrscheinlichkeit in eine 0–100-Fläche und vier Suszeptibilitätsklassen überführen." },
      { title: "Validieren", detail: "Mit Fehlermatrix prüfen; Bevölkerungsexposition per zonaler Statistik berechnen." },
      { title: "Publizieren", detail: "Ergebnisse in einem OpenLayers-WebGIS darstellen." }
    ],
    outputs: [
      "Klassifikations-, Konfidenz- und Suszeptibilitätsraster mit Vierklassenkarte.",
      "Bevölkerungsexpositionsanalyse und interaktives WebGIS."
    ],
    evidenceIntro: "Originale Rasterinhalte · Quellfarben, Werte und Untersuchungsgrenzen erhalten.",
    evidence: english.landslide.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Gelände", caption: "DGM · Grundlage der Geländevariablen.", alt: "Gelände · Bergamo · QGIS" },
        { title: "Vegetation", caption: "NDVI · Quellgebiet und Untersuchungsgrenze.", alt: "Vegetation · Bergamo · QGIS" },
        { title: "Hangneigung", caption: "Aus Geländedaten abgeleitete Neigungsklassen.", alt: "Hangneigung · Bergamo · QGIS" },
        { title: "Konfidenz", caption: "QGIS/Dzetsaka-Klassifikationskonfidenz.", alt: "Konfidenz · Bergamo · QGIS" },
        { title: "Suszeptibilitätsklassen", caption: "Vier Klassen für die Expositionsanalyse.", alt: "Suszeptibilitätsklassen · Bergamo · QGIS" },
        { title: "Suszeptibilitätsfläche", caption: "Kontinuierliches 0–100-Ergebnis.", alt: "Suszeptibilitätsfläche · Bergamo · QGIS" }
      ][index],
    })),
    links: english.landslide.links.map((link, index) => ({ ...link, label: ["WebGIS öffnen", "Quellcode"][index] })),
  },
};

const italian: Record<ProjectSlug, ProjectCaseStudyCopy> = {
  nl2map: {
    ...english.nl2map,
    title: "Operazioni cartografiche dal linguaggio",
    context: "Tesi magistrale · Università di Bonn + Politecnico di Milano",
    summary: "Inferire operazioni cartografiche dalle descrizioni di variazioni nelle mappe di edifici: studio comparativo pubblico, feature testuali e classificazione.",
    problem: [
      "Le persone descrivono le variazioni con parole comuni; il software cartografico richiede operazioni esplicite come rimozione, fusione o semplificazione."
    ],
    contribution: ["Ho condotto la ricerca di tesi e sviluppato l’interfaccia pubblica per raccogliere descrizioni di coppie di mappe."],
    data: [
      { label: "Mappe", detail: "Geometrie di edifici originali e generalizzate abbinate." },
      { label: "Linguaggio", detail: "Prompt dei partecipanti sulle trasformazioni." }
    ],
    method: [
      { title: "Raccogliere", detail: "Mostrare coppie di mappe e raccogliere descrizioni." },
      { title: "Rappresentare", detail: "Strutturare prompt e contesto cartografico come input del modello." },
      { title: "Classificare", detail: "Inferire la categoria di operazione dalle feature testuali." },
      { title: "Collegare", detail: "Associare l’operazione alla geometria generalizzata." }
    ],
    outputs: [
      "Studio pubblico di confronto cartografico e coppie di mappe di edifici.",
      "Pipeline di ricerca tra descrizioni e operazioni di generalizzazione."
    ],
    evidenceIntro: "Coppia 1069 · Geometria sorgente ridisegnata con estensione e scala comuni.",
    evidence: english.nl2map.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Mappa originale", caption: "Geometria iniziale degli edifici.", alt: "Mappa originale · Coppia di studio 1069" },
        { title: "Mappa generalizzata", caption: "Geometria corrispondente nello studio.", alt: "Mappa generalizzata · Coppia di studio 1069" }
      ][index],
    })),
    links: english.nl2map.links.map((link, index) => ({ ...link, label: ["Apri studio", "Codice"][index] })),
  },
  se4g: {
    ...english.se4g,
    title: "Dashboard dei rischi nelle sedi olimpiche",
    context: "Progetto di geoinformatica",
    summary: "Esplorare indicatori idrogeologici e sedi olimpiche per comune in un’applicazione Dash con PostGIS e Flask.",
    problem: [
      "Esaminare insieme indicatori di pericolosità, sedi degli eventi e segnalazioni, con query per città e dati scaricabili."
    ],
    contribution: ["Contributore · Team di quattro persone"],
    data: [
      { label: "Comuni", detail: "Geometrie delle città italiane e indicatori idrogeologici." },
      { label: "Eventi", detail: "Sedi olimpiche e dati degli eventi." },
      { label: "Segnalazioni", detail: "Utenti dell’applicazione e segnalazioni inviate." }
    ],
    method: [
      { title: "Memorizzare", detail: "Caricare dati spaziali e tabellari in PostgreSQL/PostGIS." },
      { title: "Esporre", detail: "Servire città, indicatori, eventi, utenti e segnalazioni tramite Flask." },
      { title: "Collegare", detail: "Aggiornare mappe Folium e grafici Plotly per città e parametro con callback Dash." },
      { title: "Esportare", detail: "Scaricare tabelle di indicatori ed eventi selezionati in CSV." }
    ],
    outputs: [
      "Mappe, tabelle, grafici a torta e a barre con selezione di città e parametro.",
      "Download CSV dei record selezionati."
    ],
    evidenceIntro: "Ricostruzione statica con valori pubblicati di Bormio e immagini satellitari originali.",
    nextTitle: "Suscettibilità alle frane",
    evidence: english.se4g.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Dashboard di Bormio", caption: "Indicatori comunali e sedi olimpiche · Design document, p. 14.", alt: "Dashboard di Bormio · Bormio · SE4G" }
      ][index],
    })),
    links: english.se4g.links.map((link, index) => ({ ...link, label: ["Codice"][index] })),
  },
  landslide: {
    ...english.landslide,
    title: "Suscettibilità alle frane",
    context: "Progetto GIS magistrale · Bergamo, Italia",
    summary: "Suscettibilità alle frane a Bergamo con Random Forest: terreno, vegetazione, uso del suolo, prossimità e inventario. Output: mappe di suscettibilità, esposizione della popolazione e WebGIS.",
    problem: ["Individuare terreni suscettibili da layer eterogenei e valutare l’esposizione della popolazione."],
    contribution: [
      "Contributo in team · Con Firoozeh Rahimian e Hadi Kheiri"
    ],
    data: [
      { label: "Terreno", detail: "DTM · Pendenza · Esposizione · Curvature planimetrica e di profilo" },
      { label: "Ambiente", detail: "Uso del suolo DUSAF · NDVI · Buffer di fiumi, strade e faglie" },
      { label: "Etichette", detail: "Inventario frane e zone senza frane per training e test." },
      { label: "Esposizione", detail: "Raster di popolazione allineato alle classi di suscettibilità." }
    ],
    method: [
      { title: "Allineare", detail: "Riproiettare, ritagliare e rasterizzare; derivare variabili del terreno e creare un raster virtuale." },
      { title: "Addestrare", detail: "Preparare punti di training/test; classificare con Random Forest in QGIS/Dzetsaka." },
      { title: "Mappare", detail: "Convertire la probabilità di frana in una superficie 0–100 e quattro classi." },
      { title: "Validare", detail: "Valutare con matrice degli errori; calcolare l’esposizione tramite statistiche zonali." },
      { title: "Pubblicare", detail: "Presentare i risultati in un WebGIS OpenLayers." }
    ],
    outputs: [
      "Raster di classificazione, confidenza e suscettibilità, con mappa a quattro classi.",
      "Analisi dell’esposizione della popolazione e WebGIS interattivo."
    ],
    evidenceIntro: "Raster originali · Colori, valori e confini dell’area di studio conservati.",
    evidence: english.landslide.evidence.map((item, index) => ({
      ...item,
      ...[
        { title: "Terreno", caption: "DTM · Base delle variabili topografiche.", alt: "Terreno · Bergamo · QGIS" },
        { title: "Vegetazione", caption: "NDVI · Area sorgente e perimetro di studio.", alt: "Vegetazione · Bergamo · QGIS" },
        { title: "Pendenza", caption: "Classi derivate dal terreno.", alt: "Pendenza · Bergamo · QGIS" },
        { title: "Confidenza", caption: "Confidenza della classificazione QGIS/Dzetsaka.", alt: "Confidenza · Bergamo · QGIS" },
        { title: "Classi di suscettibilità", caption: "Quattro classi per l’analisi dell’esposizione.", alt: "Classi di suscettibilità · Bergamo · QGIS" },
        { title: "Superficie di suscettibilità", caption: "Output continuo 0–100.", alt: "Superficie di suscettibilità · Bergamo · QGIS" }
      ][index],
    })),
    links: english.landslide.links.map((link, index) => ({ ...link, label: ["Apri WebGIS", "Codice"][index] })),
  },
};

export const caseStudyUiCopy: Record<Locale, CaseStudyUiCopy> = {
  en: {
    navigationLabel: "Case study navigation",
    homeLabel: "Amirhossein Donyadidegan - home",
    allWork: "All work",
    quickCv: "Quick CV",
    languageLabel: "Language",
    problem: "Challenge",
    contribution: "My role",
    data: "Inputs",
    method: "Approach",
    results: "Output",
    technology: "Stack",
    visualEvidence: "Maps & interface",
    openImage: "Original image",
    projectLinks: "Sources",
    nextProject: "Next project",
    backToWork: "All work"
  },
  de: {
    navigationLabel: "Navigation der Fallstudie",
    homeLabel: "Amirhossein Donyadidegan - Startseite",
    allWork: "Alle Projekte",
    quickCv: "Kurzprofil",
    languageLabel: "Sprache",
    problem: "Aufgabe",
    contribution: "Meine Rolle",
    data: "Daten",
    method: "Ansatz",
    results: "Ergebnis",
    technology: "Stack",
    visualEvidence: "Karten & Oberfläche",
    openImage: "Originalbild",
    projectLinks: "Quellen",
    nextProject: "Nächstes Projekt",
    backToWork: "Alle Projekte"
  },
  it: {
    navigationLabel: "Navigazione del caso studio",
    homeLabel: "Amirhossein Donyadidegan - home",
    allWork: "Tutti i progetti",
    quickCv: "CV rapido",
    languageLabel: "Lingua",
    problem: "Problema",
    contribution: "Il mio ruolo",
    data: "Input",
    method: "Metodo",
    results: "Output",
    technology: "Stack",
    visualEvidence: "Mappe e interfaccia",
    openImage: "Immagine originale",
    projectLinks: "Fonti",
    nextProject: "Prossimo progetto",
    backToWork: "Tutti i progetti"
  }
};

export const projectCaseStudies: CaseStudiesByLocale = { en: english, de: german, it: italian };
