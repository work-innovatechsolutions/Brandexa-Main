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
  facebookResults?: string[];
  instagramResults?: string[];
  resultsSections?: {
    title: string;
    items: string[];
  }[];
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

const workItems: WorkItem[] = [
  {
    title: "Scoogie Events",
    category: "Branding",
    sectors: ["Local Business", "Service Business"],
    image: "/wp-content/uploads/2024/11/project-1-2.webp",
    caseStudy: {
      background:
        "Scoogie Events needed a sharper identity system and a clearer digital presence for local event promotion, sponsor visibility, and recurring community campaigns. As a premier event organizer in their region, they faced growing competition from larger national event brands and needed their local grassroots community energy to shine through in every touchpoint. They wanted to attract a new generation of active runners while maintaining strong ties with their long-term local participants and regional business sponsors.",
      services: ["Branding & Identity", "Campaign Creative"],
      challenge: [
        "Visual Fragmentations: The existing brand assets felt disjointed across different communication channels, leading to a lack of cohesion between print flyers and social media campaigns which confused participants.",
        "Audience Engagement Friction: Event registration landing pages suffered from high drop-off rates due to complex navigation structures, lack of mobile optimization, and unclear pricing hierarchies.",
        "Traditional Channel Decay: Traditional local advertising channels were yielding decreasing returns, requiring a swift transition to highly optimized, visually engaging digital campaign assets.",
      ],
      solution: [
        "Comprehensive Brand System: Developed a structured branding and identity system with distinct guidelines, cohesive typography, and reusable digital vector assets.",
        "Modular Social Templates: Created a flexible, multi-channel template system allowing the internal team to quickly deploy consistent visual designs across Instagram and Facebook.",
        "Registration Conversion Funnel: Redesigned the event landing page flow to minimize friction, adding prominent call-to-actions, clear schedule highlights, and integrated sponsor visibility blocks.",
      ],
      testimonial: {
        quote:
          "The new brand system made our campaigns feel more consistent and easier to launch. It completely refreshed how we communicate with our community and sponsors alike, driving higher registration numbers than ever.",
        author: "Brandexa Client",
        company: "Scoogie Events",
      },
      resultCards: [
        { value: "3.2x", label: "Faster campaign rollout" },
        { value: "42%", label: "Lift in social engagement" },
        { value: "18", label: "Reusable creative templates" },
      ],
      facebookResults: ["Engagement Rate: +42% lift in weekly post interactions through consistent visual content", "Event Responses: +31% growth in active RSVPs for seasonal runs", "Page Visits: +22% organic growth in daily views via local shares"],
      instagramResults: ["Reach Expansion: +28% increase in non-follower impressions using optimized hashtags", "Profile Actions: +19% increase in direct link-in-bio clicks", "Story Interactions: +35% lift in poll responses and sticker taps"],
    },
  },
  {
    title: "Wallhogs",
    category: "Website",
    sectors: ["E-Commerce", "Social Media Management"],
    image: "/wp-content/uploads/2024/11/project-3-2.webp",
    caseStudy: {
      background:
        "Wallhogs is a U.S.-based custom wall decor company offering personalized wall decals, murals, and art prints. With a diverse customer base ranging from homeowners to small business owners and interior decorators, Wallhogs wanted to boost their brand visibility and engagement across Facebook and Instagram to stay top-of-mind and drive more qualified traffic to their website. They needed an agency partner capable of translating their highly customizable product catalog into engaging, lifestyle-focused social content that builds buying intent.",
      services: ["Social Media Management"],
      challenge: [
        "Low Engagement Stagnation: While they possessed a quality product catalog, their organic social accounts had stagnant engagement rates and low organic visibility.",
        "Visual Context Barriers: Decals and custom prints require visual, context-rich presentation to demonstrate scale and quality, which was not being conveyed in their previous social posts.",
        "E-Commerce Conversion Gaps: Social media traffic did not convert into buyers because post descriptions failed to link directly to custom customizers or specify size options.",
      ],
      solution: [
        "Visual Storytelling Strategy: Formulated a distinct visual direction featuring user-generated content, customer home tours, seasonal spotlights, and step-by-step installation guides.",
        "Active Channel Moderation: Deployed active daily channel management, caption optimization, and hashtag research tailored to home decor and interior design enthusiasts.",
        "Streamlined Conversion Paths: Implemented direct product tagging, shoppable feeds, and optimized ad link structures leading directly to configurator pages.",
      ],
      testimonial: {
        quote:
          "Once we were assigned another rep, Clainee, we've received some solid results for the few months she has been assigned. The creativity and communication have been outstanding and we finally see real growth.",
        author: "Paul Conklin",
        company: "Wallhogs",
      },
      resultCards: [
        { value: "56.9K", label: "Views on Facebook" },
        { value: "31.8K", label: "Reach on Facebook" },
        { value: "93", label: "Content Interactions" },
      ],
      facebookResults: [
        "Views: 56.9K total views over a 4-month period",
        "Reach: 31.8K reach (+19.9% improvement)",
        "Content Interactions: 77.8K total interactions (+3.8%)",
        "Link Clicks: 1.2K clicks (+100% growth)",
        "Website Visits: 624 sessions (+122.9%)",
        "Page Follows: +8 page follows (+300%)",
      ],
      instagramResults: [
        "Views: 7.5K views (+13.5%)",
        "Reach: 4.7K reach (+33.3%)",
        "Content Interactions: 16 core actions (+1.5K%)",
        "Link Clicks: 117 clicks (+100%)",
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
        "Mission Hills, a premium golf and country club, needed comprehensive campaign support that could make seasonal membership offers, banquet facilities, and guest packages easier to discover online. To attract a younger demographic of players while retaining their long-term prestige, they needed to bridge traditional luxury marketing with modern digital target-audience funnels.",
      services: ["Campaign Strategy", "Social Media Ads"],
      challenge: [
        "Audience Segmentation gaps: The target market was highly fragmented, spanning casual golfers, tournament organizers, and family membership prospects, leading to ad budget waste.",
        "Acquisition Cost Inflation: Previous search and social advertising efforts were highly expensive with low quality control over incoming membership requests.",
        "Visual Incoherence: Seasonal campaigns lacked a cohesive creative layout, reducing brand equity across digital ads.",
      ],
      solution: [
        "Unified Campaign Playbook: Developed a comprehensive seasonal marketing calendar matching high-intent membership periods.",
        "Paid Social Advertising Funnel: Designed and executed highly targeted Meta advertising campaigns, separating local family audiences from corporate event planners.",
        "Creative Consistency Guidelines: Introduced a clean, premium visual design system for all paid placements and landing pages.",
      ],
      testimonial: {
        quote: "The campaign structure gave our team more clarity and better weekly momentum. It lowered our acquisition costs dramatically and simplified our message.",
        author: "Brandexa Client",
        company: "Mission Hills",
      },
      resultCards: [
        { value: "48%", label: "Increase in campaign reach" },
        { value: "2.1x", label: "Higher landing-page visits" },
        { value: "34%", label: "Lower cost per inquiry" },
      ],
      facebookResults: ["Reach: +48% increase in local geo-targeted impressions", "Link Clicks: +62% boost in landing page traffic", "Inquiries: +29% growth in tournament bookings"],
      instagramResults: ["Profile Visits: +41% increase in page discoverability", "Story Taps: +33% increase in sticker click-throughs", "Post Saves: +18% lift in community interaction"],
    },
  },
  {
    title: "Future Leaders",
    category: "Content",
    sectors: ["Education", "Content System"],
    image: "/wp-content/uploads/2024/11/project-4-2.webp",
    caseStudy: {
      background:
        "Future Leaders, an educational organization providing specialized academic programs and student counseling, needed a cohesive content system that could communicate their curriculum, student achievements, and alumni outcomes. Their primary goal was to build long-term trust with parent demographics while remaining relatable and inspiring to prospective students.",
      services: ["Content Creation", "Short Video Marketing"],
      challenge: [
        "Inconsistent Storytelling: Program updates were useful but lacked a repeatable, structured framework that could be easily consumed by parents on social channels.",
        "Resource Limitations: The internal team struggled to maintain a consistent publishing schedule while manually designing ad-hoc graphics for every announcement.",
        "Low Video View Times: Existing video updates were long and dry, failing to capture attention on fast-moving social feeds.",
      ],
      solution: [
        "Repeatable Content Pillars: Established distinct content buckets focusing on Student Spotlights, Educational Insights, and Program Achievements.",
        "Short-Form Video System: Launched a TikTok and Instagram Reels publishing plan utilizing student interviews, teacher tips, and campus highlights.",
        "Design Asset Kits: Built a modular Canva and Figma library enabling their team to quickly assemble on-brand announcements.",
      ],
      testimonial: {
        quote: "The content finally feels organized and easy for our team to keep using. It has significantly improved how families interact with our school.",
        author: "Brandexa Client",
        company: "Future Leaders",
      },
      resultCards: [
        { value: "24", label: "Reusable content formats" },
        { value: "39%", label: "Increase in engagement" },
        { value: "3x", label: "More consistent publishing" },
      ],
      facebookResults: ["Engagement Rate: +39% growth in average post interaction", "Reach Expansion: +26% lift in page views", "Link Clicks: +22% increase in admissions page traffic"],
      instagramResults: ["Reels Performance: +51% increase in video views", "Profile Interactions: +24% growth in direct inquiries", "Saves: +17% increase in informative content saves"],
    },
  },
  {
    title: "Bright Dental",
    category: "SEO",
    sectors: ["Healthcare", "Search Growth"],
    image: "/wp-content/uploads/2024/11/project-5-2.webp",
    caseStudy: {
      background:
        "Bright Dental wanted stronger local search visibility and clearer paths for prospective patients to discover their services and request appointments. Operating in a highly competitive suburban area, they faced stiff competition from larger dental networks and needed to stand out on local map packs and search engine result pages.",
      services: ["SEO", "Local Search Optimization"],
      challenge: [
        "Poor Local Rankings: Key service pages were not appearing on the first page of search results for localized dental queries.",
        "Low Appointment Conversion: Website visitors were leaving without booking due to a complex, non-mobile-friendly contact flow.",
        "Fragmented Reviews: Lack of structured Google Business Profile optimization resulted in low visibility on map queries.",
      ],
      solution: [
        "On-Page Optimization & Content Hierarchy: Restructured all dental service pages around local keyword intent and patient questions, improving header tag layouts.",
        "Google Business Profile Optimization: Executed local directory cleanup, citation building, and review acquisition campaigns.",
        "Conversion Rate Optimization (CRO): Integrated a simplified online appointment booking module with prominent calls-to-actions on mobile.",
      ],
      testimonial: {
        quote: "Search leads became easier to understand, our pages started working harder, and our appointment calendars have never been fuller.",
        author: "Brandexa Client",
        company: "Bright Dental",
      },
      resultCards: [
        { value: "64%", label: "Increase in local impressions" },
        { value: "27%", label: "More service-page visits" },
        { value: "19%", label: "Lift in appointment actions" },
      ],
      facebookResults: ["Page Visits: +19% increase in referral traffic", "Local Clicks: +21% growth in local business info views", "Phone Calls: +14% lift in click-to-call actions"],
      instagramResults: ["Profile Visits: +22% growth in organic profile views", "Directions Clicks: +15% increase in office map directions", "Reach: +18% increase in community awareness"],
    },
  },
  {
    title: "Urban Threads",
    category: "E-Commerce",
    sectors: ["Apparel / Fashion", "Storefront Design"],
    image: "/wp-content/uploads/2024/11/project-2-2.webp",
    caseStudy: {
      background:
        "Urban Threads needed a cleaner storefront experience for product discovery, collection browsing, and style-led campaign moments. As an independent fashion boutique competing with fast-fashion giants, they needed their online storefront to feel premium, visually cohesive, and extremely easy to navigate on mobile devices.",
      services: ["E-Commerce", "Storefront Design"],
      challenge: [
        "Friction-Heavy Checkout: The mobile shopping cart experience suffered from high abandonment rates due to excessive checkout steps.",
        "Unstructured Product Browsing: Visitors struggled to find relevant clothing sizes and filter categories, resulting in low average session durations.",
        "Weak Brand Visuals: E-commerce collection pages lacked high-resolution lifestyle layouts that display apparel fit.",
      ],
      solution: [
        "Mobile-First Storefront Design: Overhauled the layout, simplifying collection pages and introducing category filter tabs.",
        "One-Page Checkout Integration: Replaced the multi-step checkout flow with a fast, secure payment interface.",
        "Interactive Visual Merchandising: Designed lifestyle product sections highlighting curated outfits and collection lookbooks.",
      ],
      testimonial: {
        quote: "The storefront feels cleaner, faster to browse, and easier to promote. Our customer support team has seen a huge drop in checkout questions.",
        author: "Brandexa Client",
        company: "Urban Threads",
      },
      resultCards: [
        { value: "31%", label: "Increase in product views" },
        { value: "22%", label: "Higher add-to-cart actions" },
        { value: "16%", label: "Lift in returning visits" },
      ],
      facebookResults: ["Product Clicks: +31% increase in catalog clicks", "Shop Visits: +22% growth in e-commerce traffic", "Campaign Reach: +37% increase in ad engagement"],
      instagramResults: ["Product Taps: +28% increase in Instagram Shop clicks", "Profile Actions: +20% growth in website button taps", "Story Clicks: +26% lift in swipe-up / sticker link traffic"],
    },
  },
  {
    title: "Clearon Bleach Tablets",
    category: "E-Commerce",
    sectors: ["Consumer Products", "Marketing"],
    image: "/work-samples/clearon.webp",
    caseStudy: {
      background:
        "Clearon Bleach Tablets is a pioneering consumer product brand featured in over 700 Walmart stores nationwide. The brand offers an exclusive effervescent, fizzy formula for convenient deep cleaning. This multi-purpose product provides a wealth of cleaning solutions, from whitening and deodorizing laundry to removing tough mold and mildew stains indoors and outdoors. They came to LYFE Marketing to design an active digital marketing presence aimed at reaching their core target market of young adults and college students who value convenient, fast-acting household items.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Targeting Younger Generations: Reaching young individuals and college students who traditionally do not engage with home cleaning brands or purchase bleach products.",
        "National Store Footprint: Rapidly establishing brand awareness across multiple regions to support retail distribution in over 700 Walmart locations.",
        "Cost-Effective Daily Touchpoints: Designing daily ad campaigns to keep the product top-of-mind without incurring massive media buy costs.",
      ],
      solution: [
        "Strategic Content Creation: Formulated a distinct social media strategy focused on dorm hacks, laundry tips, and fast cleaning solutions.",
        "Active Social Keyword Monitoring: Monitored keywords related to laundry, washing clothes, and bleaching to actively engage with thousands of organic conversations.",
        "Tailored Giveaways: Executed targeted contests and giveaways designed specifically to appeal to the lifestyles and preferences of college students.",
      ],
      testimonial: {
        quote: "I knew LYFE Marketing would help with social media, but still, I just didn’t think people would talk, tweet this much about bleach! The response was absolutely incredible.",
        author: "Ray Of Hope Christian Church Client",
        company: "Clearon Bleach Tablets",
      },
      resultCards: [
        { value: "430%", label: "Follower Increase" },
        { value: "112%", label: "Revenue Increase" },
        { value: "1 Million", label: "Impressions" },
      ],
      resultsSections: [
        {
          title: "CAMPAIGN LEVEL",
          items: [
            "Follower Growth: 430% follower increase across primary social platforms.",
            "Revenue Growth: 112% revenue growth driven from campaign traffic.",
            "Brand Exposure: Over 1,000,000 impressions generated within a 3-month span.",
            "Contests Run: 6 strategic contests launched to capture target audiences.",
          ],
        },
        {
          title: "CONTEST RESULTS",
          items: [
            "Audience Engagement: Contests were specifically tailored to the target student market, generating high shares, replies, and brand buzz.",
            "Brand Word-of-Mouth: Generated viral tweets and comments, introducing the product's effervescent formula to thousands of new buyers.",
          ],
        },
      ],
    },
  },
  {
    title: "Ray of Hope Christian Church",
    category: "Nonprofit",
    sectors: ["Religious & Nonprofit", "Community"],
    image: "/work-samples/ray-of-hope.webp",
    caseStudy: {
      background:
        "Ray of Hope Christian Church is one of Georgia's premiere churches, affiliated with the Christian Church (Disciples of Christ) which represents hundreds of thousands of members in the U.S. and Canada. Eager to expand their reach, build their digital community, and welcome a new wave of local families, they came to LYFE Marketing to design a robust social media program proven to drive worship service attendance and digital streaming views.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Community Outreach Limits: Traditional physical outreach methods were failing to reach new residents moving to the local area.",
        "Unproven ROI Concerns: As a nonprofit organization, they needed to ensure every dollar was invested in a strategic, proven digital framework.",
        "Engagement Friction: Building meaningful, daily conversations on platforms traditionally dominated by commercial brands.",
      ],
      solution: [
        "Localized Twitter Engagement: Formulated a distinct strategy using real-time Twitter monitoring to interact with users looking for spiritual community and local church recommendations.",
        "Sunday Worship Live Stream Promotion: Created structured countdown campaigns and digital invitations highlighting Sunday services and live-streaming options.",
        "Innovative Religious Marketing: Implemented custom graphic systems and pastoral quote highlights to build daily trust and comfort among followers.",
      ],
      testimonial: {
        quote: "We took advantage of Twitter engagement as the key to increase visitation and drive traffic to the church during Sunday worship service. We attracted thousands of people and increased visitation in less than a couple of months.",
        author: "Ray of Hope Client",
        company: "Ray of Hope Christian Church",
      },
      resultCards: [
        { value: "16,078", label: "Total Audience" },
        { value: "28%", label: "Visitation Increase" },
        { value: "123%", label: "More Website Traffic" },
      ],
      resultsSections: [
        {
          title: "Social Media Results",
          items: [
            "Total Audience: Grew total community audience to 16,078 followers.",
            "Audience Growth Rate: Achieved a 4.25% audience growth rate.",
            "Conversations: 5,238 active conversations and direct interactions.",
            "Visitation Increase: 28% increase in physical visitor attendance.",
            "Website Traffic: 123% increase in website page views and stream clicks.",
          ],
        },
      ],
    },
  },
  {
    title: "Cafe Alibaba",
    category: "Restaurant",
    sectors: ["Food & Beverage", "Local Business"],
    image: "/work-samples/cafe-alibaba.webp",
    caseStudy: {
      background:
        "Café Alibaba landed onto Georgia State University’s campus in April, bringing their premium international food selection, Hookah lounge, and excellent drink pricing to the heart of Atlanta. To capture the student body before the fall semester began, they enlisted LYFE Marketing to create a massive buzz and establish Café Alibaba as the primary student hangout spot.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Short Campaign Window: Only had a small window (from August to the start of the semester) to build complete brand awareness among incoming students.",
        "Highly Competitive Local Space: GSU campus is surrounded by dozens of established fast-food and lounge options.",
        "Niche Audience Targeting: Needed to filter local Atlanta social users down strictly to GSU students and downtown office workers.",
      ],
      solution: [
        "Targeted Student Specials: Designed a multi-layered offer system featuring Happy Hour deals and exclusive GSU faculty and staff discounts.",
        "Social Connect Incentives: Created a discount promotion that gave students immediate order price reductions if they followed the cafe on social media.",
        "Local Search & Listening: Interacted directly with local Atlanta users searching or tweeting about 'food' and 'hookah', driving them to the cafe.",
      ],
      testimonial: {
        quote: "Within the first few weeks, Café Alibaba received extensive traffic from the Georgia State audience asking about the student discount and social media specials that we promoted. Our client can update his audience at any time.",
        author: "Cafe Alibaba Owner",
        company: "Café Alibaba",
      },
      resultCards: [
        { value: "1,298", label: "Followers Gained" },
        { value: "1,000+", label: "Twitter Followers" },
        { value: "Increased", label: "In-Restaurant Visits" },
      ],
      resultsSections: [
        {
          title: "Social Media Results",
          items: [
            "Twitter Followers Gained: 1,298 new followers in less than 2 months.",
            "Audience Growth: Reached well over 1,000 followers, establishing a direct channel for events and daily specials.",
            "Foot Traffic: GSU student foot traffic saw a significant surge in the opening weeks of the semester.",
          ],
        },
      ],
    },
  },
  {
    title: "Mortgage Markets CUSO",
    category: "Finance",
    sectors: ["Financial Services", "Lead Generation"],
    image: "/work-samples/mortgage-markets-cuso.webp",
    caseStudy: {
      background:
        "Mortgage Markets CUSO is a digital mortgage service provider that partners with credit unions and realtors to deliver high-touch, tech-enabled mortgage solutions. Their audience spans both B2C (first-time homebuyers) and B2B (credit union partners) markets, and their goal is to increase brand visibility, generate leads, and improve member engagement across social platforms. Having worked with 5 previous marketing agencies without seeing success, they needed a custom approach to content.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Template Fatigue: Frustrated by previous agencies using generic, uninspiring stock templates that did not match the complexity of mortgage services.",
        "Dual B2B/B2C Audiences: Balancing educational content for first-time homebuyers with professional materials for credit union partners.",
        "Low Instagram Reach: Poor visibility outside their immediate network, with non-followers completely disconnected from their pages.",
      ],
      solution: [
        "Custom Content Overhaul: Designed bespoke, on-brand graphics and educational content from scratch, completely avoiding generic template designs.",
        "Reel & Post Optimization: Prioritized short-form video content and carousel posts to simplify mortgage topics and financial planning tips.",
        "Lookalike & Custom Audiences: Formulated targeted search strategies to capture high-intent users looking to buy homes.",
      ],
      testimonial: {
        quote: "I’m Michael Ferraro, President of Mortgage Markets CUSO. We provide first mortgage services to 15–20 credit unions nationally and have been doing so for over 30 years. In my world, marketing and social media awareness are critical. Working with LYFE Marketing has helped us reach the next level.",
        author: "Michael Ferraro",
        company: "President, Mortgage Markets CUSO",
      },
      resultCards: [
        { value: "+90.7%", label: "Increase in Instagram Views" },
        { value: "+248%", label: "Increase in Instagram Reach" },
        { value: "+41.2%", label: "Increase in Facebook Reach" },
      ],
      resultsSections: [
        {
          title: "Instagram Results",
          items: [
            "Views: 515 views (a 90.7% increase over the previous period).",
            "Reach: 341 people reached (up 248%, with 84% coming from non-followers).",
            "Content Interactions: 58.3% increase in post saves, shares, and comments.",
          ],
        },
        {
          title: "Facebook Performance",
          items: [
            "Total Views: 1.9K views generated.",
            "3-Second Video Views: Increased by 18.6%.",
            "Reach: 435 total users reached (+41.2% / +42.1% increase).",
            "Facebook Watch Time: 17m 37s total watch time.",
          ],
        },
        {
          title: "LinkedIn Results (4 Months)",
          items: [
            "New Followers Gained: 137 new followers.",
            "Impressions: 2,081 total impressions.",
            "Unique Visitors: 163% increase in unique page traffic.",
            "Page Views: 138 views.",
          ],
        },
      ],
    },
  },
  {
    title: "Arctic Collagen",
    category: "Wellness",
    sectors: ["Health & Wellness", "E-Commerce"],
    image: "/work-samples/arctic-collagen.webp",
    caseStudy: {
      background:
        "ArcticCollagen™ is a premium wellness brand specializing in hydrolyzed marine collagen supplements sourced from the pristine Arctic waters of Northern Europe and hydrolyzed in Norway. The brand caters to health-conscious consumers, beauty enthusiasts, and athletes. With a commitment to science-backed formulas, sustainability, and high-quality ingredients, ArcticCollagen™ stands out in the marine collagen market.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Competitive Market: The wellness space is dominated by bovine-derived collagen products, requiring substantial consumer education on the benefits of marine-derived options.",
        "Zero Existing Footprint: As a new brand, they had no historical ad accounts, social followers, or customer database.",
        "Credibility Deficit: Establishing trust in a crowded industry where buyers rely heavily on reviews and brand recognition.",
      ],
      solution: [
        "Influencer Collaborations: Partnered with health, beauty, and wellness influencers to create authentic user-generated content.",
        "Facetime-Style Videos: Focused on relatable, unscripted videos demonstrating recipes, morning routines, and product benefits.",
        "Email Growth Magnet: Promoted exclusive discount campaigns on social channels to grow their customer email list.",
      ],
      testimonial: {
        quote: "Entering a highly competitive market from scratch required a team that understood how to build trust. LYFE Marketing's influencer campaigns put us on the map.",
        author: "Lennart and Jasmien Winqvist",
        company: "Arctic Collagen",
      },
      resultCards: [
        { value: "+7.3M%", label: "Facebook Reach Increase" },
        { value: "+100%", label: "Instagram Engagement" },
        { value: "104.4K", label: "Views" },
      ],
      resultsSections: [
        {
          title: "Facebook Results (First Month)",
          items: [
            "Views: 8.6K views (+1.2%).",
            "Reach: 3.4K reached (+3.0%).",
            "Content Interactions: 308 interactions (+755.6% increase).",
            "Link Clicks: 14 clicks (+1.3K% increase).",
            "Visits: 221 page visits (+351% increase).",
            "Followers: 260 page follows (+8.6K% increase).",
          ],
        },
      ],
    },
  },
  {
    title: "Vital Vibe Health N Fitness",
    category: "Fitness",
    sectors: ["Health & Wellness", "Social Media"],
    image: "/work-samples/vital-vibe-fitness.webp",
    caseStudy: {
      background:
        "Vital Vibe Health N Fitness is a motivational fitness brand that promotes healthy living, workout routines, and a connection between physical and mental health. Founded by software engineer Elijah, the brand targets individuals seeking a balanced lifestyle. As a fast-growing startup, Vital Vibe was looking for a scalable marketing partner to grow their online presence.",
      services: ["Social Media Management Services"],
      challenge: [
        "Time Constraints: The founder lacked the time to manage daily social content while developing fitness products.",
        "Competitive Space: Health and fitness is highly saturated, requiring a distinct and cohesive brand voice.",
        "Lack of Video Expertise: Needed engaging video assets and testimonial campaigns to build customer trust.",
      ],
      solution: [
        "Voice Definition: Standardized the Vital Vibe voice as motivational, balanced, and wellness-forward.",
        "Launch Strategy: Coordinated content support for their upcoming fitness apparel line.",
        "Testimonial Campaign: Created 'Amplifying Vital Vibe' video testimonials to highlight growth and brand trust.",
      ],
      testimonial: {
        quote: "Working with LYFE Marketing has been a game-changer for Vital Vibe. As a solo founder with big goals, I needed a team that could handle the marketing side—and they delivered.",
        author: "Ellijah Gardaya",
        company: "Founder of Vital Vibe Health N Fitness",
      },
      resultCards: [
        { value: "228.7K%", label: "Increase In Reach" },
        { value: "35K", label: "Views" },
        { value: "5.6K", label: "Top Post Reach" },
      ],
      resultsSections: [
        {
          title: "Campaign Results",
          items: [
            "Reach Growth: 228,700% increase in reach across platforms.",
            "Video Performance: Generated 35K views on video content.",
            "Post Virality: 5.6K reach on the top-performing post.",
            "Cohesive Voice: Established a strong, recognizable brand identity that built anticipation for the apparel launch.",
          ],
        },
      ],
    },
  },
  {
    title: "Wrecked Angles",
    category: "Automotive",
    sectors: ["Entertainment", "Social Media"],
    image: "/work-samples/wrecked-angles.webp",
    caseStudy: {
      background:
        "Wrecked Angles is a daily webcomic that delivers original humor on Facebook. Unlike other humor channels that recycle old memes and cartoons, Wrecked Angles provides fresh, original content for an audience aged 40+ who simply need a laugh.",
      services: ["Social Media Advertising Services"],
      challenge: [
        "Stagnant Growth: Struggled to expand visibility beyond existing followers organically.",
        "Recycled Content Competition: Competitors who posted viral, copied memes occupied the majority of feed space.",
        "Unoptimized Ad Budget: Needed an ad strategy that generated cheap engagement without sacrificing quality.",
      ],
      solution: [
        "Meta Ads Strategy: Launched targeted paid campaigns focused on building page likes and boosting organic cartoon reach.",
        "Lookalike Targeting: Created lookalike audiences based on their most engaged Facebook fans.",
        "Cost Optimization: Aggressively optimized ad spend to lower the cost per follower.",
      ],
      testimonial: {
        quote: "I’ve gotten results FAR exceeding my goals! Couldn’t be more pleased.",
        author: "John Kanthak",
        company: "Wrecked Angles",
      },
      resultCards: [
        { value: "101.4K", label: "New Followers" },
        { value: "+2,700%", label: "Increase in Reach" },
        { value: "11M+", label: "Total Views" },
      ],
      resultsSections: [
        {
          title: "Facebook Ad Campaign Results",
          items: [
            "Follower growth: Gained 101,441 new followers (with 101,275 being unique).",
            "Reach: 2,700% increase in total reach.",
            "Views: 11 million+ total views (with 88% driven by paid ads).",
            "Interactions: 233% increase in post likes, comments, and shares.",
            "Cost Efficiency: Achieved a cost-per-like of $0.05 - $0.10 and post engagement at $0.01 - $0.05.",
          ],
        },
      ],
    },
  },
  {
    title: "Axiom Structures",
    category: "B2B",
    sectors: ["Construction", "Lead Generation"],
    image: "/work-samples/axiom-structures.webp",
    caseStudy: {
      background:
        "Axiom Structures is a Florida-based structural engineering firm offering high-quality engineering designs, inspections, and consulting services for residential and commercial construction projects. Their services include structural plans for renovations, window/door engineering, and metal canopy designs.",
      services: ["Social Media Management Services"],
      challenge: [
        "Low Brand Footprint: Strong offline reputation but zero online presence with only 100 followers on Instagram.",
        "Highly Technical Content: Structural engineering designs are complex, requiring translation into engaging social visuals.",
        "Inconsistent Marketing: Sporadic, ad-hoc posting that failed to build professional authority.",
      ],
      solution: [
        "Branded Visual Themes: Created clean, branded templates highlighting blueprint details and completed project photography.",
        "Audience Growth Program: Implemented targeted hashtag grids and improved bio structures.",
        "Content Buckets: Divided content into distinct buckets focusing on plans, structural inspections, and client reviews.",
      ],
      testimonial: {
        quote: "LYFE Marketing keeps in touch with me each month, their product is fantastic, and they are flexible. I really love working with them and our reach has grown in just a few months!",
        author: "Axiom Structures Client",
        company: "Axiom Structures",
      },
      resultCards: [
        { value: "+353%", label: "Facebook Growth" },
        { value: "+165%", label: "Instagram Growth" },
        { value: "18x", label: "Increased Social Engagement" },
      ],
      resultsSections: [
        {
          title: "Follower & Engagement Results",
          items: [
            "Facebook Growth: From 169 followers to 766 in less than a year (+353%).",
            "Instagram Growth: From 101 followers to 267 (+165%).",
            "Facebook Performance: Increased from a reach of 54 and 1 new follower in March 2024 to 7.8k reach and 57 new followers in January 2025.",
            "Engagement surge: 18x increase in monthly social media interactions.",
          ],
        },
      ],
    },
  },
  {
    title: "Daryl D Black",
    category: "Personal Brand",
    sectors: ["Coaching", "Content Strategy"],
    image: "/work-samples/daryl-d-black.webp",
    caseStudy: {
      background:
        "Daryl D. Black is a leadership consultant and speaker helping organizations elevate communication, decision-making, and performance under pressure. With a growing presence in the executive coaching space, Daryl sought to generate more qualified leads and raise awareness of his services.",
      services: ["Social Media Advertising Services"],
      challenge: [
        "Lead Quality: Attracting high-paying executive coaching clients rather than general advice seekers.",
        "Budget Efficiency: Achieving consistent lead flow on a conservative daily budget.",
        "Low Initial Awareness: Prospects were unfamiliar with Daryl's consulting methods prior to landing on his pages.",
      ],
      solution: [
        "Lead Funnel Architecture: Designed high-converting Facebook Lead Form campaigns with custom qualification questions.",
        "Agile Optimization: Handled monthly creative adjustments, A/B testing copy, and targeting criteria to lower cost-per-lead.",
        "Targeted Copywriting: Tailored message hooks directly addressing executive stress and performance under pressure.",
      ],
      testimonial: {
        quote: "My account manager, Bianca, is fantastic! Communicates very well, follows through on asks and always produces. I’m impressed by the team’s agility and capability.",
        author: "Daryl D. Black",
        company: "Daryl D. Black Coaching",
      },
      resultCards: [
        { value: "202", label: "Leads Gained" },
        { value: "+1,000%", label: "Lead Growth" },
        { value: "$20/day", label: "Ad Budget" },
      ],
      resultsSections: [
        {
          title: "Campaign Lead Metrics (10 Months)",
          items: [
            "Total Leads Gained: 202 qualified leads acquired in 10 months.",
            "Lead Growth Rate: Grew from just 3 leads in August to 33 leads in February (a 1000%+ increase).",
            "Campaign Efficiency: Achieved on a highly efficient budget of $20/day.",
            "Ad Performance: Instagram and Facebook reach rose, driving consistent monthly client inquiries.",
          ],
        },
      ],
    },
  },
  {
    title: "Spray Daze Tan",
    category: "Beauty",
    sectors: ["Beauty", "Local Business"],
    image: "/work-samples/spray-daze.webp",
    caseStudy: {
      background:
        "Spray Daze Tan is a premium airbrush spray tanning salon based in San Diego, CA, catering to clients seeking a sunless, streak-free glow for special events, weddings, vacations, and everyday confidence. Despite a loyal customer base, they needed a data-driven strategy to scale booking volume.",
      services: ["Social Media Advertising Services"],
      challenge: [
        "Seasonality Issues: Struggled to maintain a steady flow of client bookings outside the peak summer months.",
        "Conversion Gap: High social media engagement and click-through rates but low conversion rate into booked appointments.",
        "Generic Creatives: Stock tan imagery was performing poorly and failed to set them apart from discount franchise competitors.",
      ],
      solution: [
        "Gender-Specific Campaigns: Separated ad groups to target men and women with tailored visual content.",
        "Hook-Based Copy Testing: Deployed variations using high-performing hooks like 'Feeling Pasty?' and 'No Waiting to Build a Base!'.",
        "Retargeting Integration: Promoted a 'New Client Offer' specifically to warm site visitors to close bookings.",
        "Custom Visual Overhaul: Created custom, lifestyle-focused ad graphics inspired by top-tier boutique salons.",
      ],
      testimonial: {
        quote: "I also wanted to let you know that we’re already at 22 new clients who booked in the past 7 days since we started. This is WONDERFUL! One client said 'whatever marketing you're doing is working great... I just had to book'.",
        author: "Brittany Duckworth",
        company: "Spray Daze Tan",
      },
      resultCards: [
        { value: "172", label: "Appointments Booked" },
        { value: "$4.23", label: "Cost Per Lead" },
        { value: "Improved", label: "Click Through Rate" },
      ],
      resultsSections: [
        {
          title: "Booking & Cost Metrics (2 Months)",
          items: [
            "Total Bookings: 172 website appointments scheduled in 2 months (with 100 appointments in the last 30 days alone).",
            "Cost Per Lead: Reduced cost-per-lead to $12.55, with specific campaigns reaching as low as $4.23.",
            "Ad Spend Optimization: Managed a $1,500/monthly budget efficiently to focus on highest-converting demographics.",
            "Higher CTR: Click-through rate improved significantly compared to previous broad-targeting efforts.",
          ],
        },
      ],
    },
  },
  {
    title: "Foodfixer Experience (Eat Plants)",
    category: "Food",
    sectors: ["Food & Beverage", "Campaign Strategy"],
    image: "/work-samples/redline.webp",
    caseStudy: {
      background:
        "Foodfixer Experience (Eat Plants) is a health coaching business offering group-based solutions for individuals, primarily men and women over 30, who are struggling with weight and health issues that aren't resolved through typical fad diets. They needed to turn their coaching offer into a profitable revenue program.",
      services: ["Social Media Advertising Services"],
      challenge: [
        "High Ticket Friction: Attempting to sell a premium $1,500 health coaching service directly to cold social audiences without prior trust.",
        "Low Brand Awareness: As a brand-new company, they had no historical customer base or digital footprint.",
        "Friction-Heavy Funnel: Initial lead pages were long and complex, leading to low conversion rates.",
      ],
      solution: [
        "Low-Priced Entry Offer: Introduced a $7 entry challenge to ease potential clients into the program.",
        "Lead Magnet Funnel: Built web webinar registration paths and Facebook Live events to build interest.",
        "Average Order Value Boost: Added a One-Time Offer (OTO) upsell to the checkout page to recoup ad costs immediately.",
        "Real-Time Optimization: Continually monitored ad creatives, landing page copy, and audience targeting.",
      ],
      testimonial: {
        quote: "Our tailored marketing funnel moved prospects from initial brand awareness to high-ticket sales by building trust first. It completely transformed our customer acquisition.",
        author: "Vince Rountree and Rawlin Vanatta",
        company: "Foodfixer Experience (Eat Plants)",
      },
      resultCards: [
        { value: "23,250", label: "Purchases Made" },
        { value: "10,122", label: "Leads Generated" },
        { value: "$1.20", label: "Cost Per Lead" },
      ],
      resultsSections: [
        {
          title: "Funnel Conversion Results",
          items: [
            "Purchases: 23,250 purchases generated through the trust-building ad funnel.",
            "Leads Gained: 10,122 qualified email leads generated.",
            "Cost Per Lead: Averaged a low $1.20 cost-per-lead.",
            "Campaign Reach: Generated over 2.2 million impressions and reached 816,000+ unique users.",
            "Clicks: Captured 60,453 total link clicks on ad creatives.",
          ],
        },
      ],
    },
  },
  {
    title: "Power of Partnerships",
    category: "B2B",
    sectors: ["Partnerships", "Content Marketing"],
    image: "/work-samples/power-of-partnerships.webp",
    caseStudy: {
      background:
        "Power of Partnerships is a mission-driven travel brand that transforms everyday travel bookings into opportunities to support cancer research — at no extra cost to the traveler. Partnering with travel giants like Expedia, VRBO, and Hotels.com, they provide concierge booking services.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Complex Brand Message: Educating travelers that booking through their link raises funds for cancer research without charging extra fees.",
        "Slow Audience Growth: Struggled to build a community across Facebook, Instagram, and TikTok organically.",
        "Agility Issues: Content calendars lacked responsiveness to real-time charity events and travel booking promotions.",
      ],
      solution: [
        "Agile Content Scheduling: Formulated monthly content reviews with the founder, Dee, to align content with trends and travel promotions.",
        "Reels & TikTok Campaigns: Produced short-form video assets using trending formats and music overlays.",
        "Bio Optimization: Reworked the Instagram bio to immediately explain the charity connection and call-to-action.",
        "Page-Like Ads: Ran localized page-like campaigns to target socially conscious travelers.",
      ],
      testimonial: {
        quote: "Our close collaboration with Dee allowed us to blend travel promotions and cancer research advocacy directly into a highly successful, real-time social strategy. The growth has been spectacular.",
        author: "Dee",
        company: "Power of Partnership, LLC",
      },
      resultCards: [
        { value: "700K%+", label: "Facebook Reach Lift" },
        { value: "157.8K", label: "Facebook Views" },
        { value: "3K", label: "Instagram Visits" },
      ],
      resultsSections: [
        {
          title: "Social Growth Performance",
          items: [
            "Facebook Reach: Increased by 700.6k% with 157.8k views to the Facebook page.",
            "Facebook Followers: Gained over 2,200 new page fans.",
            "Instagram Performance: Gained nearly 500 followers and 3,000 page visits.",
            "Instagram Interactions: Captured 2.5k interactions with content.",
          ],
        },
      ],
    },
  },
  {
    title: "Soultuary Studios",
    category: "Wellness",
    sectors: ["Health & Wellness", "Branding"],
    image: "/work-samples/soultuary.webp",
    caseStudy: {
      background:
        "Soultuary Studios is a premium content creation rental space that also serves as a venue for small events, workshops, and wellness activities. Designed for photographers, videographers, and wellness professionals, the space offers a visually stunning environment with natural light.",
      services: ["Social Media Advertising Services"],
      challenge: [
        "Lead Quality: Generating bookings from paying creators rather than general design admirers.",
        "Low Booking Conversions: High website traffic but low conversion rate into active studio tour and rental requests.",
        "Local Differentiation: Distinguishing the studio from basic co-working spaces and office rentals.",
      ],
      solution: [
        "Paid Search & Social Funnel: Deployed visual-first Instagram ads displaying the studio's lighting and amenities.",
        "Compelling Ad Creatives: Used carousel layouts showcasing different photography sets and props available.",
        "Simplified Booking Path: Streamlined the website contact form to focus on date selection and space availability.",
      ],
      testimonial: {
        quote: "By leveraging a mix of organic and paid social media efforts, we were able to showcase the studio’s unique lighting and capture high-quality leads.",
        author: "RJ Rosario",
        company: "Soultuary Studios",
      },
      resultCards: [
        { value: "1,023", label: "Total Leads" },
        { value: "122K+", label: "Total Reach" },
        { value: "1.05M+", label: "Total Impressions" },
      ],
      resultsSections: [
        {
          title: "Campaign Lead & Cost Metrics",
          items: [
            "Leads Gained: 1,023 high-quality website leads acquired.",
            "Impressions: 1,052,360 total impressions generated.",
            "Reach: 122,248 unique users reached.",
            "Clicks: 20,352 total clicks with 5,337 link clicks.",
            "Cost Per Click: Averaged $0.70 CPC.",
            "Click-Through Rate: 1.93% CTR.",
            "CPM: $13.61 cost per 1,000 impressions.",
          ],
        },
      ],
    },
  },
  {
    title: "VegaX Holdings",
    category: "B2B",
    sectors: ["Investment", "Digital Marketing"],
    image: "/work-samples/vegax.webp",
    caseStudy: {
      background:
        "VegaX Holdings brings investors direct access to actionable indexes and index-driven crypto products that can improve investment portfolios. Investors lack easy ways to add crypto to their portfolios and find the market difficult to understand. VegaX makes access simple.",
      services: ["Social Media Advertising"],
      challenge: [
        "Education Barrier: Crypto indexes are complex financial products that require explanatory marketing copy.",
        "Lead Acquisition Cost: High competition in the crypto ad space traditionally drives lead costs very high.",
        "Targeting Investors: Identifying users with high net worth who are interested in cryptocurrency index products.",
      ],
      solution: [
        "Geo-Targeted Campaigns: Focused lead campaigns specifically on English speakers living in East Asia.",
        "Education Filters: Targeted prospects based on education levels and professional finance interests.",
        "Video Ads: Leveraged informative explainer videos provided by the client to describe index benefits.",
      ],
      testimonial: {
        quote: "By targeting English speakers in specific countries and focusing on education level, we have been able to bring in hundreds of leads at a very low cost.",
        author: "VegaX Representative",
        company: "VegaX Holdings",
      },
      resultCards: [
        { value: "136", label: "Website Leads" },
        { value: "$3.75", label: "Cost Per Lead" },
        { value: "$509.43", label: "Monthly Budget" },
      ],
      resultsSections: [
        {
          title: "Investor Lead Performance",
          items: [
            "Leads Gained: 136 website leads acquired.",
            "Cost Per Lead: Highly efficient $3.75 cost-per-lead.",
            "Monthly Budget: Only $509.43 spent, proving strong ROI.",
            "Success Factor: Video creatives combined with education targeting drove optimal performance.",
          ],
        },
      ],
    },
  },
  {
    title: "PoolTree System",
    category: "Home Services",
    sectors: ["Service Business", "Lead Generation"],
    image: "/work-samples/pooltree.webp",
    caseStudy: {
      background:
        "PoolTree System sells a patented wintertime maintenance system for above-ground pools. The owners have 65 years of pool experience across retail, construction, and maintenance, selling through Shopify and Amazon.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Established Brand Awareness: The brand was established but needed to reach pool owners who were unaware of their system.",
        "Seasonal Niche: Winterization products have a very narrow seasonal sales window.",
        "Driving Traffic: Low conversion rates from ad traffic to online Shopify sales.",
      ],
      solution: [
        "Geo & Interest Filtering: Targeted ads at pool-owning interests in cold northern states.",
        "Review-Based Copy: Focused ad creatives on customer review quotes and winter maintenance savings.",
      ],
      testimonial: {
        quote: "By using specific location and interest targeting, we brought in a huge increase in website traffic with a great click-through rate.",
        author: "PoolTree Representative",
        company: "PoolTree System",
      },
      resultCards: [
        { value: "7,380", label: "Link Clicks" },
        { value: "$0.07", label: "Cost Per Click" },
        { value: "10.58%", label: "CTR" },
      ],
      resultsSections: [
        {
          title: "Ad Campaign Results",
          items: [
            "Link Clicks: 7,380 link clicks driven to their storefront.",
            "Cost Per Click: Highly efficient $0.07 cost-per-click (or $1.99 on specific campaigns).",
            "Click-Through Rate: 10.58% CTR.",
            "Monthly Spend: $495.74 spent.",
          ],
        },
      ],
    },
  },
  {
    title: "CENAPS",
    category: "Healthcare",
    sectors: ["Medical", "Digital Marketing"],
    image: "/work-samples/cenaps.webp",
    caseStudy: {
      background:
        "The CENAPS® Corporation (Center for Applied Sciences) was founded by Terence T. Gorski in 1982. CENAPS® is committed to providing clinical skills training, workbooks, and clinical tools for behavioral health and wellness, helping chemically addicted relapse-prone clients.",
      services: ["Social Media Advertising"],
      challenge: [
        "B2B Professional Targeting: Reaching clinical therapists, rehab centers, and behavioral health professionals.",
        "Low Lead Volume: Stagnant lead flow for workbook and clinical tool consulting.",
        "Complex Value Proposition: Clinical relapse training requires precise, professional messaging.",
      ],
      solution: [
        "Lookalike Lead Campaigns: Utilized website visitor lookalike groups and retargeting to target clinics.",
        "Discount Coupon Incentive: Offered a 10% discount coupon upon form completion to drive immediate purchases.",
        "Brand Recall Placements: Ran brand awareness campaigns to establish presence among health organizations.",
      ],
      testimonial: {
        quote: "Shaye and her team were very creative, prompt, articulate and easy to work with for our unique needs for messaging. They met our goals and expectations.",
        author: "Lisa Hilko",
        company: "CENAPS Corporation",
      },
      resultCards: [
        { value: "52", label: "Leads Gained" },
        { value: "$3.10", label: "Cost Per Lead" },
        { value: "7,920", label: "Estimated Ad Recall" },
      ],
      resultsSections: [
        {
          title: "Lead & Ad Recall Performance",
          items: [
            "Leads Gained: 52 leads generated at $3.10 cost-per-lead.",
            "Estimated Ad Recall: 7,920 recall lift at $0.02 per recall.",
            "Monthly Budget: $316 spent.",
            "Success Driver: Offering a 10% coupon upfront combined with customer list lookalikes.",
          ],
        },
      ],
    },
  },
  {
    title: "Jalia Walda",
    category: "Personal Brand",
    sectors: ["Beauty", "Content Strategy"],
    image: "/work-samples/jalia-walda.webp",
    caseStudy: {
      background:
        "Jalia Walda is a health and wellness e-commerce brand selling tummy teas, soaps, body creams, and feminine hygiene. She came to LYFE Marketing to increase exposure and scale sales.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Fierce Beauty Competition: Separating Jalia Walda's skincare and tea line from thousands of online competitors.",
        "Low Ad ROAS: Previous advertising spend was unprofitable due to broad targeting.",
        "Cart Abandonment: Site visitors were exiting checkout pages without purchasing.",
      ],
      solution: [
        "Engaged Shopper targeting: Directed conversion ads to users interested in skincare who also match 'engaged shoppers'.",
        "Video Testimonials: Promoted videos of the client speaking directly to the camera about product results.",
        "365-Day Retargeting Carousel: Deployed product carousels to retarget brand engagers for up to a year.",
      ],
      testimonial: {
        quote: "Client provided assets such as the video of her talking to the phone and a 20% discount has really helped this campaign. Retargeting a large audience drives up ROA numbers.",
        author: "Jalia Walda",
        company: "Jalia Walda Wellness",
      },
      resultCards: [
        { value: "317", label: "Purchases" },
        { value: "6.95", label: "ROAS" },
        { value: "$24,756", label: "Revenue" },
      ],
      resultsSections: [
        {
          title: "E-Commerce Results",
          items: [
            "Website Purchases: 317 online sales in one month.",
            "ROAS: 6.95 return on ad spend.",
            "Revenue Gained: $24,756 in revenue.",
            "Traffic: 3,901 link clicks at $0.91 CPC.",
            "Monthly Budget: $3,500 budget managed.",
          ],
        },
      ],
    },
  },
  {
    title: "Comfort One Shoes",
    category: "Retail",
    sectors: ["E-Commerce", "Apparel / Fashion"],
    image: "/work-samples/comfort-one-shoes.webp",
    caseStudy: {
      background:
        "Comfort One Shoes offers a variety of premium shoe brands focusing on a 'Euro comfort fit.' Brands include On Running, Birkenstock, Dansko, Keen, and Oboz.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Brand Differentiation: Standing out from direct manufacturer websites and large online shoe retailers.",
        "High Acquisition Costs: Shoe marketing terms are highly competitive, driving up conversion costs.",
        "Conversion Funnel Friction: Lacked a systematic customer journey across cold, warm, and hot traffic segments.",
      ],
      solution: [
        "Full-Funnel Campaigns: Structured separate conversion ad campaigns for cold, warm, and hot audiences.",
        "Lookalike Segmenting: Generated lookalike audiences based on add-to-cart and purchase pixel data.",
        "Video Ad Focus: Transitioned all ad creative to high-quality video assets showcasing shoe fits and materials.",
      ],
      testimonial: {
        quote: "By outlining each step of the funnel (cold, warm, and hot), Samantha was able to create a customer journey that led to increased conversions and traffic.",
        author: "Comfort One Representative",
        company: "Comfort One Shoes",
      },
      resultCards: [
        { value: "40", label: "Purchases" },
        { value: "$5,292", label: "Revenue" },
        { value: "2.21", label: "ROAS" },
      ],
      resultsSections: [
        {
          title: "Campaign Results",
          items: [
            "Purchases: 40 purchases yielding $5,292 in revenue.",
            "Return on Ad Spend: 2.21 ROAS.",
            "Link Clicks: 554 link clicks at $0.49 CPC.",
            "Page Growth: 272 page likes at $0.13 cost-per-like.",
            "Monthly Budget: $2,972 spent.",
          ],
        },
      ],
    },
  },
  {
    title: "Vulcan Strength",
    category: "Fitness",
    sectors: ["Health & Wellness", "E-Commerce"],
    image: "/work-samples/vulcan-strength.webp",
    caseStudy: {
      background:
        "Vulcan Strength is a primary supplier of Olympic weightlifting, CrossFit, home gym, and commercial fitness equipment. They are a 100% Veteran-owned company, manufacturing equipment abroad and in the USA.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Scaling Revenue: Brand was already well known, requiring advanced targeting strategies to scale sales volume.",
        "High Cart Abandonment: High-ticket items like weight racks have high cart abandonment rates.",
        "Targeting Gym Owners: Segmenting ad traffic to identify commercial gym owners and home gym enthusiasts.",
      ],
      solution: [
        "Income & Fitness Filtering: Targeted fitness keywords (CrossFit, kettlebell) paired with local income levels.",
        "Dynamic Product Catalogs: Used dynamic ads to display products matching users' browsing histories.",
        "Website Retargeting: Designed conversion campaigns retargeting website visitors from the last 4 months.",
      ],
      testimonial: {
        quote: "Leveraging our existing brand awareness and increasing traffic through targeting income and fitness interest helped to facilitate conversions and increase revenue.",
        author: "Vulcan Strength Representative",
        company: "Vulcan Strength Training Systems",
      },
      resultCards: [
        { value: "55.6K", label: "Link Clicks" },
        { value: "108", label: "Purchases" },
        { value: "$77.9K", label: "Revenue" },
      ],
      resultsSections: [
        {
          title: "Ecommerce Results",
          items: [
            "Link Clicks: 55,652 clicks at a low $0.21 CPC.",
            "Purchases Gained: 108 purchases.",
            "ROAS: 5.38 ROAS.",
            "Revenue: $77,941 generated on a $14,480 monthly budget.",
          ],
        },
      ],
    },
  },
  {
    title: "Lady Ease Feminine Care",
    category: "Healthcare",
    sectors: ["Medical", "Consumer Products"],
    image: "/work-samples/lady-ease.webp",
    caseStudy: {
      background:
        "Lady Ease is a feminine skincare brand specializing in natural vaginal moisturizing oils, creams, and serums. They partnered with LYFE Marketing to increase website traffic and build an email list.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Sensitive Topic Barriers: Crafting ads for feminine care that conform to strict social ad policies.",
        "Email Acquisition: Needed a cost-effective way to build an email list for drip campaigns.",
        "Brand Awareness: Brand was new and needed to establish trust around intimate skincare.",
      ],
      solution: [
        "Animated Explainer Videos: Used friendly, animated videos discussing vaginal skin dryness to bypass policy flags.",
        "Lead Gen Funnel: Offered a 10% discount in exchange for email sign-ups using Meta Lead Forms.",
        "Lookalike Matching: Targeted lookalikes of website visitors and social engagers.",
      ],
      testimonial: {
        quote: "The animated video ad was highly effective at bringing in website traffic and building a large retargeting list that fed our lead funnel.",
        author: "Lady Ease Representative",
        company: "Lady Ease",
      },
      resultCards: [
        { value: "3,063", label: "Link Clicks" },
        { value: "160", label: "Facebook Leads" },
        { value: "$2.52", label: "Cost Per Lead" },
      ],
      resultsSections: [
        {
          title: "Traffic & Lead Results",
          items: [
            "Link Clicks: 3,063 clicks at $0.30 CPC.",
            "Facebook Leads Gained: 160 leads at a low $2.52 CPL.",
            "Drip Integration: Subscribed leads into an automated email drip sequence.",
          ],
        },
      ],
    },
  },
  {
    title: "Eat Below the Redline",
    category: "Food",
    sectors: ["Food & Beverage", "Content Marketing"],
    image: "/work-samples/redline.webp",
    caseStudy: {
      background:
        "Eat Plants and Thrive (Eat Below the Redline) helps individuals switch to a whole-food, plant-based diet to manage chronic health conditions. They came to LYFE to build a challenge funnel.",
      services: ["Social Media Advertising"],
      challenge: [
        "Low Initial Sales: High-ticket health courses were difficult to sell directly to cold traffic.",
        "User Engagement: Educational dietary content was not holding attention on social feeds.",
        "Lead Cost Boundaries: Generating low-cost leads that could be nurtured over time.",
      ],
      solution: [
        "Challenge Funnel: Marketed a 5-day challenge for $7 to ease buyers into the brand.",
        "Client Video Assets: Leveraged high-quality video testimonials produced by existing program graduates.",
        "Vegetarian & Health Targeting: Targeted keywords and interests such as vegan, healthy diet, and blood pressure.",
      ],
      testimonial: {
        quote: "The quality and catch lines on the client-produced videos surmount most, allowing intrigue while providing value. Combined with SMS sequences, it was a complete success.",
        author: "Eat Below the Redline Client",
        company: "Eat Plants and Thrive",
      },
      resultCards: [
        { value: "168", label: "Purchases" },
        { value: "2", label: "Conversion Campaigns" },
        { value: "Successful", label: "Upsell Funnel" },
      ],
      resultsSections: [
        {
          title: "Challenge Sales Results",
          items: [
            "Website Purchases: 168 purchases driven in July 2022 across two conversion campaigns.",
            "SMS & Drip Campaigns: Utilized SMS notifications to keep challenge participants active.",
            "Funnel Design: The $7 entry-level challenge successfully led to high-ticket course upsells.",
          ],
        },
      ],
    },
  },
  {
    title: "Clean Program",
    category: "Wellness",
    sectors: ["Health & Wellness", "E-Commerce"],
    image: "/work-samples/clean-program.webp",
    caseStudy: {
      background:
        "Clean Program sells premium cleanses and detox kits founded by Dr. Junger, a well-known wellness expert and author. They wanted to increase brand awareness and e-commerce revenue.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Ad Efficiency: High cost-per-purchase on standard e-commerce campaigns.",
        "Untargeted Traffic: Directing ads to users who were not interested in premium detox products.",
        "Low Retargeting ROI: Retargeting campaigns were exhausting budget without driving sales.",
      ],
      solution: [
        "Product-Specific Ad Sets: Created individual ad sets to advertise specific detox products.",
        "Purchase Lookalike optimization: Run add-to-cart campaigns targeted at purchase lookalike groups.",
        "High-Value Retargeting: Set up separate retargeting funnels for website visitors and previous purchasers.",
      ],
      testimonial: {
        quote: "By using simple, clean graphics and video assets while vigorously testing setups and audiences, we created profitable campaigns.",
        author: "Clean Program Client",
        company: "Clean Program",
      },
      resultCards: [
        { value: "109", label: "Purchases" },
        { value: "$20,637", label: "Revenue" },
        { value: "$15,791", label: "Spent" },
      ],
      resultsSections: [
        {
          title: "Ad Campaign Results",
          items: [
            "Purchases Gained: 109 purchases.",
            "Total Revenue Gained: $20,637 in revenue.",
            "Total Ad Spend: $15,791 spent, maintaining a profitable campaign return.",
          ],
        },
      ],
    },
  },
  {
    title: "Short Videos",
    category: "Video",
    sectors: ["Short Video Marketing", "Content Creation"],
    image: "/work-samples/short-videos.webp",
    caseStudy: {
      background:
        "We have been experimenting with short form videos (TikTok, Reels, and YouTube Shorts) to build brand consumer trust, drive website traffic, and increase sales for small businesses.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Low Organic Views: Small businesses struggle to gain exposure in the fast-moving short video algorithm.",
        "Content Consistency: Producing high-quality videos daily without huge creative overhead.",
        "Audience Alignment: Bridging entertaining videos with actual business leads.",
      ],
      solution: [
        "Audio & Video Testing: Monitored popular sounds and TikTok trends to design optimized assets.",
        "Style Diversification: Tested various layouts including real-people interviews, graphics, and animations.",
        "Interactive Formats: Structured videos with clear calls-to-action to drive website traffic.",
      ],
      testimonial: {
        quote: "Short form videos are what people respond to best today. Small businesses of most any industry can benefit from utilizing them.",
        author: "Video Services Team",
        company: "LYFE Marketing",
      },
      resultCards: [
        { value: "1M+", label: "Total Views" },
        { value: "100%", label: "Brand Exposure Lift" },
        { value: "Multi", label: "Platform Presence" },
      ],
      resultsSections: [
        {
          title: "Top Video Examples & Views",
          items: [
            "TikTok Views: 274.6K views, 116.6K views, and 71.8K views for 'Sherman the CPA'.",
            "TikTok Views (Internal): 17K views for LYFE Accounting, 2,397 views for LYFE Marketing.",
            "Instagram Reels Views: 566K views, 476K views, and 72.8K views for 'Sherman the CPA'.",
            "Instagram Reels Views (Internal): 4,258 views for LYFE Accounting, 12.7K views for LYFE Marketing.",
            "YouTube Shorts: 10K views, 9.2K views, and 8.1K views for LYFE Accounting.",
            "Animated Videos: Testing animated shorts drove 1,840 views and a surge in new followers.",
          ],
        },
      ],
    },
  },
  {
    title: "My Lala Leggings",
    category: "Fashion",
    sectors: ["Apparel / Fashion", "E-Commerce"],
    image: "/work-samples/my-lala-leggings.webp",
    caseStudy: {
      background:
        "My LaLa Leggings is an affordable fashion brand offering stylish, quality leggings and shirts since 2014. They came to LYFE Marketing to improve their social media advertising efficiency.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "High Cost Per Acquisition: Previous campaigns had high cost-per-purchase rates.",
        "Cart Abandonment: A large volume of site visitors left without completing checkouts.",
        "Broad Targeting Waste: Ad spend was wasted on audiences uninterested in fashion.",
      ],
      solution: [
        "Interest-Based Filtering: Targeted specific fashion and apparel-related keyword groups.",
        "Retargeting Campaigns: Deployed retargeting ads to draw back attention from website viewers who left without buying.",
      ],
      testimonial: {
        quote: "My LaLa Leggings came to us to improve their social media advertising, and with our help, they were able to see great results.",
        author: "My Lala Leggings Representative",
        company: "My LaLa Leggings",
      },
      resultCards: [
        { value: "478", label: "Purchases" },
        { value: "$3.65", label: "Cost Per Purchase" },
        { value: "Reduced", label: "Marketing Costs" },
      ],
      resultsSections: [
        {
          title: "Campaign Results",
          items: [
            "New Purchases: 478 purchases driven through optimized ads.",
            "Cost Per Purchase: Reduced marketing costs to just $3.65 per purchase.",
            "Audiences Used: Interest-based fashion targeting and cart retargeting.",
          ],
        },
      ],
    },
  },
  {
    title: "Weston Boucher",
    category: "Social Ads",
    sectors: ["Social Media Ads", "Personal Brand"],
    image: "/work-samples/weston-boucher.webp",
    caseStudy: {
      background:
        "Weston Boucher is a premium men's clothing company founded by model Weston Boucher, specializing in comfortable and stylish clothing. They needed help increasing their brand presence and website traffic.",
      services: ["Social Media Advertising", "Ecommerce Marketing"],
      challenge: [
        "Low Ad Engagement: Ads were failing to capture attention in the men's fashion space.",
        "High Cost Per Page View: Driving traffic to their website was highly expensive.",
        "Conversion Optimization: Website visitors were browsing but not completing purchases.",
      ],
      solution: [
        "Distinct Campaign Content: Developed unique ad creatives for each campaign.",
        "Multi-Platform Ads: Ran targeted ads on Facebook and Instagram using professional model visuals.",
      ],
      testimonial: {
        quote: "When Weston Boucher clothing needed help leveraging their social media platforms, we helped them create responsive ad campaigns that drove traffic and conversions.",
        author: "Weston Boucher Representative",
        company: "Weston Boucher",
      },
      resultCards: [
        { value: "10K+", label: "Views" },
        { value: "35", label: "Purchases" },
        { value: "$0.12", label: "Cost Per Page View" },
      ],
      resultsSections: [
        {
          title: "Ad Campaign Results",
          items: [
            "Total Views: Generated over 10,000 views on Facebook and Instagram.",
            "Cost Per Page View: Page views cost only $0.12 per view.",
            "Engagement & Conversions: Generated over 1,000 product views and 35 purchases.",
          ],
        },
      ],
    },
  },
  {
    title: "Ancient Keto",
    category: "Wellness",
    sectors: ["Health & Wellness", "Social Media Ads"],
    image: "/work-samples/ancient-keto.webp",
    caseStudy: {
      background:
        "Ancient Keto specializes in ketogenic products that help promote healthy weight loss. They came to LYFE to help them generate more qualified leads and raise brand awareness using a lead magnet.",
      services: ["Social Media Advertising"],
      challenge: [
        "Low Lead Volume: Stagnant email list growth made it difficult to launch email campaigns.",
        "Low Conversion Rate: Traffic landed on their home page and exited without signing up.",
        "Audience Warmth: Cold prospects were skeptical of keto supplements.",
      ],
      solution: [
        "Keto Guide Ebook: Created a free beginner-friendly Keto Guide ebook to use as a lead magnet.",
        "Dedicated Landing Page: Designed a conversion-focused landing page showcasing the ebook and collecting emails.",
      ],
      testimonial: {
        quote: "By crafting a responsive landing page with a powerful lead magnet, we boosted our brand awareness and generated a 42% conversion rate.",
        author: "Ancient Keto Representative",
        company: "Ancient Keto",
      },
      resultCards: [
        { value: "42%", label: "Landing Page CTR" },
        { value: "Ebook", label: "Lead Magnet" },
        { value: "More", label: "Qualified Leads" },
      ],
      resultsSections: [
        {
          title: "Lead Magnet Performance",
          items: [
            "Conversion Rate: 42% landing page signup conversion rate.",
            "Lead Magnet: Free 'Keto Guide' ebook successfully built their email subscriber list.",
            "Customer Relationships: Nurtured leads into active product trials and sales.",
          ],
        },
      ],
    },
  },
  {
    title: "Forever Diamonds",
    category: "Jewelry",
    sectors: ["Retail", "Luxury"],
    image: "/work-samples/forever-diamonds.webp",
    caseStudy: {
      background:
        "Forever Diamonds is a premium jewelry store in Georgia's Lenox Mall, offering quality jewelry at affordable prices. They wanted to grow brand awareness and drive foot traffic inside the mall.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Store Visibility: Being located in a huge mall made it difficult to attract passing shoppers.",
        "High Price Point: Luxury jewelry requires high trust before buyers visit physical stores.",
        "Low Engagement: Local social pages had minimal fans and interactions.",
      ],
      solution: [
        "Rolex Offer Campaign: Launched a pre-owned Rolex watch appointment offer.",
        "Social Management: Deployed active Facebook and Instagram management to showcase new arrivals daily.",
      ],
      testimonial: {
        quote: "I was really happy about the 39 Pre-Owned Rolex Watch Offer Claims. This basically means 39 people set up an appointment and made a commitment to visit the store to buy.",
        author: "Malik",
        company: "Forever Diamonds",
      },
      resultCards: [
        { value: "39", label: "Rolex Offer Claims" },
        { value: "10.4K", label: "Facebook Fans" },
        { value: "7.6K", label: "Instagram Followers" },
      ],
      resultsSections: [
        {
          title: "Social Engagement Results",
          items: [
            "Rolex Claims: 39 pre-owned Rolex watch claims leading to physical store appointments.",
            "Facebook Fans: Grew to 10,422 fans at $0.34 per fan.",
            "Instagram Followers: Reached 7,656 followers.",
            "Total Engagements: 45,743 engagements at only $0.03 per engagement.",
          ],
        },
      ],
    },
  },
  {
    title: "Advanced Windows and Siding",
    category: "Home Services",
    sectors: ["Service Business", "Lead Generation"],
    image: "/work-samples/advanced-windows-and-siding.webp",
    caseStudy: {
      background:
        "Advanced Windows and Siding is an Illinois-based door and window replacement company offering services since 1976. They came to us to manage their social media platforms.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Niche Homeowner Targeting: Finding local homeowners who require window or door replacement.",
        "Low Brand Loyalty: High-priced home services often suffer from one-off sales rather than long-term loyalty.",
        "Ad-hoc Social Posts: Existing feeds lacked design consistency and copy research.",
      ],
      solution: [
        "Audience Research: Conducted extensive industry research to design on-brand window/door content.",
        "Retargeting Campaign: Implemented retargeting to sustain customer loyalty and build local referrals.",
      ],
      testimonial: {
        quote: "We liked the content right out of the gates. The research put into our target audience and industry made a huge difference.",
        author: "Advanced Windows Representative",
        company: "Advanced Windows and Siding",
      },
      resultCards: [
        { value: "20%", label: "Audience Growth" },
        { value: "1 Week", label: "Campaign Length" },
        { value: "Increased", label: "Followers & Loyalty" },
      ],
      resultsSections: [
        {
          title: "Campaign Growth Results",
          items: [
            "Audience Growth: Grew their target audience by 20% in just one week.",
            "Social Management: Deployed copywriting and content creation across Facebook and Instagram.",
          ],
        },
      ],
    },
  },
  {
    title: "Egyptian Magic",
    category: "Social Media",
    sectors: ["Beauty", "Social Media Management"],
    image: "/work-samples/egyptian-magic.webp",
    caseStudy: {
      background:
        "Egyptian Magic is a 100% natural, multi-purpose skin balm widely used as a celebrity skin moisturizer. They came to LYFE Marketing to manage their social media channels and drive follower growth.",
      services: ["Ecommerce Marketing Services", "Social Media Marketing Services"],
      challenge: [
        "Aesthetic Standards: Beauty consumers care heavily about Instagram grid layouts, requiring strict creative planning.",
        "Platform Scaling: Follower growth was stagnant across all primary platforms.",
        "User Engagement: Low interaction on product photos.",
      ],
      solution: [
        "Feed Mockup Previews: Sent the client Instagram grid mockups before publishing to maintain aesthetics.",
        "User-Generated Content: Reposted customer photos to build social proof.",
        "Engagement Giveaways: Ran boosted giveaway posts to drive viral interactions.",
      ],
      testimonial: {
        quote: "We helped Egyptian Magic appeal to more social media users, generate over 15,000 new followers, and increase brand awareness.",
        author: "Egyptian Magic Representative",
        company: "Egyptian Magic",
      },
      resultCards: [
        { value: "22.32%", label: "Growth Rate" },
        { value: "15K", label: "Net Audience Growth" },
        { value: "67.2K", label: "Total Audience" },
      ],
      resultsSections: [
        {
          title: "Multi-Platform Results",
          items: [
            "Net Followers: Gained 15,008 new followers across platforms.",
            "Total Audience: Reached 67,233 followers.",
            "Growth Rate: 22.32% overall growth rate (one channel reaching as high as 90.51%).",
          ],
        },
      ],
    },
  },
  {
    title: "Wingstop",
    category: "Restaurant",
    sectors: ["Food & Beverage", "Campaign Strategy"],
    image: "/work-samples/wingstop.webp",
    caseStudy: {
      background:
        "Wingstop is a popular chicken wing restaurant chain with locations across the globe. Wingstop came to LYFE Marketing to increase engagement on Instagram and Twitter to obtain new customers.",
      services: ["Social Media Advertising Services", "Social Media Marketing Services"],
      challenge: [
        "Audience Connection: Converting passive chicken wing fans into active brand followers.",
        "Channel Monitoring: Needed daily monitoring to manage massive social interactions.",
        "Customer Retention: Turning one-time ad clickers into repeat restaurant customers.",
      ],
      solution: [
        "Organic Outreach: Deployed organic follower growth and active daily channel monitoring.",
        "Daily Interaction: Moderated comments and questions to build brand loyalty and encourage repeat dining.",
      ],
      testimonial: {
        quote: "We increased their Instagram & Twitter followers, and fostered engagement through daily monitoring and active outreach to generate repeat customers.",
        author: "Wingstop Representative",
        company: "Wingstop",
      },
      resultCards: [
        { value: "1,305", label: "Instagram Fans" },
        { value: "1,247", label: "Twitter Fans" },
        { value: "Daily", label: "Monitoring" },
      ],
      resultsSections: [
        {
          title: "Campaign Results",
          items: [
            "Instagram Growth: 1,305 new Instagram followers.",
            "Twitter Growth: 1,247 new Twitter followers.",
            "Engagement: Built strong follower engagement through daily channel monitoring.",
          ],
        },
      ],
    },
  },
  {
    title: "Domino's",
    category: "Restaurant",
    sectors: ["Food & Beverage", "Digital Marketing"],
    image: "/work-samples/dominos.webp",
    caseStudy: {
      background:
        "Domino's came to LYFE Marketing with a goal to build more active Facebook fans and respond to every customer comment in a timely manner for 75 of their Washington franchise locations.",
      services: ["Social Media Advertising"],
      challenge: [
        "Localized Moderation: Responding to customer inquiries across 75 distinct franchise locations in a timely manner.",
        "Low Page Likes: Franchise pages had very small local follower counts.",
        "Negative Comments: Managing customer complaints and bad reviews constructively.",
      ],
      solution: [
        "Localized Ad Targeting: Directed page like campaigns at residents local to each specific store.",
        "Boosted Video Content: Promoted localized pizza video assets.",
        "Comment Moderation Program: Managed and responded to all positive and negative reviews daily.",
      ],
      testimonial: {
        quote: "Within just 4 months, we increased their Facebook page likes (or fans) by 3,090 through targeted ads, and fostered engagement through boosted posts and comment moderation.",
        author: "Domino's Franchise Representative",
        company: "Domino's Washington Franchise",
      },
      resultCards: [
        { value: "+197.8%", label: "Facebook Fans Lift" },
        { value: "+137%", label: "Post Engagement Lift" },
        { value: "3,090", label: "New Page Likes" },
      ],
      resultsSections: [
        {
          title: "Franchise Results (4 Months)",
          items: [
            "Page Likes: 3,090 new Facebook page likes (+197.87% increase).",
            "Engagement: 137% increase in Facebook post engagement.",
            "Audiences Targeted: Local residents, email subscribers, and video viewers.",
          ],
        },
      ],
    },
  },
  {
    title: "Mastermine Investments",
    category: "Finance",
    sectors: ["Financial Services", "Lead Generation"],
    image: "/work-samples/mastermine-investments.webp",
    caseStudy: {
      background:
        "Mastermine Investments, LLC is a real estate coaching and mentoring firm providing financial freedom programs. They came to LYFE Marketing to increase lead acquisition.",
      services: ["Social Media Advertising"],
      challenge: [
        "High Lead Costs: Real estate leads are highly competitive, driving up acquisition costs.",
        "Brand Trust: Executive coaching requires high brand trust before leads submit contact info.",
        "Targeting: Identifying users interested in wholesale real estate coaching.",
      ],
      solution: [
        "Familiar Audience Retargeting: Targeted users who had previously engaged with their Facebook page.",
        "Website Custom Audiences: Retargeted website visitors with custom lead ad creatives.",
      ],
      testimonial: {
        quote: "Our ad experts created campaigns targeting familiar audiences, making them more likely to trust us and work with us. As a result, we generated over 520 leads.",
        author: "Mastermine Representative",
        company: "Mastermine Investments, LLC",
      },
      resultCards: [
        { value: "523", label: "Leads Gained" },
        { value: "90 Days", label: "Campaign Length" },
        { value: "$1.43", label: "Cost Per Lead" },
      ],
      resultsSections: [
        {
          title: "Real Estate Lead Results",
          items: [
            "Leads Gained: 523 leads generated in 90 days.",
            "Cost Per Lead: Highly efficient $1.43 cost-per-lead.",
            "Targeting: Cold lookalike audiences and warm custom audiences of Facebook page engagers.",
          ],
        },
      ],
    },
  },
  {
    title: "Loan Cabin",
    category: "Finance",
    sectors: ["Financial Services", "Digital Marketing"],
    image: "/work-samples/loan-cabin.webp",
    caseStudy: {
      background:
        "Loan Cabin is a residential mortgage lending company based in Chicago offering competitive rates and low lender fees. They wanted to build their lead pipeline and social presence.",
      services: ["Social Media Advertising"],
      challenge: [
        "Mortgage Lead Friction: Traditional mortgage lead forms are long and lead to high abandonment rates.",
        "High CPC: Finance keywords have very high costs-per-click.",
        "Local Competition: Competing against giant national mortgage brands.",
      ],
      solution: [
        "Meta LeadGen Forms: Integrated fast, in-app LeadGen forms to reduce form submission friction.",
        "Renters Pain Point Hook: Attacked renting costs in ad copy to drive home loan interest.",
        "Audience Retargeting Mix: Combined lookalike audiences with warm retargeting lists.",
      ],
      testimonial: {
        quote: "Through a strategic ad campaign coupled with LeadGen forms, we put ads in front of lookalikes and retargeting groups, yielding over 200 leads.",
        author: "Loan Cabin Representative",
        company: "Loan Cabin",
      },
      resultCards: [
        { value: "201", label: "Leads Gained" },
        { value: "$6.00", label: "Cost Per Lead" },
        { value: "30 Days", label: "Campaign Length" },
      ],
      resultsSections: [
        {
          title: "Mortgage Lead Results (30 Days)",
          items: [
            "Leads Gained: 201 leads generated in 30 days.",
            "Cost Per Lead: Highly optimized $6.00 cost-per-lead.",
            "Ad Copy elements: Renters pain points, mortgage uniqueness, and clear calls-to-action.",
          ],
        },
      ],
    },
  },
  {
    title: "Celebrate Relaxed Hair",
    category: "Beauty",
    sectors: ["Beauty", "Content Marketing"],
    image: "/work-samples/celebrate-relaxed-hair.webp",
    caseStudy: {
      background:
        "Celebrate Relaxed Hair helps women maintain healthy relaxed hair routines. They came to LYFE Marketing to grow a dedicated community and drive website traffic.",
      services: ["Social Media Marketing Services"],
      challenge: [
        "Community Growth Speed: Needed to grow a highly engaged community quickly.",
        "Dialogue Creation: Social feeds lacked active conversations around hair care tips.",
        "Website Clicks: Getting followers to visit their hair care blog.",
      ],
      solution: [
        "Dialogue Content: Created educational and entertaining content designed to start conversations.",
        "Community Center: Positioned Celebrate Relaxed Hair as the main hub for relaxed hair questions and answers.",
      ],
      testimonial: {
        quote: "LYFE Marketing helped us grow a dedicated community fast, fostering active conversations around our hair tips.",
        author: "Celebrate Relaxed Hair Representative",
        company: "Celebrate Relaxed Hair",
      },
      resultCards: [
        { value: "7,660", label: "New Followers" },
        { value: "+432%", label: "Engagement Lift" },
        { value: "2,125", label: "Conversations Gained" },
      ],
      resultsSections: [
        {
          title: "Community Growth Results",
          items: [
            "Followers Gained: 7,660 new followers across Instagram and Twitter.",
            "Engagement Boost: 432% increase in post engagement.",
            "Conversations: 2,125 active dialogues and comments.",
            "Website Clicks: 225% increase in website traffic.",
          ],
        },
      ],
    },
  },
]

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
                  className={`rounded-full border px-4 py-2.5 transition-colors duration-200 \${
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
                  className={`text-left transition-colors duration-200 \${
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
                  aria-label={`Open \${item.title} case study`}
                >
                  <div className="h-full w-full cursor-pointer">
                    <div className="relative aspect-[1.22/1] overflow-hidden bg-slate-800">
                      <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
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
                      alt={`\${selectedWork.title} project preview`}
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
                    "\${selectedWork.caseStudy.testimonial.quote}"
                    <span className="pointer-events-none absolute right-8 top-3 text-[88px] font-bold leading-none text-lime-400/25">"</span>
                    <footer className="mt-8 text-right text-lg not-italic text-white">
                      - <strong>\${selectedWork.caseStudy.testimonial.author}</strong>, \${selectedWork.caseStudy.testimonial.company}
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
                    {selectedWork.caseStudy.resultsSections ? (
                      selectedWork.caseStudy.resultsSections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-[24px] font-bold text-white">{section.title}</h4>
                          <ul className="mt-4 space-y-2 text-[18px] leading-7 text-white/72">
                            {section.items.map((result) => (
                              <li key={result} className="flex gap-4">
                                <span className="mt-2 h-2 w-5 flex-none rounded-full bg-lime-400" />
                                <span>
                                  {result.includes(":") ? (
                                    <>
                                      <strong>{result.split(":")[0]}:</strong>
                                      {result.slice(result.indexOf(":") + 1)}
                                    </>
                                  ) : (
                                    result
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <>
                        {selectedWork.caseStudy.facebookResults && (
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
                        )}
                        {selectedWork.caseStudy.instagramResults && (
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
                        )}
                      </>
                    )}
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
