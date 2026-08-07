import { localeLanguageTags, localeOpenGraphTags, localizedPath, supportedLocales } from "../i18n/routing.ts";
import type { Locale } from "../sections/Hero/hero.types.ts";
import type { ProjectSlug } from "../sections/SelectedWork/selectedWork.types.ts";

export const siteOrigin = "https://amirdonyadide.com";

export interface SeoPageContent {
  description: string;
  entityName: string;
  title: string;
}

interface LocaleSeoContent {
  downloadCv: string;
  home: SeoPageContent;
  notFound: SeoPageContent;
  projects: Record<ProjectSlug, SeoPageContent>;
  quickCvLabel: string;
  quickCv: SeoPageContent;
  role: string;
  tagline: string;
}

export const seoContent: Record<Locale, LocaleSeoContent> = {
  en: {
    downloadCv: "Download CV",
    quickCvLabel: "Quick CV",
    role: "Geospatial Data & Software Engineer",
    tagline: "From coordinates to decisions.",
    home: {
      title: "Amirhossein Donyadidegan | Geospatial Data & Software Engineer",
      description: "Portfolio of Amirhossein Donyadidegan, a Geospatial Data & Software Engineer building spatial-data workflows, analysis, models, maps, dashboards, and software.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "Quick CV | Amirhossein Donyadidegan",
      description: "Recruiter-focused CV for Amirhossein Donyadidegan: current experience, career history, education, core technologies, selected geospatial projects, and contact details.",
      entityName: "Amirhossein Donyadidegan — Quick CV",
    },
    notFound: {
      title: "Page not found | Amirhossein Donyadidegan",
      description: "The requested portfolio page could not be found.",
      entityName: "Page not found",
    },
    projects: {
      nl2map: {
        title: "NL2MAP Case Study | Amirhossein Donyadidegan",
        description: "A research workflow connecting the language people use to describe visible map changes with structured cartographic generalization operations.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "SE4G Case Study | Amirhossein Donyadidegan",
        description: "A geospatial application that links prepared spatial data, API endpoints, interactive maps, tables, and plots in one dashboard.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Landslide Mapping Case Study | Amirhossein Donyadidegan",
        description: "A GIS and machine-learning workflow that combines terrain, land-cover, proximity, and inventory layers into a susceptibility surface and exposure analysis.",
        entityName: "AI-Based Landslide Susceptibility Mapping",
      },
    },
  },
  de: {
    downloadCv: "Lebenslauf herunterladen",
    quickCvLabel: "Kurzprofil",
    role: "Ingenieur für Geodaten und Software",
    tagline: "Von Koordinaten zu Entscheidungen.",
    home: {
      title: "Amirhossein Donyadidegan | Ingenieur für Geodaten und Software",
      description: "Portfolio von Amirhossein Donyadidegan: Geodaten-Engineering, räumliche Analysen, Modelle, Karten, Dashboards und nutzbare Software.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "Kurzprofil | Amirhossein Donyadidegan",
      description: "Recruiter-orientiertes Kurzprofil mit aktueller Position, Berufserfahrung, Ausbildung, Kerntechnologien, ausgewählten Geodatenprojekten und Kontaktdaten.",
      entityName: "Amirhossein Donyadidegan — Kurzprofil",
    },
    notFound: {
      title: "Seite nicht gefunden | Amirhossein Donyadidegan",
      description: "Die angeforderte Portfolio-Seite wurde nicht gefunden.",
      entityName: "Seite nicht gefunden",
    },
    projects: {
      nl2map: {
        title: "NL2MAP Fallstudie | Amirhossein Donyadidegan",
        description: "Ein Forschungsworkflow, der sprachliche Beschreibungen sichtbarer Kartenänderungen mit strukturierten kartografischen Generalisierungsoperationen verbindet.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "SE4G Fallstudie | Amirhossein Donyadidegan",
        description: "Eine Geodatenanwendung, die aufbereitete räumliche Daten, API-Endpunkte, interaktive Karten, Tabellen und Diagramme in einem Dashboard verbindet.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Hangrutschungskartierung Fallstudie | Amirhossein Donyadidegan",
        description: "Ein GIS- und Machine-Learning-Workflow, der Gelände-, Landbedeckungs-, Distanz- und Inventardaten zu einer Suszeptibilitätsfläche und Expositionsanalyse verbindet.",
        entityName: "AI-Based Landslide Susceptibility Mapping",
      },
    },
  },
  it: {
    downloadCv: "Scarica il CV",
    quickCvLabel: "CV rapido",
    role: "Ingegnere di dati geospaziali e software",
    tagline: "Dalle coordinate alle decisioni.",
    home: {
      title: "Amirhossein Donyadidegan | Ingegnere geospaziale e software",
      description: "Portfolio di Amirhossein Donyadidegan: data engineering geospaziale, analisi, modelli, mappe, dashboard e software utilizzabile.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "CV rapido | Amirhossein Donyadidegan",
      description: "CV rapido per recruiter con posizione attuale, esperienze, formazione, tecnologie principali, progetti geospaziali selezionati e contatti.",
      entityName: "Amirhossein Donyadidegan — CV rapido",
    },
    notFound: {
      title: "Pagina non trovata | Amirhossein Donyadidegan",
      description: "La pagina del portfolio richiesta non è stata trovata.",
      entityName: "Pagina non trovata",
    },
    projects: {
      nl2map: {
        title: "Caso studio NL2MAP | Amirhossein Donyadidegan",
        description: "Un workflow di ricerca che collega il linguaggio usato per descrivere i cambiamenti visibili tra mappe a operazioni strutturate di generalizzazione cartografica.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "Caso studio SE4G | Amirhossein Donyadidegan",
        description: "Un'applicazione geospaziale che collega dati preparati, endpoint API, mappe interattive, tabelle e grafici in una sola dashboard.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Caso studio sulla suscettibilità alle frane | Amirhossein Donyadidegan",
        description: "Un workflow GIS e machine learning che combina terreno, copertura del suolo, prossimità e inventario in una superficie di suscettibilità e un'analisi dell'esposizione.",
        entityName: "AI-Based Landslide Susceptibility Mapping",
      },
    },
  },
};

