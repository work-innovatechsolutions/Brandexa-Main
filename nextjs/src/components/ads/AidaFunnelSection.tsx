"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Search, 
  Video, 
  Sliders, 
  Target, 
  RefreshCw, 
  BarChart3, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

// Funnel Segment dimensions for 3D tapered frustum math
// Stacked vertically: y_top to y_bottom, with progressive tapering (r_top to r_bottom)
const STAGES = [
  {
    id: "attention",
    letter: "A",
    name: "ATTENTION",
    desc: "Research",
    color: "#38bdf8", // Sky blue
    icon: Search,
    y_top: 15,
    y_bottom: 65,
    r_top: 130,
    r_bottom: 110,
    bullets: [
      "Market & Audience Research",
      "Competitor Analysis",
      "Trend & Opportunity Mapping",
      "Strategy Foundation"
    ]
  },
  {
    id: "interest",
    letter: "I",
    name: "INTEREST",
    desc: "Creative",
    color: "#a855f7", // Purple
    icon: Video,
    y_top: 80,
    y_bottom: 130,
    r_top: 104,
    r_bottom: 88,
    bullets: [
      "Scroll-Stopping Creatives",
      "Visual Storytelling",
      "Ad Copy That Connects",
      "Content That Engages"
    ]
  },
  {
    id: "desire",
    letter: "D",
    name: "DESIRE",
    desc: "Funnel",
    color: "#f97316", // Orange
    icon: Sliders,
    y_top: 145,
    y_bottom: 195,
    r_top: 84,
    r_bottom: 70,
    bullets: [
      "Landing Page Optimization",
      "Offer & Value Positioning",
      "Conversion-Centered Funnel",
      "Seamless User Journey"
    ]
  },
  {
    id: "action",
    letter: "A",
    name: "ACTION",
    desc: "Meta Ads",
    color: "#10b981", // Emerald/Teal
    icon: Target,
    y_top: 210,
    y_bottom: 260,
    r_top: 66,
    r_bottom: 54,
    bullets: [
      "High-Performing Ad Campaigns",
      "Audience Targeting",
      "A/B Testing & Optimization",
      "Maximize ROI"
    ]
  },
  {
    id: "retargeting",
    letter: "R",
    name: "RETARGETING",
    desc: "Retargeting",
    color: "#06b6d4", // Cyan
    icon: RefreshCw,
    y_top: 275,
    y_bottom: 325,
    r_top: 50,
    r_bottom: 40,
    bullets: [
      "Re-Engage Warm Audiences",
      "Dynamic Retargeting Ads",
      "Personalized Messaging",
      "Bring Back. Close More."
    ]
  },
  {
    id: "revenue",
    letter: "R",
    name: "REVENUE",
    desc: "Revenue",
    color: "#84cc16", // Lime
    icon: BarChart3,
    y_top: 340,
    y_bottom: 390,
    r_top: 36,
    r_bottom: 28,
    bullets: [
      "Track & Measure Performance",
      "Optimize for Growth",
      "Increase Conversions",
      "Drive Sustainable Revenue"
    ]
  }
];

