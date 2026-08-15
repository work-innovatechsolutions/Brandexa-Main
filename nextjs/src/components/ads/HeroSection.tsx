"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Users, ChevronDown, ArrowDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { trackEvent, EVENTS } from "@/lib/tracking";

/**
 * LiveKpiCard — Self-contained dynamic KPI card component
 * Increments values strictly upwards and loops back, respecting prefers-reduced-motion
 */
interface LiveKpiCardProps {
  label: string;
  baseValue: number;
  maxLimit: number;
  increment: number;
  formatValue: (val: number) => string;
  sparklinePath: (offset: number) => string;
  cardClass: string;
  glowColor: string;
}

function LiveKpiCard({
  label,
  baseValue,
  maxLimit,
  increment,
  formatValue,
  sparklinePath,
  cardClass,
  glowColor
}: LiveKpiCardProps) {
  const [value, setValue] = useState(baseValue);
  const [isUpdating, setIsUpdating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const runFluctuation = () => {
      // Random interval between 2 to 5 seconds
      const nextTime = Math.random() * 3000 + 2000;

      timerId = setTimeout(() => {
        if (document.hidden) {
          runFluctuation();
          return;
        }

        setValue((prev) => {
          let nextVal = prev + increment;
          
          // Check if limit is exceeded (handles both positive increments and negative decrements)
          const isExceeded = increment > 0 
            ? nextVal > maxLimit 
            : nextVal < maxLimit;

          if (isExceeded) {
            nextVal = baseValue;
          }
          return nextVal;
        });

        if (!reducedMotion) {
          setIsUpdating(true);
          setTimeout(() => setIsUpdating(false), 450);
        }

        runFluctuation();
      }, nextTime);
    };

    runFluctuation();

    return () => clearTimeout(timerId);
  }, [baseValue, maxLimit, increment, reducedMotion]);

  // Calculate progress ratio from 0 to 1 between baseValue and maxLimit
  const range = maxLimit - baseValue;
  const offset = range ? (value - baseValue) / range : 0;


  return (
    <div className={`${cardClass} transition-colors duration-300 relative overflow-hidden group shadow-lg`}>
      <span className="text-[8px] font-extrabold text-slate-450 tracking-wider uppercase font-mono select-none">
        {label}
      </span>
      <span
        style={{
          transform: isUpdating && !reducedMotion ? "scale(1.06)" : "scale(1)",
          textShadow: isUpdating && !reducedMotion ? `0 0 10px ${glowColor}` : "none",
        }}
        className={`text-lg font-black tracking-tight my-0.5 block transition-all duration-300 ease-out select-none`}
      >
        {formatValue(value)}
      </span>
      <svg
        className={`w-full h-5 transition-transform duration-300 ease-out ${
          isUpdating && !reducedMotion ? "scale-y-105" : ""
        }`}
        viewBox="0 0 60 20"
        preserveAspectRatio="none"
      >
        <path
          d={sparklinePath(offset)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-all duration-300 ease-out"
        />
      </svg>
    </div>
  );
}

/**
 * LiveCampaignOverview — Smooth dynamic campaign chart overlay component
 */
