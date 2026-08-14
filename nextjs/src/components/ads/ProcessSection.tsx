"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Deep-Dive Research & Strategy",
    description:
      "We dissect your target audience, identify winning angles, analyze competitors, and isolate high-intent buyer psychology.",
    bullets: [
      "Competitor funnel tear-down",
      "Audience avatar psychological mapping",
      "High-converting hook development",
      "Offer positioning refinement",
    ],
    accent: "#3B82F6",
  },
  {
    num: "02",
    title: "High-Impact Video Creative Production",
    badge: "OUR SPECIALTY",
    description:
      "We produce 3 custom video creatives featuring scroll-stopping visual hooks, motion typography, and high-trust storytelling.",
    bullets: [
      "Custom cinematic scripts",
      "Dynamic typography & sound design",
      "Visual pattern interrupts",
      "Multiple hook variations for A/B testing",
    ],
    accent: "#8B5CF6",
  },
  {
    num: "03",
    title: "Funnel Engineering & Pixel Architecture",
    description:
      "We optimize your landing page flow and tracking setup so only qualified buyers book appointments, not tire-kickers.",
    bullets: [
      "Meta Conversions API (CAPI) setup",
      "Automated lead qualification gate",
      "Calendar booking optimization",
      "Retargeting pixel event modeling",
    ],
    accent: "#EC4899",
  },
  {
    num: "04",
    title: "Meta Ads Launch & Aggressive Scaling",
    description:
      "We manage, test, and scale your Meta Ads for 100% free with daily budget monitoring and performance optimization.",
    bullets: [
      "Bid & budget scaling management",
      "Daily creative testing & fatigue rotation",
      "Hyper-targeted lookalikes & custom audiences",
      "Weekly transparent ROI reporting",
    ],
    accent: "#00E87B",
  },
];

export function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="process-heading text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
            OUR 4-STEP REVENUE SYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mt-2 text-white">
            THE EXACT BLUEPRINT TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              MULTIPLY YOUR REVENUE
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            We don&apos;t just run ads; we build highly profitable growth systems. Here is exactly how we scale your business step-by-step.
          </p>
        </motion.div>

        {/* Timeline with Scroll-Driven Neon Beam */}
        <div ref={timelineRef} className="process-timeline relative">
          {/* Vertical timeline base track (desktop) */}
          <div className="hidden md:block absolute left-[31px] top-6 bottom-6 w-[3px] bg-slate-800/80 rounded-full overflow-hidden">
            {/* Scroll-based active neon filling line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-400 shadow-[0_0_18px_#00e87b] relative"
            >
              {/* Glowing leading head bulb */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-300 rounded-full shadow-[0_0_14px_#00e87b]" />
            </motion.div>

            {/* Traveling Laser Pulse Overlay */}
            <motion.div
              animate={{
                top: ["-20%", "120%"],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-emerald-300/80 to-transparent shadow-[0_0_20px_#10b981]"
            />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {STEPS.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="process-step relative md:pl-24 group"
              >
                {/* Step number badge with neon glow */}
                <div
                  className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl border-2 items-center justify-center text-lg font-black z-10 transition-transform duration-300 group-hover:scale-110 shadow-2xl backdrop-blur-md"
                  style={{
                    borderColor: `${step.accent}70`,
                    color: step.accent,
                    backgroundColor: "#0a0f1d",
                    boxShadow: `0 0 20px ${step.accent}30`,
                  }}
                >
                  {step.num}
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: step.accent }}
                  />
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>

                {/* Card */}
                <div
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 hover:bg-slate-900/95 transition-all duration-300 shadow-xl relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                    }}
                  />

                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      {/* Mobile number */}
                      <span
                        className="md:hidden text-xs font-black tracking-widest mb-1.5 block"
                        style={{ color: step.accent }}
                      >
                        STAGE {step.num}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {step.title}
                      </h3>
                    </div>
                    {step.badge && (
                      <span
                        className="text-xs font-black tracking-wider px-3 py-1 rounded-full border whitespace-nowrap"
                        style={{
                          color: step.accent,
                          borderColor: `${step.accent}40`,
                          backgroundColor: `${step.accent}15`,
                        }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="border-t border-slate-800/80 pt-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2.5 text-sm text-slate-200 font-medium"
                        >
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: step.accent }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
