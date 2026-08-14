"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Video, Sliders, Target, RefreshCw, TrendingUp } from "lucide-react";

const NODES = [
  { label: "RESEARCH", icon: Search, angle: 0, color: "#3B82F6" },
  { label: "CREATIVE", icon: Video, angle: 60, color: "#A855F7" },
  { label: "FUNNEL", icon: Sliders, angle: 120, color: "#F59E0B" },
  { label: "META ADS", icon: Target, angle: 180, color: "#00E87B" },
  { label: "RETARGETING", icon: RefreshCw, angle: 240, color: "#38BDF8" },
  { label: "REVENUE", icon: TrendingUp, angle: 300, color: "#10B981" },
];

export function GrowthSystemSection() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="gs-headline text-center max-w-4xl mx-auto mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
            COMPREHENSIVE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black leading-[1.12] tracking-tight mt-2 text-white">
            WE DON&apos;T JUST RUN ADS. WE BUILD THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              SYSTEM BEHIND THEM.
            </span>
          </h2>
          <p className="text-center text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-4">
            From customer research to creative strategy, funnel design, campaign launch and retargeting — every component works together as a cohesive engine.
          </p>
        </motion.div>

        {/* Ecosystem Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-lg mx-auto aspect-square mt-12"
        >
          {/* Orbital Circle ring */}
          <div className="absolute inset-8 sm:inset-10 rounded-full border border-slate-800 pointer-events-none" />
          <div className="absolute inset-16 sm:inset-20 rounded-full border border-emerald-500/10 pointer-events-none" />

          {/* Center node */}
          <div className="gs-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-900/95 border-2 border-emerald-500/40 flex flex-col items-center justify-center text-center z-10 shadow-2xl shadow-emerald-500/20">
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
              BRANDEXA
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.12em] text-emerald-400 mt-1">
              GROWTH SYSTEM
            </span>
            <span className="text-[9px] font-bold text-slate-400 mt-1 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
              6-PILLAR ENGINE
            </span>
          </div>

          {/* Nodes */}
          {NODES.map((node) => {
            const Icon = node.icon;
            const r = 40;
            const angleRad = ((node.angle - 90) * Math.PI) / 180;
            const x = 50 + r * Math.cos(angleRad);
            const y = 50 + r * Math.sin(angleRad);

            return (
              <div
                key={node.label}
                className="gs-node absolute -translate-x-1/2 -translate-y-1/2 group cursor-default z-20"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-900/95 border border-slate-800 flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-all duration-300 shadow-xl"
                  style={{ borderColor: `${node.color}40` }}
                >
                  <Icon className="w-5 h-5 mb-1" style={{ color: node.color }} />
                  <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider text-slate-200 text-center leading-tight">
                    {node.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
