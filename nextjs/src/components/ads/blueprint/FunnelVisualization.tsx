"use client";

import React from "react";
import { Filter, CheckCircle2, XCircle, ArrowDown } from "lucide-react";

export function FunnelVisualization({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className={`relative w-full h-[320px] sm:h-[360px] bg-[#070614]/90 border border-purple-500/20 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl transition-all duration-500 ${
      isHovered ? "border-purple-400/50 shadow-purple-500/10 scale-[1.01]" : ""
    }`}>
      {/* Volumetric Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-purple-400 font-mono uppercase">
            QUALIFICATION FILTER ENGINE
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
          TIRE-KICKERS: FILTERED
        </span>
      </div>

      {/* Dynamic Mini Funnel Visual */}
      <div className="relative z-10 flex flex-col items-center justify-between h-[calc(100%-44px)] pt-3 pb-1">
        
        {/* Top: Unfiltered Inbound Traffic */}
        <div className="w-full max-w-[260px] bg-slate-900/90 border border-purple-500/30 rounded-xl px-3.5 py-1.5 flex items-center justify-between text-[10px] font-mono text-slate-300 shadow-md">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Raw Inbound Traffic
          </span>
          <span className="text-slate-400">100% Leads</span>
        </div>

        {/* Dynamic Funnel Vector Casing */}
        <div className="relative w-full max-w-[240px] my-1">
          <svg viewBox="0 0 200 110" fill="none" className="w-full h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="funnelGlassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Funnel Cone Shape */}
            <path
              d="M 15 15 L 60 95 A 40 10 0 0 0 140 95 L 185 15 A 85 14 0 0 1 15 15 Z"
              fill="url(#funnelGlassGrad)"
              stroke="#a855f7"
              strokeWidth="1.2"
            />
            {/* Top Ellipse Rim */}
            <ellipse cx="100" cy="15" rx="85" ry="14" fill="#0d0c22" stroke="#c084fc" strokeWidth="1.5" />
            {/* Filter Membrane Layer */}
            <ellipse cx="100" cy="55" rx="55" ry="9" fill="#1e1b4b80" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Filtering Indicators on sides */}
          <div className="absolute top-[42%] -left-3 bg-red-500/10 border border-red-500/30 text-red-400 text-[8px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
            <XCircle className="w-2.5 h-2.5" />
            <span>Unqualified Out</span>
          </div>
          <div className="absolute top-[42%] -right-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5" />
            <span>Intent Verified</span>
          </div>
        </div>

        {/* Bottom Output: Verified Qualified Buyers */}
        <div className="w-full max-w-[260px] bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-400/50 rounded-xl px-4 py-2 flex items-center justify-between text-[11px] font-mono shadow-xl">
          <span className="flex items-center gap-2 font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Qualified Buyers
          </span>
          <span className="text-emerald-400 font-extrabold">+100% Ready To Buy</span>
        </div>

      </div>
    </div>
  );
}
