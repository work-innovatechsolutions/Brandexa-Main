"use client";

import React, { useState } from "react";
import { Search, Sliders, Film, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { ResearchVisualization } from "./ResearchVisualization";
import { FunnelVisualization } from "./FunnelVisualization";
import { CreativeVisualization } from "./CreativeVisualization";
import { RetargetingVisualization } from "./RetargetingVisualization";

const BLUEPRINT_STAGES = [
  {
    num: "01",
    title: "DEEP MARKET & AVATAR RESEARCH",
    icon: Search,
    color: "#38bdf8", // Sky blue
    tag: "PSYCHOLOGICAL FOUNDATION",
    description:
      "Before spending a single dollar, we analyze your ideal customers, their deepest pain points, and their buying psychology.",
    highlights: [
      "Competitor funnel tear-downs",
      "Psychological triggers & desires mapping",
      "High-intent audience segment profiling",
      "Unfair offer positioning strategy"
    ],
    visualization: ResearchVisualization,
  },
  {
    num: "02",
    title: "CUSTOM FUNNEL DESIGN",
    icon: Sliders,
    color: "#a855f7", // Purple
    tag: "CONVERSION ARCHITECTURE",
    description:
      "We don't use templates. We build a proven, tailored sales funnel designed specifically for your business model to filter out unqualified leads immediately.",
    highlights: [
      "Custom intake qualification questions",
      "Pre-sell educational video bridge pages",
      "Automated calendar booking integration",
      "Zero friction mobile-first UX"
    ],
    visualization: FunnelVisualization,
  },
  {
    num: "03",
    title: "PSYCHOLOGICAL AD CREATIVES",
    icon: Film,
    color: "#ec4899", // Pink
    tag: "OUR SPECIALTY",
    isSpecialty: true,
    description:
      "We replace boring images with cinematic, scroll-stopping videos, B-rolls, and motion graphics that build massive trust and pre-qualify your leads before the sales call even happens.",
    highlights: [
      "Pattern-interrupt 3-second visual hooks",
      "High-trust founder storytelling & B-roll",
      "Social proof UGC video production",
      "Direct response copy scripts"
    ],
    visualization: CreativeVisualization,
  },
  {
    num: "04",
    title: "CAMPAIGN LAUNCH & ADVANCED RETARGETING",
    icon: TrendingUp,
    color: "#10b981", // Emerald
    tag: "SCALING ENGINE",
    description:
      "We launch your 100% free managed campaigns. For those who visit but don't take action, we track them and intelligently retarget them to recover your lost revenue.",
    highlights: [
      "Clean Meta Pixel & CAPI server setup",
      "Broad + Lookalike algorithmic scaling",
      "Omnipresent dynamic retargeting loop",
      "Daily ROAS optimization & founder oversight"
    ],
    visualization: RetargetingVisualization,
  },
];

export function GrowthBlueprint() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      
      {/* Background Volumetric Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Progress Indicator Bar */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[11px] font-black tracking-[0.3em] text-slate-400 font-mono uppercase block mb-3">
            YOUR GROWTH SYSTEM
          </span>
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-slate-900/80 border border-white/10 rounded-full px-5 py-2.5 shadow-xl backdrop-blur-md">
            {BLUEPRINT_STAGES.map((s, idx) => (
              <React.Fragment key={s.num}>
                <span
                  className={`text-xs sm:text-sm font-mono font-black transition-colors ${
                    hoveredStage === idx
                      ? "text-emerald-400 scale-110"
                      : "text-slate-300"
                  }`}
                >
                  {s.num}
                </span>
                {idx < BLUEPRINT_STAGES.length - 1 && (
                  <span className="text-slate-600 font-mono text-xs">━━━━</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Connected Stages Timeline Container */}
        <div className="relative space-y-16 sm:space-y-28">
          
          {/* Vertical Connecting Central Spine (Desktop) */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500/30 via-purple-500/30 via-pink-500/30 to-emerald-500/30 pointer-events-none z-0">
            {/* Animated Travelling Particle */}
            <div 
              className="absolute w-2 h-8 rounded-full bg-gradient-to-b from-lime-400 to-emerald-400 blur-[1px] shadow-[0_0_12px_#84cc16]"
              style={{
                animation: "travelParticle 6s ease-in-out infinite"
              }}
            />
          </div>

          <style jsx>{`
            @keyframes travelParticle {
              0% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>

          {/* Render 4 Blueprint Stages */}
          {BLUEPRINT_STAGES.map((stage, index) => {
            const isHovered = hoveredStage === index;
            const StageIcon = stage.icon;
            const VisualComponent = stage.visualization;
            const isEven = index % 2 === 1;

            return (
              <div
                key={stage.num}
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center z-10"
              >
                
                {/* Description Column (Alternates side on desktop) */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  {/* Stage Number & Badge */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-black font-mono text-sm border transition-all duration-300 shadow-md"
                      style={{
                        backgroundColor: isHovered ? stage.color : "#060b14",
                        color: isHovered ? "#000" : stage.color,
                        borderColor: stage.color,
                        boxShadow: isHovered ? `0 0 20px ${stage.color}50` : "none"
                      }}
                    >
                      {stage.num}
                    </div>

                    <span
                      className={`text-[10px] sm:text-xs font-black tracking-widest font-mono uppercase px-3 py-1 rounded-full border ${
                        stage.isSpecialty
                          ? "bg-lime-500/10 text-lime-400 border-lime-500/30"
                          : "bg-slate-900 text-slate-300 border-white/10"
                      }`}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Feature Bullets Card */}
                  <div className="bg-[#050912]/80 border border-white/5 rounded-2xl p-4 sm:p-5 space-y-2.5 backdrop-blur-md">
                    {stage.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: stage.color }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <VisualComponent isHovered={isHovered} />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
