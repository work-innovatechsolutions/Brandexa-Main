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
    <div data-elementor-type="wp-page" data-elementor-id="1755" className="elementor elementor-1755">
<div className="elementor-element elementor-element-459081c e-flex e-con-boxed e-con e-parent" data-id="459081c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-60b5b9c e-con-full e-flex e-con e-child" data-id="60b5b9c" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a6470f0 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="a6470f0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Our <span> team </span></h1> </div>
</div>
<div className="elementor-element elementor-element-4603a8b elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="4603a8b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Team</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-2956ee6 e-con-full e-flex e-con e-parent" data-id="2956ee6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0bac879 e-con-full e-flex e-con e-child" data-id="0bac879" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-9c68257 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="9c68257" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-9c68257" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-98f4f3b page-team e-flex e-con-boxed e-con e-parent" data-id="98f4f3b" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-71ce25a e-con-full e-flex e-con e-child" data-id="71ce25a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-7ccb48e e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="7ccb48e" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-ad5ded8 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="ad5ded8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a>
<div className="elementskit-box-header image-box-img-center">
<img fetchPriority="high" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-1-2.webp" className="attachment-full size-full wp-image-1770" alt="" srcSet="./wp-content/uploads/2024/11/team-1-2.webp 400w, ./wp-content/uploads/2024/11/team-1-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-b275f8b e-con-full team-body e-flex e-con e-child" data-id="b275f8b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-099acaa at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="099acaa" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/sarah-mitchell/index.html">Sarah Mitchell</a></h2> </div>
</div>
<div className="elementor-element elementor-element-fc783c8 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="fc783c8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Senior Project Manager</p> </div>
</div>
<div className="elementor-element elementor-element-87b3e96 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="87b3e96" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-05e84cc e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="05e84cc" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-5802685 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="5802685" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img decoding="async" width="400" height="554" src="/wp-content/uploads/2024/11/team-2-2.webp" className="attachment-full size-full wp-image-2529" alt="" srcSet="./wp-content/uploads/2024/11/team-2-2.webp 400w, ./wp-content/uploads/2024/11/team-2-2-217x300.jpg 217w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-310930d e-con-full team-body e-flex e-con e-child" data-id="310930d" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4894584 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="4894584" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/brooklyn-simmons/index.html">Brooklyn Simmons</a></h2> </div>
</div>
<div className="elementor-element elementor-element-634ac03 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="634ac03" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Marketing Directoer</p> </div>
</div>
<div className="elementor-element elementor-element-d6d295f team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="d6d295f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-26fbdc8 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="26fbdc8" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-1ae9811 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="1ae9811" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-3-2.webp" className="attachment-full size-full wp-image-2530" alt="" srcSet="./wp-content/uploads/2024/11/team-3-2.webp 400w, ./wp-content/uploads/2024/11/team-3-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-77983a9 e-con-full team-body e-flex e-con e-child" data-id="77983a9" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e0e5f31 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="e0e5f31" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/emily-davis/index.html">Emily Davis</a></h2> </div>
</div>
<div className="elementor-element elementor-element-661eb9e at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="661eb9e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Product Manager</p> </div>
</div>
<div className="elementor-element elementor-element-82dc7c0 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="82dc7c0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-52b4e8e e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="52b4e8e" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-fa635e1 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="fa635e1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="554" src="/wp-content/uploads/2024/11/team-4-2.webp" className="attachment-full size-full wp-image-2531" alt="" srcSet="./wp-content/uploads/2024/11/team-4-2.webp 400w, ./wp-content/uploads/2024/11/team-4-2-217x300.jpg 217w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-9213aa7 e-con-full team-body e-flex e-con e-child" data-id="9213aa7" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-18f230e at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="18f230e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/jessica-taylor/index.html">Jessica Taylor</a></h2> </div>
</div>
<div className="elementor-element elementor-element-199dd92 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="199dd92" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Communications Specialist</p> </div>
</div>
<div className="elementor-element elementor-element-c8ed799 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="c8ed799" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c4a42f7 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="c4a42f7" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:400}">
<div className="elementor-element elementor-element-a9231db team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="a9231db" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-5-2.webp" className="attachment-full size-full wp-image-2532" alt="" srcSet="./wp-content/uploads/2024/11/team-5-2.webp 400w, ./wp-content/uploads/2024/11/team-5-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-e2218f1 e-con-full team-body e-flex e-con e-child" data-id="e2218f1" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-2d81fcc at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="2d81fcc" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="#">Christopher Nolen</a></h2> </div>
</div>
<div className="elementor-element elementor-element-c8465e4 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="c8465e4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">HR Coordinator</p> </div>
</div>
<div className="elementor-element elementor-element-6d22c42 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="6d22c42" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0e1f28b e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="0e1f28b" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:500}">
<div className="elementor-element elementor-element-0912ea7 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="0912ea7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-6-2.webp" className="attachment-full size-full wp-image-2533" alt="" srcSet="./wp-content/uploads/2024/11/team-6-2.webp 400w, ./wp-content/uploads/2024/11/team-6-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-793b50f e-con-full team-body e-flex e-con e-child" data-id="793b50f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-83bc29e at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="83bc29e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="#">Emma Clark</a></h2> </div>
</div>
<div className="elementor-element elementor-element-37fda59 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="37fda59" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Administrative Assistant</p> </div>
</div>
<div className="elementor-element elementor-element-9f8f7c5 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="9f8f7c5" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d2b03e8 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="d2b03e8" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:600}">
<div className="elementor-element elementor-element-12f4159 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="12f4159" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-7-2.webp" className="attachment-full size-full wp-image-2534" alt="" srcSet="./wp-content/uploads/2024/11/team-7-2.webp 400w, ./wp-content/uploads/2024/11/team-7-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-3a33c9f e-con-full team-body e-flex e-con e-child" data-id="3a33c9f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-6dea2a8 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="6dea2a8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="#">William Harris</a></h2> </div>
</div>
<div className="elementor-element elementor-element-bccf0fd at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="bccf0fd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Data Scientist</p> </div>
</div>
<div className="elementor-element elementor-element-097df1b team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="097df1b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-53eef53 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="53eef53" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:700}">
<div className="elementor-element elementor-element-29274b7 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="29274b7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="554" src="/wp-content/uploads/2024/11/team-8-2.webp" className="attachment-full size-full wp-image-2535" alt="" srcSet="./wp-content/uploads/2024/11/team-8-2.webp 400w, ./wp-content/uploads/2024/11/team-8-2-217x300.jpg 217w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-4c64b66 e-con-full team-body e-flex e-con e-child" data-id="4c64b66" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-95ebbfe at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="95ebbfe" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="#">Mia White</a></h2> </div>
</div>
<div className="elementor-element elementor-element-c9c00c2 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="c9c00c2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Financial Controller</p> </div>
</div>
<div className="elementor-element elementor-element-24febcf team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="24febcf" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <ul className="ekit_social_media">
<li className="elementor-repeater-item-f11abb7">
<a href="#" aria-label="Facebook" className="facebook">
<i aria-hidden="true" className="icon icon-facebook"></i>
</a>
</li>
<li className="elementor-repeater-item-b1d3458">
<a href="#" aria-label="Instagram" className="instagram">
<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
</li>
<li className="elementor-repeater-item-cac8111">
<a href="#" aria-label="Pinterest" className="pinterest">
<i aria-hidden="true" className="icon icon-pinterest"></i>
</a>
</li>
</ul>
</div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  );
}
