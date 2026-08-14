"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/tracking";

const FOOTER_LINKS = [
  { label: "How It Works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#why-free" },
  { label: "Contact", href: "#booking" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/privacy-policy" },
];

export function AdFooter() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { location: "footer" });
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-black tracking-tight text-white">
                BRANDEXA
              </span>
              <span className="text-xs font-bold tracking-widest text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                GROWTH
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              We engineer scalable performance video ads and conversion funnels, not just random ad campaigns.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-4">
                GET STARTED
              </span>
              <a
                href="#booking"
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>CLAIM YOUR FREE AD MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-medium">
            © 2026 Brandexa Growth. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
