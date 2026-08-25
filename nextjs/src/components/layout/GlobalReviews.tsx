"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Star, CheckCircle, Quote, Sparkles } from "lucide-react";

type Review = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  date: string;
  highlight: string;
  quote: string;
  avatarBg: string;
};

const reviews: Review[] = [
  {
    id: "1",
    name: "Paul Conklin",
    role: "Founder & CEO",
    company: "Wallhogs",
    rating: 5,
    date: "2 weeks ago",
    highlight: "+122% Website Traffic",
    avatarBg: "from-emerald-500 to-teal-700",
    quote:
      "Once we partnered with Brandexa, we received solid results immediately. The creativity and communication have been outstanding, and we finally see real, scalable e-commerce growth.",
  },
  {
    id: "2",
    name: "Michael Ferraro",
    role: "President",
    company: "Mortgage Markets CUSO",
    rating: 5,
    date: "3 weeks ago",
    highlight: "+248% Organic Reach",
    avatarBg: "from-blue-500 to-indigo-700",
    quote:
      "We provide mortgage services to 15–20 credit unions nationally and have done so for 30+ years. Marketing awareness is critical. Working with Brandexa has taken us to the next level.",
  },
  {
    id: "3",
    name: "Lennart & Jasmien Winqvist",
    role: "Founders",
    company: "Arctic Collagen",
    rating: 5,
    date: "1 month ago",
    highlight: "+7.3M% Reach Increase",
    avatarBg: "from-cyan-500 to-blue-700",
    quote:
      "Entering a highly competitive wellness market from scratch required a team that understood how to build trust. Brandexa's campaign execution put us on the map.",
  },
  {
    id: "4",
    name: "Ellijah Gardaya",
    role: "Founder",
    company: "Vital Vibe Health N Fitness",
    rating: 5,
    date: "1 month ago",
    highlight: "228K% Reach Growth",
    avatarBg: "from-lime-500 to-emerald-700",
    quote:
      "Working with Brandexa has been an absolute game-changer. As a solo founder with big goals, I needed a team that could handle full-funnel growth—and they delivered beyond expectations.",
  },
  {
    id: "5",
    name: "John Kanthak",
    role: "Creator & Owner",
    company: "Wrecked Angles",
    rating: 5,
    date: "2 months ago",
    highlight: "101.4K New Followers",
    avatarBg: "from-amber-500 to-orange-700",
    quote:
      "I’ve gotten results FAR exceeding my goals! Gained over 100,000 new followers and 11 million views at incredible cost efficiency. Couldn't be more pleased with the team.",
  },
  {
    id: "6",
    name: "Brittany Duckworth",
    role: "Owner",
    company: "Spray Daze Tan",
    rating: 5,
    date: "2 months ago",
    highlight: "2.8x Booking Growth",
    avatarBg: "from-pink-500 to-rose-700",
    quote:
      "The paid ads and booking funnels gave us consistent client bookings every single week. Acquisition costs dropped drastically and our calendar stays booked out.",
  },
  {
    id: "7",
    name: "Lisa Hilko",
    role: "Executive Director",
    company: "CENAPS Corporation",
    rating: 5,
    date: "3 months ago",
    highlight: "340+ Qualified Leads",
    avatarBg: "from-purple-500 to-indigo-700",
    quote:
      "Brandexa took the time to understand our specialized clinical programs and translated them into compelling digital campaigns. Our webinar attendance and lead recall soared.",
  },
  {
    id: "8",
    name: "Alexander Bennett",
    role: "Senior Brand Strategist",
    company: "Apex Media",
    rating: 5,
    date: "3 months ago",
    highlight: "3.2x Campaign Speed",
    avatarBg: "from-violet-500 to-purple-700",
    quote:
      "The team transformed our brand's digital presence with remarkable creativity and precision. The strategic insights and creative output exceeded every expectation.",
  },
  {
    id: "9",
    name: "Malik",
    role: "Retail Director",
    company: "Forever Diamonds",
    rating: 5,
    date: "4 months ago",
    highlight: "+180% Store Walk-Ins",
    avatarBg: "from-yellow-500 to-amber-700",
    quote:
      "Social engagement and retail foot traffic at our flagship store surged within weeks of launch. Their visual storytelling for high-end luxury jewelry was spot on.",
  },
];

