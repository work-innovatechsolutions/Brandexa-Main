"use client";

import React from "react";
import { motion } from "framer-motion";

export function ProblemSection() {
  const painPoints = [
    {
      num: "01",
      badge: "VANITY METRICS",
      title: "Cheap, Unqualified Leads",
      desc: "Hundreds of opt-ins who can't afford your service and waste hours of your sales team's calendar.",
      accent: "#EF4444",
    },
    {
      num: "02",
      badge: "SCROLL FATIGUE",
      title: "Weak, Boring Creatives",
      desc: "Generic Canva graphics and static ads get ignored in milliseconds before prospects even read your offer.",
      accent: "#F59E0B",
    },
    {
      num: "03",
      badge: "LEAKY PIPELINE",
      title: "Broken, Friction Funnels",
      desc: "High-intent buyer interest evaporates before booking because the funnel fails to pre-qualify and educate.",
      accent: "#8B5CF6",
    },
  ];

  const beforeItems = [
    "Random leads with no buying intent",
    "Generic Canva static ads ignored in feeds",
    "No pre-qualification or filtering",
    "Wasted sales rep hours on unqualified calls",
    "Paying expensive monthly agency retainers with no guarantee",
  ];

  const afterItems = [
    "Pre-qualified decision makers ready to buy",
    "Scroll-stopping video creatives that build authority",
    "Filtered sales funnel with intake qualification",
    "Higher close rates with informed high-ticket buyers",
    "100% Free Meta Ad management with active scaling",
  ];

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Problem Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="problem-headline text-center max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-red-400 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20 uppercase mb-4">
            THE ROOT OF FAILED AD SPEND
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight mt-2 text-white">
            YOUR ADS AREN&apos;T THE PROBLEM.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-rose-500">
              YOUR LEAD QUALITY IS.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Pouring more budget into ads won&apos;t fix low-quality prospects. You need high-trust video hooks and pre-qualifying funnels.
          </p>
        </motion.div>

        {/* Pain Points */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pain-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-20 sm:mb-28"
        >
          {painPoints.map((point) => (
            <div
              key={point.num}
              className="pain-card group bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-3xl p-7 flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${point.accent}, transparent)`,
                }}
              />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-md" style={{ color: point.accent, backgroundColor: `${point.accent}15`, border: `1px solid ${point.accent}30` }}>
                    {point.badge}
                  </span>
                  <span className="text-3xl font-black text-slate-700 font-mono">
                    {point.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-bold flex items-center justify-between" style={{ color: point.accent }}>
                <span>Critical Bottleneck</span>
                <span>Requires Fix →</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Transformation Comparison Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="transform-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          {/* Before */}
          <div className="transform-col bg-slate-900/60 border border-red-500/20 rounded-3xl p-7 sm:p-9 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/10">
              <span className="text-xs font-extrabold tracking-[0.2em] text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                🔴 THE TYPICAL APPROACH (BEFORE)
              </span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-400 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="transform-col bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-7 sm:p-9 relative overflow-hidden shadow-2xl shadow-emerald-500/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/20">
              <span className="text-xs font-extrabold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                🟢 WITH BRANDEXA GROWTH (AFTER)
              </span>
            </div>
            <ul className="space-y-4 relative z-10">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-100 font-semibold"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
