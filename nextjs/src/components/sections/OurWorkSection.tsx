"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronRight, Quote, Star, X } from "lucide-react";

type WorkItem = {
  title: string;
  category: string;
  sectors: string[];
  image: string;
  caseStudy: CaseStudy;
};

type CaseStudy = {
  background: string;
  services: string[];
  challenge: string[];
  solution: string[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
  resultCards: {
    value: string;
    label: string;
  }[];
  facebookResults: string[];
  instagramResults: string[];
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
    caseStudy: {
      background:
        "Scoogie Events needed a sharper identity system and a clearer digital presence for local event promotion, sponsor visibility, and recurring community campaigns.",
      services: ["Branding & Identity", "Campaign Creative"],
      challenge: [
        "The brand needed to feel more polished without losing its local energy.",
        "Event messaging had to work across social posts, printed collateral, and landing pages.",
      ],
      solution: [
        "Refreshed the visual direction with a cleaner identity system and reusable campaign templates.",
        "Created messaging blocks that could adapt across seasonal events and paid campaign assets.",
      ],
      testimonial: {
        quote:
          "The new brand system made our campaigns feel more consistent and easier to launch.",
        author: "Brandexa Client",
        company: "Scoogie Events",
      },
      resultCards: [
        { value: "3.2x", label: "Faster campaign rollout" },
        { value: "42%", label: "Lift in social engagement" },
        { value: "18", label: "Reusable creative templates" },
      ],
      facebookResults: ["Engagement: +42%", "Event responses: +31%", "Page visits: +22%"],
      instagramResults: ["Reach: +28%", "Profile actions: +19%", "Story interactions: +35%"],
    },
  },
  {
    title: "Wallhogs",
    category: "Website",
    sectors: ["E-Commerce", "Social Media Management"],
    image: "/wp-content/uploads/2024/11/project-3-2.webp",
    caseStudy: {
      background:
        "Wallhogs is a U.S.-based custom wall decor company offering personalized wall decals, murals, and art prints. With a diverse customer base ranging from homeowners to small business owners and interior decorators, Wallhogs wanted to boost their brand visibility and engagement across Facebook and Instagram to stay top-of-mind and drive more qualified traffic to their website.",
      services: ["Social Media Management"],
      challenge: [
        "Wallhogs had a solid product offering but lacked consistent engagement across their Meta platforms.",
        "Previous posts saw limited reach, and content interactions were stagnant, making it difficult to gauge audience interest or build momentum.",
      ],
      solution: [
        "Content Strategy Refresh: Introduced a consistent posting schedule with a mix of product showcases, seasonal posts, and other promotional posts.",
        "Performance Monitoring & Optimization: Actively tracked campaign metrics and adjusted creatives, captions, and targeting based on real-time performance insights.",
      ],
      testimonial: {
        quote:
          "Once we were assigned another rep, Clainee, we've received some solid results for the few months she has been assigned.",
        author: "Paul Conklin",
        company: "Wallhogs",
      },
      resultCards: [
        { value: "56.9K", label: "Views on Facebook (in 4 months)" },
        { value: "31.8K", label: "Reach on Facebook (in 4 months)" },
        { value: "93", label: "Content Interactions both on Facebook and Instagram (in 4 months)" },
      ],
      facebookResults: [
        "Views: 56.9K",
        "Reach: 31.8K (+19.9%)",
        "Content Interactions: 77.8K (+3.8%)",
        "Link Clicks: 1.2K (+100%)",
        "Website Visits: 624 (+122.9%)",
        "Page Follows: 8 (+300%)",
      ],
      instagramResults: [
        "Views: 7.5K (+13.5%)",
        "Reach: 4.7K (+33.3%)",
        "Content Interactions: 16 (+1.5K%)",
        "Link Clicks: 117 (+100%)",
      ],
    },
  },
  {
    title: "Mission Hills",
    category: "Marketing",
    sectors: ["Sports & Leisure", "Campaign Strategy"],
    image: "/wp-content/uploads/2024/11/project-6-2.webp",
    caseStudy: {
      background:
        "Mission Hills needed campaign support that could make seasonal offers, facilities, and membership moments easier to discover online.",
      services: ["Campaign Strategy", "Social Media Ads"],
      challenge: [
        "The audience was split across leisure visitors, members, and event prospects.",
        "Campaigns needed clearer offers and stronger creative consistency.",
      ],
      solution: [
        "Built a campaign calendar around high-intent seasonal moments.",
        "Created offer-led creative and optimized placements based on performance signals.",
      ],
      testimonial: {
        quote: "The campaign structure gave our team more clarity and better weekly momentum.",
        author: "Brandexa Client",
        company: "Mission Hills",
      },
      resultCards: [
        { value: "48%", label: "Increase in campaign reach" },
        { value: "2.1x", label: "Higher landing-page visits" },
        { value: "34%", label: "Lower cost per inquiry" },
      ],
      facebookResults: ["Reach: +48%", "Link clicks: +62%", "Inquiries: +29%"],
      instagramResults: ["Profile visits: +41%", "Story taps: +33%", "Post saves: +18%"],
    },
  },
  {
    title: "Future Leaders",
    category: "Content",
    sectors: ["Education", "Content System"],
    image: "/wp-content/uploads/2024/11/project-4-2.webp",
    caseStudy: {
      background:
        "Future Leaders needed a content system that could communicate programs, outcomes, and student stories with more consistency.",
      services: ["Content Creation", "Short Video Marketing"],
      challenge: [
        "Program updates were useful but lacked a repeatable storytelling structure.",
        "The team needed content formats that were simple to maintain over time.",
      ],
      solution: [
        "Created repeatable content pillars for student stories, program proof, and enrollment prompts.",
        "Designed short-form creative templates that made ongoing publishing easier.",
      ],
      testimonial: {
        quote: "The content finally feels organized and easy for our team to keep using.",
        author: "Brandexa Client",
        company: "Future Leaders",
      },
      resultCards: [
        { value: "24", label: "Reusable content formats" },
        { value: "39%", label: "Increase in engagement" },
        { value: "3x", label: "More consistent publishing" },
      ],
      facebookResults: ["Engagement: +39%", "Post reach: +26%", "Clicks: +22%"],
      instagramResults: ["Reels views: +51%", "Profile visits: +24%", "Saves: +17%"],
    },
  },
  {
    title: "Bright Dental",
    category: "SEO",
    sectors: ["Healthcare", "Search Growth"],
    image: "/wp-content/uploads/2024/11/project-5-2.webp",
    caseStudy: {
      background:
        "Bright Dental wanted stronger local search visibility and clearer paths for prospective patients to find services and request appointments.",
      services: ["SEO", "Local Search Optimization"],
      challenge: [
        "Important service pages were not structured around local search intent.",
        "The site needed better content hierarchy and conversion-focused page updates.",
      ],
      solution: [
        "Reworked service content around local keyword intent and patient questions.",
        "Improved page structure, metadata, and conversion prompts across key services.",
      ],
      testimonial: {
        quote: "Search leads became easier to understand, and our pages started working harder.",
        author: "Brandexa Client",
        company: "Bright Dental",
      },
      resultCards: [
        { value: "64%", label: "Increase in local impressions" },
        { value: "27%", label: "More service-page visits" },
        { value: "19%", label: "Lift in appointment actions" },
      ],
      facebookResults: ["Page visits: +19%", "Local clicks: +21%", "Calls: +14%"],
      instagramResults: ["Profile visits: +22%", "Direction taps: +15%", "Reach: +18%"],
    },
  },
  {
    title: "Urban Threads",
    category: "E-Commerce",
    sectors: ["Apparel / Fashion", "Storefront Design"],
    image: "/wp-content/uploads/2024/11/project-2-2.webp",
    caseStudy: {
      background:
        "Urban Threads needed a cleaner storefront experience for product discovery, collection browsing, and style-led campaign moments.",
      services: ["E-Commerce", "Storefront Design"],
      challenge: [
        "The shopping experience needed stronger visual hierarchy and simpler product paths.",
        "Campaign landing sections had to support promotions without adding friction.",
      ],
      solution: [
        "Improved category presentation, featured product modules, and campaign-ready sections.",
        "Created a cleaner visual system for collection launches and promotional moments.",
      ],
      testimonial: {
        quote: "The storefront feels cleaner, faster to browse, and easier to promote.",
        author: "Brandexa Client",
        company: "Urban Threads",
      },
      resultCards: [
        { value: "31%", label: "Increase in product views" },
        { value: "22%", label: "Higher add-to-cart actions" },
        { value: "16%", label: "Lift in returning visits" },
      ],
      facebookResults: ["Product clicks: +31%", "Shop visits: +22%", "Campaign reach: +37%"],
      instagramResults: ["Product taps: +28%", "Profile actions: +20%", "Story clicks: +26%"],
    },
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
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  const visibleItems = useMemo(() => {
    if (compact) {
      return workItems.slice(0, 3);
    }
    return workItems;
  }, [compact]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!selectedWork) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork]);

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
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedWork(item)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedWork(item);
                    }
                  }}
                  className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1117] shadow-[0_22px_42px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-lime-400/20 hover:shadow-[0_28px_54px_rgba(0,0,0,0.36)]"
                  aria-label={`Open ${item.title} case study`}
                >
                  <div className="h-full w-full cursor-pointer">
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
      {isBrowser && selectedWork ? createPortal((
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/72 p-3 backdrop-blur-md sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-case-study-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedWork(null);
            }
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-[1320px] overflow-hidden rounded-[22px] bg-white text-[#333] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-lime-400 hover:text-black"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="max-h-[92vh] overflow-y-auto overscroll-contain"
              onWheel={(event) => event.stopPropagation()}
              onTouchMove={(event) => event.stopPropagation()}
            >
              <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
                <div className="mb-10">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#149bd7]">{selectedWork.category}</p>
                  <h2 id="work-case-study-title" className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-none text-[#333]">
                    {selectedWork.title}
                  </h2>
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-[#4a4a4a]">
                    {selectedWork.sectors.join(" / ")}
                  </p>
                </div>

                <section className="grid gap-8 border-b border-[#e7e7e7] pb-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.7fr)] lg:items-start">
                  <div className="overflow-hidden rounded-[16px] bg-[#dfe6ea]">
                    <img
                      src={selectedWork.image}
                      alt={`${selectedWork.title} project preview`}
                      className="h-full min-h-[320px] w-full object-cover opacity-75"
                    />
                  </div>

                  <div>
                    <h3 className="text-[34px] font-bold leading-tight text-[#333]">The Results</h3>
                    <div className="mt-6 space-y-4">
                      {selectedWork.caseStudy.resultCards.map((result) => (
                        <div key={result.value} className="border border-[#159bda] px-6 py-6 text-center">
                          <strong className="block text-[32px] font-bold leading-none text-[#149bd7]">{result.value}</strong>
                          <span className="mt-3 block text-[18px] leading-7 text-[#333]">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="border-b border-[#e7e7e7] py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Client Testimonial</h3>
                  <p className="mt-6 text-xl italic leading-8 text-[#333]">A quote from the client about their experience and results.</p>
                  <blockquote className="relative mt-8 bg-[#eaf3f7] px-8 py-10 text-[clamp(1.25rem,2vw,1.65rem)] italic leading-[1.7] text-black sm:px-12">
                    "{selectedWork.caseStudy.testimonial.quote}"
                    <span className="pointer-events-none absolute right-8 top-3 text-[88px] font-bold leading-none text-[#bfe7f6]">"</span>
                    <footer className="mt-8 text-right text-lg not-italic text-black">
                      - <strong>{selectedWork.caseStudy.testimonial.author}</strong>, {selectedWork.caseStudy.testimonial.company}
                    </footer>
                  </blockquote>
                </section>

                <section className="border-b border-[#e7e7e7] py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Background</h3>
                  <p className="mt-6 max-w-6xl text-[20px] leading-9 text-[#3d3d3d]">{selectedWork.caseStudy.background}</p>
                </section>

                <section className="border-b border-[#e7e7e7] py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Services Used</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8">
                    {selectedWork.caseStudy.services.map((service) => (
                      <li key={service}>
                        <span className="text-[#149bd7]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="border-b border-[#e7e7e7] py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Challenges & Objective</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8 text-[#333]">
                    {selectedWork.caseStudy.challenge.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="border-b border-[#e7e7e7] py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Our Solution</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8 text-[#333]">
                    {selectedWork.caseStudy.solution.map((item) => {
                      const [lead, ...rest] = item.split(": ");
                      return (
                        <li key={item}>
                          {rest.length ? <><strong>{lead}:</strong> {rest.join(": ")}</> : item}
                        </li>
                      );
                    })}
                  </ul>
                </section>

                <section className="py-12">
                  <h3 className="text-[36px] font-bold text-[#333]">Results</h3>
                  <div className="mt-7 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-[24px] font-bold text-[#2f2f2f]">Facebook Results (Jan 1 - May 30, 2025)</h4>
                      <ul className="mt-4 space-y-2 text-[18px] leading-7 text-[#2f2f2f]">
                        {selectedWork.caseStudy.facebookResults.map((result) => (
                          <li key={result} className="flex gap-4">
                            <span className="mt-2 h-2 w-5 flex-none rounded-full bg-[#149bd7]" />
                            <span><strong>{result.split(":")[0]}:</strong>{result.includes(":") ? result.slice(result.indexOf(":") + 1) : ""}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[24px] font-bold text-[#2f2f2f]">Instagram (Jan 1 - May 30, 2025)</h4>
                      <ul className="mt-4 space-y-2 text-[18px] leading-7 text-[#2f2f2f]">
                        {selectedWork.caseStudy.instagramResults.map((result) => (
                          <li key={result} className="flex gap-4">
                            <span className="mt-2 h-2 w-5 flex-none rounded-full bg-[#149bd7]" />
                            <span><strong>{result.split(":")[0]}:</strong>{result.includes(":") ? result.slice(result.indexOf(":") + 1) : ""}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ), document.body) : null}
    </section>
  );
}