export function AidaFunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 });

  // Detect accessibility prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Continuous animation loop for active stages matching the particle flow
  useEffect(() => {
    if (reducedMotion) return;
    
    let timer: NodeJS.Timeout;
    const runCycle = () => {
      // Loop: 8 seconds total. Each stage activates for ~1.1s, then revenue endpoint triggers
      const nextStageIndex = (activeStage + 1) % (STAGES.length + 1);
      setActiveStage(nextStageIndex);
      timer = setTimeout(runCycle, 1200);
    };

    timer = setTimeout(runCycle, 1200);
    return () => clearTimeout(timer);
  }, [activeStage, reducedMotion]);

  // Pointer Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;

    setParallax({
      x: xVal * 12,
      y: yVal * 10,
      rotX: yVal * -3,
      rotY: xVal * 3,
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0, rotX: 0, rotY: 0 });
  };

  const triggerModalBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "3d_funnel" });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking"));
    }
  };

  const isRevenueActive = activeStage === STAGES.length && !reducedMotion;

  return (
    <section 
      className="relative py-24 sm:py-32 bg-[#02050A] text-white overflow-hidden border-b border-white/5"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-[#3b82f6]/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#84cc16]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#38bdf8] bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20 uppercase mb-4 font-mono">
            3D GROWTH FUNNEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black leading-[1.1] tracking-tight uppercase">
            THE 3D PERFORMANCE MARKETING ENGINE
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto">
            See how attention converts into sustainable revenue. Every stage represents a specialized system built to scale your business.
          </p>
        </div>

        {/* 3D Funnel Grid Layout */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto transition-transform duration-300 ease-out"
          style={{
            transform: !reducedMotion 
              ? `translate3d(${parallax.x}px, ${parallax.y}px, 0px) rotateX(${parallax.rotX}deg) rotateY(${parallax.rotY}deg)`
              : "none",
            perspective: 1200
          }}
        >
          
          {/* Left Column (50%): 3D Conical Vector Funnel Object */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative select-none">
            
            {/* Unified 3D Funnel SVG Container */}
            <div className="relative w-full max-w-[320px]">
              
              <svg 
                viewBox="0 0 300 480" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                <defs>
                  {/* Volumetric stage gradients */}
                  {STAGES.map((stage) => (
                    <linearGradient key={stage.id} id={`grad-${stage.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={stage.color} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={stage.color} stopOpacity="0.2" />
                    </linearGradient>
                  ))}
                  
                  {/* Dynamic Glowing Filter */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Draw 6 Tapered 3D Segments */}
                {STAGES.map((stage, index) => {
                  const isActive = activeStage === index;
                  const ry_top = stage.r_top * 0.22;
                  const ry_bottom = stage.r_bottom * 0.22;

                  return (
                    <g 
                      key={stage.id}
                      className="cursor-pointer"
                      onClick={() => setActiveStage(index)}
                      style={{
                        animation: !reducedMotion 
                          ? `float-${stage.id} ${4.2 + index * 0.3}s ease-in-out infinite alternate`
                          : "none"
                      }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          @keyframes float-${stage.id} {
                            0% { transform: translateY(0px); }
                            100% { transform: translateY(${3 + index * 0.6}px); }
                          }
                        `
                      }} />

                      {/* Slanted Side Body Wall of Frustum (Casing) */}
                      <path
                        d={`M ${150 - stage.r_top} ${stage.y_top} 
                            L ${150 - stage.r_bottom} ${stage.y_bottom} 
                            A ${stage.r_bottom} ${ry_bottom} 0 0 0 ${150 + stage.r_bottom} ${stage.y_bottom} 
                            L ${150 + stage.r_top} ${stage.y_top} 
                            A ${stage.r_top} ${ry_top} 0 0 1 ${150 - stage.r_top} ${stage.y_top} Z`}
                        fill={`url(#grad-${stage.id})`}
                        stroke={isActive ? stage.color : `${stage.color}25`}
                        strokeWidth="1.2"
                        className="transition-all duration-300"
                        style={{
                          filter: isActive ? "url(#glow)" : "none"
                        }}
                      />

                      {/* Top Cap Ellipse (Lid) */}
                      <ellipse
                        cx="150"
                        cy={stage.y_top}
                        rx={stage.r_top}
                        ry={ry_top}
                        fill="#060b1570"
                        stroke={isActive ? stage.color : `${stage.color}35`}
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />

                      {/* Central Icon Ring Circle Overlay */}
                      <circle
                        cx="150"
                        cy={(stage.y_top + stage.y_bottom) / 2}
                        r="14"
                        fill="#03060c"
                        stroke={isActive ? stage.color : "rgba(255,255,255,0.06)"}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      
                      {/* Centered Lucide Icon inside SVG */}
                      <g 
                        className="transition-all duration-300 pointer-events-none"
                        style={{
                           transformOrigin: `150px ${(stage.y_top + stage.y_bottom) / 2}px`,
                           transform: `scale(${isActive ? 1.15 : 1})`,
                           opacity: isActive ? 1 : 0.65,
                        }}
                      >
                        <stage.icon 
                          width="14" 
                          height="14" 
                          x={150 - 7} 
                          y={((stage.y_top + stage.y_bottom) / 2) - 7} 
                          color={stage.color}
                        />
                      </g>
                    </g>
                  );
                })}

                {/* Central Volumetric Particle Stream (Leads path) */}
                {!reducedMotion && (
                  <g className="pointer-events-none">
                    {/* Continuous data stream line inside center axis */}
                    <line 
                      x1="150" 
                      y1="25" 
                      x2="150" 
                      y2="385" 
                      stroke="url(#particleTrailGrad)" 
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      opacity="0.35"
                    />
                    <linearGradient id="particleTrailGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#84cc16" />
                    </linearGradient>

                    {/* Staggered glowing flow particles */}
                    {[...Array(4)].map((_, i) => (
                      <circle
                        key={i}
                        cx="150"
                        cy="0"
                        r="3.5"
                        fill={activeStage >= 0 && activeStage < STAGES.length ? STAGES[activeStage].color : "#a855f7"}
                        opacity="0"
                        style={{
                          animation: `flowParticle 3.8s infinite linear`,
                          animationDelay: `${i * 0.95}s`,
                          filter: "drop-shadow(0 0 5px currentColor)"
                        }}
                      />
                    ))}

                    <style dangerouslySetInnerHTML={{
                      __html: `
                        @keyframes flowParticle {
                          0% { cy: 20px; opacity: 0; }
                          8% { opacity: 0.95; }
                          92% { opacity: 0.95; }
                          100% { cy: 388px; opacity: 0; }
                        }
                      `
                    }} />
                  </g>
                )}

                {/* Bottom Revenue Growth Circle Endpoint ($) */}
                <g 
                  className="cursor-pointer"
                  style={{
                    animation: !reducedMotion ? "float-revenue-endpoint 4.5s ease-in-out infinite alternate" : "none"
                  }}
                >
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes float-revenue-endpoint {
                        0% { transform: translateY(0px); }
                        100% { transform: translateY(4px); }
                      }
                    `
                  }} />
                  
                  <circle
                    cx="150"
                    cy="435"
                    r="24"
                    fill={isRevenueActive ? "rgba(132, 204, 22, 0.15)" : "#060b15"}
                    stroke={isRevenueActive ? "#84cc16" : "rgba(132, 204, 22, 0.3)"}
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      filter: isRevenueActive ? "url(#glow)" : "none"
                    }}
                  />
                  
                  {/* Centered TrendingUp Icon inside SVG */}
                  <g 
                    className="transition-all duration-300 pointer-events-none"
                    style={{
                      transformOrigin: "150px 435px",
                      transform: `scale(${isRevenueActive ? 1.12 : 1})`
                    }}
                  >
                    <TrendingUp 
                      width="18" 
                      height="18" 
                      x={150 - 9} 
                      y={435 - 9} 
                      color="#84cc16" 
                    />
                  </g>
                </g>
              </svg>

              {/* Left Side Tapered Labels: A ATTENTION, I INTEREST, etc. */}
              {STAGES.map((stage, index) => {
                const isActive = activeStage === index;
                const y_center_pct = ((stage.y_top + stage.y_bottom) / 2) / 480 * 100;
                
                return (
                  <div
                    key={`side-label-${stage.id}`}
                    className="absolute -translate-y-1/2 transition-all duration-350 font-mono flex items-center gap-3 whitespace-nowrap"
                    style={{
                      top: `${y_center_pct}%`,
                      left: `calc(50% - ${stage.r_top + 24}px)`,
                      transform: `translate3d(-100%, -50%, 0) scale(${isActive ? 1.05 : 1})`,
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    <span className="font-black text-lg sm:text-xl" style={{ color: stage.color }}>
                      {stage.letter}
                    </span>
                    <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-300 uppercase mt-0.5">
                      {stage.name}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* Stage text status */}
            <div className="text-center mt-6">
              <span className="text-[10px] font-black tracking-[0.25em] text-slate-400 block uppercase font-mono">
                SUSTAINABLE GROWTH
              </span>
              <span className="text-[8px] text-slate-500 block uppercase mt-1 tracking-wider font-mono">
                EVERY COMPONENT WORKS TOGETHER AS A COHESIVE ENGINE
              </span>
            </div>

          </div>

          {/* Right Column (50%): Dynamic Content Panel & AIDA labels */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            
            {STAGES.map((stage, index) => {
              const isActive = activeStage === index;
              if (!isActive) return null;

              return (
                <div 
                  key={stage.id}
                  className="space-y-6 transition-all duration-500 animate-fadeIn"
                >
                  {/* Large AIDA display tag */}
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-6xl font-black font-mono leading-none transition-transform duration-300 scale-105"
                      style={{ color: stage.color }}
                    >
                      {stage.letter}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight">
                        {stage.name}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 font-mono tracking-wider mt-0.5 uppercase">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Container Card */}
                  <div className="bg-[#060b15]/60 border border-slate-850 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                    <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                    
                    <span className="text-[9px] font-black tracking-widest text-slate-450 uppercase block mb-4 font-mono">
                      WHAT WE DO
                    </span>
                    <ul className="space-y-3.5">
                      {stage.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" 
                            style={{ backgroundColor: stage.color }}
                          />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button Trigger */}
                  <div className="pt-2">
                    <Link
                      href="/ads/account-setup"
                      onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "3d_funnel" })}
                      className="group inline-flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-xl shadow-md shadow-emerald-500/10 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <span>CLAIM YOUR FREE AD MANAGEMENT NOW</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2]" />
                    </Link>
                  </div>

                </div>
              );
            })}

            {/* Static Revenue state fallback panel */}
            {isRevenueActive && (
              <div className="space-y-6 transition-all duration-500 animate-fadeIn">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black font-mono leading-none text-lime-450">$</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-white">
                      GROWTH
                    </h3>
                    <p className="text-xs font-bold text-lime-450 font-mono tracking-wider mt-0.5 uppercase">
                      SUSTAINABLE REVENUE
                    </p>
                  </div>
                </div>

                <div className="bg-[#060b15]/60 border border-slate-850 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                  <span className="text-[9px] font-black tracking-widest text-slate-450 uppercase block mb-4 font-mono">
                    WHAT WE DO
                  </span>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-lime-450" />
                      <span>Unlock compound scaling and market authority</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-lime-450" />
                      <span>Maximize Lifetime Value (LTV) and brand loyalty</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/ads/account-setup"
                    onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "3d_funnel_growth" })}
                    className="inline-flex items-center gap-2 px-7 py-4 text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-xl shadow-md cursor-pointer transition-all"
                  >
                    <span>CLAIM YOUR FREE AD MANAGEMENT NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
