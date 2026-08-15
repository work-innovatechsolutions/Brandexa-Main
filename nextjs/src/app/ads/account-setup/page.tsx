"use client";

import React from "react";
import { GrowthBlueprint } from "@/components/ads/blueprint/GrowthBlueprint";
import { BlueprintCTA } from "@/components/ads/blueprint/BlueprintCTA";
import { Sparkles, ArrowDown } from "lucide-react";

export default function AccountSetupBlueprintPage() {
  return (
    <div className="relative min-h-screen bg-[#02050A] text-white selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 pt-28 sm:pt-36">
        
        {/* 1. Hero Section */}
        <section className="text-center max-w-5xl mx-auto px-5 sm:px-8 mb-8 sm:mb-14">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-5 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>BRANDEXA GROWTH SYSTEM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            THE EXACT BLUEPRINT TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400">
              MULTIPLY YOUR REVENUE
            </span>
          </h1>

          {/* Subtitles */}
          <div className="mt-6 space-y-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl text-slate-200 font-bold">
              We don&apos;t just run ads; we build highly profitable growth systems.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-medium">
              Here is exactly how we&apos;ll scale your business step-by-step.
            </p>
          </div>

          {/* Indicator Cue */}
          <div className="mt-8 flex justify-center">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 animate-bounce">
              <ArrowDown className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </section>

        {/* 2. Interactive Blueprint Timeline Visualization */}
        <GrowthBlueprint />

        {/* 3. Mid-Page Statement */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-8 border-y border-white/5 bg-[#03070E]/60 text-center backdrop-blur-md">
          <div className="max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white/90">
              WE DON&apos;T BUY MORE TRAFFIC.
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400">
              WE BUILD A SYSTEM THAT CONVERTS IT.
            </h2>
          </div>
        </section>

        {/* 4. Final CTA to Account Setup Form */}
        <BlueprintCTA />

      </div>

    </div>
  );
}
