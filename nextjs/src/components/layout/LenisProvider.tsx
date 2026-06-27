"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger if present
    const w = window as any;
    if (w.ScrollTrigger) {
      lenis.on('scroll', w.ScrollTrigger.update);
      w.gsap?.ticker?.add((time: number) => {
        lenis.raf(time * 1000);
      });
      w.gsap?.ticker?.lagSmoothing(0, 0);
    }

    return () => {
      lenis.destroy();
      if (w.ScrollTrigger) {
         w.gsap?.ticker?.remove(lenis.raf);
      }
    };
  }, []);

  return <>{children}</>;
}
