"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function BlueprintCTA() {
  const handleCTAClick = () => {
    trackEvent(EVENTS.CTA_CLICK, { location: "blueprint_final_cta" });
  };

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-b from-slate-900/90 via-[#060b14]/95 to-[#02050A] border border-emerald-500/30 rounded-3xl sm:rounded-[36px] p-8 sm:p-16 text-center shadow-[0_25px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Ambient Glow Highlights */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 left-1/4 w-[350px] h-[200px] bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-6 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% FREE AD MANAGEMENT OPPORTUNITY</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl mx-auto">
            READY TO IMPLEMENT THIS SYSTEM INTO YOUR BUSINESS?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium mt-4 max-w-xl mx-auto leading-relaxed">
            Let&apos;s get your account set up and identify where your biggest growth opportunity is.
          </p>

          {/* CTA Action Button */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center">
            <Link
              href="/ads/account-setup/form"
              onClick={handleCTAClick}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-[0_0_35px_rgba(132,204,22,0.4)] hover:shadow-[0_0_50px_rgba(132,204,22,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer tracking-wider uppercase"
            >
              <span>NEXT STEP: PROCEED TO ACCOUNT SETUP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
            </Link>

            {/* Reassurance Subtext */}
            <div className="mt-5 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No upfront ad-management fee
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
