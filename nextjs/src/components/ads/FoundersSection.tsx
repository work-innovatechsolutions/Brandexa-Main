"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function FoundersSection() {
  const founders = [
    {
      initials: "RK",
      name: "Rilom Kumar Mondal",
      role: "Co-Founder & Meta Ads Director",
      experience: "9+ Years Experience",
      bio: "Specialist in high-ticket paid media architecture, audience psychology, and Meta Ads scaling.",
      gradient: "from-[#3B82F6] to-[#00E87B]",
      accent: "#3B82F6",
    },
    {
      initials: "M",
      name: "Mrityunjoy",
      role: "Co-Founder & Creative Director",
      experience: "Video & Funnel Architect",
      bio: "Master of scroll-stopping video hooks, cinematic scriptwriting, and high-conversion landing page design.",
      gradient: "from-[#00E87B] to-[#8B5CF6]",
      accent: "#00E87B",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-slate-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="founders-heading text-center mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 uppercase mb-4">
            EXECUTIVE CREDIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
            THE FACES BEHIND YOUR NEXT BIG ROI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            With 9+ years of specialized experience, we manage every campaign hands-on and focus on building growth systems that turn attention into revenue.
          </p>
        </motion.div>

        {/* Founder Cards */}
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
              className="founder-card group bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-7 sm:p-8 hover:bg-slate-900/95 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${founder.accent}, transparent)`,
                }}
              />

              {/* Avatar & Title Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${founder.gradient} p-[2px] flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-xl font-black text-white">
                      {founder.initials}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {founder.name}
                  </h3>
                  <p
                    className="text-xs font-bold mt-0.5"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Experience tag */}
              <div className="mb-4">
                <span
                  className="inline-flex text-xs font-black tracking-wider px-3 py-1 rounded-md border"
                  style={{
                    color: founder.accent,
                    borderColor: `${founder.accent}40`,
                    backgroundColor: `${founder.accent}15`,
                  }}
                >
                  {founder.experience}
                </span>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Execution callout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-xl"
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
