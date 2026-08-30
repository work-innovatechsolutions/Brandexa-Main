"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchTeamMembers } from "@/lib/cms/data";
import type { CmsTeamMember } from "@/types/cms";

const STATIC_TEAM: CmsTeamMember[] = [
  { id: "1", name: "Alex Johnson", role: "Founder & CEO", bio: "Strategic growth architect with 10+ years building brands.", avatarUrl: "/wp-content/uploads/2024/11/team-1-2.webp", socialLinks: {}, orderIndex: 0, isVisible: true, updatedAt: "" },
  { id: "2", name: "Sarah Chen", role: "Creative Director", bio: "Award-winning designer specializing in brand identity systems.", avatarUrl: "/wp-content/uploads/2024/11/team-2-2.webp", socialLinks: {}, orderIndex: 1, isVisible: true, updatedAt: "" },
  { id: "3", name: "Marcus Reid", role: "Head of Digital Marketing", bio: "Performance marketer focused on measurable ROI.", avatarUrl: "/wp-content/uploads/2024/11/team-3-2.webp", socialLinks: {}, orderIndex: 2, isVisible: true, updatedAt: "" },
  { id: "4", name: "Priya Sharma", role: "Content Strategist", bio: "Storyteller building content systems that convert.", avatarUrl: "/wp-content/uploads/2024/11/team-4-2.webp", socialLinks: {}, orderIndex: 3, isVisible: true, updatedAt: "" },
];

export default function TeamPage() {
  const [members, setMembers] = useState<CmsTeamMember[]>(STATIC_TEAM);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers()
      .then((data) => { if (data.length > 0) setMembers(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        background: "radial-gradient(circle at 60% 0%, rgba(184,255,44,0.13) 0%, transparent 50%), #070709",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>·</span>
            <span style={{ color: "#fff" }}>Team</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.28em", textTransform: "uppercase", color: "#b8ff2c", marginBottom: 20 }}>Our People</p>
          <h1 style={{ fontSize: "clamp(2.4rem,8vw,5rem)", fontWeight: 900, lineHeight: 1.02, margin: "0 0 20px" }}>
            Meet Our <span style={{ color: "#b8ff2c" }}>Team</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 auto" }}>
            A team of strategists, creatives, and digital experts committed to your brand's growth.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: "72px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", padding: "60px 0" }}>Loading team…</div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 28,
          }}>
            {members.map((m) => (
              <div
                key={m.id}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 22,
                  padding: "28px 22px",
                  textAlign: "center",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <div style={{
                  width: 90, height: 90, borderRadius: "50%",
                  overflow: "hidden", margin: "0 auto 16px",
                  background: "rgba(184,255,44,0.1)",
                  border: "2px solid rgba(184,255,44,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", fontWeight: 900, color: "#b8ff2c",
                }}>
                  {m.avatarUrl ? (
                    <img src={m.avatarUrl} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span>{m.name?.charAt(0) || "T"}</span>
                  )}
                </div>

                <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>{m.name}</h2>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8ff2c", margin: "0 0 12px" }}>{m.role}</p>

                {m.bio && (
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: "0 0 16px" }}>{m.bio}</p>
                )}

                {m.socialLinks?.linkedin && (
                  <a
                    href={m.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, fontWeight: 700, color: "#b8ff2c", textDecoration: "none" }}
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 80px", textAlign: "center" }}>
        <div style={{
          maxWidth: 760, margin: "0 auto",
          background: "rgba(184,255,44,0.05)",
          border: "1px solid rgba(184,255,44,0.2)",
          borderRadius: 24, padding: "48px 32px",
        }}>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>
            Want to work with us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 28, fontSize: 15 }}>
            We are always looking for ambitious brands to partner with.
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
