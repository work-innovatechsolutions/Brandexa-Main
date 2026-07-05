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
    <div data-elementor-type="wp-page" data-elementor-id="230" className="elementor elementor-230">
<div className="elementor-element elementor-element-9918e5e e-flex e-con-boxed e-con e-parent" data-id="9918e5e" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-2b16294 e-con-full e-flex e-con e-child" data-id="2b16294" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-9de6665 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="9de6665" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Digital <span>marketing</span></h1> </div>
</div>
<div className="elementor-element elementor-element-56f68b8 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="56f68b8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li><a href="/services" title="Services">Services</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Digital Marketing</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e40a63a e-con-full e-flex e-con e-parent" data-id="e40a63a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-2dd28a5 e-con-full e-flex e-con e-child" data-id="2dd28a5" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-cfc43c0 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="cfc43c0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-cfc43c0" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-b7de5c7 page-service-single e-flex e-con-boxed e-con e-parent" data-id="b7de5c7" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-2842c76 e-con-full e-flex e-con e-child" data-id="2842c76" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-2bcc125 e-con-full e-flex e-con e-child" data-id="2bcc125" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1961aa3 service-feature-image image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="1961aa3" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img fetchPriority="high" decoding="async" width="1200" height="800" src="/wp-content/uploads/2024/11/service-single-img-2.webp" className="attachment-full size-full wp-image-335" alt="" srcSet="./wp-content/uploads/2024/11/service-single-img-2.webp 1200w, ./wp-content/uploads/2024/11/service-single-img-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/service-single-img-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/service-single-img-2-768x512.jpg 768w" sizes="(max-width: 1200px) 100vw, 1200px" /> </div>
</div>
<div className="elementor-element elementor-element-75fc2c8 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="75fc2c8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital marketing services are designed to elevate your brand and reach your target audience effectively. We develop customized strategies that include SEO, PPC advertising, social media marketing, content marketing, and email campaigns. By leveraging data-driven insights and the latest trends, we maximize engagement, drive traffic, and boost conversions, ensuring a measurable return on your investment. Let us help you grow your digital presence and achieve your business goals.</p><p>With a focus on data-driven insights, we build customized strategies that drive traffic, boost engagement, and maximize ROI. Let us help you reach your business goals with impactful digital marketing</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-746dfc3 e-con-full e-flex e-con e-child" data-id="746dfc3" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1246742 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="1246742" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Key <span>feature</span> of digital marketing</h2> </div>
</div>
<div className="elementor-element elementor-element-0dbb9cd elementor-invisible elementor-widget elementor-widget-text-editor" data-id="0dbb9cd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital marketing approach is a data-driven strategy that combines targeted outreach with creative content. We focus on reaching the right audience through precision techniques like SEO, PPC, and social media advertising, supported by engaging content marketing and email campaigns.</p><p>We utilize audience segmentation to divide your customer base into distinct groups based on demographics, interests, and behaviors. This allows us to deliver personalized content and messaging, ensuring relevance and higher engagement rates.</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-38d4144 e-con-full e-flex e-con e-child" data-id="38d4144" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-398bcc1 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-id="398bcc1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Content Marketing That Tells Your Brand's Story</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Personalized Email Marketing To Nurture Leads</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Social Media Marketing That Engages And Converts</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Comprehensive SEO Services For Visibility</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Performance Analytics & Reporting</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg> </span>
<span className="elementor-icon-list-text">Performance Analytics & Reporting</span>
</li>
</ul>
</div>
</div>
<div className="elementor-element elementor-element-c470b18 elementor-widget__width-initial elementor-widget-mobile__width-inherit service-entry-image image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="c470b18" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img decoding="async" width="343" height="303" src="/wp-content/uploads/2024/11/service-entry-img-2.webp" className="attachment-full size-full wp-image-570" alt="" srcSet="./wp-content/uploads/2024/11/service-entry-img-2.webp 343w, ./wp-content/uploads/2024/11/service-entry-img-2-300x265.jpg 300w" sizes="(max-width: 343px) 100vw, 343px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-0920b5e e-con-full e-flex e-con e-child" data-id="0920b5e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-206659d at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="206659d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Our <span>process</span> of digital marketing</h2> </div>
</div>
<div className="elementor-element elementor-element-3dc7582 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="3dc7582" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital marketing process begins with discovery and research to understand your goals. We then develop a tailored strategy and implement campaigns across various channels. Continuous monitoring and optimization ensure effectiveness, followed by regular reporting to track performance. Finally, we refine and scale efforts for sustained growth and success.</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-4b73f4a e-con-full e-flex e-con e-child" data-id="4b73f4a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c403016 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="c403016" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-61a6a08 e-con-full e-flex e-con e-child" data-id="61a6a08" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c56ea98 process-step-header-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="c56ea98" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M9.28585 17.1429C13.6252 17.1429 17.143 13.6251 17.143 9.28573C17.143 4.94635 13.6252 1.42859 9.28585 1.42859C4.94647 1.42859 1.42871 4.94635 1.42871 9.28573C1.42871 13.6251 4.94647 17.1429 9.28585 17.1429Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.7146 17.1429C35.0539 17.1429 38.5717 13.6251 38.5717 9.28573C38.5717 4.94635 35.0539 1.42859 30.7146 1.42859C26.3752 1.42859 22.8574 4.94635 22.8574 9.28573C22.8574 13.6251 26.3752 17.1429 30.7146 17.1429Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.28585 38.5715C13.6252 38.5715 17.143 35.0537 17.143 30.7143C17.143 26.3749 13.6252 22.8572 9.28585 22.8572C4.94647 22.8572 1.42871 26.3749 1.42871 30.7143C1.42871 35.0537 4.94647 38.5715 9.28585 38.5715Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.7146 38.5715C35.0539 38.5715 38.5717 35.0537 38.5717 30.7143C38.5717 26.3749 35.0539 22.8572 30.7146 22.8572C26.3752 22.8572 22.8574 26.3749 22.8574 30.7143C22.8574 35.0537 26.3752 38.5715 30.7146 38.5715Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-432e55f elementor-widget elementor-widget-icon-box" data-id="432e55f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							STEP						</span>
</h3>
<p className="elementor-icon-box-description">
						01					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-cc631a2 elementor-widget elementor-widget-image-box" data-id="cc631a2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Discovery Phase</h3><p className="elementor-image-box-description">Initial consultation to understand your brand, goals, and target audience Conducting research.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-7b0e8f5 e-con-full e-flex e-con e-child" data-id="7b0e8f5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f68c608 process-step-image image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="f68c608" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="393" height="351" src="/wp-content/uploads/2024/11/service-process-step-1-2.webp" className="attachment-full size-full wp-image-1103" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-1-2.webp 393w, ./wp-content/uploads/2024/11/service-process-step-1-2-300x268.jpg 300w" sizes="(max-width: 393px) 100vw, 393px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-2b7f934 e-con-full e-flex e-con e-child" data-id="2b7f934" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c9ff342 process-step-image image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="c9ff342" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="392" height="351" src="/wp-content/uploads/2024/11/service-process-step-2-2.webp" className="attachment-full size-full wp-image-1297" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-2-2.webp 392w, ./wp-content/uploads/2024/11/service-process-step-2-2-300x269.jpg 300w" sizes="(max-width: 392px) 100vw, 392px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-ee2d261 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="ee2d261" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-e1003aa e-con-full e-flex e-con e-child" data-id="e1003aa" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4508010 process-step-header-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="4508010" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b47ada2 elementor-widget elementor-widget-icon-box" data-id="b47ada2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							STEP						</span>
