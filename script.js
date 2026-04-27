const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(document.querySelectorAll(".project-card[data-categories]"));

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
      "nav.roles": "Rollen",
      "nav.experience": "Erfahrung",
      "nav.skills": "Fähigkeiten",
      "nav.projects": "Projekte",
      "nav.education": "Ausbildung",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Junior GIS / Geospatial Kandidat",
      "hero.title": "Junior Geoinformatik-Ingenieur | GIS | Python | Fernerkundung | Spatial Data",
      "hero.subtitle":
        "MSc-Absolvent im Bereich Geoinformatik-Ingenieurwesen in Karlsruhe, mit Fokus auf Junior-Rollen in GIS und geospatialer Datenarbeit in Deutschland.",
      "hero.viewProjects": "Flagship-Projekte ansehen",
      "hero.downloadCv": "CV herunterladen",
      "hero.contact": "Kontakt",
      "hero.snapshotTitle": "Recruiter Snapshot",
      "hero.snapshotLevelLabel": "Level",
      "hero.snapshotLevel": "Berufseinsteiger / Junior",
      "hero.snapshotCoreLabel": "Kernprofil",
      "hero.snapshotCore": "GIS, Python, Fernerkundung",
      "hero.snapshotEvidenceLabel": "Nachweis",
      "hero.snapshotEvidence": "MSc-Arbeit, KIT-Forschung, Geodatenprojekte",
      "summary.eyebrow": "Recruiter Summary",
      "summary.title": "Klarer Junior-Fit für GIS, Python und geospatiale Datenrollen.",
      "summary.text":
        "MSc-Absolvent in Geoinformatik-Ingenieurwesen mit praktischer Erfahrung in GIS, Fernerkundung, Python-Entwicklung, Geodatenanalyse und Machine-Learning-Workflows. Erfahrung umfasst räumliche Datenverarbeitung, Earth-Observation-Analysen, interaktive Dashboards und forschungsnahe geospatiale Projekte.",
      "intro.locationLabel": "Standort",
      "intro.location": "Karlsruhe, Baden-Württemberg, Deutschland",
      "intro.degreeLabel": "Ausbildung",
      "intro.degree": "MSc Geoinformatik-Ingenieurwesen, abgeschlossen",
      "intro.positioningLabel": "Positionierung",
      "intro.positioning": "Junior GIS / Geospatial Data",
      "context.eyebrow": "Akademischer & Forschungskontext",
      "context.title": "Geoinformatik-Hintergrund mit angewandter Forschungserfahrung.",
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
      "about.title": "GIS- und Spatial-Data-Arbeit mit akademischen und angewandten Projektnachweisen.",
      "about.p1":
        "Ich habe einen MSc in Geoinformatik-Ingenieurwesen am Politecnico di Milano abgeschlossen, mit Austauschphasen an der Universität Bonn und am Karlsruher Institut für Technologie. Mein stärkstes Profil liegt in Junior-Rollen für GIS und geospatiale Datenarbeit, die Python, räumliche Analyse, Fernerkundung und Dashboard-Entwicklung verbinden.",
      "about.q1": "Python-basierte Verarbeitung geospatialer Daten",
      "about.q2": "Fernerkundung und Earth-Observation-Workflows",
      "about.q3": "Interaktive Dashboards und WebGIS-Anwendungen",
      "about.q4": "Machine Learning für räumliche Datenprobleme",
      "experience.eyebrow": "Erfahrung",
      "experience.title": "Junior-Level-Erfahrung in angewandter Forschung, GIS-Analyse und Web-Support.",
      "experience.kitIipRole": "GIS- & Datenanalyst, Hilfswissenschaftler",
      "experience.kitIipMeta": "IIP, Karlsruher Institut für Technologie (KIT)",
      "experience.kitIipB1": "Entwicklung Python-basierter Datenpipelines für Energie- und Mobilitätsdaten.",
      "experience.kitIipB2": "Durchführung räumlicher Analysen zur Unterstützung von Energiebedarfs- und Dekarbonisierungsmodellen.",
      "experience.kitIipB3": "Entwicklung interaktiver Dashboards mit Kartenintegration für angewandte Forschungsworkflows.",
      "experience.kitNovaRole": "Webentwickler, Hilfswissenschaftler",
      "experience.kitNovaMeta": "KIT nova",
      "experience.kitNovaB1": "Mitarbeit an Webanwendungen mit Fokus auf Funktionalität und Benutzerfreundlichkeit.",
      "experience.kitNovaB2": "Unterstützung von VR/AR-Projekten für digitale und interaktive Anwendungen.",
      "experience.kitNovaB3": "Beitrag zu geospatialen Visualisierungen und digitalen Kartenlösungen.",
      "experience.ngfRole": "Praktikant",
      "experience.ngfMeta": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfB1": "Unterstützung von Vermessungs-, Photogrammetrie- und GIS-Projekten in einem praktischen Arbeitsumfeld.",
      "experience.ngfB2": "Mitarbeit bei Datenerfassung, räumlicher Analyse und technischer Umsetzung.",
      "experience.ngfB3": "Anwendung von AutoCAD und GIS-Tools zur Erstellung und Verarbeitung von Geodaten.",
      "experience.toolsLabel": "Tools:",
      "skills.eyebrow": "Fähigkeiten",
      "skills.title": "Kompaktes technisches Profil für GIS- und Geodatenrollen.",
      "skills.programmingTitle": "Programmierung",
      "skills.gisTitle": "GIS & Geospatial",
      "skills.dataTitle": "Data & ML",
      "skills.visualTitle": "Visualisierung",
      "skills.webTitle": "Web & APIs",
      "projects.eyebrow": "Flagship-Projekte",
      "projects.title": "Projektbelege für Junior-Rollen in GIS, Fernerkundung und Python.",
      "projects.intro": "Fünf ausgewählte Projekte stehen zuerst, damit das Portfolio fokussiert und schnell erfassbar bleibt.",
      "projects.typeThesis": "MSc-Arbeit",
      "projects.typeRaster": "Raster-Simulation",
      "projects.typeEo": "Earth Observation",
      "projects.typeWebgis": "WebGIS",
      "projects.typeDashboard": "Dashboard",
      "projects.techStack": "Tech Stack:",
      "projects.additionalSummary": "Weitere Projekte",
      "projects.surveyingTitle": "Vermessungs- und Ingenieurprojekte aus dem Studium",
      "projects.additional1": "Ingenieurvermessung auf dem Campus der Universität Teheran mit Totalstation-Datenerfassung und Lageplanerstellung.",
      "projects.additional2": "Nivellement-Projekt zur Messung von Höhenunterschieden, klassischen Nivellement-Methoden, Fehlerkontrolle und Dokumentation.",
      "projects.additional3": "Straßenplanung zwischen zwei Städten mit AutoCAD Civil 3D, Trassengeometrie, Längsprofilen und Cut-and-Fill-Volumen.",
      "projects.additional4": "3D-Laserscanning eines Gebäudegeschosses mit Punktwolkenerfassung, Verarbeitung und Unterstützung digitaler 3D-Modelle.",
      "filters.all": "Alle",
      "filters.gis": "GIS",
      "filters.python": "Python",
      "filters.remote": "Fernerkundung",
      "filters.ml": "Machine Learning",
      "filters.dashboard": "Dashboard",
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
        "Offen für Junior-Rollen in Deutschland mit Bezug zu GIS, geospatialer Datenanalyse, Fernerkundung und Python-basierten Spatial-Data-Anwendungen.",
      "contact.emailButton": "E-Mail senden",
      "contact.cvButton": "CV herunterladen",
      "contact.langEn": "Englisch: fließend",
      "contact.langDe": "Deutsch: Mittelstufe",
      "contact.langIt": "Italienisch: Mittelstufe",
      "contact.license": "Führerschein: Klasse B",
      "footer.credits":
        "Thematische Bilder: NASA, NASA Earth Observatory, NASA/USGS Landsat und die bereitgestellte Thesis-Präsentation. Logos: öffentliche institutionelle Logodateien und die bereitgestellte Thesis-Präsentation.",
    },
    html: {
      "about.p2":
        "Meine MSc-Arbeit, <cite>Inferring Map Generalization Operations from User Prompts</cite>, verbindet kartografische Generalisierung, natürliche Sprache, Feature Engineering und Machine Learning in einem geospatialen Kontext.",
      "projects.nl2mapDesc":
        `Entwicklung eines Machine-Learning-Workflows, der natürlichsprachliche Prompts mit kartografischen Generalisierungsoperationen verbindet, inklusive Datenaufbereitung, Feature Engineering, Modelltraining und Evaluation. <a href="https://github.com/AmirDonyadide/nl2map-generalization" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.layerDesc":
        `Entwicklung eines Python-Tools zur regelbasierten Rastermodifikation mit Vektormasken für kontrollierte räumliche Simulationen, CRS-Konsistenz, Validierung und wiederverwendbare Verarbeitungslogik. <a href="https://github.com/AmirDonyadide/LayerAlterator" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.landsatDesc":
        `Entwicklung eines wiederverwendbaren Python-Toolkits zur Verarbeitung von Landsat-Satellitendaten, einschließlich Metadatenextraktion, Bandoperationen, Reprojektion und Umweltanalyse-Workflows. <a href="https://github.com/AmirDonyadide/LandsatToolkit" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.landslideDesc":
        `Entwicklung eines GIS- und Machine-Learning-Workflows zur Kartierung von Hangrutschungsanfälligkeit, kombiniert mit Fernerkundungs-, Terrain- und Infrastrukturdaten in einer interaktiven WebGIS-Darstellung. <a href="https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.se4gDesc":
        `Entwicklung eines interaktiven Dashboards zur Exploration geospatialer Daten mit Karten, Diagrammen, API-Integration und nutzergesteuerter Analyse in einer praktischen Datenanwendung. <a href="https://github.com/AmirDonyadide/SE4G" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.dlDesc":
        `Vergleich eines CNN und eines vortrainierten ResNet18-Modells für Bildklassifikation mit Training, Evaluation, Metriken, Normalisierung und Fehleranalyse. <a href="https://github.com/AmirDonyadide/DL4CVRS" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.eoadvancedDesc":
        `Analyse von Veränderungen der Wasserflächen mithilfe von Satellitendaten, NDWI-basierten Indikatoren, Karten und statistischen Visualisierungen für 2021 bis 2024. <a href="https://github.com/AmirDonyadide/EOAdvanced" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
      "projects.poliyogaDesc":
        `Mitarbeit an einer responsiven Webplattform für eine Yoga-Akademie mit Frontend-, UX- und datenbanknahen Funktionen für Profile, Aktivitäten und dynamische Inhalte. <a href="https://github.com/moeinp70/HYP_Yoga" target="_blank" rel="noreferrer">GitHub-Repository</a>.`,
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
      "projectVisuals.generalization": "Satellitenbild als thematische Visualisierung für Kartengeneralisierung",
      "projectVisuals.raster": "Satellitenbild als thematische Visualisierung für Rasterverarbeitung",
      "projectVisuals.eo": "Satellitenbild als thematische Visualisierung für Earth-Observation-Tools",
      "projectVisuals.webgis": "Erde-bei-Nacht-Bild als thematische Visualisierung für WebGIS",
      "projectVisuals.dashboard": "Erde-bei-Nacht-Bild als thematische Visualisierung für Dashboard-Entwicklung",
      "education.exchangeAria": "Austauschuniversitäten",
      "contact.langAria": "Sprachen und weitere Details",
    },
  },
  it: {
    title: "Amirhossein Donyadidegan | Ingegnere junior in geoinformatica",
    text: {
      skip: "Vai al contenuto",
      "nav.toggle": "Apri o chiudi navigazione",
      "nav.roles": "Ruoli",
      "nav.experience": "Esperienza",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.education": "Formazione",
      "nav.contact": "Contatti",
      "hero.eyebrow": "Candidato junior GIS / geospaziale",
      "hero.title": "Ingegnere junior in geoinformatica | GIS | Python | Telerilevamento | Spatial Data",
      "hero.subtitle":
        "Laureato MSc in Ingegneria geoinformatica a Karlsruhe, orientato a ruoli junior GIS e geospatial data in Germania.",
      "hero.viewProjects": "Vedi progetti principali",
      "hero.downloadCv": "Scarica CV",
      "hero.contact": "Contatti",
      "hero.snapshotTitle": "Sintesi per recruiter",
      "hero.snapshotLevelLabel": "Livello",
      "hero.snapshotLevel": "Entry-level / Junior",
      "hero.snapshotCoreLabel": "Profilo chiave",
      "hero.snapshotCore": "GIS, Python, Telerilevamento",
      "hero.snapshotEvidenceLabel": "Evidenze",
      "hero.snapshotEvidence": "Tesi MSc, ricerca al KIT, progetti geospaziali",
      "summary.eyebrow": "Sintesi per recruiter",
      "summary.title": "Profilo junior chiaro per ruoli GIS, Python e dati geospaziali.",
      "summary.text":
        "Laureato MSc in Ingegneria geoinformatica con esperienza pratica in GIS, telerilevamento, sviluppo Python, analisi geospaziale e workflow di machine learning. L'esperienza include elaborazione di dati spaziali, analisi di osservazione della Terra, dashboard interattive e progetti geospaziali orientati alla ricerca.",
      "intro.locationLabel": "Sede",
      "intro.location": "Karlsruhe, Baden-Württemberg, Germania",
      "intro.degreeLabel": "Formazione",
      "intro.degree": "MSc in Ingegneria geoinformatica, completato",
      "intro.positioningLabel": "Posizionamento",
      "intro.positioning": "Junior GIS / Geospatial Data",
      "context.eyebrow": "Contesto accademico e ricerca",
      "context.title": "Background in geoinformatica con esperienza di ricerca applicata.",
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
      "about.title": "Lavoro GIS e spatial data supportato da evidenze accademiche e progettuali.",
      "about.p1":
        "Ho completato un MSc in Ingegneria geoinformatica al Politecnico di Milano, con periodi di scambio presso l'Università di Bonn e il Karlsruhe Institute of Technology. Il mio profilo più forte riguarda ruoli junior in GIS e dati geospaziali che combinano Python, analisi spaziale, telerilevamento e sviluppo di dashboard.",
      "about.q1": "Elaborazione di dati geospaziali con Python",
      "about.q2": "Telerilevamento e workflow di osservazione della Terra",
      "about.q3": "Dashboard interattive e applicazioni WebGIS",
      "about.q4": "Machine learning per problemi di dati spaziali",
      "experience.eyebrow": "Esperienza",
      "experience.title": "Esperienza junior in ricerca applicata, analisi GIS e supporto web.",
      "experience.kitIipRole": "Analista GIS e dati, assistente di ricerca",
      "experience.kitIipMeta": "IIP, Karlsruhe Institute of Technology (KIT)",
      "experience.kitIipB1": "Sviluppo di pipeline dati in Python per dati energetici e di mobilità.",
      "experience.kitIipB2": "Analisi spaziali a supporto di modelli di domanda energetica e decarbonizzazione.",
      "experience.kitIipB3": "Sviluppo di dashboard interattive con integrazione di mappe per workflow di ricerca applicata.",
      "experience.kitNovaRole": "Sviluppatore web, assistente di ricerca",
      "experience.kitNovaMeta": "KIT nova",
      "experience.kitNovaB1": "Contributo ad applicazioni web con attenzione a funzionalità e usabilità.",
      "experience.kitNovaB2": "Supporto a progetti VR/AR per applicazioni digitali e interattive.",
      "experience.kitNovaB3": "Contributo a visualizzazioni geospaziali e soluzioni cartografiche digitali.",
      "experience.ngfRole": "Tirocinante",
      "experience.ngfMeta": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfB1": "Supporto a progetti di rilevamento, fotogrammetria e GIS in un contesto pratico.",
      "experience.ngfB2": "Assistenza nella raccolta dati, nell'analisi spaziale e nell'implementazione tecnica.",
      "experience.ngfB3": "Uso di AutoCAD e strumenti GIS per creare ed elaborare dati geospaziali.",
      "experience.toolsLabel": "Strumenti:",
      "skills.eyebrow": "Competenze",
      "skills.title": "Profilo tecnico compatto per ruoli GIS e dati geospaziali.",
      "skills.programmingTitle": "Programmazione",
      "skills.gisTitle": "GIS e geospaziale",
      "skills.dataTitle": "Dati e ML",
      "skills.visualTitle": "Visualizzazione",
      "skills.webTitle": "Web e API",
      "projects.eyebrow": "Progetti principali",
      "projects.title": "Evidenza progettuale per ruoli junior GIS, telerilevamento e Python.",
      "projects.intro": "I cinque progetti selezionati mantengono il portfolio focalizzato e facile da leggere.",
      "projects.typeThesis": "Tesi MSc",
      "projects.typeRaster": "Simulazione raster",
      "projects.typeEo": "Osservazione della Terra",
      "projects.typeWebgis": "WebGIS",
      "projects.typeDashboard": "Dashboard",
      "projects.techStack": "Tech Stack:",
      "projects.additionalSummary": "Altri progetti",
      "projects.surveyingTitle": "Progetti universitari di rilevamento e ingegneria",
      "projects.additional1": "Rilevamento ingegneristico nel campus dell'Università di Teheran con raccolta dati tramite stazione totale e preparazione di planimetrie.",
      "projects.additional2": "Progetto di livellazione per misurare differenze di quota, applicare metodi classici, controllo degli errori e documentazione.",
      "projects.additional3": "Progettazione stradale tra due città con AutoCAD Civil 3D, geometria del tracciato, profili longitudinali e volumi di scavo e riporto.",
      "projects.additional4": "Scansione laser 3D di un piano di edificio con acquisizione di nuvole di punti, elaborazione e supporto a modelli digitali 3D.",
      "filters.all": "Tutti",
      "filters.gis": "GIS",
      "filters.python": "Python",
      "filters.remote": "Telerilevamento",
      "filters.ml": "Machine Learning",
      "filters.dashboard": "Dashboard",
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
        "Disponibile per ruoli junior in Germania legati a GIS, analisi di dati geospaziali, telerilevamento e applicazioni spaziali basate su Python.",
      "contact.emailButton": "Scrivimi",
      "contact.cvButton": "Scarica CV",
      "contact.langEn": "Inglese: fluente",
      "contact.langDe": "Tedesco: intermedio",
      "contact.langIt": "Italiano: intermedio",
      "contact.license": "Patente: categoria B",
      "footer.credits":
        "Immagini tematiche: NASA, NASA Earth Observatory, NASA/USGS Landsat e presentazione di tesi fornita. Loghi: file pubblici dei loghi istituzionali e presentazione di tesi fornita.",
    },
    html: {
      "about.p2":
        "La mia tesi MSc, <cite>Inferring Map Generalization Operations from User Prompts</cite>, collega generalizzazione cartografica, linguaggio naturale, feature engineering e machine learning in un contesto geospaziale.",
      "projects.nl2mapDesc":
        `Sviluppo di un workflow di machine learning che collega prompt in linguaggio naturale a operazioni di generalizzazione cartografica, con preparazione dati, feature engineering, training del modello e valutazione. <a href="https://github.com/AmirDonyadide/nl2map-generalization" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.layerDesc":
        `Sviluppo di uno strumento Python per modifiche raster basate su regole con maschere vettoriali, utile per simulazioni spaziali controllate, coerenza CRS, validazione e logica di elaborazione riutilizzabile. <a href="https://github.com/AmirDonyadide/LayerAlterator" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.landsatDesc":
        `Sviluppo di un toolkit Python riutilizzabile per elaborare immagini satellitari Landsat, con estrazione dei metadati, operazioni sulle bande, riproiezione e workflow di analisi ambientale. <a href="https://github.com/AmirDonyadide/LandsatToolkit" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.landslideDesc":
        `Sviluppo di un workflow GIS e machine learning per la mappatura della suscettibilità alle frane, combinando dati di telerilevamento, terreno e infrastrutture in una presentazione WebGIS interattiva. <a href="https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.se4gDesc":
        `Sviluppo di una dashboard interattiva per esplorare dati geospaziali con mappe, grafici, integrazione API e analisi guidata dall'utente in una pratica applicazione dati. <a href="https://github.com/AmirDonyadide/SE4G" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.dlDesc":
        `Confronto tra CNN e ResNet18 preaddestrato per classificazione immagini, con training, valutazione, metriche, normalizzazione e analisi degli errori. <a href="https://github.com/AmirDonyadide/DL4CVRS" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.eoadvancedDesc":
        `Analisi dei cambiamenti delle aree d'acqua usando dati satellitari, indicatori NDWI, mappe e visualizzazioni statistiche per il periodo 2021-2024. <a href="https://github.com/AmirDonyadide/EOAdvanced" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
      "projects.poliyogaDesc":
        `Contributo a una piattaforma web responsive per un'accademia di yoga con funzionalità frontend, UX e database per profili, attività e contenuti dinamici. <a href="https://github.com/moeinp70/HYP_Yoga" target="_blank" rel="noreferrer">Repository GitHub</a>.`,
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
      "projectVisuals.generalization": "Immagine satellitare come visuale tematica per la generalizzazione cartografica",
      "projectVisuals.raster": "Immagine satellitare come visuale tematica per l'elaborazione raster",
      "projectVisuals.eo": "Immagine satellitare come visuale tematica per strumenti di osservazione della Terra",
      "projectVisuals.webgis": "Immagine della Terra di notte come visuale tematica per WebGIS",
      "projectVisuals.dashboard": "Immagine della Terra di notte come visuale tematica per lo sviluppo di dashboard",
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
};

updateYear();

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

const preferredLanguage = getStoredLanguage() || document.documentElement.lang || "en";
applyLanguage(preferredLanguage);
applyProjectFilter("all");
