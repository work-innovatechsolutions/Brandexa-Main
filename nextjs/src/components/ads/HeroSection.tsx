"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { magneticHover } from "@/lib/animations";
import { trackEvent, EVENTS } from "@/lib/tracking";

/**
 * Hero Section — where paid traffic lands.
 *
 * Preserves the exact direct-response proposition from Document 1:
 * "Getting hundreds of leads, but zero qualified buyers?"
 * "We fix your lead quality with scroll-stopping video creatives,
 *  and manage your Meta Ads for 100% FREE."
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", clearProps: "all" } });

      // Eyebrow badge
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      // Headline word-by-word
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".hero-word");
        tl.fromTo(
          words,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.03 },
          "-=0.3"
        );
      }

      // Subtext
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // CTA group
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      // Dashboard visual
      tl.fromTo(
        dashboardRef.current,
        { opacity: 0, scale: 0.94, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
    }, sectionRef);

    let cleanupHover: (() => void) | undefined;
    if (primaryBtnRef.current) {
      cleanupHover = magneticHover(primaryBtnRef.current, 0.15);
    }

    return () => {
      if (cleanupHover) cleanupHover();
      ctx.revert();
    };
  }, []);

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "hero_primary" });
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "hero_secondary" });
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  // Split headline into wrapped words for stagger animation
  const renderHeadline = () => {
    const line1 = "GETTING HUNDREDS OF LEADS,";
    const line2 = "BUT ZERO QUALIFIED BUYERS?";

    return (
      <>
        <span className="block">
          {line1.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-2 sm:mr-3.5">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </span>
        <span className="block mt-1 sm:mt-2">
          {line2.split(" ").map((word, i) => {
            const isHighlighted =
              word === "QUALIFIED" || word === "BUYERS?";
            return (
              <span
                key={i}
                className="inline-block overflow-hidden mr-2 sm:mr-3.5"
              >
                <span
                  className={`hero-word inline-block ${
                    isHighlighted
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]"
                      : ""
                  }`}
                >
                  {word}
                </span>
              </span>
            );
          })}
        </span>
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12 bg-slate-950 text-white"
    >
      {/* Background ambient lighting & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-600/15 via-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4 sm:py-8">
          {/* Left: Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:-mt-6">
            {/* Eyebrow */}
            <div ref={badgeRef}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs font-bold text-slate-300 tracking-wide">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                BRANDEXA GROWTH PERFORMANCE SYSTEM
              </span>
            </div>

            {/* H1 — the core direct-response hook */}
            <h1
              ref={headlineRef}
              className="text-[clamp(2.1rem,4.6vw,4.2rem)] font-black leading-[1.08] tracking-tight text-white"
            >
              {renderHeadline()}
            </h1>

            {/* Supporting message */}
            <p
              ref={subRef}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              Every time you get on a sales call, you hear the exact same excuse:{" "}
              <span className="text-amber-300 italic font-semibold">&quot;Let me think about it.&quot;</span> We fix your lead quality with scroll-stopping video creatives, and manage your Meta Ads for{" "}
              <span className="text-emerald-400 font-bold underline underline-offset-4 decoration-emerald-500/50">100% FREE</span>.
            </p>

            {/* CTA group */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <a
                ref={primaryBtnRef}
                href="#booking"
                onClick={scrollToBooking}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>CLAIM YOUR FREE AD MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#process"
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <span>SEE HOW IT WORKS</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 font-semibold tracking-wide pt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>ONLY 5 CLIENTS ACCEPTED EACH MONTH (2 SPOTS LEFT)</span>
            </div>
          </div>

          {/* Right: Dashboard Visual */}
          <div ref={dashboardRef} className="lg:col-span-5">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * HeroDashboard — High-Impact Live Meta Ads & Growth Visual
 */
function HeroDashboard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!cardRef.current) return;

    const card = cardRef.current;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 6,
        rotateX: -y * 6,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dash-metric",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".dash-card",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.8,
          ease: "power3.out",
        }
      );
    }, card);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
      ctx.revert();
    };
  }, []);

  const metrics = [
    { label: "AVERAGE ROAS", value: "4.85x", sub: "+380% vs avg", color: "#00E87B" },
    { label: "QUALIFIED LEADS", value: "12,450+", sub: "100% Pre-Filtered", color: "#3B82F6" },
    { label: "COST / QUALIFIED LEAD", value: "$14.20", sub: "↓ 42% Reduction", color: "#F59E0B" },
    { label: "CLIENT REVENUE", value: "$142,850", sub: "Tracked Conversions", color: "#A855F7" },
  ];

  const creativeCards = [
    { label: "Video Reel Ad", icon: "🎬" },
    { label: "Direct UGC Hook", icon: "📱" },
    { label: "Dynamic Retargeting", icon: "🔄" },
    { label: "CAPI Funnel", icon: "⚙️" },
  ];

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
        {/* Top subtle glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-bold text-slate-300 tracking-wider">
              META ADS & FUNNEL HUB
            </span>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE CAMPAIGN DATA
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="dash-metric bg-slate-950/80 border border-slate-800/80 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between"
            >
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                {metric.label}
              </span>
              <span
                className="text-xl sm:text-2xl font-black tracking-tight block my-0.5"
                style={{ color: metric.color }}
              >
                {metric.value}
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Live Sparkline Graph */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-3 sm:p-3.5 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
            <span>Conversion Velocity</span>
            <span className="text-emerald-400 font-bold">+284% Surge</span>
          </div>
          <svg
            className="w-full h-14"
            viewBox="0 0 200 40"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#00E87B" />
              </linearGradient>
              <linearGradient id="heroFillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E87B" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00E87B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 35 Q30 30 60 22 T120 14 T160 8 T200 3"
              fill="none"
              stroke="url(#heroLineGrad)"
              strokeWidth="2.5"
            />
            <path
              d="M0 35 Q30 30 60 22 T120 14 T160 8 T200 3 L200 40 L0 40 Z"
              fill="url(#heroFillGrad)"
            />
          </svg>
        </div>

        {/* Strategy Badges (2-column layout) */}
        <div className="grid grid-cols-2 gap-2.5">
          {creativeCards.map((card) => (
            <div
              key={card.label}
              className="dash-card bg-slate-950/90 border border-slate-800 rounded-xl px-3 py-2.5 flex items-center gap-2.5 hover:border-slate-700 transition-colors"
            >
              <span className="text-base">{card.icon}</span>
              <span className="text-xs font-bold text-slate-300">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
