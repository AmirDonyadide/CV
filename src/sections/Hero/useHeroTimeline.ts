import { useCallback, useEffect, useRef } from "react";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";
import { loadGsap } from "../../motion/loadGsap";

interface UseHeroTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
  viewportRef: React.RefObject<HTMLDivElement | null>;
}

interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData?: boolean;
  };
}

const layerSelectors = {
  coordinate: "[data-layer='coordinate']",
  points: "[data-layer='points']",
  grid: "[data-layer='grid']",
  layers: "[data-layer='layers']",
  data: "[data-layer='data']",
  model: "[data-layer='model']",
  system: "[data-layer='system']",
  arrows: "[data-layer='arrows']",
} as const;

export function useHeroTimeline({ sectionRef, viewportRef }: UseHeroTimelineOptions) {
  const triggerRef = useRef<ScrollTriggerInstance | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    if (!section || !viewport) return;

    let active = true;
    let disposeAnimation = () => {};
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);
    const activate = async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (!active || section.dataset.motionMode === "static") return;

      const matchMedia = gsap.matchMedia();
      const context = gsap.context(() => {
      const select = gsap.utils.selector(section);
      const identity = select("[data-hero-identity]");
      const actions = select("[data-hero-actions] > *");
      const stageShell = select("[data-stage-shell]");
      const labels = select("[data-state-label]");
      const points = select("[data-point]");
      const gridLines = select("[data-grid-line]");
      const vectorPaths = select("[data-vector-path]");
      const rasterCells = select("[data-raster-cell]");
      const dataRows = select("[data-data-row]");
      const modelEdges = select("[data-model-edge]");
      const modelNodes = select("[data-model-node]");
      const layers: Record<keyof typeof layerSelectors, Element[]> = {
        coordinate: select(layerSelectors.coordinate),
        points: select(layerSelectors.points),
        grid: select(layerSelectors.grid),
        layers: select(layerSelectors.layers),
        data: select(layerSelectors.data),
        model: select(layerSelectors.model),
        system: select(layerSelectors.system),
        arrows: select(layerSelectors.arrows),
      };

      const showStaticFinal = () => {
        section.dataset.motionMode = "static";
        gsap.set(Object.values(layers).flat(), { clearProps: "all" });
        gsap.set([identity, actions, stageShell].flat(), { clearProps: "all" });
        gsap.set(labels, { autoAlpha: 0 });
        gsap.set(labels.at(-1) ?? [], { autoAlpha: 1 });
      };

      matchMedia.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          short: "(max-height: 559px)",
          desktop: "(min-width: 1200px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)",
          tablet: "(min-width: 768px) and (max-width: 1199px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)",
        },
        (mediaContext) => {
          const conditions = mediaContext.conditions;
          if (!conditions || conditions.reduced || conditions.short || saveData) {
            showStaticFinal();
            return;
          }

          const isDesktop = Boolean(conditions.desktop);
          const isTablet = Boolean(conditions.tablet);
          const distanceFactor = isDesktop ? 3.4 : isTablet ? 2.2 : 0.9;
          section.dataset.motionMode = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

          gsap.set(Object.values(layers).flat(), { autoAlpha: 0, transformOrigin: "center center" });
          gsap.set(layers.coordinate, { autoAlpha: 1, x: isDesktop ? 590 : 470, scale: 1.18 });
          gsap.set(layers.points, { x: isDesktop ? 420 : 330, scale: 0.72 });
          gsap.set(layers.grid, { x: isDesktop ? 215 : 120, scale: 0.78 });
          gsap.set(layers.layers, { x: 35, scale: 0.82 });
          gsap.set(layers.data, { x: -145, scale: 0.88 });
          gsap.set(layers.model, { x: -330, scale: 0.92 });
          gsap.set(layers.system, { x: -500, scale: 0.62 });
          gsap.set(points, { autoAlpha: 0, scale: 0.2, transformOrigin: "center center" });
          gsap.set(gridLines, { strokeDasharray: 220, strokeDashoffset: 220 });
          gsap.set(vectorPaths, { strokeDasharray: 420, strokeDashoffset: 420 });
          gsap.set(rasterCells, { autoAlpha: 0, scale: 0.35, transformOrigin: "center center" });
          gsap.set(dataRows, { autoAlpha: 0, x: -16 });
          gsap.set(modelEdges, { strokeDasharray: 160, strokeDashoffset: 160 });
          gsap.set(modelNodes, { autoAlpha: 0, scale: 0.2, transformOrigin: "center center" });
          gsap.set(labels, { autoAlpha: 0 });
          gsap.set(labels[0], { autoAlpha: 1 });

          const timeline = gsap.timeline({ defaults: { ease: "none" } });

          timeline
            .to(points, { autoAlpha: 0.82, scale: 1, duration: 0.11, stagger: { each: 0.0015, from: "center" } }, 0.04)
            .to(layers.points, { autoAlpha: 1, scale: 1, duration: 0.12 }, 0.05)
            .to(layers.coordinate, { autoAlpha: 0.72, scale: 1, duration: 0.08 }, 0.15)
            .to(layers.grid, { autoAlpha: 1, scale: 1, duration: 0.12 }, 0.19)
            .to(gridLines, { strokeDashoffset: 0, duration: 0.12, stagger: 0.002 }, 0.19)
            .to(layers.points, { autoAlpha: 0.68, duration: 0.07 }, 0.27)
            .to(layers.layers, { autoAlpha: 1, scale: 1, duration: 0.12 }, 0.31)
            .to(vectorPaths, { strokeDashoffset: 0, duration: 0.12, stagger: 0.015 }, 0.31)
            .to(rasterCells, { autoAlpha: 0.68, scale: 1, duration: 0.11, stagger: 0.004 }, 0.34)
            .to(layers.grid, { autoAlpha: 0.42, duration: 0.08 }, 0.41)
            .to(layers.data, { autoAlpha: 1, scale: 1, duration: 0.12 }, 0.44)
            .to(dataRows, { autoAlpha: 1, x: 0, duration: 0.09, stagger: 0.012 }, 0.45)
            .to(layers.layers, { autoAlpha: 0.58, duration: 0.08 }, 0.5)
            .to(layers.model, { autoAlpha: 1, scale: 1, duration: 0.12 }, 0.54)
            .to(modelNodes, { autoAlpha: 1, scale: 1, duration: 0.08, stagger: 0.008 }, 0.54)
            .to(modelEdges, { strokeDashoffset: 0, duration: 0.11, stagger: 0.004 }, 0.57)
            .to(layers.data, { autoAlpha: 0.62, duration: 0.08 }, 0.62)
            .to(layers.system, { autoAlpha: 1, scale: 1, duration: 0.14 }, 0.66)
            .to(layers.model, { autoAlpha: 0.58, duration: 0.08 }, 0.72)
            .to(stageShell, { xPercent: isDesktop ? -5 : 0, yPercent: -4, scale: isDesktop ? 0.94 : 0.88, duration: 0.12 }, 0.75)
            .to(layers.system, { autoAlpha: 1, x: isDesktop ? -180 : -260, scale: 1.08, duration: 0.1 }, 0.76)
            .to(Object.values(layers).flat(), { x: 0, y: 0, scale: 1, duration: 0.1 }, 0.86)
            .to(layers.coordinate, { autoAlpha: 0.24, duration: 0.08 }, 0.86)
            .to(layers.points, { autoAlpha: 0.24, duration: 0.08 }, 0.86)
            .to(layers.grid, { autoAlpha: 0.3, duration: 0.08 }, 0.86)
            .to(layers.layers, { autoAlpha: 0.3, duration: 0.08 }, 0.86)
            .to(layers.data, { autoAlpha: 0.2, duration: 0.08 }, 0.86)
            .to(layers.model, { autoAlpha: 0.28, duration: 0.08 }, 0.86)
            .to(layers.system, { autoAlpha: 0.56, duration: 0.08 }, 0.86)
            .to(layers.arrows, { autoAlpha: 0.44, duration: 0.08 }, 0.86)
            .to(stageShell, { xPercent: 0, yPercent: 0, y: isDesktop ? -32 : 0, scale: 1, duration: 0.1 }, 0.86)
            .to({}, { duration: 0.04 });

          const labelTimes = [0, 0.09, 0.22, 0.34, 0.46, 0.57, 0.69, isDesktop ? 0.9 : 0.74];
          labelTimes.slice(1).forEach((time, index) => {
            timeline.to(labels[index], { autoAlpha: 0, duration: 0.015 }, time - 0.01);
            timeline.to(labels[index + 1], { autoAlpha: 1, duration: 0.015 }, time);
          });

          triggerRef.current = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * distanceFactor)}`,
            animation: timeline,
            pin: viewport,
            pinSpacing: true,
            scrub: isDesktop ? 0.65 : 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          return () => {
            triggerRef.current = null;
            timeline.kill();
          };
        },
      );
      }, section);

      document.fonts.ready.then(() => {
        if (active) ScrollTrigger.refresh();
      });

      disposeAnimation = () => {
        triggerRef.current = null;
        matchMedia.revert();
        context.revert();
      };
    };

    let motionStarted = false;
    let delayedActivation: number | undefined;
    const startMotion = () => {
      if (motionStarted) return;
      motionStarted = true;
      if (delayedActivation !== undefined) window.clearTimeout(delayedActivation);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startMotion);
      });
      void activate();
    };
    const interactionEvents = ["wheel", "touchstart", "keydown"] as const;
    const staticExperienceRequested = window.matchMedia("(prefers-reduced-motion: reduce), (max-height: 559px)").matches || saveData;

    if (staticExperienceRequested) {
      startMotion();
    } else {
      delayedActivation = window.setTimeout(startMotion, 2200);
      interactionEvents.forEach((eventName) => {
        window.addEventListener(eventName, startMotion, { passive: true, once: true });
      });
    }

    return () => {
      active = false;
      if (delayedActivation !== undefined) window.clearTimeout(delayedActivation);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startMotion);
      });
      disposeAnimation();
    };
  }, [sectionRef, viewportRef]);

  return useCallback((hash = "hero-title") => {
    const trigger = triggerRef.current;
    const isIdentityRequest = hash === "hero-title";
    if (!trigger && sectionRef.current) {
      sectionRef.current.dataset.motionMode = "static";
    }
    const requestedTarget = document.getElementById(hash);
    if (isIdentityRequest && trigger) {
      window.scrollTo({ top: trigger.end - 1, behavior: "auto" });
    } else if (requestedTarget) {
      requestedTarget.scrollIntoView({ block: "start", behavior: "auto" });
    } else {
      window.scrollTo({
        top: trigger ? trigger.end - 1 : sectionRef.current?.offsetTop ?? 0,
        behavior: "auto",
      });
    }
    window.history.replaceState(null, "", `#${hash}`);
    const focusDestination = () => {
      const target = document.getElementById(hash);
      const destinationHeading = target?.matches("h1, h2")
        ? target
        : target?.querySelector<HTMLElement>("h1, h2") ?? target;
      (destinationHeading ?? document.getElementById("hero-title"))?.focus({ preventScroll: true });
    };
    window.requestAnimationFrame(focusDestination);
    window.setTimeout(focusDestination, 50);
  }, [sectionRef]);
}
