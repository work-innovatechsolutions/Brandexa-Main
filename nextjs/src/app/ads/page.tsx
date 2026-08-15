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
    <div className="relative w-full overflow-x-hidden">
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
