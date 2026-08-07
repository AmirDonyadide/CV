import type { Locale } from "../sections/Hero/hero.types.ts";

export const supportedLocales: Locale[] = ["en", "de", "it"];

export const localeLanguageTags: Record<Locale, string> = {
  en: "en",
  de: "de",
  it: "it",
};

export const localeOpenGraphTags: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  it: "it_IT",
};

export function localeFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(de|it)(?:\/|$)/);
  return match ? match[1] as Locale : "en";
}

export function routePathFromLocalized(pathname: string): string {
  const withoutLocale = pathname.replace(/^\/(?:de|it)(?=\/|$)/, "");
  if (!withoutLocale || withoutLocale === "/") return "/";
  const withLeadingSlash = withoutLocale.startsWith("/") ? withoutLocale : `/${withoutLocale}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function localizedPath(routePath: string, locale: Locale): string {
  const normalizedRoute = routePathFromLocalized(routePath);
  if (locale === "en") return normalizedRoute;
  return normalizedRoute === "/" ? `/${locale}/` : `/${locale}${normalizedRoute}`;
}

export function localizedHref(href: string, locale: Locale): string {
  const match = href.match(/^([^?#]*)([?#].*)?$/);
  if (!match) return href;
  return `${localizedPath(match[1] || "/", locale)}${match[2] ?? ""}`;
}
