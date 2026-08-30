"use client";

import React, { useEffect, useState } from "react";
import { fetchPricingPlans, fetchPublishedProjects, fetchPublishedBlogs } from "@/lib/cms/data";
import type { CmsPricingPlan, CmsProject, CmsBlog } from "@/types/cms";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import Link from "next/link";

export function DynamicPricingSection() {
  const [plans, setPlans] = useState<CmsPricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPricingPlans()
      .then(setPlans)
      .catch(() => setPlans([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section style={{ padding: "80px 24px", textAlign: "center", color: "rgba(255,255,255,0.4)", background: "#050505" }}>
        Loading pricing plans…
      </section>
    );
  }

  if (plans.length === 0) return null;

  return (
    <section className="dynamic-pricing-section">
      <div className="dynamic-pricing-inner">
        <div className="dynamic-pricing-header">
          <p className="dynamic-pricing-kicker">Investment Plans</p>
          <h2 className="dynamic-pricing-title">
            Our <span>Pricing</span> Plans
          </h2>
          <p className="dynamic-pricing-subtitle">
            Transparent, flexible plans built for businesses at every stage of growth.
          </p>
        </div>
        <div className="dynamic-pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`dynamic-pricing-card${plan.isFeatured ? " featured" : ""}`}
            >
              {plan.isFeatured && (
                <div className="dynamic-pricing-badge">Most Popular</div>
              )}
              <div className="dynamic-pricing-plan-name">{plan.planName}</div>
              <div className="dynamic-pricing-price">
                <span className="price-value">{plan.price}</span>
                {plan.billingPeriod && (
                  <span className="price-period">/{plan.billingPeriod}</span>
                )}
              </div>
              {plan.description && (
                <p className="dynamic-pricing-desc">{plan.description}</p>
              )}
              {plan.features && plan.features.length > 0 && (
                <ul className="dynamic-pricing-features">
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
                className={`dynamic-pricing-cta${plan.isFeatured ? " featured" : ""}`}
              >
                {plan.ctaText || "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dynamic-pricing-section {
          background: #050505;
          padding: 80px 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .dynamic-pricing-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .dynamic-pricing-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .dynamic-pricing-kicker {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b8ff2c;
          margin-bottom: 16px;
        }
        .dynamic-pricing-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 16px;
        }
        .dynamic-pricing-title span { color: #b8ff2c; }
        .dynamic-pricing-subtitle {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.6);
          max-width: 560px;
          margin: 0 auto;
        }
        .dynamic-pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          align-items: start;
        }
        .dynamic-pricing-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 36px 28px;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .dynamic-pricing-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.2);
        }
        .dynamic-pricing-card.featured {
          border-color: #b8ff2c;
          background: rgba(184,255,44,0.04);
          box-shadow: 0 0 40px rgba(184,255,44,0.08);
        }
        .dynamic-pricing-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #b8ff2c;
          color: #050505;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .dynamic-pricing-plan-name {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 12px;
        }
        .dynamic-pricing-price {
          font-size: 2.8rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1;
        }
        .price-period {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
        }
        .dynamic-pricing-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.58);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .dynamic-pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .dynamic-pricing-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.78);
        }
        .dynamic-pricing-features li svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        .dynamic-pricing-cta {
          display: block;
          width: 100%;
          text-align: center;
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.15);
          text-decoration: none;
        }
        .dynamic-pricing-cta:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.3);
        }
        .dynamic-pricing-cta.featured {
          background: #b8ff2c;
          color: #050505;
          border-color: #b8ff2c;
        }
        .dynamic-pricing-cta.featured:hover {
          background: #caff5c;
        }
      `}</style>
    </section>
  );
}

export function DynamicTeamSection() {
  const [members, setMembers] = useState<import("@/types/cms").CmsTeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("@/lib/cms/data")
      .then(({ fetchTeamMembers }) => fetchTeamMembers())
      .then(setMembers)
      .catch(() => setMembers([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || members.length === 0) return null;

  return (
    <section className="dynamic-team-section">
      <div className="dynamic-team-inner">
        <div className="dynamic-team-header">
          <p className="dynamic-team-kicker">Our People</p>
          <h2 className="dynamic-team-title">Meet The <span>Team</span></h2>
        </div>
        <div className="dynamic-team-grid">
          {members.map((m) => (
            <div key={m.id} className="dynamic-team-card">
              <div className="dynamic-team-avatar">
                {m.avatarUrl ? (
                  <img src={m.avatarUrl} alt={m.name} />
                ) : (
                  <span>{m.name?.charAt(0) || "T"}</span>
                )}
              </div>
              <div className="dynamic-team-name">{m.name}</div>
              <div className="dynamic-team-role">{m.role}</div>
              {m.bio && <p className="dynamic-team-bio">{m.bio}</p>}
              {m.socialLinks?.linkedin && (
                <a href={m.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="dynamic-team-linkedin">
                  LinkedIn ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dynamic-team-section {
          background: #050505;
          padding: 80px 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .dynamic-team-inner { max-width: 1280px; margin: 0 auto; }
        .dynamic-team-header { text-align: center; margin-bottom: 56px; }
        .dynamic-team-kicker {
          font-size: 11px; font-weight: 900;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #b8ff2c; margin-bottom: 16px;
        }
        .dynamic-team-title {
          font-size: clamp(2.2rem,6vw,4rem); font-weight: 900;
          color: #fff; line-height: 1.05;
        }
        .dynamic-team-title span { color: #b8ff2c; }
        .dynamic-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 24px;
        }
        .dynamic-team-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .dynamic-team-card:hover {
          border-color: rgba(184,255,44,0.3);
          transform: translateY(-4px);
        }
        .dynamic-team-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 16px;
          background: rgba(184,255,44,0.12);
          border: 2px solid rgba(184,255,44,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-weight: 900; color: #b8ff2c;
        }
        .dynamic-team-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .dynamic-team-name { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .dynamic-team-role { font-size: 12px; font-weight: 700; color: #b8ff2c; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
        .dynamic-team-bio { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 12px; }
        .dynamic-team-linkedin { font-size: 12px; font-weight: 700; color: #b8ff2c; text-decoration: none; }
        .dynamic-team-linkedin:hover { color: #fff; }
      `}</style>
    </section>
  );
}

