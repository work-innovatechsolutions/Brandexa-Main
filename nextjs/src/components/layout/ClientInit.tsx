"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    let attempts = 0;
    let didInitElementor = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let interval: ReturnType<typeof setInterval> | undefined;
    
    const initScripts = () => {
      const w = window as any;
      if (w.jQuery) {
        if (!document.documentElement.dataset.wpClientEventsReady) {
          document.documentElement.dataset.wpClientEventsReady = "true";
          document.dispatchEvent(new Event("DOMContentLoaded"));
          window.dispatchEvent(new Event("load"));
        }
        
        timeoutId = setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
          window.dispatchEvent(new Event("scroll"));

          if (!didInitElementor && w.elementorFrontend?.hooks) {
            didInitElementor = true;
            try {
              w.jQuery(window).trigger("elementor/frontend/init");
            } catch (error) {
              console.warn("Failed to trigger elementor/frontend/init:", error);
            }

            if (typeof w.elementorFrontend.init === "function" && !w.elementorFrontend.isEditMode?.()) {
              try {
                w.elementorFrontend.init();
              } catch (error) {
                console.warn("Failed to initialize Elementor frontend:", error);
              }
            }
          }
          
          document.getElementById("theme-js-reinit")?.remove();

          const script = document.createElement("script");
          script.id = "theme-js-reinit";
          script.src = "/wp-content/themes/artistics/assets/js/function.js?ver=" + Date.now();
          script.onload = () => {
            window.dispatchEvent(new Event("resize"));
            window.dispatchEvent(new Event("scroll"));
            w.gsap?.ticker?.wake?.();
            w.ScrollTrigger?.refresh?.();
          };
          document.body.appendChild(script);

        }, 100);
        return true;
      }
      return false;
    };

    // Try immediately
    if (!initScripts()) {
      // Otherwise poll every 100ms up to 50 times (5 seconds)
      interval = setInterval(() => {
        attempts++;
        if (initScripts() || attempts > 50) {
          if (interval) clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
