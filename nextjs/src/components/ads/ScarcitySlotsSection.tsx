"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Lock, Flame } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function ScarcitySlotsSection() {
  const [availableCount, setAvailableCount] = useState<number>(6);
  const [recentClaimedSlot, setRecentClaimedSlot] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Out of 12: 6 available initially -> 1 claimed after 10s (slot 6) -> 1 claimed after +20s (slot 5)
  useEffect(() => {
    if (!isInView) return;

    // 1st claim after 10 seconds: Slot #06 is claimed
    const timer1 = setTimeout(() => {
      setRecentClaimedSlot(6);
      
      const countTimer1 = setTimeout(() => {
        setAvailableCount(5);
      }, 500);

      // 2nd claim after another 20 seconds (30 seconds total from view): Slot #05 is claimed
      const timer2 = setTimeout(() => {
        setRecentClaimedSlot(5);
        
        const countTimer2 = setTimeout(() => {
          setAvailableCount(4);
        }, 500);

        return () => clearTimeout(countTimer2);
      }, 20000);

      return () => {
        clearTimeout(countTimer1);
        clearTimeout(timer2);
      };
    }, 10000);

    return () => clearTimeout(timer1);
  }, [isInView]);

  // Generate 12 total slots
  const slots = Array.from({ length: 12 }, (_, i) => {
    const slotNumber = i + 1;
    const isAvailable = slotNumber <= availableCount;
    const isJustClaimed = slotNumber === recentClaimedSlot;

    return {
      num: String(slotNumber).padStart(2, "0"),
      slotNumber,
      isAvailable,
      isJustClaimed,
    };
  });

  return (
    <section
      ref={sectionRef}
      id="scarcity-slots"
      className="relative py-24 sm:py-36 overflow-hidden bg-transparent text-white border-t border-white/5"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Scarcity Header */}
        <div className="text-center mb-10 sm:mb-12">
          
          {/* Animated Dynamic Scarcity Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-black font-mono tracking-widest uppercase mb-4 shadow-lg">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={availableCount}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
              >
                {availableCount === 6 ? (
                  "HIGH DEMAND: 6 SPOTS REMAINING"
                ) : availableCount === 5 ? (
                  <span className="text-lime-400 font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping inline-block" />
                    LIVE UPDATE: ONLY 5 SPOTS LEFT (1 JUST CLAIMED)
                  </span>
                ) : (
                  <span className="text-amber-400 font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                    LIVE UPDATE: ONLY 4 SPOTS LEFT (CRITICAL CAPACITY)
                  </span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            ONLY 12 BUSINESSES. <span className="text-slate-500">EVERY MONTH.</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto font-medium">
            To ensure founder-level media buying and custom video creative quality, our client capacity is strictly capped.
          </p>
        </div>

        {/* 12 Slot Indicators Grid (2 Rows of 6 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10 sm:mb-12">
          {slots.map((slot) => {
            const isAvailable = slot.isAvailable;
            const isJustClaimed = slot.isJustClaimed;

            return (
              <motion.div
                key={slot.num}
                animate={
                  isJustClaimed
                    ? { scale: [1, 1.06, 1], borderColor: ["#10b981", "#f59e0b", "#334155"] }
                    : {}
                }
                transition={{ duration: 0.8 }}
                className={`scarcity-slot relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-500 ${
                  isAvailable
                    ? "border-emerald-500/50 bg-emerald-950/30 shadow-lg shadow-emerald-500/10 scale-[1.02]"
                    : "border-slate-800 bg-slate-900/40 opacity-60"
                }`}
              >
                {/* Just Claimed Live Alert Bubble */}
                {isJustClaimed && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-black text-[8px] font-mono px-2 py-0.5 rounded-full shadow-md whitespace-nowrap animate-bounce z-20">
                    JUST CLAIMED!
                  </div>
                )}

                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-sm sm:text-base font-black font-mono ${
                      isAvailable ? "text-emerald-400" : "text-slate-500"
                    }`}
                  >
                    #{slot.num}
                  </span>
                  {isAvailable ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  ) : (
                    <span className="text-[9px] text-slate-500 font-mono flex items-center gap-0.5">
                      <Lock className="w-2.5 h-2.5" />
                      LOCKED
                    </span>
                  )}
                </div>

                <motion.span
                  key={isAvailable ? "avail" : "claimed"}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-[10px] sm:text-xs font-black tracking-wider py-1 px-2.5 rounded-md ${
                    isAvailable
                      ? "text-slate-950 bg-emerald-400 font-extrabold"
                      : "text-slate-400 bg-slate-800/80 font-bold"
                  }`}
                >
                  {isAvailable ? "AVAILABLE" : "CLAIMED"}
                </motion.span>

                <span className="text-[9px] text-slate-400 mt-2.5 font-medium text-center">
                  {isAvailable ? "Open For Claim" : "Filled By Client"}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/ads/account-setup"
            onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "scarcity_slots_animated" })}
            className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer uppercase"
          >
            <span>CLAIM MY FREE AD MANAGEMENT NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
