import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env file directly
const envPath = path.join(__dirname, "..", ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx !== -1) {
        const key = trimmed.substring(0, eqIdx).trim();
        let val = trimmed.substring(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    }
  });
}

const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : undefined;

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID || "brandexa-main",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey,
  }),
});

const db = getFirestore(app);

async function runSeed() {
  console.log("🚀 Pushing initial Brandexa CMS data to Cloud Firestore...");

  // 1. Global Settings
  await db.collection("settings").doc("global").set({
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
  });
  console.log("✓ Global settings pushed.");

  // 2. Media Folders
  const folders = [
    { id: "brand-assets", name: "Brand Assets", slug: "brand-assets", assetCount: 8, createdAt: new Date().toISOString() },
    { id: "website", name: "Website", slug: "website", assetCount: 24, createdAt: new Date().toISOString() },
    { id: "blog", name: "Blog Posts", slug: "blog", assetCount: 6, createdAt: new Date().toISOString() },
    { id: "projects", name: "Projects & Portfolio", slug: "projects", assetCount: 9, createdAt: new Date().toISOString() },
    { id: "team", name: "Team Members", slug: "team", assetCount: 8, createdAt: new Date().toISOString() },
    { id: "testimonials", name: "Testimonials", slug: "testimonials", assetCount: 5, createdAt: new Date().toISOString() },
  ];
  for (const f of folders) {
    await db.collection("media_folders").doc(f.id).set(f);
  }
  console.log("✓ Media folders pushed.");

  // 3. Pages & Home Sections
  const pages = [
    { id: "home", title: "Homepage", route: "/", status: "published", sectionsOrder: ["hero", "services", "stats", "our-work", "testimonials", "latest-blogs", "cta"], lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "about", title: "About Us", route: "/about", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "services", title: "Services Catalog", route: "/services", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "our-work", title: "Portfolio & Case Studies", route: "/our-work", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "blogs", title: "Blog & Insights", route: "/blogs", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "pricing", title: "Pricing & Packages", route: "/pricing", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "team", title: "Team Directory", route: "/team", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "faqs", title: "Frequently Asked Questions", route: "/faqs", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "testimonials", title: "Client Testimonials", route: "/testimonials", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "contact", title: "Contact Us", route: "/contact", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "ads", title: "Paid Advertising", route: "/ads", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "growth", title: "Growth Marketing", route: "/growth", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
    { id: "privacy-policy", title: "Privacy Policy", route: "/privacy-policy", status: "published", lastUpdated: new Date().toISOString(), updatedBy: "System" },
  ];
  for (const p of pages) {
    await db.collection("pages").doc(p.id).set(p);
  }

  // Home Sections
  const homeSections = [
    {
      id: "hero",
      type: "hero",
      title: "Hero Banner",
      orderIndex: 0,
      isVisible: true,
      content: {
        eyebrow: "DIGITAL GROWTH & CREATIVE STUDIO",
        animatedWords: ["Growth", "Leads", "Revenue", "Scale"],
        headingSuffix: "That Generates Real Revenue",
        description: "We combine high-performance design, custom development, and conversion psychology to help modern brands dominate their markets.",
        primaryCtaText: "Book Free Consultation",
        primaryCtaUrl: "#book-consultation",
        secondaryCtaText: "Explore Our Work",
        secondaryCtaUrl: "/our-work",
        backgroundMedia: "/wp-content/uploads/2024/11/hero-bg-2.webp",
      },
    },
    {
      id: "services",
      type: "services",
      title: "Services Grid",
      orderIndex: 1,
      isVisible: true,
      content: {
        sectionTitle: "OUR CORE CAPABILITIES",
        heading: "Strategic Services Built for Market Leaders",
        description: "From custom full-stack web applications to multi-channel customer acquisition funnels.",
      },
    },
    {
      id: "stats",
      type: "stats",
      title: "Performance Statistics",
      orderIndex: 2,
      isVisible: true,
      content: {
        stats: [
          { id: "s1", value: "150+", label: "Completed Projects" },
          { id: "s2", value: "98%", label: "Client Satisfaction" },
          { id: "s3", value: "3.4X", label: "Average Client ROI" },
          { id: "s4", value: "24/7", label: "Continuous Support" },
        ],
      },
    },
    {
      id: "our-work",
      type: "our-work",
      title: "Featured Case Studies",
      orderIndex: 3,
      isVisible: true,
      content: {
        sectionTitle: "PROVEN RESULTS",
        heading: "Transforming Brands Through Precision Design & Engineering",
        seeMoreText: "See More Works",
        seeMoreUrl: "/our-work",
      },
    },
    {
      id: "testimonials",
      type: "testimonials",
      title: "Client Testimonials",
      orderIndex: 4,
      isVisible: true,
      content: {
        sectionTitle: "CLIENT VOICES",
        heading: "What Founders & Marketing Executives Say About Us",
      },
    },
    {
      id: "latest-blogs",
      type: "latest-blogs",
      title: "Latest Blog Insights",
      orderIndex: 5,
      isVisible: true,
      content: {
        sectionTitle: "INSIGHTS & THOUGHT LEADERSHIP",
        heading: "Strategies, Trends & Architecture for Modern Growth",
        seeMoreText: "See More Blogs",
        seeMoreUrl: "/blogs",
      },
    },
    {
      id: "cta",
      type: "cta",
      title: "Final Call to Action",
      orderIndex: 6,
      isVisible: true,
      content: {
        heading: "Ready to accelerate your brand's digital growth?",
        description: "Let's engineer a high-converting web presence and acquisition strategy tailored to your business goals.",
        buttonText: "Schedule Strategy Call",
        buttonUrl: "#book-consultation",
      },
    },
  ];
  for (const s of homeSections) {
    await db.collection("pages").doc("home").collection("sections").doc(s.id).set(s);
  }
  console.log("✓ Pages & Homepage sections pushed.");

  // 4. Services (10)
  const services = [
    { id: "branding-and-identity", title: "Branding & Identity", slug: "branding-and-identity", shortDescription: "Distinctive brand positioning, design systems, and identity assets that build market reverence.", description: "We craft unmistakable brand identities that align visual excellence with strategic market positioning.", icon: "/wp-content/uploads/2024/11/icon-service-1-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Brand Strategy & Positioning", "Visual Identity Systems", "Brand Guidelines", "Typography & Color Palettes"], isPublished: true, orderIndex: 0, updatedAt: new Date().toISOString() },
    { id: "ux-ui-design", title: "UX/UI Design", slug: "ux-ui-design", shortDescription: "User-centric interfaces engineered for frictionless engagement and peak conversion rates.", description: "We design intuitive digital products, SaaS dashboards, and e-commerce experiences that delight users and drive conversions.", icon: "/wp-content/uploads/2024/11/icon-service-2-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Wireframing & Prototyping", "Design Systems in Figma", "Conversion Rate Optimization", "Mobile-First UX Architecture"], isPublished: true, orderIndex: 1, updatedAt: new Date().toISOString() },
    { id: "digital-marketing", title: "Digital Marketing", slug: "digital-marketing", shortDescription: "Full-funnel digital strategy, paid search, social campaigns, and performance tracking.", description: "Engineered acquisition campaigns that scale customer volume while maintaining healthy unit economics.", icon: "/wp-content/uploads/2024/11/icon-service-3-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Performance Marketing", "Meta Ads Management", "Google Ads & PPC", "Conversion Funnel Optimization"], isPublished: true, orderIndex: 2, updatedAt: new Date().toISOString() },
    { id: "e-commerce-solutions", title: "E-Commerce Solutions", slug: "e-commerce-solutions", shortDescription: "High-performance headless and customized online stores built for scale and retention.", description: "Modern e-commerce infrastructure designed to maximize average order value and checkout completion.", icon: "/wp-content/uploads/2024/11/icon-service-4-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Headless E-Commerce", "Shopify & Custom Storefronts", "Payment Gateway Integrations", "Subscription Models"], isPublished: true, orderIndex: 3, updatedAt: new Date().toISOString() },
    { id: "content-creation", title: "Content Creation", slug: "content-creation", shortDescription: "Compelling storytelling, copywriting, and visual media that establish thought leadership.", description: "Strategic content production that builds brand authority and drives organic inbound leads.", icon: "/wp-content/uploads/2024/11/icon-service-5-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["SEO Copywriting", "Technical Whitepapers", "Social Creative Production", "Brand Editorial Guidelines"], isPublished: true, orderIndex: 4, updatedAt: new Date().toISOString() },
    { id: "video-editing", title: "Video Production & Editing", slug: "video-editing", shortDescription: "Cinematic commercial video, product reels, and short-form assets that stop the scroll.", description: "High-impact video production engineered for digital campaigns and social amplification.", icon: "/wp-content/uploads/2024/11/icon-service-6-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Commercial Video Production", "Motion Graphics & 3D", "Social Video Ads (Reels/TikTok)", "Product Showcases"], isPublished: true, orderIndex: 5, updatedAt: new Date().toISOString() },
    { id: "google-ads", title: "Google Ads Management", slug: "google-ads", shortDescription: "High-intent search, display, and YouTube ad campaigns optimized for maximum return on ad spend.", description: "Target customers actively searching for your solutions with high-precision Google Search and Shopping campaigns.", icon: "/wp-content/uploads/2024/11/icon-service-1-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Search Engine Marketing", "Performance Max Campaigns", "Negative Keyword Sculpting", "Conversion Tracking Architecture"], isPublished: true, orderIndex: 6, updatedAt: new Date().toISOString() },
    { id: "social-media-ads", title: "Social Media Ads", slug: "social-media-ads", shortDescription: "Scalable Meta, TikTok, and LinkedIn performance funnels targeting ideal customer profiles.", description: "Data-driven paid social acquisition systems with continuous creative testing.", icon: "/wp-content/uploads/2024/11/icon-service-2-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Meta Ads (FB/IG)", "TikTok Creative Strategy", "LinkedIn B2B Lead Gen", "Audience Segmentation"], isPublished: true, orderIndex: 7, updatedAt: new Date().toISOString() },
    { id: "social-media-marketing", title: "Organic Social Media Marketing", slug: "social-media-marketing", shortDescription: "Community building, organic growth strategies, and daily brand engagement.", description: "Transform social followers into dedicated brand advocates with consistent, high-value content cadence.", icon: "/wp-content/uploads/2024/11/icon-service-3-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["Channel Strategy & Management", "Community Moderation", "Influencer Partnerships", "Analytics & Reporting"], isPublished: true, orderIndex: 8, updatedAt: new Date().toISOString() },
    { id: "creative-content-production", title: "Creative Content Production", slug: "creative-content-production", shortDescription: "3D visualization, studio photography, and bespoke graphic design assets.", description: "End-to-end creative studio producing bespoke digital assets for global launch campaigns.", icon: "/wp-content/uploads/2024/11/icon-service-4-1.svg", heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg", capabilities: ["3D Product Rendering", "Studio Commercial Photography", "Brand Asset Kits", "Motion Graphics"], isPublished: true, orderIndex: 9, updatedAt: new Date().toISOString() },
  ];
  for (const s of services) {
    await db.collection("services").doc(s.id).set(s);
  }
  console.log("✓ Services pushed.");

  // 5. Projects (3)
  const projects = [
    { id: "dynamic-e-commerce-platform", title: "Dynamic E-Commerce Platform", clientName: "Aura Apparel", slug: "dynamic-e-commerce-platform", categories: ["Branding & Identity", "Web Design"], heroImage: "/wp-content/uploads/2024/11/project-1-2.webp", metrics: [{ id: "m1", label: "Conversion Rate Increase", value: "+184%" }, { id: "m2", label: "Page Load Speed", value: "0.4s" }], challenge: "Legacy monolithic platform with high drop-off rates and slow mobile page loads.", solution: "Architected a custom headless Next.js e-commerce application with dynamic checkout optimizations.", isFeatured: true, orderIndex: 0, status: "published", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: "innovative-identity-design", title: "Innovative Identity Design", clientName: "Vortex Labs", slug: "innovative-identity-design", categories: ["Branding & Identity", "Creative Direction"], heroImage: "/wp-content/uploads/2024/11/project-2-3.webp", metrics: [{ id: "m1", label: "Brand Recall Lift", value: "3.2X" }, { id: "m2", label: "Enterprise Inquiries", value: "+240%" }], challenge: "Generic AI positioning lacked distinct market differentiation.", solution: "Designed an aggressive, future-forward visual identity system with interactive WebGL brand guidelines.", isFeatured: true, orderIndex: 1, status: "published", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: "dynamic-digital-campaign", title: "Dynamic Digital Campaign", clientName: "Pulse Health", slug: "dynamic-digital-campaign", categories: ["Digital Marketing", "Paid Ads"], heroImage: "/wp-content/uploads/2024/11/project-3-2.webp", metrics: [{ id: "m1", label: "ROAS (Return on Ad Spend)", value: "5.8X" }, { id: "m2", label: "Cost Per Acquisition", value: "-42%" }], challenge: "Stagnant ad fatigue and skyrocketing customer acquisition costs.", solution: "Deployed rapid creative testing sprints across Meta and TikTok with segmented landers.", isFeatured: true, orderIndex: 2, status: "published", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];
  for (const pr of projects) {
    await db.collection("projects").doc(pr.id).set(pr);
  }
  console.log("✓ Projects pushed.");

  // 6. Blogs (3)
  const blogs = [
    { id: "ui-ux-design-principles", title: "UI/UX Design Principles for Modern Web Apps", slug: "ui-ux-design-principles", category: "UI/UX Design", tags: ["Design", "UI/UX", "Web"], author: { name: "Alex Rivera", role: "Head of Design", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" }, featuredImage: "/wp-content/uploads/2024/11/post-1-3.webp", excerpt: "Explore the core design principles that turn first-time visitors into high-LTV customers through intuitive UX.", content: "## Core Principles of Modern UX\n\nDesigning for digital conversion requires blending clarity, velocity, and visual hierarchy...", readTime: "5 min read", isFeatured: true, status: "published", publishedAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: "mobile-optimized-website-needs", title: "Why Every Growing Brand Needs a Mobile-First Experience", slug: "mobile-optimized-website-needs", category: "Web Development", tags: ["Mobile", "Frontend", "Performance"], author: { name: "Marcus Vance", role: "VP of Engineering", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" }, featuredImage: "/wp-content/uploads/2024/11/post-2-3.webp", excerpt: "Over 70% of transactions occur on mobile devices. Learn how to optimize your storefront for instant checkout.", content: "## The Mobile Imperative\n\nMobile users expect sub-second interactions and touch-friendly navigation...", readTime: "4 min read", isFeatured: true, status: "published", publishedAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: "web-development-essentials", title: "Web Development Essentials for 2026", slug: "web-development-essentials", category: "Web Development", tags: ["Next.js", "Architecture", "Engineering"], author: { name: "Alex Rivera", role: "Lead Architect", avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp" }, featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp", excerpt: "From server components to edge caching, here are the architectural patterns every modern agency relies on.", content: "## Modern Web Architecture\n\nSpeed is the ultimate feature. Building on modern frameworks ensures long-term scalability...", readTime: "6 min read", isFeatured: true, status: "published", publishedAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];
  for (const b of blogs) {
    await db.collection("blogs").doc(b.id).set(b);
  }
  console.log("✓ Blogs pushed.");

  // 7. Testimonials (3)
  const testimonials = [
    { id: "t1", clientName: "Sarah Jenkins", clientRole: "Founder & CEO", company: "Aura Apparel", quote: "Brandexa transformed our entire digital ecosystem. Our e-commerce conversion rate jumped by 184% within 60 days of launch.", rating: 5, avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp", isFeatured: true, orderIndex: 0, updatedAt: new Date().toISOString() },
    { id: "t2", clientName: "David Chen", clientRole: "Chief Marketing Officer", company: "Vortex Labs", quote: "The level of engineering and aesthetic precision is unmatched. They don't just build websites; they build revenue engines.", rating: 5, avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp", isFeatured: true, orderIndex: 1, updatedAt: new Date().toISOString() },
    { id: "t3", clientName: "Elena Rostova", clientRole: "VP of Growth", company: "Pulse Health", quote: "Our paid ad ROAS went from 2.1X to 5.8X. The creative assets and high-converting landing pages made all the difference.", rating: 5, avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp", isFeatured: true, orderIndex: 2, updatedAt: new Date().toISOString() },
  ];
  for (const t of testimonials) {
    await db.collection("testimonials").doc(t.id).set(t);
  }
  console.log("✓ Testimonials pushed.");

  // 8. Team (4)
  const team = [
    { id: "alex-rivera", name: "Alex Rivera", role: "Founder & Creative Director", bio: "10+ years directing digital strategy and brand transformation for global market leaders.", avatarUrl: "/wp-content/uploads/2024/11/team-1-2.webp", socialLinks: { linkedin: "https://linkedin.com" }, orderIndex: 0, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "marcus-vance", name: "Marcus Vance", role: "Head of Engineering", bio: "Full-stack architect specializing in high-velocity Next.js and cloud infrastructure.", avatarUrl: "/wp-content/uploads/2024/11/team-2-2.webp", socialLinks: { linkedin: "https://linkedin.com" }, orderIndex: 1, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "elena-morales", name: "Elena Morales", role: "Growth & Media Director", bio: "Data-driven acquisition lead overseeing $10M+ in cumulative ad spend across Meta & Google.", avatarUrl: "/wp-content/uploads/2024/11/team-3-2.webp", socialLinks: { linkedin: "https://linkedin.com" }, orderIndex: 2, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "sophia-taylor", name: "Sophia Taylor", role: "Lead UX/UI Designer", bio: "Obsessed with micro-interactions, conversion psychology, and minimalist design systems.", avatarUrl: "/wp-content/uploads/2024/11/team-4-2.webp", socialLinks: { linkedin: "https://linkedin.com" }, orderIndex: 3, isVisible: true, updatedAt: new Date().toISOString() },
  ];
  for (const tm of team) {
    await db.collection("team").doc(tm.id).set(tm);
  }
  console.log("✓ Team members pushed.");

  // 9. Pricing (3)
  const pricing = [
    { id: "starter", planName: "Growth Launch", price: "$2,800", billingPeriod: "per month", description: "Essential branding, custom Next.js landing pages, and conversion foundation for emerging brands.", features: ["Custom Brand Identity Kit", "High-Converting Next.js Landing Page", "Full On-Page SEO Architecture", "Standard Analytics & Conversion Setup"], isFeatured: false, ctaText: "Get Started", ctaUrl: "#book-consultation", orderIndex: 0, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "growth-scale", planName: "Market Dominance", price: "$5,400", billingPeriod: "per month", description: "Comprehensive full-funnel digital transformation, ad management, and continuous optimization.", features: ["Complete Multi-Page Website / Web App", "Meta & Google Ads Management ($20k+ spend)", "Dedicated Creative Studio & Video Production", "Weekly Growth & CRO Sprints", "Slack Channel & Priority Support"], isFeatured: true, ctaText: "Claim Your Growth Slot", ctaUrl: "#book-consultation", orderIndex: 1, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "enterprise", planName: "Enterprise Custom", price: "$9,500+", billingPeriod: "per month", description: "Full-service dedicated growth team, bespoke engineering, and commercial video production.", features: ["Bespoke SaaS / Web Application Engineering", "Dedicated Creative & Growth Director", "Unlimited Performance Ad Iterations", "Custom API & CRM Integrations", "Guaranteed SLA & Executive Access"], isFeatured: false, ctaText: "Contact Sales", ctaUrl: "#book-consultation", orderIndex: 2, isVisible: true, updatedAt: new Date().toISOString() },
  ];
  for (const pr of pricing) {
    await db.collection("pricing").doc(pr.id).set(pr);
  }
  console.log("✓ Pricing plans pushed.");

  // 10. FAQs (4)
  const faqs = [
    { id: "f1", question: "How does Brandexa differ from traditional marketing agencies?", answer: "Unlike traditional agencies that silo design from performance, Brandexa integrates world-class creative engineering with direct-response acquisition funnels to deliver quantifiable revenue outcomes.", category: "General", orderIndex: 0, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "f2", question: "What is the typical turnaround time for a custom web build?", answer: "Most custom high-performance web platforms and landing systems are delivered within 2 to 4 weeks, structured through iterative weekly sprints.", category: "Capabilities", orderIndex: 1, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "f3", question: "Do we retain full ownership of all source code and creative assets?", answer: "Yes. 100% of all intellectual property, Figma design files, codebase repositories, and media assets belong to your organization upon completion.", category: "Pricing & Billing", orderIndex: 2, isVisible: true, updatedAt: new Date().toISOString() },
    { id: "f4", question: "How do we get started?", answer: "Book a complimentary strategy consultation through our booking portal, and our leadership team will review your current infrastructure and outline a tailored roadmap within 24 hours.", category: "General", orderIndex: 3, isVisible: true, updatedAt: new Date().toISOString() },
  ];
  for (const f of faqs) {
    await db.collection("faqs").doc(f.id).set(f);
  }
  console.log("✓ FAQs pushed.");

  // 11. Initial Admin User
  await db.collection("admins").doc("superadmin").set({
    uid: "superadmin",
    name: "Brandexa Super Admin",
    email: "admin@brandexagrowth.com",
    role: "super_admin",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  console.log("✓ Super Admin initialized.");

  console.log("🎉 All Brandexa CMS collections successfully pushed to Firestore!");
  process.exit(0);
}

runSeed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
