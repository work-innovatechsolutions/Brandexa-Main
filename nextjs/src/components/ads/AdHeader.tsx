"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

export function AdHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isAccountSetup = pathname?.startsWith("/ads/account-setup");

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
          ? "bg-[#050507]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[74px] flex items-center justify-between">
        {/* Left Side: Brandexa Logo Image */}
        <Link href="/ads" className="flex items-center gap-2 group">
          <img
            src="/brandlogo2_cropped.png"
            alt="Brandexa Growth Logo"
            className="w-auto object-contain hover:opacity-90 transition-opacity"
            style={{ height: "52px" }}
          />
        </Link>

        {/* Right Side: Conditional based on route */}
        {isAccountSetup ? (
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-emerald-400 font-mono uppercase">
              GROWTH SYSTEM
            </span>
          </div>
        ) : (
          <Link
            href="/ads/account-setup"
            onClick={() => trackEvent(EVENTS.CTA_CLICK, { location: "header" })}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[13px] font-extrabold text-black bg-[#84cc16] hover:bg-[#99f032] rounded-full shadow-[0_0_20px_rgba(132,204,22,0.3)] transition-all"
          >
            <span>CLAIM FREE AD MANAGEMENT</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        )}
      </div>
    </header>
  );
}
