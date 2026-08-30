# Brandexa - Complete Website Architecture & Admin Panel Specification

> **Purpose**: This document provides a comprehensive technical overview of the **Brandexa** website codebase, data flow, page hierarchy, and backend infrastructure. Use this context to plan and design a scalable, secure **Admin Panel** (CMS & Lead Management Dashboard).

---

## 1. Project Overview

- **Brand Name**: Brandexa (Brandexa Growth)
- **Domain / Website**: Digital Growth & Creative Engineering Agency
- **Target Audience**: High-growth brands, startups, D2C companies, and modern enterprises seeking branding, web development, media production, paid ads, and conversion optimization.
- **Core Value Proposition**: Turning digital attention into measurable revenue through high-converting web experiences, performance creative, and full-funnel marketing.

---

## 2. Technology Stack

### Frontend & Core
- **Framework**: Next.js 16 (App Router with SSR & Static Page Generation)
- **Language**: TypeScript (`.ts`, `.tsx`)
- **React Version**: React 19
- **Bundler**: Turbopack & Webpack
- **Smooth Scrolling**: Lenis (`lenis/react`)
- **Animations**: Framer Motion 12, GSAP 3 (ScrollTrigger), tsParticles Engine & Slim
- **UI Icons**: Lucide React + Elementor SVG Sprite Icons

### Styling & Design System
- **Theme**: Ultra-dark futuristic aesthetic (`#050505` base background, `#000000`, glassmorphism, subtle radial gradients)
- **Accent Palette**: 
  - Primary Accent: Lime Green `#b8ff2c` / `#84cc16` / `#70e000`
  - Text: `#ffffff` (Headings), `rgba(255, 255, 255, 0.72)` (Body/Excerpts)
  - Borders: `rgba(255, 255, 255, 0.08)` to `rgba(184, 255, 44, 0.35)`
- **CSS Architecture**: Tailwind CSS v4 + Global CSS token system (`globals.css`, `home-elementor.css`, page-specific stylesheets).

### Backend & Integrations
- **Primary Database & Auth Backend**: **Firebase** (Project ID: `brandexa-main`)
  - **Firebase Auth**: Admin login, RBAC (Super Admin, Editor, Sales Rep).
  - **Cloud Firestore**: Dynamic collections for Leads, Consultations, Blog Posts, Case Studies, Testimonials, Analytics.
  - **Firebase Storage**: Image uploads for blog covers, portfolio galleries, client logos.
  - **Firebase Analytics**: Event tracking (Measurement ID: `G-PW5VL09M8N`).
  - **Firebase Admin SDK**: Server-side authorized Firestore reads/writes in Next.js Server Actions / API Routes.
- **Transactional Email**: SpaceMail SMTP via Nodemailer (`hello@brandexagrowth.com`, Port 465 SSL).
- **External Webhooks**: Google Apps Script Sheets Webhook (automatic lead backup sheet synchronization).
- **Notifications**: WhatsApp Notify API endpoint (`/api/whatsapp-notify`).

---

## 3. Site Map & Existing Route Hierarchy

### A. Core Public Pages
| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Main landing page featuring interactive hero word cycler, service showcase, stats counter, "Our Works" grid with filter, client testimonials, "Latest Blogs", and consultation CTA. |
| `/about` | **About Us** | Agency story, team philosophy, values, milestones, and brand mission. |
| `/our-work` | **Our Work** | Comprehensive portfolio catalog with category filters and case study previews. |
| `/blogs` | **Blogs (Insights)** | Article catalog with interactive category filters (*Web Dev, UI/UX, Marketing, Content, Social Media*). |
| `/blog/[slug]` | **Individual Blog Post** | Detailed article view with hero banner, rich content, author info, related articles, and consultation CTA. |
| `/contact` | **Contact Us** | Direct inquiry form, email, phone, location details, and agency calendar trigger. |
| `/pricing` | **Pricing Plans** | Package tier comparisons for startups, scaling brands, and enterprises. |
| `/team` | **Our Team** | Leadership, designers, developers, and growth strategists directory. |
| `/faqs` | **FAQs** | Interactive accordion FAQ addressing onboarding, deliverables, pricing, and timelines. |
| `/testimonials`| **Testimonials** | Verified client reviews, video testimonials, and satisfaction metrics. |
| `/image-gallery`| **Image Gallery** | Visual archive of brand assets, photoshoots, and design deliverables. |
| `/video-gallery`| **Video Gallery** | High-production commercial reels, ads, and video case studies. |
| `/privacy-policy`| **Privacy Policy** | Legal privacy statement and cookie tracking disclosures. |

### B. Service Pages (`/services/*`)
1. `/services` (Main Services Hub)
2. `/services/branding-and-identity`
3. `/services/digital-marketing`
4. `/services/creative-content-production`
5. `/services/content-creation`
6. `/services/e-commerce-solutions`
7. `/services/ux-ui-design`
8. `/services/social-media-marketing`
9. `/services/google-ads`
10. `/services/social-media-ads`
11. `/services/video-editing`

### C. Case Studies / Projects (`/projects/*`)
1. `/projects/dynamic-e-commerce-platform`
2. `/projects/innovative-identity-design`
3. `/projects/dynamic-digital-campaign`
4. `/projects/impactful-content-creation`
5. `/projects/visionary-growth-strategy`
6. `/projects/interactive-website-redesign`
7. `/projects/smart-process-optimization`
8. `/projects/future-leaders-program`
9. `/projects/digital-solutions-platform`

### D. Performance Marketing & Ads Funnel (`/ads/*`)
1. `/ads` (Dedicated PPC landing page without standard header navigation)
2. `/ads/account-setup` (Client onboarding portal)
3. `/ads/account-setup/form` (Multi-step interactive client onboarding intake)
4. `/growth` (Dedicated growth strategy page)

