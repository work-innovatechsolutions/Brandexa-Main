import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { AdHeader } from "@/components/ads/AdHeader";
import { AdFooter } from "@/components/ads/AdFooter";
import { CustomCursor } from "@/components/ads/CustomCursor";
import { StickyMobileCTA } from "@/components/ads/StickyMobileCTA";
import { AdsLenisProvider } from "@/components/ads/AdsLenisProvider";

export const metadata: Metadata = {
  title: "Brandexa Growth | 100% Free Meta Ad Management & Video Creatives",
  description:
    "Getting hundreds of leads but zero qualified buyers? We fix your lead quality with scroll-stopping video creatives and manage your Meta Ads for 100% FREE. Only 5 clients accepted per month.",
  openGraph: {
    title: "Brandexa Growth | 100% Free Meta Ad Management",
    description:
      "We fix your lead quality with scroll-stopping video creatives and manage your Meta Ads for 100% FREE.",
    type: "website",
    siteName: "Brandexa Growth",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-[#050507] text-white selection:bg-emerald-500/30 selection:text-white antialiased`}
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <CustomCursor />
      <AdHeader />
      <main className="w-full">{children}</main>
      <AdFooter />
      <StickyMobileCTA />

      {/* Meta Pixel placeholder — connect before production */}
      {/* <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script> */}

      {/* GTM placeholder — connect before production */}
      {/* <Script id="gtm" strategy="afterInteractive">{`...`}</Script> */}
    </div>
  );
}