export function DynamicTestimonialsSection() {
  const [items, setItems] = useState<import("@/types/cms").CmsTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("@/lib/cms/data")
      .then(({ fetchTestimonials }) => fetchTestimonials())
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || items.length === 0) return null;

  return (
    <section className="dynamic-testimonials-section">
      <div className="dynamic-testimonials-inner">
        <div className="dynamic-testimonials-header">
          <p className="dynamic-testimonials-kicker">Client Reviews</p>
          <h2 className="dynamic-testimonials-title">What Our <span>Clients Say</span></h2>
        </div>
        <div className="dynamic-testimonials-grid">
          {items.map((t) => (
            <div key={t.id} className="dynamic-testimonial-card">
              <div className="dynamic-testimonial-stars">
                {"★".repeat(Math.min(5, Math.max(1, t.rating || 5)))}
              </div>
              <p className="dynamic-testimonial-quote">"{t.quote}"</p>
              <div className="dynamic-testimonial-author">
                <div className="dynamic-testimonial-avatar">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.clientName} />
                  ) : (
                    <span>{t.clientName?.charAt(0) || "C"}</span>
                  )}
                </div>
                <div>
                  <div className="dynamic-testimonial-name">{t.clientName}</div>
                  <div className="dynamic-testimonial-meta">
                    {[t.clientRole, t.company].filter(Boolean).join(" · ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dynamic-testimonials-section {
          background: #050505;
          padding: 80px 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .dynamic-testimonials-inner { max-width: 1280px; margin: 0 auto; }
        .dynamic-testimonials-header { text-align: center; margin-bottom: 56px; }
        .dynamic-testimonials-kicker {
          font-size: 11px; font-weight: 900;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #b8ff2c; margin-bottom: 16px;
        }
        .dynamic-testimonials-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 900; color: #fff; line-height: 1.05;
        }
        .dynamic-testimonials-title span { color: #b8ff2c; }
        .dynamic-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .dynamic-testimonial-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 24px;
          transition: border-color 0.2s ease;
        }
        .dynamic-testimonial-card:hover { border-color: rgba(184,255,44,0.3); }
        .dynamic-testimonial-stars {
          font-size: 16px; color: #b8ff2c; margin-bottom: 16px; letter-spacing: 2px;
        }
        .dynamic-testimonial-quote {
          font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.7;
          margin-bottom: 20px; font-style: italic;
        }
        .dynamic-testimonial-author {
          display: flex; align-items: center; gap: 12px;
        }
        .dynamic-testimonial-avatar {
          width: 44px; height: 44px;
          border-radius: 50%; overflow: hidden;
          background: rgba(184,255,44,0.12);
          border: 1.5px solid rgba(184,255,44,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; font-weight: 900; color: #b8ff2c;
          flex-shrink: 0;
        }
        .dynamic-testimonial-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .dynamic-testimonial-name { font-size: 14px; font-weight: 800; color: #fff; }
        .dynamic-testimonial-meta { font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 2px; }
      `}</style>
    </section>
  );
}

// ─── DYNAMIC HOMEPAGE PORTFOLIO SECTION ─────────────────────────────────────
const DEFAULT_PROJECTS: CmsProject[] = [
  {
    id: "dynamic-e-commerce-platform",
    title: "Dynamic E-Commerce Platform",
    clientName: "Aura Apparel",
    slug: "dynamic-e-commerce-platform",
    categories: ["Branding & Identity", "Web Design"],
    heroImage: "/wp-content/uploads/2024/11/project-1-2.webp",
    galleryImages: [],
    challenge: "Low conversion rates and disjointed brand touchpoints across devices.",
    solution: "Full-funnel redesign and custom headless e-commerce build.",
    metrics: [{ id: "m1", label: "Conversion Rate Increase", value: "+184%" }, { id: "m2", label: "Page Load Speed", value: "0.4s" }],
    isFeatured: true,
    orderIndex: 0,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "innovative-identity-design",
    title: "Innovative Identity Design",
    clientName: "Nova Robotics",
    slug: "innovative-identity-design",
    categories: ["Digital Marketing", "Web Design"],
    heroImage: "/wp-content/uploads/2024/11/project-2-3.webp",
    galleryImages: [],
    challenge: "Outdated visual positioning hindering enterprise B2B sales cycles.",
    solution: "Complete design overhaul, design tokens, and modular marketing assets.",
    metrics: [{ id: "m1", label: "Enterprise Pipeline", value: "+240%" }, { id: "m2", label: "Brand Recall", value: "94%" }],
    isFeatured: true,
    orderIndex: 1,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "dynamic-digital-campaign",
    title: "Dynamic Digital Campaign",
    clientName: "Kinetix Health",
    slug: "dynamic-digital-campaign",
    categories: ["Branding & Identity", "SEO & Analytics"],
    heroImage: "/wp-content/uploads/2024/11/project-3-2.webp",
    galleryImages: [],
    challenge: "High cost-per-acquisition across paid social and search.",
    solution: "Dynamic creative testing framework and automated audience retargeting.",
    metrics: [{ id: "m1", label: "ROAS Increase", value: "3.8x" }, { id: "m2", label: "CPA Reduction", value: "-45%" }],
    isFeatured: true,
    orderIndex: 2,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "impactful-content-creation",
    title: "Impactful Content Creation",
    clientName: "Zenith Sound",
    slug: "impactful-content-creation",
    categories: ["Branding & Identity", "SEO & Analytics", "Web Design"],
    heroImage: "/wp-content/uploads/2024/11/project-4-2.webp",
    galleryImages: [],
    challenge: "Stagnant engagement and lack of high-converting visual assets.",
    solution: "Performance-focused short-form video production and lifestyle photography.",
    metrics: [{ id: "m1", label: "Impressions", value: "4.2M" }, { id: "m2", label: "Click-through Rate", value: "+82%" }],
    isFeatured: true,
    orderIndex: 3,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "visionary-growth-strategy",
    title: "Visionary Growth Strategy",
    clientName: "Lumina Financial",
    slug: "visionary-growth-strategy",
    categories: ["Web Design"],
    heroImage: "/wp-content/uploads/2024/11/project-5-2.webp",
    galleryImages: [],
    challenge: "Complex product offering causing friction in prospect qualification.",
    solution: "Interactive calculator and simplified value-proposition architecture.",
    metrics: [{ id: "m1", label: "Qualified Inquiries", value: "+310%" }, { id: "m2", label: "Customer Acquisition Cost", value: "-35%" }],
    isFeatured: true,
    orderIndex: 4,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "interactive-website-redesign",
    title: "Interactive Website Redesign",
    clientName: "Apex Logistics",
    slug: "interactive-website-redesign",
    categories: ["Branding & Identity", "SEO & Analytics"],
    heroImage: "/wp-content/uploads/2024/11/project-6-2.webp",
    galleryImages: [],
    challenge: "Legacy portal with poor mobile experience and high bounce rate.",
    solution: "Modern Next.js web platform with fluid micro-interactions.",
    metrics: [{ id: "m1", label: "Mobile Conversions", value: "+195%" }, { id: "m2", label: "Bounce Rate", value: "-52%" }],
    isFeatured: true,
    orderIndex: 5,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function DynamicHomePortfolioSection() {
  const [projects, setProjects] = useState<CmsProject[]>(DEFAULT_PROJECTS);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // 1. Initial async fetch
    fetchPublishedProjects(30)
      .then((data) => {
        if (data && data.length > 0) setProjects(data);
      })
      .catch((err) => console.warn("Initial projects fetch warning:", err));

    // 2. Real-time Firestore live listener
    try {
      const unsub = onSnapshot(
        collection(db, "projects"),
        (snapshot) => {
          if (!snapshot.empty) {
            const list: CmsProject[] = [];
            snapshot.forEach((doc) => {
              const d = doc.data() as CmsProject;
              list.push({ ...d, id: doc.id });
            });
            const published = list
              .filter((p) => !p.status || p.status === "published")
              .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
            if (published.length > 0) {
              setProjects(published);
            }
          }
        },
        (err) => console.warn("Real-time projects listener note:", err)
      );
      return () => unsub();
    } catch {
      // Fallback
    }
  }, []);

  // Compute unique categories
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (Array.isArray(p.categories)) {
        p.categories.forEach((c) => c && set.add(c.trim()));
      }
    });
    return ["All Projects", ...Array.from(set)];
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter((p) =>
      Array.isArray(p.categories) &&
      p.categories.some((c) => c.toLowerCase() === activeFilter.toLowerCase())
    );
  }, [projects, activeFilter]);

  // Reset to 6 when category filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const displayedProjects = React.useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  return (
    <div className="elementor-widget-container">
      <div className="awaiken-portfolio-widget" id="awaiken-portfolio-737ae8b">
        <ul className="awaiken-portfolio-grid__filters portfolio_filter-design-1">
          <li
            className={`awaiken-portfolio-grid__filter ${activeFilter === "All Projects" ? "active" : ""}`}
            onClick={() => setActiveFilter("All Projects")}
          >
            All Projects
          </li>
          {categories.filter((c) => c !== "All Projects").map((cat) => (
            <li
              key={cat}
              className={`awaiken-portfolio-grid__filter-label ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="awaiken-portfolio-grid elementor-grid awaiken-portfolio-layout-masonry awaiken-portfolio-item-design-2">
          {displayedProjects.map((p) => {
            const projectSlug = p.slug || p.id;
            const projectUrl = `/projects/${projectSlug}`;
            const heroImg = p.heroImage || "/wp-content/uploads/2024/11/project-1-2.webp";
            const primaryCategory = p.categories?.[0] || "Creative";

            return (
              <article
                key={p.id}
                className="awaiken-portfolio-grid-item post-8604 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry"
              >
                <div className="awaiken-portfolio-grid-item__wrapper">
                  <div className="awaiken-portfolio-grid-item__image">
                    <div className="awaiken-portfolio-grid-item__img">
                      <img
                        alt={p.title}
                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                        decoding="async"
                        height="800"
                        loading="lazy"
                        src={heroImg}
                        width="1200"
                      />
                    </div>

                    <div className="awaiken-portfolio-grid-item__categories">
                      <Link href={projectUrl}>
                        <span className="awaiken-portfolio-grid-item__categories__category">{primaryCategory}</span>
                      </Link>
                    </div>

                    <div className="awaiken-portfolio-grid-item__readmore">
                      <Link className="awaiken-portfolio-grid-item__link" href={projectUrl}>
                        <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="awaiken-portfolio-grid-item__content">
                    <div className="awaiken-portfolio-grid-title__wrap">
                      <Link className="awaiken-portfolio-grid-item__link" href={projectUrl}>
                        <h3 className="awaiken-portfolio-grid-item__title">{p.title}</h3>
                      </Link>
                    </div>
                    <div className="awaiken-portfolio-grid-item__excerpt">
                      <p>{p.challenge || p.solution || p.title}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}



// ─── DYNAMIC HOMEPAGE BLOGS SECTION ─────────────────────────────────────────
const DEFAULT_BLOGS: CmsBlog[] = [
  {
    id: "b1",
    title: "Web Development Strategies for Modern Business Growth",
    slug: "web-development-essentials",
    category: "Web Development",
    tags: ["Development", "Tech"],
    author: { name: "Sarah Jenkins", role: "Head of Tech", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" },
    featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp",
    excerpt: "Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive.",
    content: "",
    readTime: "5 min read",
    isFeatured: true,
    status: "published",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "b2",
    title: "UI/UX Design Principles for Better User Engagement",
    slug: "ui-ux-design-principles",
    category: "UI/UX Design",
    tags: ["Design", "UI/UX"],
    author: { name: "Michael Chang", role: "Creative Director", avatarUrl: "/wp-content/uploads/2024/11/author-2-1-2.webp" },
    featuredImage: "/wp-content/uploads/2024/11/post-1-3.webp",
    excerpt: "Learn how human-centric design patterns and micro-interactions turn casual visitors into loyal customers.",
    content: "",
    readTime: "4 min read",
    isFeatured: true,
    status: "published",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "b3",
    title: "Why Your Business Needs a Mobile-Optimized Website",
    slug: "mobile-optimized-website-needs",
    category: "Mobile Strategy",
    tags: ["Mobile", "SEO"],
    author: { name: "Elena Rostova", role: "Growth Strategist", avatarUrl: "/wp-content/uploads/2024/11/author-3-2.webp" },
    featuredImage: "/wp-content/uploads/2024/11/post-2-3.webp",
    excerpt: "Over 60% of all online interactions happen on mobile devices. Discover why responsive architecture is vital.",
    content: "",
    readTime: "6 min read",
    isFeatured: true,
    status: "published",
    updatedAt: new Date().toISOString(),
  },
];

export function DynamicHomeBlogsSection() {
  const [blogs, setBlogs] = useState<CmsBlog[]>(DEFAULT_BLOGS);

  useEffect(() => {
    // 1. Initial async fetch
    fetchPublishedBlogs(3)
      .then((data) => {
        if (data && data.length > 0) setBlogs(data.slice(0, 3));
      })
      .catch((err) => console.warn("Initial blogs fetch warning:", err));

    // 2. Real-time Firestore live listener
    try {
      const unsub = onSnapshot(
        collection(db, "blogs"),
        (snapshot) => {
          if (!snapshot.empty) {
            const list: CmsBlog[] = [];
            snapshot.forEach((doc) => {
              const d = doc.data() as CmsBlog;
              list.push({ ...d, id: doc.id });
            });
            const published = list
              .filter((b) => !b.status || b.status === "published")
              .slice(0, 3);
            if (published.length > 0) {
              setBlogs(published);
            }
          }
        },
        (err) => console.warn("Real-time blogs listener note:", err)
      );
      return () => unsub();
    } catch {
      // Fallback
    }
  }, []);

  return (
    <div className="elementor-widget-container">
      <div className="ekit-wid-con">
        <div className="row post-items ekit-blog-posts-content wihout-masonry" id="post-items--10438dc">
          {blogs.map((b) => {
            const blogUrl = `/blog/${b.slug || b.id}`;
            const blogImg = b.featuredImage || "/wp-content/uploads/2024/11/post-3-2.webp";

            return (
              <div key={b.id} className="col-lg-4 col-md-6">
                <div className="elementskit-post-image-card">
                  <div className="elementskit-entry-header">
                    <Link className="elementskit-entry-thumb" href={blogUrl}>
                      <img alt={b.title} decoding="async" src={blogImg} />
                    </Link>
                  </div>

                  <div className="elementskit-post-body">
                    <h2 className="entry-title">
                      <Link href={blogUrl}>{b.title}</Link>
                    </h2>
                    <div className="btn-wraper">
                      <Link className="elementskit-btn whitespace--normal" href={blogUrl}>
                        Read More
                        <svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
