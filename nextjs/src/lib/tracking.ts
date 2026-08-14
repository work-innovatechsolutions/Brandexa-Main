/**
 * Event tracking abstraction layer.
 * Provides a clean interface for Meta Pixel, GA4, and GTM.
 * 
 * Currently logs to console in development.
 * Connect to real tracking providers before production.
 */

// Event name constants
export const EVENTS = {
  CTA_CLICK: "cta_click",
  SCROLL_DEPTH: "scroll_depth",
  VIDEO_PLAY: "video_play",
  FORM_STARTED: "form_started",
  FORM_STEP_COMPLETED: "form_step_completed",
  FORM_SUBMITTED: "form_submitted",
  CALENDAR_OPENED: "calendar_opened",
  CALENDAR_BOOKED: "calendar_booked",
  SECTION_VIEWED: "section_viewed",
} as const;

interface TrackingParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an event across all configured analytics providers.
 */
export function trackEvent(name: string, params?: TrackingParams) {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Track] ${name}`, params);
  }

  // Meta Pixel
  if (typeof window !== "undefined" && (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).fbq) {
    (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).fbq("trackCustom", name, params);
  }

  // Google Analytics 4
  if (typeof window !== "undefined" && (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).gtag) {
    (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).gtag("event", name, params);
  }

  // Google Tag Manager dataLayer
  if (typeof window !== "undefined" && (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).dataLayer) {
    (window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).dataLayer.push({
      event: name,
      ...params,
    });
  }
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%).
 */
export function initScrollTracking() {
  if (typeof window === "undefined") return;

  const milestones = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        trackEvent(EVENTS.SCROLL_DEPTH, { depth: milestone });
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}
