"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Video, 
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export function BlueprintSection() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "1",
      icon: Search,
      title: "1. DEEP MARKET & AVATAR RESEARCH",
      accent: "from-blue-500 via-cyan-400 to-indigo-500",
      border: "border-blue-500/40",
      bgHover: "hover:border-blue-500/80",
      description:
        "Before spending a single dollar, we analyze your ideal customers, their deepest pain points, and their buying psychology.",
      bullets: [
        "Buying psychology & objection mapping",
        "Competitor ad copy tear-down",
        "High-ticket offer positioning"
      ]
    },
    {
      number: "2",
      icon: Filter,
      title: "2. CUSTOM FUNNEL DESIGN",
      accent: "from-purple-500 via-pink-400 to-indigo-500",
      border: "border-purple-500/40",
      bgHover: "hover:border-purple-500/80",
      description:
        "We don't use templates. We build a proven, tailored sales funnel designed specifically for your business model to filter out unqualified leads immediately.",
      bullets: [
        "Pre-qualifying intake questionnaires",
        "High-converting VSL / Landing page layout",
        "Automated WhatsApp & Email follow-ups"
      ]
    },
    {
      number: "3",
      icon: Video,
      title: "3. PSYCHOLOGICAL AD CREATIVES (OUR SPECIALTY)",
      accent: "from-amber-500 via-orange-400 to-rose-500",
      border: "border-amber-500/40",
      bgHover: "hover:border-amber-500/80",
      badge: "OUR SPECIALTY 🔥",
      description:
        "We replace boring images with cinematic, scroll-stopping videos, B-rolls, and motion graphics that build massive trust and pre-qualify your leads before the sales call even happens.",
      bullets: [
        "Hook-driven scriptwriting",
        "Cinematic video editing & motion graphics",
        "3 distinct creative variations per campaign"
      ]
    },
    {
      number: "4",
      icon: TrendingUp,
      title: "4. CAMPAIGN LAUNCH & ADVANCED RETARGETING",
      accent: "from-emerald-400 via-teal-300 to-emerald-500",
      border: "border-emerald-500/40",
      bgHover: "hover:border-emerald-500/80",
      description:
        "We launch your 100% free managed campaigns. For those who visit but don't take action, we track them and aggressively retarget them to recover your lost revenue.",
      bullets: [
        "100% Free managed ad execution",
        "Precision Custom Audience & Pixel retargeting",
        "Daily performance optimization & scaling"
      ]
    }
  ];

  return (
    <section className="relative bg-slate-950 py-28 text-white overflow-hidden border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/30">
            OUR 4-STEP REVENUE SYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            THE EXACT BLUEPRINT TO MULTIPLY YOUR REVENUE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don&apos;t just run ads; we build highly profitable growth systems. Here is exactly how we will scale your business step-by-step:
          </p>
        </div>

        {/* 4 Steps Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-900/90 border ${step.border} ${step.bgHover} p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${step.accent} text-slate-950 font-black text-xl flex items-center justify-center shadow-lg shadow-blue-500/10`}>
                        {step.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                        <StepIcon className="w-6 h-6" />
                      </div>
                    </div>

                    {step.badge && (
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 border-t border-slate-800/80 pt-5">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Blueprint CTA */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-lg sm:text-xl font-bold text-slate-200">
            Ready to implement this system into your business?
          </p>
          
          <div>
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>🟩 NEXT STEP: PROCEED TO ACCOUNT SETUP</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
