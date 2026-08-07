interface DeferredViewportOptions {
  idleTimeout?: number;
  rootMargin?: string;
}

export function deferUntilNearViewport(
  element: Element,
  callback: () => void,
  {
    idleTimeout = 1000,
    rootMargin = "900px 0px",
  }: DeferredViewportOptions = {},
) {
  let idleHandle: number | null = null;
  let timeoutHandle: number | null = null;
  let observer: IntersectionObserver | null = null;
  let cancelled = false;

  const schedule = () => {
    if (cancelled) return;

    if (window.requestIdleCallback) {
      idleHandle = window.requestIdleCallback(() => {
        idleHandle = null;
        if (!cancelled) callback();
      }, { timeout: idleTimeout });
      return;
    }

    timeoutHandle = window.setTimeout(() => {
      timeoutHandle = null;
      if (!cancelled) callback();
    }, 32);
  };

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer?.disconnect();
      observer = null;
      schedule();
    }, { rootMargin });
    observer.observe(element);
  } else {
    schedule();
  }

  return () => {
    cancelled = true;
    observer?.disconnect();
    if (idleHandle !== null) window.cancelIdleCallback(idleHandle);
    if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
  };
}
