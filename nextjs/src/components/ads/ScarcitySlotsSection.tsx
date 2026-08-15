"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Lock, Flame } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function ScarcitySlotsSection() {
  const [availableCount, setAvailableCount] = useState<number>(3);
  const [justClaimedSlot, setJustClaimedSlot] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  // Trigger live countdown from 3 to 2 after entering view
  useEffect(() => {
    if (hasAnimated) return;

    const timer = setTimeout(() => {
      setJustClaimedSlot(true);
      
      const countTimer = setTimeout(() => {
        setAvailableCount(2);
        setHasAnimated(true);
      }, 700);

      return () => clearTimeout(countTimer);
    }, 2600);

    return () => clearTimeout(timer);
  }, [hasAnimated]);

  // Generate 8 total slots
  const slots = Array.from({ length: 8 }, (_, i) => {
    const slotNumber = i + 1;
    let isAvailable = slotNumber <= availableCount;
    let isTransitioning = slotNumber === 3 && justClaimedSlot && availableCount === 3;

    return {
      num: String(slotNumber).padStart(2, "0"),
      isAvailable,
      isTransitioning,
    };
  });

  return (
    <section
      id="scarcity-slots"
      className="relative py-20 sm:py-28 overflow-hidden bg-slate-950 text-white border-t border-white/5"
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
                {availableCount === 3 ? (
                  "HIGH DEMAND: 3 SPOTS REMAINING"
                ) : (
                  <span className="text-lime-400 font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping inline-block" />
                    LIVE UPDATE: ONLY 2 SPOTS LEFT (1 JUST CLAIMED)
                  </span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            ONLY 8 BUSINESSES. <span className="text-slate-500">EVERY MONTH.</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto font-medium">
            To ensure founder-level media buying and custom video creative quality, our client capacity is strictly capped.
          </p>
        </div>

        {/* 8 Slot Indicators Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5 max-w-6xl mx-auto mb-10 sm:mb-12">
          {slots.map((slot) => {
            const isAvailable = slot.isAvailable;
            const isJustClaimed = slot.num === "03" && justClaimedSlot;

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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-black text-[8px] font-mono px-2 py-0.5 rounded-full shadow-md whitespace-nowrap animate-bounce">
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
