import { localeOpenGraphTags, supportedLocales } from "../i18n/routing";
import type { Locale } from "../sections/Hero/hero.types";
import {
  absoluteLocalizedUrl,
  languageAlternates,
  openGraphLocale,
  robotsForRoute,
  seoPageForRoute,
  structuredDataForRoute,
} from "./seo.data";

function setMeta(selector: string, attribute: "content", value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute(attribute, value);
}

function updateLanguageAlternates(routePath: string) {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
  const canonical = document.querySelector('link[rel="canonical"]');

  languageAlternates(routePath).forEach(({ href, hrefLang }) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hrefLang;
    link.href = href;
    canonical?.before(link);
  });
}

function updateOpenGraphLocales(locale: Locale) {
  setMeta('meta[property="og:locale"]', "content", openGraphLocale(locale));
  document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((meta) => meta.remove());
  const localeMeta = document.querySelector('meta[property="og:locale"]');

  supportedLocales
    .filter((item) => item !== locale)
    .forEach((item) => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:locale:alternate");
      meta.content = localeOpenGraphTags[item];
      localeMeta?.after(meta);
    });
}

export function applySeo(locale: Locale, routePath: string) {
  const page = seoPageForRoute(locale, routePath);
  const canonical = absoluteLocalizedUrl(routePath, locale);

  document.documentElement.lang = locale;
  document.title = page.title;
  setMeta('meta[name="description"]', "content", page.description);
  setMeta('meta[name="robots"]', "content", robotsForRoute(routePath));
  setMeta('meta[property="og:title"]', "content", page.title);
  setMeta('meta[property="og:description"]', "content", page.description);
  setMeta('meta[property="og:url"]', "content", canonical);
  setMeta('meta[name="twitter:title"]', "content", page.title);
  setMeta('meta[name="twitter:description"]', "content", page.description);
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
  updateLanguageAlternates(routePath);
  updateOpenGraphLocales(locale);

  const structuredData = document.querySelector<HTMLScriptElement>("#structured-data");
  if (structuredData) {
    structuredData.textContent = JSON.stringify(structuredDataForRoute(locale, routePath));
  }
}
