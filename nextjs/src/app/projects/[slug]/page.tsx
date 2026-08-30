"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import type { CmsProject } from "@/types/cms";
import { OUR_WORK_CMS_PROJECTS } from "@/lib/cms/case-studies-data";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Star } from "lucide-react";

export default function DynamicProjectSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [project, setProject] = useState<CmsProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      if (!slug) return;
      try {
        // 1. Try document by ID
        const docSnap = await getDoc(doc(db, "projects", slug));
        if (docSnap.exists()) {
          setProject({ ...docSnap.data(), id: docSnap.id } as CmsProject);
          setLoading(false);
          return;
        }

        // 2. Try query by slug field
        const q = query(collection(db, "projects"), where("slug", "==", slug));
        const qSnap = await getDocs(q);
        if (!qSnap.empty) {
          const first = qSnap.docs[0];
          setProject({ ...first.data(), id: first.id } as CmsProject);
          setLoading(false);
          return;
        }

        // 3. Fallback to default catalog
        const found = OUR_WORK_CMS_PROJECTS.find(
          (p) => p.slug === slug || p.id === slug
        );
        if (found) {
          setProject(found);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Could not load project by slug:", err);
        const found = OUR_WORK_CMS_PROJECTS.find(
          (p) => p.slug === slug || p.id === slug
        );
        if (found) setProject(found);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#050505", color: "rgba(255,255,255,0.4)" }}>
        Loading project details…
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#050505", color: "#fff", padding: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}>Project Not Found</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>The requested case study could not be located.</p>
        <Link href="/our-work" style={{ color: "#b8ff2c", textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <main style={{ backgroundColor: "#050505", color: "#fff", minHeight: "100vh", paddingTop: "120px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumbs */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/our-work" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Projects</Link>
          <span>/</span>
          <span style={{ color: "#b8ff2c", fontWeight: 600 }}>{project.title}</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {project.categories?.map((cat, i) => (
              <span key={i} style={{ background: "rgba(184,255,44,0.1)", border: "1px solid rgba(184,255,44,0.3)", color: "#b8ff2c", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>
                {cat}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#fff", maxWidth: "900px" }}>
            {project.title}
          </h1>
          {project.clientName && (
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>
              Client: <strong style={{ color: "#fff" }}>{project.clientName}</strong>
            </p>
          )}
        </div>

        {/* Main Hero Image */}
        {project.heroImage && (
          <div style={{ width: "100%", maxHeight: "650px", overflow: "hidden", borderRadius: "24px", marginBottom: "64px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <img
              src={project.heroImage}
              alt={project.title}
              style={{ width: "100%", height: "100%", maxHeight: "650px", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Content & Metrics Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start" }}>
          {/* Main Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {project.challenge && (
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "36px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#b8ff2c", marginBottom: "16px" }}>The Challenge</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.8)" }}>{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "36px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#b8ff2c", marginBottom: "16px" }}>Our Solution</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.8)" }}>{project.solution}</p>
              </div>
            )}

            {project.testimonial && project.testimonial.quote && (
              <div style={{ background: "rgba(184,255,44,0.03)", border: "1px solid rgba(184,255,44,0.2)", borderRadius: "20px", padding: "36px" }}>
                <div style={{ display: "flex", gap: "4px", color: "#b8ff2c", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote style={{ fontSize: "18px", fontStyle: "italic", lineHeight: 1.6, color: "#fff", marginBottom: "20px" }}>
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <strong style={{ display: "block", fontSize: "15px", color: "#fff" }}>{project.testimonial.clientName}</strong>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{project.testimonial.clientRole}</span>
                </div>
              </div>
            )}
          </div>

          {/* Metrics & Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {project.metrics && project.metrics.length > 0 && (
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <TrendingUp className="w-5 h-5 text-[#b8ff2c]" /> Key Results
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {project.metrics.map((m, i) => (
                    <div key={i} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "20px" }}>
                      <div style={{ fontSize: "28px", fontWeight: 900, color: "#b8ff2c", lineHeight: 1 }}>{m.value}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "8px", fontWeight: 600 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div style={{ background: "linear-gradient(135deg, rgba(184,255,44,0.1) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(184,255,44,0.25)", borderRadius: "20px", padding: "36px", textAlign: "center" }}>
              <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>Want Similar Results?</h4>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
                Let&apos;s build an end-to-end performance engine for your brand.
              </p>
              <Link href="/#book-consultation" style={{ display: "inline-block", background: "#b8ff2c", color: "#000", fontWeight: 800, padding: "14px 28px", borderRadius: "12px", textDecoration: "none", fontSize: "14px", width: "100%" }}>
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