export function projectSlugFromRoute(routePath: string): ProjectSlug | null {
  const match = routePath.match(/^\/projects\/(nl2map|se4g|landslide)\/?$/);
  return match ? match[1] as ProjectSlug : null;
}

export function seoPageForRoute(locale: Locale, routePath: string): SeoPageContent {
  const projectSlug = projectSlugFromRoute(routePath);
  if (projectSlug) return seoContent[locale].projects[projectSlug];
  if (/^\/cv\/?$/.test(routePath)) return seoContent[locale].quickCv;
  if (routePath === "/") return seoContent[locale].home;
  return seoContent[locale].notFound;
}

export function isKnownPortfolioRoute(routePath: string): boolean {
  return routePath === "/" || /^\/cv\/?$/.test(routePath) || projectSlugFromRoute(routePath) !== null;
}

export function robotsForRoute(routePath: string): string {
  return isKnownPortfolioRoute(routePath) ? "index,follow" : "noindex,follow";
}

export function absoluteLocalizedUrl(routePath: string, locale: Locale): string {
  return new URL(localizedPath(routePath, locale), siteOrigin).href;
}

export function languageAlternates(routePath: string) {
  if (!isKnownPortfolioRoute(routePath)) return [];

  return [
    ...supportedLocales.map((locale) => ({
      href: absoluteLocalizedUrl(routePath, locale),
      hrefLang: localeLanguageTags[locale],
    })),
    { href: absoluteLocalizedUrl(routePath, "en"), hrefLang: "x-default" },
  ];
}

export function structuredDataForRoute(locale: Locale, routePath: string) {
  const canonical = absoluteLocalizedUrl(routePath, locale);
  const projectSlug = projectSlugFromRoute(routePath);

  if (projectSlug) {
    const page = seoContent[locale].projects[projectSlug];
    const person = {
      "@id": `${siteOrigin}/#person`,
      "@type": "Person",
      name: "Amirhossein Donyadidegan",
    };
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: page.entityName,
      description: page.description,
      url: canonical,
      inLanguage: localeLanguageTags[locale],
      ...(projectSlug === "nl2map" ? { author: person } : { contributor: person }),
    };
  }

  if (!isKnownPortfolioRoute(routePath)) {
    const page = seoContent[locale].notFound;
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.entityName,
      description: page.description,
      url: canonical,
      inLanguage: localeLanguageTags[locale],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteOrigin}/#person`,
    name: "Amirhossein Donyadidegan",
    url: `${siteOrigin}/`,
    mainEntityOfPage: canonical,
    jobTitle: seoContent[locale].role,
    email: "mailto:donyadideganamir@gmail.com",
    sameAs: [
      "https://github.com/AmirDonyadide",
      "https://www.linkedin.com/in/amirhossein-donyadidegan/",
    ],
  };
}

export function openGraphLocale(locale: Locale): string {
  return localeOpenGraphTags[locale];
}
