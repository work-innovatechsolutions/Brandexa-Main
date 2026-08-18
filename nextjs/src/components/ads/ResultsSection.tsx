"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, TrendingUp, X, Sparkles, Video, BarChart3, ShieldCheck } from "lucide-react";

interface ShowcaseItem {
  type: "video" | "metric" | "funnel";
  badge: string;
  title: string;
  description: string;
  metrics: string;
  duration?: string;
  accent: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    type: "video",
    badge: "VIRAL HOOK AD",
    title: "Scroll-Stopping Hook Creative Reel",
    description: "Uses psychological pattern interrupts in the first 3 seconds to pre-qualify high-net-worth buyers before the click.",
    metrics: "5.2x ROAS • 4,250+ Leads",
    duration: "0:45 • HD",
    accent: "#A855F7",
  },
  {
    type: "video",
    badge: "AUTHORITY REEL",
    title: "Cinematic B-Roll Case Study Ad",
    description: "Combines real client success stories, dynamic captions, and crisp motion graphics to establish unshakeable market trust.",
    metrics: "4.6x ROAS • $68k Revenue",
    duration: "0:58 • HD",
    accent: "#3B82F6",
  },
  {
    type: "funnel",
    badge: "QUALIFYING FUNNEL",
    title: "Custom High-Ticket Intake Sales Funnel",
    description: "Multi-step intake questionnaire filtering out low-intent window shoppers so sales reps only speak with ready buyers.",
    metrics: "82% Show-Up Rate • $14 CPL",
    accent: "#F59E0B",
  },
  {
    type: "metric",
    badge: "AUDIT VERIFIED",
    title: "Live Meta Pixel & CAPI Ad Engine",
    description: "Full Conversions API integration with server-side tracking, custom purchase events, and Lookalike audience scaling.",
    metrics: "100% Data Accuracy • Scaled ROI",
    accent: "#00E87B",
  },
];

export function ResultsSection() {
  const [activeModal, setActiveModal] = useState<ShowcaseItem | null>(null);

  return (
    <section
      id="results"
      className="relative py-20 sm:py-32 overflow-hidden bg-transparent text-white"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/15 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="results-heading text-center mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
            VERIFIED CAMPAIGN PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
            RESULTS THAT SPEAK FOR THEMSELVES
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Real campaign assets, psychological video creatives, and conversion funnels engineered for maximum ROI.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveModal(item)}
              className="showcase-card group bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden hover:bg-slate-900/95 transition-all duration-300 shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
                {/* Visual backdrop gradient */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${item.accent}30, #020617 75%)`,
                  }}
                />

                {/* Animated waveform / visualizer lines */}
                <div className="absolute inset-x-8 bottom-6 flex items-end justify-between gap-1 h-12 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
                  {[40, 65, 30, 85, 95, 50, 70, 45, 90, 60, 75, 40, 85, 95, 60, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full"
                      style={{ height: `${h}%`, backgroundColor: item.accent }}
                    />
                  ))}
                </div>

                {/* Play Button or Visual Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl z-10 border"
                  style={{
                    backgroundColor: `${item.accent}25`,
                    borderColor: `${item.accent}60`,
                    color: item.accent,
                  }}
                >
                  {item.type === "video" ? (
                    <Play className="w-7 h-7 fill-current ml-1" />
                  ) : item.type === "funnel" ? (
                    <TrendingUp className="w-7 h-7" />
                  ) : (
                    <BarChart3 className="w-7 h-7" />
                  )}
                </div>

                {/* Duration / Format Tag */}
                {item.duration && (
                  <span
                    className="absolute bottom-3 right-3 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border z-10"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}40`,
                      backgroundColor: "#020617ee",
                    }}
                  >
                    {item.duration}
                  </span>
                )}

                {/* Category Badge */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full border z-10"
                  style={{
                    color: item.accent,
                    borderColor: `${item.accent}40`,
                    backgroundColor: "#020617ee",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    ⚡ {item.metrics}
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Preview Showcase →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Modal Preview */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-black px-3 py-1 rounded-full border"
                  style={{
                    color: activeModal.accent,
                    borderColor: `${activeModal.accent}50`,
                    backgroundColor: `${activeModal.accent}15`,
                  }}
                >
                  {activeModal.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  PROVEN CAMPAIGN ASSET
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                {activeModal.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeModal.description}
              </p>

              {/* Performance Metric Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Verified Metric Output</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Performance
                  </span>
                </div>
                <div className="text-lg font-black text-emerald-400">
                  {activeModal.metrics}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveModal(null);
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 text-center text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98] cursor-pointer"
              >
                GET THESE RESULTS FOR MY BRAND →
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
