"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowRight, TrendingUp, Sparkles, Gift } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

const STORAGE_KEY = "brandexa-free-ad-offer-dismissed";

export function FreeAdOfferPopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Initialize state after mounting to avoid SSR hydration mismatch
  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionHandler);

    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        // Small delay on initial entrance for smooth cinematic entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 400);
        return () => {
          clearTimeout(timer);
          mediaQuery.removeEventListener("change", motionHandler);
        };
      } else {
        setIsDismissed(true);
      }
    } catch {
      // Fallback for private browsing/storage errors
      setIsOpen(true);
    }

    return () => mediaQuery.removeEventListener("change", motionHandler);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent(EVENTS.CTA_CLICK, { location: "floating_offer_button" });
  };

  const handleClaim = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    trackEvent(EVENTS.CTA_CLICK, { location: "offer_popup_cta" });
    router.push("/ads/account-setup");
  };

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent background body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <>
      {/* 1. Centered Modal Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-popup-title"
        >
          {/* Translucent Backdrop */}
          <div
            className={`fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-400 ${
              reducedMotion ? "opacity-100" : "animate-fadeIn"
            }`}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container Card */}
          <div
            className={`relative w-full max-w-md bg-[#060a12]/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.85)] z-10 overflow-hidden ${
              reducedMotion
                ? "opacity-100"
                : "animate-modalEntrance transition-all duration-500 ease-out"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-lime-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Circular Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 cursor-pointer shadow-lg"
              aria-label="Close promotional offer popup"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Header */}
            <div className="text-center pt-3">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-black tracking-widest text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 uppercase mb-4 font-mono">
                <Sparkles className="w-3 h-3 text-lime-400" />
                <span>LIMITED PROMOTION</span>
              </div>
              <h2
                id="offer-popup-title"
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight mb-2"
              >
                CLAIM YOUR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                  FREE AD MANAGEMENT
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-6">
                Let us prove what better creative and targeting can do. When you profit, we win.
              </p>
            </div>

            {/* Scarcity Status */}
            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-inner mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-widest text-amber-400 font-mono uppercase mb-0.5">
                  CAPACITY LIMIT
                </span>
                <span className="text-xs text-slate-400 font-medium">8 Clients / Month</span>
              </div>
              <div className="text-right flex flex-col items-end">
                 <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                    </span>
                    <span className="text-[10px] font-bold text-slate-300 font-mono uppercase">
                      STATUS
                    </span>
                 </div>
                 <span className="text-sm font-black text-lime-400 tracking-wider font-mono">
                    2 SPOTS LEFT
                 </span>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <button
              onClick={handleClaim}
              className="group w-full py-4 px-6 text-sm font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <span>CLAIM NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating Offer Button (Appears after closing modal) */}
      {!isOpen && isDismissed && (
        <div className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6">
          <button
            onClick={handleOpen}
            className="group flex items-center gap-3 p-1.5 pr-5 bg-slate-950/95 backdrop-blur-md border border-lime-500/50 hover:border-lime-400 !rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_35px_rgba(132,204,22,0.5)] transition-all duration-300 active:scale-[0.96] cursor-pointer"
            style={{ 
              borderRadius: "9999px",
              animation: !reducedMotion ? "offerVibrate 4.5s ease-in-out infinite" : "none" 
            }}
            aria-label="Claim Free Ad Management special gift offer"
          >
            {/* Gift Icon Circle */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-emerald-500 via-[#84cc16] to-lime-400 flex items-center justify-center shrink-0 shadow-inner">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 drop-shadow-md animate-bounce" style={{ animationDuration: "2s" }} />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col text-left py-0.5">
              <span className="font-black text-[10px] sm:text-xs text-lime-400 uppercase tracking-widest leading-tight drop-shadow-[0_0_8px_rgba(132,204,22,0.4)]">
                SPECIAL GIFT OFFER
              </span>
              <span className="font-bold text-[8px] sm:text-[9px] text-slate-300 uppercase tracking-wider leading-tight mt-0.5">
                FIRST COME, FIRST SERVE
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Inline styles for modal entrance and periodic vibrate animation */}
      <style jsx global>{`
        @keyframes modalEntrance {
          0% {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes offerVibrate {
          0%, 72%, 100% {
            transform: translate(0, 0) rotate(0deg);
            box-shadow: 0 0 20px rgba(132, 204, 22, 0.4);
          }
          75% {
            transform: translate(-3px, -2px) rotate(-1.5deg);
            box-shadow: 0 0 35px rgba(132, 204, 22, 0.75);
          }
          78% {
            transform: translate(3px, 1px) rotate(1.5deg);
          }
          81% {
            transform: translate(-3px, 1px) rotate(-1deg);
          }
          84% {
            transform: translate(3px, -1px) rotate(1deg);
          }
          87% {
            transform: translate(-1px, 1px) rotate(-0.5deg);
          }
          90% {
            transform: translate(1px, -1px) rotate(0.5deg);
          }
          93% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        .animate-modalEntrance {
          animation: modalEntrance 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
