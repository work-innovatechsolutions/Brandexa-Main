"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { trackEvent, EVENTS } from "@/lib/tracking";

const NAV_LINKS = [
  { label: "How It Works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "What You Get", href: "#offer" },
  { label: "FAQ", href: "#why-free" },
];

export function AdHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP mobile menu animation
  useEffect(() => {
    if (!menuRef.current || !menuItemsRef.current) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        menuItemsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    trackEvent(EVENTS.CTA_CLICK, { location: "header" });
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050507]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/ads" className="flex items-center gap-2.5 group">
            <span className="text-lg font-bold tracking-tight text-white">
              BRANDEXA
            </span>
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#00E87B] border border-[#00E87B]/30 px-2 py-0.5 rounded-full">
              GROWTH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#booking"
            onClick={scrollToBooking}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-[#050507] bg-[#00E87B] rounded-lg hover:bg-[#00ff88] transition-colors"
          >
            <span>CLAIM FREE AD MANAGEMENT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-[#050507]/98 backdrop-blur-2xl flex flex-col items-center justify-center opacity-0"
        >
          <div ref={menuItemsRef} className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-semibold text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-[#050507] bg-[#00E87B] rounded-xl"
            >
              <span>CLAIM FREE AD MANAGEMENT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
