const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));

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
    title: "Amirhossein Donyadidegan | Geoinformatik-Portfolio",
    text: {
      skip: "Zum Inhalt springen",
      "nav.toggle": "Navigation umschalten",
      "nav.about": "Über mich",
      "nav.experience": "Erfahrung",
      "nav.education": "Ausbildung",
      "nav.skills": "Fähigkeiten",
      "nav.projects": "Projekte",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Junior Geoinformatik-Ingenieur",
      "hero.title": "GIS, Fernerkundung, Python und Machine Learning für geospatiale Fragestellungen.",
      "hero.summary":
        "Ich bin Amirhossein Donyadidegan, ein Berufseinsteiger mit abgeschlossenem Geoinformatik-Studium in Karlsruhe und praktischer Erfahrung in Geodatenanalyse, Datenpipelines, interaktiven Dashboards und angewandten Forschungsprojekten.",
      "hero.viewProjects": "Projekte ansehen",
      "hero.contact": "Kontakt aufnehmen",
      "hero.cvTodo": "CV-PDF TODO",
      "intro.locationLabel": "Standort",
      "intro.location": "Karlsruhe, Baden-Württemberg, Deutschland",
      "intro.levelLabel": "Level",
      "intro.level": "Berufseinsteiger / Junior",
      "intro.focusLabel": "Schwerpunkt",
      "intro.focus": "Geoinformatik, GIS, Datenanalyse",
      "affiliations.eyebrow": "Stationen",
      "affiliations.title": "Orte, an denen ich studiert und gearbeitet habe.",
      "logos.polimi": "Politecnico di Milano",
      "logos.polimiRole": "MSc Geoinformatik-Ingenieurwesen",
      "logos.bonn": "Universität Bonn",
      "logos.bonnRole": "Erasmus+ Austausch, Geodäsie",
      "logos.kit": "Karlsruher Institut für Technologie",
      "logos.kitRole": "Austausch und Hilfswissenschaftler-Rollen",
      "logos.tehran": "Universität Teheran",
      "logos.tehranRole": "BSc Vermessungsingenieurwesen",
      "logos.ngf": "Naghsheh Gostaran Fartak Co.",
      "logos.ngfRole": "Praktikum; offizielles Logo ausstehend",
      "photo.venice": "Fernerkundung und Umweltanalyse",
      "photo.polimiCampus": "Akademischer Kontext am Politecnico di Milano",
      "photo.polimiInterior": "Visuelle Sprache der Thesis-Präsentation",
      "photo.glacier": "Earth-Observation-Workflows",
      "photo.florida": "GIS, Rasterdaten und räumliche Modellierung",
      "about.eyebrow": "Über mich",
      "about.title": "Geodatenanalyse mit datengetriebener Engineering-Perspektive.",
      "about.p1":
        "Ich habe einen MSc in Geoinformatik-Ingenieurwesen am Politecnico di Milano abgeschlossen, mit Austauschphasen an der Universität Bonn und am Karlsruher Institut für Technologie (KIT). Meine Arbeit verbindet Geodatenwissenschaft mit praktischen Datenworkflows, darunter GIS-Analysen, Earth Observation, Python-Entwicklung, Dashboards und Machine-Learning-Anwendungen.",
      "about.q1": "Python-basierte Verarbeitung geospatialer Daten",
      "about.q2": "Fernerkundung und Earth-Observation-Workflows",
      "about.q3": "Interaktive Dashboards und WebGIS-Anwendungen",
      "about.q4": "Machine-Learning-Pipelines für räumliche Daten",
      "experience.eyebrow": "Erfahrung",
      "experience.title": "Angewandte Forschung, Webentwicklung, GIS und Vermessungsunterstützung.",
      "experience.kitIipRole": "GIS- & Datenanalyst, Hilfswissenschaftler",
      "experience.kitIipMeta": "IIP, Karlsruher Institut für Technologie (KIT)",
      "experience.kitIipB1": "Entwicklung Python-basierter Datenpipelines zur Verarbeitung und Analyse von Energie- und Mobilitätsdaten.",
      "experience.kitIipB2": "Durchführung räumlicher Analysen zur Unterstützung von Energiebedarfs- und Dekarbonisierungsmodellen.",
      "experience.kitIipB3": "Entwicklung interaktiver Dashboards mit Kartenintegration für datengetriebene Anwendungen.",
      "experience.kitIipB4": "Kombination von Geodatenanalyse, Datenverarbeitung und Visualisierung in angewandten Forschungsprojekten.",
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
      "education.eyebrow": "Ausbildung",
      "education.title": "Geoinformatik, Geodäsie, Fernerkundung und Vermessungsgrundlagen.",
      "education.mscTitle": "MSc Geoinformatik-Ingenieurwesen",
      "education.mscMeta": "Politecnico di Milano, Italien",
      "education.mscDate": "Sep. 2023 - Mär. 2026 | abgeschlossen | Note: 102 / 110, ca. 1,5",
      "education.mscExchange":
        "Austauschstudent in Geodäsie an der Universität Bonn von Okt. 2025 bis Mär. 2026. Austauschstudent in Fernerkundung und Geoinformation am KIT von Apr. 2025 bis Sep. 2025.",
      "education.bscTitle": "BSc Vermessungsingenieurwesen",
      "education.bscMeta": "Universität Teheran, Iran",
      "education.bscDate": "Sep. 2018 - Jul. 2022 | Note: 16,5 / 20, ca. 1,9",
      "skills.eyebrow": "Fähigkeiten",
      "skills.title": "Technische Stärken in Geodaten, Software und Visualisierung.",
      "skills.programmingTitle": "Programmierung",
      "skills.programmingText": "Python, C++, JavaScript, SQL, MATLAB, objektorientierte Programmierung, modulare Entwicklung.",
      "skills.gisTitle": "GIS & Fernerkundung",
      "skills.gisText": "QGIS, ArcGIS, Google Earth Engine, Raster- und Vektorverarbeitung, CRS-Transformationen, GeoJSON, Shapefiles.",
      "skills.mlTitle": "Machine Learning",
      "skills.mlText": "Scikit-learn, TensorFlow, PyTorch, Klassifikation, Regression, Clustering, CNNs, Transfer Learning, Embeddings.",
      "skills.dataTitle": "Data Engineering",
      "skills.dataText": "Pandas, NumPy, GeoPandas, xarray, ETL-Workflows, Datenbereinigung, Pipeline-Design, Jupyter Notebooks.",
      "skills.webTitle": "Dashboards & Web",
      "skills.webText": "Plotly, Dash, Matplotlib, HTML, CSS, JavaScript, Nuxt.js, Flask, REST APIs, WebGIS-Anwendungen.",
      "skills.dbTitle": "Datenbanken",
      "skills.dbText": "PostgreSQL, PostGIS, SQLite, Oracle, räumliche Datenbanken und SQL-basierte Datenworkflows.",
      "skills.softwareTitle": "Software Engineering",
      "skills.softwareText": "Git, GitHub, GitLab, Linux/Bash, Docker, GitHub Actions, CI/CD-Grundlagen, pytest, Debugging, Dokumentation.",
      "skills.cloudTitle": "Cloud, Automatisierung & Design",
      "skills.cloudText": "Google Cloud, Google Sheets API, Google Drive API, Skripting, Automatisierung, AutoCAD, Civil3D, Figma.",
      "projects.eyebrow": "Projekte",
      "projects.title": "Ausgewählte Arbeiten in Geodaten, Machine Learning, Dashboards und Vermessung.",
      "projects.typeThesis": "MSc-Arbeit",
      "projects.typeRaster": "Raster-Simulation",
      "projects.typeDl": "Deep Learning",
      "projects.typeWebgis": "WebGIS",
      "projects.typeEo": "Earth Observation",
      "projects.typeDashboard": "Dashboard",
      "projects.typeWebapp": "Webanwendung",
      "projects.typeRs": "Fernerkundung",
      "projects.additionalTitle": "Weitere Vermessungs- und Ingenieurprojekte",
      "projects.additional1": "Ingenieurvermessung auf dem Campus der Universität Teheran mit Totalstation-Datenerfassung und Lageplanerstellung.",
      "projects.additional2": "Nivellement-Projekt zur Messung von Höhenunterschieden, klassischen Nivellement-Methoden, Fehlerkontrolle und Dokumentation.",
      "projects.additional3": "Straßenplanung zwischen zwei Städten mit AutoCAD Civil 3D, Trassengeometrie, Längsprofilen und Cut-and-Fill-Volumen.",
      "projects.additional4": "3D-Laserscanning eines Gebäudegeschosses mit Punktwolkenerfassung, Verarbeitung und Unterstützung digitaler 3D-Modelle.",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Offen für realistische Junior-Rollen mit Bezug zu Geoinformatik und Datenarbeit.",
      "contact.p":
        "Ich interessiere mich für Einstiegspositionen in Geoinformatik, GIS, Fernerkundung, geospatialer Datenanalyse, Data Science, Machine Learning und Python-basierter Entwicklung.",
      "contact.langEn": "Englisch: fließend",
      "contact.langDe": "Deutsch: Mittelstufe",
      "contact.langIt": "Italienisch: Mittelstufe",
      "contact.license": "Führerschein: Klasse B",
      "footer.credits":
        "Thematische Bilder: NASA, NASA Earth Observatory und NASA/USGS Landsat. Logos: öffentliche institutionelle Logodateien und die bereitgestellte Thesis-Präsentation.",
    },
    html: {
      "about.p2":
        "Meine Masterarbeit, <cite>Inferring Map Generalization Operations from User Prompts</cite>, untersuchte, wie kartografische Generalisierungsoperationen mit KI und natürlicher Sprache verknüpft werden können, um Entscheidungsprozesse im Kartendesign zu unterstützen.",
      "education.mscThesis": "<strong>Masterarbeit:</strong> <cite>Inferring Map Generalization Operations from User Prompts</cite>",
      "education.mscCourses":
        "<strong>Relevante Kurse:</strong> Geographic Information Systems, Machine Learning, Databases, Earth Observation, Geospatial Data Analysis, Geospatial Processing",
      "education.bscThesis": "<strong>Bachelorarbeit:</strong> <cite>Application of GIS and Big Data in Smart Cities</cite>",
      "education.bscCourses":
        "<strong>Relevante Kurse:</strong> Surveying, Photogrammetry, Remote Sensing, Geographic Information Systems, Spatial Analysis, Geodesy",
      "projects.nl2mapDesc":
        'Machine-Learning-Workflow zur Verknüpfung natürlicher Sprache mit kartografischen Generalisierungsoperationen, inklusive Datenaufbereitung, Modelltraining und Evaluation. <a href="https://github.com/AmirDonyadide/nl2map-generalization" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.layerDesc":
        'Python-Tool zur regelbasierten Rastermodifikation mit Vektormasken, prozentbasierten Transformationen, CRS-Konsistenz, Validierung und modularer Erweiterbarkeit. <a href="https://github.com/AmirDonyadide/LayerAlterator" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.dlDesc":
        'CNN- und vortrainierte ResNet18-Bildklassifikationsmodelle mit vollständiger Trainings- und Evaluationspipeline, Metriken, Normalisierung und Fehleranalyse. <a href="https://github.com/AmirDonyadide/DL4CVRS" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.landslideDesc":
        'Geospatialer Machine-Learning- und GIS-Workflow zur Analyse von Hangrutschungsanfälligkeit mit Fernerkundungs-, Terrain- und Infrastrukturdaten in einer WebGIS-Anwendung. <a href="https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.landsatDesc":
        'Python-Bibliothek zur Verarbeitung und Analyse von Landsat-7/8/9-Satellitendaten, einschließlich Metadatenextraktion, Bandverarbeitung, Reprojektion und Indexberechnung. <a href="https://github.com/AmirDonyadide/LandsatToolkit" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.se4gDesc":
        'Interaktives Dashboard zur Visualisierung geospatialer Daten mit Karten, Diagrammen, API-Integration und dynamischen Nutzerinteraktionen für explorative Analysen. <a href="https://github.com/AmirDonyadide/SE4G" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.poliyogaDesc":
        'Responsive Webplattform für eine Yoga-Akademie mit Frontend-, UX- und datenbanknahen Funktionen für Profile, Aktivitäten, Nutzerinteraktionen und dynamische Inhalte. <a href="https://github.com/moeinp70/HYP_Yoga" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "projects.eoadvancedDesc":
        'Analyse von Veränderungen der Wasserflächen in Ost-Venedig auf Basis von Satellitendaten, mit NDWI-basierten Indikatoren, Karten und statistischen Visualisierungen für Trends von 2021 bis 2024. <a href="https://github.com/AmirDonyadide/EOAdvanced" target="_blank" rel="noreferrer">GitHub-Repository</a>.',
      "footer.copy": '&copy; <span id="year"></span> Amirhossein Donyadidegan. Erstellt für GitHub Pages.',
    },
    attrs: {
      "nav.aria": "Hauptnavigation",
      "language.aria": "Sprachauswahl",
      "hero.actionsAria": "Hauptaktionen",
      "intro.aria": "Profil-Highlights",
      "logos.polimiAlt": "Logo des Politecnico di Milano",
      "logos.bonnAlt": "Logo der Universität Bonn",
      "logos.kitAlt": "Logo des Karlsruher Instituts für Technologie",
      "logos.kitShortAlt": "KIT-Logo",
      "logos.tehranAlt": "Zeichen der Universität Teheran",
      "photo.aria": "Geospatiale Bildthemen",
      "photo.veniceAlt": "Satellitenbild von Venedig und der Lagune",
      "photo.polimiCampusAlt": "Gebäudefassade des Politecnico di Milano",
      "photo.polimiInteriorAlt": "Innentreppenhaus am Politecnico di Milano",
      "photo.glacierAlt": "Satellitenbild des Mendenhall-Gletschergebiets",
      "photo.floridaAlt": "Satellitenbild von Feuchtgebieten und Küste in Südflorida",
      "about.strengthsAria": "Kernstärken",
      "education.exchangeAria": "Austauschuniversitäten",
      "skills.aria": "Technische Fähigkeiten",
      "projectVisuals.generalization": "Satellitenbild als thematische Visualisierung für Kartengeneralisierung",
      "projectVisuals.raster": "Satellitenbild als thematische Visualisierung für Rasterverarbeitung",
      "projectVisuals.cv": "Satellitenbild als thematische Visualisierung für Computer Vision",
      "projectVisuals.webgis": "Erde-bei-Nacht-Bild als thematische Visualisierung für WebGIS",
      "projectVisuals.eo": "Satellitenbild als thematische Visualisierung für Earth-Observation-Tools",
      "projectVisuals.dashboard": "Erde-bei-Nacht-Bild als thematische Visualisierung für Dashboard-Entwicklung",
      "projectVisuals.webapp": "Satellitenbild als thematische Visualisierung für eine responsive Webanwendung",
      "projectVisuals.water": "Satellitenbild als thematische Visualisierung für Wasserflächenanalyse",
      "contact.langAria": "Sprachen und weitere Details",
    },
  },
  it: {
    title: "Amirhossein Donyadidegan | Portfolio di geoinformatica",
    text: {
      skip: "Vai al contenuto",
      "nav.toggle": "Apri o chiudi navigazione",
      "nav.about": "Profilo",
      "nav.experience": "Esperienza",
      "nav.education": "Formazione",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.contact": "Contatti",
      "hero.eyebrow": "Ingegnere junior in geoinformatica",
      "hero.title": "GIS, telerilevamento, Python e machine learning per problemi geospaziali.",
      "hero.summary":
        "Sono Amirhossein Donyadidegan, un laureato entry-level in geoinformatica con base a Karlsruhe e con esperienza pratica in analisi geospaziale, pipeline di dati, dashboard interattive e progetti di ricerca applicata.",
      "hero.viewProjects": "Vedi progetti",
      "hero.contact": "Contattami",
      "hero.cvTodo": "CV PDF TODO",
      "intro.locationLabel": "Sede",
      "intro.location": "Karlsruhe, Baden-Württemberg, Germania",
      "intro.levelLabel": "Livello",
      "intro.level": "Entry-level / Junior",
      "intro.focusLabel": "Focus",
      "intro.focus": "Geoinformatica, GIS, analisi dati",
      "affiliations.eyebrow": "Affiliazioni",
      "affiliations.title": "Luoghi in cui ho studiato e lavorato.",
      "logos.polimi": "Politecnico di Milano",
      "logos.polimiRole": "MSc in Ingegneria geoinformatica",
      "logos.bonn": "Università di Bonn",
      "logos.bonnRole": "Scambio Erasmus+, geodesia",
      "logos.kit": "Karlsruhe Institute of Technology",
      "logos.kitRole": "Scambio e ruoli da assistente di ricerca",
      "logos.tehran": "Università di Teheran",
      "logos.tehranRole": "BSc in Ingegneria del rilevamento",
      "logos.ngf": "Naghsheh Gostaran Fartak Co.",
      "logos.ngfRole": "Tirocinio; logo ufficiale in attesa",
      "photo.venice": "Telerilevamento e analisi ambientale",
      "photo.polimiCampus": "Contesto accademico al Politecnico di Milano",
      "photo.polimiInterior": "Linguaggio visivo della presentazione di tesi",
      "photo.glacier": "Workflow di osservazione della Terra",
      "photo.florida": "GIS, dati raster e modellazione spaziale",
      "about.eyebrow": "Profilo",
      "about.title": "Analisi geospaziale con un approccio ingegneristico guidato dai dati.",
      "about.p1":
        "Ho completato un MSc in Ingegneria geoinformatica al Politecnico di Milano, con periodi di scambio presso l'Università di Bonn e il Karlsruhe Institute of Technology (KIT). Il mio lavoro collega la scienza dei dati geospaziali con workflow pratici, inclusi analisi GIS, osservazione della Terra, sviluppo Python, dashboard e applicazioni di machine learning.",
      "about.q1": "Elaborazione di dati geospaziali con Python",
      "about.q2": "Telerilevamento e workflow di osservazione della Terra",
      "about.q3": "Dashboard interattive e applicazioni WebGIS",
      "about.q4": "Pipeline di machine learning per dati spaziali",
      "experience.eyebrow": "Esperienza",
      "experience.title": "Ricerca applicata, sviluppo web, GIS e supporto al rilevamento.",
      "experience.kitIipRole": "Analista GIS e dati, assistente di ricerca",
      "experience.kitIipMeta": "IIP, Karlsruhe Institute of Technology (KIT)",
      "experience.kitIipB1": "Sviluppo di pipeline dati in Python per elaborare e analizzare dati energetici e di mobilità.",
      "experience.kitIipB2": "Analisi spaziali a supporto di modelli di domanda energetica e decarbonizzazione.",
      "experience.kitIipB3": "Sviluppo di dashboard interattive con integrazione di mappe per applicazioni data-driven.",
      "experience.kitIipB4": "Integrazione di analisi geospaziale, elaborazione dati e visualizzazione in progetti di ricerca applicata.",
      "experience.kitNovaRole": "Sviluppatore web, assistente di ricerca",
      "experience.kitNovaMeta": "KIT nova",
      "experience.kitNovaB1": "Contributo allo sviluppo di applicazioni web con attenzione a funzionalità e usabilità.",
      "experience.kitNovaB2": "Supporto a progetti VR/AR per applicazioni digitali e interattive.",
      "experience.kitNovaB3": "Contributo a visualizzazioni geospaziali e soluzioni cartografiche digitali.",
      "experience.ngfRole": "Tirocinante",
      "experience.ngfMeta": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfB1": "Supporto a progetti di rilevamento, fotogrammetria e GIS in un contesto pratico.",
      "experience.ngfB2": "Assistenza nella raccolta dati, nell'analisi spaziale e nell'implementazione tecnica.",
      "experience.ngfB3": "Uso di AutoCAD e strumenti GIS per creare ed elaborare dati geospaziali.",
      "education.eyebrow": "Formazione",
      "education.title": "Basi in geoinformatica, geodesia, telerilevamento e rilevamento.",
      "education.mscTitle": "MSc in Ingegneria geoinformatica",
      "education.mscMeta": "Politecnico di Milano, Italia",
      "education.mscDate": "Set 2023 - Mar 2026 | completato | voto: 102 / 110, circa 1,5",
      "education.mscExchange":
        "Studente in scambio in geodesia presso l'Università di Bonn da ott. 2025 a mar. 2026. Studente in scambio in telerilevamento e geoinformazione presso il KIT da apr. 2025 a set. 2025.",
      "education.bscTitle": "BSc in Ingegneria del rilevamento",
      "education.bscMeta": "Università di Teheran, Iran",
      "education.bscDate": "Set 2018 - Lug 2022 | voto: 16,5 / 20, circa 1,9",
      "skills.eyebrow": "Competenze",
      "skills.title": "Competenze tecniche tra dati geospaziali, software e visualizzazione.",
      "skills.programmingTitle": "Programmazione",
      "skills.programmingText": "Python, C++, JavaScript, SQL, MATLAB, programmazione orientata agli oggetti, sviluppo modulare.",
      "skills.gisTitle": "GIS e telerilevamento",
      "skills.gisText": "QGIS, ArcGIS, Google Earth Engine, elaborazione raster e vettoriale, trasformazioni CRS, GeoJSON, Shapefiles.",
      "skills.mlTitle": "Machine learning",
      "skills.mlText": "Scikit-learn, TensorFlow, PyTorch, classificazione, regressione, clustering, CNN, transfer learning, embedding.",
      "skills.dataTitle": "Data engineering",
      "skills.dataText": "Pandas, NumPy, GeoPandas, xarray, workflow ETL, pulizia dati, progettazione di pipeline, Jupyter Notebooks.",
      "skills.webTitle": "Dashboard e web",
      "skills.webText": "Plotly, Dash, Matplotlib, HTML, CSS, JavaScript, Nuxt.js, Flask, REST APIs, applicazioni WebGIS.",
      "skills.dbTitle": "Database",
      "skills.dbText": "PostgreSQL, PostGIS, SQLite, Oracle, database spaziali e workflow dati basati su SQL.",
      "skills.softwareTitle": "Software engineering",
      "skills.softwareText": "Git, GitHub, GitLab, Linux/Bash, Docker, GitHub Actions, basi di CI/CD, pytest, debugging, documentazione.",
      "skills.cloudTitle": "Cloud, automazione e design",
      "skills.cloudText": "Google Cloud, Google Sheets API, Google Drive API, scripting, automazione, AutoCAD, Civil3D, Figma.",
      "projects.eyebrow": "Progetti",
      "projects.title": "Lavori selezionati in geospaziale, machine learning, dashboard e rilevamento.",
      "projects.typeThesis": "Tesi MSc",
      "projects.typeRaster": "Simulazione raster",
      "projects.typeDl": "Deep learning",
      "projects.typeWebgis": "WebGIS",
      "projects.typeEo": "Osservazione della Terra",
      "projects.typeDashboard": "Dashboard",
      "projects.typeWebapp": "Applicazione web",
      "projects.typeRs": "Telerilevamento",
      "projects.additionalTitle": "Altri progetti di rilevamento e ingegneria",
      "projects.additional1": "Rilevamento ingegneristico nel campus dell'Università di Teheran con raccolta dati tramite stazione totale e preparazione di planimetrie.",
      "projects.additional2": "Progetto di livellazione per misurare differenze di quota, applicare metodi classici, controllo degli errori e documentazione.",
      "projects.additional3": "Progettazione stradale tra due città con AutoCAD Civil 3D, geometria del tracciato, profili longitudinali e volumi di scavo e riporto.",
      "projects.additional4": "Scansione laser 3D di un piano di edificio con acquisizione di nuvole di punti, elaborazione e supporto a modelli digitali 3D.",
      "contact.eyebrow": "Contatti",
      "contact.title": "Disponibile per ruoli junior realistici legati a geoinformatica e lavoro sui dati.",
      "contact.p":
        "Sono interessato a ruoli entry-level in geoinformatica, GIS, telerilevamento, analisi di dati geospaziali, data science, machine learning e sviluppo basato su Python.",
      "contact.langEn": "Inglese: fluente",
      "contact.langDe": "Tedesco: intermedio",
      "contact.langIt": "Italiano: intermedio",
      "contact.license": "Patente: categoria B",
      "footer.credits":
        "Immagini tematiche: NASA, NASA Earth Observatory e NASA/USGS Landsat. Loghi: file pubblici dei loghi istituzionali e presentazione di tesi fornita.",
    },
    html: {
      "about.p2":
        "La mia tesi magistrale, <cite>Inferring Map Generalization Operations from User Prompts</cite>, ha esplorato come collegare operazioni di generalizzazione cartografica con AI e linguaggio naturale per supportare le decisioni nel map design.",
      "education.mscThesis": "<strong>Tesi:</strong> <cite>Inferring Map Generalization Operations from User Prompts</cite>",
      "education.mscCourses":
        "<strong>Corsi rilevanti:</strong> Geographic Information Systems, Machine Learning, Databases, Earth Observation, Geospatial Data Analysis, Geospatial Processing",
      "education.bscThesis": "<strong>Tesi:</strong> <cite>Application of GIS and Big Data in Smart Cities</cite>",
      "education.bscCourses":
        "<strong>Corsi rilevanti:</strong> Surveying, Photogrammetry, Remote Sensing, Geographic Information Systems, Spatial Analysis, Geodesy",
      "projects.nl2mapDesc":
        'Workflow di machine learning che collega il linguaggio naturale alle operazioni di generalizzazione cartografica, con preparazione dati, training del modello e valutazione. <a href="https://github.com/AmirDonyadide/nl2map-generalization" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.layerDesc":
        'Tool Python per modifiche raster basate su regole con maschere vettoriali, trasformazioni percentuali, coerenza CRS, validazione ed estensibilità modulare. <a href="https://github.com/AmirDonyadide/LayerAlterator" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.dlDesc":
        'Modelli di classificazione immagini CNN e ResNet18 preaddestrato, con pipeline completa di training e valutazione, metriche, normalizzazione e analisi degli errori. <a href="https://github.com/AmirDonyadide/DL4CVRS" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.landslideDesc":
        'Workflow geospaziale di machine learning e GIS per analizzare la suscettibilità alle frane, integrando dati di telerilevamento, terreno e infrastrutture in un\'applicazione WebGIS. <a href="https://github.com/AmirDonyadide/GIS-Course-Polimi-2024" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.landsatDesc":
        'Libreria Python per elaborare e analizzare dati satellitari Landsat 7/8/9, inclusi estrazione dei metadati, elaborazione delle bande, riproiezione e calcolo di indici. <a href="https://github.com/AmirDonyadide/LandsatToolkit" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.se4gDesc":
        'Dashboard interattiva per visualizzare dati geospaziali con mappe, grafici, integrazione API e interazioni dinamiche per analisi esplorative. <a href="https://github.com/AmirDonyadide/SE4G" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.poliyogaDesc":
        'Piattaforma web responsive per un\'accademia di yoga, con funzionalità frontend, UX e legate al database per profili, attività, interazioni utente e contenuti dinamici. <a href="https://github.com/moeinp70/HYP_Yoga" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "projects.eoadvancedDesc":
        'Analisi satellitare dei cambiamenti delle aree d\'acqua nella Venezia orientale, usando indicatori basati su NDWI, mappe e visualizzazioni statistiche per trend dal 2021 al 2024. <a href="https://github.com/AmirDonyadide/EOAdvanced" target="_blank" rel="noreferrer">Repository GitHub</a>.',
      "footer.copy": '&copy; <span id="year"></span> Amirhossein Donyadidegan. Creato per GitHub Pages.',
    },
    attrs: {
      "nav.aria": "Navigazione principale",
      "language.aria": "Selezione lingua",
      "hero.actionsAria": "Azioni principali",
      "intro.aria": "Punti chiave del profilo",
      "logos.polimiAlt": "Logo del Politecnico di Milano",
      "logos.bonnAlt": "Logo dell'Università di Bonn",
      "logos.kitAlt": "Logo del Karlsruhe Institute of Technology",
      "logos.kitShortAlt": "Logo KIT",
      "logos.tehranAlt": "Simbolo dell'Università di Teheran",
      "photo.aria": "Temi visivi geospaziali",
      "photo.veniceAlt": "Immagine satellitare di Venezia e della sua laguna",
      "photo.polimiCampusAlt": "Facciata del Politecnico di Milano",
      "photo.polimiInteriorAlt": "Scalinata interna al Politecnico di Milano",
      "photo.glacierAlt": "Immagine satellitare dell'area del ghiacciaio Mendenhall",
      "photo.floridaAlt": "Immagine satellitare delle zone umide e della costa della Florida meridionale",
      "about.strengthsAria": "Competenze principali",
      "education.exchangeAria": "Istituzioni di scambio",
      "skills.aria": "Competenze tecniche",
      "projectVisuals.generalization": "Immagine satellitare come visuale tematica per la generalizzazione cartografica",
      "projectVisuals.raster": "Immagine satellitare come visuale tematica per l'elaborazione raster",
      "projectVisuals.cv": "Immagine satellitare come visuale tematica per computer vision",
      "projectVisuals.webgis": "Immagine della Terra di notte come visuale tematica per WebGIS",
      "projectVisuals.eo": "Immagine satellitare come visuale tematica per strumenti di osservazione della Terra",
      "projectVisuals.dashboard": "Immagine della Terra di notte come visuale tematica per lo sviluppo di dashboard",
      "projectVisuals.webapp": "Immagine satellitare come visuale tematica per un'applicazione web responsive",
      "projectVisuals.water": "Immagine satellitare come visuale tematica per l'analisi delle aree d'acqua",
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
