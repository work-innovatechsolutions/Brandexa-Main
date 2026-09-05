"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

export interface HomeServiceItem {
  id: string;
  href: string;
  slug: string;
  title: string;
  desc: string;
  icon?: string;
  orderIndex?: number;
}

const DEFAULT_SERVICES: HomeServiceItem[] = [
  {
    id: "svc-smm",
    href: "/services/social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "We manage your daily presence, community interaction, and content programming to turn your social channels into active growth channels.",
    icon: "smm",
  },
  {
    id: "svc-video",
    href: "/services/high-retention-video",
    slug: "high-retention-video",
    title: "High-Retention Video",
    desc: "Editing designed for the modern attention span. We craft Reels, TikToks, and Shorts that drive views and lead to meaningful conversions.",
    icon: "video",
  },
  {
    id: "svc-ugc",
    href: "/services/strategic-ai-content",
    slug: "strategic-ai-content",
    title: "Strategic AI Content",
    desc: "Scalable creative assets designed for ad performance. We blend human-led creative direction with modern AI tools to iterate and test creatives faster.",
    icon: "ai",
  },
  {
    id: "svc-meta",
    href: "/services/performance-meta-ads",
    slug: "performance-meta-ads",
    title: "Performance Meta Ads",
    desc: "Precision media buying focused on ROI. We manage your full-funnel ad strategy to ensure every dollar spent drives qualified leads and sales.",
    icon: "meta",
  },
  {
    id: "svc-lead",
    href: "/services/lead-generation-systems",
    slug: "lead-generation-systems",
    title: "Lead Generation Systems",
    desc: "We build entire lead-generation funnels, from landing pages and lead magnets to automated nurture sequences that your sales team can actually sell to.",
    icon: "lead",
  },
  {
    id: "svc-web",
    href: "/services/website-and-webapp-development",
    slug: "website-and-webapp-development",
    title: "Conversion-Focused Web",
    desc: "Your website shouldn't just look good—it should be a primary sales driver. We build fast, responsive, and conversion-optimized sites.",
    icon: "web",
  },
  {
    id: "svc-perf",
    href: "/services/marketing-analytics-growth",
    slug: "marketing-analytics-growth",
    title: "Marketing Analytics & Growth",
    desc: "We track the metrics that actually move the needle, giving you full visibility into your customer acquisition cost and lifetime value.",
    icon: "perf",
  },
];

