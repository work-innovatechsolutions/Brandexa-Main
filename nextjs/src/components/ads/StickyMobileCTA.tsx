"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

/**
 * Sticky bottom CTA bar for mobile.
 * Appears after scrolling past hero.
 * Hides when booking form is visible.
 */
export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show after scrolling past hero (1 viewport height)
      const pastHero = scrollY > viewportHeight * 0.8;

      // Hide when booking section is in view
      const bookingEl = document.getElementById("booking");
      let bookingInView = false;
      if (bookingEl) {
        const rect = bookingEl.getBoundingClientRect();
        bookingInView = rect.top < viewportHeight && rect.bottom > 0;
      }

      setIsVisible(pastHero && !bookingInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    trackEvent(EVENTS.CTA_CLICK, { location: "sticky_mobile" });
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#050507]/95 backdrop-blur-xl border-t border-white/5 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={scrollToBooking}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#050507] bg-[#00E87B] rounded-xl active:scale-[0.97] transition-transform"
      >
        <span>CLAIM FREE AD MANAGEMENT</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
