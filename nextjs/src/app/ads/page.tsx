import { HeroSection } from "@/components/ads/HeroSection";
import { ProblemSection } from "@/components/ads/ProblemSection";
import { GrowthSystemSection } from "@/components/ads/GrowthSystemSection";
import { ProcessSection } from "@/components/ads/ProcessSection";
import { OfferSection } from "@/components/ads/OfferSection";
import { ResultsSection } from "@/components/ads/ResultsSection";
import { WhyFreeScarcitySection } from "@/components/ads/WhyFreeScarcitySection";
import { FoundersSection } from "@/components/ads/FoundersSection";
import { QualificationSection } from "@/components/ads/QualificationSection";
import { FinalCTASection } from "@/components/ads/FinalCTASection";
import { BookingSection } from "@/components/ads/BookingSection";

/**
 * Brandexa Growth — Premium Landing Page
 *
 * Conversion flow order:
 * HERO → PROBLEM → GROWTH SYSTEM → HOW IT WORKS → WHAT YOU GET →
 * RESULTS → WHY FREE + SCARCITY → FOUNDERS → QUALIFICATION →
 * FINAL CTA → BOOKING
 *
 * Source of truth: The three Brandexa Growth documents.
 * No fabricated metrics, testimonials, or results.
 */
export default function AdsPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 1. Attention — Hero with dashboard visual */}
      <HeroSection />

      {/* 2. Problem + Agitation — Pain points + Transformation */}
      <ProblemSection />

      {/* 3. Solution — Brand positioning + ecosystem */}
      <GrowthSystemSection />

      {/* 4. Mechanism — 4-step revenue blueprint */}
      <ProcessSection />

      {/* 5. Offer — What you get */}
      <OfferSection />

      {/* 6. Proof — Creative showcase */}
      <ResultsSection />

      {/* 7. Why Free + Scarcity */}
      {/* availableSpots should be connected to real backend data before production */}
      <WhyFreeScarcitySection availableSpots={2} />

      {/* 8. Founders */}
      <FoundersSection />

      {/* 9. Qualification */}
      <QualificationSection />

      {/* 10. Final CTA */}
      <FinalCTASection />

      {/* 11. Booking form */}
      <BookingSection />
    </div>
  );
}
