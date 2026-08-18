"use client";

import React, { useState, useEffect } from "react";
import { HeroSection } from "@/components/ads/HeroSection";
import { FoundersSection } from "@/components/ads/FoundersSection";
import { AidaFunnelSection } from "@/components/ads/AidaFunnelSection";
import { ScarcitySlotsSection } from "@/components/ads/ScarcitySlotsSection";
import { ResultsSection } from "@/components/ads/ResultsSection";
import { OfferSection } from "@/components/ads/OfferSection";
import { WhyFreeSection } from "@/components/ads/WhyFreeSection";
import { BookingSection } from "@/components/ads/BookingSection";
import { FreeAdOfferPopup } from "@/components/ads/FreeAdOfferPopup";
import { X } from "lucide-react";

/**
 * Brandexa Growth — Premium Landing Page
 *
 * Ordered Section Layout:
 * 1. HERO (Attention)
 * 2. FOUNDERS (The Faces Behind Your Next Big ROI)
 * 3. AIDA FUNNEL (The 3D Performance Marketing Engine)
 * 4. STRICT CAPACITY LIMIT (5 Capacity Slots - above Results)
 * 5. RESULTS (Verified Campaign Proof / Results That Speak For Themselves)
 * 6. WHAT YOU GET / OFFER (Everything You Need To Scale)
 * 7. WHY FREE (Performance-First Model - at the very last)
 *
 * Popup Booking Modal triggered via CTA buttons.
 */
export default function AdsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => {
      setIsBookingOpen(true);
    };
    window.addEventListener("open-booking", handleOpenBooking);
    return () => window.removeEventListener("open-booking", handleOpenBooking);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#02050A]">

      {/* ════════════════════════════════════════
          GLOBAL PAGE AURA BACKGROUND
          Fixed behind all sections, full scroll height
      ════════════════════════════════════════ */}
      <style>{`
        @keyframes page-aura-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
          33%       { transform: translate(-80px, 120px) scale(1.2); opacity: 0.2; }
          66%       { transform: translate(60px, -80px) scale(0.88); opacity: 0.14; }
        }
        @keyframes page-aura-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          40%       { transform: translate(100px, -60px) scale(1.25); opacity: 0.18; }
          70%       { transform: translate(-70px, 90px) scale(0.85); opacity: 0.12; }
        }
        @keyframes page-aura-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.08; }
          50%       { transform: translate(-60px, -100px) scale(1.15); opacity: 0.16; }
          80%       { transform: translate(80px, 60px) scale(0.9); opacity: 0.1; }
        }
        @keyframes page-aura-drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.07; }
          45%       { transform: translate(70px, 80px) scale(1.18); opacity: 0.14; }
          75%       { transform: translate(-90px, -50px) scale(0.92); opacity: 0.09; }
        }
        @keyframes page-aura-pulse {
          0%, 100% { opacity: 0.06; transform: scale(1); }
          50%       { opacity: 0.12; transform: scale(1.06); }
        }
      `}</style>

      {/* Fixed aura layer — sits behind everything, subtle ambient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Orb 1 — Lime/Green — top-left */}
        <div
          className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(132,204,22,0.5) 0%, rgba(16,185,129,0.2) 40%, transparent 65%)",
            filter: "blur(100px)",
            animation: "page-aura-drift-1 20s ease-in-out infinite",
          }}
        />

        {/* Orb 2 — Sky Blue — top-right */}
        <div
          className="absolute -top-40 -right-40 w-[850px] h-[850px] rounded-full"
          style={{
            background: "radial-gradient(circle at 60% 35%, rgba(56,189,248,0.45) 0%, rgba(59,130,246,0.2) 42%, transparent 65%)",
            filter: "blur(110px)",
            animation: "page-aura-drift-2 24s ease-in-out infinite",
          }}
        />

        {/* Orb 3 — Emerald — bottom-center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at 50% 85%, rgba(16,185,129,0.35) 0%, rgba(6,182,212,0.15) 48%, transparent 70%)",
            filter: "blur(120px)",
            animation: "page-aura-drift-3 28s ease-in-out infinite",
          }}
        />

        {/* Orb 4 — Violet — mid-right */}
        <div
          className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle at 70% 50%, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.1) 48%, transparent 68%)",
            filter: "blur(120px)",
            animation: "page-aura-drift-4 22s ease-in-out infinite 3s",
          }}
        />

        {/* Orb 5 — Lime pulse — mid-left */}
        <div
          className="absolute top-1/2 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(132,204,22,0.22) 0%, rgba(16,185,129,0.1) 50%, transparent 68%)",
            filter: "blur(110px)",
            animation: "page-aura-pulse 15s ease-in-out infinite 1.5s",
          }}
        />

        {/* Center ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(132,204,22,0.08) 0%, rgba(56,189,248,0.04) 50%, transparent 72%)",
            filter: "blur(80px)",
            animation: "page-aura-pulse 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* 1. Hero with campaign HUD */}
      <HeroSection />

      {/* 2. Founders */}
      <FoundersSection />

      {/* 3. AIDA Funnel Engine */}
      <AidaFunnelSection />

      {/* 4. Capacity Limit Slots (Above Results) */}
      <ScarcitySlotsSection />

      {/* 5. Proof Showcase (Verified Campaign Proof) */}
      <ResultsSection />

      {/* 6. Offer - What you get */}
      <OfferSection />

      {/* 7. Why Free Performance-First Model (At the very last) */}
      <WhyFreeSection />

      {/* Promotional Limited-Capacity Offer Popup & Floating CTA Button */}
      <FreeAdOfferPopup />

      {/* Interactive Booking Modal Popup overlay */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Close Click */}
          <div 
            className="absolute inset-0 bg-transparent" 
            onClick={() => setIsBookingOpen(false)}
          />

          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-8 z-10">
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close booking form"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto pt-6 pb-2">
              <BookingSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
