import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";

export type ServicePageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  highlights: string[];
  deliverables: string[];
  process: {
    title: string;
    text: string;
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const serviceNav = [
  { href: "/services/branding-and-identity", label: "Branding And Identity" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/creative-content-production", label: "Creative Content Production" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/e-commerce-solutions", label: "E-commerce Solutions" },
  { href: "/services/ux-ui-design", label: "UX/UI Design" },
  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/social-media-ads", label: "Social Media Ads" },
  { href: "/services/video-editing", label: "Video Editing" },
];

export default function ServiceDetailPage({ service }: { service: ServicePageContent }) {
  return (
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_16%_10%,rgba(184,255,44,0.16),transparent_30%),linear-gradient(135deg,#0a0a0a_0%,#050505_70%)] px-4 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60 sm:mb-8 sm:gap-3 sm:text-sm">
            <Link className="transition hover:text-lime-300" href="/">Home</Link>
            <ChevronRight className="h-4 w-4 text-lime-300" />
            <Link className="transition hover:text-lime-300" href="/services">Services</Link>
            <ChevronRight className="h-4 w-4 text-lime-300" />
            <span className="text-white">{service.title}</span>
          </div>

          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.26em] text-lime-300 sm:mb-5 sm:text-[13px] sm:tracking-[0.32em]">
            {service.eyebrow}
          </p>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-[clamp(2.55rem,13vw,8.8rem)] font-black leading-[0.94] tracking-[-0.03em] sm:leading-[0.9] sm:tracking-[-0.04em]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-4xl text-[clamp(1rem,4.6vw,1.65rem)] leading-7 text-white/72 sm:mt-7 sm:leading-8">
                {service.summary}
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
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
              <img className="h-[220px] w-full object-cover opacity-90 sm:h-[360px] lg:h-[460px]" src={service.image} alt={`${service.title} service preview`} />
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-[0.8fr_1fr] lg:gap-8">
              <h2 className="text-[clamp(2rem,10vw,4.4rem)] font-black leading-none tracking-[-0.03em]">
                Built for measurable growth.
              </h2>
              <div className="space-y-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                <p>{service.intro}</p>
                <ul className="grid gap-3">
                  {service.highlights.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <Check className="mt-1 h-5 w-5 flex-none text-lime-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-lime-300">What We Deliver</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <div className="rounded-[18px] border border-white/10 bg-[#101216] p-4 text-base font-bold text-white/88 sm:p-5 sm:text-lg" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-lime-300">Our Process</p>
              <div className="grid gap-4">
                {service.process.map((step, index) => (
                  <article className="grid gap-4 rounded-[20px] border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[84px_1fr] sm:gap-5 sm:p-6" key={step.title}>
                    <span className="text-4xl font-black text-lime-300 sm:text-5xl">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-black sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-white/68">{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[24px] border border-lime-300/20 bg-lime-300 p-5 text-black sm:mt-16 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.28em]">Expected Outcomes</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.outcomes.map((item) => (
                  <div className="rounded-[16px] bg-black/10 p-4 text-base font-black sm:p-5 sm:text-lg" key={item}>{item}</div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-lime-300">Questions</p>
              <div className="grid gap-4">
                {service.faqs.map((faq) => (
                  <article className="rounded-[18px] border border-white/10 bg-[#101216] p-5 sm:p-6" key={faq.question}>
                    <h3 className="text-lg font-black sm:text-xl">{faq.question}</h3>
                    <p className="mt-3 text-base leading-7 text-white/68">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="brandexa-service-sidebar lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-white/10 bg-[#0f1115] p-5">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/48">Services Category</p>
              <nav className="brandexa-service-sidebar-nav grid max-h-[320px] gap-2 overflow-y-auto pr-1 lg:max-h-none lg:overflow-visible lg:pr-0">
                {serviceNav.map((item) => {
                  const isActive = item.href.endsWith(service.slug);
                  return (
                    <Link
                      className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-black transition ${
                        isActive ? "bg-lime-300 text-black" : "bg-white/[0.04] text-white hover:bg-white/10"
                      }`}
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-5 rounded-[24px] border border-lime-300/20 bg-[radial-gradient(circle_at_top_right,rgba(184,255,44,0.16),transparent_35%),#101216] p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">Ready to start?</p>
              <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">Let’s shape the right plan for your brand.</h2>
              <a
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-4 font-black text-black transition hover:bg-white"
                data-consultation-trigger="true"
                href="#book-consultation"
              >
                Book a Free Consultation
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
