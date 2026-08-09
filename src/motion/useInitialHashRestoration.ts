import { useLayoutEffect } from "react";
import { loadGsap } from "./loadGsap";

const STORAGE_PREFIX = "portfolio:hash-scroll:";

function storageKey(locationKey: string) {
  return `${STORAGE_PREFIX}${window.location.pathname}${locationKey}`;
}

function readStoredScroll(locationKey: string) {
  try {
    const storedValue = window.sessionStorage.getItem(storageKey(locationKey));
    if (storedValue === null) return null;

    const value = Number(storedValue);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

function storeCurrentScroll() {
  try {
    const locationKey = window.location.hash || "#document";
    window.sessionStorage.setItem(storageKey(locationKey), String(window.scrollY));
  } catch {
    // Scroll restoration remains functional at the section start when storage is unavailable.
  }
}

function isReloadNavigation() {
  const entry = window.performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return entry?.type === "reload";
}

function waitForHeroLayout(signal: AbortSignal) {
  if (signal.aborted) return Promise.resolve();

  const hero = document.getElementById("hero");
  if (!hero || hero.dataset.motionMode) return Promise.resolve();

  return new Promise<void>((resolve) => {
    const finish = () => {
      observer.disconnect();
      signal.removeEventListener("abort", finish);
      resolve();
    };
    const observer = new MutationObserver(() => {
      if (hero.dataset.motionMode) finish();
    });

    observer.observe(hero, { attributes: true, attributeFilter: ["data-motion-mode"] });
    signal.addEventListener("abort", finish, { once: true });
  });
}

export function useInitialHashRestoration() {
  useLayoutEffect(() => {
    const initialHash = window.location.hash;
    const targetId = decodeURIComponent(initialHash.slice(1));
    const locationKey = initialHash || "#document";
    const storedScroll = isReloadNavigation() ? readStoredScroll(locationKey) : null;
    const shouldRestore = Boolean(targetId) || storedScroll !== null;
    const previousRestorationMode = window.history.scrollRestoration;
    const abortController = new AbortController();
    let active = true;
    let firstFrame: number | undefined;
    let secondFrame: number | undefined;

    window.addEventListener("pagehide", storeCurrentScroll);

    if (shouldRestore) {
      window.history.scrollRestoration = "manual";

      const restoreAfterLayout = async () => {
        await document.fonts.ready;
        await waitForHeroLayout(abortController.signal);
        if (!active) return;

        const { ScrollTrigger } = await loadGsap();
        if (!active) return;

        ScrollTrigger.refresh();
        const restore = () => {
          if (!active) return;

          const target = targetId ? document.getElementById(targetId) : null;
          if (targetId && !target) return;

          let requestedScroll = storedScroll ?? 0;
          if (target) {
            const targetRect = target.getBoundingClientRect();
            const targetTop = targetRect.top + window.scrollY;
            const targetBottom = targetTop + targetRect.height;
            const canRestoreExactPosition =
              storedScroll !== null && storedScroll >= targetTop && storedScroll < targetBottom;
            requestedScroll = canRestoreExactPosition ? storedScroll : targetTop;
          }
          const maximumScroll = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight,
          );

          window.scrollTo({
            top: Math.min(requestedScroll, maximumScroll),
            behavior: "auto",
          });
          ScrollTrigger.update();
        };

        firstFrame = window.requestAnimationFrame(() => {
          restore();
          secondFrame = window.requestAnimationFrame(restore);
        });
      };

      void restoreAfterLayout();
    }

    return () => {
      active = false;
      abortController.abort();
      if (shouldRestore) window.history.scrollRestoration = previousRestorationMode;
      window.removeEventListener("pagehide", storeCurrentScroll);
      if (firstFrame !== undefined) window.cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) window.cancelAnimationFrame(secondFrame);
    };
  }, []);
}
