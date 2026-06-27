"use client";

import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    let attempts = 0;
    
    const initScripts = () => {
      const w = window as any;
      if (w.jQuery) {
        // Scripts are ready, force trigger DOM events
        document.dispatchEvent(new Event("DOMContentLoaded"));
        window.dispatchEvent(new Event("load"));
        
        // Trigger resize and scroll to wake up Waypoints/ScrollTrigger
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
          window.dispatchEvent(new Event("scroll"));
          if (w.jQuery && w.elementorFrontend) {
             w.jQuery(window).trigger("elementor/frontend/init");
             if (typeof w.elementorFrontend.init === 'function') {
                 try { w.elementorFrontend.init(); } catch(e) {}
             }
          }
          
          // Force re-execution of theme JS to rebind GSAP animations to React DOM
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
