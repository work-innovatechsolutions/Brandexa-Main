"use client";

import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    let attempts = 0;
    let didInitElementor = false;
    
    const initScripts = () => {
      const w = window as any;
      if (w.jQuery) {
        if (!document.documentElement.dataset.wpClientEventsReady) {
          document.documentElement.dataset.wpClientEventsReady = "true";
          document.dispatchEvent(new Event("DOMContentLoaded"));
          window.dispatchEvent(new Event("load"));
        }
        
        setTimeout(() => {
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
          
          if (!document.getElementById("theme-js-reinit")) {
            const script = document.createElement("script");
            script.id = "theme-js-reinit";
            script.src = "/wp-content/themes/artistics/assets/js/function.js?ver=" + Date.now();
            document.body.appendChild(script);
          }
          
        }, 100);
        return true;
      }
      return false;
    };

    // Try immediately
    if (initScripts()) return;

    // Otherwise poll every 100ms up to 50 times (5 seconds)
    const interval = setInterval(() => {
      attempts++;
      if (initScripts() || attempts > 50) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
