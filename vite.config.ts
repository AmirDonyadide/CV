import { copyFileSync, cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { localeOpenGraphTags, localizedPath, supportedLocales } from "./src/i18n/routing.ts";
import type { Locale } from "./src/sections/Hero/hero.types.ts";
import {
  absoluteLocalizedUrl,
  languageAlternates,
  seoContent,
  seoPageForRoute,
  robotsForRoute,
  structuredDataForRoute,
} from "./src/seo/seo.data.ts";

const pageRoutes = [
  "/",
  "/cv",
  "/projects/nl2map",
  "/projects/se4g",
  "/projects/landslide",
] as const;

function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function localizedRouteHtml(
  indexHtml: string,
  routePath: string,
  locale: Locale,
  routeResources = "",
): string {
  const metadata = seoPageForRoute(locale, routePath);
  const canonical = absoluteLocalizedUrl(routePath, locale);
  const alternates = languageAlternates(routePath)
    .map(({ href, hrefLang }) => `    <link rel="alternate" hreflang="${hrefLang}" href="${href}" />`)
    .join("\n");
  const openGraphAlternates = supportedLocales
    .filter((item) => item !== locale)
    .map((item) => `    <meta property="og:locale:alternate" content="${localeOpenGraphTags[item]}" />`)
    .join("\n");
  const localizedQuickCv = localizedPath("/cv", locale);
  const localeCopy = seoContent[locale];

  return indexHtml
    .replace("</head>", `${routeResources}  </head>`)
    .replace(/<html\s+lang="[^"]*">/, `<html lang="${locale}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${escapeAttribute(metadata.description)}" />`,
    )
    .replace(
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="robots" content="${robotsForRoute(routePath)}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(/\s*<meta\s+property="og:locale(?::alternate)?"\s+content="[\s\S]*?"\s*\/>/g, "")
    .replace(
      /(<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>)/,
      `$1\n    <meta property="og:locale" content="${localeOpenGraphTags[locale]}" />\n${openGraphAlternates}`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:title" content="${escapeAttribute(metadata.title)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:description" content="${escapeAttribute(metadata.description)}" />`,
    )
    .replace(/\s*<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"\s*\/>/g, "")
    .replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/,
      `${alternates}\n    <link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<script\s+id="structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredDataForRoute(locale, routePath))}</script>`,
    )
    .replace(
      /(<p\s+data-noscript-role[^>]*>)[\s\S]*?(<\/p>)/,
      `$1${escapeAttribute(localeCopy.role)}$2`,
    )
    .replace(
      /(<p\s+data-noscript-tagline[^>]*>)[\s\S]*?(<\/p>)/,
      `$1${escapeAttribute(localeCopy.tagline)}$2`,
    )
    .replace(
      /(<a\s+data-noscript-download[^>]*>)[\s\S]*?(<\/a>)/,
      `$1${escapeAttribute(localeCopy.downloadCv)}$2`,
    )
    .replace(
      /(<a\s+data-noscript-quick-cv\s+href=")[^"]*("[^>]*>)[\s\S]*?(<\/a>)/,
      `$1${localizedQuickCv}$2${escapeAttribute(localeCopy.quickCvLabel)}$3`,
    );
}

function routeResourceLinks(assetFiles: string[], routePath: string): string {
  if (routePath === "/") return "";

  const entryPrefix = /^\/cv\/?$/.test(routePath)
    ? "QuickCV-"
    : "ProjectCaseStudy-";
  const script = assetFiles.find((file) => file.startsWith(entryPrefix) && file.endsWith(".js"));
  const stylesheet = assetFiles.find((file) => file.startsWith(entryPrefix) && file.endsWith(".css"));

  return [
    stylesheet ? `    <link rel="stylesheet" href="/assets/${stylesheet}" />` : "",
    script ? `    <link rel="modulepreload" href="/assets/${script}" />` : "",
  ].filter(Boolean).join("\n").concat("\n");
}

function outputFileForRoute(routePath: string, locale: Locale): string {
  const localized = localizedPath(routePath, locale);
  if (localized === "/") return resolve("dist/index.html");
  const routeDirectory = resolve("dist", localized.replace(/^\/+|\/+$/g, ""));
  mkdirSync(routeDirectory, { recursive: true });
  return resolve(routeDirectory, "index.html");
}

function createSitemap(): string {
  const urlEntries = pageRoutes.flatMap((routePath) => {
    const alternates = languageAlternates(routePath)
      .map(({ href, hrefLang }) => `    <xhtml:link rel="alternate" hreflang="${hrefLang}" href="${href}" />`)
      .join("\n");

    return supportedLocales.map((locale) => [
      "  <url>",
      `    <loc>${absoluteLocalizedUrl(routePath, locale)}</loc>`,
      alternates,
      "  </url>",
    ].join("\n"));
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries,
    "</urlset>",
    "",
  ].join("\n");
}

function copyPortfolioFiles(): Plugin {
  return {
    name: "copy-portfolio-files",
    closeBundle() {
      const outputAssets = resolve("dist/assets");
      mkdirSync(outputAssets, { recursive: true });
      cpSync(resolve("assets/fonts"), resolve(outputAssets, "fonts"), { recursive: true });
      cpSync(
        resolve("assets/projects/evidence"),
        resolve(outputAssets, "projects/evidence"),
        {
          recursive: true,
          filter: (source) => !source.endsWith("SOURCES.md"),
        },
      );
      copyFileSync(
        resolve("assets/amirhossein-donyadidegan-cv.pdf"),
        resolve(outputAssets, "amirhossein-donyadidegan-cv.pdf"),
      );
      copyFileSync(resolve("CNAME"), resolve("dist/CNAME"));
      writeFileSync(resolve("dist/.nojekyll"), "");

      const fontPreloads = [
        '<link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />',
        '<link rel="preload" href="/assets/fonts/geologica-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />',
      ].join("\n    ");
      const indexHtml = readFileSync(resolve("dist/index.html"), "utf8")
        .replace("</head>", `    ${fontPreloads}\n  </head>`);
      const assetFiles = readdirSync(resolve("dist/assets"));
      pageRoutes.forEach((routePath) => {
        const routeResources = routeResourceLinks(assetFiles, routePath);
        supportedLocales.forEach((locale) => {
          writeFileSync(
            outputFileForRoute(routePath, locale),
            localizedRouteHtml(indexHtml, routePath, locale, routeResources),
          );
        });
      });

      const notFoundHtml = localizedRouteHtml(
        indexHtml,
        "/404",
        "en",
        routeResourceLinks(assetFiles, "/"),
      );
      writeFileSync(resolve("dist/404.html"), notFoundHtml);
      writeFileSync(resolve("dist/sitemap.xml"), createSitemap());
      writeFileSync(
        resolve("dist/robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: https://amirdonyadide.com/sitemap.xml\n`,
      );
    },
  };
}

function inlineCriticalStyles(): Plugin {
  return {
    name: "inline-critical-styles",
    enforce: "pre",
    transformIndexHtml(html) {
      const globalStyles = readFileSync(resolve("src/styles/global.css"), "utf8");
      return html.replace("</head>", `    <style data-critical>${globalStyles}</style>\n  </head>`);
    },
  };
}

export default defineConfig({
  plugins: [inlineCriticalStyles(), react(), copyPortfolioFiles()],
  publicDir: false,
  build: {
    target: "es2022",
    cssCodeSplit: true,
    sourcemap: false,
  },
});
