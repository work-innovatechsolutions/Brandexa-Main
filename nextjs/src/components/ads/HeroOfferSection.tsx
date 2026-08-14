"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Video, 
  Target, 
  Sliders, 
  Gift, 
  Flame, 
  Award, 
  ArrowRight,
  Sparkles,
  Users,
  BarChart3,
  Check,
  Zap,
  Star,
  Lock,
  X,
  BadgeCheck
} from "lucide-react";

export function HeroOfferSection() {
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    description: string;
    roas: string;
    leads: string;
  } | null>(null);

  const [activeDashboardTab, setActiveDashboardTab] = useState<"roas" | "leads" | "revenue">("roas");

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pt-12 pb-24 text-white">
      {/* Ambient Radial Mesh Lighting & Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Urgency Header Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide">
              BRANDEXA GROWTH EXCLUSIVE OFFER
            </span>
            <span className="h-3.5 w-[1px] bg-slate-700"></span>
            <span className="text-xs sm:text-sm font-extrabold text-emerald-400 tracking-wider">
              100% FREE META AD MANAGEMENT
            </span>
          </div>
        </motion.div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1]"
          >
            GETTING HUNDREDS OF LEADS, BUT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-rose-500 underline decoration-rose-500/50 underline-offset-8">
              ZERO QUALIFIED BUYERS?
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Every time you get on a sales call, you hear the exact same excuse:{" "}
            <span className="text-amber-300 italic font-semibold">&quot;Let me think about it.&quot;</span> You are wasting hours calling window shoppers. We fix your lead quality with scroll-stopping video creatives, and manage your Meta Ads for <span className="text-emerald-400 font-bold underline underline-offset-4 decoration-emerald-500/50">100% FREE</span>.
          </motion.p>

          {/* Primary CTA Button Group */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6 flex flex-col items-center gap-4"
          >
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-slate-950 animate-pulse" />
              <span>🟩 CLAIM YOUR FREE AD MANAGEMENT NOW</span>
              <ArrowRight className="w-6 h-6 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Trust Micro Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                Zero Management Retainer Fees
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                100% Hands-On Founder Execution
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-amber-400" />
                No Lock-In Contract
              </span>
            </div>
          </motion.div>
        </div>

        {/* Founders Credibility Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              EXPERTISE & EXECUTIVE CREDIBILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              THE FACES BEHIND YOUR NEXT BIG ROI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founders Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Founder 1 */}
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-400 p-[2px] shadow-lg flex-shrink-0">
                      <div className="h-full w-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-white text-xl">
                        RK
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-base">Rilom Kumar Mondal</h3>
                      <p className="text-xs text-blue-400 font-semibold">Co-Founder & Meta Ads Director</p>
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 mt-1 rounded bg-blue-500/20 text-blue-300">
                        9+ Years Experience
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    Specialist in high-ticket paid media architecture, audience psychology, and Meta Ads scaling algorithms.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-emerald-400 to-indigo-500 p-[2px] shadow-lg flex-shrink-0">
                      <div className="h-full w-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-white text-xl">
                        M
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-base">Mrityunjoy</h3>
                      <p className="text-xs text-emerald-400 font-semibold">Co-Founder & Creative Director</p>
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 mt-1 rounded bg-emerald-500/20 text-emerald-300">
                        Video & Funnel Architect
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    Master of scroll-stopping video hooks, cinematic scriptwriting, and high-conversion landing page design.
                  </p>
                </div>
              </div>

            </div>

            {/* Founder Story Callout */}
            <div className="lg:col-span-6 bg-slate-950/60 p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Award className="w-5 h-5 text-amber-400" />
                <span>DIRECT FOUNDER LEVEL EXECUTION</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                <strong className="text-white">Hello! We are Rilom Kumar Mondal & Mrityunjoy</strong>, Founders & Digital Marketing Experts. With 9+ years of specialized experience, we manage every campaign hands-on.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We don&apos;t hand off your ad account to inexperienced interns. We write the psychological scripts, produce high-converting video creatives, build custom pre-qualifying funnels, and optimize your Meta Ad spend daily.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Client Satisfaction
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" /> Millions Generated
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Results & Interactive Meta Ads ROAS Showcase */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              EMPIRICAL CAMPAIGN PROOF
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
              RESULTS THAT SPEAK FOR THEMSELVES
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Inspect real verified Meta Ads performance data and scroll-stopping video ad reels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Meta Ads ROAS Interactive Card */}
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      LIVE META ADS MANAGER ROAS
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    VERIFIED CLIENT CASE STUDY
                  </span>
                </div>

                {/* Dashboard Metric Toggles */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 mb-6">
                  <button
                    onClick={() => setActiveDashboardTab("roas")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      activeDashboardTab === "roas"
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    4.85x ROAS
                  </button>
                  <button
                    onClick={() => setActiveDashboardTab("leads")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      activeDashboardTab === "leads"
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    12,450+ Leads
                  </button>
                  <button
                    onClick={() => setActiveDashboardTab("revenue")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      activeDashboardTab === "revenue"
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    $142.8k Revenue
                  </button>
                </div>

                {/* Interactive Metric Content Display */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 space-y-4">
                  {activeDashboardTab === "roas" && (
                    <div>
                      <span className="text-xs text-slate-400">Average Return On Ad Spend</span>
                      <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-1 flex items-baseline gap-3">
                        <span>4.85x ROAS</span>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                          +380% vs Industry Avg
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-3">
                        Campaign Ad Spend: <strong className="text-white">$29,450</strong> | Total Tracked Conversions: <strong className="text-emerald-400">$142,850</strong>
                      </p>
                    </div>
                  )}

                  {activeDashboardTab === "leads" && (
                    <div>
                      <span className="text-xs text-slate-400">Pre-Qualified High-Ticket Leads</span>
                      <div className="text-4xl sm:text-5xl font-black text-blue-400 mt-1 flex items-baseline gap-3">
                        <span>12,450 Leads</span>
                        <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                          100% Pre-Filtered
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-3">
                        Cost Per Qualified Lead: <strong className="text-white">$14.20</strong> | Show-Up Rate: <strong className="text-blue-400">82%</strong>
                      </p>
                    </div>
                  )}

                  {activeDashboardTab === "revenue" && (
                    <div>
                      <span className="text-xs text-slate-400">Direct Client Revenue Generated</span>
                      <div className="text-4xl sm:text-5xl font-black text-amber-400 mt-1 flex items-baseline gap-3">
                        <span>$142,850</span>
                        <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                          Net Scaled Revenue
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-3">
                        Client Retention Rate: <strong className="text-white">98%</strong> | Average Deal Size: <strong className="text-amber-400">$2,400</strong>
                      </p>
                    </div>
                  )}

                  {/* Graph SVG Mockup */}
                  <div className="h-20 w-full pt-4">
                    <svg className="w-full h-full text-emerald-400" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M0 25 Q15 22 30 18 T60 10 T90 5 T100 2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M0 25 Q15 22 30 18 T60 10 T90 5 T100 2 L100 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Verified Meta Pixel & CAPI Tracking</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Audit Verified
                </span>
              </div>
            </div>

            {/* Video Reel Mockup 1 */}
            <div 
              onClick={() => setActiveVideoModal({
                title: "🎬 Scroll-Stopping Hook Video Ad Reel",
                description: "This 45-second video ad uses psychological pattern interrupts to grab high-net-worth buyers in the first 3 seconds.",
                roas: "5.2x ROAS",
                leads: "4,200+ Leads"
              })}
              className="lg:col-span-3 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl cursor-pointer group hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    VIDEO REEL #1
                  </span>
                  <Video className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    Scroll-Stopping Hook Ad
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Pre-qualifies leads before the click</p>
                </div>

                <div className="h-44 w-full bg-slate-950 rounded-2xl border border-purple-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-purple-500/60 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-slate-950 opacity-90" />
                  <div className="h-14 w-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl shadow-purple-600/50 group-hover:scale-110 transition-transform relative z-10">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-900/90 px-2 py-0.5 rounded text-purple-300 border border-purple-500/30">
                    0:45 • HD
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-purple-300 font-semibold flex items-center justify-between">
                <span>▶ Click to Preview</span>
                <span className="text-purple-400 group-hover:underline">Play Reel</span>
              </div>
            </div>

            {/* Video Reel Mockup 2 */}
            <div 
              onClick={() => setActiveVideoModal({
                title: "🎬 Cinematic B-Roll Case Study Ad Reel",
                description: "Combines real client results, cinematic motion graphics, and voiceovers to build immediate authority.",
                roas: "4.6x ROAS",
                leads: "3,800+ Leads"
              })}
              className="lg:col-span-3 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl cursor-pointer group hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-400 border border-teal-500/30">
                    VIDEO REEL #2
                  </span>
                  <Video className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    Cinematic Case Study Ad
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Builds instant trust & authority</p>
                </div>

                <div className="h-44 w-full bg-slate-950 rounded-2xl border border-teal-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-teal-500/60 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/50 to-slate-950 opacity-90" />
                  <div className="h-14 w-14 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-xl shadow-teal-600/50 group-hover:scale-110 transition-transform relative z-10">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-900/90 px-2 py-0.5 rounded text-teal-300 border border-teal-500/30">
                    0:58 • HD
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-teal-300 font-semibold flex items-center justify-between">
                <span>▶ Click to Preview</span>
                <span className="text-teal-400 group-hover:underline">Play Reel</span>
              </div>
            </div>

          </div>
        </div>

        {/* Everything You Need To Scale - Core Deliverables Grid */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              COMPLETE DONE-FOR-YOU GROWTH STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
              EVERYTHING YOU NEED TO SCALE
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              We handle every step of your Meta Ads engine so you can focus 100% on closing sales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Deliverable 1 */}
            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                🎬 3 Custom Video Creatives
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scroll-stopping videos, motion graphics, and psychological scriptwriting tailored specifically to your niche.
              </p>
            </div>

            {/* Deliverable 2 */}
            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                🎯 Complete Meta Pixel Setup
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                CAPI integration, conversion tracking, custom events, and hyper-targeted audience modeling.
              </p>
            </div>

            {/* Deliverable 3 */}
            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-3xl hover:border-amber-500/50 transition-all duration-300 group shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sliders className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ⚙️ Custom Sales Funnel
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tailored sales funnel designed specifically for your business model to filter out tire-kickers automatically.
              </p>
            </div>

            {/* Deliverable 4 */}
            <div className="bg-slate-900/80 border border-slate-800 p-7 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 group shadow-xl hover:-translate-y-1">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                🆓 100% Free Ad Management
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero retainer management fee for campaign execution, daily optimization, and scaling.
              </p>
            </div>

          </div>
        </div>

        {/* Why Free & Scarcity Guarantee Block */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Why Free */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                OUR WIN-WIN GUARANTEE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                WHY FREE?
              </h3>
              <p className="text-slate-200 text-base leading-relaxed">
                Because we know our video creatives and funnel systems will dramatically increase your qualified sales. When you profit, we win long-term partners.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>No upfront retainer fees or long-term lock-in contract.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>We prove our high ROI before charging standard agency fees.</span>
                </div>
              </div>
            </div>

            {/* Scarcity Card */}
            <div className="lg:col-span-5 bg-slate-950/90 p-8 rounded-2xl border border-amber-500/40 text-center space-y-5 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-extrabold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
                <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                ONLY 5 SPOTS / MONTH
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">
                  Strict Monthly Capacity
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  To maintain quality, we only take 5 clients per month for founder-level execution.
                </p>
              </div>

              <div className="p-3.5 bg-amber-500/15 rounded-xl border border-amber-500/40 text-amber-300 text-sm font-black">
                🚨 (Only 2 Spots Left This Month!)
              </div>

              <a
                href="#booking"
                onClick={scrollToBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>🟩 YES, I WANT FREE AD MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Video Modal Preview */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-lg w-full text-center space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  CREATIVE PREVIEW DEMO
                </span>
                <h3 className="text-xl font-extrabold text-white">{activeVideoModal.title}</h3>
                <p className="text-xs text-slate-300">{activeVideoModal.description}</p>
              </div>

              {/* Video Player Demo Container */}
              <div className="h-60 bg-slate-950 rounded-2xl flex flex-col items-center justify-center border border-slate-800 p-6 relative overflow-hidden">
                <div className="h-16 w-16 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl shadow-purple-600/50 mb-3 animate-pulse">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
                <p className="text-xs font-bold text-slate-200">Scroll-Stopping Ad Reel Demo</p>
                <div className="flex gap-4 text-[11px] text-slate-400 mt-2 font-mono">
                  <span>ROAS: <strong className="text-emerald-400">{activeVideoModal.roas}</strong></span>
                  <span>Leads: <strong className="text-purple-400">{activeVideoModal.leads}</strong></span>
                </div>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-full py-3 bg-slate-800 text-slate-200 text-xs font-bold rounded-xl hover:bg-slate-700 transition-colors"
              >
                Close Preview
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
