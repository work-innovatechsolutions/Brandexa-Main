"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom cursor with dot + ring follower.
 * Hidden on mobile/touch devices.
 * Respects prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't render custom cursor on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursor elements
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Scale up on interactive elements
    const handleEnter = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.5, duration: 0.3 });
      gsap.to(dot, { scale: 0.5, duration: 0.3 });
    };

    const handleLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.8, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", moveCursor);

    // Attach hover effects to interactive elements
    const interactiveEls = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-0 hidden lg:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/60 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-0 hidden lg:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
