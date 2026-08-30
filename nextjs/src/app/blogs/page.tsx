"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import "./blogs.css";
import { fetchPublishedBlogs } from "@/lib/cms/data";
import type { CmsBlog } from "@/types/cms";

// Static fallback data shown while Firestore loads
const STATIC_FALLBACK: CmsBlog[] = [
  {
    id: "web-development-essentials",
    slug: "web-development-essentials",
    title: "Web Development Essentials: What Every Business Needs",
    category: "Web Development",
    readTime: "5 min read",
    featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp",
    excerpt:
      "Explore core web development strategies that turn high-traffic websites into high-converting revenue channels and scalable digital assets.",
    isFeatured: true,
    status: "published",
    publishedAt: "2024-11-07T00:00:00Z",
    updatedAt: "2024-11-07T00:00:00Z",
    tags: [],
    content: "",
    author: { name: "Brandexa Team", role: "Agency", avatarUrl: "" },
  },
];

const ALL_LABEL = "All Articles";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<CmsBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(ALL_LABEL);

  useEffect(() => {
    fetchPublishedBlogs()
      .then((data) => {
        setBlogs(data.length > 0 ? data : STATIC_FALLBACK);
      })
      .catch(() => setBlogs(STATIC_FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((b) => { if (b.category) cats.add(b.category); });
    return [ALL_LABEL, ...Array.from(cats)];
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === ALL_LABEL) return blogs;
    return blogs.filter((b) => b.category === selectedCategory);
  }, [blogs, selectedCategory]);

  const formatDate = (iso?: string) => {
    if (!iso) return "";
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
      });
    } catch { return ""; }
  };

  return (
    <main className="brandexa-blogs-page">
      {/* Hero Section */}
      <section className="brandexa-blogs-hero" aria-label="Blogs Header">
        <div className="brandexa-blogs-container">
          <div className="brandexa-blogs-hero-kicker">Our Insights &amp; Articles</div>
          <h1>
            Actionable Insights For <span>High-Growth Brands</span>
          </h1>
          <p className="brandexa-blogs-hero-desc">
            Explore in-depth articles, practical frameworks, and strategic breakdowns on design, digital performance, media production, and conversion rate optimization.
          </p>
          <nav aria-label="Breadcrumb" className="brandexa-blogs-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">•</span>
            <span className="current">Blogs</span>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="brandexa-blogs-filter-section" aria-label="Filter Articles">
        <div className="brandexa-blogs-container">
          <div className="brandexa-blogs-filter-wrap">
            {categories.map((cat) => {
              const count =
                cat === ALL_LABEL
                  ? blogs.length
                  : blogs.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`brandexa-filter-btn${selectedCategory === cat ? " active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                >
                  <span>{cat}</span>
                  <span className="brandexa-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid Section */}
      <section className="brandexa-blogs-grid-section" aria-label="Articles Listing">
        <div className="brandexa-blogs-container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
              Loading articles…
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
              No articles found in this category.
            </div>
          ) : (
            <div className="brandexa-blogs-grid">
              {filteredPosts.map((post) => {
                const href = post.slug.startsWith("/") ? post.slug : `/blog/${post.slug}`;
                return (
                  <article key={post.id}>
                    <Link className="brandexa-blog-card" href={href}>
                      <div className="brandexa-blog-card-thumb-wrap">
                        <img
                          src={post.featuredImage || "/wp-content/uploads/2024/11/post-3-2.webp"}
                          alt={post.title}
                          className="brandexa-blog-card-img"
                          loading="lazy"
                        />
                        <span className="brandexa-blog-category-badge">{post.category}</span>
                      </div>
                      <div className="brandexa-blog-card-body">
                        <div className="brandexa-blog-card-meta">
                          <span>{formatDate(post.publishedAt ?? post.updatedAt)}</span>
                          <span className="dot" />
                          <span>{post.readTime || "5 min read"}</span>
                        </div>
                        <h2 className="brandexa-blog-card-title">{post.title}</h2>
                        <p className="brandexa-blog-card-excerpt">{post.excerpt}</p>
                        <div className="brandexa-blog-card-footer">
                          <span className="brandexa-blog-read-label">Read Article</span>
                          <span aria-hidden="true" className="brandexa-blog-arrow-circle">
                            <svg viewBox="0 0 25 25">
                              <path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Consultation Banner CTA */}
      <section className="brandexa-blogs-cta-section" aria-label="Call to Action">
        <div className="brandexa-blogs-container">
          <div className="brandexa-blogs-cta-box">
            <div className="brandexa-blogs-cta-content">
              <h2>
                Ready to Turn Attention into <span>Measurable Revenue?</span>
              </h2>
              <p>
                Partner with Brandexa to engineer your end-to-end growth system—from high-converting websites to high-performing campaigns.
              </p>
            </div>
            <a
              className="brandexa-blogs-cta-btn"
              data-consultation-trigger="true"
              href="#book-consultation"
            >
              <span>Book a Free Consultation</span>
              <svg viewBox="0 0 25 25">
                <path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
