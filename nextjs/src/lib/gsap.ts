"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default easing presets matching the motion language spec
export const EASE = {
  smooth: "power3.out",
  expo: "expo.out",
  snappy: "power2.out",
  gentle: "power1.out",
} as const;

/**
 * Cleanup-safe GSAP hook for React components.
 * Wraps all GSAP animations in a context for automatic cleanup on unmount.
 * Respects prefers-reduced-motion.
 */
export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  deps: React.DependencyList = [],
  scope?: React.RefObject<HTMLElement | null>
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context((self) => {
      if (!prefersReducedMotion) {
        callback(self);
      }
    }, scope?.current || undefined);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ctxRef;
}

export { gsap, ScrollTrigger };
