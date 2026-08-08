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
          section.dataset.activeProject = "all";
          gsap.set([scenes, stories, indexItems, mobileVisuals].flat(), { clearProps: "all" });
          scenes.forEach((scene) => scene.removeAttribute("aria-hidden"));
        };

        media.add(
          {
            reduced: "(prefers-reduced-motion: reduce)",
            desktop: "(min-width: 1100px) and (prefers-reduced-motion: no-preference)",
            stacked: "(max-width: 1099px) and (prefers-reduced-motion: no-preference)",
          },
          (mediaContext) => {
            const conditions = mediaContext.conditions;
            if (!conditions || conditions.reduced) {
              showStatic();
              return;
            }

            if (conditions.stacked) {
              section.dataset.motionMode = window.innerWidth < 700 ? "mobile" : "tablet";
              section.dataset.activeProject = "all";
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
            let activeIndex = 0;
            let storyStarts: number[] = [];
            let previewTimeline: ReturnType<typeof gsap.timeline> | null = null;

            const updateStoryStarts = () => {
              storyStarts = stories.map((story) => story.getBoundingClientRect().top + window.scrollY);
            };

            const resolveActiveIndex = () => {
              const anchor = window.scrollY + window.innerHeight * 0.52;
              for (let index = storyStarts.length - 1; index >= 0; index -= 1) {
                if (anchor >= storyStarts[index]) return index;
              }
              return 0;
            };

            const setAccessibleScene = (nextIndex: number) => {
              scenes.forEach((scene, index) => {
                scene.setAttribute("aria-hidden", index === nextIndex ? "false" : "true");
              });
            };

            const setProjectState = (nextIndex: number, immediate = false) => {
              const targetIndex = Math.max(0, Math.min(scenes.length - 1, nextIndex));
              if (!immediate && targetIndex === activeIndex) return;

              previewTimeline?.kill();
              gsap.killTweensOf([scenes, indexItems].flat());

              const opacity = (scene: HTMLElement) => Number.parseFloat(gsap.getProperty(scene, "opacity") as string) || 0;
              const outgoingIndex = scenes.reduce(
                (dominant, scene, index) => opacity(scene) > opacity(scenes[dominant]) ? index : dominant,
                activeIndex,
              );
              const outgoing = scenes[outgoingIndex];
              const incoming = scenes[targetIndex];
              const direction = targetIndex >= outgoingIndex ? 1 : -1;

              activeIndex = targetIndex;
              section.dataset.activeProject = incoming.dataset.projectScene ?? String(targetIndex);
              setAccessibleScene(targetIndex);

              if (immediate || outgoing === incoming) {
                gsap.set(scenes, {
                  autoAlpha: (index) => index === targetIndex ? 1 : 0,
                  y: 0,
                  zIndex: (index) => index === targetIndex ? 2 : 0,
                });
                gsap.set(indexItems, { opacity: (index) => index === targetIndex ? 1 : 0.34 });
                return;
              }

              scenes.forEach((scene, index) => {
                if (index !== outgoingIndex && index !== targetIndex) {
                  gsap.set(scene, { autoAlpha: 0, y: 0, zIndex: 0 });
                }
              });

              gsap.set(outgoing, { autoAlpha: Math.max(opacity(outgoing), 0.72), zIndex: 1 });
              gsap.set(incoming, {
                autoAlpha: Math.max(opacity(incoming), 0.16),
                y: direction * 18,
                zIndex: 2,
              });

              previewTimeline = gsap.timeline({ defaults: { overwrite: "auto" } })
                .to(outgoing, { autoAlpha: 0.68, y: direction * -5, duration: 0.06, ease: "power1.out" }, 0)
                .to(incoming, { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" }, 0.04)
                .to(outgoing, { autoAlpha: 0, y: direction * -16, duration: 0.1, ease: "power1.in" }, 0.06)
                .to(indexItems, {
                  opacity: (index) => index === targetIndex ? 1 : 0.34,
                  duration: 0.1,
                  ease: "power1.out",
                }, 0.04)
                .set(outgoing, { zIndex: 0 }, 0.18);
            };

            gsap.set(scenes, { autoAlpha: 0, y: 0, zIndex: 0 });
            gsap.set(indexItems, { opacity: 0.34 });
            updateStoryStarts();
            setProjectState(resolveActiveIndex(), true);

            const trigger = ScrollTrigger.create({
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              invalidateOnRefresh: true,
              onUpdate: () => setProjectState(resolveActiveIndex()),
              onEnter: () => setProjectState(resolveActiveIndex()),
              onEnterBack: () => setProjectState(resolveActiveIndex()),
              onLeave: () => setProjectState(scenes.length - 1, true),
              onLeaveBack: () => setProjectState(0, true),
              onRefresh: () => {
                updateStoryStarts();
                setProjectState(resolveActiveIndex(), true);
              },
            });

            return () => {
              previewTimeline?.kill();
              trigger.kill();
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
