"use client";

import React from "react";
import { Search, Users, Activity, Target, BrainCircuit, ShieldCheck } from "lucide-react";

export function ResearchVisualization({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className={`relative w-full h-[320px] sm:h-[360px] bg-[#050B16]/90 border border-sky-500/20 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl transition-all duration-500 ${
      isHovered ? "border-sky-400/50 shadow-sky-500/10 scale-[1.01]" : ""
    }`}>
      {/* Background Volumetric Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-sky-400 font-mono uppercase">
            AVATAR PSYCHOLOGY SCANNER
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          PROFILING: ACTIVE
        </span>
      </div>

      {/* Main Scanner Visual Area */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4 h-[calc(100%-48px)] items-center">
        {/* Left Side (Avatar Core Node) */}
        <div className="sm:col-span-7 flex flex-col items-center justify-center relative p-3">
          {/* Concentric Radar Rings */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-0 border border-sky-500/25 rounded-full animate-ping opacity-30" />
            <div className="absolute inset-2 border border-sky-500/20 rounded-full border-dashed animate-spin" style={{ animationDuration: "18s" }} />
            <div className="absolute inset-6 border border-sky-400/40 rounded-full bg-sky-950/40 backdrop-blur-md" />
            
            {/* Center Avatar Core */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <Users className="w-8 h-8 text-sky-400 mb-1" />
              <span className="text-[9px] font-black text-slate-200 font-mono tracking-wider">
                IDEAL BUYER
              </span>
            </div>

            {/* Orbiting Satellite Data Nodes */}
            <div className="absolute -top-1 -right-1 bg-slate-900/90 border border-sky-400/40 px-2 py-1 rounded-lg text-[9px] font-mono text-sky-300 shadow-md">
              High-Intent
            </div>
            <div className="absolute -bottom-1 -left-1 bg-slate-900/90 border border-cyan-400/40 px-2 py-1 rounded-lg text-[9px] font-mono text-cyan-300 shadow-md">
              Decision Maker
            </div>
          </div>
        </div>

        {/* Right Side (Telemetry Data Metrics) */}
        <div className="sm:col-span-5 flex flex-col justify-center space-y-2.5">
          <div className="bg-slate-900/80 border border-white/5 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono mb-1">
              <span>Pain Point Affinity</span>
              <span className="text-sky-400 font-bold">96.4%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full w-[96%]" />
            </div>
          </div>

          <div className="bg-slate-900/80 border border-white/5 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono mb-1">
              <span>Buying Trigger Match</span>
              <span className="text-cyan-400 font-bold">91.8%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full w-[91%]" />
            </div>
          </div>

          <div className="bg-slate-900/80 border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-sky-400" />
              <span className="text-[10px] text-slate-200 font-mono">Psychology Hook</span>
            </div>
            <span className="text-[9px] font-bold text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded">
              Engineered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
