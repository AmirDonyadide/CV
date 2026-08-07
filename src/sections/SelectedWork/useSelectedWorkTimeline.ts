import { useEffect } from "react";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";
import { deferUntilNearViewport } from "../../motion/deferUntilNearViewport";
import { loadGsap } from "../../motion/loadGsap";

interface UseSelectedWorkTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function useSelectedWorkTimeline({ sectionRef }: UseSelectedWorkTimelineOptions) {
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
      const scenes = select<HTMLElement>("[data-project-scene]");
      const stories = select<HTMLElement>("[data-project-story]");
      const indexItems = select<HTMLElement>("[data-project-index]");
      const mobileVisuals = select<HTMLElement>("[data-project-mobile-visual]");

      const showStatic = () => {
        section.dataset.motionMode = "static";
        gsap.set([scenes, stories, indexItems, mobileVisuals].flat(), { clearProps: "all" });
      };

      media.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
        },
        (mediaContext) => {
          const conditions = mediaContext.conditions;
          if (!conditions || conditions.reduced) {
            showStatic();
            return;
          }

          if (conditions.mobile) {
            section.dataset.motionMode = "mobile";
            const triggers: ScrollTriggerInstance[] = [];

            stories.forEach((story, index) => {
              const visual = mobileVisuals[index];
              gsap.set([story, visual], { opacity: 0.45, y: 24 });
              const timeline = gsap.timeline({ defaults: { ease: "none" } })
                .to(story, { opacity: 1, y: 0, duration: 1 }, 0)
                .to(visual, { opacity: 1, y: 0, duration: 1 }, 0);

              triggers.push(ScrollTrigger.create({
                trigger: story,
                start: "top 88%",
                end: "top 62%",
                animation: timeline,
                scrub: 0.3,
                invalidateOnRefresh: true,
              }));
            });

            return () => triggers.forEach((trigger) => trigger.kill());
          }

          section.dataset.motionMode = "desktop";
          const triggers: ScrollTriggerInstance[] = [];

          scenes.forEach((scene, index) => {
            const story = stories[index];
            const indexItem = indexItems[index];
            const steps = scene.querySelectorAll<HTMLElement>("[data-project-step]");
            const lines = scene.querySelectorAll<SVGElement>("[data-project-line] path");
            const nodes = scene.querySelectorAll<SVGElement>("[data-project-node] circle");
            const evidence = scene.querySelectorAll<HTMLElement>("[data-project-evidence]");

            gsap.set(scene, { autoAlpha: index === 0 ? 1 : 0, y: index === 0 ? 0 : 34 });
            gsap.set(indexItem, { opacity: index === 0 ? 1 : 0.34 });
            gsap.set(steps, { opacity: index === 0 ? 1 : 0.32, y: index === 0 ? 0 : 16 });
            if (evidence.length > 0) {
              gsap.set(evidence, { opacity: index === 0 ? 1 : 0.45, y: index === 0 ? 0 : 18 });
            }
            if (lines.length > 0) {
              gsap.set(lines, { strokeDasharray: 240, strokeDashoffset: index === 0 ? 0 : 240 });
            }
            if (nodes.length > 0) {
              gsap.set(nodes, { scale: index === 0 ? 1 : 0.35, transformOrigin: "center center" });
            }

            if (index > 0) {
              const enterTimeline = gsap.timeline({ defaults: { ease: "none" } })
                .to(scene, { autoAlpha: 1, y: 0, duration: 0.38 }, 0)
                .to(indexItem, { opacity: 1, duration: 0.28 }, 0)
                .to(steps, { opacity: 1, y: 0, duration: 0.34, stagger: 0.035 }, 0.08);

              if (lines.length > 0) {
                enterTimeline.to(lines, { strokeDashoffset: 0, duration: 0.4, stagger: 0.018 }, 0.1);
              }
              if (nodes.length > 0) {
                enterTimeline.to(nodes, { scale: 1, duration: 0.28, stagger: 0.02 }, 0.16);
              }

              if (evidence.length > 0) {
                enterTimeline.to(evidence, { opacity: 1, y: 0, duration: 0.36 }, 0.18);
              }

              triggers.push(ScrollTrigger.create({
                trigger: story,
                start: "top 84%",
                end: "top 51%",
                animation: enterTimeline,
                scrub: 0.45,
                invalidateOnRefresh: true,
              }));
            }

            if (index < scenes.length - 1) {
              const exitTimeline = gsap.timeline({ defaults: { ease: "none" } })
                .to(scene, { autoAlpha: 0, y: -34, duration: 1 }, 0)
                .to(indexItem, { opacity: 0.34, duration: 0.7 }, 0);

              triggers.push(ScrollTrigger.create({
                trigger: story,
                start: "bottom 51%",
                end: "bottom 18%",
                animation: exitTimeline,
                scrub: 0.45,
                invalidateOnRefresh: true,
              }));
            }
          });

          return () => triggers.forEach((trigger) => trigger.kill());
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
