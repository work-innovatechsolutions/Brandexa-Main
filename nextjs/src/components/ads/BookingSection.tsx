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
  Loader2,
} from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

const VALUE_OPTIONS = ["$400", "$500", "$1000", "$2000+"];

const POPULAR_TIMES = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const SHORT_MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function parseTimeString(time12: string) {
  const match = time12.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (match) {
    const h = parseInt(match[1], 10);
    return {
      hour: h.toString().padStart(2, "0"),
      minute: match[2],
      period: match[3].toUpperCase() as "AM" | "PM",
    };
  }
  return { hour: "02", minute: "30", period: "PM" as const };
}

export function BookingSection() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [valuation, setValuation] = useState("$1000");

  // Selected date state (defaults to tomorrow)
  const [selectedDateObj, setSelectedDateObj] = useState(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return {
      year: nextDay.getFullYear(),
      month: nextDay.getMonth(),
      day: nextDay.getDate(),
    };
  });

  // Calendar view navigation state
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth());

  const [selectedTime, setSelectedTime] = useState("02:30 PM");
  const [customHour, setCustomHour] = useState("02");
  const [customMinute, setCustomMinute] = useState("30");
  const [customPeriod, setCustomPeriod] = useState<"AM" | "PM">("PM");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelectPreset = (time: string) => {
    setSelectedTime(time);
    const parsed = parseTimeString(time);
    setCustomHour(parsed.hour);
    setCustomMinute(parsed.minute);
    setCustomPeriod(parsed.period);
  };

  const handleCustomChange = (h: string, m: string, p: "AM" | "PM") => {
    setCustomHour(h);
    setCustomMinute(m);
    setCustomPeriod(p);
    setSelectedTime(`${h}:${m} ${p}`);
  };

  const handleApplyCustomTime = () => {
    setSelectedTime(`${customHour}:${customMinute} ${customPeriod}`);
  };

  const isCustomSelected = !POPULAR_TIMES.includes(selectedTime);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startDayOffset = new Date(viewYear, viewMonth, 1).getDay();

  const isCurrentMonth =
    viewYear === new Date().getFullYear() && viewMonth === new Date().getMonth();

  const handlePrevMonth = () => {
    if (isCurrentMonth) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    if (viewYear < todayYear) return true;
    if (viewYear === todayYear && viewMonth < todayMonth) return true;
    if (viewYear === todayYear && viewMonth === todayMonth && day < todayDay) return true;
    return false;
  };

  const bookingDate = `${SHORT_MONTH_NAMES[selectedDateObj.month]} ${selectedDateObj.day}, ${selectedDateObj.year}`;
  const fullFormattedDate = `${MONTH_NAMES[selectedDateObj.month]} ${selectedDateObj.day}, ${selectedDateObj.year}`;

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

    const payload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      valuation,
      date: bookingDate,
      time: selectedTime,
    };

    try {
      // 1. Trigger automated email confirmation & Google Sheet sync
      const res = await fetch("/api/ads-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to confirm your booking. Please try again.");
      }

      // 2. Fire AiSensy WhatsApp notification in background
      fetch("/api/whatsapp-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.error("[WhatsApp notify] Failed:", err);
      });

      trackEvent(EVENTS.FORM_SUBMITTED, {
        valuation,
        date: bookingDate,
        time: selectedTime,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("[Ads Booking] Failed:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
                  {fullFormattedDate} @ {selectedTime}
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

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
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
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
                    {error}
                  </div>
                )}

                {/* ── Calendar + Time: stacked vertical layout ── */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">

                  {/* ─── CALENDAR ─── */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-emerald-400" />
                        {MONTH_NAMES[viewMonth]} {viewYear}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={isCurrentMonth}
                          onClick={handlePrevMonth}
                          aria-label="Previous month"
                          className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                            isCurrentMonth
                              ? "border-slate-800 text-slate-700 cursor-not-allowed"
                              : "border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          aria-label="Next month"
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-1">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div key={d} className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider py-1">
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: startDayOffset }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const isPast = isPastDate(day);
                        const isSel =
                          selectedDateObj.year === viewYear &&
                          selectedDateObj.month === viewMonth &&
                          selectedDateObj.day === day;
                        return (
                          <button
                            type="button"
                            key={day}
                            disabled={isPast}
                            onClick={() => {
                              setSelectedDateObj({ year: viewYear, month: viewMonth, day });
                              trackEvent(EVENTS.CALENDAR_OPENED, { day, month: viewMonth, year: viewYear });
                            }}
                            className={`h-10 rounded-xl text-sm font-bold flex items-center justify-center transition-all ${
                              isSel
                                ? "bg-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
                                : !isPast
                                ? "text-slate-200 hover:bg-slate-800 hover:text-white cursor-pointer"
                                : "text-slate-700 cursor-not-allowed"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ─── DIVIDER ─── */}
                  <div className="border-t border-slate-800" />

                  {/* ─── TIME PICKER ─── */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Select Time
                    </p>

                    {/* Quick Presets — 3-column grid, always enough space */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                      {POPULAR_TIMES.map((time) => {
                        const isSel = selectedTime === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => handleSelectPreset(time)}
                            className={`py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center whitespace-nowrap ${
                              isSel
                                ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30"
                                : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600 hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Time — single horizontal row */}
                    <div className={`rounded-xl border p-3.5 transition-all ${
                      isCustomSelected
                        ? "border-emerald-500/40 bg-emerald-500/5 ring-1 ring-emerald-500/20"
                        : "border-slate-800 bg-slate-900/60"
                    }`}>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                        ✦ Custom Time
                      </p>
                      <div className="flex items-center gap-2">
                        {/* Hour */}
                        <select
                          value={customHour}
                          onChange={(e) => handleCustomChange(e.target.value, customMinute, customPeriod)}
                          className="w-16 bg-slate-950 border border-slate-700 focus:border-emerald-400 text-white rounded-lg py-2.5 text-sm font-bold focus:outline-none cursor-pointer text-center transition-colors"
                        >
                          {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                            <option key={h} value={h} className="bg-slate-900">{h}</option>
                          ))}
                        </select>

                        <span className="text-slate-400 font-black text-xl shrink-0">:</span>

                        {/* Minute */}
                        <select
                          value={customMinute}
                          onChange={(e) => handleCustomChange(customHour, e.target.value, customPeriod)}
                          className="w-16 bg-slate-950 border border-slate-700 focus:border-emerald-400 text-white rounded-lg py-2.5 text-sm font-bold focus:outline-none cursor-pointer text-center transition-colors"
                        >
                          {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")).map((m) => (
                            <option key={m} value={m} className="bg-slate-900">{m}</option>
                          ))}
                        </select>

                        {/* AM / PM toggle */}
                        <div className="flex rounded-lg overflow-hidden border border-slate-700 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCustomChange(customHour, customMinute, "AM")}
                            className={`px-3.5 py-2.5 text-xs font-black transition-colors cursor-pointer ${
                              customPeriod === "AM"
                                ? "bg-emerald-400 text-slate-950"
                                : "bg-slate-950 text-slate-400 hover:text-white"
                            }`}
                          >
                            AM
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCustomChange(customHour, customMinute, "PM")}
                            className={`px-3.5 py-2.5 text-xs font-black transition-colors cursor-pointer border-l border-slate-700 ${
                              customPeriod === "PM"
                                ? "bg-emerald-400 text-slate-950"
                                : "bg-slate-950 text-slate-400 hover:text-white"
                            }`}
                          >
                            PM
                          </button>
                        </div>

                        {/* Set button */}
                        <button
                          type="button"
                          onClick={handleApplyCustomTime}
                          className="flex-1 py-2.5 rounded-lg border border-emerald-500/50 hover:border-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-bold text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          Set Time
                        </button>
                      </div>
                    </div>

                    {/* Selected summary pill */}
                    <div className="mt-3 flex items-center gap-2 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl">
                      <CalendarIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs text-slate-400 font-medium">Scheduled:</span>
                      <span className="text-sm font-black text-emerald-400 ml-auto">{fullFormattedDate} @ {selectedTime}</span>
                    </div>
                  </div>
                </div>

                {/* Back + Submit */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => setStep(1)}
                    className="px-6 py-4 text-sm font-bold text-slate-300 border border-slate-800 rounded-2xl hover:border-slate-700 hover:text-white bg-slate-950 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative overflow-hidden flex-1 flex items-center justify-center gap-3 px-6 py-4 sm:py-5 text-base font-black text-slate-950 bg-gradient-to-r from-lime-400 via-[#84cc16] to-emerald-400 hover:from-lime-300 hover:to-emerald-300 rounded-2xl shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:shadow-[0_0_50px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] cursor-pointer uppercase tracking-wider disabled:opacity-75 disabled:cursor-wait"
                  >
                    {/* Light Sheen Sweep Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform ease-out pointer-events-none" />

                    <span className="relative z-10">
                      {isLoading ? "CONFIRMING YOUR BOOKING..." : "CONFIRM DETAILS & BOOK MY MEETING"}
                    </span>
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 relative z-10 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
                    )}
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
