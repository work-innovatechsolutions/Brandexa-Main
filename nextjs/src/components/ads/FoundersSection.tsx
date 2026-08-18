"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export function FoundersSection() {
  const founders = [
    {
      name: "Mrityunjoy Sarkar",
      role: "Co-Founder & Creative Director",
      experience: "Video & Funnel Architect with 10 Years Experience",
      bio: "Master of scroll-stopping video hooks, cinematic scriptwriting, and high-conversion landing page design.",
      image: "/ads/mrittunjoy.jpeg",
      gradient: "from-[#00E87B] via-[#84cc16] to-[#8B5CF6]",
      accent: "#00E87B",
    },
    {
      name: "Rilom Kumar Mondal",
      role: "Co-Founder & Meta Ads Director",
      experience: "6+ Years Experience in Digital Marketing & Meta Ads",
      bio: "Specialist in high-ticket paid media architecture, audience psychology, and Meta Ads scaling.",
      image: "/ads/rilom.png",
      gradient: "from-[#38bdf8] via-[#3B82F6] to-[#00E87B]",
      accent: "#38bdf8",
    },
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-transparent text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="founders-heading text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 uppercase mb-4 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>EXECUTIVE CREDIBILITY</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2 uppercase">
            THE FACES BEHIND YOUR NEXT BIG ROI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            With 9+ years of specialized experience, we manage every campaign hands-on and focus on building growth systems that turn attention into revenue.
          </p>
        </motion.div>

        {/* Founder Cards - Large Photo Layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="founders-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="founder-card group bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 hover:bg-slate-900/95 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:-translate-y-1"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${founder.accent}, transparent)`,
                }}
              />

              <div>
                {/* Large Founder Photo Portrait - 3:4 Aspect Ratio */}
                <div
                  className={`relative w-full aspect-[3/4] rounded-2xl p-[2px] bg-gradient-to-br ${founder.gradient} shadow-xl overflow-hidden mb-5 group-hover:scale-[1.01] transition-transform duration-500`}
                >
                  <div className="relative w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Experience Tag */}
                <div className="mb-3">
                  <span
                    className="inline-flex items-center text-xs font-black tracking-wider px-3 py-1 rounded-lg border font-mono"
                    style={{
                      color: founder.accent,
                      borderColor: `${founder.accent}40`,
                      backgroundColor: `${founder.accent}15`,
                    }}
                  >
                    {founder.experience}
                  </span>
                </div>

                {/* Name & Role Header */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {founder.name}
                  </h3>
                  <p
                    className="text-sm font-bold mt-1"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Execution callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-xl backdrop-blur-md"
        >
          <Award className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Direct Founder Execution:</strong> We don&apos;t hand off your ad account to inexperienced interns. We write the psychological scripts, produce high-converting video creatives, build custom pre-qualifying funnels, and optimize your Meta Ad spend daily.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
