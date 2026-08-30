"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPricingPlans } from "@/lib/cms/data";
import type { CmsPricingPlan } from "@/types/cms";

const STATIC_PLANS: CmsPricingPlan[] = [
  {
    id: "starter",
    planName: "Starter",
    price: "Contact Us",
    billingPeriod: "month",
    description: "Perfect for small businesses ready to establish their digital presence.",
    features: ["Brand Strategy", "Social Media Setup", "Basic Content Creation", "Monthly Report"],
    isFeatured: false,
    ctaText: "Get Started",
    ctaUrl: "/contact",
    orderIndex: 0,
    isVisible: true,
    updatedAt: "",
  },
  {
    id: "growth",
    planName: "Growth",
    price: "Contact Us",
    billingPeriod: "month",
    description: "Built for brands ready to scale with targeted campaigns and content.",
    features: ["Full Branding Package", "Digital Marketing", "Google & Social Ads", "Weekly Content", "SEO Direction", "Analytics Report"],
    isFeatured: true,
    ctaText: "Start Growing",
    ctaUrl: "/contact",
    orderIndex: 1,
    isVisible: true,
    updatedAt: "",
  },
  {
    id: "enterprise",
    planName: "Enterprise",
    price: "Custom",
    billingPeriod: "month",
    description: "Full-service growth partnership for high-volume brands.",
    features: ["Everything in Growth", "Dedicated Account Manager", "Custom Campaigns", "Video Production", "E-commerce Optimization", "Priority Support"],
    isFeatured: false,
    ctaText: "Talk to Us",
    ctaUrl: "/contact",
    orderIndex: 2,
    isVisible: true,
    updatedAt: "",
  },
];

export default function PricingPage() {
  const [plans, setPlans] = useState<CmsPricingPlan[]>(STATIC_PLANS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPricingPlans()
      .then((data) => { if (data.length > 0) setPlans(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        background: "radial-gradient(circle at 20% 0%, rgba(184,255,44,0.14) 0%, transparent 50%), #070709",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>·</span>
            <span style={{ color: "#fff" }}>Pricing</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.28em", textTransform: "uppercase", color: "#b8ff2c", marginBottom: 20 }}>Investment Plans</p>
          <h1 style={{ fontSize: "clamp(2.4rem,8vw,5rem)", fontWeight: 900, lineHeight: 1.02, margin: "0 0 20px" }}>
            Our <span style={{ color: "#b8ff2c" }}>Pricing</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto 32px" }}>
            Transparent, flexible plans built for businesses at every stage of growth.
          </p>
          <a
            href="#book-consultation"
            data-consultation-trigger="true"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#b8ff2c", color: "#050505", fontWeight: 900,
              fontSize: 15, padding: "14px 32px", borderRadius: 999,
              textDecoration: "none", transition: "background 0.2s",
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Pricing Grid */}
      <section style={{ padding: "72px 24px", maxWidth: 1200, margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", padding: "60px 0" }}>Loading pricing plans…</div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  background: plan.isFeatured ? "rgba(184,255,44,0.05)" : "rgba(255,255,255,0.03)",
                  border: plan.isFeatured ? "1.5px solid #b8ff2c" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 24,
                  padding: "40px 32px",
                  position: "relative",
                  boxShadow: plan.isFeatured ? "0 0 40px rgba(184,255,44,0.1)" : "none",
                }}
              >
                {plan.isFeatured && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#b8ff2c", color: "#050505",
                    fontSize: 10, fontWeight: 900, letterSpacing: "0.12em",
                    textTransform: "uppercase", padding: "5px 18px", borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}

                <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                  {plan.planName}
                </p>

                <div style={{ marginBottom: 14 }}>
                  <span style={{ fontSize: "2.6rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{plan.price}</span>
                  {plan.billingPeriod && (
                    <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", marginLeft: 4 }}>/{plan.billingPeriod}</span>
                  )}
                </div>

                {plan.description && (
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 24 }}>{plan.description}</p>
                )}

                {plan.features && plan.features.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.78)" }}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill="rgba(184,255,44,0.15)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#b8ff2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={plan.ctaUrl || "/contact"}
                  style={{
                    display: "block", width: "100%", textAlign: "center",
                    padding: "14px 24px", borderRadius: 999,
                    fontSize: 14, fontWeight: 800, textDecoration: "none",
                    background: plan.isFeatured ? "#b8ff2c" : "rgba(255,255,255,0.07)",
                    color: plan.isFeatured ? "#050505" : "#fff",
                    border: plan.isFeatured ? "none" : "1px solid rgba(255,255,255,0.15)",
                    boxSizing: "border-box",
                  }}
                >
                  {plan.ctaText || "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FAQ teaser */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 20 }}>
            Have questions about which plan is right for you?
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/faqs" style={{ padding: "12px 28px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Read FAQs
            </Link>
            <Link href="/contact" style={{ padding: "12px 28px", borderRadius: 999, background: "#b8ff2c", color: "#050505", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
