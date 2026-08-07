import { useEffect } from "react";
import { deferUntilNearViewport } from "../../motion/deferUntilNearViewport";
import { loadGsap } from "../../motion/loadGsap";

interface UseExperienceTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function useExperienceTimeline({ sectionRef }: UseExperienceTimelineOptions) {
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
      const path = select<SVGPathElement>("[data-experience-path]")[0];
      const nodes = select<SVGGElement>("[data-experience-node]");
      const stories = select<HTMLElement>("[data-experience-story]");

      const setStaticState = () => {
        section.dataset.motionMode = "static";
        if (path) gsap.set(path, { clearProps: "all" });
        gsap.set([...nodes, ...stories], { clearProps: "all" });
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
            setStaticState();
            return;
          }

          if (conditions.desktop) {
            section.dataset.motionMode = "desktop";
            const pathLength = path?.getTotalLength() ?? 0;
            if (path && pathLength) {
              gsap.set(path, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
              });
              gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: section.querySelector("[data-experience-timeline]"),
                  start: "top 72%",
                  end: "bottom 36%",
                  scrub: 0.45,
                  invalidateOnRefresh: true,
                },
              });
            }

            gsap.set(stories, { opacity: 0.58 });
            gsap.set(stories[0], { opacity: 1 });
            gsap.set(nodes, { opacity: 0.5, scale: 0.88, transformOrigin: "center center" });
            gsap.set(nodes[0], { opacity: 1, scale: 1 });

            const activateStory = (activeIndex: number) => {
              gsap.to(stories, {
                opacity: (index) => (index === activeIndex ? 1 : 0.58),
                duration: 0.28,
                overwrite: "auto",
              });
              gsap.to(nodes, {
                opacity: (index) => (index <= activeIndex ? 1 : 0.5),
                scale: (index) => (index === activeIndex ? 1 : 0.88),
                duration: 0.28,
                overwrite: "auto",
              });
            };

            stories.forEach((story, index) => {
              ScrollTrigger.create({
                trigger: story,
                start: "top 58%",
                end: "bottom 42%",
                onEnter: () => activateStory(index),
                onEnterBack: () => activateStory(index),
              });
            });

            return;
          }

          section.dataset.motionMode = "mobile";
          stories.forEach((story) => {
            gsap.fromTo(
              story,
              { opacity: 0.45, y: 18 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: story,
                  start: "top 90%",
                  end: "top 72%",
                  scrub: 0.25,
                },
              },
            );
          });
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
