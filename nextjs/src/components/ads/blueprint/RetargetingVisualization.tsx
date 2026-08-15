"use client";

import React from "react";
import { ArrowRight, RefreshCw, BarChart3, Users, LayoutDashboard, DollarSign } from "lucide-react";

export function RetargetingVisualization({ isHovered }: { isHovered?: boolean }) {
  const steps = [
    { label: "TRAFFIC", icon: Users, color: "#38bdf8" },
    { label: "LANDING PAGE", icon: LayoutDashboard, color: "#a855f7" },
    { label: "CONVERSION", icon: BarChart3, color: "#10b981" },
    { label: "RETARGETING", icon: RefreshCw, color: "#06b6d4", highlight: true },
    { label: "REVENUE", icon: DollarSign, color: "#84cc16" },
  ];

  return (
    <div className={`relative w-full h-[320px] sm:h-[360px] bg-[#040C10]/90 border border-emerald-500/20 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl transition-all duration-500 ${
      isHovered ? "border-emerald-400/50 shadow-emerald-500/10 scale-[1.01]" : ""
    }`}>
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-emerald-400 font-mono uppercase">
            INTELLIGENT REVENUE RECOVERY
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          RECOVERED: +38.4%
        </span>
      </div>

      {/* Interactive Pipeline Architecture */}
      <div className="relative z-10 flex flex-col justify-center h-[calc(100%-48px)] space-y-4">
        
        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 items-center">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex flex-col items-center text-center group">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    step.highlight
                      ? "bg-cyan-950/80 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105"
                      : "bg-slate-900/80 border-white/10"
                  }`}
                >
                  <Icon
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: step.color }}
                  />
                </div>
                <span
                  className={`text-[8px] sm:text-[9px] font-black font-mono mt-2 tracking-wider ${
                    step.highlight ? "text-cyan-300" : "text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Retargeting Closed-Loop Mechanism Banner */}
        <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3.5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-100 block">
                Warm Lead Remarketing Loop
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                Brings back drop-offs with personalized psychological offers
              </span>
            </div>
          </div>
          <span className="text-xs font-black font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            HIGH ROI
          </span>
        </div>

      </div>
    </div>
  );
}
