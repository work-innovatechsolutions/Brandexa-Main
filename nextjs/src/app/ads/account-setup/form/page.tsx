"use client";

import React, { useEffect } from "react";
import { BookingSection } from "@/components/ads/BookingSection";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AccountSetupFormPage() {
  useEffect(() => {
    // Ensure the page always scrolls to the very top upon navigation
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02050A] text-white selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 pt-28 sm:pt-36 pb-20">
        
        {/* Onboarding Header */}
        <section className="text-center max-w-4xl mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>FINAL ONBOARDING STEP</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            CLAIM YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400">
              FREE AD MANAGEMENT
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-medium mt-3 max-w-xl mx-auto">
            Provide your business details and select a strategy call slot. We&apos;ll review your ad account and prepare your custom growth blueprint.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Free Service
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Founder-Led Strategy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Strict 8 Client Monthly Limit
            </span>
          </div>
        </section>

        {/* Interactive Booking & Onboarding Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-8">
            <BookingSection />
          </div>
        </div>

      </div>

    </div>
  );
}
