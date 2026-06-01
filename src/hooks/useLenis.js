import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 820px)").matches;

    if (reduceMotion || smallScreen) {
      return undefined;
    }

    let lenis;
    let rafId = 0;
    let cancelled = false;

    Promise.all([
      import("@studio-freight/lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { default: gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time) => {
        lenis.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      lenis?.destroy();
    };
  }, []);
}