function renderServiceIcon(svc: HomeServiceItem) {
  const iconStr = svc.icon || "";
  const slug = (svc.slug || "").toLowerCase();
  const title = (svc.title || "").toLowerCase();

  // 1. If it's a direct image/SVG URL
  if (
    iconStr.startsWith("/") ||
    iconStr.startsWith("http") ||
    iconStr.endsWith(".svg") ||
    iconStr.endsWith(".png") ||
    iconStr.endsWith(".webp")
  ) {
    return (
      <img
        src={iconStr}
        alt={svc.title}
        width={60}
        height={60}
        style={{
          width: 60,
          height: 60,
          objectFit: "contain",
          filter: "invert(1)",
        }}
      />
    );
  }

  // 2. Rich built-in SVGs based on icon identifier, slug, or title keyword
  if (
    iconStr === "smm" ||
    slug.includes("social-media-management") ||
    slug.includes("organic-social") ||
    title.includes("social media")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="45" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="45" r="6" stroke="currentColor" strokeWidth="1.5" />
        <line stroke="currentColor" strokeWidth="1.5" x1="16" y1="23" x2="24" y2="27" />
        <line stroke="currentColor" strokeWidth="1.5" x1="36" y1="27" x2="44" y2="23" />
        <line stroke="currentColor" strokeWidth="1.5" x1="16" y1="42" x2="24" y2="35" />
        <line stroke="currentColor" strokeWidth="1.5" x1="36" y1="35" x2="44" y2="42" />
      </svg>
    );
  }

  if (
    iconStr === "video" ||
    slug.includes("video") ||
    title.includes("video") ||
    title.includes("reels")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <rect height="38" rx="4" stroke="currentColor" strokeWidth="1.5" width="42" x="5" y="11" />
        <path d="M25 22l14 8-14 8V22z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    iconStr === "ai" ||
    slug.includes("ai") ||
    slug.includes("ugc") ||
    title.includes("ai") ||
    title.includes("ugc")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <rect height="38" rx="4" stroke="currentColor" width="1.5" x="9" y="11" />
        <circle cx="30" cy="28" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 49c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    iconStr === "meta" ||
    slug.includes("meta") ||
    slug.includes("ad") ||
    title.includes("ads") ||
    title.includes("meta")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 42V30c0-11.046 8.954-20 20-20s20 8.954 20 20v12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M10 42c0 4.418 3.582 8 8 8h4V34h-4c-4.418 0-8 3.582-8 8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 42c0 4.418-3.582 8-8 8h-4V34h4c4.418 0 8 3.582 8 8z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    iconStr === "lead" ||
    slug.includes("lead") ||
    title.includes("lead") ||
    title.includes("funnel")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 8l5 14h14l-11 8 4 14-12-9-12 9 4-14L11 22h14l5-14z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    iconStr === "web" ||
    slug.includes("web") ||
    slug.includes("app") ||
    title.includes("web") ||
    title.includes("app")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <rect height="42" rx="4" stroke="currentColor" strokeWidth="1.5" width="50" x="5" y="9" />
        <line stroke="currentColor" strokeWidth="1.5" x1="5" y1="21" x2="55" y2="21" />
        <circle cx="14" cy="15" r="2" fill="currentColor" />
        <circle cx="22" cy="15" r="2" fill="currentColor" />
        <circle cx="30" cy="15" r="2" fill="currentColor" />
        <path d="M18 33h24M18 40h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    iconStr === "perf" ||
    slug.includes("analytics") ||
    slug.includes("growth") ||
    title.includes("analytics") ||
    title.includes("growth")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 48L20 32l10 8 10-16 12-12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <circle cx="52" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (
    slug.includes("brand") ||
    title.includes("brand") ||
    slug.includes("identity")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 6L52 20V40L30 54L8 40V20L30 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M30 6V54M8 20L52 40M8 40L52 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (
    slug.includes("creative") ||
    slug.includes("production") ||
    title.includes("creative") ||
    title.includes("production")
  ) {
    return (
      <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 45L45 15M45 15H25M45 15V35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="45" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 10L24 6L26 10L30 12L26 14L24 18L22 14L18 12L22 10Z" fill="currentColor" />
      </svg>
    );
  }

  // Default sleek spark/diamond growth icon
  return (
    <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 8L36 24L52 30L36 36L30 52L24 36L8 30L24 24L30 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="30" cy="30" r="4" fill="currentColor" />
    </svg>
  );
}

export function DynamicHomeServicesSection() {
  const [services, setServices] = useState<HomeServiceItem[]>(DEFAULT_SERVICES);

  useEffect(() => {
    // 1. Initial fast fetch from API (handles server-side permissions & no-store)
    fetch("/api/services", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Array<{ id: string; title: string; slug: string; shortDescription?: string; icon?: string; orderIndex?: number }> | null) => {
        if (data && data.length > 0) {
          const mapped: HomeServiceItem[] = data.map((item) => ({
            id: item.id,
            href: `/services/${item.slug}`,
            slug: item.slug,
            title: item.title,
            desc: item.shortDescription || "Specialized digital growth solutions engineered to scale your brand and revenue.",
            icon: item.icon,
            orderIndex: item.orderIndex ?? 0,
          }));
          setServices(mapped);
        }
      })
      .catch((err) => {
        console.warn("API services fetch note:", err);
      });

    // 2. Real-time Firestore listener so adding/editing/publishing services in admin reflects immediately
    try {
      const unsub = onSnapshot(
        collection(db, "services"),
        (snapshot) => {
          if (!snapshot.empty) {
            const list: Array<{ id: string; title: string; slug: string; shortDescription?: string; description?: string; icon?: string; isPublished?: boolean; orderIndex?: number }> = [];
            snapshot.forEach((docSnap) => {
              const d = docSnap.data();
              list.push({
                id: docSnap.id,
                title: d.title || "",
                slug: d.slug || "",
                shortDescription: d.shortDescription || d.description || "",
                icon: d.icon || "",
                isPublished: d.isPublished !== false,
                orderIndex: d.orderIndex ?? 999,
              });
            });

            const published = list
              .filter((s) => s.isPublished === true)
              .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));

            if (published.length > 0) {
              const mapped: HomeServiceItem[] = published.map((item) => ({
                id: item.id,
                href: `/services/${item.slug}`,
                slug: item.slug,
                title: item.title,
                desc: item.shortDescription || "Specialized digital growth solutions engineered to scale your brand and revenue.",
                icon: item.icon,
                orderIndex: item.orderIndex ?? 0,
              }));
              setServices(mapped);
            }
          }
        },
        (err) => {
          console.warn("Real-time services listener note:", err);
        }
      );

      return () => unsub();
    } catch {
      // Fallback silently if client firestore isn't initialized yet
    }
  }, []);

  return (
    <>
      {services.map((svc, idx) => (
        <div
          className="elementor-element elementor-element-3ee705f e-con-full service-item backdrop-filter e-flex e-con e-child"
          data-e-type="container"
          data-element_type="container"
          data-id={svc.id}
          data-settings={`{"background_background":"classic","animation":"fadeInUp","animation_delay":${idx * 100}}`}
          key={svc.id || svc.slug}
        >
          <div
            className="elementor-element elementor-element-1e99c43 service-top-row e-con-full e-flex e-con e-child"
            data-e-type="container"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-ef6a159 service-item-icon elementor-view-default elementor-widget elementor-widget-icon"
              data-e-type="widget"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="icon.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">{renderServiceIcon(svc)}</div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4308116 service-item-btn elementor-view-default elementor-widget elementor-widget-icon"
              data-e-type="widget"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="icon.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <Link className="elementor-icon" href={svc.href}>
                    <svg
                      fill="currentColor"
                      height="35"
                      viewBox="0 0 35 35"
                      width="35"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-a1e75a1 service-bottom-row e-con-full e-flex e-con e-child"
            data-e-type="container"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-1235a9e ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
              data-e-type="widget"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="elementskit-icon-box.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <Link className="ekit_global_links" href={svc.href}>
                    <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                      <div className="box-body">
                        <h3 className="elementskit-info-box-title">{svc.title}</h3>
                        <p>{svc.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
