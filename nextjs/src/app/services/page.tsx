import Link from "next/link";

const services = [
  {
    title: "Branding And Identity",
    href: "/services/branding-and-identity",
    description: "Brand strategy, visual identity, and messaging systems that help your business look consistent and memorable.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Growth-focused campaigns, SEO direction, analytics, and funnel improvements built to attract better leads.",
  },
  {
    title: "Creative Content Production",
    href: "/services/creative-content-production",
    description: "Campaign-ready creative assets, videos, reels, graphics, and production support for digital launches.",
  },
  {
    title: "Content Creation",
    href: "/services/content-creation",
    description: "Planned social posts, captions, website content, and brand storytelling that keeps your audience engaged.",
  },
  {
    title: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
    description: "Conversion-focused store design, product presentation, landing pages, and optimization for online sales.",
  },
  {
    title: "UX/UI Design",
    href: "/services/ux-ui-design",
    description: "User-first interface design, clean layouts, wireframes, and responsive experiences for websites and apps.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    description: "Content calendars, profile optimization, growth strategy, and consistent publishing across key platforms.",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    description: "Search campaigns, keyword planning, ad copy, tracking setup, and optimization for high-intent leads.",
  },
  {
    title: "Social Media Ads",
    href: "/services/social-media-ads",
    description: "Paid campaigns for Meta and social platforms with creative testing, audience targeting, and reporting.",
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
    description: "Short-form edits, promotional videos, motion cuts, subtitles, and platform-ready visual polish.",
  },
];

const benefits = [
  "Clear project pricing",
  "Smooth onboarding",
  "Transparent progress tracking",
  "Post-launch assistance",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 35 35">
      <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="brandexa-services-page">
      <section className="brandexa-services-hero">
        <div className="brandexa-services-shell">
          <p className="brandexa-services-kicker">Our services</p>
          <h1>
            Digital services built for <span>measurable growth</span>
          </h1>
          <p className="brandexa-services-intro">
            From brand identity and websites to paid campaigns, content, and ongoing optimization, Brandexa Growth helps businesses show up clearly and convert with confidence.
          </p>
          <div className="brandexa-services-actions">
            <a className="brandexa-services-primary" data-consultation-trigger="true" href="#book-consultation">
              Book a Free Consultation
            </a>
            <Link className="brandexa-services-secondary" href="/our-work">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="brandexa-services-marquee" aria-label="Service highlights">
        <div>
          {["Branding", "Website Design", "Digital Marketing", "Social Media", "Google Ads", "Video Editing"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="brandexa-services-grid-section" aria-label="Services">
        <div className="brandexa-services-grid">
          {services.map((service, index) => (
            <Link className="brandexa-service-card" href={service.href} key={service.href}>
              <span className="brandexa-service-card-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span className="brandexa-service-card-arrow">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="brandexa-services-benefits">
        <div className="brandexa-services-benefits-copy">
          <img className="brandexa-services-benefits-logo" src="/brandlogo2_cropped.png" alt="Brandexa Growth" />
          <p className="brandexa-services-kicker">Why choose us</p>
          <h2>Strategy first, execution that stays practical.</h2>
        </div>
        <div className="brandexa-services-benefits-list">
          {benefits.map((benefit) => (
            <div key={benefit}>
              <span aria-hidden="true"></span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
