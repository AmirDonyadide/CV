const navToggle = document.querySelector(".nav-toggle");
const navDrawer = document.querySelector(".nav-drawer");
const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const themeToggle = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const pageMain = document.querySelector("main");
const pageFooter = document.querySelector(".site-footer");

const originalText = new Map();
const originalTitle = document.title;
const attrElements = Array.from(document.querySelectorAll("[data-i18n-attr]"));
const attrDefaults = new WeakMap();

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

attrElements.forEach((element) => {
  const defaults = {};
  parseAttrPairs(element.dataset.i18nAttr).forEach(({ attr }) => {
    defaults[attr] = element.getAttribute(attr) || "";
  });
  attrDefaults.set(element, defaults);
});

const translations = {
  de: {
    title: "Amirhossein Donyadidegan | Geoinformatik, Software, Daten und Web Portfolio",
    text: {
      skip: "Zum Inhalt springen",
      "nav.toggle": "Navigation umschalten",
      "nav.about": "Profil",
      "nav.experience": "Erfahrung",
      "nav.projects": "Projekte",
      "nav.education": "Ausbildung",
      "nav.contact": "Kontakt",
      "nav.capabilities": "Kompetenzen",
      "brand.role": "Geoinformatik-Ingenieur",
      "hero.eyebrow": "Portfolio für Software, Daten und geospatiale Systeme",
      "hero.thesis": "Ich verwandle räumliche Daten in Software, die Menschen nutzen können.",
      "hero.ground": "Boden / Politecnico",
      "hero.orbit": "Orbit / Erdbeobachtung",
      "hero.figureCaption":
        "Zwei Maßstäbe einer Praxis: Orte verstehen und die Systeme entwickeln, mit denen sie beobachtet werden.",
      "hero.title": "Zuverlässige Workflows von Daten zu Entscheidungen über Karten, Modelle und Webtools bauen.",
      "hero.subtitle":
        "Ich bin Amirhossein Donyadidegan, Geoinformatik-Ingenieur mit geographischem Wissen, Informatik-Grundlagen und Software-Engineering-Praxis.",
      "hero.note":
        "Mein Fokus liegt auf Python-gestützten Workflows, Fernerkundung und GIS, Dashboards, Datenprodukten sowie strukturierten Portfolio-Nachweisen in Machine Learning, Datenverarbeitung, WebGIS, Webentwicklung und räumlicher Analyse.",
      "hero.viewProjects": "Projekte ansehen",
      "hero.downloadCv": "CV herunterladen",
      "hero.contact": "Kontakt",
      "roles.software": "Software Engineer",
      "roles.data": "Data Scientist",
      "roles.web": "Web Developer",
      "roles.gis": "GIS Analyst",
      "skills.remote": "Fernerkundung",
      "skills.dataAnalysis": "Datenanalyse",
      "skills.software": "Softwareentwicklung",
      "skills.web": "Webentwicklung",
      "summary.eyebrow": "Recruiter Summary",
      "summary.title": "Technische Arbeit, die ich als Junior-Kandidat beitragen kann.",
      "summary.text":
        "Ich verwandle Datensätze in analysefähige Layer, Modell-Features, Dashboards und dokumentierte Python-Workflows. Meine Erfahrung verbindet GIS-Analyse, Software-Engineering-Gewohnheiten, Data-Science-Experimente, Web-Interfaces und geospatiale Forschungsunterstützung.",
      "summary.locationLabel": "Standort",
      "summary.location": "Karlsruhe, Baden-Württemberg, Deutschland",
      "summary.degreeLabel": "Letzter Abschluss",
      "summary.degree": "MSc Geoinformatics Engineering",
      "summary.positioningLabel": "Positionierung",
      "summary.positioning": "Junior GIS Analyst, Software Developer, Web Developer oder Data Scientist",
      "target.eyebrow": "Zielrollen",
      "target.title": "Recruiter-freundliche Rollen, die zum Profil passen.",
      "target.role1": "Junior Software Engineer",
      "target.role2": "Junior Data Scientist",
      "target.role3": "Junior Web Developer",
      "target.role4": "Junior GIS Analyst",
      "target.role5": "Python Developer",
      "target.role6": "Geospatial Data Analyst",
      "target.role7": "WebGIS Developer",
      "target.role8": "Remote Sensing Analyst",
      "availability.title": "Verfügbar für",
      "availability.item1": "Junior-Level-Positionen",
      "availability.item2": "Software Engineering, Data Science, Webentwicklung und GIS-Analyse",
      "availability.item3": "Positionen in Deutschland",
      "availability.item4": "Hybrid, remote oder vor Ort",
      "trust.eyebrow": "Trust Signals",
      "trust.title": "Abgeschlossener MSc, Forschungserfahrung und Erfahrung in Deutschland.",
      "trust.polimiName": "Politecnico di Milano",
      "trust.polimiRole": "MSc Geoinformatics Engineering",
      "trust.polimiCountry": "Italien",
      "trust.bonnName": "Universität Bonn",
      "trust.bonnRole": "Erasmus+ Austausch für die Thesis",
      "trust.bonnCountry": "Deutschland",
      "trust.kitName": "Karlsruher Institut für Technologie",
      "trust.kitRole": "Erasmus+ Austausch für Kurse + HiWi Forschungsassistenz",
      "trust.kitCountry": "Deutschland",
      "trust.tehranName": "Universität Teheran",
      "trust.tehranRole": "BSc Surveying Engineering",
      "trust.tehranCountry": "Iran",
      "profile.eyebrow": "Profil",
      "profile.title": "Ein technisches Profil, in dem geospatiales Denken, Datenarbeit und Software-Umsetzung zusammenkommen.",
      "profile.text":
        "Mich interessieren Rollen, in denen Datensätze, Code, Karten, Modelle und Interfaces zusammenkommen. Dazu gehören Python-Automatisierung, Datenvorbereitung, Modell-Features und Evaluation, Web-Dashboards, WebGIS-Anwendungen, Fernerkundungsworkflows und GIS-Analysen, die Teams helfen, komplexe räumliche oder technische Probleme zu verstehen.",
      "profile.thesis":
        "Meine MSc-Thesis, Inferring Map Generalization Operations from User Prompts, ist ein gutes Beispiel für diese Schnittstelle.",
      "profile.thesisTag1": "Kartografische Generalisierung",
      "profile.thesisTag2": "Natural-Language-Prompts",
      "profile.thesisTag3": "Multimodales Machine Learning",
      "profile.thesisTag4": "Vektor-Embeddings",
      "profile.thesisTag5": "Modellevaluation",
      "profile.thesisTag6": "MLP",
      "profile.skill1": "Python-Workflows",
      "profile.skill2": "Data-Science-Experimente",
      "profile.skill3": "Web-Dashboards",
      "profile.skill4": "WebGIS-Interfaces",
      "profile.skill5": "GIS und räumliche Analyse",
      "profile.skill6": "Fernerkundungsverarbeitung",
      "profile.skill7": "Feature Engineering",
      "profile.skill8": "Lesbare technische Dokumentation",
      "skills.eyebrow": "Technische Fähigkeiten",
      "skills.title": "Ein praktisches Skillset für Geoinformatik, GIS, Data Science, Software- und Web-Rollen.",
      "skills.note":
        "Aus dem CV in recruiter-freundliche Gruppen übertragen, mit dem stärksten Fit rund um Python, Geodaten, Machine Learning, Dashboards und Web-Interfaces.",
      "skills.languagesTitle": "Sprachen",
      "skills.englishLevel": "Englisch · fließend",
      "skills.germanLevel": "Deutsch · Mittelstufe",
      "skills.italianLevel": "Italienisch · Mittelstufe",
      "skills.levelCore": "Kern",
      "skills.levelApplied": "Angewandt",
      "skills.levelSupport": "Support",
      "skills.programmingTitle": "Programmierung",
      "skills.mlTitle": "Machine Learning und Data Science",
      "skills.geoAiTitle": "Geospatial AI und Remote Sensing ML",
      "skills.dataEngineeringTitle": "Datenverarbeitung und Engineering",
      "skills.gisTitle": "GIS und Fernerkundung",
      "skills.visualTitle": "Visualisierung und Dashboards",
      "skills.webTitle": "Webentwicklung und APIs",
      "skills.databasesTitle": "Datenbanken",
      "skills.devopsTitle": "DevOps und Software Engineering",
      "skills.toolsTitle": "Cloud, Automatisierung und Design-Tools",
      "services.eyebrow": "Services und Stärken",
      "services.title": "Angewandte technische Unterstützung für Software-, Daten-, Web- und geospatiale Workflows.",
      "services.pythonTitle": "Python- und Software-Workflows",
      "services.pythonText": "Lesbare Skripte, wiederverwendbare Verarbeitungsschritte, Git-basierte Projektstruktur und dokumentierte technische Workflows aufbauen.",
      "services.dataTitle": "Data Science und ML-Support",
      "services.dataText": "Modell-Features vorbereiten, mit Vektor-Embeddings arbeiten, Evaluationsschleifen durchführen und ML-Experimente mit Fachfragen verbinden.",
      "services.webTitle": "Web, Dashboards und Interfaces",
      "services.webText": "HTML, CSS, JavaScript, Dashboard-Ansichten und Interface-Elemente unterstützen, damit technische Outputs leichter prüfbar werden.",
      "services.gisTitle": "GIS- und Fernerkundungsanalyse",
      "services.gisText": "Räumliche Layer vorbereiten, Mobilitäts- und Energiedaten analysieren, Raster-/Vektordaten verarbeiten und Ergebnisse mit Karten kommunizieren.",
      "experience.eyebrow": "Erfahrung",
      "experience.title": "Junior technische Erfahrung in Software, Daten, GIS und Web-Support.",
      "experience.kitIipRole": "GIS- und Datenanalyst, Hilfswissenschaftler",
      "experience.kitIipMeta": "IIP, Karlsruher Institut für Technologie",
      "experience.kitIipB1":
        "Python-basierte Datenpipelines für die Verarbeitung von Energie- und Mobilitätsdaten entwickelt.",
      "experience.kitIipB2":
        "Räumliche Analysen zur Unterstützung von Energiebedarfs- und Dekarbonisierungsmodellen durchgeführt.",
      "experience.kitIipB3":
        "Interaktive Dashboards mit Kartenintegration für angewandte Forschungsabläufe entwickelt.",
      "experience.kitNovaRole": "Webentwickler, Hilfswissenschaftler",
      "experience.kitNovaMeta": "KIT Nova",
      "experience.kitNovaB1":
        "Webanwendungen mit Fokus auf Funktionalität und Benutzerfreundlichkeit mitentwickelt.",
      "experience.kitNovaB2":
        "VR/AR-Projekte für digitale und interaktive Anwendungen unterstützt.",
      "experience.kitNovaB3":
        "Zu Geovisualisierungen und digitalen Kartenlösungen beigetragen.",
      "experience.ngfOrg": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfRole": "Praktikant",
      "experience.ngfMeta": "Vermessung, GIS und CAD-Projektunterstützung",
      "experience.ngfB1":
        "Vermessungs-, Photogrammetrie- und GIS-Projekte in einem praktischen Arbeitsumfeld unterstützt.",
      "experience.ngfB2":
        "Bei Datenerhebung, räumlicher Analyse und technischer Umsetzung mitgewirkt.",
      "experience.ngfB3":
        "AutoCAD und GIS-Werkzeuge zur Erstellung und Verarbeitung von Geodaten eingesetzt.",
      "experience.toolsLabel": "Tools:",
      "projects.eyebrow": "Projekte",
      "projects.title": "Nachweise in ML, Processing, WebGIS, Dashboards und Webentwicklung.",
      "projects.note":
        "Jedes Projekt zeigt ein klares Rollensignal für Recruiter: Engineering, Analyse, Forschung, Interface-Arbeit oder angewandte Data Science.",
      "projects.typeThesis": "ML und Geoinformatik",
      "projects.typeRaster": "Rasterverarbeitung",
      "projects.typeEo": "Fernerkundungs-Toolkit",
      "projects.typeWebgis": "WebGIS und Spatial ML",
      "projects.typeDashboard": "Dashboard",
      "projects.typeWeb": "Webentwicklung",
      "projects.figureA": "Abbildung A · Prompt → Operation → generalisierte Karte",
      "projects.figureB": "Abbildung B · Landsat-Verarbeitung und Erdbeobachtungskontext",
      "projects.figureC": "Abbildung C · Gelände, Infrastruktur, Exposition und Anfälligkeit",
      "projects.nl2mapDesc": "Machine-Learning-Workflow, der Nutzerprompts mit kartografischen Generalisierungsoperationen verbindet.",
      "projects.layerDesc": "Python-Tool für kontrollierte Rastermodifikation mit Masken, Validierung und wiederverwendbarer Logik.",
      "projects.landsatDesc": "Wiederverwendbares Python-Toolkit für Metadaten, Bandoperationen, Reprojektion und Index-Workflows.",
      "projects.landslideDesc": "GIS- und Machine-Learning-Workflow mit Terrain-, Infrastruktur- und Fernerkundungsdaten.",
      "projects.se4gDesc": "Interaktives Dashboard mit Karten, Diagrammen, API-Integration und nutzergesteuerter Datenprüfung.",
      "projects.poliyogaDesc": "Responsive Webplattform mit Frontend-, UX-, datenbankgestützten Funktionen, Profilen und dynamischem Inhalt.",
      "projects.github": "GitHub ansehen",
      "projects.thesisStudy": "Thesis-Studie ansehen",
      "projects.notPublic": "Repository nicht öffentlich",
      "process.eyebrow": "Prozess",
      "process.title": "Ein strukturierter Workflow vom Problemverständnis zum nutzbaren technischen Ergebnis.",
      "process.note": "Derselbe Workflow passt zu GIS-Analyse, Data-Science-Experimenten, Web-Dashboards, Software-Utilities und Forschungsunterstützung.",
      "process.step1Title": "Rahmen",
      "process.step1Text": "Rolle der Daten, Nutzer, Entscheidung und technische Grenzen klären.",
      "process.step2Title": "Vorbereiten",
      "process.step2Text": "Daten bereinigen, transformieren, verbinden, dokumentieren und für Analyse oder Entwicklung strukturieren.",
      "process.step3Title": "Bauen",
      "process.step3Text": "Python-Workflows, ML-Experimente, GIS-Logik, Dashboards oder Web-Interface-Komponenten entwickeln.",
      "process.step4Title": "Validieren",
      "process.step4Text": "Outputs mit Metriken, räumlichem Denken, visueller Prüfung und reproduzierbaren Tests kontrollieren.",
      "process.step5Title": "Liefern",
      "process.step5Text": "Ergebnis als dokumentierten Code, Karten, Dashboards, Modelloutputs oder klares Projektergebnis übergeben.",
      "proof.eyebrow": "Social Proof",
      "proof.title": "Nachweise, die Recruiter über Ausbildung, Forschung und Projektarbeit prüfen können.",
      "proof.msc": "Abgeschlossener Abschluss in Geoinformatics Engineering",
      "proof.kit": "Forschungserfahrung als HiWi in Deutschland",
      "proof.projects": "Portfolio-Projekte in ML, GIS, Dashboards und Web",
      "proof.germany": "Studien-, Forschungs- und Arbeitskontext in Deutschland",
      "education.eyebrow": "Ausbildung",
      "education.title": "Akademische Grundlagen in Geoinformatik, GIS, Fernerkundung und Vermessung.",
      "education.note": "Ein Weg von Vermessungsgrundlagen zur Geoinformatik-Spezialisierung, mit Austausch- und Forschungserfahrung in Deutschland.",
      "education.groundLabel": "Akademische Basis",
      "education.mscTitle": "MSc Geoinformatics Engineering",
      "education.mscMeta": "Politecnico di Milano, Italien",
      "education.mscStatus": "Abgeschlossen",
      "education.mscGrade": "Note: 102 / 110, ca. 1,5",
      "education.mscDetails": "Spezialisierung in Geoinformatik mit GIS, Machine Learning, Datenbanken, Earth Observation, geospatialer Datenanalyse und Geodatenverarbeitung.",
      "education.bonnTitle": "Universität Bonn",
      "education.bonnText": "Erasmus+ Austausch für die Thesis in Geodäsie.",
      "education.kitTitle": "Karlsruher Institut für Technologie",
      "education.kitText": "Erasmus+ Austausch für Kurse in Fernerkundung und Geoinformation.",
      "education.thesisLabel": "Thesis:",
      "education.bscTitle": "BSc Surveying Engineering",
      "education.bscMeta": "Universität Teheran, Iran",
      "education.bscGrade": "Note: 16,5 / 20, ca. 1,9",
      "education.bscDetails": "Grundlagen in Vermessung, Photogrammetrie, Fernerkundung, GIS, Geodäsie und räumlicher Analyse.",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Offen für Junior-Rollen in GIS, Software, Web und Datenarbeit.",
      "contact.note":
        "Bester Fit: Teams, die sorgfältige Datenarbeit, lesbaren Code, kartenbewusste Analyse und praktische Dashboard- oder Web-Outputs brauchen.",
      "contact.emailButton": "E-Mail senden",
      "contact.cvButton": "CV herunterladen",
      "contact.emailLabel": "E-Mail",
      "contact.phoneLabel": "Telefon",
      "contact.emailMicro": "Am besten für Chancen",
      "contact.linkedinMicro": "Berufliches Profil",
      "contact.githubMicro": "Code und Projekte",
      "contact.phoneMicro": "Werktags erreichbar",
      "footer.role": "Geoinformatik · GIS · Daten · Software",
    },
    attrs: {
      "nav.aria": "Hauptnavigation",
      "language.aria": "Sprachauswahl",
      "brand.homeAria": "Startseite von Amirhossein Donyadidegan",
      "hero.actionsAria": "Hauptaktionen",
      "hero.visualAria": "Visuelles Feld zwischen Boden und Erdbeobachtung",
      "hero.skillsAria": "Kernfähigkeiten",
      "target.tagsAria": "Zielrollen",
      "profile.thesisAria": "Thesis-Themen",
      "profile.skillsAria": "Profil-Fähigkeiten",
      "skills.aria": "Technische Fähigkeitsgruppen",
      "projects.techAria": "Technologien",
      "projects.eoContextAria": "Erdbeobachtungskontext",
      "education.focusAria": "Studienfokus",
      "alt.heroGround": "Die zentrale Treppe im Politecnico di Milano",
      "alt.heroOrbit": "ASTER-Satellitenbild von Venedig und seiner Lagune",
      "alt.nl2map": "Prompt-Eingabe und generalisierte Gebäudekarten im NL2Map-Workflow",
      "alt.landsat":
        "LandsatToolkit-Workflow für Metadaten, Bandstapelung, Reprojektion und Indexanalyse",
      "alt.mendenhall": "Landsat-8-Aufnahme des Mendenhall-Gletschers",
      "alt.southFlorida": "Satellitenaufnahme von Südflorida",
      "alt.landslide":
        "Konzept zur Erdrutschanfälligkeit mit niedrigen, mittleren und hohen Risikobereichen über Geländekonturen",
      "alt.layerAlterator":
        "LayerAlterator-Rasterworkflow mit einer Vektormaske über Satellitenbildern von Südflorida",
      "alt.se4g": "SE4G-Geodaten-Dashboard mit Weltkarte, Balken- und Liniendiagramm",
      "alt.polimiCampus": "Historische Fassade des Politecnico di Milano",
    },
  },
  it: {
    title: "Amirhossein Donyadidegan | Portfolio geoinformatica, software, dati e web",
    text: {
      skip: "Vai al contenuto",
      "nav.toggle": "Apri o chiudi navigazione",
      "nav.about": "Profilo",
      "nav.experience": "Esperienza",
      "nav.projects": "Progetti",
      "nav.education": "Formazione",
      "nav.contact": "Contatti",
      "nav.capabilities": "Competenze",
      "brand.role": "Ingegnere geoinformatico",
      "hero.eyebrow": "Portfolio di sistemi software, dati e geospaziali",
      "hero.thesis": "Trasformo i dati spaziali in software che le persone possono usare.",
      "hero.ground": "Terra / Politecnico",
      "hero.orbit": "Orbita / osservazione della Terra",
      "hero.figureCaption":
        "Due scale della stessa pratica: comprendere i luoghi e progettare i sistemi usati per osservarli.",
      "hero.title": "Costruire workflow affidabili dai dati alle decisioni con mappe, modelli e strumenti web.",
      "hero.subtitle":
        "Sono Amirhossein Donyadidegan, ingegnere in geoinformatica che combina conoscenza geografica, informatica e pratica di software engineering.",
      "hero.note":
        "Il mio lavoro si concentra su workflow Python, telerilevamento e GIS, dashboard, prodotti dati ed evidenze di portfolio su machine learning, data processing, WebGIS, sviluppo web e analisi spaziale.",
      "hero.viewProjects": "Vedi progetti",
      "hero.downloadCv": "Scarica CV",
      "hero.contact": "Contatti",
      "roles.software": "Software engineer",
      "roles.data": "Data scientist",
      "roles.web": "Web developer",
      "roles.gis": "GIS analyst",
      "skills.remote": "Telerilevamento",
      "skills.dataAnalysis": "Analisi dati",
      "skills.software": "Sviluppo software",
      "skills.web": "Sviluppo web",
      "summary.eyebrow": "Sintesi per recruiter",
      "summary.title": "Contributi tecnici che posso portare come candidato junior.",
      "summary.text":
        "Trasformo dataset in layer pronti per l'analisi, feature per modelli, dashboard e workflow Python documentati. La mia esperienza collega analisi GIS, abitudini di software engineering, esperimenti di data science, interfacce web e supporto alla ricerca geospaziale.",
      "summary.locationLabel": "Sede",
      "summary.location": "Karlsruhe, Baden-Württemberg, Germania",
      "summary.degreeLabel": "Ultimo titolo",
      "summary.degree": "MSc Geoinformatics Engineering",
      "summary.positioningLabel": "Posizionamento",
      "summary.positioning": "Junior GIS Analyst, Software Developer, Web Developer o Data Scientist",
      "target.eyebrow": "Ruoli target",
      "target.title": "Ruoli chiari per recruiter e coerenti con il profilo.",
      "target.role1": "Junior Software Engineer",
      "target.role2": "Junior Data Scientist",
      "target.role3": "Junior Web Developer",
      "target.role4": "Junior GIS Analyst",
      "target.role5": "Python Developer",
      "target.role6": "Geospatial Data Analyst",
      "target.role7": "WebGIS Developer",
      "target.role8": "Remote Sensing Analyst",
      "availability.title": "Disponibile per",
      "availability.item1": "Posizioni junior",
      "availability.item2": "Software engineering, data science, sviluppo web e analisi GIS",
      "availability.item3": "Opportunità in Germania",
      "availability.item4": "Lavoro ibrido, remoto o in presenza",
      "trust.eyebrow": "Segnali di fiducia",
      "trust.title": "MSc completato, esposizione alla ricerca ed esperienza in Germania.",
      "trust.polimiName": "Politecnico di Milano",
      "trust.polimiRole": "MSc Geoinformatics Engineering",
      "trust.polimiCountry": "Italia",
      "trust.bonnName": "Università di Bonn",
      "trust.bonnRole": "Scambio Erasmus+ per la tesi",
      "trust.bonnCountry": "Germania",
      "trust.kitName": "Karlsruhe Institute of Technology",
      "trust.kitRole": "Scambio Erasmus+ per corsi + HiWi assistente di ricerca",
      "trust.kitCountry": "Germania",
      "trust.tehranName": "Università di Teheran",
      "trust.tehranRole": "BSc Surveying Engineering",
      "trust.tehranCountry": "Iran",
      "profile.eyebrow": "Profilo",
      "profile.title": "Un profilo tecnico dove pensiero geospaziale, dati e sviluppo software si incontrano.",
      "profile.text":
        "Mi interessano ruoli in cui dataset, codice, mappe, modelli e interfacce lavorano insieme. Questo include automazione Python, preparazione dati, feature ed evaluation di modelli, dashboard web, applicazioni WebGIS, workflow di telerilevamento e analisi GIS per capire problemi spaziali o tecnici complessi.",
      "profile.thesis":
        "La mia tesi MSc, Inferring Map Generalization Operations from User Prompts, è un buon esempio di questa intersezione.",
      "profile.thesisTag1": "Generalizzazione cartografica",
      "profile.thesisTag2": "Prompt in linguaggio naturale",
      "profile.thesisTag3": "Machine learning multimodale",
      "profile.thesisTag4": "Vector embedding",
      "profile.thesisTag5": "Valutazione del modello",
      "profile.thesisTag6": "MLP",
      "profile.skill1": "Workflow Python",
      "profile.skill2": "Esperimenti data science",
      "profile.skill3": "Dashboard web",
      "profile.skill4": "Interfacce WebGIS",
      "profile.skill5": "GIS e analisi spaziale",
      "profile.skill6": "Processing telerilevamento",
      "profile.skill7": "Feature engineering",
      "profile.skill8": "Documentazione tecnica leggibile",
      "skills.eyebrow": "Competenze tecniche",
      "skills.title": "Un set di competenze pratico per ruoli in geoinformatica, GIS, data science, software e web.",
      "skills.note":
        "Raggruppato dal CV in cluster leggibili per recruiter, con il fit più forte su Python, dati geospaziali, machine learning, dashboard e interfacce web.",
      "skills.languagesTitle": "Lingue",
      "skills.englishLevel": "Inglese · fluente",
      "skills.germanLevel": "Tedesco · intermedio",
      "skills.italianLevel": "Italiano · intermedio",
      "skills.levelCore": "Core",
      "skills.levelApplied": "Applicato",
      "skills.levelSupport": "Supporto",
      "skills.programmingTitle": "Programmazione",
      "skills.mlTitle": "Machine learning e data science",
      "skills.geoAiTitle": "Geospatial AI e remote sensing ML",
      "skills.dataEngineeringTitle": "Data processing ed engineering",
      "skills.gisTitle": "GIS e telerilevamento",
      "skills.visualTitle": "Visualizzazione e dashboard",
      "skills.webTitle": "Sviluppo web e API",
      "skills.databasesTitle": "Database",
      "skills.devopsTitle": "DevOps e software engineering",
      "skills.toolsTitle": "Cloud, automazione e strumenti di design",
      "services.eyebrow": "Servizi e punti di forza",
      "services.title": "Supporto tecnico applicato per workflow software, dati, web e geospaziali.",
      "services.pythonTitle": "Workflow Python e software",
      "services.pythonText": "Costruire script leggibili, passaggi riutilizzabili, struttura di progetto con Git e workflow tecnici documentati.",
      "services.dataTitle": "Supporto data science e ML",
      "services.dataText": "Preparare feature per modelli, lavorare con vector embedding, eseguire cicli di valutazione e collegare esperimenti ML a domande di dominio.",
      "services.webTitle": "Web, dashboard e interfacce",
      "services.webText": "Supportare HTML, CSS, JavaScript, viste dashboard ed elementi di interfaccia per rendere gli output tecnici più ispezionabili.",
      "services.gisTitle": "Analisi GIS e telerilevamento",
      "services.gisText": "Preparare layer spaziali, analizzare dati mobilità ed energia, processare raster/vettori e comunicare risultati con mappe.",
      "experience.eyebrow": "Esperienza",
      "experience.title": "Esperienza tecnica junior tra software, dati, GIS e supporto web.",
      "experience.kitIipRole": "Analista GIS e dati, assistente di ricerca",
      "experience.kitIipMeta": "IIP, Karlsruhe Institute of Technology",
      "experience.kitIipB1":
        "Sviluppo di pipeline Python per l'elaborazione di dati energetici e di mobilità.",
      "experience.kitIipB2":
        "Analisi spaziali a supporto di modelli di domanda energetica e decarbonizzazione.",
      "experience.kitIipB3":
        "Sviluppo di dashboard interattive con mappe integrate per flussi di ricerca applicata.",
      "experience.kitNovaRole": "Sviluppatore web, assistente di ricerca",
      "experience.kitNovaMeta": "KIT Nova",
      "experience.kitNovaB1":
        "Contributo ad applicazioni web con attenzione a funzionalità e usabilità.",
      "experience.kitNovaB2":
        "Supporto a progetti VR/AR per applicazioni digitali e interattive.",
      "experience.kitNovaB3":
        "Contributo a visualizzazioni geospaziali e soluzioni cartografiche digitali.",
      "experience.ngfOrg": "Naghsheh Gostaran Fartak Co.",
      "experience.ngfRole": "Tirocinante",
      "experience.ngfMeta": "Supporto a progetti di rilevamento, GIS e CAD",
      "experience.ngfB1":
        "Supporto a progetti di rilievo, fotogrammetria e GIS in un contesto operativo.",
      "experience.ngfB2":
        "Assistenza nella raccolta dati, nell'analisi spaziale e nell'implementazione tecnica.",
      "experience.ngfB3":
        "Uso di AutoCAD e strumenti GIS per creare ed elaborare dati geospaziali.",
      "experience.toolsLabel": "Strumenti:",
      "projects.eyebrow": "Progetti",
      "projects.title": "Evidenze su ML, processing, WebGIS, dashboard e sviluppo web.",
      "projects.note":
        "Ogni progetto mostra un segnale utile per recruiter: engineering, analisi, ricerca, lavoro di interfaccia o data science applicata.",
      "projects.typeThesis": "ML e geoinformatica",
      "projects.typeRaster": "Elaborazione raster",
      "projects.typeEo": "Toolkit telerilevamento",
      "projects.typeWebgis": "WebGIS e spatial ML",
      "projects.typeDashboard": "Dashboard",
      "projects.typeWeb": "Sviluppo web",
      "projects.figureA": "Figura A · Prompt → operazione → mappa generalizzata",
      "projects.figureB": "Figura B · Elaborazione Landsat e contesto di osservazione della Terra",
      "projects.figureC": "Figura C · Terreno, infrastrutture, esposizione e suscettibilità",
      "projects.nl2mapDesc": "Workflow di machine learning che collega prompt utente a operazioni di generalizzazione cartografica.",
      "projects.layerDesc": "Tool Python per modifica raster controllata con maschere, validazione e logica riutilizzabile.",
      "projects.landsatDesc": "Toolkit Python riutilizzabile per metadati, operazioni sulle bande, riproiezione e indici.",
      "projects.landslideDesc": "Workflow GIS e machine learning con dati di terreno, infrastrutture e telerilevamento.",
      "projects.se4gDesc": "Dashboard interattiva con mappe, grafici, API e ispezione dati guidata dall'utente.",
      "projects.poliyogaDesc": "Piattaforma web responsive con frontend, UX, funzioni database, profili e contenuto dinamico.",
      "projects.github": "Vedi GitHub",
      "projects.thesisStudy": "Vedi lo studio della tesi",
      "projects.notPublic": "Repository non pubblico",
      "process.eyebrow": "Processo",
      "process.title": "Un workflow strutturato dalla definizione del problema a un output tecnico utilizzabile.",
      "process.note": "Lo stesso workflow si adatta ad analisi GIS, esperimenti data science, dashboard web, utility software e supporto alla ricerca.",
      "process.step1Title": "Definire",
      "process.step1Text": "Chiarire ruolo dei dati, utente, decisione e vincoli tecnici.",
      "process.step2Title": "Preparare",
      "process.step2Text": "Pulire, trasformare, collegare, documentare e strutturare dataset per analisi o sviluppo.",
      "process.step3Title": "Costruire",
      "process.step3Text": "Sviluppare workflow Python, esperimenti ML, logica GIS, dashboard o componenti web.",
      "process.step4Title": "Validare",
      "process.step4Text": "Controllare output con metriche, ragionamento spaziale, ispezione visuale e test riproducibili.",
      "process.step5Title": "Consegnare",
      "process.step5Text": "Presentare il risultato come codice documentato, mappe, dashboard, output di modello o evidenza di progetto.",
      "proof.eyebrow": "Social proof",
      "proof.title": "Evidenze verificabili per recruiter tra formazione, ricerca e progetti.",
      "proof.msc": "MSc completato in Geoinformatics Engineering",
      "proof.kit": "Esperienza di ricerca come assistente in Germania",
      "proof.projects": "Progetti portfolio su ML, GIS, dashboard e web",
      "proof.germany": "Contesto di studio, ricerca e lavoro in Germania",
      "education.eyebrow": "Formazione",
      "education.title": "Fondamenti accademici in geoinformatica, GIS, telerilevamento e rilevamento.",
      "education.note": "Un percorso dalle basi del rilevamento alla specializzazione in geoinformatica, con scambio ed esperienza di ricerca in Germania.",
      "education.groundLabel": "Base accademica",
      "education.mscTitle": "MSc Geoinformatics Engineering",
      "education.mscMeta": "Politecnico di Milano, Italia",
      "education.mscStatus": "Completato",
      "education.mscGrade": "Voto: 102 / 110, circa 1,5",
      "education.mscDetails": "Specializzazione in geoinformatica con GIS, machine learning, database, Earth observation, analisi geospaziale e processing geodati.",
      "education.bonnTitle": "Università di Bonn",
      "education.bonnText": "Scambio Erasmus+ per la tesi in geodesia.",
      "education.kitTitle": "Karlsruhe Institute of Technology",
      "education.kitText": "Scambio Erasmus+ per corsi in telerilevamento e geoinformazione.",
      "education.thesisLabel": "Tesi:",
      "education.bscTitle": "BSc Surveying Engineering",
      "education.bscMeta": "Università di Teheran, Iran",
      "education.bscGrade": "Voto: 16,5 / 20, circa 1,9",
      "education.bscDetails": "Fondamenti in rilevamento, fotogrammetria, telerilevamento, GIS, geodesia e analisi spaziale.",
      "contact.eyebrow": "Contatti",
      "contact.title": "Disponibile per ruoli junior in GIS, software, web e dati.",
      "contact.note":
        "Miglior fit: team che hanno bisogno di gestione dati attenta, codice leggibile, analisi basata su mappe e output dashboard o web pratici.",
      "contact.emailButton": "Scrivimi",
      "contact.cvButton": "Scarica CV",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Telefono",
      "contact.emailMicro": "Ideale per opportunità",
      "contact.linkedinMicro": "Profilo professionale",
      "contact.githubMicro": "Codice e progetti",
      "contact.phoneMicro": "Disponibile nei giorni feriali",
      "footer.role": "Geoinformatica · GIS · Dati · Software",
    },
    attrs: {
      "nav.aria": "Navigazione principale",
      "language.aria": "Selezione lingua",
      "brand.homeAria": "Pagina iniziale di Amirhossein Donyadidegan",
      "hero.actionsAria": "Azioni principali",
      "hero.visualAria": "Campo visivo tra territorio e osservazione della Terra",
      "hero.skillsAria": "Competenze principali",
      "target.tagsAria": "Ruoli target",
      "profile.thesisAria": "Temi della tesi",
      "profile.skillsAria": "Competenze del profilo",
      "skills.aria": "Gruppi di competenze tecniche",
      "projects.techAria": "Tecnologie",
      "projects.eoContextAria": "Contesto di osservazione della Terra",
      "education.focusAria": "Ambiti di studio",
      "alt.heroGround": "La scala centrale all'interno del Politecnico di Milano",
      "alt.heroOrbit": "Immagine satellitare ASTER di Venezia e della sua laguna",
      "alt.nl2map": "Prompt e mappe di edifici generalizzate che illustrano il flusso NL2Map",
      "alt.landsat":
        "Flusso LandsatToolkit per metadati, composizione delle bande, riproiezione e analisi degli indici",
      "alt.mendenhall": "Vista Landsat 8 del ghiacciaio Mendenhall",
      "alt.southFlorida": "Vista satellitare della Florida meridionale",
      "alt.landslide":
        "Concetto di suscettibilità alle frane con aree a rischio basso, medio e alto sulle curve di livello",
      "alt.layerAlterator":
        "Flusso raster LayerAlterator con una maschera vettoriale su immagini della Florida meridionale",
      "alt.se4g":
        "Dashboard geospaziale SE4G con una mappa mondiale, un grafico a barre e un grafico a linee",
      "alt.polimiCampus": "La facciata storica del Politecnico di Milano",
    },
  },
};

