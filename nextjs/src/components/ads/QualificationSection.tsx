"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const QUALIFIERS = [
  "Businesses ready to scale",
  "Strong product or service",
  "Clear customer demand",
  "Willingness to invest in growth",
  "Decision-makers who can move quickly",
];

export function QualificationSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="qual-content"
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
              IDEAL CLIENT FIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
              THIS ISN&apos;T FOR <span className="text-slate-500">EVERY BUSINESS.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-lg mx-auto leading-relaxed">
              We only work with businesses where our psychological video creatives and performance system can create massive, measurable growth.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <ul className="space-y-4">
              {QUALIFIERS.map((item) => (
                <li
                  key={item}
                  className="qual-item flex items-center gap-3.5 text-base sm:text-lg text-slate-100 font-semibold"
                >
                  <span className="w-7 h-7 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
