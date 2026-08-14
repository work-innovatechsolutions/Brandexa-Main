"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Target, Sliders, Gift } from "lucide-react";

const OFFERS = [
  {
    icon: Video,
    emoji: "🎬",
    title: "3 Custom Video Creatives",
    description:
      "Scroll-stopping videos, motion graphics, and psychological scriptwriting tailored specifically to your niche.",
    accent: "#3B82F6",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Complete Meta Pixel Setup",
    description:
      "CAPI integration, conversion tracking, custom events, and hyper-targeted audience modeling.",
    accent: "#8B5CF6",
  },
  {
    icon: Sliders,
    emoji: "⚙️",
    title: "Custom Sales Funnel",
    description:
      "Tailored sales funnel designed specifically for your business model to filter out unqualified leads automatically.",
    accent: "#F59E0B",
  },
  {
    icon: Gift,
    emoji: "🟢",
    title: "100% Free Ad Management",
    description:
      "Campaign management without the usual monthly retainer. Zero management fees for execution, daily optimization, and scaling.",
    accent: "#00E87B",
  },
];

export function OfferSection() {
  return (
    <section
      id="offer"
      className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="offer-heading text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
            COMPLETE GROWTH STACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
            HERE&apos;S WHAT YOU GET
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Everything you need to turn cold attention into high-ticket qualified booked calls.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
        >
          {OFFERS.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="offer-card group relative bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 hover:bg-slate-900/95 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Top Subtle Gradient Light */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${offer.accent}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${offer.accent}40`,
                    backgroundColor: `${offer.accent}15`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: offer.accent }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span>{offer.emoji}</span>
                  <span>{offer.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {offer.description}
                </p>

                {/* Corner Glow Accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${offer.accent}, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
