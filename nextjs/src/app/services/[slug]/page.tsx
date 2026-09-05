import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailPage, { ServicePageContent } from "@/components/sections/ServiceDetailPage";
import { servicePages } from "../service-pages";
import { adminDb } from "@/lib/firebase/admin";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getService(slug: string): Promise<ServicePageContent | null> {
  // 1. Check if statically defined in service-pages.ts
  if (servicePages[slug]) {
    return servicePages[slug];
  }

  // 2. Fetch from Firestore
  try {
    const snap = await adminDb.collection("services").get();
    const doc = snap.docs.find((d) => {
      const data = d.data();
      return (
        d.id === slug ||
        data.slug === slug ||
        (data.slug && data.slug.toLowerCase() === slug.toLowerCase())
      );
    });

    if (!doc) {
      return null;
    }

    const data = doc.data();
    if (data.isPublished === false) {
      return null;
    }

    const title = data.title || "Service";
    const shortDesc = data.shortDescription || data.description || "Scalable digital growth solutions built to deliver measurable ROI.";
    const longDesc = data.description || data.shortDescription || "We provide the specialized services your brand needs to scale, managed by one cohesive team focused on the same business targets.";
    const heroImg = data.heroImage || "/wp-content/uploads/2024/11/service-single-img-2.webp";

    const highlights =
      Array.isArray(data.capabilities) && data.capabilities.length > 0
        ? data.capabilities
        : [
            "Tailored strategy built around measurable business targets.",
            "End-to-end execution managed by dedicated specialists.",
            "Transparent reporting with clear ROI and conversion tracking.",
            "Continuous iteration and performance optimization.",
          ];

    const deliverables =
      Array.isArray(data.capabilities) && data.capabilities.length > 0
        ? data.capabilities
        : [
            "Strategic Discovery & Roadmap",
            "Implementation & Creative Assets",
            "Quality Assurance & Deployment",
            "Performance Review & Iterations",
          ];

    const process =
      Array.isArray(data.process) && data.process.length > 0
        ? data.process.map((p: { title?: string; step?: string; description?: string; text?: string }) => ({
            title: p.title || p.step || "Process Step",
            text: p.description || p.text || "Execution aligned with target outcomes.",
          }))
        : [
            { title: "Discover", text: "We analyze your audience, current performance, and conversion bottlenecks." },
            { title: "Architect", text: "We design a high-converting roadmap tailored to your growth goals." },
            { title: "Execute", text: "Our team implements the campaign, creatives, and technical assets." },
            { title: "Scale", text: "We analyze data and optimize continuously for maximum ROI." },
          ];

    const outcomes =
      Array.isArray(data.benefits) && data.benefits.length > 0
        ? data.benefits.map((b: { title?: string }) => b.title || "Higher ROI")
        : ["Predictable Revenue", "Higher Conversions", "Scalable Growth"];

    const faqs = [
      {
        question: `How quickly can we launch ${title}?`,
        answer: "Most campaigns and deliverables are planned, reviewed, and launched within 1-2 weeks.",
      },
      {
        question: "How do you track performance and results?",
        answer: "We provide real-time dashboard visibility and weekly reporting focused on ROI, cost per acquisition, and qualified conversions.",
      },
      {
        question: "Can this service be customized for our industry?",
        answer: "Yes. Every strategy, asset, and workflow is customized to your exact market positioning and target audience.",
      },
    ];

    return {
      slug,
      title,
      eyebrow: `${title.toUpperCase()} SYSTEM`,
      summary: shortDesc,
      intro: longDesc,
      image: heroImg,
      highlights,
      deliverables,
      process,
      outcomes,
      faqs,
    };
  } catch (err) {
    console.error(`Error loading service ${slug}:`, err);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Brandexa",
    };
  }

  return {
    title: `${service.title} | Brandexa Growth`,
    description: service.summary,
  };
}

export default async function DynamicServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