</h3>
<p className="elementor-icon-box-description">
						02					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-2eedb62 elementor-widget elementor-widget-image-box" data-id="2eedb62" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Implementation</h3><p className="elementor-image-box-description">Initial consultation to understand your brand, goals, and target audience Conducting research.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-abd7fbd e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="abd7fbd" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-d353d2d e-con-full e-flex e-con e-child" data-id="d353d2d" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-aa96b73 process-step-header-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="aa96b73" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a44d6fb elementor-widget elementor-widget-icon-box" data-id="a44d6fb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							STEP						</span>
</h3>
<p className="elementor-icon-box-description">
						03					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1cab61b elementor-widget elementor-widget-image-box" data-id="1cab61b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Collaboration</h3><p className="elementor-image-box-description">Initial consultation to understand your brand, goals, and target audience Conducting research.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-f2b0f70 e-con-full e-flex e-con e-child" data-id="f2b0f70" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-979d48f process-step-image image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="979d48f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="393" height="353" src="/wp-content/uploads/2024/11/service-process-step-3-2.webp" className="attachment-full size-full wp-image-1296" alt="" srcSet="./wp-content/uploads/2024/11/service-process-step-3-2.webp 393w, ./wp-content/uploads/2024/11/service-process-step-3-2-300x269.jpg 300w" sizes="(max-width: 393px) 100vw, 393px" /> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-ea3ed91 e-con-full e-flex e-con e-child" data-id="ea3ed91" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-36c2089 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="36c2089" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Lets address your <span>questions</span> today!</h2> </div>
