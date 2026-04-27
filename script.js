const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(document.querySelectorAll(".project-card[data-categories]"));
const projectCount = document.querySelector("[data-project-count]");
const projectEmptyState = document.querySelector("[data-project-empty]");
const themeToggle = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const proofValue = document.querySelector(".proof-value[data-count-to]");

const originalText = new Map();
const originalHtml = new Map();
const attrElements = Array.from(document.querySelectorAll("[data-i18n-attr]"));
const attrDefaults = new WeakMap();
const originalTitle = document.title;

const parseAttrPairs = (value) =>
  value
    .split(",")
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const separator = pair.indexOf(":");
      return {
        attr: pair.slice(0, separator).trim(),
        key: pair.slice(separator + 1).trim(),
      };
    });

document.querySelectorAll("[data-i18n]").forEach((element) => {
  originalText.set(element.dataset.i18n, element.textContent);
});

document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  originalHtml.set(element.dataset.i18nHtml, element.innerHTML);
});

attrElements.forEach((element) => {
  const defaults = {};
  parseAttrPairs(element.dataset.i18nAttr).forEach(({ attr }) => {
    defaults[attr] = element.getAttribute(attr) || "";
  });
  attrDefaults.set(element, defaults);
});

const translations = {
  de: {
    title: "Amirhossein Donyadidegan | Junior Geoinformatik-Ingenieur",
    text: {
      skip: "Zum Inhalt springen",
      "nav.toggle": "Navigation umschalten",
      "nav.about": "Profil",
      "nav.services": "Leistungen",
      "nav.roles": "Rollen",
      "nav.bring": "Fit",
      "nav.experience": "Erfahrung",
      "nav.skills": "Fähigkeiten",
      "nav.projects": "Projekte",
      "nav.process": "Prozess",
      "nav.education": "Ausbildung",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Portfolio für Geodaten-Systeme",
      "hero.title": "Klare geospatiale Workflows von Daten bis Entscheidung gestalten.",
      "hero.subtitle":
        "Ich bin Amirhossein Donyadidegan, Geoinformatik-Ingenieur mit Fokus auf Python-gestützte GIS-Workflows, Fernerkundungsanalysen, Dashboards und räumliche Datenprodukte.",
      "hero.note": "Strukturierte Portfolio-Nachweise in geospatialem ML, Rasterverarbeitung, WebGIS und forschungsnaher räumlicher Analyse.",
      "hero.viewProjects": "Projekte ansehen",
      "hero.downloadCv": "CV herunterladen",
      "hero.contact": "Kontakt",
      "hero.snapshotTitle": "Recruiter Snapshot",
      "hero.available": "Verfügbar",
      "hero.snapshotLevelLabel": "Level",
      "hero.snapshotLevel": "Early Career Geospatial Specialist",
      "hero.snapshotCoreLabel": "Kernprofil",
      "hero.snapshotCore": "GIS, Python, Fernerkundung",
      "hero.snapshotEvidenceLabel": "Nachweis",
      "hero.snapshotEvidence": "MSc-Arbeit, KIT-Forschung, Geodatenprojekte",
      "summary.eyebrow": "Recruiter Summary",
      "summary.title": "Technische Arbeit, die ich als Junior-Kandidat beitragen kann.",
      "summary.text":
        "Ich überführe räumliche Datensätze in analysefähige Layer, Modell-Features, Dashboards und dokumentierte Python-Workflows. Meine Arbeit liegt zwischen GIS-Operationen, Raster-/Vektordatenverarbeitung und angewandten Machine-Learning-Experimenten.",
      "intro.locationLabel": "Standort",
      "intro.location": "Karlsruhe, Baden-Württemberg, Deutschland",
      "intro.degreeLabel": "Ausbildung",
      "intro.degree": "MSc Geoinformatik-Ingenieurwesen, abgeschlossen",
      "intro.positioningLabel": "Positionierung",
      "intro.positioning": "Junior GIS / Geospatial Data",
      "context.eyebrow": "Vertrauenssignale",
      "context.title": "Abgeschlossener MSc, KIT-Forschungserfahrung und Austauschaufenthalte in Deutschland.",
      "logos.polimi": "Politecnico di Milano",
      "logos.polimiRole": "MSc Geoinformatik-Ingenieurwesen",
      "logos.bonn": "Universität Bonn",
      "logos.bonnRole": "Erasmus+ Austausch, Geodäsie",
      "logos.kit": "Karlsruher Institut für Technologie",
      "logos.kitRole": "Austausch und Hilfswissenschaftler-Rollen",
      "logos.tehran": "Universität Teheran",
      "logos.tehranRole": "BSc Vermessungsingenieurwesen",
      "roles.eyebrow": "Zielrollen",
      "roles.title": "Recruiter-freundliche Rollen, die zum Profil passen.",
      "roles.r1": "Junior GIS Analyst",
      "roles.r2": "Geospatial Data Analyst",
      "roles.r3": "Geoinformatik-Ingenieur",
      "roles.r4": "Remote Sensing Analyst",
      "roles.r5": "Spatial Data Analyst",
      "roles.r6": "GIS Developer (Python)",
      "roles.r7": "Junior Python GIS Developer",
      "available.title": "Verfügbar für",
      "available.a1": "Junior-GIS-Positionen",
      "available.a2": "Graduate-Rollen",
      "available.a3": "Geospatial-Analyst-Rollen",
      "available.a4": "Hilfswissenschaftler-Positionen",
      "available.a5": "Positionen in Deutschland",
      "available.a6": "Hybride oder Remote-Möglichkeiten",
      "about.eyebrow": "Profil",
      "about.title": "Ein angewandtes Geoinformatik-Profil, kein generisches Entwicklerportfolio.",
      "about.p1":
        "Mich interessiert besonders die Arbeit an der Schnittstelle von Karten, Datenqualität, räumlichem Denken und reproduzierbarem Code. Mein Hintergrund verbindet Geoinformatik-Kurse, Austauschstudium in Deutschland, angewandte Forschungsunterstützung und Portfolio-Projekte, die meine schrittweise Herangehensweise an räumliche Datenprobleme zeigen.",
      "about.q1": "Python-basierte Verarbeitung geospatialer Daten",
      "about.q2": "Fernerkundung und Earth-Observation-Workflows",
      "about.q3": "Interaktive Dashboards und WebGIS-Anwendungen",
      "about.q4": "Machine Learning für räumliche Datenprobleme",
      "about.human": "Ich mag räumliche Workflows, weil sie komplexe reale Fragen prüfbarer, erklärbarer und verbesserbar machen.",
      "bring.eyebrow": "Leistungen & Stärken",
      "bring.title": "Angewandte geospatiale Unterstützung mit klaren technischen Nachweisen.",
      "bring.card1Title": "GIS plus Python",
      "bring.card1Text": "Sicher im Wechsel zwischen räumlichen Konzepten, GIS-Werkzeugen und Python-basierter Verarbeitung.",
      "bring.card2Title": "Angewandte Forschungserfahrung",
      "bring.card2Text": "Erfahrung in der Unterstützung von KIT-Forschungsworkflows mit Energie-, Mobilitäts-, Dashboard- und Kartenbezug.",
      "bring.card3Title": "Earth-Observation-Denkweise",
      "bring.card3Text": "Projektarbeit mit Satellitendatenverarbeitung, Rasteranalyse, Umweltindikatoren und WebGIS-Ausgaben.",
      "bring.card4Title": "Geospatial-ML-Schnittstelle",
      "bring.card4Text": "Thesis und Projekte verbinden räumliche Features, Text-Prompts, Klassifikation, Evaluation und Modellworkflows.",
      "bring.card5Title": "Internationaler akademischer Weg",
      "bring.card5Text": "MSc-Studium in Italien, Austausch in Deutschland und Grundlagen im Vermessungsingenieurwesen.",
      "experience.eyebrow": "Erfahrung",
      "experience.title": "Junior-Level-Erfahrung in angewandter Forschung, GIS-Analyse und Web-Support.",
      "experience.kitIipRole": "GIS- & Datenanalyst, Hilfswissenschaftler",
      "experience.recent": "Am relevantesten",
      "experience.kitIipMeta": "IIP, Karlsruher Institut für Technologie (KIT)",
      "experience.kitIipB1": "Aufbau Python-basierter Pipelines für Energie- und Mobilitätsdatensätze in angewandten Forschungsworkflows.",
      "experience.kitIipB2": "Durchführung räumlicher Analysen von Mobilitäts- und Energiedaten zur Unterstützung von Dekarbonisierungsmodellierung und Planungsforschung.",
      "experience.kitIipB3": "Erstellung von Dashboard-Ansichten mit Kartenintegration, um Forschungsdaten leichter prüfbar und kommunizierbar zu machen.",
      "experience.kitNovaRole": "Webentwickler, Hilfswissenschaftler",
      "experience.kitNovaMeta": "KIT nova",
      "experience.kitNovaB1": "Unterstützung der Webanwendungsentwicklung für digitale Forschungs- und Innovationsworkflows mit Blick auf Usability.",
      "experience.kitNovaB2": "Mitarbeit an VR/AR-Projektarbeit durch Vorbereitung interaktiver Komponenten und visueller Ausgaben.",
      "experience.kitNovaB3": "Beitrag zu kartenbezogenen Interface-Elementen und geospatialen Visualisierungen für digitale Anwendungen.",
      "experience.ngfRole": "Praktikant",
      "experience.ngfMeta": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfB1": "Unterstützung von Vermessungs-, Photogrammetrie- und GIS-Projekten in einem praktischen Arbeitsumfeld.",
      "experience.ngfB2": "Unterstützung bei Datenerfassung und räumlicher Datenvorbereitung für technische Projektarbeit.",
      "experience.ngfB3": "Nutzung von AutoCAD und GIS-Tools zur Vorbereitung und Verarbeitung geospatialer Projektdaten.",
      "experience.toolsLabel": "Tools:",
      "skills.eyebrow": "Fähigkeiten",
      "skills.title": "Kompaktes technisches Profil für GIS- und Geodatenrollen.",
      "skills.programmingTitle": "Programmierung",
      "skills.gisTitle": "GIS & Geospatial",
      "skills.dataTitle": "Data & ML",
      "skills.visualTitle": "Visualisierung",
      "skills.webTitle": "Web & APIs",
      "projects.eyebrow": "Projektbibliothek",
      "projects.title": "Projekte gruppiert nach Geodaten-, Software-, AI- und Vermessungsfähigkeiten.",
      "projects.intro": "Projekte nach Fähigkeitsbereich filtern. Mehrere Projekte erscheinen bewusst in mehreren Gruppen.",
      "projects.typeThesis": "MSc-Arbeit",
      "projects.typeRaster": "Raster-Simulation",
      "projects.typeEo": "Earth Observation",
      "projects.typeWebgis": "WebGIS",
      "projects.typeDashboard": "Dashboard",
      "projects.typeDeepLearning": "Deep Learning",
      "projects.typeRemoteStudy": "Fernerkundung",
      "projects.typeWebDevelopment": "Webentwicklung",
      "projects.typeSurveying": "Vermessung",
      "projects.typeEngineeringDesign": "Ingenieurdesign",
      "projects.typePointCloud": "Punktwolke",
      "projects.featured": "Flagship",
      "projects.github": "GitHub ansehen",
      "projects.details": "Details ansehen",
      "projects.empty": "Für diesen Filter gibt es noch keine passenden Projekte.",
      "projects.problemLabel": "Problem:",
      "projects.methodLabel": "Methode:",
      "projects.techStack": "Tech Stack:",
      "projects.demonstratesLabel": "Zeigt:",
      "projects.nl2mapProblem": "Verbindung menschlicher Kartenbearbeitungswünsche mit den Operationen, die zur Generalisierung von Kartenobjekten nötig sind.",
      "projects.nl2mapMethod": "Nutzung von Text-Embeddings, geometrischen Features, Modelltraining und Evaluation in einer Python-Pipeline.",
      "projects.nl2mapDemo": "Geospatial ML, Feature Engineering, kartografisches Denken",
      "projects.layerProblem": "Raster-Layer wiederholbar verändern und dabei räumliche Masken sowie Koordinatensysteme beachten.",
      "projects.layerMethod": "Implementierung maskenbasierter Rasteroperationen mit CRS-Konsistenz, Validierung und modularen Python-Funktionen.",
      "projects.layerDemo": "Rasterverarbeitung, Geodata Engineering, Python-Tooling",
      "projects.landsatProblem": "Häufige Landsat-Verarbeitungsschritte für Earth-Observation-Analysen wiederverwendbar machen.",
      "projects.landsatMethod": "Paketierung von Metadatenverarbeitung, Bandoperationen, Reprojektion und indexorientierten Workflows in Python.",
      "projects.landsatDemo": "Earth Observation, wiederverwendbare Python-Pakete, Raster-Workflows",
      "projects.landslideProblem": "Bewertung von Hangrutschungsanfälligkeit mithilfe räumlicher Evidenz aus Terrain-, Infrastruktur- und Umweltlayern.",
      "projects.landslideMethod": "Kombination von GIS-Layern, Fernerkundungsdaten, Machine-Learning-Schritten und WebGIS-Kommunikation.",
      "projects.landslideDemo": "Räumliche Modellierung, WebGIS-Kommunikation, Umweltanalyse",
      "projects.se4gProblem": "Geospatiale Datensätze über eine browserbasierte Analyseoberfläche leichter prüfbar machen.",
      "projects.se4gMethod": "Kombination von Karten, Diagrammen, API-Integration und Dashboard-Interaktionen in einer Python-Webanwendung.",
      "projects.se4gDemo": "Dashboard-Entwicklung, geospatiale Visualisierung, Datenkommunikation",
      "projects.additionalSummary": "Weitere Projekte",
      "projects.dlDemo": "Computer-Vision-Workflow, Modellvergleich, Grundlagen der Evaluation",
      "projects.eoDemo": "Earth Observation, NDWI-Analyse, zeitliche Kartierung",
      "projects.poliyogaDemo": "Webanwendungsgrundlagen, UX-Kollaboration, datenbankgestützte Funktionen",
      "projects.surveyingTitle": "Ingenieurvermessung",
      "projects.levellingTitle": "Nivellement-Projekt",
      "projects.roadTitle": "Straßenplanung mit Civil 3D",
      "projects.laserTitle": "3D-Laserscanning",
      "projects.additional1": "Vermessungsarbeit auf dem Campus der Universität Teheran mit Totalstation-Datenerfassung und Lageplanerstellung.",
      "projects.additional2": "Messung von Höhenunterschieden mit klassischen Nivellement-Methoden, Fehlerkontrolle und technischer Dokumentation.",
      "projects.additional3": "Entwurf einer Straßenverbindung mit AutoCAD Civil 3D, Trassengeometrie, Längsprofilen und Cut-and-Fill-Volumen.",
      "projects.additional4": "Erfassung und Verarbeitung von Punktwolkendaten eines Gebäudegeschosses zur Unterstützung digitaler 3D-Modellierung.",
      "projects.surveyingDemo": "Vermessungsgrundlagen, Felddaten, Lageplanerstellung",
      "projects.levellingDemo": "Messdisziplin, Qualitätskontrolle, Dokumentation",
      "projects.roadDemo": "Ingenieur-Design-Tools, Geländeinterpretation, Volumenberechnung",
      "projects.laserDemo": "Punktwolken-Workflow, 3D-Datenerfassung, Vermessungstechnologie",
      "process.eyebrow": "Prozess",
      "process.title": "Ein strukturierter Workflow von der räumlichen Fragestellung zum nutzbaren Produkt.",
      "process.intro":
        "Ich behandle geospatiale Arbeit wie ein Produktsystem: Entscheidung definieren, Daten validieren, Workflow gestalten und Ergebnisse liefern, die prüfbar und wiederverwendbar sind.",
      "process.discoveryTitle": "Discovery",
      "process.discoveryText": "Räumliche Fragestellung, Nutzer, Einschränkungen, verfügbare Daten und Erfolgskriterien klären.",
      "process.strategyTitle": "Strategie",
      "process.strategyText": "Analysepfad, Datenmodell, Tools, Validierungschecks und Kommunikationsformat festlegen.",
      "process.designTitle": "Design",
      "process.designText": "Karte, Dashboard, Workflow oder Modellergebnis mit Hierarchie und Interpretierbarkeit strukturieren.",
      "process.developmentTitle": "Entwicklung",
      "process.developmentText": "Saubere Python-, GIS-, WebGIS- oder Dashboard-Workflows mit wiederverwendbarer und dokumentierter Logik bauen.",
      "process.deliveryTitle": "Lieferung",
      "process.deliveryText": "Ergebnisse mit klarer Dokumentation, visuellen Outputs und nächsten Empfehlungen übergeben.",
      "proof.eyebrow": "Social Proof",
      "proof.title": "Glaubwürdigkeit durch akademische, forschungsbezogene und projektbasierte Nachweise.",
      "proof.microcopy": "Die stärksten Nachweise sind praktisch: abgeschlossene akademische Arbeit, angewandte KIT-Unterstützung und prüfbare Projektartefakte.",
      "proof.projects": "Flagship-Projekte im Geodatenbereich",
      "proof.msc": "Geoinformatik-Ingenieurwesen",
      "proof.kit": "Angewandte Arbeit als wissenschaftliche Hilfskraft",
      "proof.institutions": "Akademische Stationen in Italien und Deutschland",
      "filters.all": "Alle",
      "filters.gis": "GIS",
      "filters.python": "Python",
      "filters.remote": "Fernerkundung",
      "filters.ml": "Machine Learning",
      "filters.dashboard": "Dashboard",
      "filters.webgis": "WebGIS",
      "filters.webdev": "Webentwicklung",
      "filters.software": "Software Design",
      "filters.javascript": "JavaScript",
      "filters.deep": "Deep Learning",
      "filters.ai": "AI",
      "filters.surveying": "Vermessung",
      "education.eyebrow": "Ausbildung",
      "education.title": "Grundlagen in Geoinformatik, Fernerkundung, GIS und Vermessung.",
      "education.mscTitle": "MSc Geoinformatik-Ingenieurwesen",
      "education.mscMeta": "Politecnico di Milano, Italien",
      "education.mscDate": "Sep. 2023 - Mär. 2026 | abgeschlossen | Note: 102 / 110, ca. 1,5",
      "education.mscExchange": "Austauschstudent in Geodäsie an der Universität Bonn sowie in Fernerkundung und Geoinformation am KIT.",
      "education.bscTitle": "BSc Vermessungsingenieurwesen",
      "education.bscMeta": "Universität Teheran, Iran",
      "education.bscDate": "Sep. 2018 - Jul. 2022 | Note: 16,5 / 20, ca. 1,9",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Offen für Junior-Rollen in GIS und geospatialer Datenarbeit in Deutschland.",
      "contact.p":
        "Interessiert an Junior-Rollen in GIS, geospatialer Analyse oder Python-basierter räumlicher Arbeit? Ich freue mich über eine Nachricht oder Vernetzung.",
      "contact.closing": "Interessiert an geospatialen Workflows, Forschungsunterstützung oder kollaborativen räumlichen Datenprodukten.",
      "contact.emailButton": "E-Mail senden",
      "contact.cvButton": "CV herunterladen",
      "contact.availability": "Verfügbar für Junior-Rollen in GIS, Python, Fernerkundung und geospatialer Analyse.",
      "contact.langEn": "Englisch: fließend",
      "contact.langDe": "Deutsch: Mittelstufe",
      "contact.langIt": "Italienisch: Mittelstufe",
      "contact.license": "Führerschein: Klasse B",
      "footer.credits":
        "Projektvisualisierungen: lokale Kompositionen aus verfügbaren Thesis-Ausgaben und geospatialen Bildern. Logos: öffentliche institutionelle Logodateien und die bereitgestellte Thesis-Präsentation.",
      "footer.tagline": "Geospatiale Workflows, Forschung und angewandtes Systemdenken.",
    },
    html: {
      "about.p2":
        "Meine MSc-Arbeit, <cite>Inferring Map Generalization Operations from User Prompts</cite>, ist ein gutes Beispiel für diese Schnittstelle: kartografische Generalisierung, natürlichsprachliche Prompts, Feature Engineering und Modellevaluation in einem geospatialen Workflow.",
      "projects.nl2mapDesc":
        "Entwicklung eines Machine-Learning-Workflows, der Nutzerprompts mit kartografischen Generalisierungsoperationen für strukturiertere Entscheidungen im Kartendesign verbindet.",
      "projects.layerDesc":
        "Entwicklung eines Python-Tools zur kontrollierten Rastermodifikation mit Vektormasken, wiederverwendbarer Verarbeitungslogik und geospatialen Validierungsprüfungen.",
      "projects.landsatDesc":
        "Entwicklung eines wiederverwendbaren Python-Toolkits zur Verarbeitung von Landsat-Satellitendaten, einschließlich Metadatenextraktion, Bandoperationen, Reprojektion und Umweltanalyse-Workflows.",
      "projects.landslideDesc":
        "Entwicklung eines GIS- und Machine-Learning-Workflows zur Kartierung von Hangrutschungsanfälligkeit mit Terrain-, Infrastruktur- und Fernerkundungsdaten.",
      "projects.se4gDesc":
        "Entwicklung eines interaktiven Dashboards zur Exploration geospatialer Daten mit Karten, Diagrammen, API-Integration und nutzergesteuerter Analyse in einer praktischen Datenanwendung.",
      "projects.dlDesc":
        "Vergleich eines CNN und eines vortrainierten ResNet18-Modells für Bildklassifikation mit Training, Evaluation, Metriken, Normalisierung und Fehleranalyse.",
      "projects.eoadvancedDesc":
        "Analyse von Veränderungen der Wasserflächen mithilfe von Satellitendaten, NDWI-basierten Indikatoren, Karten und statistischen Visualisierungen für 2021 bis 2024.",
      "projects.poliyogaDesc":
        "Mitarbeit an einer responsiven Webplattform für eine Yoga-Akademie mit Frontend-, UX- und datenbanknahen Funktionen für Profile, Aktivitäten und dynamische Inhalte.",
      "education.mscThesis": "<strong>Masterarbeit:</strong> <cite>Inferring Map Generalization Operations from User Prompts</cite>",
      "education.mscCourses":
        "<strong>Relevante Kurse:</strong> Geographic Information Systems, Machine Learning, Databases, Earth Observation, Geospatial Data Analysis, Geospatial Processing",
      "education.bscThesis": "<strong>Bachelorarbeit:</strong> <cite>Application of GIS and Big Data in Smart Cities</cite>",
      "education.bscCourses":
        "<strong>Relevante Kurse:</strong> Surveying, Photogrammetry, Remote Sensing, Geographic Information Systems, Spatial Analysis, Geodesy",
      "footer.copy": '&copy; <span id="year"></span> Amirhossein Donyadidegan. Erstellt für GitHub Pages.',
    },
    attrs: {
      "nav.aria": "Hauptnavigation",
      "language.aria": "Sprachauswahl",
      "hero.actionsAria": "Hauptaktionen",
      "hero.snapshotAria": "Recruiter Snapshot",
      "intro.aria": "Profil-Highlights",
      "logos.polimiAlt": "Logo des Politecnico di Milano",
      "logos.bonnAlt": "Logo der Universität Bonn",
      "logos.kitAlt": "Logo des Karlsruher Instituts für Technologie",
      "logos.kitShortAlt": "KIT-Logo",
      "logos.tehranAlt": "Zeichen der Universität Teheran",
      "roles.targetAria": "Zielrollen",
      "about.strengthsAria": "Kernstärken",
      "skills.aria": "Technische Fähigkeiten",
      "projects.filtersAria": "Projektfilter",
      "projectVisuals.generalization": "Eingabe- und generalisierte Kartenausgabe aus dem Thesis-Projekt zur Kartengeneralisierung",
      "projectVisuals.raster": "Raster-Simulationsvisual mit Vektormasken-Overlay für LayerAlterator",
      "projectVisuals.eo": "LandsatToolkit-Visualisierung eines Satellitenbildverarbeitungs-Workflows",
      "projectVisuals.webgis": "Visualisierung einer Hangrutschungsanfälligkeitskarte mit Terrain- und Risikoklassen",
      "projectVisuals.dashboard": "SE4G-Dashboard-Visual mit Karten- und Diagrammpanels",
      "education.exchangeAria": "Austauschuniversitäten",
      "contact.langAria": "Sprachen und weitere Details",
    },
  },
  it: {
    title: "Amirhossein Donyadidegan | Ingegnere junior in geoinformatica",
    text: {
      skip: "Vai al contenuto",
      "nav.toggle": "Apri o chiudi navigazione",
      "nav.about": "Profilo",
      "nav.services": "Servizi",
      "nav.roles": "Ruoli",
      "nav.bring": "Fit",
      "nav.experience": "Esperienza",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.process": "Processo",
      "nav.education": "Formazione",
      "nav.contact": "Contatti",
      "hero.eyebrow": "Portfolio di sistemi geospaziali",
      "hero.title": "Progettare workflow geospaziali chiari, dai dati alla decisione.",
      "hero.subtitle":
        "Sono Amirhossein Donyadidegan, ingegnere in geoinformatica che costruisce workflow GIS con Python, analisi di telerilevamento, dashboard e prodotti di dati spaziali.",
      "hero.note": "Evidenze di portfolio strutturate su geospatial ML, elaborazione raster, WebGIS e analisi spaziale orientata alla ricerca.",
      "hero.viewProjects": "Vedi progetti",
      "hero.downloadCv": "Scarica CV",
      "hero.contact": "Contatti",
      "hero.snapshotTitle": "Sintesi per recruiter",
      "hero.available": "Disponibile",
      "hero.snapshotLevelLabel": "Livello",
      "hero.snapshotLevel": "Early Career Geospatial Specialist",
      "hero.snapshotCoreLabel": "Profilo chiave",
      "hero.snapshotCore": "GIS, Python, Telerilevamento",
      "hero.snapshotEvidenceLabel": "Evidenze",
      "hero.snapshotEvidence": "Tesi MSc, ricerca al KIT, progetti geospaziali",
      "summary.eyebrow": "Sintesi per recruiter",
      "summary.title": "Contributi tecnici che posso portare come candidato junior.",
      "summary.text":
        "Trasformo dataset spaziali in layer pronti per l'analisi, feature per modelli, dashboard e workflow Python documentati. Il mio lavoro si colloca tra operazioni GIS, elaborazione raster/vettoriale ed esperimenti applicati di machine learning.",
      "intro.locationLabel": "Sede",
      "intro.location": "Karlsruhe, Baden-Württemberg, Germania",
      "intro.degreeLabel": "Formazione",
      "intro.degree": "MSc in Ingegneria geoinformatica, completato",
      "intro.positioningLabel": "Posizionamento",
      "intro.positioning": "Junior GIS / Geospatial Data",
      "context.eyebrow": "Segnali di fiducia",
      "context.title": "MSc completato, esperienza di ricerca al KIT e scambi accademici in Germania.",
      "logos.polimi": "Politecnico di Milano",
      "logos.polimiRole": "MSc in Ingegneria geoinformatica",
      "logos.bonn": "Università di Bonn",
      "logos.bonnRole": "Scambio Erasmus+, geodesia",
      "logos.kit": "Karlsruhe Institute of Technology",
      "logos.kitRole": "Scambio e ruoli da assistente di ricerca",
      "logos.tehran": "Università di Teheran",
      "logos.tehranRole": "BSc in Ingegneria del rilevamento",
      "roles.eyebrow": "Ruoli target",
      "roles.title": "Ruoli chiari e coerenti con il profilo.",
      "roles.r1": "Junior GIS Analyst",
      "roles.r2": "Geospatial Data Analyst",
      "roles.r3": "Ingegnere in geoinformatica",
      "roles.r4": "Remote Sensing Analyst",
      "roles.r5": "Spatial Data Analyst",
      "roles.r6": "GIS Developer (Python)",
      "roles.r7": "Junior Python GIS Developer",
      "available.title": "Disponibile per",
      "available.a1": "Posizioni junior GIS",
      "available.a2": "Ruoli graduate",
      "available.a3": "Ruoli da geospatial analyst",
      "available.a4": "Posizioni da assistente di ricerca",
      "available.a5": "Opportunità in Germania",
      "available.a6": "Opportunità ibride o remote",
      "about.eyebrow": "Profilo",
      "about.title": "Un profilo applicato in geoinformatica, non un portfolio generico da sviluppatore.",
      "about.p1":
        "Mi interessa soprattutto lavorare dove mappe, qualità dei dati, ragionamento spaziale e codice riproducibile si incontrano. Il mio percorso combina corsi di geoinformatica, studio in scambio in Germania, supporto alla ricerca applicata e progetti portfolio che mostrano come affronto passo dopo passo problemi di dati spaziali.",
      "about.q1": "Elaborazione di dati geospaziali con Python",
      "about.q2": "Telerilevamento e workflow di osservazione della Terra",
      "about.q3": "Dashboard interattive e applicazioni WebGIS",
      "about.q4": "Machine learning per problemi di dati spaziali",
      "about.human": "Mi piacciono i workflow spaziali perché rendono domande reali complesse più verificabili, spiegabili e migliorabili.",
      "bring.eyebrow": "Servizi e punti di forza",
      "bring.title": "Supporto geospaziale applicato con evidenze tecniche chiare.",
      "bring.card1Title": "GIS più Python",
      "bring.card1Text": "A mio agio tra concetti spaziali, strumenti GIS ed elaborazione basata su Python.",
      "bring.card2Title": "Esperienza di ricerca applicata",
      "bring.card2Text": "Esperienza nel supporto a workflow di ricerca al KIT con dati energia, mobilità, dashboard e mappe.",
      "bring.card3Title": "Mentalità Earth observation",
      "bring.card3Text": "Progetti con elaborazione di dati satellitari, analisi raster, indicatori ambientali e output WebGIS.",
      "bring.card4Title": "Intersezione geospatial ML",
      "bring.card4Text": "Tesi e progetti collegano feature spaziali, prompt testuali, classificazione, valutazione e workflow di modelli.",
      "bring.card5Title": "Percorso accademico internazionale",
      "bring.card5Text": "MSc in Italia con esperienze di scambio in Germania e basi in ingegneria del rilevamento.",
      "experience.eyebrow": "Esperienza",
      "experience.title": "Esperienza junior in ricerca applicata, analisi GIS e supporto web.",
      "experience.kitIipRole": "Analista GIS e dati, assistente di ricerca",
      "experience.recent": "Più rilevante",
      "experience.kitIipMeta": "IIP, Karlsruhe Institute of Technology (KIT)",
      "experience.kitIipB1": "Costruzione di pipeline Python per dataset energetici e di mobilità usati in workflow di ricerca applicata.",
      "experience.kitIipB2": "Analisi spaziali su dati di mobilità ed energia a supporto di modellazione della decarbonizzazione e ricerca di pianificazione.",
      "experience.kitIipB3": "Creazione di viste dashboard con integrazione di mappe per rendere i dati di ricerca più ispezionabili e comunicabili.",
      "experience.kitNovaRole": "Sviluppatore web, assistente di ricerca",
      "experience.kitNovaMeta": "KIT nova",
      "experience.kitNovaB1": "Supporto allo sviluppo di applicazioni web per workflow digitali di ricerca e innovazione con attenzione all'usabilità.",
      "experience.kitNovaB2": "Assistenza a progetti VR/AR preparando componenti interattivi e output visivi.",
      "experience.kitNovaB3": "Contributo a elementi di interfaccia legati alle mappe e visualizzazioni geospaziali per applicazioni digitali.",
      "experience.ngfRole": "Tirocinante",
      "experience.ngfMeta": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfB1": "Supporto a progetti di rilevamento, fotogrammetria e GIS in un contesto pratico.",
      "experience.ngfB2": "Assistenza nella raccolta dati e nella preparazione di dati spaziali per attività tecniche di progetto.",
      "experience.ngfB3": "Uso di AutoCAD e strumenti GIS per preparare ed elaborare dati geospaziali di progetto.",
      "experience.toolsLabel": "Strumenti:",
      "skills.eyebrow": "Competenze",
      "skills.title": "Profilo tecnico compatto per ruoli GIS e dati geospaziali.",
      "skills.programmingTitle": "Programmazione",
      "skills.gisTitle": "GIS e geospaziale",
      "skills.dataTitle": "Dati e ML",
      "skills.visualTitle": "Visualizzazione",
      "skills.webTitle": "Web e API",
      "projects.eyebrow": "Libreria progetti",
      "projects.title": "Progetti raggruppati per competenze geospaziali, software, AI e rilevamento.",
      "projects.intro": "Filtra i progetti per area di competenza. Diversi progetti appaiono intenzionalmente in più gruppi.",
      "projects.typeThesis": "Tesi MSc",
      "projects.typeRaster": "Simulazione raster",
      "projects.typeEo": "Osservazione della Terra",
      "projects.typeWebgis": "WebGIS",
      "projects.typeDashboard": "Dashboard",
      "projects.typeDeepLearning": "Deep Learning",
      "projects.typeRemoteStudy": "Telerilevamento",
      "projects.typeWebDevelopment": "Sviluppo web",
      "projects.typeSurveying": "Rilevamento",
      "projects.typeEngineeringDesign": "Design ingegneristico",
      "projects.typePointCloud": "Point cloud",
      "projects.featured": "In evidenza",
      "projects.github": "Vedi GitHub",
      "projects.details": "Vedi dettagli",
      "projects.empty": "Nessun progetto corrisponde ancora a questo filtro.",
      "projects.problemLabel": "Problema:",
      "projects.methodLabel": "Metodo:",
      "projects.techStack": "Tech Stack:",
      "projects.demonstratesLabel": "Dimostra:",
      "projects.nl2mapProblem": "Collegare richieste umane di modifica cartografica alle operazioni necessarie per generalizzare elementi di mappa.",
      "projects.nl2mapMethod": "Uso di text embedding, feature geometriche, training del modello e valutazione in una pipeline Python.",
      "projects.nl2mapDemo": "Geospatial ML, feature engineering, ragionamento cartografico",
      "projects.layerProblem": "Modificare layer raster in modo ripetibile rispettando maschere spaziali e sistemi di coordinate.",
      "projects.layerMethod": "Implementazione di operazioni raster basate su maschere con coerenza CRS, validazione e funzioni Python modulari.",
      "projects.layerDemo": "Elaborazione raster, geodata engineering, tooling Python",
      "projects.landsatProblem": "Rendere riutilizzabili passaggi comuni di elaborazione Landsat per analisi di osservazione della Terra.",
      "projects.landsatMethod": "Organizzazione in Python di gestione metadati, operazioni sulle bande, riproiezione e workflow orientati agli indici.",
      "projects.landsatDemo": "Osservazione della Terra, pacchetti Python riutilizzabili, workflow raster",
      "projects.landslideProblem": "Valutare la suscettibilità alle frane usando evidenze spaziali da layer di terreno, infrastrutture e ambiente.",
      "projects.landslideMethod": "Combinazione di layer GIS, input di telerilevamento, passaggi di machine learning e comunicazione WebGIS.",
      "projects.landslideDemo": "Modellazione spaziale, comunicazione WebGIS, analisi ambientale",
      "projects.se4gProblem": "Rendere più semplice l'ispezione di dataset geospaziali tramite un'interfaccia analitica nel browser.",
      "projects.se4gMethod": "Combinazione di mappe, grafici, integrazione API e interazioni dashboard in un'applicazione web Python.",
      "projects.se4gDemo": "Sviluppo dashboard, visualizzazione geospaziale, comunicazione dei dati",
      "projects.additionalSummary": "Altri progetti",
      "projects.dlDemo": "Workflow di computer vision, confronto modelli, basi di valutazione",
      "projects.eoDemo": "Osservazione della Terra, analisi NDWI, mappatura temporale",
      "projects.poliyogaDemo": "Basi di applicazioni web, collaborazione UX, funzioni con database",
      "projects.surveyingTitle": "Rilevamento ingegneristico",
      "projects.levellingTitle": "Progetto di livellazione",
      "projects.roadTitle": "Progettazione stradale con Civil 3D",
      "projects.laserTitle": "Scansione laser 3D",
      "projects.additional1": "Attività di rilevamento nel campus dell'Università di Teheran con raccolta dati tramite stazione totale e preparazione di planimetrie.",
      "projects.additional2": "Misurazione di differenze di quota con metodi classici di livellazione, controllo degli errori e documentazione tecnica.",
      "projects.additional3": "Progettazione di un collegamento stradale con AutoCAD Civil 3D, geometria del tracciato, profili longitudinali e volumi di scavo e riporto.",
      "projects.additional4": "Acquisizione ed elaborazione di dati point-cloud di un piano di edificio a supporto della preparazione di modelli digitali 3D.",
      "projects.surveyingDemo": "Fondamenti di rilevamento, dati di campo, preparazione planimetrie",
      "projects.levellingDemo": "Disciplina di misura, controllo qualità, documentazione",
      "projects.roadDemo": "Strumenti di progettazione ingegneristica, ragionamento sul terreno, calcolo volumi",
      "projects.laserDemo": "Workflow point-cloud, acquisizione dati 3D, tecnologia di rilevamento",
      "process.eyebrow": "Processo",
      "process.title": "Un workflow strutturato dalla domanda spaziale al prodotto utilizzabile.",
      "process.intro":
        "Affronto il lavoro geospaziale come un sistema di prodotto: definire la decisione, validare i dati, progettare il workflow e consegnare output ispezionabili e riutilizzabili.",
      "process.discoveryTitle": "Discovery",
      "process.discoveryText": "Chiarire domanda spaziale, utenti, vincoli, dataset disponibili e criteri di successo.",
      "process.strategyTitle": "Strategia",
      "process.strategyText": "Scegliere percorso di analisi, modello dati, strumenti, controlli di validazione e formato di comunicazione.",
      "process.designTitle": "Design",
      "process.designText": "Strutturare mappa, dashboard, workflow o output del modello intorno a gerarchia e interpretabilità.",
      "process.developmentTitle": "Sviluppo",
      "process.developmentText": "Costruire workflow Python, GIS, WebGIS o dashboard puliti, riutilizzabili e documentati.",
      "process.deliveryTitle": "Consegna",
      "process.deliveryText": "Consegnare risultati con documentazione chiara, output visivi e raccomandazioni successive.",
      "proof.eyebrow": "Social proof",
      "proof.title": "Credibilità costruita con evidenze accademiche, di ricerca e di progetto.",
      "proof.microcopy": "Le evidenze più forti sono pratiche: lavoro accademico completato, supporto applicato al KIT e artefatti di progetto ispezionabili.",
      "proof.projects": "Progetti geospaziali principali",
      "proof.msc": "Ingegneria geoinformatica",
      "proof.kit": "Lavoro applicato come assistente di ricerca",
      "proof.institutions": "Istituzioni accademiche tra Italia e Germania",
      "filters.all": "Tutti",
      "filters.gis": "GIS",
      "filters.python": "Python",
      "filters.remote": "Telerilevamento",
      "filters.ml": "Machine Learning",
      "filters.dashboard": "Dashboard",
      "filters.webgis": "WebGIS",
      "filters.webdev": "Sviluppo web",
      "filters.software": "Software design",
      "filters.javascript": "JavaScript",
      "filters.deep": "Deep Learning",
      "filters.ai": "AI",
      "filters.surveying": "Rilevamento",
      "education.eyebrow": "Formazione",
      "education.title": "Basi in geoinformatica, telerilevamento, GIS e rilevamento.",
      "education.mscTitle": "MSc in Ingegneria geoinformatica",
      "education.mscMeta": "Politecnico di Milano, Italia",
      "education.mscDate": "Set 2023 - Mar 2026 | completato | voto: 102 / 110, circa 1,5",
      "education.mscExchange": "Studente in scambio in geodesia presso l'Università di Bonn e in telerilevamento e geoinformazione presso il KIT.",
      "education.bscTitle": "BSc in Ingegneria del rilevamento",
      "education.bscMeta": "Università di Teheran, Iran",
      "education.bscDate": "Set 2018 - Lug 2022 | voto: 16,5 / 20, circa 1,9",
      "contact.eyebrow": "Contatti",
      "contact.title": "Disponibile per ruoli junior GIS e geospatial data in Germania.",
      "contact.p":
        "Se cercate profili junior per GIS, analisi geospaziale o workflow spaziali basati su Python, sono disponibile a connettermi o a ricevere un messaggio.",
      "contact.closing": "Interessato a workflow geospaziali, supporto alla ricerca e prodotti collaborativi di dati spaziali.",
      "contact.emailButton": "Scrivimi",
      "contact.cvButton": "Scarica CV",
      "contact.availability": "Disponibile per opportunità junior in GIS, Python, telerilevamento e analisi geospaziale.",
      "contact.langEn": "Inglese: fluente",
      "contact.langDe": "Tedesco: intermedio",
      "contact.langIt": "Italiano: intermedio",
      "contact.license": "Patente: categoria B",
      "footer.credits":
        "Visuali di progetto: composizioni locali da output di tesi disponibili e immagini geospaziali. Loghi: file pubblici dei loghi istituzionali e presentazione di tesi fornita.",
      "footer.tagline": "Workflow geospaziali, ricerca e pensiero sistemico applicato.",
    },
    html: {
      "about.p2":
        "La mia tesi MSc, <cite>Inferring Map Generalization Operations from User Prompts</cite>, è un buon esempio di questa intersezione: generalizzazione cartografica, prompt in linguaggio naturale, feature engineering e valutazione del modello in un workflow geospaziale.",
      "projects.nl2mapDesc":
        "Sviluppo di un workflow di machine learning che collega prompt utente a operazioni di generalizzazione cartografica per decisioni più strutturate nel design delle mappe.",
      "projects.layerDesc":
        "Sviluppo di uno strumento Python per modifiche raster controllate con maschere vettoriali, logica di elaborazione riutilizzabile e controlli di validazione geospaziale.",
      "projects.landsatDesc":
        "Sviluppo di un toolkit Python riutilizzabile per elaborare immagini satellitari Landsat, con estrazione dei metadati, operazioni sulle bande, riproiezione e workflow di analisi ambientale.",
      "projects.landslideDesc":
        "Sviluppo di un workflow GIS e machine learning per la mappatura della suscettibilità alle frane, combinando dati di terreno, infrastrutture e telerilevamento.",
      "projects.se4gDesc":
        "Sviluppo di una dashboard interattiva per esplorare dati geospaziali con mappe, grafici, integrazione API e analisi guidata dall'utente in una pratica applicazione dati.",
      "projects.dlDesc":
        "Confronto tra CNN e ResNet18 preaddestrato per classificazione immagini, con training, valutazione, metriche, normalizzazione e analisi degli errori.",
      "projects.eoadvancedDesc":
        "Analisi dei cambiamenti delle aree d'acqua usando dati satellitari, indicatori NDWI, mappe e visualizzazioni statistiche per il periodo 2021-2024.",
      "projects.poliyogaDesc":
        "Contributo a una piattaforma web responsive per un'accademia di yoga con funzionalità frontend, UX e database per profili, attività e contenuti dinamici.",
      "education.mscThesis": "<strong>Tesi:</strong> <cite>Inferring Map Generalization Operations from User Prompts</cite>",
      "education.mscCourses":
        "<strong>Corsi rilevanti:</strong> Geographic Information Systems, Machine Learning, Databases, Earth Observation, Geospatial Data Analysis, Geospatial Processing",
      "education.bscThesis": "<strong>Tesi:</strong> <cite>Application of GIS and Big Data in Smart Cities</cite>",
      "education.bscCourses":
        "<strong>Corsi rilevanti:</strong> Surveying, Photogrammetry, Remote Sensing, Geographic Information Systems, Spatial Analysis, Geodesy",
      "footer.copy": '&copy; <span id="year"></span> Amirhossein Donyadidegan. Creato per GitHub Pages.',
    },
    attrs: {
      "nav.aria": "Navigazione principale",
      "language.aria": "Selezione lingua",
      "hero.actionsAria": "Azioni principali",
      "hero.snapshotAria": "Sintesi per recruiter",
      "intro.aria": "Punti chiave del profilo",
      "logos.polimiAlt": "Logo del Politecnico di Milano",
      "logos.bonnAlt": "Logo dell'Università di Bonn",
      "logos.kitAlt": "Logo del Karlsruhe Institute of Technology",
      "logos.kitShortAlt": "Logo KIT",
      "logos.tehranAlt": "Simbolo dell'Università di Teheran",
      "roles.targetAria": "Ruoli target",
      "about.strengthsAria": "Competenze principali",
      "skills.aria": "Competenze tecniche",
      "projects.filtersAria": "Filtri progetto",
      "projectVisuals.generalization": "Output di mappa iniziale e generalizzata dal progetto di tesi sulla generalizzazione cartografica",
      "projectVisuals.raster": "Visuale di simulazione raster con overlay di maschera vettoriale per LayerAlterator",
      "projectVisuals.eo": "Visuale del workflow di elaborazione di immagini satellitari LandsatToolkit",
      "projectVisuals.webgis": "Visuale di mappatura della suscettibilità alle frane con terreno e classi di rischio",
      "projectVisuals.dashboard": "Visuale dashboard SE4G con pannelli mappa e grafici",
      "education.exchangeAria": "Istituzioni di scambio",
      "contact.langAria": "Lingue e altri dettagli",
    },
  },
};

