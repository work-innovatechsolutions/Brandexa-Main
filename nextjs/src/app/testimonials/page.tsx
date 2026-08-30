"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchTestimonials } from "@/lib/cms/data";
import type { CmsTestimonial } from "@/types/cms";

const STATIC_TESTIMONIALS: CmsTestimonial[] = [
  {
    id: "1",
    clientName: "James Miller",
    clientRole: "CEO",
    company: "TechVenture Co.",
    quote: "Brandexa transformed our digital presence completely. The ROI has been exceptional and the team's strategic thinking is second to none.",
    rating: 5,
    avatarUrl: "",
    isFeatured: true,
    orderIndex: 0,
    updatedAt: "",
  },
  {
    id: "2",
    clientName: "Priya Nair",
    clientRole: "Founder",
    company: "Bloom Organics",
    quote: "Our brand went from invisible to dominant in our local market within 4 months. The content strategy and Google Ads execution were outstanding.",
    rating: 5,
    avatarUrl: "",
    isFeatured: false,
    orderIndex: 1,
    updatedAt: "",
  },
  {
    id: "3",
    clientName: "David Okafor",
    clientRole: "Marketing Director",
    company: "EduPath Academy",
    quote: "The level of creativity and attention to detail is remarkable. Every asset they delivered was on-brand and performance-ready.",
    rating: 5,
    avatarUrl: "",
    isFeatured: false,
    orderIndex: 2,
    updatedAt: "",
  },
  {
    id: "4",
    clientName: "Sofia Reyes",
    clientRole: "Owner",
    company: "Casa Bella Interiors",
    quote: "From branding to social media to video production — Brandexa handled everything with professionalism and genuine care for our business.",
    rating: 5,
    avatarUrl: "",
    isFeatured: false,
    orderIndex: 3,
    updatedAt: "",
  },
  {
    id: "5",
    clientName: "Arjun Mehta",
    clientRole: "Co-Founder",
    company: "FinEdge Solutions",
    quote: "We saw a 3x increase in qualified leads within the first quarter. Their digital marketing framework is truly data-driven.",
    rating: 5,
    avatarUrl: "",
    isFeatured: false,
    orderIndex: 4,
    updatedAt: "",
  },
  {
    id: "6",
    clientName: "Linda Thompson",
    clientRole: "Head of Brand",
    company: "Luxe Living Co.",
    quote: "They understand luxury marketing like no one else. The campaigns are polished, strategic, and they consistently exceed expectations.",
    rating: 5,
    avatarUrl: "",
    isFeatured: false,
    orderIndex: 5,
    updatedAt: "",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l1.545 3.13 3.455.5-2.5 2.436.59 3.434L8 9.25 4.91 11l.59-3.434L3 5.13l3.455-.5L8 1.5z"
            fill={i <= rating ? "#b8ff2c" : "rgba(255,255,255,0.15)"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<CmsTestimonial[]>(STATIC_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials()
      .then((data) => { if (data.length > 0) setTestimonials(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const featured = testimonials.find((t) => t.isFeatured) || testimonials[0];
  const rest = testimonials.filter((t) => t.id !== featured?.id);

  return (
    <main style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        background: "radial-gradient(circle at 80% 10%, rgba(184,255,44,0.12) 0%, transparent 50%), #070709",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>·</span>
            <span style={{ color: "#fff" }}>Testimonials</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.28em", textTransform: "uppercase", color: "#b8ff2c", marginBottom: 20 }}>Client Success Stories</p>
          <h1 style={{ fontSize: "clamp(2.4rem,8vw,5rem)", fontWeight: 900, lineHeight: 1.02, margin: "0 0 20px" }}>
            Real Results, <span style={{ color: "#b8ff2c" }}>Real Clients</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 auto" }}>
            Hear directly from businesses we have helped grow, scale, and lead their categories.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "72px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", padding: "60px 0" }}>Loading testimonials…</div>
        ) : (
          <>
            {/* Featured testimonial */}
            {featured && (
              <div style={{
                background: "rgba(184,255,44,0.05)",
                border: "1.5px solid rgba(184,255,44,0.25)",
                borderRadius: 24,
                padding: "48px 40px",
                marginBottom: 32,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 24, right: 32,
                  fontSize: "5rem", lineHeight: 1, color: "rgba(184,255,44,0.12)",
                  fontFamily: "Georgia, serif", fontWeight: 900,
                }}>
                  "
                </div>
                <StarRating rating={featured.rating || 5} />
                <p style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", color: "rgba(255,255,255,0.88)", lineHeight: 1.65, fontStyle: "italic", maxWidth: 760, marginBottom: 28 }}>
                  "{featured.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "rgba(184,255,44,0.12)",
                    border: "2px solid rgba(184,255,44,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", fontWeight: 900, color: "#b8ff2c",
                    overflow: "hidden",
                  }}>
                    {featured.avatarUrl ? (
                      <img src={featured.avatarUrl} alt={featured.clientName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span>{featured.clientName?.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{featured.clientName}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                      {[featured.clientRole, featured.company].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}>
              {rest.map((t) => (
                <div
                  key={t.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "28px 24px",
                  }}
                >
                  <StarRating rating={t.rating || 5} />
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(184,255,44,0.1)",
                      border: "1.5px solid rgba(184,255,44,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem", fontWeight: 900, color: "#b8ff2c",
                      overflow: "hidden", flexShrink: 0,
                    }}>
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.clientName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <span>{t.clientName?.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>{t.clientName}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                        {[t.clientRole, t.company].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 80px", textAlign: "center" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 60,
        }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>
            Ready to become our next success story?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 28, fontSize: 15 }}>
            Book a free consultation and let us show you what is possible for your brand.
          </p>
          <a
            href="#book-consultation"
            data-consultation-trigger="true"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#b8ff2c", color: "#050505", fontWeight: 900,
              fontSize: 15, padding: "14px 36px", borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