</div>
<div className="elementor-element elementor-element-2e92f3e elementor-invisible elementor-widget elementor-widget-elementskit-accordion" data-id="2e92f3e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-accordion.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-accordion accoedion-primary" id="accordion-6a3d8ceca7c0c">
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-0-2e92f3e">
<a href="#collapse-77754716a3d8ceca7c0c" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-77754716a3d8ceca7c0c" aria-expanded="false" aria-controls="Collapse-77754716a3d8ceca7c0c">
<span className="ekit-accordion-title">What services does your agency offer?</span>
<div className="ekit_accordion_icon_group">
<div className="ekit_accordion_normal_icon">
{/* Normal Icon */}
<svg className="e-font-icon-svg e-fas-plus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> </div>
<div className="ekit_accordion_active_icon">
{/* Active Icon */}
<svg className="e-font-icon-svg e-fas-minus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg> </div>
</div>
</a>
</div>
<div id="Collapse-77754716a3d8ceca7c0c" className="collapse" aria-labelledby="primaryHeading-0-2e92f3e" data-parent="#accordion-6a3d8ceca7c0c">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card active">
<div className="elementskit-card-header" id="primaryHeading-1-2e92f3e">
<a href="#collapse-e260b7e6a3d8ceca7c0c" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-e260b7e6a3d8ceca7c0c" aria-expanded="true" aria-controls="Collapse-e260b7e6a3d8ceca7c0c">
<span className="ekit-accordion-title">How long does a typical project take?</span>
<div className="ekit_accordion_icon_group">
<div className="ekit_accordion_normal_icon">
{/* Normal Icon */}
<svg className="e-font-icon-svg e-fas-plus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> </div>
<div className="ekit_accordion_active_icon">
{/* Active Icon */}
<svg className="e-font-icon-svg e-fas-minus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg> </div>
</div>
</a>
</div>
<div id="Collapse-e260b7e6a3d8ceca7c0c" className="show collapse" aria-labelledby="primaryHeading-1-2e92f3e" data-parent="#accordion-6a3d8ceca7c0c">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-2-2e92f3e">
<a href="#collapse-2b87c736a3d8ceca7c0c" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-2b87c736a3d8ceca7c0c" aria-expanded="false" aria-controls="Collapse-2b87c736a3d8ceca7c0c">
<span className="ekit-accordion-title">Do you work with small businesses?</span>
<div className="ekit_accordion_icon_group">
<div className="ekit_accordion_normal_icon">
{/* Normal Icon */}
<svg className="e-font-icon-svg e-fas-plus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> </div>
<div className="ekit_accordion_active_icon">
{/* Active Icon */}
<svg className="e-font-icon-svg e-fas-minus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg> </div>
</div>
</a>
</div>
<div id="Collapse-2b87c736a3d8ceca7c0c" className="collapse" aria-labelledby="primaryHeading-2-2e92f3e" data-parent="#accordion-6a3d8ceca7c0c">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-3-2e92f3e">
<a href="#collapse-0fc63786a3d8ceca7c0c" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-0fc63786a3d8ceca7c0c" aria-expanded="false" aria-controls="Collapse-0fc63786a3d8ceca7c0c">
<span className="ekit-accordion-title">Can you help with existing websites?</span>
<div className="ekit_accordion_icon_group">
<div className="ekit_accordion_normal_icon">
{/* Normal Icon */}
<svg className="e-font-icon-svg e-fas-plus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> </div>
<div className="ekit_accordion_active_icon">
{/* Active Icon */}
<svg className="e-font-icon-svg e-fas-minus-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg> </div>
</div>
</a>
</div>
<div id="Collapse-0fc63786a3d8ceca7c0c" className="collapse" aria-labelledby="primaryHeading-3-2e92f3e" data-parent="#accordion-6a3d8ceca7c0c">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
</div>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-11c4182 e-con-full e-flex e-con e-child" data-id="11c4182" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5446d87 e-con-full sticky-column e-flex e-con e-child" data-id="5446d87" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-604596a e-con-full e-flex elementor-invisible e-con e-child" data-id="604596a" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-db151c1 elementor-widget elementor-widget-artistic-elementor-template" data-id="db151c1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="artistic-elementor-template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<style id="elementor-post-10010" dangerouslySetInnerHTML={{'__html': `.elementor-10010 .elementor-element.elementor-element-9a60569{--display:flex;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--overlay-opacity:0.4;--border-radius:30px 30px 30px 30px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;overflow:visible;}.elementor-10010 .elementor-element.elementor-element-9a60569::before, .elementor-10010 .elementor-element.elementor-element-9a60569 > .elementor-background-video-container::before, .elementor-10010 .elementor-element.elementor-element-9a60569 > .e-con-inner > .elementor-background-video-container::before, .elementor-10010 .elementor-element.elementor-element-9a60569 > .elementor-background-slideshow::before, .elementor-10010 .elementor-element.elementor-element-9a60569 > .e-con-inner > .elementor-background-slideshow::before, .elementor-10010 .elementor-element.elementor-element-9a60569 > .elementor-motion-effects-container > .elementor-motion-effects-layer::before{background-color:var( --e-global-color-secondary );--background-overlay:'';}.elementor-widget-heading .elementor-heading-title{font-family:var( --e-global-typography-primary-font-family ), Sans-serif;font-size:var( --e-global-typography-primary-font-size );font-weight:var( --e-global-typography-primary-font-weight );line-height:var( --e-global-typography-primary-line-height );color:var( --e-global-color-primary );}.elementor-10010 .elementor-element.elementor-element-8b4af0c > .elementor-widget-container{padding:40px 40px 30px 40px;border-style:solid;border-width:0px 0px 1px 0px;border-color:var( --e-global-color-divider );}.elementor-10010 .elementor-element.elementor-element-8b4af0c .elementor-heading-title{font-family:var( --e-global-typography-secondary-font-family ), Sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );line-height:var( --e-global-typography-secondary-line-height );}.elementor-widget-icon-list .elementor-icon-list-item:not(:last-child):after{border-color:var( --e-global-color-text );}.elementor-widget-icon-list .elementor-icon-list-icon i{color:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-icon svg{fill:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-item > .elementor-icon-list-text, .elementor-widget-icon-list .elementor-icon-list-item > a{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );line-height:var( --e-global-typography-text-line-height );}.elementor-widget-icon-list .elementor-icon-list-text{color:var( --e-global-color-secondary );}.elementor-10010 .elementor-element.elementor-element-49d4b4b > .elementor-widget-container{padding:30px 40px 40px 40px;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(60px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(60px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(60px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-60px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-60px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-item:not(:last-child):after{content:"";width:100%;border-color:var( --e-global-color-divider );}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child):after{border-block-start-style:solid;border-block-start-width:1px;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:not(:last-child):after{border-inline-start-style:solid;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-inline-items .elementor-icon-list-item:not(:last-child):after{border-inline-start-width:1px;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-icon i{color:var( --e-global-color-accent );transition:color 0.3s;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-icon svg{fill:var( --e-global-color-accent );transition:fill 0.3s;}.elementor-10010 .elementor-element.elementor-element-49d4b4b{--e-icon-list-icon-size:26px;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-text{color:var( --e-global-color-primary );transition:color 0.3s;}@media(max-width:1024px){.elementor-widget-heading .elementor-heading-title{font-size:var( --e-global-typography-primary-font-size );line-height:var( --e-global-typography-primary-line-height );}.elementor-10010 .elementor-element.elementor-element-8b4af0c > .elementor-widget-container{padding:30px 30px 20px 30px;}.elementor-10010 .elementor-element.elementor-element-8b4af0c .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );}.elementor-widget-icon-list .elementor-icon-list-item > .elementor-icon-list-text, .elementor-widget-icon-list .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );}.elementor-10010 .elementor-element.elementor-element-49d4b4b > .elementor-widget-container{padding:20px 30px 30px 30px;}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(40px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(40px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(40px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-40px/2);}.elementor-10010 .elementor-element.elementor-element-49d4b4b .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-40px/2);}}@media(max-width:767px){.elementor-widget-heading .elementor-heading-title{font-size:var( --e-global-typography-primary-font-size );line-height:var( --e-global-typography-primary-line-height );}.elementor-10010 .elementor-element.elementor-element-8b4af0c > .elementor-widget-container{padding:20px 20px 20px 20px;}.elementor-10010 .elementor-element.elementor-element-8b4af0c .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );}.elementor-widget-icon-list .elementor-icon-list-item > .elementor-icon-list-text, .elementor-widget-icon-list .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );}.elementor-10010 .elementor-element.elementor-element-49d4b4b > .elementor-widget-container{padding:20px 20px 20px 20px;}}`}} /> <div data-elementor-type="section" data-elementor-id="10010" className="elementor elementor-10010">
<div className="elementor-element elementor-element-9a60569 e-con-full backdrop-filter e-flex e-con e-child" data-id="9a60569" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-8b4af0c at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="8b4af0c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Services Category</h2> </div>
</div>
<div className="elementor-element elementor-element-49d4b4b elementor-align-start services-category-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="49d4b4b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<a href="./services/branding-and-identity/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">Branding And Identity</span>
</a>
</li>
<li className="elementor-icon-list-item">
<a href="./services/digital-marketing/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">Digital Marketing</span>
</a>
</li>
<li className="elementor-icon-list-item">
<a href="./services/creative-content-production/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">Creative Content Production</span>
</a>
</li>
<li className="elementor-icon-list-item">
<a href="./services/content-creation/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">Content Creation</span>
</a>
</li>
<li className="elementor-icon-list-item">
<a href="./services/e-commerce-solutions/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">E-Commerce Solutions</span>
</a>
</li>
<li className="elementor-icon-list-item">
<a href="./services/ux-ui-design/index.html">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-icon-list-text">UX/UI Design</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-56f27e6 e-con-full e-flex elementor-invisible e-con e-child" data-id="56f27e6" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-fd38d0d elementor-widget elementor-widget-artistic-elementor-template" data-id="fd38d0d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="artistic-elementor-template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<style id="elementor-post-10031" dangerouslySetInnerHTML={{'__html': `.elementor-10031 .elementor-element.elementor-element-3ab4e93{--display:flex;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--overlay-opacity:0.4;border-style:solid;--border-style:solid;border-width:1px 1px 1px 1px;--border-top-width:1px;--border-right-width:1px;--border-bottom-width:1px;--border-left-width:1px;border-color:var( --e-global-color-divider );--border-color:var( --e-global-color-divider );--border-radius:30px 30px 30px 30px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;overflow:visible;}.elementor-10031 .elementor-element.elementor-element-3ab4e93:not(.elementor-motion-effects-element-type-background), .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("./wp-content/uploads/2024/11/sidebar-cta-bg-2.svg");background-position:center center;background-repeat:no-repeat;background-size:cover;}.elementor-10031 .elementor-element.elementor-element-3ab4e93::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-background-video-container::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .e-con-inner > .elementor-background-video-container::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-background-slideshow::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .e-con-inner > .elementor-background-slideshow::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-motion-effects-container > .elementor-motion-effects-layer::before{background-color:var( --e-global-color-secondary );--background-overlay:'';}.elementor-10031 .elementor-element.elementor-element-75854a4.ekit-equal-height-enable,
					.elementor-10031 .elementor-element.elementor-element-75854a4.ekit-equal-height-enable > div,
					.elementor-10031 .elementor-element.elementor-element-75854a4.ekit-equal-height-enable .ekit-wid-con,
					.elementor-10031 .elementor-element.elementor-element-75854a4.ekit-equal-height-enable .ekit-wid-con .elementskit-infobox{height:100%;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox{background-color:#FFFFFF00;padding:50px 50px 50px 50px;border-radius:30px 30px 30px 30px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn{background-color:var( --e-global-color-accent );padding:12px 30px 12px 30px;margin:0px 0px 0px 0px;font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );line-height:var( --e-global-typography-accent-line-height );color:var( --e-global-color-black );fill:var( --e-global-color-black );border-radius:10px 10px 10px 10px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-title{margin:0px 0px 20px 0px;padding:0px 0px 0px 0px;color:var( --e-global-color-accent );font-family:var( --e-global-typography-secondary-font-family ), Sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );line-height:var( --e-global-typography-secondary-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .box-body > p{color:var( --e-global-color-primary );font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );line-height:var( --e-global-typography-text-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox p{margin:0px 0px 20px 0px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-info-box-icon{color:var( --e-global-color-accent );fill:var( --e-global-color-accent );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon{font-size:60px;width:60px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-box-header .elementskit-info-box-icon{margin:0px 0px 40px 0px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon {height:60px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn i{font-size:30px;margin-right:5px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn svg{max-width:30px;margin-right:5px;}@media(max-width:1024px){.elementor-10031 .elementor-element.elementor-element-3ab4e93::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-background-video-container::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .e-con-inner > .elementor-background-video-container::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-background-slideshow::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .e-con-inner > .elementor-background-slideshow::before, .elementor-10031 .elementor-element.elementor-element-3ab4e93 > .elementor-motion-effects-container > .elementor-motion-effects-layer::before{background-image:url("./wp-content/uploads/2024/11/sidebar-cta-bg-2.svg");background-position:center center;background-repeat:no-repeat;background-size:cover;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox{padding:30px 30px 30px 30px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-title{margin:0px 0px 10px 0px;font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .box-body > p{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon{font-size:50px;width:50px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-box-header .elementskit-info-box-icon{margin:0px 0px 30px 0px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon {height:50px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );}}@media(max-width:767px){.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox{padding:20px 20px 20px 20px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .box-body > p{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon{font-size:40px;width:40px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-box-header .elementskit-info-box-icon{margin:0px 0px 25px 0px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-infobox .elementskit-info-box-icon {height:40px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn{padding:10px 25px 10px 25px;font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn i{font-size:22px;}.elementor-10031 .elementor-element.elementor-element-75854a4 .elementskit-btn svg{max-width:22px;}}`}} /> <div data-elementor-type="section" data-elementor-id="10031" className="elementor elementor-10031">
<div className="elementor-element elementor-element-3ab4e93 e-con-full backdrop-filter e-flex e-con e-child" data-id="3ab4e93" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-75854a4 contacts-content ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="75854a4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-center text- icon-top-align elementor-animation-">
<div className="elementskit-box-header elementor-animation-">
<div className="elementskit-info-box-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M19.7854 54.2444L2.64258 58.5301L6.92829 45.6729V7.10151C6.92829 5.96487 7.37982 4.87478 8.18355 4.07105C8.98728 3.26733 10.0774 2.8158 11.214 2.8158H54.0711C55.2078 2.8158 56.2979 3.26733 57.1016 4.07105C57.9053 4.87478 58.3569 5.96487 58.3569 7.10151V49.9587C58.3569 51.0953 57.9053 52.1854 57.1016 52.9891C56.2979 53.7928 55.2078 54.2444 54.0711 54.2444H19.7854Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.6426 13.5301V26.3872" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.6429 41.3872C33.8263 41.3872 34.7857 40.4278 34.7857 39.2444C34.7857 38.0609 33.8263 37.1015 32.6429 37.1015C31.4594 37.1015 30.5 38.0609 30.5 39.2444C30.5 40.4278 31.4594 41.3872 32.6429 41.3872Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    You have different questions?                </h3>
<p>Our team will answer all your questions. we ensure a quick response.</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="tel:+919330648291">
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="M23.31 21.5311C22.9994 21.2644 22.6373 21.0642 22.2462 20.9431C21.8551 20.8219 21.4433 20.7823 21.0363 20.8267C20.6293 20.8711 20.2357 20.9986 19.8799 21.2012C19.5241 21.4039 19.2137 21.6774 18.9679 22.0048L18.889 22.1232C18.7115 22.3653 18.4688 22.5518 18.1891 22.6609C17.9095 22.77 17.6045 22.7971 17.31 22.739C15.1306 22.3691 13.1209 21.3283 11.5614 19.7616C10.0018 18.195 8.97003 16.1806 8.61003 13.9995C8.55197 13.705 8.57906 13.4001 8.68813 13.1204C8.79719 12.8408 8.98371 12.598 9.22582 12.4206L9.34424 12.3416C9.67168 12.0958 9.94518 11.7854 10.1478 11.4296C10.3505 11.0739 10.4779 10.6803 10.5223 10.2733C10.5667 9.86624 10.5271 9.45443 10.406 9.06333C10.2848 8.67223 10.0847 8.31016 9.81792 7.99953L8.61003 6.62584C8.29806 6.26099 7.90529 5.97393 7.46295 5.78746C7.0206 5.60099 6.54086 5.52026 6.06184 5.55169C5.58283 5.58311 5.11774 5.72582 4.70354 5.96848C4.28935 6.21113 3.93745 6.54705 3.67582 6.94953L2.30213 9.06532C1.61349 10.3135 1.39502 11.7672 1.68634 13.1627C2.54047 17.2167 4.55498 20.9349 7.48455 23.8645C10.4141 26.794 14.1323 28.8086 18.1863 29.6627C18.5833 29.7476 18.9883 29.79 19.3942 29.789C20.4222 29.7821 21.431 29.5102 22.3232 28.9995L24.3995 27.6574C24.802 27.3958 25.1379 27.0439 25.3806 26.6297C25.6232 26.2155 25.7659 25.7504 25.7973 25.2714C25.8288 24.7924 25.748 24.3126 25.5616 23.8703C25.3751 23.4279 25.088 23.0352 24.7232 22.7232L23.31 21.5311Z" fill="black"></path><path d="M21.6915 1.36795C20.2724 1.36628 18.8766 1.72931 17.6382 2.42222C16.3997 3.11512 15.3601 4.11465 14.619 5.32492C13.878 6.53519 13.4603 7.91558 13.4062 9.33368C13.3521 10.7518 13.6633 12.16 14.3099 13.4232L13.402 16.968C13.3686 17.1 13.37 17.2385 13.4059 17.37C13.4419 17.5014 13.5113 17.6213 13.6073 17.7179C13.6839 17.794 13.7752 17.8536 13.8757 17.893C13.9762 17.9323 14.0837 17.9507 14.1915 17.9469C14.2544 17.9545 14.3181 17.9545 14.381 17.9469L17.9257 17.0627C19.0421 17.6242 20.271 17.9261 21.5205 17.9458C22.77 17.9654 24.0077 17.7023 25.1412 17.1761C26.2747 16.6499 27.2745 15.8743 28.0659 14.9072C28.8574 13.9401 29.4199 12.8066 29.7115 11.5914C30.003 10.3762 30.0161 9.11088 29.7496 7.88997C29.4832 6.66905 28.9442 5.52416 28.1729 4.54094C27.4016 3.55772 26.418 2.76161 25.2956 2.21215C24.1732 1.66269 22.9411 1.37409 21.6915 1.36795ZM22.0863 14.789C21.9301 14.789 21.7775 14.7427 21.6476 14.656C21.5178 14.5692 21.4166 14.4459 21.3569 14.3016C21.2971 14.1574 21.2815 13.9987 21.3119 13.8455C21.3424 13.6924 21.4176 13.5517 21.528 13.4413C21.6384 13.3309 21.7791 13.2557 21.9322 13.2252C22.0854 13.1948 22.2441 13.2104 22.3884 13.2702C22.5326 13.3299 22.6559 13.4311 22.7427 13.5609C22.8294 13.6907 22.8757 13.8434 22.8757 13.9995C22.8757 14.2089 22.7925 14.4097 22.6445 14.5578C22.4964 14.7058 22.2956 14.789 22.0863 14.789ZM23.3889 9.87058C23.2253 10.0311 23.0956 10.2228 23.0075 10.4344C22.9193 10.6459 22.8745 10.873 22.8757 11.1022V11.6311C22.8757 11.8405 22.7925 12.0413 22.6445 12.1894C22.4964 12.3374 22.2956 12.4206 22.0863 12.4206C21.8769 12.4206 21.6761 12.3374 21.528 12.1894C21.38 12.0413 21.2968 11.8405 21.2968 11.6311V11.1022C21.2941 10.6628 21.3785 10.2273 21.5452 9.82072C21.7118 9.41419 21.9575 9.04474 22.2678 8.73374C22.4599 8.54527 22.6126 8.32048 22.7169 8.07244C22.8213 7.82441 22.8753 7.5581 22.8757 7.289C22.8757 6.97493 22.751 6.67372 22.5289 6.45164C22.3068 6.22956 22.0056 6.10479 21.6915 6.10479C21.3774 6.10479 21.0762 6.22956 20.8542 6.45164C20.6321 6.67372 20.5073 6.97493 20.5073 7.289V7.68374C20.5073 7.89312 20.4241 8.09393 20.2761 8.24198C20.128 8.39004 19.9272 8.47321 19.7178 8.47321C19.5084 8.47321 19.3076 8.39004 19.1596 8.24198C19.0115 8.09393 18.9284 7.89312 18.9284 7.68374V7.289C18.9284 6.55617 19.2195 5.85335 19.7377 5.33515C20.2559 4.81696 20.9587 4.52584 21.6915 4.52584C22.4243 4.52584 23.1272 4.81696 23.6454 5.33515C24.1636 5.85335 24.4547 6.55617 24.4547 7.289C24.4553 7.76823 24.3615 8.24289 24.1787 8.68585C23.9958 9.12881 23.7274 9.53139 23.3889 9.87058Z" fill="black"></path></svg>                                         +91 93306 48291                                    </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
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



