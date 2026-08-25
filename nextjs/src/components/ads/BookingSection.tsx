"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Lock,
} from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

const VALUE_OPTIONS = ["$400", "$500", "$1000", "$2000+"];

// August 2026 calendar
const AVAILABLE_DAYS = [11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 24, 25, 26];
const TIME_SLOTS = ["10:00 AM", "02:30 PM", "05:00 PM"];
const AUGUST_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const START_DAY_OFFSET = 6; // Aug 1 2026 is Saturday

export function BookingSection() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [valuation, setValuation] = useState("$1000");
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedTime, setSelectedTime] = useState("02:30 PM");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const goToStep2 = () => {
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your WhatsApp or Phone Number.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid business email address.");
      return;
    }
    setError("");
    trackEvent(EVENTS.FORM_STEP_COMPLETED, { step: 1 });
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Fire AiSensy WhatsApp notification
      await fetch("/api/whatsapp-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          valuation,
          date: `Aug ${selectedDate}, 2026`,
          time: selectedTime,
        }),
      });
    } catch (err) {
      console.error("[WhatsApp notify] Failed:", err);
    }

    trackEvent(EVENTS.FORM_SUBMITTED, {
      valuation,
      date: `Aug ${selectedDate}`,
      time: selectedTime,
    });

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="booking"
        className="relative w-full text-white"
      >
        <div className="max-w-xl mx-auto px-5 sm:px-8 text-center">
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Success icon */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-black tracking-widest text-emerald-400 uppercase block mb-2">
              BOOKING CONFIRMED
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              YOU&apos;RE ON THE CALENDAR!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              Your free strategy kickoff call is scheduled.
            </p>

            {/* Details */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Contact</span>
                <span className="text-white font-bold">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Time</span>
                <span className="text-emerald-400 font-bold">
                  Aug {selectedDate}, 2026 @ {selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Email</span>
                <span className="text-slate-200">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">WhatsApp</span>
                <span className="text-slate-200">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service Value Fit</span>
                <span className="text-blue-400 font-bold">{valuation}/mo tier</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              🔒 You will receive a direct WhatsApp & Email confirmation with your Google Meet link shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="relative w-full text-white"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="booking-heading text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase mb-4">
            FINAL STEP: SCHEDULE KICKOFF
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
            YOU&apos;RE ALMOST THERE!
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Fill out your details below and select a date to book your free strategy kickoff call.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          {/* Step indicator */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800">
            <div className={`flex items-center gap-2 ${step === 1 ? "text-white font-bold" : "text-slate-400 font-semibold"}`}>
              <span className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center border ${step === 1 ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400" : "border-slate-700 bg-slate-800 text-slate-400"}`}>
                {step > 1 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : "1"}
              </span>
              <span className="text-xs sm:text-sm">Your Details</span>
            </div>
            <div className="flex-1 h-px bg-slate-800" />
            <div className={`flex items-center gap-2 ${step === 2 ? "text-white font-bold" : "text-slate-400 font-semibold"}`}>
              <span className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center border ${step === 2 ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400" : "border-slate-700 bg-slate-800 text-slate-400"}`}>
                2
              </span>
              <span className="text-xs sm:text-sm">Kickoff Call</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {step === 1 && (
              <div className="step-content space-y-6">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                      <User className="w-4 h-4 text-emerald-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (555) 234-5678"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@yourcompany.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all text-sm font-medium"
                  />
                </div>

                {/* Value Perception Question */}
                <div className="space-y-3 pt-2">
                  <label className="text-sm text-slate-300 leading-relaxed block font-medium">
                    🧠 If this premium service (Expert Ad Management + Custom Video
                    Creatives) were a paid monthly retainer, how much would you
                    value it at?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {VALUE_OPTIONS.map((val) => {
                      const isSelected = valuation === val;
                      return (
                        <button
                          type="button"
                          key={val}
                          onClick={() => setValuation(val)}
                          className={`py-3.5 px-3 rounded-xl border text-sm font-black transition-all cursor-pointer ${
                            isSelected
                              ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 shadow-md shadow-emerald-500/10"
                              : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Next button with rich animations */}
                <button
                  type="button"
                  onClick={goToStep2}
                  className="group relative w-full overflow-hidden flex items-center justify-center gap-3 px-6 py-4 sm:py-5 text-base font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:shadow-[0_0_50px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] cursor-pointer mt-4 uppercase tracking-wider"
                >
                  {/* Light Sheen Sweep Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform ease-out pointer-events-none" />

                  <span className="relative z-10">PROCEED TO CALENDAR SELECTION</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="step-content space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6">
                  {/* Calendar */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-emerald-400" />
                        August 2026
                      </span>
                      <div className="flex items-center gap-1 text-slate-500">
                        <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-white" />
                        <ChevronRight className="w-4 h-4 cursor-pointer hover:text-white" />
                      </div>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {/* Empty padding cells */}
                      {Array.from({ length: START_DAY_OFFSET }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-9" />
                      ))}

                      {AUGUST_DAYS.map((day) => {
                        const isAvail = AVAILABLE_DAYS.includes(day);
                        const isSel = selectedDate === day;

                        return (
                          <button
                            type="button"
                            key={day}
                            disabled={!isAvail}
                            onClick={() => {
                              setSelectedDate(day);
                              trackEvent(EVENTS.CALENDAR_OPENED, { day });
                            }}
                            className={`h-9 rounded-lg font-bold flex items-center justify-center transition-all ${
                              isSel
                                ? "bg-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
                                : isAvail
                                ? "bg-slate-900 text-slate-200 border border-slate-800 hover:border-emerald-400/50 hover:bg-slate-800 cursor-pointer"
                                : "text-slate-600 cursor-not-allowed opacity-40"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="md:col-span-5 space-y-4 md:border-l md:border-slate-800 md:pl-6 flex flex-col justify-center">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      Select Kickoff Time
                    </span>

                    <div className="space-y-2">
                      {TIME_SLOTS.map((time) => {
                        const isSel = selectedTime === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full py-3 px-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                              isSel
                                ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 shadow-sm"
                                : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white"
                            }`}
                          >
                            <span>{time}</span>
                            {isSel && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3.5 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800 font-medium">
                      Selected:{" "}
                      <strong className="text-emerald-400 font-bold">
                        Aug {selectedDate}, 2026 @ {selectedTime}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Back + Submit */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 text-sm font-bold text-slate-300 border border-slate-800 rounded-2xl hover:border-slate-700 hover:text-white bg-slate-950 transition-colors cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="group relative overflow-hidden flex-1 flex items-center justify-center gap-3 px-6 py-4 sm:py-5 text-base font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:shadow-[0_0_50px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] cursor-pointer uppercase tracking-wider"
                  >
                    {/* Light Sheen Sweep Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform ease-out pointer-events-none" />

                    <span className="relative z-10">CONFIRM DETAILS & BOOK MY MEETING</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold pt-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your information is 100% secure and confidential.</span>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
