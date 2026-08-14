"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function GlobalReviews() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname?.startsWith("/ads")) return;
    let isHovered = false;
    let isVisible = false;

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mouseenter", () => { isHovered = true; });
    container.addEventListener("mouseleave", () => { isHovered = false; });

    // Deep query through Shadow DOM trees
    const deepQueryAll = (root: Node, selector: string): HTMLElement[] => {
      const results: HTMLElement[] = [];
      const search = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          try { if (el.matches(selector)) results.push(el); } catch (_) {}
          if (el.shadowRoot) search(el.shadowRoot);
        }
        node.childNodes.forEach((c) => search(c));
      };
      search(root);
      return results;
    };

    const trySlide = () => {
      if (isHovered || !isVisible) return;

      // Strategy 1: Elfsight custom elements expose a shadow root
      // Their tag names start with "eapps-"
      const eappsEls = Array.from(
        document.querySelectorAll<HTMLElement>("[class*='elfsight-app'] *")
      ).concat(Array.from(document.querySelectorAll<HTMLElement>("eapps-google-reviews, eapps-reviews, [class*='eapps']")));

      // Also look directly in document for any eapps custom element
      const customEls = Array.from(
        document.querySelectorAll<HTMLElement>("*")
      ).filter((el) => el.tagName.toLowerCase().startsWith("eapps-"));

      const roots: Node[] = [container, ...customEls, ...eappsEls];

      // Try Swiper API first
      for (const root of roots) {
        const swipers = deepQueryAll(root, ".swiper, [class*='swiper']");
        for (const el of swipers) {
          const sw = (el as any).swiper;
          if (sw?.slideNext) {
            sw.slideNext();
            return;
          }
        }
      }

      // Try clicking next button found deep in shadow DOMs
      for (const root of roots) {
        const btns = deepQueryAll(
          root,
          '[aria-label="Next"], [class*="swiper-button-next"], [class*="arrow-next"], [class*="next-arrow"], [class*="carousel-next"]'
        );
        if (btns.length > 0) {
          btns[0].click();
          return;
        }
      }

      // Fallback: get ALL buttons in shadow DOM, pick rightmost
      for (const root of roots) {
        const allBtns = deepQueryAll(root, 'button, [role="button"]');
        if (allBtns.length >= 2) {
          // Sort by x position, rightmost = next
          const sorted = allBtns.sort(
            (a, b) => b.getBoundingClientRect().left - a.getBoundingClientRect().left
          );
          sorted[0].click();
          return;
        }
      }
    };

    // Watch for Elfsight to inject its custom element, then start sliding
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const mutObs = new MutationObserver(() => {
      const hasEapps = document.querySelector("*[class*='eapps']") ||
        Array.from(document.querySelectorAll("*")).find((el) =>
          el.tagName.toLowerCase().startsWith("eapps-")
        );
      if (hasEapps && !intervalId) {
        intervalId = setInterval(trySlide, 3000);
        mutObs.disconnect();
      }
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    // Also start interval after 6s even if MutationObserver missed it
    const fallbackTimer = setTimeout(() => {
      if (!intervalId) {
        intervalId = setInterval(trySlide, 3000);
      }
    }, 6000);

    const visObs = new IntersectionObserver(
      (entries) => { isVisible = entries[0].isIntersecting; },
      { threshold: 0.1 }
    );
    visObs.observe(container);

    return () => {
      mutObs.disconnect();
      visObs.disconnect();
      clearInterval(intervalId);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  if (pathname?.startsWith("/ads")) return null;

  return (
    <section className="brandexa-global-reviews" aria-label="Client reviews">
      <div className="brandexa-global-reviews-inner">
        <p>CLIENT REVIEWS</p>
        <h2>What clients say about Brandexa Growth</h2>
        <div ref={containerRef} className="brandexa-elfsight-reviews-frame">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-842dbf01-a556-4cad-8da0-22d844e16a2c" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
