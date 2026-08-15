"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function BlueprintHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#02050A]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[74px] flex items-center justify-between">
        {/* Left Side: Brandexa Logo */}
        <Link href="/ads" className="flex items-center gap-2 group">
          <img
            src="/brandlogo2_cropped.png"
            alt="Brandexa Growth Logo"
            className="w-auto object-contain hover:opacity-90 transition-opacity"
            style={{ height: "48px" }}
          />
        </Link>

        {/* Right Side: Growth System Status Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-black tracking-widest text-emerald-400 font-mono uppercase">
            GROWTH SYSTEM
          </span>
        </div>
      </div>
    </header>
  );
}
