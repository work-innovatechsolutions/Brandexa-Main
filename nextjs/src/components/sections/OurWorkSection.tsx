"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ChevronRight, Quote, Star } from "lucide-react";

type WorkItem = {
  title: string;
  category: string;
  sectors: string[];
  image: string;
};

type ReviewCard = {
  name: string;
  date: string;
  text: string;
};

type OurWorkSectionProps = {
  showMoreButton?: boolean;
  moreButtonHref?: string;
  moreButtonLabel?: string;
  compact?: boolean;
};

const workItems: WorkItem[] = [
  {
    title: "Scoogie Events",
    category: "Branding",
    sectors: ["Local Business", "Service Business"],
    image: "/wp-content/uploads/2024/11/project-1-2.webp",
  },
  {
    title: "Wallhogs",
    category: "Website",
    sectors: ["E-Commerce", "Social Media Management"],
    image: "/wp-content/uploads/2024/11/project-3-2.webp",
  },
  {
    title: "Mission Hills",
    category: "Marketing",
    sectors: ["Sports & Leisure", "Campaign Strategy"],
    image: "/wp-content/uploads/2024/11/project-6-2.webp",
  },
  {
    title: "Future Leaders",
    category: "Content",
    sectors: ["Education", "Content System"],
    image: "/wp-content/uploads/2024/11/project-4-2.webp",
  },
  {
    title: "Bright Dental",
    category: "SEO",
    sectors: ["Healthcare", "Search Growth"],
    image: "/wp-content/uploads/2024/11/project-5-2.webp",
  },
  {
    title: "Urban Threads",
    category: "E-Commerce",
    sectors: ["Apparel / Fashion", "Storefront Design"],
    image: "/wp-content/uploads/2024/11/project-2-2.webp",
  },
];

const filters = ["All", "Industry", "Services"] as const;

const chips = [
  "All",
  "Social Media Management",
  "Social Media Ads",
  "Google Ads",
  "SEO",
  "E-Commerce",
  "Short Video Marketing",
  "Email Marketing",
  "B2B",
  "Food & Beverage",
  "Restaurant",
  "Real Estate",
  "Medical",
  "Health & Wellness",
  "Hospitality",
  "Apparel / Fashion",
  "Beauty",
  "Religious & Nonprofit",
  "Local Business",
  "Service Business",
  "Entertainment",
] as const;

const reviews: ReviewCard[] = [
  {
    name: "David Tran",
    date: "25 June 2026",
    text: "Very knowledgeable and helpful. The team cleaned up our ads account and helped us get exceptional ROAs.",
  },
  {
    name: "Rachael Dengler",
    date: "11 June 2026",
    text: "A responsive, proactive team that consistently delivers high-quality campaigns and clear communication.",
  },
];

export default function OurWorkSection({
  showMoreButton = false,
  moreButtonHref = "/our-work",
  moreButtonLabel = "See More",
  compact = false,
}: OurWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleItems = useMemo(() => {
    if (compact) {
      return workItems.slice(0, 3);
    }
    return workItems;
  }, [compact]);

  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-transparent px-4 pt-8 pb-16 text-white sm:px-6 lg:px-8 lg:pt-10 lg:pb-20"
      aria-label="Our work"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-8 grid gap-5 border-b border-white/10 pb-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.7fr)] lg:items-end lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.32em] text-lime-400">Selected work</p>
            <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.4rem)] font-semibold tracking-[-0.03em] text-white">
              Projects and proof, arranged with a little more discipline.
            </h2>
          </div>
          <p className="max-w-[34rem] text-[15px] leading-7 text-white/62 lg:justify-self-end lg:text-left">
            Explore recent brand, web, and campaign work alongside review highlights that show how
            the delivery feels from the client side.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-start">
          <div>
            <div className="mb-5 flex flex-wrap gap-6 text-[15px] font-semibold text-white/55">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveFilter(item)}
                  className={`rounded-full border px-4 py-2.5 transition-colors duration-200 ${
                    activeFilter === item
                      ? "border-lime-400/60 bg-lime-400/10 text-lime-300"
                      : "border-white/10 text-white/55 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,32,0.92)_0%,rgba(10,12,18,0.92)_100%)] px-6 py-6 shadow-[0_20px_44px_rgba(0,0,0,0.28)]">
              <div className="grid gap-x-10 gap-y-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/82 sm:grid-cols-2 xl:grid-cols-3">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className={`text-left transition-colors duration-200 ${
                    chip === "All" ? "text-lime-300" : "hover:text-lime-300"
                  }`}
                >
                  {chip}
                </button>
              ))}
              </div>
            </div>

            {showMoreButton ? (
              <a
                href={moreButtonHref}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-lime-300 transition hover:-translate-y-0.5 hover:bg-lime-400/16"
              >
                {moreButtonLabel}
                <ChevronRight className="h-4 w-4" />
              </a>
            ) : null}

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleItems.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1117] shadow-[0_22px_42px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-lime-400/20 hover:shadow-[0_28px_54px_rgba(0,0,0,0.36)]"
                >
                  <div className="relative aspect-[1.22/1] overflow-hidden bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                  </div>
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-lime-300">
                      <span className="rounded-full bg-lime-400/10 px-3 py-1.5 text-lime-300">{item.category}</span>
                      <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1 group-hover:text-lime-300" />
                    </div>
                    <h3 className="mt-3 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] font-semibold uppercase leading-6 tracking-[0.18em] text-sky-400">
                      {item.sectors.join(", ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-24">
            <div className="rounded-[24px] border border-white/10 bg-[#0f141b] p-6 shadow-[0_22px_46px_rgba(0,0,0,0.3)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-white/55">Lyfe Marketing</p>
                  <div className="mt-3 flex items-center gap-2 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-[18px] font-medium leading-7 text-white">550 Google reviews</p>
                </div>
              </div>
            </div>

            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`rounded-[24px] border border-white/10 p-6 shadow-[0_22px_46px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 ${
                  index === 0 ? "bg-[linear-gradient(180deg,#111823_0%,#0d131c_100%)]" : "bg-[#0f141b]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400/12 text-lime-300">
                      <Quote className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-[21px] font-semibold leading-tight text-white">{review.name}</h4>
                      <p className="mt-1 text-[14px] text-white/45">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[22px] font-black text-sky-400 shadow-sm">
                    G
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4.5 w-4.5 fill-current" />
                  ))}
                  <span className="ml-1 rounded-full bg-lime-400/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">
                    Verified
                  </span>
                </div>

                <p className="mt-5 text-[16px] leading-8 text-white/72">{review.text}</p>
                {index === 1 ? (
                  <button
                    type="button"
                    className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/45 transition hover:text-white"
                  >
                    Read more
                  </button>
                ) : null}
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
