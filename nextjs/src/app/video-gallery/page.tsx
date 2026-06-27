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
    <div data-elementor-type="wp-page" data-elementor-id="11572" className="elementor elementor-11572">
<div className="elementor-element elementor-element-c86ef9f e-flex e-con-boxed e-con e-parent" data-id="c86ef9f" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-3fa8343 e-con-full e-flex e-con e-child" data-id="3fa8343" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5c8f635 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="5c8f635" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Our <span> video </span></h1> </div>
</div>
<div className="elementor-element elementor-element-671789a elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="671789a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Video Gallery</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-34c660e e-con-full e-flex e-con e-parent" data-id="34c660e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a16a899 e-con-full e-flex e-con e-child" data-id="a16a899" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-66a907e ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="66a907e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-66a907e" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-c14ecfd e-flex e-con-boxed e-con e-parent" data-id="c14ecfd" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-e4e61d5 e-con-full e-flex e-con e-child" data-id="e4e61d5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-d5a395a video-gallery elementor-invisible elementor-widget elementor-widget-elementskit-video-gallery" data-id="d5a395a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_column&quot;:&quot;3&quot;,&quot;ekit_column_tablet&quot;:&quot;2&quot;,&quot;ekit_column_mobile&quot;:&quot;1&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-video-gallery.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <div className="ekit-video-gallery-wrapper">
<div className="ekit-video-gallery ekit-grid ekit-column-3 ekit-column-tablet-2 ekit-column-mobile-1 ekit_play_on" data-filter="{&quot;id&quot;:&quot;d5a395a&quot;,&quot;gridStyle&quot;:&quot;grid&quot;,&quot;layout&quot;:&quot;grid&quot;,&quot;showFilters&quot;:false,&quot;columns&quot;:3,&quot;filterBarClass&quot;:&quot;ekit-filter-bar-wrapper&quot;,&quot;filterBarBtnGroupClass&quot;:&quot;elementskit-main-filter&quot;,&quot;filterBtnClass&quot;:&quot;ekit-filter-btn&quot;,&quot;filterBarStyleClass&quot;:&quot;elementskit_filter_&quot;}" data-config="{&quot;rtl&quot;:false,&quot;arrows&quot;:false,&quot;dots&quot;:false,&quot;prevArrow&quot;:&quot;&quot;,&quot;nextArrow&quot;:&quot;&quot;,&quot;autoplay&quot;:false,&quot;speed&quot;:1000,&quot;infinite&quot;:false,&quot;slidesPerView&quot;:4,&quot;slidesPerGroup&quot;:&quot;&quot;,&quot;pauseOnMouseEnter&quot;:false,&quot;loop&quot;:false,&quot;breakpointsInverse&quot;:true,&quot;breakpoints&quot;:{&quot;360&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;768&quot;:{&quot;slidesPerView&quot;:2,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;1024&quot;:{&quot;slidesPerView&quot;:4,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:15}}}">
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-1.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-2.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-3.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-4.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-5.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-6.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-7.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-8.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
<div data-category="" className="ekit-video-item filter-item">
<a className="video-link popup" href="https://www.youtube.com/watch?v=Y-x0efG1seA" data-url="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0">
<img decoding="async" src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/gallery-9.jpg" alt="Video thumb" />
<svg aria-hidden="true" className="video-icon e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
</div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
  );
}