function LiveCampaignOverview() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animFrame: number;
    const tick = () => {
      if (!document.hidden) {
        setOffset(Math.sin(Date.now() / 1200) * 3);
      }
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="bg-[#03060c]/90 border border-slate-850 rounded-2xl p-3.5 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <span className="font-extrabold text-slate-300 tracking-wider uppercase text-[9px] font-mono">
          CAMPAIGN OVERVIEW
        </span>
        <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 bg-slate-900 border border-slate-855 px-2 py-0.5 rounded font-mono">
          <span>Last 30 Days</span>
          <ChevronDown className="w-2.5 h-2.5" />
        </div>
      </div>

      {/* Campaign Graph */}
      <div className="relative h-28 w-full flex items-end">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] font-mono text-slate-650">
          <span>140</span>
          <span>120</span>
          <span>100</span>
        </div>

        <svg className="w-full h-full pl-6" viewBox="0 0 300 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartAreaLive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>

          <line x1="0" y1="20" x2="300" y2="20" stroke="#141d2e" strokeDasharray="3 3" />
          <line x1="0" y1="50" x2="300" y2="50" stroke="#141d2e" strokeDasharray="3 3" />

          {/* Dynamic oscillating chart paths */}
          <path
            d={`M0 60 Q30 ${20 + offset} 60 ${50 - offset} T120 ${20 + offset * 0.5} T180 ${60 - offset} T240 ${15 + offset} T300 ${35 - offset}`}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            className="transition-all duration-200"
          />
          <path
            d={`M0 60 Q30 ${20 + offset} 60 ${50 - offset} T120 ${20 + offset * 0.5} T180 ${60 - offset} T240 ${15 + offset} T300 ${35 - offset} L300 80 L0 80 Z`}
            fill="url(#chartAreaLive)"
            className="transition-all duration-200"
          />

          <circle cx="60" cy={50 - offset} r="3" fill="#38bdf8" className="transition-all duration-200" />
          <circle cx="120" cy={20 + offset * 0.5} r="3" fill="#38bdf8" className="transition-all duration-200" />
          <circle cx="240" cy={15 + offset} r="3" fill="#38bdf8" className="transition-all duration-200" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Brandexa Growth — Awwwards-Level Cinematic Website Hero Section
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const hudContainerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking for 3D Dashboard HUD with smooth spring easing
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!hudContainerRef.current) return;

    const container = hudContainerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(".hud-tilt-target", {
        rotateY: x * -10,
        rotateX: y * 6,
        x: x * 10,
        y: y * 10,
        duration: 0.8,
        ease: "power2.out",
        transformPerspective: 1200,
      });

      gsap.to(".float-video-ad", { x: x * 14, y: y * 14, rotate: 6 + x * 3, duration: 0.9, ease: "power2.out" });
      gsap.to(".float-ugc-ad", { x: x * -12, y: y * -12, rotate: -4 + y * 2, duration: 0.9, ease: "power2.out" });
      gsap.to(".float-retargeting-ad", { x: x * 16, y: y * -16, rotate: -8 + x * 4, duration: 0.9, ease: "power2.out" });
      gsap.to(".float-funnel-card", { x: x * 8, y: y * 8, duration: 0.8, ease: "power2.out" });
      gsap.to(".float-audience-card", { x: x * -10, y: y * -10, duration: 0.8, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(".hud-tilt-target", {
        rotateY: -8,
        rotateX: 4,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to([".float-video-ad", ".float-ugc-ad", ".float-retargeting-ad", ".float-funnel-card", ".float-audience-card"], {
        x: 0,
        y: 0,
        rotate: (i) => [6, -4, -8, 0, 0][i] || 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hud-tilt-target",
        { opacity: 0, scale: 0.94, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.1, ease: "power3.out" }
      );
    }, sectionRef);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, []);

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "hero_primary" });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking"));
    }
  };

  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "hero_secondary" });
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen bg-[#02050A] text-white overflow-hidden pt-24 lg:pt-28 pb-10 flex flex-col justify-between selection:bg-lime-500/30 selection:text-lime-200"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[600px] opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(56, 189, 248, 0.45) 1px, transparent 1.5px)`,
            backgroundSize: "28px 28px"
          }}
        />

        <div className="absolute top-1/6 right-0 w-[650px] h-[650px] bg-sky-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-blue-900/10 blur-[130px] rounded-full" />

        {/* Volumetric data waves */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-[320px] opacity-80"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#22c55e" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="waveGlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0.75" />
            </linearGradient>
            <filter id="bloomFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M-100 240 C 260 360, 480 140, 880 220 C 1180 280, 1380 150, 1580 230"
            stroke="url(#waveGlow1)"
            strokeWidth="3.2"
            filter="url(#bloomFilter)"
          />

          <path
            d="M-100 280 C 220 160, 580 320, 980 180 C 1220 250, 1420 180, 1580 210"
            stroke="url(#waveGlow2)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          <path
            d="M-50 210 C 320 290, 620 190, 1020 250 C 1280 290, 1480 220, 1580 260"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 my-auto">
        

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-sky-400 uppercase font-mono">
                ● PERFORMANCE MARKETING SYSTEM
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,4.4vw,4.1rem)] font-black leading-[1.02] tracking-tight uppercase font-sans">
              <span className="block text-white">GETTING HUNDREDS</span>
              <span className="block text-white">OF LEADS, BUT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                ZERO QUALIFIED BUYERS?
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-350 leading-relaxed max-w-xl font-normal">
              We fix your lead quality with scroll-stopping video creatives, and manage your Meta Ads for{" "}
              <span className="text-lime-400 font-bold underline underline-offset-4 decoration-lime-500/50">
                100% FREE
              </span>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1.5">
              <Link
                href="/ads/account-setup"
                onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "hero_primary" })}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-full shadow-[0_4px_20px_rgba(132,204,22,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                <span>CLAIM YOUR FREE AD MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              </Link>

              <a
                href="#process"
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-700/60 rounded-full backdrop-blur-xl transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
              >
                <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center bg-slate-800/40 mr-1.5">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>SEE HOW IT WORKS</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-2xl bg-sky-950/70 border border-sky-500/35 flex items-center justify-center text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                <Users className="w-5 h-5 text-sky-400" />
              </div>
              <div className="text-xs font-semibold leading-snug">
                <div className="text-slate-400 font-mono text-[10px]">
                  ONLY 5 CLIENTS ACCEPTED EACH MONTH
                </div>
                <div className="text-white">
                  <span className="text-lime-400 font-black">2 SPOTS</span> CURRENTLY AVAILABLE
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div ref={hudContainerRef} className="relative w-full max-w-[550px] lg:max-w-[54vw] z-10">
              
              {/* Floating Top Meta Badge */}
              <div className="absolute -top-8 left-10 z-30 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#050b16]/95 border border-sky-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 text-sky-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 11.474c-1.325-1.922-3.13-3.074-4.83-3.074-2.856 0-4.87 2.37-4.87 5.6 0 3.23 2.014 5.6 4.87 5.6 1.7 0 3.505-1.152 4.83-3.074 1.326 1.922 3.13 3.074 4.83 3.074 2.856 0 4.87-2.37 4.87-5.6 0-3.23-2.014-5.6-4.87-5.6-1.7 0-3.504 1.152-4.83 3.074zm-4.83 6.626c-1.85 0-3.37-1.602-3.37-4.1 0-2.498 1.52-4.1 3.37-4.1 1.258 0 2.658.97 3.738 2.632-1.08 1.662-2.48 2.568-3.738 2.568zm9.66 0c-1.258 0-2.658-.906-3.738-2.568 1.08-1.662 2.48-2.632 3.738-2.632 1.85 0 3.37 1.602 3.37 4.1 0 2.498-1.52 4.1-3.37 4.1z"/>
                  </svg>
                </div>
                <svg className="w-12 h-10 text-sky-400/40 -mt-1" viewBox="0 0 60 40">
                  <path d="M30 0 Q30 25 50 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
                </svg>
              </div>

              {/* 3D Rotated Perspective Layout */}
              <div 
                ref={dashboardRef}
                className="hud-tilt-target transition-transform duration-200 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-8deg) rotateX(4deg)",
                }}
              >
                
                {/* Main Glass Dashboard Card */}
                <div className="relative bg-[#060a15]/85 backdrop-blur-3xl border border-sky-500/30 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
                  
                  <div className="absolute inset-0 border border-sky-400/20 rounded-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80">
                    <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-sans">
                      CAMPAIGN PERFORMANCE
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>● ILLUSTRATIVE CAMPAIGN VIEW</span>
                    </div>
                  </div>

                  {/* 4 KPI Glass Columns with live-number animations */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                    
                    {/* KPI 1: ROAS */}
                    <LiveKpiCard
                      label="ROAS"
                      baseValue={4.8}
                      maxLimit={5.2}
                      increment={0.1}
                      formatValue={(val) => val.toFixed(1) + "X"}
                      sparklinePath={(offset) => `M0 16 Q15 ${11 - offset * 3} 30 ${7 - offset * 2} T60 2`}
                      cardClass="bg-[#03060c]/90 border border-slate-850 rounded-2xl p-3 flex flex-col justify-between hover:border-blue-500/45 text-blue-400"
                      glowColor="rgba(59, 130, 246, 0.8)"
                    />

                    {/* KPI 2: QUALIFIED LEADS */}
                    <LiveKpiCard
                      label="QUALIFIED LEADS"
                      baseValue={42}
                      maxLimit={46}
                      increment={1}
                      formatValue={(val) => "+" + Math.round(val) + "%"}
                      sparklinePath={(offset) => `M0 17 Q15 ${13 - offset * 2} 30 ${6 - offset * 2} T60 1`}
                      cardClass="bg-[#03060c]/90 border border-slate-855 rounded-2xl p-3 flex flex-col justify-between hover:border-emerald-500/45 text-emerald-400"
                      glowColor="rgba(16, 185, 129, 0.8)"
                    />

                    {/* KPI 3: COST / LEAD */}
                    <LiveKpiCard
                      label="COST / LEAD"
                      baseValue={-31}
                      maxLimit={-35}
                      increment={-1}
                      formatValue={(val) => Math.round(val) + "%"}
                      sparklinePath={(offset) => `M0 ${4 + offset * 2} Q15 ${9 + offset * 2} 30 ${13 + offset * 2} T60 18`}
                      cardClass="bg-[#03060c]/90 border border-slate-855 rounded-2xl p-3 flex flex-col justify-between hover:border-lime-500/45 text-lime-400"
                      glowColor="rgba(132, 204, 22, 0.8)"
                    />

                    {/* KPI 4: REVENUE */}
                    <LiveKpiCard
                      label="REVENUE"
                      baseValue={2.4}
                      maxLimit={2.45}
                      increment={0.01}
                      formatValue={(val) => "₹" + val.toFixed(2) + "L"}
                      sparklinePath={(offset) => `M0 18 Q15 ${12 - offset * 3} 30 ${9 - offset * 2} T60 2`}
                      cardClass="bg-[#03060c]/90 border border-slate-855 rounded-2xl p-3 flex flex-col justify-between hover:border-cyan-500/45 text-cyan-400"
                      glowColor="rgba(6, 182, 212, 0.8)"
                    />

                  </div>

                  {/* Campaign Chart Section */}
                  <LiveCampaignOverview />

                </div>

                {/* Layered Floating Creative Ad Cards */}

                {/* 1. Video Ad */}
                <div className="float-video-ad absolute -top-12 -right-8 z-20 w-32 sm:w-36 bg-[#050a14]/95 border border-sky-500/40 rounded-2xl p-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform">
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900">
                    <img 
                      src="/ads/video-ad.jpg"
                      alt="Athletic Male Ad"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg relative z-10">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="text-[9px] font-extrabold text-center text-slate-300 tracking-wider uppercase mt-1.5 pb-0.5 font-mono select-none">
                    VIDEO AD
                  </div>
                </div>

                {/* 2. UGC Ad */}
                <div className="float-ugc-ad absolute top-1/2 -right-10 -translate-y-1/2 z-20 w-32 sm:w-36 bg-[#050a14]/95 border border-emerald-500/40 rounded-2xl p-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform">
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900">
                    <img 
                      src="/ads/ugc-ad.webp"
                      alt="UGC Woman Ad"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg relative z-10">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="text-[9px] font-extrabold text-center text-slate-300 tracking-wider uppercase mt-1.5 pb-0.5 font-mono select-none">
                    UGC AD
                  </div>
                </div>

                {/* 3. Retargeting Ad */}
                <div className="float-retargeting-ad absolute -bottom-10 -left-10 z-20 w-32 sm:w-36 bg-[#050a14]/95 border border-sky-500/40 rounded-2xl p-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform">
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900">
                    <img 
                      src="/ads/retargeting-ad.webp"
                      alt="Retargeting Product Ad"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg relative z-10">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="text-[9px] font-extrabold text-center text-slate-300 tracking-wider uppercase mt-1.5 pb-0.5 font-mono select-none">
                    RETARGETING AD
                  </div>
                </div>

                {/* 4. Sales Funnel */}
                <div className="float-funnel-card absolute -bottom-12 left-1/4 z-20 bg-[#060a15]/95 border border-blue-500/40 rounded-2xl px-3.5 py-2.5 text-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                  <div className="text-[8px] font-extrabold text-slate-300 tracking-wider uppercase mb-1 font-mono select-none">
                    SALES FUNNEL
                  </div>
                  <div className="w-10 h-8 mx-auto flex flex-col items-center justify-between py-0.5">
                    <div className="w-10 h-2 rounded bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
                    <div className="w-7.5 h-2 rounded bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                    <div className="w-5 h-2 rounded bg-lime-450 shadow-[0_0_6px_#a3e635]" />
                  </div>
                </div>

                {/* 5. Audience Insights */}
                <div className="float-audience-card absolute -bottom-12 right-12 z-20 bg-[#060a15]/95 border border-purple-500/40 rounded-2xl px-3.5 py-2.5 text-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                  <div className="text-[8px] font-extrabold text-slate-300 tracking-wider uppercase mb-1.5 font-mono select-none">
                    AUDIENCE INSIGHTS
                  </div>
                  <Users className="w-6 h-6 text-purple-400 mx-auto drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>

                {/* 6. Growth Chart Small Badge */}
                <div className="absolute -bottom-14 -right-2 z-20 w-11 h-11 bg-[#060a15]/95 border border-emerald-500/50 rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                  <div className="flex items-end gap-0.5 h-5">
                    <div className="w-1 h-2 bg-emerald-400 rounded shadow-[0_0_4px_#10b981]" />
                    <div className="w-1 h-3.5 bg-emerald-400 rounded shadow-[0_0_4px_#10b981]" />
                    <div className="w-1 h-5 bg-emerald-400 rounded shadow-[0_0_4px_#10b981]" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Technical scroll indicator */}
        <div className="flex flex-col items-center justify-center pt-8 text-slate-550 text-center select-none">
          <ArrowDown className="w-4 h-4 text-sky-400 animate-bounce mb-0.5" />
          <span className="text-[9px] font-bold tracking-[0.2em] text-slate-450 uppercase font-mono">
            scroll to discover
          </span>
        </div>

      </div>
    </section>
  );
}
