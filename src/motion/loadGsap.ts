let runtimePromise: Promise<{
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}> | null = null;

let scrollRuntimePromise: Promise<{
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  ScrollToPlugin: typeof import("gsap/ScrollToPlugin").ScrollToPlugin;
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

export function loadScrollGsap() {
  scrollRuntimePromise ??= Promise.all([
    loadGsap(),
    import("gsap/ScrollToPlugin"),
  ]).then(([runtime, scrollToPluginModule]) => {
    const { ScrollToPlugin } = scrollToPluginModule;
    runtime.gsap.registerPlugin(ScrollToPlugin);
    return { ...runtime, ScrollToPlugin };
  });

  return scrollRuntimePromise;
}
