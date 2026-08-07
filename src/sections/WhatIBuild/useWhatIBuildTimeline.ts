import { useEffect } from "react";
import { deferUntilNearViewport } from "../../motion/deferUntilNearViewport";
import { loadGsap } from "../../motion/loadGsap";

interface UseWhatIBuildTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function useWhatIBuildTimeline({ sectionRef }: UseWhatIBuildTimelineOptions) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let active = true;
    let disposeAnimation = () => {};
    const activate = async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (!active) return;

      const media = gsap.matchMedia();
      const context = gsap.context(() => {
      const select = gsap.utils.selector(section);
      const header = select("[data-build-header]");
      const spatialLayers = select("[data-spatial-layer]");
      const connector = select("[data-flow-connector]");
      const data = select("[data-build-data]");
      const dataRows = select("[data-data-row]");
      const streams = select("[data-stream]");
      const model = select("[data-build-model]");
      const modelEdges = select("[data-model-edge]");
      const modelNodes = select("[data-model-node]");
      const systemArrow = select("[data-system-arrow]");
      const system = select("[data-build-system]");
      const systemControls = select("[data-system-control]");
      const railItems = select("[data-build-rail-item]");
      const railDots = select("[data-build-rail-dot]");
      const mobileStages = select("[data-mobile-stage]");

      const showStatic = () => {
        section.dataset.motionMode = "static";
        gsap.set(
          [header, spatialLayers, connector, data, dataRows, streams, model, modelEdges, modelNodes, systemArrow, system, systemControls, railItems, railDots, mobileStages].flat(),
          { clearProps: "all" },
        );
      };

      media.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (mediaContext) => {
          const conditions = mediaContext.conditions;
          if (!conditions || conditions.reduced) {
            showStatic();
            return;
          }

          if (conditions.mobile) {
            section.dataset.motionMode = "mobile";
            gsap.set(header, { opacity: 0.55, y: 22 });
            gsap.set(mobileStages, { opacity: 0.28, y: 26 });
            gsap.set(railItems, { opacity: 0.42 });

            const mobileTimeline = gsap.timeline({ defaults: { ease: "none" } });
            mobileTimeline
              .to(header, { opacity: 1, y: 0, duration: 0.16 }, 0)
              .to(mobileStages[0], { opacity: 1, y: 0, duration: 0.2 }, 0.08)
              .to(railItems[0], { opacity: 1, duration: 0.16 }, 0.1)
              .to(mobileStages[1], { opacity: 1, y: 0, duration: 0.22 }, 0.36)
              .to(railItems[1], { opacity: 1, duration: 0.16 }, 0.4)
              .to(mobileStages[2], { opacity: 1, y: 0, duration: 0.22 }, 0.68)
              .to(railItems[2], { opacity: 1, duration: 0.16 }, 0.72);

            const trigger = ScrollTrigger.create({
              trigger: section,
              start: "top 82%",
              end: "bottom bottom",
              animation: mobileTimeline,
              scrub: 0.35,
              invalidateOnRefresh: true,
            });

            return () => {
              trigger.kill();
              mobileTimeline.kill();
            };
          }

          section.dataset.motionMode = "desktop";
          gsap.set(header, { opacity: 0.45, y: 30 });
          gsap.set(spatialLayers, { opacity: 0.3 });
          gsap.set(spatialLayers[0], { y: -34 });
          gsap.set(spatialLayers[2], { y: 34 });
          gsap.set(connector, { opacity: 0.15 });
          gsap.set(data, { opacity: 0.14, x: -28 });
          gsap.set(dataRows, { opacity: 0.15, x: -12 });
          gsap.set(streams, { strokeDasharray: 260, strokeDashoffset: 260 });
          gsap.set(model, { opacity: 0.12 });
          gsap.set(modelEdges, { strokeDasharray: 180, strokeDashoffset: 180 });
          gsap.set(modelNodes, { scale: 0.45, transformOrigin: "center center" });
          gsap.set(systemArrow, { opacity: 0.12 });
          gsap.set(system, { opacity: 0.12, x: 34 });
          gsap.set(systemControls, { opacity: 0.15 });
          gsap.set(railItems, { opacity: 0.38 });
          gsap.set(railDots, { scale: 0.65, transformOrigin: "center center" });

          const timeline = gsap.timeline({ defaults: { ease: "none" } });
          timeline
            .to(header, { opacity: 1, y: 0, duration: 0.15 }, 0)
            .to(spatialLayers, { opacity: 1, y: 0, duration: 0.2, stagger: 0.025 }, 0.04)
            .to(railItems[0], { opacity: 1, duration: 0.12 }, 0.06)
            .to(railDots[0], { scale: 1, duration: 0.12 }, 0.08)
            .to(connector, { opacity: 1, duration: 0.12 }, 0.22)
            .to(data, { opacity: 1, x: 0, duration: 0.2 }, 0.25)
            .to(dataRows, { opacity: 1, x: 0, duration: 0.16, stagger: 0.018 }, 0.28)
            .to(streams, { strokeDashoffset: 0, duration: 0.22, stagger: 0.012 }, 0.38)
            .to(railItems[1], { opacity: 1, duration: 0.12 }, 0.4)
            .to(railDots[1], { scale: 1, duration: 0.12 }, 0.42)
            .to(model, { opacity: 1, duration: 0.18 }, 0.48)
            .to(modelEdges, { strokeDashoffset: 0, duration: 0.2, stagger: 0.008 }, 0.5)
            .to(modelNodes, { scale: 1, duration: 0.16, stagger: 0.016 }, 0.5)
            .to(systemArrow, { opacity: 1, duration: 0.12 }, 0.67)
            .to(system, { opacity: 1, x: 0, duration: 0.21 }, 0.7)
            .to(systemControls, { opacity: 1, duration: 0.13, stagger: 0.01 }, 0.73)
            .to(railItems[2], { opacity: 1, duration: 0.12 }, 0.75)
            .to(railDots[2], { scale: 1, duration: 0.12 }, 0.77);

          const trigger = ScrollTrigger.create({
            trigger: section,
            start: "top 82%",
            end: "bottom bottom",
            animation: timeline,
            scrub: 0.45,
            invalidateOnRefresh: true,
          });

          return () => {
            trigger.kill();
            timeline.kill();
          };
        },
      );
      }, section);

      document.fonts.ready.then(() => {
        if (active) ScrollTrigger.refresh();
      });

      disposeAnimation = () => {
        media.revert();
        context.revert();
      };
    };

    const cancelActivation = deferUntilNearViewport(section, () => {
      void activate();
    }, { idleTimeout: 900, rootMargin: "800px 0px" });

    return () => {
      active = false;
      cancelActivation();
      disposeAnimation();
    };
  }, [sectionRef]);
}
