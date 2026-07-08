import OurWorkSection from "@/components/sections/OurWorkSection";
import "./our-work.css";

export default function OurWorkPage() {
  return (
    <main className="brandexa-work-page">
      <section className="brandexa-work-hero" aria-label="Our work intro">
        <div className="brandexa-work-hero-inner">
          <p>SELECTED PROJECTS</p>
          <h1>Our Work</h1>
          <span>Bold digital systems, campaigns, and experiences shaped for growth.</span>
        </div>
      </section>
      <OurWorkSection />
    </main>
  );
}
