import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { localeFromPath, localizedPath, routePathFromLocalized } from "./i18n/routing";
import { loadGsap } from "./motion/loadGsap";
import { applySeo } from "./seo/applySeo";
import { projectSlugFromRoute } from "./seo/seo.data";
import { HeroStory } from "./sections/Hero/HeroStory";
import type { Locale } from "./sections/Hero/hero.types";

const HomePage = lazy(() => import("./HomePage"));
const QuickCV = lazy(() =>
  import("./sections/QuickCV/QuickCV").then((module) => ({
    default: module.QuickCV,
  })),
);
const ProjectCaseStudy = lazy(() =>
  import("./sections/ProjectCaseStudy/ProjectCaseStudy").then((module) => ({
    default: module.ProjectCaseStudy,
  })),
);
const NotFound = lazy(() =>
  import("./sections/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  })),
);

const loadingLabels: Record<Locale, string> = {
  en: "Loading page",
  de: "Seite wird geladen",
  it: "Caricamento pagina",
};

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => localeFromPath(window.location.pathname));
  const preservedScrollRef = useRef<number | null>(null);
  const routePath = routePathFromLocalized(window.location.pathname);
  const projectSlug = projectSlugFromRoute(routePath);
  const isQuickCv = /^\/cv\/?$/.test(routePath);

  const changeLocale = useCallback((nextLocale: Locale) => {
    if (nextLocale === locale) return;

    preservedScrollRef.current = window.scrollY;
    const nextPath = localizedPath(routePathFromLocalized(window.location.pathname), nextLocale);
    window.history.replaceState(
      window.history.state,
      "",
      `${nextPath}${window.location.search}${window.location.hash}`,
    );
    setLocale(nextLocale);
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", locale);
    applySeo(locale, routePath);

    const preservedScroll = preservedScrollRef.current;
    if (preservedScroll === null) return;

    let active = true;
    const restoreAfterLayout = async () => {
      await document.fonts.ready;
      if (!active) return;

      if (routePath === "/") {
        const { ScrollTrigger } = await loadGsap();
        if (!active) return;
        ScrollTrigger.refresh();
      }

      window.requestAnimationFrame(() => {
        if (!active) return;
        const maximumScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo({ top: Math.min(preservedScroll, maximumScroll), behavior: "auto" });
        preservedScrollRef.current = null;
      });
    };

    void restoreAfterLayout();
    return () => {
      active = false;
    };
  }, [locale, routePath]);

  const fallback = <div className="route-loading" role="status" aria-label={loadingLabels[locale]} />;

  if (isQuickCv) {
    return (
      <Suspense fallback={fallback}>
        <QuickCV locale={locale} onLocaleChange={changeLocale} />
      </Suspense>
    );
  }

  if (projectSlug) {
    return (
      <Suspense fallback={fallback}>
        <ProjectCaseStudy locale={locale} onLocaleChange={changeLocale} slug={projectSlug} />
      </Suspense>
    );
  }

  if (routePath !== "/") {
    return (
      <Suspense fallback={fallback}>
        <NotFound locale={locale} onLocaleChange={changeLocale} />
      </Suspense>
    );
  }

  return (
    <main>
      <HeroStory locale={locale} onLocaleChange={changeLocale} />
      <Suspense fallback={fallback}>
        <HomePage locale={locale} />
      </Suspense>
    </main>
  );
}
