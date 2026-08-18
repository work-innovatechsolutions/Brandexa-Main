"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function WhyFreeSection() {
  return (
    <section
      id="why-free"
      className="relative py-24 sm:py-36 overflow-hidden bg-transparent text-white"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Why Free Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>PERFORMANCE-FIRST MODEL</span>
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-white mt-2 uppercase">
            WHY WOULD WE DO THIS FOR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400">
              FREE?
            </span>
          </h2>
        </motion.div>

        {/* Answer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl text-center backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          
          <p className="text-xl sm:text-3xl text-slate-100 font-extrabold leading-relaxed">
            Because we know our psychological video creatives will{" "}
            <span className="text-emerald-400 underline underline-offset-8 decoration-emerald-500/50">
              skyrocket your qualified sales
            </span>
            .
          </p>
          <p className="text-lg sm:text-xl text-emerald-400 font-bold">
            When you profit and scale, we win long-term partners.
          </p>
          
          <div className="w-20 h-px bg-slate-800 mx-auto" />
          
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            A 100% free ad management opportunity for businesses we know we can scale. We only accept 8 clients per month to maintain intense hands-on founder execution.
          </p>

          {/* Final Bottom CTA */}
          <div className="pt-6">
            <Link
              href="/ads/account-setup"
              onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "why_free_bottom" })}
              className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer uppercase"
            >
              <span>CLAIM MY FREE AD MANAGEMENT NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
