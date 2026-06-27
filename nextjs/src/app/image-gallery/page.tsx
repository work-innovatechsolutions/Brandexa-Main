"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#000" }} />
    );
  }

  return (
    <div data-elementor-type="wp-page" data-elementor-id="4562" className="elementor elementor-4562">
<div className="elementor-element elementor-element-531fd5a e-flex e-con-boxed e-con e-parent" data-id="531fd5a" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-e5c3067 e-con-full e-flex e-con e-child" data-id="e5c3067" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4234d9e at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="4234d9e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Image <span> gallery </span></h1> </div>
</div>
<div className="elementor-element elementor-element-849f791 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="849f791" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Image gallery</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d516879 e-con-full e-flex e-con e-parent" data-id="d516879" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-ad10062 e-con-full e-flex e-con e-child" data-id="ad10062" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-3dfc928 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="3dfc928" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-3dfc928" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
<div className="ekit-content-items">
<div className="ticker ekitMarqueeSwiper ekit-marquee">
<div className="marquee-wrapper">
<div className="elementor-repeater-item-1b6f577 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Custom Branding</a>
</div>
</div>
<div className="elementor-repeater-item-0cc9e5b ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Website Design</a>
</div>
</div>
<div className="elementor-repeater-item-65ae54a ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Digital Marketing</a>
</div>
</div>
<div className="elementor-repeater-item-311850b ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Strategy Consulting</a>
</div>
</div>
<div className="elementor-repeater-item-f7eac34 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Analytics & Reporting</a>
</div>
</div>
<div className="elementor-repeater-item-3b64483 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Custom Branding</a>
</div>
</div>
<div className="elementor-repeater-item-ac912d8 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Website Design</a>
</div>
</div>
<div className="elementor-repeater-item-9afc3e8 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Digital Marketing</a>
</div>
</div>
<div className="elementor-repeater-item-e84bd52 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Strategy Consulting</a>
</div>
</div>
<div className="elementor-repeater-item-c85c956 ekit-marquee-item ticker-item">
<img decoding="async" width="24" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" className="attachment-full size-full wp-image-345" alt="" />
<div className="ekit-title-and-description">
<a>Analytics & Reporting</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e3723d1 e-flex e-con-boxed e-con e-parent" data-id="e3723d1" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-8706e3b e-con-full e-flex e-con e-child" data-id="8706e3b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-114d08e gallery-spacing-custom page-gallery-box elementor-invisible elementor-widget elementor-widget-image-gallery" data-id="114d08e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-gallery.default">
<div className="elementor-widget-container">
<div className="elementor-image-gallery">
<div id="gallery-1" className="gallery galleryid-4562 gallery-columns-3 gallery-size-full"><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="our-value-img" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDU5OSwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL291ci12YWx1ZS1pbWctMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/our-value-img-3.webp"><img fetchPriority="high" decoding="async" width="332" height="259" src="/wp-content/uploads/2024/11/our-value-img-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/our-value-img-3.webp 332w, ./wp-content/uploads/2024/11/our-value-img-3-300x234.jpg 300w" sizes="(max-width: 332px) 100vw, 332px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="our-vision-img" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwMCwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL291ci12aXNpb24taW1nLTMud2VicCIsInNsaWRlc2hvdyI6IjExNGQwOGUifQ%3D%3D" href="/wp-content/uploads/2024/11/our-vision-img-3.webp"><img decoding="async" width="332" height="259" src="/wp-content/uploads/2024/11/our-vision-img-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/our-vision-img-3.webp 332w, ./wp-content/uploads/2024/11/our-vision-img-3-300x234.jpg 300w" sizes="(max-width: 332px) 100vw, 332px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="why-choose-image" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwMSwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3doeS1jaG9vc2UtaW1hZ2UtMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/why-choose-image-3.webp"><img loading="lazy" decoding="async" width="594" height="549" src="/wp-content/uploads/2024/11/why-choose-image-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/why-choose-image-3.webp 594w, ./wp-content/uploads/2024/11/why-choose-image-3-300x277.jpg 300w" sizes="(max-width: 594px) 100vw, 594px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="service-process-step-1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwMiwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3NlcnZpY2UtcHJvY2Vzcy1zdGVwLTEtMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/service-process-step-1-3.webp"><img loading="lazy" decoding="async" width="393" height="351" src="/wp-content/uploads/2024/11/service-process-step-1-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-1-3.webp 393w, ./wp-content/uploads/2024/11/service-process-step-1-3-300x268.jpg 300w" sizes="(max-width: 393px) 100vw, 393px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="service-process-step-3" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwMywidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3NlcnZpY2UtcHJvY2Vzcy1zdGVwLTMtMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/service-process-step-3-3.webp"><img loading="lazy" decoding="async" width="393" height="353" src="/wp-content/uploads/2024/11/service-process-step-3-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-3-3.webp 393w, ./wp-content/uploads/2024/11/service-process-step-3-3-300x269.jpg 300w" sizes="(max-width: 393px) 100vw, 393px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="service-process-step-2" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwNCwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3NlcnZpY2UtcHJvY2Vzcy1zdGVwLTItMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/service-process-step-2-3.webp"><img loading="lazy" decoding="async" width="392" height="351" src="/wp-content/uploads/2024/11/service-process-step-2-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-2-3.webp 392w, ./wp-content/uploads/2024/11/service-process-step-2-3-300x269.jpg 300w" sizes="(max-width: 392px) 100vw, 392px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon portrait">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="why-choose-bg-shape" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwNSwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3doeS1jaG9vc2UtYmctc2hhcGUtMy53ZWJwIiwic2xpZGVzaG93IjoiMTE0ZDA4ZSJ9" href="/wp-content/uploads/2024/11/why-choose-bg-shape-3.webp"><img loading="lazy" decoding="async" width="310" height="323" src="/wp-content/uploads/2024/11/why-choose-bg-shape-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/why-choose-bg-shape-3.webp 310w, ./wp-content/uploads/2024/11/why-choose-bg-shape-3-288x300.png 288w" sizes="(max-width: 310px) 100vw, 310px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon portrait">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="team-1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwNiwidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL3RlYW0tMS0zLndlYnAiLCJzbGlkZXNob3ciOiIxMTRkMDhlIn0%3D" href="/wp-content/uploads/2024/11/team-1-3.webp"><img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-1-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/team-1-3.webp 400w, ./wp-content/uploads/2024/11/team-1-3-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" /></a>
</div></figure><figure className="gallery-item">
<div className="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="114d08e" data-elementor-lightbox-title="experts-rating-video-bg" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDYwNywidXJsIjoiaHR0cHM6XC9cL2JyYW5kZXhhZ3Jvd3RoLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMTFcL2V4cGVydHMtcmF0aW5nLXZpZGVvLWJnLTMud2VicCIsInNsaWRlc2hvdyI6IjExNGQwOGUifQ%3D%3D" href="/wp-content/uploads/2024/11/experts-rating-video-bg-3.webp"><img loading="lazy" decoding="async" width="303" height="220" src="/wp-content/uploads/2024/11/experts-rating-video-bg-3.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/experts-rating-video-bg-3.webp 303w, ./wp-content/uploads/2024/11/experts-rating-video-bg-3-300x218.jpg 300w" sizes="(max-width: 303px) 100vw, 303px" /></a>
</div></figure>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  );
}