---

## 4. Current Data Entities & Schemas

### 1. Lead / Consultation Submission (`/api/consultation`)
- **Trigger**: "Book a Free Consultation" modal buttons (`data-consultation-trigger="true"`, `#book-consultation`).
- **Fields**:
  ```typescript
  interface ConsultationLead {
    id?: string;
    fullName: string;
    email: string;
    phone: string;
    companyName?: string;
    websiteUrl?: string;
    serviceInterested: string[]; // e.g. ["Web Development", "Paid Ads"]
    monthlyBudget?: string;      // e.g. "$2,500 - $5,000"
    projectDetails?: string;
    sourcePage: string;          // Page where form was triggered
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    status: "new" | "contacted" | "meeting_scheduled" | "proposal_sent" | "won" | "lost";
    createdAt: Date | Timestamp;
  }
  ```

### 2. Blog Post Entity (`/blogs` & `/blog/[slug]`)
- **Existing Slugs**:
  - `web-development-essentials`
  - `ui-ux-design-principles`
  - `mobile-optimized-website-needs`
  - `navigating-digital-landscape`
  - `content-marketing-essentials`
  - `hello-world`
- **Fields**:
  ```typescript
  interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: "Web Development" | "UI/UX Design" | "Digital Marketing" | "Content Strategy" | "Social Media";
    tags: string[];
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    };
    featuredImage: string;
    excerpt: string;
    content: string; // Markdown or HTML
    readTime: string; // e.g. "5 min read"
    isFeatured: boolean;
    isPublished: boolean;
    publishedAt: Date | Timestamp;
    updatedAt: Date | Timestamp;
    seo: {
      metaTitle?: string;
      metaDescription?: string;
      canonicalUrl?: string;
    };
  }
  ```

### 3. Portfolio Project / Case Study Entity (`/projects/[slug]`)
- **Fields**:
  ```typescript
  interface ProjectCaseStudy {
    id: string;
    slug: string;
    title: string;
    clientName: string;
    category: string[]; // e.g. ["Branding & Identity", "Web Design", "SEO & Analytics"]
    heroImage: string;
    galleryImages: string[];
    challenge: string;
    solution: string;
    metrics: {
      label: string; // e.g. "Conversion Rate Increase"
      value: string; // e.g. "+184%"
    }[];
    testimonial?: {
      quote: string;
      clientName: string;
      clientRole: string;
    };
    isFeatured: boolean;
    orderIndex: number;
    createdAt: Date | Timestamp;
  }
  ```

---

## 5. Environment Variables & Credentials Setup

```env
# Mailer Configuration
SMTP_HOST=mail.spacemail.com
SMTP_PORT=465
SMTP_USER=hello@brandexagrowth.com
SMTP_PASS=********
SMTP_FROM=hello@brandexagrowth.com
SMTP_SECURE=true
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec

# Firebase Client Configuration (Next.js Public)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC_4lcFrOPDQZApO0n8cfIGNAHvs6-Xcik
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=brandexa-main.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=brandexa-main
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=brandexa-main.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=425843555814
NEXT_PUBLIC_FIREBASE_APP_ID=1:425843555814:web:9129df56879106b6c72a27
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-PW5VL09M8N

# Firebase Admin SDK Configuration (Server-Side)
FIREBASE_PROJECT_ID=brandexa-main
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@brandexa-main.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY_ID=b2f3052f00d2e9e5a37401a7f44d478de6728db3
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_ID=108912408669848902522
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40brandexa-main.iam.gserviceaccount.com
```

---

## 6. Requirements for the Admin Panel

Please generate a modular, production-ready architecture and execution plan for an **Admin Dashboard** with the following capabilities:

1. **Authentication & Authorization**:
   - Secure login route (`/admin/login`) with Firebase Authentication (Email/Password & optional Google OAuth for verified domain `@brandexagrowth.com`).
   - Role-Based Access Control (Super Admin, Editor, Sales Viewer).
   - Protected route middleware in Next.js (`/admin/*`).

2. **Lead & CRM Management (`/admin/leads`)**:
   - Real-time Firestore sync of consultation leads and contact inquiries.
   - Kanban board / Table view with status pills (*New, Contacted, Meeting Scheduled, Closed-Won, Closed-Lost*).
   - Quick filters by date, service, budget range, and source channel.
   - Lead notes, assigned sales member, and 1-click CSV export.

3. **Content Management System (CMS)**:
   - **Blog Manager (`/admin/blogs`)**:
     - Rich Markdown / WYSIWYG editor (with image drag-and-drop to Firebase Storage).
     - Category, tag selector, auto-slug generator, and preview mode.
     - Scheduled publishing and SEO metadata inspector.
   - **Portfolio / Projects Manager (`/admin/projects`)**:
     - Case study builder with dynamic metric counters, image gallery manager, and category tags.
   - **Testimonials & Review Manager (`/admin/testimonials`)**:
     - Client quote editor with client avatar upload and rating scores.

4. **Analytics & Performance Overview (`/admin/dashboard`)**:
   - Overview metrics: Total Inquiries (Month-over-Month), Conversion Rate, Top Performing Services, Latest Leads.
   - Integration with Firebase Analytics & Google Tag Manager.

5. **UI & Aesthetic Guidelines for Admin Panel**:
   - Sleek dark theme matching Brandexa's aesthetic (Slate/Zinc dark backgrounds `#09090b` / `#121215`, glowing Lime `#b8ff2c` active states, subtle glass cards, responsive sidebar navigation).
   - Built using Next.js App Router, Tailwind CSS, Lucide Icons, and React Hook Form with Zod validation.

---
