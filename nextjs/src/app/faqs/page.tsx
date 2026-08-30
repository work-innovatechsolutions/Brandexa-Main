"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { fetchFaqs, groupFaqsByCategory } from "@/lib/cms/data";

const STATIC_FALLBACK = [
  {
    title: "Getting Started",
    intro: "Useful basics before we begin working together.",
    items: [
      {
        question: "How do I start a project with Brandexa Growth?",
        answer:
          "Book a free consultation and share your goals, current challenges, website or social links, and the service you are interested in. We review the details, ask the right questions, and recommend the next practical step.",
      },
      {
        question: "Do you offer a free consultation?",
        answer:
          "Yes. The consultation is used to understand your business, timeline, budget range, and whether Brandexa Growth is the right fit for the work you need.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with service businesses, e-commerce brands, local businesses, creators, startups, and growing companies that need sharper branding, content, ads, websites, or social media execution.",
      },
    ],
  },
  {
    title: "Services",
    intro: "What we can help you plan, build, and improve.",
    items: [
      {
        question: "What services do you provide?",
        answer:
          "We provide branding and identity, digital marketing, social media marketing, Google Ads, social media ads, content creation, creative content production, e-commerce solutions, UX/UI design, and video editing.",
      },
      {
        question: "Can I choose only one service?",
        answer:
          "Yes. You can start with one focused service, such as Google Ads or video editing, or combine multiple services when your campaign needs strategy, creative, landing pages, and ongoing optimization.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    intro: "How quotes and billing are handled.",
    items: [
      {
        question: "How much do your services cost?",
        answer:
          "Pricing depends on scope, timeline, deliverables, and ongoing support needs. After the consultation, we can prepare a clear quote or proposal for the work required.",
      },
      {
        question: "Do you work on monthly retainers?",
        answer:
          "Yes. Ongoing services such as social media marketing, ads management, content creation, and optimization can be handled on a monthly retainer.",
      },
    ],
  },
];

export default function FaqsPage() {
  const [faqGroups, setFaqGroups] = useState(STATIC_FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaqs()
      .then((faqs) => {
        if (faqs.length > 0) {
          setFaqGroups(groupFaqsByCategory(faqs));
        }
      })
      .catch(() => {/* keep static fallback */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(184,255,44,0.18),transparent_30%),linear-gradient(135deg,#0b1605_0%,#050505_58%)] px-4 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60 sm:mb-8 sm:gap-3 sm:text-sm">
            <Link className="transition hover:text-lime-300" href="/">Home</Link>
            <ChevronRight className="h-4 w-4 text-lime-300" />
            <span className="text-white">FAQS</span>
          </div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.26em] text-lime-300 sm:mb-5 sm:text-[13px] sm:tracking-[0.32em]">Questions</p>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-[clamp(2.5rem,13vw,8.4rem)] font-black leading-[0.96] tracking-[-0.03em] sm:leading-[0.92] sm:tracking-[-0.04em]">
                Frequently Asked Questions
              </h1>
              <p className="mt-5 max-w-4xl text-[clamp(1rem,4.6vw,1.55rem)] leading-7 text-white/72 sm:mt-7 sm:leading-8">
                Answers about Brandexa Growth services, project flow, pricing, ads, content, and getting started.
              </p>
            </div>
            <a
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime-300 px-5 py-4 text-center text-sm font-black text-black transition hover:bg-white sm:w-fit sm:px-6 sm:text-base"
              data-consultation-trigger="true"
              href="#book-consultation"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-white/10 bg-[#101216] p-5">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/48">FAQ Topics</p>
              <nav className="grid grid-cols-1 gap-2 min-[520px]:grid-cols-2 lg:grid-cols-1">
                {faqGroups.map((group) => (
                  <a
                    className="rounded-full bg-white/[0.04] px-4 py-3 text-sm font-black text-white transition hover:bg-lime-300 hover:text-black"
                    href={`#${group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                    key={group.title}
                  >
                    {group.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8 sm:space-y-10">
            {loading ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.4)" }}>
                Loading FAQs…
              </div>
            ) : (
              faqGroups.map((group) => (
                <section
                  className="scroll-mt-28 rounded-[22px] border border-white/10 bg-white/[0.035] p-4 sm:rounded-[28px] sm:p-7"
                  id={group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
                  key={group.title}
                >
                  <div className="mb-6">
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-lime-300">{group.title}</p>
                    {group.intro && (
                      <p className="mt-3 max-w-2xl text-base leading-7 text-white/60">{group.intro}</p>
                    )}
                  </div>
                  <div className="grid gap-4">
                    {group.items.map((item, index) => (
                      <details
                        className="group rounded-[18px] border border-white/10 bg-[#101216] p-4 open:border-lime-300/40 open:bg-[#12180d] sm:p-5"
                        key={item.question}
                        open={index === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-white marker:hidden sm:gap-5 sm:text-lg">
                          {item.question}
                          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-lime-300 text-lg leading-none text-black transition group-open:rotate-45 sm:h-9 sm:w-9 sm:text-xl">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-4xl text-base leading-7 text-white/68">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
