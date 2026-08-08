import { useCallback, useEffect, useRef } from "react";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";
import { loadGsap, loadScrollGsap } from "../../motion/loadGsap";
import type { HeroNavigationTarget } from "./hero.types";

interface UseHeroTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
  viewportRef: React.RefObject<HTMLDivElement | null>;
}

interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData?: boolean;
  };
}

interface KillableTween {
  kill: () => void;
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

type VisualStateKey = Exclude<keyof typeof layerSelectors, "arrows">;

interface StateLayout {
  key: VisualStateKey;
  origin: readonly [number, number];
  activeX: number;
  activeScale: number;
  historyX: number;
  historyScale: number;
  historyOpacity: number;
  overviewX: number;
  overviewScale: number;
  overviewOpacity: number;
}

const stateLayouts: readonly StateLayout[] = [
  { key: "coordinate", origin: [128, 372], activeX: 672, activeScale: 1.18, historyX: 12, historyScale: 0.72, historyOpacity: 0.38, overviewX: -10, overviewScale: 0.72, overviewOpacity: 0.52 },
  { key: "points", origin: [391, 372], activeX: 409, activeScale: 1, historyX: -116, historyScale: 0.58, historyOpacity: 0.4, overviewX: -10, overviewScale: 0.58, overviewOpacity: 0.48 },
  { key: "grid", origin: [632, 372], activeX: 168, activeScale: 1, historyX: -227, historyScale: 0.66, historyOpacity: 0.42, overviewX: -15, overviewScale: 0.66, overviewOpacity: 0.56 },
  { key: "layers", origin: [766, 381], activeX: 34, activeScale: 1, historyX: -246, historyScale: 0.62, historyOpacity: 0.44, overviewX: 25, overviewScale: 0.62, overviewOpacity: 0.58 },
  { key: "data", origin: [955, 375], activeX: -155, activeScale: 1, historyX: -335, historyScale: 0.66, historyOpacity: 0.48, overviewX: 75, overviewScale: 0.66, overviewOpacity: 0.6 },
  { key: "model", origin: [1023, 363], activeX: -223, activeScale: 1, historyX: -293, historyScale: 0.64, historyOpacity: 0.52, overviewX: 205, overviewScale: 0.64, overviewOpacity: 0.65 },
  { key: "system", origin: [1356, 381], activeX: -376, activeScale: 1.03, historyX: -376, historyScale: 1.03, historyOpacity: 1, overviewX: 180, overviewScale: 0.82, overviewOpacity: 0.92 },
];

const STATE_HOLD = 0.26;
const HANDOFF_DURATION = 0.78;
const INCOMING_OFFSET = 64;

const scaleTransform = ([x, y]: readonly [number, number], scale: number) =>
  `translate(${x} ${y}) scale(${scale}) translate(${-x} ${-y})`;

export function useHeroTimeline({ sectionRef, viewportRef }: UseHeroTimelineOptions) {
  const triggerRef = useRef<ScrollTriggerInstance | null>(null);
  const navigationTweenRef = useRef<KillableTween | null>(null);
  const navigationRequestRef = useRef(0);

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
        const artwork: Record<VisualStateKey, Element[]> = {
          coordinate: select("[data-state-artwork='coordinate']"),
          points: select("[data-state-artwork='points']"),
          grid: select("[data-state-artwork='grid']"),
          layers: select("[data-state-artwork='layers']"),
          data: select("[data-state-artwork='data']"),
          model: select("[data-state-artwork='model']"),
          system: select("[data-state-artwork='system']"),
        };
        const visualLayers = stateLayouts.flatMap(({ key }) => layers[key]);
        const artworkLayers = stateLayouts.flatMap(({ key }) => artwork[key]);
        const internalArtwork = [points, gridLines, vectorPaths, rasterCells, dataRows, modelEdges, modelNodes].flat();

        const showStaticFinal = () => {
          section.dataset.motionMode = "static";
          gsap.set([...visualLayers, ...artworkLayers, ...layers.arrows, ...internalArtwork, ...stageShell], { clearProps: "all" });
          gsap.set(artworkLayers, { attr: { transform: "" } });
          gsap.set(labels, { autoAlpha: 0, scale: 0.8, clearProps: "transformOrigin" });
          gsap.set(labels.at(-1) ?? [], { autoAlpha: 1, scale: 1 });
        };

        matchMedia.add(
          {
            reduced: "(prefers-reduced-motion: reduce)",
            short: "(max-height: 559px)",
            desktop: "(min-width: 1200px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)",
            compactDesktop: "(min-width: 1200px) and (min-height: 560px) and (max-height: 649px) and (prefers-reduced-motion: no-preference)",
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
            const isCompactDesktop = Boolean(conditions.compactDesktop);
            const isTablet = Boolean(conditions.tablet);
            const isMobile = Boolean(conditions.mobile);
            const distanceFactor = isDesktop ? 3.6 : isCompactDesktop ? 1.8 : isTablet ? 2.35 : 1.25;
            const systemActiveX = isMobile ? -556 : stateLayouts.at(-1)?.activeX ?? -376;
            const overviewStageScale = isMobile ? 0.46 : isTablet ? 0.92 : 1;
            section.dataset.motionMode = isDesktop || isCompactDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

            gsap.set(visualLayers, { autoAlpha: 0, x: 0 });
            stateLayouts.forEach((state, index) => {
              const activeX = state.key === "system" ? systemActiveX : state.activeX;
              gsap.set(layers[state.key], {
                x: index === 0 ? activeX : activeX + INCOMING_OFFSET,
              });
              gsap.set(artwork[state.key], {
                attr: { transform: scaleTransform(state.origin, index === 0 ? state.activeScale : state.activeScale * 0.8) },
              });
            });
            gsap.set(layers.coordinate, { autoAlpha: 1 });
            gsap.set(layers.arrows, { autoAlpha: 0 });
            gsap.set(stageShell, { x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, transformOrigin: "center center" });
            gsap.set(points, { autoAlpha: 0, scale: 0.2, transformOrigin: "center center" });
            gsap.set(gridLines, { strokeDasharray: 220, strokeDashoffset: 220 });
            gsap.set(vectorPaths, { strokeDasharray: 420, strokeDashoffset: 420 });
            gsap.set(rasterCells, { autoAlpha: 0, scale: 0.35, transformOrigin: "center center" });
            gsap.set(dataRows, { autoAlpha: 0, x: -16 });
            gsap.set(modelEdges, { strokeDasharray: 160, strokeDashoffset: 160 });
            gsap.set(modelNodes, { autoAlpha: 0, scale: 0.2, transformOrigin: "center center" });
            gsap.set(labels, { autoAlpha: 0, scale: 0.8, transformOrigin: "right center" });
            gsap.set(labels[0], { autoAlpha: 1, scale: 1 });

            const timeline = gsap.timeline({ defaults: { ease: "none" } });

            const revealArtwork = (key: VisualStateKey, at: number) => {
              switch (key) {
                case "points":
                  timeline.to(points, { autoAlpha: 0.82, scale: 1, duration: 0.34, stagger: { each: 0.003, from: "center" } }, at);
                  break;
                case "grid":
                  timeline.to(gridLines, { strokeDashoffset: 0, duration: 0.36, stagger: 0.003 }, at);
                  break;
                case "layers":
                  timeline
                    .to(vectorPaths, { strokeDashoffset: 0, duration: 0.36, stagger: 0.018 }, at)
                    .to(rasterCells, { autoAlpha: 0.68, scale: 1, duration: 0.3, stagger: 0.006 }, at + 0.08);
                  break;
                case "data":
                  timeline.to(dataRows, { autoAlpha: 1, x: 0, duration: 0.32, stagger: 0.018 }, at);
                  break;
                case "model":
                  timeline
                    .to(modelNodes, { autoAlpha: 1, scale: 1, duration: 0.28, stagger: 0.012 }, at)
                    .to(modelEdges, { strokeDashoffset: 0, duration: 0.34, stagger: 0.006 }, at + 0.08);
                  break;
                default:
                  break;
              }
            };

            timeline.addLabel("state-01", 0).to({}, { duration: STATE_HOLD }, 0);
            let cursor = STATE_HOLD;

            stateLayouts.slice(0, -1).forEach((outgoingState, index) => {
              const incomingState = stateLayouts[index + 1];
              const incomingX = incomingState.key === "system" ? systemActiveX : incomingState.activeX;
              const incomingStart = cursor + 0.32;

              timeline.addLabel(`handoff-${String(index + 1).padStart(2, "0")}-${String(index + 2).padStart(2, "0")}`, cursor);
              timeline
                .to(
                  layers[outgoingState.key],
                  {
                    x: outgoingState.historyX,
                    autoAlpha: outgoingState.historyOpacity,
                    duration: 0.52,
                  },
                  cursor,
                )
                .to(
                  artwork[outgoingState.key],
                  { attr: { transform: scaleTransform(outgoingState.origin, outgoingState.historyScale) }, duration: 0.52 },
                  cursor,
                )
                .to(labels[index], { autoAlpha: 0, scale: 0.7, duration: 0.28 }, cursor)
                .to(
                  layers[incomingState.key],
                  {
                    x: incomingX,
                    autoAlpha: 1,
                    duration: 0.46,
                  },
                  incomingStart,
                )
                .to(
                  artwork[incomingState.key],
                  { attr: { transform: scaleTransform(incomingState.origin, incomingState.activeScale) }, duration: 0.46 },
                  incomingStart,
                )
                .to(labels[index + 1], { autoAlpha: 1, scale: 1, duration: 0.38 }, incomingStart + 0.04);

              revealArtwork(incomingState.key, incomingStart + 0.02);

              if (isMobile && index > 0) {
                timeline.to(layers[stateLayouts[index - 1].key], { autoAlpha: 0.12, duration: 0.28 }, cursor);
              }

              timeline.addLabel(`state-${String(index + 2).padStart(2, "0")}`, cursor + HANDOFF_DURATION);
              cursor += HANDOFF_DURATION + STATE_HOLD;
            });

            const overviewStart = cursor + 0.08;
            timeline.addLabel("overview", overviewStart);
            stateLayouts.forEach((state) => {
              timeline.to(
                layers[state.key],
                {
                  x: state.overviewX,
                  y: 0,
                  autoAlpha: state.overviewOpacity,
                  duration: 0.72,
                },
                overviewStart,
              );
              timeline.to(
                artwork[state.key],
                { attr: { transform: scaleTransform(state.origin, state.overviewScale) }, duration: 0.72 },
                overviewStart,
              );
            });
            timeline
              .to(labels[6], { autoAlpha: 0, scale: 0.7, duration: 0.28 }, overviewStart)
              .to(labels[7], { autoAlpha: 1, scale: 1, duration: 0.4 }, overviewStart + 0.32)
              .to(layers.arrows, { autoAlpha: 0.44, duration: 0.36 }, overviewStart + 0.34)
              .to(stageShell, { scale: overviewStageScale, duration: 0.72 }, overviewStart)
              .to({}, { duration: 0.14 }, overviewStart + 0.72);

            triggerRef.current = ScrollTrigger.create({
              trigger: section,
              start: "top top",
              end: () => `+=${Math.round(window.innerHeight * distanceFactor)}`,
              animation: timeline,
              pin: viewport,
              pinSpacing: true,
              scrub: isDesktop ? 0.65 : isCompactDesktop ? 0.5 : 0.4,
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
      section.dataset.motionMode = "static";
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

  useEffect(() => () => {
    navigationRequestRef.current += 1;
    navigationTweenRef.current?.kill();
    navigationTweenRef.current = null;
  }, []);

  const focusDestination = useCallback((hash: string) => {
    const target = document.getElementById(hash);
    const destinationHeading = target?.matches("h1, h2")
      ? target
      : target?.querySelector<HTMLElement>("h1, h2") ?? target;
    const focusTarget = destinationHeading ?? document.getElementById("hero-title");
    if (!focusTarget) return;
    if (!focusTarget.hasAttribute("tabindex")) focusTarget.tabIndex = -1;
    focusTarget.focus({ preventScroll: true });
  }, []);

  const skipIntro = useCallback((hash = "hero-title") => {
    navigationRequestRef.current += 1;
    navigationTweenRef.current?.kill();
    navigationTweenRef.current = null;
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
    window.requestAnimationFrame(() => focusDestination(hash));
    window.setTimeout(() => focusDestination(hash), 50);
  }, [focusDestination, sectionRef]);

  const navigateTo = useCallback((hash: HeroNavigationTarget) => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const target = document.getElementById(hash);
    if (!target) return;

    if (!trigger && section) {
      section.dataset.motionMode = "static";
    }

    navigationRequestRef.current += 1;
    const requestId = navigationRequestRef.current;
    navigationTweenRef.current?.kill();
    navigationTweenRef.current = null;

    const targetTop = hash === "hero"
      ? trigger?.start ?? section?.offsetTop ?? 0
      : target.getBoundingClientRect().top + window.scrollY;
    const distance = Math.abs(targetTop - window.scrollY);
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.history.replaceState(null, "", `#${hash}`);

    if (reduceMotion || saveData || distance < 2) {
      window.scrollTo({ top: targetTop, behavior: "auto" });
      window.requestAnimationFrame(() => focusDestination(hash));
      return;
    }

    const duration = Math.min(1.45, Math.max(0.72, 0.72 + distance / 7500));

    void loadScrollGsap()
      .then(({ gsap }) => {
        if (requestId !== navigationRequestRef.current) return;

        navigationTweenRef.current = gsap.to(window, {
          scrollTo: { y: targetTop, autoKill: true },
          duration,
          ease: "power2.inOut",
          overwrite: "auto",
          onComplete: () => {
            if (requestId !== navigationRequestRef.current) return;
            navigationTweenRef.current = null;
            focusDestination(hash);
          },
          onInterrupt: () => {
            if (requestId === navigationRequestRef.current) {
              navigationTweenRef.current = null;
            }
          },
        });
      })
      .catch(() => {
        if (requestId !== navigationRequestRef.current) return;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
        window.setTimeout(() => focusDestination(hash), duration * 1000 + 100);
      });
  }, [focusDestination, sectionRef]);

  return { navigateTo, skipIntro };
}
