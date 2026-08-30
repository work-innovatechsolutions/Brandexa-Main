import { doc, getDoc, setDoc, collection, writeBatch, getDocs, limit, query } from "firebase/firestore";
import { db } from "./client";
import {
  CmsPage,
  CmsService,
  CmsProject,
  CmsBlog,
  CmsTestimonial,
  CmsTeamMember,
  CmsFaq,
  CmsPricingPlan,
  GlobalSettings,
  MediaFolder,
} from "@/types/cms";
import { OUR_WORK_CMS_PROJECTS } from "@/lib/cms/case-studies-data";

export async function checkAndSeedDatabase(force = false): Promise<{ seeded: boolean; message: string }> {
  try {
    const pagesCheck = await getDocs(query(collection(db, "pages"), limit(1)));
    if (!pagesCheck.empty && !force) {
      // Still ensure all Our Work projects exist in Firestore
      const projSnap = await getDocs(collection(db, "projects"));
      const existingIds = new Set(projSnap.docs.map((d) => d.id));
      let added = 0;
      for (const p of OUR_WORK_CMS_PROJECTS) {
        if (!existingIds.has(p.id)) {
          await setDoc(doc(db, "projects", p.id), p, { merge: true });
          added++;
        }
      }
      return {
        seeded: added > 0,
        message: added > 0
          ? `Synced ${added} new Our Work case studies into Firestore.`
          : "Database is synced with all Our Work case studies.",
      };
    }

    console.log("Seeding default Brandexa CMS content into Firestore...");

    // 1. Seed Global Settings
    const settingsRef = doc(db, "settings", "global");
    const globalSettings: GlobalSettings = {
      general: {
        websiteName: "Brandexa Growth",
        tagline: "Digital Growth & Creative Engineering Agency",
        contactEmail: "hello@brandexagrowth.com",
        phone: "+1 (800) 555-0199",
        address: "742 Evergreen Terrace, Suite 400",
        socialLinks: {
          linkedin: "https://www.linkedin.com/company/brandexagrowth/?viewAsMember=true",
          instagram: "https://instagram.com",
          facebook: "https://facebook.com",
          twitter: "https://x.com",
        },
        logoUrl: "/brandlogo2_cropped.png",
        faviconUrl: "/brandlogo2_cropped.png",
      },
      header: {
        logoUrl: "/brandlogo2_cropped.png",
        ctaText: "Book a Free Consultation",
        ctaUrl: "#book-consultation",
      },
      footer: {
        description: "Brandexa builds scalable growth engines, high-converting digital platforms, and market-defining creative assets for forward-thinking brands.",
        copyrightText: "© 2026 Brandexa Growth. All rights reserved.",
      },
      globalSeo: {
        defaultTitle: "Brandexa | Digital Growth & Creative Engineering Agency",
        defaultDescription: "Turn attention into measurable revenue with Brandexa's full-funnel digital strategy, web design, and creative production.",
        defaultOgImage: "/wp-content/uploads/2024/11/page-header-bg-2.webp",
      },
    };
    await setDoc(settingsRef, globalSettings);

    // 2. Seed Media Folders
    const folders: MediaFolder[] = [
      { id: "brand-assets", name: "Brand Assets", slug: "brand-assets", assetCount: 8, createdAt: new Date().toISOString() },
      { id: "website", name: "Website", slug: "website", assetCount: 24, createdAt: new Date().toISOString() },
      { id: "blog", name: "Blog Posts", slug: "blog", assetCount: 6, createdAt: new Date().toISOString() },
      { id: "projects", name: "Projects & Portfolio", slug: "projects", assetCount: 9, createdAt: new Date().toISOString() },
      { id: "team", name: "Team Members", slug: "team", assetCount: 8, createdAt: new Date().toISOString() },
      { id: "testimonials", name: "Testimonials", slug: "testimonials", assetCount: 5, createdAt: new Date().toISOString() },
    ];
    for (const folder of folders) {
      await setDoc(doc(db, "media_folders", folder.id), folder);
    }

    // 3. Seed Pages Catalog
    const pages: CmsPage[] = [
      { id: "home", title: "Homepage", slug: "home", route: "/", status: "published", sectionsOrder: ["hero", "services", "stats", "our-work", "testimonials", "latest-blogs", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "about", title: "About Us", slug: "about", route: "/about", status: "published", sectionsOrder: ["story", "mission", "vision", "values", "milestones", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "our-work", title: "Our Work", slug: "our-work", route: "/our-work", status: "published", sectionsOrder: ["hero", "projects-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "blogs", title: "Blogs (Insights)", slug: "blogs", route: "/blogs", status: "published", sectionsOrder: ["hero", "filters", "articles-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "services", title: "Services", slug: "services", route: "/services", status: "published", sectionsOrder: ["hero", "services-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "pricing", title: "Pricing Plans", slug: "pricing", route: "/pricing", status: "published", sectionsOrder: ["hero", "plans-grid", "faqs", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "team", title: "Our Team", slug: "team", route: "/team", status: "published", sectionsOrder: ["hero", "team-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "faqs", title: "FAQs", slug: "faqs", route: "/faqs", status: "published", sectionsOrder: ["hero", "accordion-list", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "testimonials", title: "Testimonials", slug: "testimonials", route: "/testimonials", status: "published", sectionsOrder: ["hero", "testimonials-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "image-gallery", title: "Image Gallery", slug: "image-gallery", route: "/image-gallery", status: "published", sectionsOrder: ["hero", "gallery-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "video-gallery", title: "Video Gallery", slug: "video-gallery", route: "/video-gallery", status: "published", sectionsOrder: ["hero", "videos-grid", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "privacy-policy", title: "Privacy Policy", slug: "privacy-policy", route: "/privacy-policy", status: "published", sectionsOrder: ["legal-content"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
      { id: "contact", title: "Contact Us", slug: "contact", route: "/contact", status: "published", sectionsOrder: ["hero", "contact-form", "map"], lastUpdated: new Date().toISOString(), updatedBy: "System Initializer" },
    ];
    for (const page of pages) {
      await setDoc(doc(db, "pages", page.id), page);
    }

    // 4. Seed Homepage Sections
    const homeSections = [
      {
        id: "hero",
        type: "hero",
        title: "Hero Section",
        orderIndex: 0,
        isVisible: true,
        content: {
          eyebrow: "GROWTH & CREATIVE AGENCY",
          headingPrefix: "Engineered For",
          animatedWords: ["Growth", "Leads", "Revenue"],
          headingSuffix: "That Compounds",
          description: "We craft high-converting websites, scalable paid campaigns, and performance creative designed to turn attention into recurring revenue.",
          primaryCtaText: "Book a Free Consultation",
          primaryCtaUrl: "#book-consultation",
          secondaryCtaText: "Explore Our Works",
          secondaryCtaUrl: "/our-work",
          backgroundMedia: "/wp-content/uploads/2024/11/hero-bg-2-2.webp",
        },
      },
      {
        id: "services",
        type: "services",
        title: "Services Section",
        orderIndex: 1,
        isVisible: true,
        content: {
          sectionTitle: "What We Excel At",
          heading: "Full-Funnel Creative & Growth Services",
          description: "From custom branding and web platforms to targeted acquisition and video production.",
          featuredServiceIds: ["branding-and-identity", "digital-marketing", "creative-content-production", "e-commerce-solutions", "ux-ui-design", "social-media-marketing"],
        },
      },
      {
        id: "stats",
        type: "stats",
        title: "Statistics Section",
        orderIndex: 2,
        isVisible: true,
        content: {
          stats: [
            { id: "stat-1", value: "150+", label: "Projects Delivered" },
            { id: "stat-2", value: "98%", label: "Client Satisfaction" },
            { id: "stat-3", value: "3.4X", label: "Average Growth Multiple" },
            { id: "stat-4", value: "$42M+", label: "Client Revenue Generated" },
          ],
        },
      },
      {
        id: "our-work",
        type: "our-work",
        title: "Our Works Portfolio Section",
        orderIndex: 3,
        isVisible: true,
        content: {
          sectionTitle: "Our Works",
          heading: "Selected Case Studies & Deliverables",
          description: "Browse real-world transformations engineered by our creative and technical teams.",
          seeMoreText: "See More Works",
          seeMoreUrl: "/our-work",
        },
      },
      {
        id: "testimonials",
        type: "testimonials",
        title: "Testimonials Section",
        orderIndex: 4,
        isVisible: true,
        content: {
          sectionTitle: "Testimonials",
          heading: "What Our Partners Say",
          description: "Hear directly from founders, CMOs, and marketing leaders who partnered with Brandexa.",
        },
      },
      {
        id: "latest-blogs",
        type: "latest-blogs",
        title: "Latest Blogs Section",
        orderIndex: 5,
        isVisible: true,
        content: {
          sectionTitle: "Latest Blogs",
          heading: "Insights on digital innovation and growth",
          description: "Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive.",
          seeMoreText: "See More Blogs",
          seeMoreUrl: "/blogs",
        },
      },
      {
        id: "cta",
        type: "cta",
        title: "Final Consultation CTA",
        orderIndex: 6,
        isVisible: true,
        content: {
          heading: "Ready to Turn Attention into Measurable Revenue?",
          description: "Partner with Brandexa to engineer your end-to-end digital growth engine.",
          buttonText: "Book a Free Consultation",
          buttonUrl: "#book-consultation",
        },
      },
    ];
    for (const sec of homeSections) {
      await setDoc(doc(db, "pages", "home", "sections", sec.id), sec);
    }

    // 5. Seed 10 Services
    const services: CmsService[] = [
      {
        id: "branding-and-identity",
        title: "Branding And Identity",
        slug: "branding-and-identity",
        shortDescription: "Distinct visual identities, guidelines, and positioning that command industry authority.",
        description: "We craft comprehensive brand systems that resonate deeply with your target demographic and set you apart from competitors.",
        icon: "/wp-content/uploads/2024/11/icon-service-1-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg",
        capabilities: ["Brand Strategy & Positioning", "Logo Design & Visual Assets", "Typography & Color Architecture", "Comprehensive Style Guides"],
        process: [
          { step: "01", title: "Discovery", description: "Deep-dive into brand values, market positioning, and audience psychology." },
          { step: "02", title: "Concepting", description: "Iterative visual explorations, mood boards, and aesthetic direction." },
          { step: "03", title: "Refinement", description: "Pixel-perfect finalization and asset export across all digital and print formats." }
        ],
        benefits: [{ title: "Authority", description: "Command immediate trust in competitive markets." }, { title: "Consistency", description: "Seamless cohesion across all digital customer touchpoints." }],
        cta: { title: "Ready to redefine your brand?", buttonText: "Start Your Brand Transformation", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 0,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        slug: "digital-marketing",
        shortDescription: "High-performance acquisition and retention campaigns engineered for scale.",
        description: "Full-funnel digital marketing strategies optimizing acquisition costs and maximizing lifetime customer value.",
        icon: "/wp-content/uploads/2024/11/icon-service-2-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-single-img-2.jpg",
        capabilities: ["Omnichannel Growth Strategy", "Search Engine Optimization (SEO)", "Funnel Optimization & CRO", "Email & Lifecycle Automation"],
        process: [
          { step: "01", title: "Audit", description: "Full tracking and channel attribution audit." },
          { step: "02", title: "Execution", description: "Deploying high-converting creative and optimized landing pages." },
          { step: "03", title: "Scale", description: "Aggressive scaling on profitable segments." }
        ],
        benefits: [{ title: "High ROAS", description: "Focusing on profitable unit economics." }, { title: "Predictable Leads", description: "Continuous qualified pipeline." }],
        cta: { title: "Scale your revenue today", buttonText: "Get Marketing Strategy", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 1,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "creative-content-production",
        title: "Creative Content Production",
        slug: "creative-content-production",
        shortDescription: "Studio-grade video production, 3D motion design, and high-impact commercial assets.",
        description: "High-production creative assets that stop the scroll and turn viewers into buyers.",
        icon: "/wp-content/uploads/2024/11/icon-service-3-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-single-img-3.jpg",
        capabilities: ["Commercial Video Production", "3D Motion Graphics", "Performance UGC & Ad Creatives", "Product Photography"],
        process: [
          { step: "01", title: "Scripting", description: "Direct-response hooks and storyboard development." },
          { step: "02", title: "Production", description: "High-fidelity filming, lighting, and audio capture." },
          { step: "03", title: "Post-Production", description: "Dynamic editing, sound design, and color grading." }
        ],
        benefits: [{ title: "Higher CTR", description: "Magnetic visuals that maximize click-through rates." }, { title: "Viral Potential", description: "Engineered for maximum shareability." }],
        cta: { title: "Elevate your visual standards", buttonText: "Request Production Reel", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 2,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "content-creation",
        title: "Content Creation",
        slug: "content-creation",
        shortDescription: "Strategic editorial, copy, and organic content that compounds domain authority.",
        description: "Scalable content engines producing thought leadership, engaging copywriting, and viral social assets.",
        icon: "/wp-content/uploads/2024/11/icon-service-4-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-entry-img-1.jpg",
        capabilities: ["Long-form SEO Articles", "Conversion Copywriting", "Social Media Graphics", "Lead Magnets & Whitepapers"],
        process: [
          { step: "01", title: "Keyword Research", description: "Uncovering high-intent search keywords." },
          { step: "02", title: "Authoring", description: "In-depth, expert-level content." },
          { step: "03", title: "Distribution", description: "Syndicating across priority channels." }
        ],
        benefits: [{ title: "Compounding Traffic", description: "Organic visitors that increase month over month." }, { title: "Thought Leadership", description: "Positioning your brand as the definitive authority." }],
        cta: { title: "Build your content moat", buttonText: "Consult Our Editors", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 3,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "e-commerce-solutions",
        title: "E-commerce Solutions",
        slug: "e-commerce-solutions",
        shortDescription: "Custom Shopify, headless, and WooCommerce storefronts engineered for maximum conversion.",
        description: "High-speed, conversion-focused online stores built with seamless checkouts and automated upsells.",
        icon: "/wp-content/uploads/2024/11/icon-service-5-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-entry-img-2.jpg",
        capabilities: ["Shopify Plus Development", "Headless Next.js Commerce", "Checkout Flow Optimization", "Subscription Architecture"],
        process: [
          { step: "01", title: "Architecture", description: "Catalog structure and checkout funnel mapping." },
          { step: "02", title: "Build", description: "Custom UI components and third-party API integrations." },
          { step: "03", title: "Launch", description: "Speed optimization and load testing." }
        ],
        benefits: [{ title: "Higher AOV", description: "Strategic upsell and cross-sell integration." }, { title: "Sub-second Load Times", description: "Zero drop-off from sluggish pages." }],
        cta: { title: "Accelerate your online sales", buttonText: "Build Your Storefront", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 4,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ux-ui-design",
        title: "UX/UI Design",
        slug: "ux-ui-design",
        shortDescription: "Frictionless digital product interfaces and conversion-optimized web designs.",
        description: "User interfaces that combine futuristic aesthetics with effortless usability.",
        icon: "/wp-content/uploads/2024/11/icon-service-6-1.svg",
        heroImage: "/wp-content/uploads/2024/11/service-entry-img-3.jpg",
        capabilities: ["Design System Creation", "Interactive Figma Prototyping", "User Research & Usability Testing", "Mobile App UI Design"],
        process: [
          { step: "01", title: "Wireframing", description: "Information architecture and user journey mapping." },
          { step: "02", title: "High-Fidelity UI", description: "Design systems with modern dark & light modes." },
          { step: "03", title: "Handoff", description: "Interactive specifications ready for frontend engineering." }
        ],
        benefits: [{ title: "Zero Friction", description: "Intuitive flows that guide users to conversion." }, { title: "Modern Aesthetic", description: "Standout designs that build customer trust." }],
        cta: { title: "Upgrade your product design", buttonText: "Design With Us", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 5,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        shortDescription: "Community building, organic viral growth, and content distribution across key platforms.",
        description: "Engaging social strategies that build brand affinity and loyal customer communities.",
        icon: "/wp-content/uploads/2024/11/icon-service-1-2.svg",
        heroImage: "/wp-content/uploads/2024/11/service-process-step-1-1.jpg",
        capabilities: ["Social Strategy & Calendars", "Community Management", "Influencer Partnerships", "Engagement Optimization"],
        process: [
          { step: "01", title: "Strategy", description: "Audience profile and content pillars alignment." },
          { step: "02", title: "Production", description: "Daily curated posts, reels, and stories." },
          { step: "03", title: "Community", description: "Active interaction and fan growth." }
        ],
        benefits: [{ title: "Brand Loyalty", description: "Passionate followers who buy repeatedly." }, { title: "Organic Reach", description: "Leveraging algorithmic virality." }],
        cta: { title: "Grow your social presence", buttonText: "Start Social Engine", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 6,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "google-ads",
        title: "Google Ads",
        slug: "google-ads",
        shortDescription: "High-intent search, Performance Max, and YouTube ad campaigns with proven ROAS.",
        description: "Laser-targeted paid search campaigns designed to capture buyers at the exact moment of intent.",
        icon: "/wp-content/uploads/2024/11/icon-service-2-2.svg",
        heroImage: "/wp-content/uploads/2024/11/service-process-step-2-1.jpg",
        capabilities: ["Google Search Ads", "Performance Max (PMax)", "YouTube Video Ads", "Targeted Display Retargeting"],
        process: [
          { step: "01", title: "Intent Audit", description: "Negative keyword filtering and search intent clustering." },
          { step: "02", title: "Campaign Launch", description: "Optimized landing pages with direct tracking." },
          { step: "03", title: "Bid Optimization", description: "Automated ROAS target scaling." }
        ],
        benefits: [{ title: "Direct Intent", description: "Capture users searching to purchase now." }, { title: "Clear Attribution", description: "Track every dollar to revenue." }],
        cta: { title: "Scale your paid search", buttonText: "Launch Google Ads", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 7,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "social-media-ads",
        title: "Social Media Ads",
        slug: "social-media-ads",
        shortDescription: "Meta, TikTok, and LinkedIn ad engines driving scale and qualified leads.",
        description: "Direct-response social media campaigns leveraging advanced algorithmic targeting and dynamic ad testing.",
        icon: "/wp-content/uploads/2024/11/icon-service-3-2.svg",
        heroImage: "/wp-content/uploads/2024/11/service-process-step-3-1.jpg",
        capabilities: ["Meta (Facebook/Instagram) Ads", "TikTok Direct Response Ads", "LinkedIn B2B Lead Gen", "Creative Iteration Loops"],
        process: [
          { step: "01", title: "Creative Testing", description: "Multi-angle hook, body, and CTA testing." },
          { step: "02", title: "Audience Scaling", description: "Broad and lookalike targeting scale." },
          { step: "03", title: "Retargeting", description: "Dynamic catalog and multi-touch retargeting." }
        ],
        benefits: [{ title: "Rapid Scale", description: "Reach millions of qualified buyers." }, { title: "Creative Velocity", description: "Fresh high-performing ads every week." }],
        cta: { title: "Scale paid social campaigns", buttonText: "Launch Social Ads", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 8,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "video-editing",
        title: "Video Editing",
        slug: "video-editing",
        shortDescription: "Fast-paced, high-engagement video edits with sound effects, dynamic captions, and VFX.",
        description: "Transform raw footage into dynamic, cinema-grade reels, shorts, and long-form YouTube videos.",
        icon: "/wp-content/uploads/2024/11/icon-service-4-2.svg",
        heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg",
        capabilities: ["Short-form Reels & TikToks", "YouTube Long-form Editing", "Dynamic Kinetic Typography", "VFX & Sound Design"],
        process: [
          { step: "01", title: "Pacing", description: "Tight narrative pacing removing all dead air." },
          { step: "02", title: "Enhancements", description: "B-roll, sound effects, motion graphics." },
          { step: "03", title: "Mastering", description: "Color correction and high-bitrate export." }
        ],
        benefits: [{ title: "Retention", description: "Keep viewers hooked until the last second." }, { title: "Turnaround", description: "Fast delivery of polished edits." }],
        cta: { title: "Turn footage into viral assets", buttonText: "Order Video Editing", buttonUrl: "#book-consultation" },
        isPublished: true,
        orderIndex: 9,
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const service of services) {
      await setDoc(doc(db, "services", service.id), service);
    }

    // 6. Seed Projects / Case Studies from Our Work
    for (const project of OUR_WORK_CMS_PROJECTS) {
      await setDoc(doc(db, "projects", project.id), project, { merge: true });
    }

    // 7. Seed 6 Blog Posts
    const blogs: CmsBlog[] = [
      {
        id: "web-development-essentials",
        title: "Web Development Essentials: What Every Business Needs",
        slug: "web-development-essentials",
        category: "Web Development",
        tags: ["Web Dev", "Performance", "Conversion", "Tech Stack"],
        author: { name: "Alex Rivera", role: "Head of Engineering", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp",
        excerpt: "Discover core web development strategies that turn high-traffic websites into high-converting digital growth engines.",
        content: `## The Modern Web Development Imperative\n\nIn an era where customer attention spans are measured in milliseconds, your website is no longer just a digital business card—it is your most critical customer acquisition funnel.\n\n### 1. Speed is a Feature, Not an Afterthought\n\nResearch consistently shows that every 100ms decrease in page load speed can boost conversion rates by up to 8%. Building on modern architectures like Next.js with server-side rendering ensures sub-second initial load times.\n\n### 2. Mobile-First Responsiveness\n\nOver 65% of all web traffic originates from mobile devices. If your checkout flow, hero animations, or navigation menus degrade on small viewports, you are leaking qualified pipeline.\n\n### 3. Clean Code & Scalable Architecture\n\nTechnical debt accumulates quickly when ad-hoc solutions are rushed. Maintaining strict component boundaries, modular styling tokens, and typed data contracts ensures the system scales seamlessly as traffic explodes.`,
        readTime: "5 min read",
        isFeatured: true,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
        seo: { metaTitle: "Web Development Essentials: What Every Business Needs | Brandexa", metaDescription: "Discover core web development strategies that turn high-traffic websites into high-converting digital growth engines." },
      },
      {
        id: "ui-ux-design-principles",
        title: "UI/UX Design Principles for Better User Engagement",
        slug: "ui-ux-design-principles",
        category: "UI/UX Design",
        tags: ["UI/UX", "Product Design", "Engagement", "User Research"],
        author: { name: "Elena Rostova", role: "Creative Director", avatarUrl: "/wp-content/uploads/2024/11/author-2-1-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-1-3.webp",
        excerpt: "Master user-centric design principles to elevate brand credibility, eliminate user friction, and drastically reduce bounce rates across devices.",
        content: `## Designing for Intuition and Clarity\n\nExceptional UI/UX design is invisible. When an interface is engineered thoughtfully, users achieve their goals effortlessly without stopping to decipher the navigation.\n\n### Visual Hierarchy and Contrast\n\nGuide the visitor's eye intentionally. Use typography scales, whitespace, and focused accent colors (like our signature Brandexa lime) to highlight key conversion triggers.\n\n### Micro-Interactions\n\nSubtle hover feedback, smooth modal transitions, and responsive button states provide tactile reassurance that the interface is alive and responsive to input.`,
        readTime: "6 min read",
        isFeatured: false,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
        seo: { metaTitle: "UI/UX Design Principles for Better User Engagement | Brandexa", metaDescription: "Master user-centric design principles to elevate brand credibility and engagement." },
      },
      {
        id: "mobile-optimized-website-needs",
        title: "Why Your Business Needs a Mobile-Optimized Website",
        slug: "mobile-optimized-website-needs",
        category: "Web Development",
        tags: ["Mobile", "SEO", "Responsive", "UX"],
        author: { name: "Alex Rivera", role: "Head of Engineering", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-2-3.webp",
        excerpt: "Learn why responsive, ultra-fast mobile architectures are now the baseline for customer retention, search ranking, and digital growth.",
        content: `## Mobile-First is No Longer Optional\n\nGoogle's mobile-first indexing evaluates the smartphone version of your website to determine your search rankings. A compromised mobile layout directly damages your organic visibility.\n\n### Touch-Friendly Targets\n\nEnsure buttons and interactive controls have a minimum target size of 48px to prevent frustrating mis-taps on handheld devices.`,
        readTime: "4 min read",
        isFeatured: false,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "navigating-digital-landscape",
        title: "Navigating the Digital Landscape: Tips for Small Businesses",
        slug: "navigating-digital-landscape",
        category: "Digital Marketing",
        tags: ["Marketing", "Small Business", "Growth", "Strategy"],
        author: { name: "Marcus Thorne", role: "Growth Strategist", avatarUrl: "/wp-content/uploads/2024/11/author-3-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-5-2.webp",
        excerpt: "Actionable frameworks and digital acquisition tactics tailored for business owners looking to outcompete and scale sustainably.",
        content: `## Focus on High-Leverage Channels\n\nSmall businesses frequently make the mistake of attempting to be present everywhere at once. Focus your resources on the 1-2 channels where your ideal buyers actually congregate.`,
        readTime: "7 min read",
        isFeatured: false,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "content-marketing-essentials",
        title: "Content Marketing Essentials for Growing Your Brand",
        slug: "content-marketing-essentials",
        category: "Content Strategy",
        tags: ["Content", "Copywriting", "SEO", "Branding"],
        author: { name: "Elena Rostova", role: "Creative Director", avatarUrl: "/wp-content/uploads/2024/11/author-2-1-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp",
        excerpt: "Build scalable content production systems that capture attention, nurture prospective buyers, and compound authority over time.",
        content: `## Building an Owned Media Asset\n\nPaid ads stop working the second you stop paying. High quality editorial content compounds month after month, delivering warm inbound inquiries without additional ad spend.`,
        readTime: "5 min read",
        isFeatured: false,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "hello-world",
        title: "How to Choose the Right Social Media Platforms for Your Brand",
        slug: "hello-world",
        category: "Social Media",
        tags: ["Social Media", "Platform Selection", "Reach", "Branding"],
        author: { name: "Marcus Thorne", role: "Growth Strategist", avatarUrl: "/wp-content/uploads/2024/11/author-3-2.webp" },
        featuredImage: "/wp-content/uploads/2024/11/post-4-2.webp",
        excerpt: "Stop wasting budget everywhere: discover strategic platform selection criteria to maximize organic reach and customer acquisition.",
        content: `## Platform Alignment with Customer Intent\n\nB2B enterprises thrive on LinkedIn and Google Search. Consumer lifestyle products capture explosive scale on TikTok and Instagram. Match your production capabilities to platform strengths.`,
        readTime: "4 min read",
        isFeatured: false,
        status: "published",
        publishedAt: new Date("2024-11-07").toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const blog of blogs) {
      await setDoc(doc(db, "blogs", blog.id), blog);
    }

    // 8. Seed Testimonials
    const testimonials: CmsTestimonial[] = [
      {
        id: "test-1",
        clientName: "David Vance",
        clientRole: "CEO & Founder",
        company: "Aura Apparel",
        quote: "Brandexa transformed our entire online revenue engine. The performance gains and conversion rate jumps were felt in our balance sheet within 30 days.",
        rating: 5,
        avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp",
        isFeatured: true,
        orderIndex: 0,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "test-2",
        clientName: "Sarah Jenkins",
        clientRole: "Head of Marketing",
        company: "Synthex Bio",
        quote: "The visual identity and interactive website they built allowed us to close our Series B ahead of schedule. Truly visionary work.",
        rating: 5,
        avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp",
        isFeatured: true,
        orderIndex: 1,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "test-3",
        clientName: "Michael Chang",
        clientRole: "Managing Director",
        company: "Nova Energy",
        quote: "Our CPA decreased by 44% while lead quality reached an all-time high. Their performance creative team is best in class.",
        rating: 5,
        avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp",
        isFeatured: true,
        orderIndex: 2,
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const test of testimonials) {
      await setDoc(doc(db, "testimonials", test.id), test);
    }

    // 9. Seed Team Members
    const team: CmsTeamMember[] = [
      {
        id: "alex-rivera",
        name: "Alex Rivera",
        role: "Head of Engineering",
        bio: "Full-stack architect with 10+ years specializing in high-performance web applications and headless e-commerce.",
        avatarUrl: "/wp-content/uploads/2024/11/team-1-2.webp",
        socialLinks: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
        orderIndex: 0,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "elena-rostova",
        name: "Elena Rostova",
        role: "Creative Director",
        bio: "Award-winning brand designer passionate about futuristic typography, 3D motion, and minimalist aesthetics.",
        avatarUrl: "/wp-content/uploads/2024/11/team-2-2.webp",
        socialLinks: { linkedin: "https://linkedin.com" },
        orderIndex: 1,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "marcus-thorne",
        name: "Marcus Thorne",
        role: "Chief Growth Strategist",
        bio: "Performance marketer who has deployed over $30M in profitable paid ad spend across Meta, Google, and TikTok.",
        avatarUrl: "/wp-content/uploads/2024/11/team-3-2.webp",
        socialLinks: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
        orderIndex: 2,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "sophia-alvarez",
        name: "Sophia Alvarez",
        role: "Senior UX/UI Designer",
        bio: "Specializing in micro-interactions, conversion optimization, and design systems for enterprise platforms.",
        avatarUrl: "/wp-content/uploads/2024/11/team-4-2.webp",
        socialLinks: { linkedin: "https://linkedin.com" },
        orderIndex: 3,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const member of team) {
      await setDoc(doc(db, "team", member.id), member);
    }

    // 10. Seed FAQs
    const faqs: CmsFaq[] = [
      {
        id: "faq-1",
        question: "How quickly can Brandexa start on a new project?",
        answer: "Typically we initiate discovery within 3-5 business days of contract execution and project kickoff.",
        category: "General",
        orderIndex: 0,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "faq-2",
        question: "What is your typical engagement model?",
        answer: "We offer both dedicated monthly growth retainers (recommended for continuous optimization) and fixed-scope milestone sprints.",
        category: "Pricing & Billing",
        orderIndex: 1,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "faq-3",
        question: "Do you build custom web applications or only websites?",
        answer: "We build both high-converting marketing sites and complex full-stack web applications, SaaS dashboards, and e-commerce platforms using Next.js, React, and Firebase.",
        category: "Capabilities",
        orderIndex: 2,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "faq-4",
        question: "Do you handle creative ad production in-house?",
        answer: "Yes, our team handles scriptwriting, filming, 3D motion design, editing, and sound design completely in-house.",
        category: "Capabilities",
        orderIndex: 3,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const faq of faqs) {
      await setDoc(doc(db, "faqs", faq.id), faq);
    }

    // 11. Seed Pricing Plans
    const pricingPlans: CmsPricingPlan[] = [
      {
        id: "startup",
        planName: "Startup Growth",
        price: "$2,950",
        billingPeriod: "per month",
        description: "Ideal for early-stage brands seeking product-market fit and foundational traction.",
        features: [
          "Complete Brand Identity Kit",
          "High-Converting Landing Page",
          "Ad Account Setup & Tracking",
          "Weekly Performance Reporting",
          "Dedicated Slack Channel"
        ],
        isFeatured: false,
        ctaText: "Get Started",
        ctaUrl: "#book-consultation",
        orderIndex: 0,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "scaling",
        planName: "Scale & Dominate",
        price: "$5,850",
        billingPeriod: "per month",
        description: "For scaling brands looking to aggressively capture market share across omnichannel funnels.",
        features: [
          "Custom Headless Next.js Web Platform",
          "Omnichannel Paid Ads Management (Meta + Google)",
          "8x Monthly High-Production Video Ads",
          "Conversion Rate Optimization (CRO) Sprints",
          "Bi-Weekly Strategy Calls & 24/7 Priority Support"
        ],
        isFeatured: true,
        ctaText: "Scale Now",
        ctaUrl: "#book-consultation",
        orderIndex: 1,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "enterprise",
        planName: "Enterprise Custom",
        price: "$9,500+",
        billingPeriod: "per month",
        description: "Full-service dedicated growth team, bespoke engineering, and commercial video production.",
        features: [
          "Bespoke SaaS / Web Application Engineering",
          "Dedicated Creative & Growth Director",
          "Unlimited Performance Ad Iterations",
          "Custom API & CRM Integrations",
          "Guaranteed SLA & Executive Access"
        ],
        isFeatured: false,
        ctaText: "Contact Sales",
        ctaUrl: "#book-consultation",
        orderIndex: 2,
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const plan of pricingPlans) {
      await setDoc(doc(db, "pricing", plan.id), plan);
    }

    return { seeded: true, message: "Successfully seeded complete Brandexa CMS content into Firestore!" };
  } catch (error: any) {
    console.error("Error during database seed:", error);
    return { seeded: false, message: `Error during seed: ${error.message}` };
  }
}
