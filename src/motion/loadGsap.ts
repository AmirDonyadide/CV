let runtimePromise: Promise<{
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}> | null = null;

export function loadGsap() {
  runtimePromise ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]).then(([gsapModule, scrollTriggerModule]) => {
    const gsap = gsapModule.default;
    const { ScrollTrigger } = scrollTriggerModule;
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  });

  return runtimePromise;
}
