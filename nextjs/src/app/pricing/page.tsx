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
    <div data-elementor-type="wp-page" data-elementor-id="5001" className="elementor elementor-5001">
<div className="elementor-element elementor-element-3c614b8 e-flex e-con-boxed e-con e-parent" data-id="3c614b8" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-9cf45a5 e-con-full e-flex e-con e-child" data-id="9cf45a5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-34b50b2 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="34b50b2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Our <span> pricing </span></h1> </div>
</div>
<div className="elementor-element elementor-element-8d0e84f elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="8d0e84f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Pricing Plan</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-4f57251 e-con-full e-flex e-con e-parent" data-id="4f57251" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-11a1206 e-con-full e-flex e-con e-child" data-id="11a1206" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-dc8d830 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="dc8d830" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-dc8d830" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-e20337b e-flex e-con-boxed e-con e-parent" data-id="e20337b" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-e949be9 e-con-full e-flex e-con e-child" data-id="e949be9" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-92e14d4 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="92e14d4" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-90a33a5 pricing-box elementor-widget elementor-widget-elementskit-pricing" data-id="90a33a5" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<h3 className="elementskit-pricing-title">Basic					</h3>
<p className="elementskit-pricing-subtitle">Our popular Plan for small teams.</p>
</div>
<div className="elementskit-pricing-price-wraper has-tag">
<div className="elementskit-pricing-tag"></div>
<span className="elementskit-pricing-price">
<sup className="currency">$</sup>
<span>39</span>
<sub className="period">/ per month</sub>
</span>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-63dc167">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Responsive Web Design								
															</li>
<li className="elementor-repeater-item-8682cda">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Mobile Optimization								
															</li>
<li className="elementor-repeater-item-2095454">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Basic SEO Setup								
															</li>
<li className="elementor-repeater-item-92c81b6">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Google Analytics Setup								
															</li>
<li className="elementor-repeater-item-12c6c05">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Social Media Integration								
															</li>
<li className="elementor-repeater-item-3101a84">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Email Marketing Setup								
															</li>
<li className="elementor-repeater-item-eb51e58">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Content Creation Support								
															</li>
<li className="elementor-repeater-item-adc1da9">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Contact Form Integration								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="./contact-us/index.html" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
					Get Started				</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-d50090a e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="d50090a" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-4b5da51 pricing-box elementor-widget elementor-widget-elementskit-pricing" data-id="4b5da51" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<h3 className="elementskit-pricing-title">Advanced					</h3>
<p className="elementskit-pricing-subtitle">Advanced features and reporting</p>
</div>
<div className="elementskit-pricing-price-wraper has-tag">
<div className="elementskit-pricing-tag"></div>
<span className="elementskit-pricing-price">
<sup className="currency">$</sup>
<span>69</span>
<sub className="period">/ per month</sub>
</span>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-63dc167">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Responsive Web Design								
															</li>
<li className="elementor-repeater-item-8682cda">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Mobile Optimization								
															</li>
<li className="elementor-repeater-item-2095454">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Basic SEO Setup								
															</li>
<li className="elementor-repeater-item-92c81b6">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Google Analytics Setup								
															</li>
<li className="elementor-repeater-item-12c6c05">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Social Media Integration								
															</li>
<li className="elementor-repeater-item-3101a84">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Email Marketing Setup								
															</li>
<li className="elementor-repeater-item-eb51e58">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Content Creation Support								
															</li>
<li className="elementor-repeater-item-adc1da9">
<svg aria-hidden="true" className="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>								
								Contact Form Integration								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="./contact-us/index.html" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
					Get Started				</a>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0d4f24e our-features e-flex e-con-boxed e-con e-parent" data-id="0d4f24e" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-7bca15a e-con-full e-flex e-con e-child" data-id="7bca15a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1951f4d e-con-full e-flex e-con e-child" data-id="1951f4d" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3c2e66b section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="3c2e66b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">FEATURES</h2> </div>
