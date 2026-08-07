import { useEffect } from "react";
import { deferUntilNearViewport } from "../../motion/deferUntilNearViewport";
import { loadGsap } from "../../motion/loadGsap";

interface UseCaseStudyMotionOptions {
  articleRef: React.RefObject<HTMLElement | null>;
}

export function useCaseStudyMotion({ articleRef }: UseCaseStudyMotionOptions) {
  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    let active = true;
    let disposeAnimation = () => {};
    const activate = async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (!active) return;

      const media = gsap.matchMedia();
      const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray<HTMLElement>("[data-case-reveal]", article);

        reveals.forEach((element) => {
          if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        const progressTrigger = ScrollTrigger.create({
          trigger: article,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            article.style.setProperty("--case-progress", self.progress.toFixed(4));
          },
        });

        return () => progressTrigger.kill();
      });
      }, article);

      disposeAnimation = () => {
        media.revert();
        context.revert();
      };
    };

    const cancelActivation = deferUntilNearViewport(article, () => {
      void activate();
    }, { idleTimeout: 1200, rootMargin: "0px" });

    return () => {
      active = false;
      cancelActivation();
      disposeAnimation();
    };
  }, [articleRef]);
}
