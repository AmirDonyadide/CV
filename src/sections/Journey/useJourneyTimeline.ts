import { useEffect } from "react";
import { deferUntilNearViewport } from "../../motion/deferUntilNearViewport";
import { loadGsap } from "../../motion/loadGsap";

interface UseJourneyTimelineOptions {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function useJourneyTimeline({ sectionRef }: UseJourneyTimelineOptions) {
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
      const segments = select<SVGPathElement>("[data-journey-segment]");
      const nodes = select<SVGGElement>("[data-journey-node]");
      const entries = select<HTMLElement>("[data-journey-entry]");

      const showStatic = () => {
        section.dataset.motionMode = "static";
        gsap.set([...segments, ...nodes, ...entries], { clearProps: "all" });
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
            entries.forEach((entry) => {
              gsap.fromTo(
                entry,
                { opacity: 0.5, y: 16 },
                {
                  opacity: 1,
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: entry,
                    start: "top 92%",
                    end: "top 75%",
                    scrub: 0.2,
                  },
                },
              );
            });
            return;
          }

          section.dataset.motionMode = "desktop";
          const lengths = segments.map((segment) => segment.getTotalLength());
          segments.forEach((segment, index) => {
            gsap.set(segment, {
              strokeDasharray: lengths[index],
              strokeDashoffset: lengths[index],
            });
          });
          gsap.set(nodes, { opacity: 0.48, scale: 0.82, transformOrigin: "center center" });
          gsap.set(entries, { opacity: 0.56, y: 12 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section.querySelector("[data-journey-stage]"),
              start: "top 78%",
              end: "bottom bottom",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(nodes[0], { opacity: 1, scale: 1, duration: 0.08 }, 0)
            .to(entries[0], { opacity: 1, y: 0, duration: 0.12 }, 0)
            .to(segments[0], { strokeDashoffset: 0, duration: 0.62 }, 0.02)
            .to(nodes[1], { opacity: 1, scale: 1, duration: 0.08 }, 0.32)
            .to(entries[1], { opacity: 1, y: 0, duration: 0.12 }, 0.32)
            .to(nodes[2], { opacity: 1, scale: 1, duration: 0.08 }, 0.61)
            .to(entries[2], { opacity: 1, y: 0, duration: 0.12 }, 0.61)
            .to(segments[1], { strokeDashoffset: 0, duration: 0.28 }, 0.65)
            .to(nodes[3], { opacity: 1, scale: 1, duration: 0.08 }, 0.86)
            .to(entries[3], { opacity: 1, y: 0, duration: 0.12 }, 0.86);
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
