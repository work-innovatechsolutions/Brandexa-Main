export type AdminRole = "super_admin" | "editor" | "sales_viewer";
export type AdminStatus = "active" | "invited" | "disabled";

export interface AdminUser {
  uid: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: AdminRole;
  status: AdminStatus;
  permissions?: string[];
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export type ContentStatus = "draft" | "published" | "scheduled" | "archived";

export interface SeoMetadata {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  robots?: string;
  keywords?: string[];
}

export interface SectionBlock {
  id: string;
  type: string;
  title: string;
  description?: string;
  orderIndex: number;
  isVisible: boolean;
  isDraft?: boolean;
  content: Record<string, any>;
  updatedAt?: string;
}

export interface CmsPage {
  id: string;
  title: string;
  slug: string;
  route: string;
  description?: string;
  status: ContentStatus;
  seo?: SeoMetadata;
  sectionsOrder: string[];
  lastUpdated: string;
  updatedBy: string;
  hasDraftChanges?: boolean;
}

export interface CmsService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  heroImage: string;
  capabilities: string[];
  process: { step: string; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  relatedProjects?: string[];
  cta: { title: string; buttonText: string; buttonUrl: string };
  seo?: SeoMetadata;
  isPublished: boolean;
  orderIndex: number;
  updatedAt: string;
}

export interface DynamicMetric {
  id: string;
  label: string;
  value: string;
}

export interface CmsProject {
  id: string;
  title: string;
  clientName: string;
  slug: string;
  categories: string[];
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  solution: string;
  metrics: DynamicMetric[];
  testimonial?: {
    quote: string;
    clientName: string;
    clientRole: string;
    avatarUrl?: string;
  };
  isFeatured: boolean;
  orderIndex: number;
  seo?: SeoMetadata;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CmsBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  featuredImage: string;
  excerpt: string;
  content: string; // Markdown or rich HTML
  readTime: string;
  isFeatured: boolean;
  status: ContentStatus;
  publishedAt?: string;
  scheduledAt?: string;
  updatedAt: string;
  seo?: SeoMetadata;
}

export interface CmsTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  isFeatured: boolean;
  orderIndex: number;
  updatedAt: string;
}

export interface CmsTeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  orderIndex: number;
  isVisible: boolean;
  updatedAt: string;
}

export interface CmsFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
  orderIndex: number;
  isVisible: boolean;
  updatedAt: string;
}

export interface CmsPricingPlan {
  id: string;
  planName: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  ctaText: string;
  ctaUrl: string;
  orderIndex: number;
  isVisible: boolean;
  updatedAt: string;
}

export interface MediaAsset {
  id: string;
  fileUrl: string;
  filename: string;
  mimeType: string;
  sizeBytes: number;
  dimensions?: { width: number; height: number };
  folder: string;
  altText: string;
  caption?: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaFolder {
  id: string;
  name: string;
  slug: string;
  parentFolderId?: string;
  assetCount: number;
  createdAt: string;
}

export interface GlobalSettings {
  general: {
    websiteName: string;
    tagline: string;
    contactEmail: string;
    phone: string;
    address: string;
    socialLinks: {
      linkedin?: string;
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
    logoUrl: string;
    faviconUrl: string;
  };
  header: {
    logoUrl: string;
    ctaText: string;
    ctaUrl: string;
  };
  footer: {
    description: string;
    copyrightText: string;
  };
  globalSeo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultOgImage: string;
  };
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  adminUid: string;
  adminName: string;
  action: string;
  targetType: "page" | "section" | "service" | "project" | "blog" | "testimonial" | "team" | "faq" | "pricing" | "media" | "seo" | "admin" | "settings";
  targetId?: string;
  description: string;
}