const getStoredTheme = () => {
  try {
    return window.localStorage.getItem("portfolio-theme-v2");
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    window.localStorage.setItem("portfolio-theme-v2", theme);
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

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem("portfolio-language", language);
  } catch {
    // Storage can be unavailable in strict browser modes.
  }
};

const getActiveLanguage = () => document.documentElement.lang || "en";

const themeLabels = {
  en: {
    light: "Switch to light mode",
    dark: "Switch to dark mode",
  },
  de: {
    light: "Zum hellen Modus wechseln",
    dark: "Zum dunklen Modus wechseln",
  },
  it: {
    light: "Passa alla modalità chiara",
    dark: "Passa alla modalità scura",
  },
};

const updateYear = () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
};

const updateThemeControl = (theme) => {
  if (!themeToggle) {
    return;
  }

  const isDark = theme === "dark";
  const language = getActiveLanguage();
  const labels = themeLabels[language] || themeLabels.en;
  const label = isDark ? labels.light : labels.dark;

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isDark ? "#071d2b" : "#f4f6f1");
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

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage] || {};

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.title || originalTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary.text?.[key] || originalText.get(key) || "";
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

  updateThemeControl(document.documentElement.dataset.theme || "light");
  updateYear();
  setStoredLanguage(selectedLanguage);
};

const setPageInert = (isInert) => {
  [pageMain, pageFooter].forEach((element) => {
    if (element) {
      element.inert = isInert;
    }
  });
};

const closeMobileNav = () => {
  navDrawer?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  setPageInert(false);
};

const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }

    event.preventDefault();
    closeMobileNav();
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
});

if (navToggle && navDrawer) {
  navToggle.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    setPageInert(isOpen);

    if (isOpen) {
      window.requestAnimationFrame(() => navLinks[0]?.focus());
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
    closeMobileNav();
    navToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    closeMobileNav();
  }
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-38% 0px -54% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

updateYear();
applyTheme(getStoredTheme() || document.documentElement.dataset.theme || "light", false);
applyLanguage(getStoredLanguage() || "en");