</div>
<div className="elementor-element elementor-element-46f470c at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="46f470c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Innovative <span>features</span> for your digital success</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-6603223 e-con-full e-flex e-con e-child" data-id="6603223" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-489cb8d elementor-invisible elementor-widget elementor-widget-text-editor" data-id="489cb8d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p> </div>
</div>
<div className="elementor-element elementor-element-50c844f elementor-invisible elementor-widget elementor-widget-button" data-id="50c844f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Leran More</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9af4cf0 e-con-full e-flex e-con e-child" data-id="9af4cf0" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-51e1313 e-con-full digital-features-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="51e1313" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-f774767 digital-features-image features-item-1 elementor-position-top elementor-widget elementor-widget-image-box" data-id="f774767" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img fetchPriority="high" decoding="async" width="625" height="270" src="/wp-content/uploads/2024/11/digital-features-img-1-2.webp" className="attachment-full size-full wp-image-2245" alt="" srcSet="./wp-content/uploads/2024/11/digital-features-img-1-2.webp 625w, ./wp-content/uploads/2024/11/digital-features-img-1-2-300x130.jpg 300w" sizes="(max-width: 625px) 100vw, 625px" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Custom Branding Solutions</h3><p className="elementor-image-box-description">Unique brand identity development, including logos, color palettes.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-c9ebe6d e-con-full digital-features-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="c9ebe6d" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-57fb1ad digital-features-image features-item-2 elementor-position-top elementor-widget elementor-widget-image-box" data-id="57fb1ad" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img decoding="async" width="372" height="270" src="/wp-content/uploads/2024/11/digital-features-img-2-2.webp" className="attachment-full size-full wp-image-2315" alt="" srcSet="./wp-content/uploads/2024/11/digital-features-img-2-2.webp 372w, ./wp-content/uploads/2024/11/digital-features-img-2-2-300x218.jpg 300w" sizes="(max-width: 372px) 100vw, 372px" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Data-Driven Digital Marketing</h3><p className="elementor-image-box-description">Strategies combining SEO, PPC, content marketing</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-7e49b3c e-con-full backdrop-filter e-flex e-con e-child" data-id="7e49b3c" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-85222b5 e-con-full e-flex e-con e-child" data-id="85222b5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4312f57 e-con-full e-flex elementor-invisible e-con e-child" data-id="4312f57" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-5099ed2 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="5099ed2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Content Creation And Strategy</h2> </div>
</div>
<div className="elementor-element elementor-element-be7ecf5 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="be7ecf5" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-b26788b e-con-full e-flex e-con e-child" data-id="b26788b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e464cba agency-free-consultation elementor-widget__width-auto elementor-widget elementor-widget-text-path" data-id="e464cba" data-element_type="widget" data-e-type="widget" data-settings="{&quot;text&quot;:&quot;. Get free consultation . Get free consultation&quot;,&quot;align&quot;:&quot;right&quot;,&quot;align_tablet&quot;:&quot;right&quot;,&quot;link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;start_point&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-path.default">
<div className="elementor-widget-container">
<div className="e-text-path" data-text=". Get free consultation . Get free consultation" data-url="./wp-content/plugins/elementor/assets/svg-paths/circle.svg" data-link-url=""></div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0e80fe4 e-con-full e-flex e-con e-child" data-id="0e80fe4" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-742e55c agency-supports-slider elementor-widget elementor-widget-image-carousel" data-id="742e55c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;6&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;none&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;slides_to_show_tablet&quot;:&quot;4&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-carousel.default">
<div className="elementor-widget-container">
<div className="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
<div className="elementor-image-carousel swiper-wrapper" aria-live="off">
<div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-1-1-2.svg" alt="agency-supports-logo-1" /></figure></div><div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-2-1-2.svg" alt="agency-supports-logo-2" /></figure></div><div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-3-1-2.svg" alt="agency-supports-logo-3" /></figure></div><div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-4-1-2.svg" alt="agency-supports-logo-4" /></figure></div><div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-5-1-2.svg" alt="agency-supports-logo-5" /></figure></div><div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="6 of 6"><figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="/wp-content/uploads/2024/11/agency-supports-logo-6-1-2.svg" alt="agency-supports-logo-6" /></figure></div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9d3588f e-flex e-con-boxed e-con e-parent" data-id="9d3588f" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-e6f9fa1 e-con-full e-flex e-con e-child" data-id="e6f9fa1" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f3c8db1 faq-img-2 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="f3c8db1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="495" height="522" src="/wp-content/uploads/2024/11/faq-img-2-2.webp" className="attachment-full size-full wp-image-3890" alt="" srcSet="./wp-content/uploads/2024/11/faq-img-2-2.webp 495w, ./wp-content/uploads/2024/11/faq-img-2-2-284x300.jpg 284w" sizes="(max-width: 495px) 100vw, 495px" /> </div>
</div>
<div className="elementor-element elementor-element-01fd322 elementor-absolute faq-img-1 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="01fd322" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="330" height="336" src="/wp-content/uploads/2024/11/faq-img-1-2.webp" className="attachment-full size-full wp-image-3894" alt="" srcSet="./wp-content/uploads/2024/11/faq-img-1-2.webp 330w, ./wp-content/uploads/2024/11/faq-img-1-2-295x300.jpg 295w" sizes="(max-width: 330px) 100vw, 330px" /> </div>
</div>
<div className="elementor-element elementor-element-734db30 elementor-absolute faq-cta-box elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="734db30" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<a href="tel:(30)%208855-314">
<span className="elementor-icon-list-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="currentColor"><path d="M23.1557 21.5546C22.8451 21.2879 22.483 21.0878 22.0919 20.9666C21.7008 20.8454 21.289 20.8058 20.882 20.8502C20.475 20.8946 20.0814 21.0221 19.7256 21.2247C19.3698 21.4274 19.0594 21.7009 18.8136 22.0283L18.7347 22.1467C18.5572 22.3889 18.3145 22.5754 18.0348 22.6844C17.7552 22.7935 17.4502 22.8206 17.1557 22.7625C14.9763 22.3927 12.9666 21.3518 11.4071 19.7852C9.84748 18.2185 8.81574 16.2041 8.45573 14.0231C8.39767 13.7286 8.42477 13.4236 8.53383 13.144C8.64289 12.8643 8.82941 12.6216 9.07152 12.4441L9.18994 12.3652C9.51738 12.1194 9.79088 11.809 9.99352 11.4532C10.1962 11.0974 10.3236 10.7038 10.368 10.2968C10.4124 9.88978 10.3728 9.47797 10.2517 9.08687C10.1305 8.69577 9.93036 8.3337 9.66363 8.02307L8.45573 6.64938C8.14376 6.28453 7.751 5.99746 7.30865 5.811C6.8663 5.62453 6.38656 5.5438 5.90754 5.57522C5.42853 5.60665 4.96344 5.74936 4.54925 5.99201C4.13505 6.23467 3.78315 6.57058 3.52152 6.97307L2.14784 9.08886C1.4592 10.3371 1.24073 11.7907 1.53205 13.1862C2.38618 17.2403 4.40069 20.9585 7.33025 23.888C10.2598 26.8176 13.978 28.8321 18.032 29.6862C18.429 29.7712 18.834 29.8135 19.2399 29.8125C20.2679 29.8057 21.2767 29.5337 22.1689 29.0231L24.2452 27.681C24.6477 27.4193 24.9836 27.0674 25.2263 26.6532C25.4689 26.239 25.6116 25.774 25.643 25.2949C25.6745 24.8159 25.5937 24.3362 25.4073 23.8938C25.2208 23.4515 24.9337 23.0587 24.5689 22.7467L23.1557 21.5546Z"></path><path d="M21.5362 1.39149C20.1171 1.38981 18.7214 1.75284 17.4829 2.44575C16.2444 3.13866 15.2048 4.13819 14.4637 5.34846C13.7227 6.55872 13.3051 7.93912 13.2509 9.35721C13.1968 10.7753 13.508 12.1835 14.1547 13.4467L13.2468 16.9915C13.2133 17.1236 13.2147 17.2621 13.2507 17.3935C13.2866 17.5249 13.356 17.6448 13.452 17.7415C13.5286 17.8176 13.6199 17.8771 13.7204 17.9165C13.8209 17.9559 13.9284 17.9742 14.0362 17.9704C14.0992 17.978 14.1628 17.978 14.2257 17.9704L17.7705 17.0862C18.8868 17.6478 20.1157 17.9497 21.3652 17.9693C22.6147 17.989 23.8525 17.7258 24.9859 17.1996C26.1194 16.6735 27.1192 15.8978 27.9107 14.9307C28.7021 13.9636 29.2646 12.8301 29.5562 11.6149C29.8478 10.3998 29.8608 9.13442 29.5944 7.9135C29.3279 6.69258 28.7889 5.5477 28.0176 4.56448C27.2463 3.58126 26.2627 2.78515 25.1403 2.23569C24.018 1.68622 22.7859 1.39763 21.5362 1.39149ZM21.931 14.8125C21.7748 14.8125 21.6222 14.7662 21.4924 14.6795C21.3625 14.5927 21.2614 14.4694 21.2016 14.3252C21.1418 14.1809 21.1262 14.0222 21.1567 13.869C21.1871 13.7159 21.2623 13.5752 21.3727 13.4648C21.4831 13.3544 21.6238 13.2792 21.777 13.2488C21.9301 13.2183 22.0888 13.2339 22.2331 13.2937C22.3774 13.3534 22.5007 13.4546 22.5874 13.5845C22.6741 13.7143 22.7205 13.8669 22.7205 14.0231C22.7205 14.2324 22.6373 14.4333 22.4892 14.5813C22.3412 14.7294 22.1404 14.8125 21.931 14.8125ZM23.2336 9.89412C23.07 10.0546 22.9404 10.2464 22.8522 10.4579C22.7641 10.6694 22.7193 10.8965 22.7205 11.1257V11.6546C22.7205 11.864 22.6373 12.0648 22.4892 12.2129C22.3412 12.3609 22.1404 12.4441 21.931 12.4441C21.7216 12.4441 21.5208 12.3609 21.3727 12.2129C21.2247 12.0648 21.1415 11.864 21.1415 11.6546V11.1257C21.1388 10.6863 21.2232 10.2508 21.3899 9.84425C21.5566 9.43772 21.8022 9.06827 22.1126 8.75728C22.3046 8.56881 22.4573 8.34401 22.5616 8.09598C22.666 7.84795 22.72 7.58163 22.7205 7.31254C22.7205 6.99847 22.5957 6.69726 22.3736 6.47517C22.1515 6.25309 21.8503 6.12833 21.5362 6.12833C21.2222 6.12833 20.921 6.25309 20.6989 6.47517C20.4768 6.69726 20.352 6.99847 20.352 7.31254V7.70728C20.352 7.91666 20.2689 8.11746 20.1208 8.26552C19.9727 8.41357 19.7719 8.49675 19.5626 8.49675C19.3532 8.49675 19.1524 8.41357 19.0043 8.26552C18.8563 8.11746 18.7731 7.91666 18.7731 7.70728V7.31254C18.7731 6.5797 19.0642 5.87688 19.5824 5.35869C20.1006 4.8405 20.8034 4.54938 21.5362 4.54938C22.2691 4.54938 22.9719 4.8405 23.4901 5.35869C24.0083 5.87688 24.2994 6.5797 24.2994 7.31254C24.3001 7.79176 24.2063 8.26642 24.0234 8.70938C23.8405 9.15234 23.5721 9.55493 23.2336 9.89412Z"></path></svg> </span>
<span className="elementor-icon-list-text">(30) 8855-314</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div className="elementor-element elementor-element-50231cd e-con-full e-flex e-con e-child" data-id="50231cd" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-23239ce section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="23239ce" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">HAVE ANY QUESTIONS?</h2> </div>
</div>
<div className="elementor-element elementor-element-5276864 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="5276864" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Let us address your <span>questions</span> today!</h2> </div>
</div>
<div className="elementor-element elementor-element-0a4462f elementor-invisible elementor-widget elementor-widget-elementskit-accordion" data-id="0a4462f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-accordion.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-accordion accoedion-primary" id="accordion-6a3d8ce0731f0">
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-0-0a4462f">
<a href="#collapse-77754716a3d8ce0731f0" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-77754716a3d8ce0731f0" aria-expanded="false" aria-controls="Collapse-77754716a3d8ce0731f0">
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
<div id="Collapse-77754716a3d8ce0731f0" className="collapse" aria-labelledby="primaryHeading-0-0a4462f" data-parent="#accordion-6a3d8ce0731f0">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card active">
<div className="elementskit-card-header" id="primaryHeading-1-0a4462f">
<a href="#collapse-e260b7e6a3d8ce0731f0" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-e260b7e6a3d8ce0731f0" aria-expanded="true" aria-controls="Collapse-e260b7e6a3d8ce0731f0">
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
<div id="Collapse-e260b7e6a3d8ce0731f0" className="show collapse" aria-labelledby="primaryHeading-1-0a4462f" data-parent="#accordion-6a3d8ce0731f0">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-2-0a4462f">
<a href="#collapse-2b87c736a3d8ce0731f0" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-2b87c736a3d8ce0731f0" aria-expanded="false" aria-controls="Collapse-2b87c736a3d8ce0731f0">
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
<div id="Collapse-2b87c736a3d8ce0731f0" className="collapse" aria-labelledby="primaryHeading-2-0a4462f" data-parent="#accordion-6a3d8ce0731f0">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-3-0a4462f">
<a href="#collapse-0fc63786a3d8ce0731f0" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-0fc63786a3d8ce0731f0" aria-expanded="false" aria-controls="Collapse-0fc63786a3d8ce0731f0">
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
<div id="Collapse-0fc63786a3d8ce0731f0" className="collapse" aria-labelledby="primaryHeading-3-0a4462f" data-parent="#accordion-6a3d8ce0731f0">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
</div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
  );
}
