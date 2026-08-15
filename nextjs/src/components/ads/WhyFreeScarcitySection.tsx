"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

interface WhyFreeScarcitySectionProps {
  availableSpots?: number;
}

export function WhyFreeScarcitySection({
  availableSpots = 2,
}: WhyFreeScarcitySectionProps) {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "scarcity" });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking"));
    }
  };

  const headlineText = "WHY WOULD WE DO THIS FOR FREE?";

  // Generate slot status based on availableSpots
  const slots = Array.from({ length: 5 }, (_, i) => ({
    num: String(i + 1).padStart(2, "0"),
    status: i < availableSpots ? "AVAILABLE" : "CLAIMED",
  }));

  return (
    <section
      id="why-free"
      className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Why Free */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24"
        >
          {/* Big question */}
          <div className="whyfree-headline mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
              PERFORMANCE-FIRST MODEL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-[1.12] tracking-tight text-white mt-2">
              WHY WOULD WE DO THIS FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                FREE?
              </span>
            </h2>
          </div>

          {/* Answer Card */}
          <div className="whyfree-answer bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-5 shadow-2xl">
            <p className="text-xl sm:text-2xl text-slate-100 font-extrabold leading-relaxed">
              Because we know our psychological video creatives will{" "}
              <span className="text-emerald-400 underline underline-offset-4 decoration-emerald-500/50">
                skyrocket your qualified sales
              </span>
              .
            </p>
            <p className="text-lg text-emerald-400 font-bold">
              When you profit and scale, we win long-term partners.
            </p>
            <div className="w-16 h-px bg-slate-800 mx-auto" />
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              A 100% free ad management opportunity for businesses we know we can scale. We only accept 5 clients per month to maintain intense hands-on founder execution.
            </p>
          </div>
        </motion.div>

        {/* Scarcity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-black tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 uppercase">
            STRICT CAPACITY LIMIT
          </span>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight mt-3">
            ONLY 5 BUSINESSES. <span className="text-slate-500">EVERY MONTH.</span>
          </h3>
        </motion.div>

        {/* Slot indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="scarcity-grid grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12"
        >
          {slots.map((slot) => {
            const isAvailable = slot.status === "AVAILABLE";
            return (
              <div
                key={slot.num}
                className={`scarcity-slot flex flex-col items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                  isAvailable
                    ? "border-emerald-500/50 bg-emerald-950/30 shadow-lg shadow-emerald-500/10 scale-[1.03]"
                    : "border-slate-800 bg-slate-900/40 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-base font-black font-mono ${
                      isAvailable ? "text-emerald-400" : "text-slate-500"
                    }`}
                  >
                    #{slot.num}
                  </span>
                  {isAvailable ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  ) : (
                    <span className="text-[10px] text-slate-500">LOCKED</span>
                  )}
                </div>
                <span
                  className={`text-xs font-black tracking-wider py-1 px-2.5 rounded-md ${
                    isAvailable ? "text-slate-950 bg-emerald-400 font-extrabold" : "text-slate-400 bg-slate-800/80"
                  }`}
                >
                  {slot.status}
                </span>
                <span className="text-[10px] text-slate-400 mt-3 font-semibold">
                  {isAvailable ? "Open For Claim" : "Filled By Client"}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/ads/account-setup"
            onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "scarcity" })}
            className="group inline-flex items-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>CLAIM MY FREE AD MANAGEMENT NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
