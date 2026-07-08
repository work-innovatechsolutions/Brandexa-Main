"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronRight, X } from "lucide-react";

type WorkItem = {
  title: string;
  category: string;
  sectors: string[];
  image: string;
  caseStudy: CaseStudy;
  sourceUrl?: string;
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

type OurWorkSectionProps = {
  showMoreButton?: boolean;
  moreButtonHref?: string;
  moreButtonLabel?: string;
  compact?: boolean;
};

const projectImages = [
  "/wp-content/uploads/2024/11/project-1-2.webp",
  "/wp-content/uploads/2024/11/project-3-2.webp",
  "/wp-content/uploads/2024/11/project-6-2.webp",
  "/wp-content/uploads/2024/11/project-4-2.webp",
  "/wp-content/uploads/2024/11/project-5-2.webp",
  "/wp-content/uploads/2024/11/project-2-2.webp",
];

const externalProjectLinks = [
  { title: "Clearon Bleach Tablets", category: "E-Commerce", sectors: ["Consumer Products", "Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/clearon-bleach-tablets/" },
  { title: "Ray of Hope Christian Church", category: "Nonprofit", sectors: ["Religious & Nonprofit", "Community"], url: "https://www.lyfemarketing.com/portfolio-posts/ray-hope-christian-church/" },
  { title: "Cafe Alibaba", category: "Restaurant", sectors: ["Food & Beverage", "Local Business"], url: "https://www.lyfemarketing.com/portfolio-posts/cafe-alibaba-case-study/" },
  { title: "Mortgage Markets CUSO", category: "Finance", sectors: ["Financial Services", "Lead Generation"], url: "https://www.lyfemarketing.com/portfolio-posts/mortgage-markets-cuso/" },
  { title: "Arctic Collagen", category: "Wellness", sectors: ["Health & Wellness", "E-Commerce"], url: "https://www.lyfemarketing.com/portfolio-posts/arctic-collagen/" },
  { title: "Vital Vibe Health & Fitness", category: "Fitness", sectors: ["Health & Wellness", "Social Media"], url: "https://www.lyfemarketing.com/portfolio-posts/vital-vibe-health-fitness/" },
  { title: "Wrecked Angles", category: "Automotive", sectors: ["Entertainment", "Social Media"], url: "https://www.lyfemarketing.com/portfolio-posts/wrecked-angles/" },
  { title: "Axiom Structures", category: "B2B", sectors: ["Construction", "Lead Generation"], url: "https://www.lyfemarketing.com/portfolio-posts/axiom-structures/" },
  { title: "Daryl D Black", category: "Personal Brand", sectors: ["Coaching", "Content Strategy"], url: "https://www.lyfemarketing.com/portfolio-posts/daryl-d-black/" },
  { title: "Spray Daze Tan", category: "Beauty", sectors: ["Beauty", "Local Business"], url: "https://www.lyfemarketing.com/portfolio-posts/spray-daze-tan/" },
  { title: "FoodFixer Experience", category: "Food", sectors: ["Food & Beverage", "Campaign Strategy"], url: "https://www.lyfemarketing.com/portfolio-posts/foodfixer-experience/" },
  { title: "Power of Partnerships", category: "B2B", sectors: ["Partnerships", "Content Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/power-of-partnerships/" },
  { title: "Soultuary Studios", category: "Wellness", sectors: ["Health & Wellness", "Branding"], url: "https://www.lyfemarketing.com/portfolio-posts/soultuary-studios/" },
  { title: "Vegax Holdings", category: "B2B", sectors: ["Investment", "Digital Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/vegax-holdings/" },
  { title: "Pooltree System", category: "Home Services", sectors: ["Service Business", "Lead Generation"], url: "https://www.lyfemarketing.com/portfolio-posts/pooltree-system/" },
  { title: "Cenaps", category: "Healthcare", sectors: ["Medical", "Digital Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/cenaps/" },
  { title: "Jalia Walda", category: "Personal Brand", sectors: ["Beauty", "Content Strategy"], url: "https://www.lyfemarketing.com/portfolio-posts/jalia-walda/" },
  { title: "Comfort One Shoes", category: "Retail", sectors: ["E-Commerce", "Apparel / Fashion"], url: "https://www.lyfemarketing.com/portfolio-posts/comfort-one-shoes/" },
  { title: "Vulcan Strength", category: "Fitness", sectors: ["Health & Wellness", "E-Commerce"], url: "https://www.lyfemarketing.com/portfolio-posts/vulcan-strength/" },
  { title: "Lady Ease Feminine Care", category: "Healthcare", sectors: ["Medical", "Consumer Products"], url: "https://www.lyfemarketing.com/portfolio-posts/lady-ease-feminine-care/" },
  { title: "Eat Below the Redline", category: "Food", sectors: ["Food & Beverage", "Content Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/eat-below-the-redline/" },
  { title: "Clean Program", category: "Wellness", sectors: ["Health & Wellness", "E-Commerce"], url: "https://www.lyfemarketing.com/portfolio-posts/clean-program/" },
  { title: "Short Videos", category: "Video", sectors: ["Short Video Marketing", "Content Creation"], url: "https://www.lyfemarketing.com/portfolio-posts/short-videos/" },
  { title: "My Lala Leggings", category: "Fashion", sectors: ["Apparel / Fashion", "E-Commerce"], url: "https://www.lyfemarketing.com/portfolio-posts/my-lala-leggings/" },
  { title: "Weston Boucher", category: "Social Ads", sectors: ["Social Media Ads", "Personal Brand"], url: "https://www.lyfemarketing.com/portfolio-posts/weston-boucher-social-advertising/" },
  { title: "Ancient Keto", category: "Wellness", sectors: ["Health & Wellness", "Social Media Ads"], url: "https://www.lyfemarketing.com/portfolio-posts/ancient-keto/" },
  { title: "Forever Diamonds", category: "Jewelry", sectors: ["Retail", "Luxury"], url: "https://www.lyfemarketing.com/portfolio-posts/forever-diamonds/" },
  { title: "Advanced Windows and Siding", category: "Home Services", sectors: ["Service Business", "Lead Generation"], url: "https://www.lyfemarketing.com/portfolio-posts/advanced-windows-and-siding/" },
  { title: "Egyptian Magic", category: "Social Media", sectors: ["Beauty", "Social Media Management"], url: "https://www.lyfemarketing.com/portfolio-posts/egyptian-magic-smm/" },
  { title: "Wingstop", category: "Restaurant", sectors: ["Food & Beverage", "Campaign Strategy"], url: "https://www.lyfemarketing.com/portfolio-posts/wingstop/" },
  { title: "Domino's", category: "Restaurant", sectors: ["Food & Beverage", "Digital Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/dominos-case-study/" },
  { title: "Mastermine Investments", category: "Finance", sectors: ["Financial Services", "Lead Generation"], url: "https://www.lyfemarketing.com/portfolio-posts/mastermine-investments/" },
  { title: "Loan Cabin", category: "Finance", sectors: ["Financial Services", "Digital Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/loan-cabin/" },
  { title: "Celebrate Relaxed Hair", category: "Beauty", sectors: ["Beauty", "Content Marketing"], url: "https://www.lyfemarketing.com/portfolio-posts/celebrate-relaxed-hair/" },
];

function makeExternalWorkItem(project: (typeof externalProjectLinks)[number], index: number): WorkItem {
  return {
    title: project.title,
    category: project.category,
    sectors: project.sectors,
    image: projectImages[index % projectImages.length],
    sourceUrl: project.url,
    caseStudy: {
      background: `${project.title} is a selected portfolio reference covering ${project.sectors.join(", ").toLowerCase()} work. View the full external case study for the original campaign details and creative direction.`,
      services: project.sectors,
      challenge: [
        "Clarify the offer, audience, and campaign message for stronger digital performance.",
        "Build a practical content and advertising approach that supports measurable growth.",
      ],
      solution: [
        "Created a focused digital strategy around audience intent and campaign goals.",
        "Used channel-specific creative and performance tracking to improve engagement and lead quality.",
      ],
      testimonial: {
        quote: "View the linked case study for the complete project story and campaign context.",
        author: "Portfolio Reference",
        company: project.title,
      },
      resultCards: [
        { value: "Case", label: "Study available" },
        { value: "Multi", label: "Channel campaign" },
        { value: "Growth", label: "Focused execution" },
      ],
      facebookResults: ["Campaign structure: audience-led", "Creative: platform-ready", "Goal: measurable growth"],
      instagramResults: ["Content: visual-first", "Engagement: optimized", "Reporting: performance-focused"],
    },
  };
}

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
  ...externalProjectLinks.map(makeExternalWorkItem),
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

        <div>
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

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {visibleItems.map((item) => (
                <article
                  key={item.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (item.sourceUrl) {
                      window.open(item.sourceUrl, "_blank", "noopener,noreferrer");
                      return;
                    }

                    setSelectedWork(item);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      if (item.sourceUrl) {
                        window.open(item.sourceUrl, "_blank", "noopener,noreferrer");
                        return;
                      }

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
                      {item.sourceUrl ? (
                        <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white/42 transition group-hover:text-lime-300">
                          View external case study
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
          <div className="relative max-h-[92vh] w-full max-w-[1320px] overflow-hidden rounded-[22px] border border-white/10 bg-[#070a0f] text-white shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-lg ring-1 ring-white/10 transition hover:bg-lime-400 hover:text-black"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="max-h-[92vh] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onWheel={(event) => event.stopPropagation()}
              onTouchMove={(event) => event.stopPropagation()}
            >
              <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
                <div className="mb-10">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-300">{selectedWork.category}</p>
                  <h2 id="work-case-study-title" className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-none text-white">
                    {selectedWork.title}
                  </h2>
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-white/65">
                    {selectedWork.sectors.join(" / ")}
                  </p>
                </div>

                <section className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.7fr)] lg:items-start">
                  <div className="overflow-hidden rounded-[16px] bg-white/5">
                    <img
                      src={selectedWork.image}
                      alt={`${selectedWork.title} project preview`}
                      className="h-full min-h-[320px] w-full object-cover opacity-90"
                    />
                  </div>

                  <div>
                    <h3 className="text-[34px] font-bold leading-tight text-white">The Results</h3>
                    <div className="mt-6 space-y-4">
                      {selectedWork.caseStudy.resultCards.map((result) => (
                        <div key={result.value} className="border border-lime-400/25 bg-white/[0.035] px-6 py-6 text-center shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
                          <strong className="block text-[32px] font-bold leading-none text-lime-300">{result.value}</strong>
                          <span className="mt-3 block text-[18px] leading-7 text-white/72">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="border-b border-white/10 py-12">
                  <h3 className="text-[36px] font-bold text-white">Client Testimonial</h3>
                  <p className="mt-6 text-xl italic leading-8 text-white/70">A quote from the client about their experience and results.</p>
                  <blockquote className="relative mt-8 bg-white/[0.055] border border-white/10 px-8 py-10 text-[clamp(1.25rem,2vw,1.65rem)] italic leading-[1.7] text-white sm:px-12">
                    "{selectedWork.caseStudy.testimonial.quote}"
                    <span className="pointer-events-none absolute right-8 top-3 text-[88px] font-bold leading-none text-lime-400/25">"</span>
                    <footer className="mt-8 text-right text-lg not-italic text-white">
                      - <strong>{selectedWork.caseStudy.testimonial.author}</strong>, {selectedWork.caseStudy.testimonial.company}
                    </footer>
                  </blockquote>
                </section>

                <section className="border-b border-white/10 py-12">
                  <h3 className="text-[36px] font-bold text-white">Background</h3>
                  <p className="mt-6 max-w-6xl text-[20px] leading-9 text-white/72">{selectedWork.caseStudy.background}</p>
                </section>

                <section className="border-b border-white/10 py-12">
                  <h3 className="text-[36px] font-bold text-white">Services Used</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8">
                    {selectedWork.caseStudy.services.map((service) => (
                      <li key={service}>
                        <span className="text-lime-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="border-b border-white/10 py-12">
                  <h3 className="text-[36px] font-bold text-white">Challenges & Objective</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8 text-white/72">
                    {selectedWork.caseStudy.challenge.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="border-b border-white/10 py-12">
                  <h3 className="text-[36px] font-bold text-white">Our Solution</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-[20px] leading-8 text-white/72">
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
                  <h3 className="text-[36px] font-bold text-white">Results</h3>
                  <div className="mt-7 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-[24px] font-bold text-white">Facebook Results (Jan 1 - May 30, 2025)</h4>
                      <ul className="mt-4 space-y-2 text-[18px] leading-7 text-white/72">
                        {selectedWork.caseStudy.facebookResults.map((result) => (
                          <li key={result} className="flex gap-4">
                            <span className="mt-2 h-2 w-5 flex-none rounded-full bg-lime-400" />
                            <span><strong>{result.split(":")[0]}:</strong>{result.includes(":") ? result.slice(result.indexOf(":") + 1) : ""}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[24px] font-bold text-white">Instagram (Jan 1 - May 30, 2025)</h4>
                      <ul className="mt-4 space-y-2 text-[18px] leading-7 text-white/72">
                        {selectedWork.caseStudy.instagramResults.map((result) => (
                          <li key={result} className="flex gap-4">
                            <span className="mt-2 h-2 w-5 flex-none rounded-full bg-lime-400" />
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

