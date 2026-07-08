"use client";

import { useEffect } from "react";
import Script from "next/script";
import OurWorkSection from "@/components/sections/OurWorkSection";
import "./our-work.css";

export default function OurWorkPage() {
  useEffect(() => {
    const hideElfsightBadge = () => {
      const badgeText = "Free Google Reviews Widget";
      const candidates = document.querySelectorAll<HTMLElement>(
        ".eapps-widget-toolbar, .eapps-widget-toolbar-panel-wrapper, .eapps-widget-toolbar-panel, a[href*='elfsight'], [class*='elfsight']"
      );

      candidates.forEach((element) => {
        if (
          element.textContent?.includes(badgeText) ||
          element.getAttribute("href")?.includes("elfsight")
        ) {
          element.style.setProperty("display", "none", "important");
          element.style.setProperty("opacity", "0", "important");
          element.style.setProperty("visibility", "hidden", "important");
          element.style.setProperty("pointer-events", "none", "important");
        }
      });
    };

    hideElfsightBadge();
    const observer = new MutationObserver(hideElfsightBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    const intervalId = window.setInterval(hideElfsightBadge, 1000);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="brandexa-work-page">
      <section className="brandexa-work-hero" aria-label="Our work intro">
        <div className="brandexa-work-hero-inner">
          <p>SELECTED PROJECTS</p>
          <h1>Our Work</h1>
          <span>Bold digital systems, campaigns, and experiences shaped for growth.</span>
        </div>
      </section>
      <OurWorkSection />
      <section className="brandexa-work-reviews" aria-label="Google reviews">
        <div className="brandexa-work-reviews-inner">
          <p>CLIENT REVIEWS</p>
          <h2>What clients say about Brandexa Growth</h2>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="brandexa-elfsight-reviews-frame">
            <div className="elfsight-app-842dbf01-a556-4cad-8da0-22d844e16a2c" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </main>
  );
}