const updateYear = () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
};

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getStoredTheme = () => {
  try {
    return window.localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Storage can be unavailable in strict browser modes.
  }
};

const updateThemeControl = (theme) => {
  if (!themeToggle) {
    return;
  }

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isDark ? "#07111f" : "#f4f8fb");
  }
};

const applyTheme = (theme, persist = true) => {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selectedTheme;
  updateThemeControl(selectedTheme);

  if (persist) {
    setStoredTheme(selectedTheme);
  }
};

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem("portfolio-language", language);
  } catch {
    // Storage can be unavailable in strict browser modes.
  }
};

const getStoredLanguage = () => {
  try {
    return window.localStorage.getItem("portfolio-language");
  } catch {
    return null;
  }
};

const projectCountText = {
  en: (visible, total) => `Showing ${visible} of ${total} projects`,
  de: (visible, total) => `${visible} von ${total} Projekten sichtbar`,
  it: (visible, total) => `${visible} di ${total} progetti visibili`,
};

const getActiveLanguage = () => document.documentElement.lang || "en";

const updateProjectCount = () => {
  const visibleCount = projectCards.filter((card) => !card.classList.contains("is-hidden")).length;
  const language = getActiveLanguage();
  const formatter = projectCountText[language] || projectCountText.en;

  if (projectCount) {
    projectCount.textContent = formatter(visibleCount, projectCards.length);
  }

  if (projectEmptyState) {
    projectEmptyState.hidden = visibleCount !== 0;
  }
};

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage] || {};

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.title || originalTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary.text?.[key] || originalText.get(key) || "";
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = dictionary.html?.[key] || originalHtml.get(key) || "";
  });

  attrElements.forEach((element) => {
    const defaults = attrDefaults.get(element) || {};
    parseAttrPairs(element.dataset.i18nAttr).forEach(({ attr, key }) => {
      element.setAttribute(attr, dictionary.attrs?.[key] || defaults[attr] || "");
    });
  });

  langButtons.forEach((button) => {
    const isSelected = button.dataset.lang === selectedLanguage;
    button.setAttribute("aria-pressed", String(isSelected));
  });

  updateYear();
  updateProjectCount();
  setStoredLanguage(selectedLanguage);
};

