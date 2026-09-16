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
    tagline: "I build spatial data pipelines, models, and WebGIS applications.",
    home: {
      title: "Amirhossein Donyadidegan | Geospatial Data & Software Engineer",
      description: "Amirhossein Donyadidegan — geospatial data pipelines, machine learning, and WebGIS. Explore projects, research, and experience.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "Quick CV | Amirhossein Donyadidegan",
      description: "Amirhossein Donyadidegan: experience, education, stack, and geospatial projects. Download the full CV.",
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
        description: "Infer cartographic operations from descriptions of building-map changes, using a public comparison study, text features, and classification.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "SE4G Case Study | Amirhossein Donyadidegan",
        description: "Explore hydrogeological indicators and Olympic venues by municipality in a Dash application backed by PostGIS and Flask.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Landslide Mapping Case Study | Amirhossein Donyadidegan",
        description: "Random Forest landslide-susceptibility mapping for Bergamo, combining terrain, vegetation, land use, proximity, and inventory data. Outputs include susceptibility maps, population exposure, and WebGIS.",
        entityName: "AI-Based Landslide Susceptibility Mapping",
      },
    },
  },
  de: {
    downloadCv: "Lebenslauf herunterladen",
    quickCvLabel: "Kurzprofil",
    role: "Ingenieur für Geodaten und Software",
    tagline: "Ich entwickle Geodaten-Pipelines, Modelle und WebGIS-Anwendungen.",
    home: {
      title: "Amirhossein Donyadidegan | Ingenieur für Geodaten und Software",
      description: "Amirhossein Donyadidegan — Geodaten-Pipelines, Machine Learning und WebGIS. Projekte, Forschung und Erfahrung.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "Kurzprofil | Amirhossein Donyadidegan",
      description: "Amirhossein Donyadidegan: Erfahrung, Ausbildung, Stack und Geodatenprojekte. Vollständigen Lebenslauf herunterladen.",
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
        description: "Generalisierungsoperationen aus Beschreibungen von Kartenänderungen ableiten: öffentliche Vergleichsstudie, Textmerkmale und Klassifikation.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "SE4G Fallstudie | Amirhossein Donyadidegan",
        description: "Hydrogeologische Indikatoren und Olympia-Standorte je Gemeinde erkunden: Dash-Anwendung mit PostGIS und Flask.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Hangrutschungskartierung Fallstudie | Amirhossein Donyadidegan",
        description: "Hangrutschungssuszeptibilität in Bergamo mit Random Forest kartieren: Gelände, Vegetation, Landnutzung, Distanzen und Inventardaten. Ergebnisse: Suszeptibilitätskarten, Bevölkerungsexposition und WebGIS.",
        entityName: "AI-Based Landslide Susceptibility Mapping",
      },
    },
  },
  it: {
    downloadCv: "Scarica il CV",
    quickCvLabel: "CV rapido",
    role: "Ingegnere di dati geospaziali e software",
    tagline: "Sviluppo pipeline geospaziali, modelli e applicazioni WebGIS.",
    home: {
      title: "Amirhossein Donyadidegan | Ingegnere geospaziale e software",
      description: "Amirhossein Donyadidegan — pipeline geospaziali, machine learning e WebGIS. Progetti, ricerca ed esperienza.",
      entityName: "Amirhossein Donyadidegan",
    },
    quickCv: {
      title: "CV rapido | Amirhossein Donyadidegan",
      description: "Amirhossein Donyadidegan: esperienza, formazione, stack e progetti geospaziali. Scarica il CV completo.",
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
        description: "Inferire operazioni cartografiche dalle descrizioni di variazioni nelle mappe di edifici: studio comparativo pubblico, feature testuali e classificazione.",
        entityName: "Inferring Map Generalization Operations from User Prompts",
      },
      se4g: {
        title: "Caso studio SE4G | Amirhossein Donyadidegan",
        description: "Esplorare indicatori idrogeologici e sedi olimpiche per comune in un’applicazione Dash con PostGIS e Flask.",
        entityName: "Geoinformatics Data Visualization Dashboard",
      },
      landslide: {
        title: "Caso studio sulla suscettibilità alle frane | Amirhossein Donyadidegan",
        description: "Suscettibilità alle frane a Bergamo con Random Forest: terreno, vegetazione, uso del suolo, prossimità e inventario. Output: mappe di suscettibilità, esposizione della popolazione e WebGIS.",
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
