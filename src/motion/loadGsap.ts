import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

let scrollRuntimePromise: Promise<{
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  ScrollToPlugin: typeof import("gsap/ScrollToPlugin").ScrollToPlugin;
}> | null = null;

export function loadGsap() {
  return Promise.resolve({ gsap, ScrollTrigger });
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