const applyProjectFilter = (filter) => {
  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === filter;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  projectCards.forEach((card) => {
    const categories = card.dataset.categories.split(/\s+/);
    const shouldShow = filter === "all" || categories.includes(filter);
    card.classList.toggle("is-hidden", !shouldShow);
  });

  updateProjectCount();
};

updateYear();
applyTheme(getStoredTheme() || getSystemTheme(), false);

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyProjectFilter(button.dataset.filter);
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

if (!getStoredTheme() && window.matchMedia) {
  const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  systemThemeQuery.addEventListener?.("change", (event) => {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });
}

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

const revealTargets = Array.from(
  document.querySelectorAll(
    ".summary-inner, .intro-inner, .section-heading, .logo-card, .available-panel, .bring-card, .timeline-item, .skill-card, .project-card, .process-step, .proof-grid article, .education-card, .contact-panel"
  )
);

const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reducedMotion) {
  revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

  const revealObserver = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observerInstance.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (proofValue && !reducedMotion && "IntersectionObserver" in window) {
  const targetValue = Number(proofValue.dataset.countTo || 0);
  const proofObserver = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !targetValue) {
          return;
        }

        let currentValue = 0;
        const step = () => {
          currentValue += 1;
          proofValue.textContent = `${Math.min(currentValue, targetValue)}+`;

          if (currentValue < targetValue) {
            window.requestAnimationFrame(step);
          }
        };

        step();
        observerInstance.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  proofObserver.observe(proofValue);
}

const preferredLanguage = getStoredLanguage() || document.documentElement.lang || "en";
applyLanguage(preferredLanguage);
applyProjectFilter("all");
