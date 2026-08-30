/**
 * CMS Data Fetchers — shared helpers for public pages to read from Firestore.
 * Collection names match exactly what the admin panel writes to.
 */
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import type {
  CmsBlog,
  CmsFaq,
  CmsPricingPlan,
  CmsTeamMember,
  CmsTestimonial,
  CmsService,
  CmsProject,
} from "@/types/cms";

// ─── BLOGS ───────────────────────────────────────────────────────────────────
export async function fetchPublishedBlogs(maxItems = 50): Promise<CmsBlog[]> {
  try {
    const snap = await getDocs(collection(db, "blogs"));
    const blogs: CmsBlog[] = [];
    snap.forEach((d) => blogs.push({ id: d.id, ...d.data() } as CmsBlog));
    return blogs
      .filter((b) => !b.status || b.status === "published")
      .sort((a, b) =>
        ((b.publishedAt ?? b.updatedAt) ?? "").localeCompare(
          (a.publishedAt ?? a.updatedAt) ?? ""
        )
      )
      .slice(0, maxItems);
  } catch {
    return [];
  }
}

// ─── FAQS ────────────────────────────────────────────────────────────────────
export async function fetchFaqs(): Promise<CmsFaq[]> {
  try {
    const snap = await getDocs(collection(db, "faqs"));
    const faqs: CmsFaq[] = [];
    snap.forEach((d) => faqs.push({ id: d.id, ...d.data() } as CmsFaq));
    return faqs
      .filter((f) => f.isVisible !== false)
      .sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)));
  } catch {
    return [];
  }
}

// Group FAQs by category for the public FAQ page
export function groupFaqsByCategory(
  faqs: CmsFaq[]
): { title: string; intro: string; items: { question: string; answer: string }[] }[] {
  const map = new Map<string, { question: string; answer: string }[]>();
  for (const faq of faqs) {
    const cat = faq.category || "General";
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push({ question: faq.question, answer: faq.answer });
  }
  return Array.from(map.entries()).map(([title, items]) => ({
    title,
    intro: "",
    items,
  }));
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
// Admin uses collection: "pricing"
export async function fetchPricingPlans(): Promise<CmsPricingPlan[]> {
  try {
    const snap = await getDocs(collection(db, "pricing"));
    const plans: CmsPricingPlan[] = [];
    snap.forEach((d) => plans.push({ id: d.id, ...d.data() } as CmsPricingPlan));
    return plans
      .filter((p) => p.isVisible !== false)
      .sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)));
  } catch {
    return [];
  }
}

// ─── TEAM ────────────────────────────────────────────────────────────────────
// Admin uses collection: "team"
export async function fetchTeamMembers(): Promise<CmsTeamMember[]> {
  try {
    const snap = await getDocs(collection(db, "team"));
    const members: CmsTeamMember[] = [];
    snap.forEach((d) => members.push({ id: d.id, ...d.data() } as CmsTeamMember));
    return members
      .filter((m) => m.isVisible !== false)
      .sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)));
  } catch {
    return [];
  }
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
// Admin uses collection: "testimonials"
export async function fetchTestimonials(): Promise<CmsTestimonial[]> {
  try {
    const snap = await getDocs(collection(db, "testimonials"));
    const list: CmsTestimonial[] = [];
    snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsTestimonial));
    return list.sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)));
  } catch {
    return [];
  }
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
// Admin uses collection: "services"
export async function fetchPublishedServices(): Promise<CmsService[]> {
  try {
    const snap = await getDocs(collection(db, "services"));
    const list: CmsService[] = [];
    snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsService));
    return list
      .filter((s) => s.isPublished !== false)
      .sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)));
  } catch {
    return [];
  }
}

import { OUR_WORK_CMS_PROJECTS } from "@/lib/cms/case-studies-data";

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Admin uses collection: "projects"
export async function fetchPublishedProjects(maxItems = 50): Promise<CmsProject[]> {
  try {
    const snap = await getDocs(collection(db, "projects"));
    const list: CmsProject[] = [];
    snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsProject));

    const existingMap = new Map<string, CmsProject>();
    list.forEach((p) => {
      if (p.id) existingMap.set(p.id, p);
      if (p.slug) existingMap.set(p.slug, p);
    });

    const combined = [...list];
    for (const def of OUR_WORK_CMS_PROJECTS) {
      if (!existingMap.has(def.id) && !existingMap.has(def.slug)) {
        combined.push(def);
      }
    }

    return combined
      .filter((p) => !p.status || p.status === "published")
      .sort((a, b) => ((a.orderIndex ?? 0) - (b.orderIndex ?? 0)))
      .slice(0, maxItems);
  } catch {
    return OUR_WORK_CMS_PROJECTS.slice(0, maxItems);
  }
}