export default function GlobalReviews() {
  const pathname = usePathname();
  const [elfsightLoaded, setElfsightLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const elfsightContainerRef = useRef<HTMLDivElement>(null);

  // Suppress unhandled Elfsight limit errors so they don't trigger Dev Overlay / console spam
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = (...args: any[]) => {
      const isElfsightLimitError = args.some(
        (arg) =>
          typeof arg === "string" &&
          (arg.includes("APP_VIEWS_LIMIT_REACHED") ||
            arg.includes("eapps.Platform") ||
            arg.includes("elfsightcdn.com"))
      );
      if (isElfsightLimitError) return;
      originalConsoleError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const isElfsightLimitWarn = args.some(
        (arg) =>
          typeof arg === "string" &&
          (arg.includes("APP_VIEWS_LIMIT_REACHED") ||
            arg.includes("eapps.Platform") ||
            arg.includes("elfsightcdn.com"))
      );
      if (isElfsightLimitWarn) return;
      originalConsoleWarn.apply(console, args);
    };

    const handleWindowError = (event: ErrorEvent) => {
      if (
        event.message?.includes("APP_VIEWS_LIMIT_REACHED") ||
        event.filename?.includes("elfsightcdn.com")
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("error", handleWindowError, true);

    return () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      window.removeEventListener("error", handleWindowError, true);
    };
  }, []);

  // Monitor Elfsight status: if Elfsight resets its limit and loads successfully, switch to Elfsight
  useEffect(() => {
    if (pathname?.startsWith("/ads")) return;

    let checkInterval: ReturnType<typeof setInterval> | undefined;

    const checkElfsightRendered = () => {
      const container = elfsightContainerRef.current;
      if (!container) return;

      // Look for child elements or shadow DOM created by Elfsight
      const hasEappsCustomEl =
        document.querySelector("eapps-google-reviews, eapps-reviews, [class*='eapps-']") ||
        Array.from(document.querySelectorAll("*")).find((el) =>
          el.tagName.toLowerCase().startsWith("eapps-")
        );

      const hasRenderedChildren =
        container.children.length > 1 ||
        (hasEappsCustomEl && (hasEappsCustomEl as HTMLElement).offsetHeight > 50);

      // Verify it's not blocked by limit
      if (hasRenderedChildren) {
        setElfsightLoaded(true);
        if (checkInterval) clearInterval(checkInterval);
      }
    };

    // Check periodically for Elfsight initialization
    checkInterval = setInterval(checkElfsightRendered, 1500);

    const observer = new MutationObserver(() => {
      checkElfsightRendered();
    });

    if (elfsightContainerRef.current) {
      observer.observe(elfsightContainerRef.current, { childList: true, subtree: true });
    }
    observer.observe(document.body, { childList: true, subtree: true });

    const timer = setTimeout(checkElfsightRendered, 3000);

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  // Continuous auto-scroll for native carousel
  useEffect(() => {
    if (elfsightLoaded || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 0.75; // pixels per frame

    const step = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        // Seamless loop reset when reaching halfway (where clone starts)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [elfsightLoaded, isPaused]);

  if (pathname?.startsWith("/ads")) return null;

  const scrollManual = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="brandexa-global-reviews relative overflow-hidden bg-[#070a0f] px-4 py-20 text-white sm:px-6 lg:px-8" aria-label="Client reviews">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-lime-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="brandexa-global-reviews-inner relative mx-auto max-w-[1480px]">
        {/* Header Block */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
              <Sparkles className="h-3.5 w-3.5 text-lime-400" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-bold tracking-tight text-white">
              What clients say about <span className="text-lime-300">Brandexa</span>
            </h2>
            <p
              className="mt-3 max-w-2xl text-[16px] font-normal normal-case leading-relaxed text-white/75"
              style={{ color: "rgba(255, 255, 255, 0.75)", textTransform: "none" }}
            >
              Real results, genuine partnerships, and proven revenue growth directly from our clients.
            </p>
          </div>

          {/* Social Proof Stats & Nav Controls */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Google Rating Pill */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-inner backdrop-blur-sm">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-1 text-xs font-bold text-white">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] font-medium text-white/50">Google Verified Reviews</p>
              </div>
            </div>

            {/* Manual Carousel Controls */}
            {!elfsightLoaded && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollManual("left")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-lime-400/50 hover:bg-lime-400 hover:text-black"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollManual("right")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-lime-400/50 hover:bg-lime-400 hover:text-black"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 1. ELFSIGHT WIDGET (Active when limit resets and widget renders) */}
        <div
          ref={elfsightContainerRef}
          className={`brandexa-elfsight-reviews-frame ${elfsightLoaded ? "block" : "hidden"}`}
        >
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-842dbf01-a556-4cad-8da0-22d844e16a2c" data-elfsight-app-lazy />
        </div>

        {/* 2. NATIVE CONTINUOUS AUTO-SCROLL CAROUSEL (Active when Elfsight reaches limit or is loading) */}
        {!elfsightLoaded && (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Edge Blur Fade Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#070a0f] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#070a0f] to-transparent sm:w-20" />

            {/* Seamless Infinite Auto-Scroll Track */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-hidden py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Double list for seamless infinite loop */}
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-[340px] shrink-0 sm:w-[390px] lg:w-[420px]"
                >
                  <div className="group relative flex h-[330px] flex-col justify-between rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(19,24,35,0.95)_0%,rgba(10,13,19,0.98)_100%)] p-6 sm:p-7 shadow-[0_20px_44px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1.5 hover:border-lime-400/30 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
                    {/* Top Bar: Stars + Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex shrink-0 items-center gap-1 text-lime-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="shrink-0 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-bold text-lime-300">
                        {review.highlight}
                      </span>
                    </div>

                    {/* Quote Area */}
                    <div className="relative my-4 flex-1 overflow-hidden">
                      <Quote className="absolute -left-1 -top-1 h-7 w-7 text-white/10" />
                      <p
                        className="relative pl-3 text-[14px] sm:text-[15px] font-normal normal-case leading-relaxed text-white line-clamp-4"
                        style={{ color: "#ffffff", textTransform: "none", fontWeight: 400 }}
                      >
                        "{review.quote}"
                      </p>
                    </div>

                    {/* Bottom Bar: Reviewer Info */}
                    <div className="mt-auto border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${review.avatarBg} text-xs font-bold text-white shadow-md ring-1 ring-white/15`}
                          >
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4
                                className="truncate text-[13px] font-semibold text-white"
                                style={{ color: "#ffffff", textTransform: "none" }}
                              >
                                {review.name}
                              </h4>
                              <span title="Verified Review" className="inline-flex shrink-0">
                                <CheckCircle className="h-3.5 w-3.5 text-lime-400" />
                              </span>
                            </div>
                            <p
                              className="truncate text-[11px] text-white/60"
                              style={{ color: "rgba(255, 255, 255, 0.6)", textTransform: "none" }}
                            >
                              {review.role} • <span className="text-white/80" style={{ color: "rgba(255, 255, 255, 0.85)" }}>{review.company}</span>
                            </p>
                          </div>
                        </div>
                        <span
                          className="shrink-0 text-[11px] font-medium text-white/40"
                          style={{ color: "rgba(255, 255, 255, 0.45)" }}
                        >
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
