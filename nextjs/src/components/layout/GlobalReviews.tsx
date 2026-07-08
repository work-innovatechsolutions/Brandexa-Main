import Script from "next/script";

export default function GlobalReviews() {
  return (
    <section className="brandexa-global-reviews" aria-label="Client reviews">
      <div className="brandexa-global-reviews-inner">
        <p>CLIENT REVIEWS</p>
        <h2>What clients say about Brandexa Growth</h2>
        <div className="brandexa-elfsight-reviews-frame">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-842dbf01-a556-4cad-8da0-22d844e16a2c" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
