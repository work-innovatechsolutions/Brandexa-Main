"use client";

import React from "react";
import { Play, Sparkles, Film } from "lucide-react";

export function CreativeVisualization({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className={`relative w-full h-[320px] sm:h-[360px] bg-[#0A0512]/90 border border-pink-500/20 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl transition-all duration-500 ${
      isHovered ? "border-pink-400/50 shadow-pink-500/10 scale-[1.01]" : ""
    }`}>
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-lime-400 font-mono uppercase">
            CINEMATIC PSYCHOLOGY STUDIO
          </span>
        </div>
        <span className="text-[10px] font-mono text-lime-400 bg-lime-500/10 px-2.5 py-0.5 rounded-full border border-lime-500/30 font-bold">
          OUR SPECIALTY
        </span>
      </div>

      {/* 3 Floating Ad Creative Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 sm:gap-3.5 mt-5 h-[calc(100%-54px)] items-center">
        
        {/* Card 1: Video Ad */}
        <div 
          className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-900 group shadow-xl transition-transform duration-500 hover:scale-105"
          style={{ animation: "floatCardA 4.5s ease-in-out infinite alternate" }}
        >
          <img
            src="/ads/video-ad.jpg"
            alt="Psychological Video Ad"
            className="w-full h-36 sm:h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute top-2 left-2 bg-purple-500/90 text-[8px] font-black font-mono text-white px-2 py-0.5 rounded-full">
            VIDEO AD
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
              <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 text-center">
            <span className="text-[9px] font-bold text-slate-200 block truncate">
              High-Ticket Offer
            </span>
          </div>
        </div>

        {/* Card 2: UGC Creative */}
        <div 
          className="relative rounded-2xl overflow-hidden border border-lime-500/30 bg-slate-900 group shadow-xl transition-transform duration-500 hover:scale-105 -translate-y-2"
          style={{ animation: "floatCardB 5.1s ease-in-out infinite alternate" }}
        >
          <img
            src="/ads/ugc-ad.webp"
            alt="UGC Proof Creative"
            className="w-full h-36 sm:h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute top-2 left-2 bg-lime-500 text-[8px] font-black font-mono text-black px-2 py-0.5 rounded-full">
            UGC CREATIVE
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-lime-400/30 backdrop-blur-md border border-lime-400/60 flex items-center justify-center text-lime-300 shadow-lg">
              <Play className="w-3.5 h-3.5 fill-lime-300 translate-x-0.5" />
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 text-center">
            <span className="text-[9px] font-bold text-lime-200 block truncate">
              Social Proof Hook
            </span>
          </div>
        </div>

        {/* Card 3: Cinematic B-Roll */}
        <div 
          className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-slate-900 group shadow-xl transition-transform duration-500 hover:scale-105"
          style={{ animation: "floatCardC 4.8s ease-in-out infinite alternate" }}
        >
          <img
            src="/ads/retargeting-ad.webp"
            alt="Cinematic B-Roll Creative"
            className="w-full h-36 sm:h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute top-2 left-2 bg-sky-500/90 text-[8px] font-black font-mono text-white px-2 py-0.5 rounded-full">
            B-ROLL / MOTION
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
              <Film className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 text-center">
            <span className="text-[9px] font-bold text-slate-200 block truncate">
              4K Storytelling
            </span>
          </div>
        </div>

      </div>

      {/* Floating Keyframe Styles */}
      <style jsx>{`
        @keyframes floatCardA {
          0% { transform: translateY(0px); }
          100% { transform: translateY(6px); }
        }
        @keyframes floatCardB {
          0% { transform: translateY(-8px); }
          100% { transform: translateY(-2px); }
        }
        @keyframes floatCardC {
          0% { transform: translateY(0px); }
          100% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}
