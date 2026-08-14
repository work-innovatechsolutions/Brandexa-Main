"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function FinalCTASection() {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "final_cta" });
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="final-cta-content"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-6">
            START YOUR PERFORMANCE JOURNEY
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-6xl font-black leading-[1.08] tracking-tight mb-6 text-white">
            READY TO TURN YOUR AD SPEND INTO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              REAL GROWTH?
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="final-cta-sub text-base sm:text-xl text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Claim your 100% free Meta Ads management and see what a properly engineered video and funnel growth system can do for your business.
          </p>

          {/* CTA buttons */}
          <div className="final-cta-btns flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="group inline-flex items-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>CLAIM MY FREE AD MANAGEMENT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 px-8 py-5 text-base font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all cursor-pointer"
            >
              BOOK FREE STRATEGY CALL
            </a>
          </div>

          {/* Scarcity */}
          <p className="text-xs text-slate-500 mt-8 tracking-wider font-semibold">
            ⚡ STRICT LIMIT: ONLY 5 BUSINESSES ACCEPTED THIS MONTH
          </p>
        </motion.div>
      </div>
    </section>
  );
}
