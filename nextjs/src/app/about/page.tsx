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
    <div data-elementor-type="wp-page" data-elementor-id="11568" className="elementor elementor-11568">
<div className="elementor-element elementor-element-87bb18f e-flex e-con-boxed e-con e-parent" data-id="87bb18f" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-3abee15 e-con-full e-flex e-con e-child" data-id="3abee15" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-ca8562e at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="ca8562e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">About <span> us </span></h1> </div>
</div>
<div className="elementor-element elementor-element-e7af8a2 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="e7af8a2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>About Us</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6354643 e-con-full e-flex e-con e-parent" data-id="6354643" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-954a954 e-con-full e-flex e-con e-child" data-id="954a954" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-4dea617 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="4dea617" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-4dea617" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-dbaf849 about-agency e-flex e-con-boxed e-con e-parent" data-id="dbaf849" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-a293d17 e-con-full e-flex e-con e-child" data-id="a293d17" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c076d17 e-con-full sticky-column e-flex e-con e-child" data-id="c076d17" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3df39cb section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="3df39cb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">ABOUT AGENCY</h2> </div>
</div>
<div className="elementor-element elementor-element-70ead51 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="70ead51" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Crafting <span>unique digital</span> experiences that elevate your brand
</h2> </div>
</div>
<div className="elementor-element elementor-element-fb64f36 elementor-invisible elementor-widget elementor-widget-button" data-id="fb64f36" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Contact Us</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a2a5245 e-con-full e-flex e-con e-child" data-id="a2a5245" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fa37b94 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-id="fa37b94" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M15.8858 2.33325H1.6001V16.619H15.8858V2.33325Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.0289 38.0475H23.7432" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.7432 23.7618H38.0289" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.7432 30.9047H38.0289" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.7431 16.6189H23.0288L30.886 0.904663L38.7431 16.6189Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.74296 38.0475C12.6878 38.0475 15.8858 34.8495 15.8858 30.9046C15.8858 26.9597 12.6878 23.7618 8.74296 23.7618C4.79806 23.7618 1.6001 26.9597 1.6001 30.9046C1.6001 34.8495 4.79806 38.0475 8.74296 38.0475Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Your Success, Our Mission						</span>
</h3>
<p className="elementor-icon-box-description">
						We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.					</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-8676dbb agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-id="8676dbb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M35.8858 0.904663H4.45724C2.87928 0.904663 1.6001 2.18385 1.6001 3.76181V35.1904C1.6001 36.7683 2.87928 38.0475 4.45724 38.0475H35.8858C37.4638 38.0475 38.743 36.7683 38.743 35.1904V3.76181C38.743 2.18385 37.4638 0.904663 35.8858 0.904663Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.1714 32.3333C25.6942 32.3333 30.1714 27.8561 30.1714 22.3333C30.1714 16.8104 25.6942 12.3333 20.1714 12.3333C14.6485 12.3333 10.1714 16.8104 10.1714 22.3333C10.1714 27.8561 14.6485 32.3333 20.1714 32.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.6001 9.47607H10.1715" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.1714 9.47607H38.7428" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.1714 22.2476V32.2476" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.6001 17.1904L20.1715 22.2475" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28.7428 17.1904L20.1714 22.2475" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Creators Of Digital Excellence						</span>
</h3>
<p className="elementor-icon-box-description">
						At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.					</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-efbc512 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-id="efbc512" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							innovating the digital landscape						</span>
</h3>
<p className="elementor-icon-box-description">
						At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.					</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-480e424 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-id="480e424" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Helping Brands Thrive Online						</span>
</h3>
<p className="elementor-icon-box-description">
						Our purpose is simple: to help brands succeed in the digital age. We're passionate about building strong relationships with our clients and crafting custom strategies that drive results.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-7137f29 e-flex e-con-boxed e-con e-parent" data-id="7137f29" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-7c05685 e-con-full e-flex e-con e-child" data-id="7c05685" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1570d43 e-con-full e-flex e-con e-child" data-id="1570d43" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3e26cea section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="3e26cea" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">OUR APPROACH</h2> </div>
</div>
<div className="elementor-element elementor-element-0f60964 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="0f60964" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Crafting <span>impactful</span> digital experiences</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-33a69c0 e-con-full e-flex e-con e-child" data-id="33a69c0" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3cc38a0 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="3cc38a0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We blend creativity, strategy, and technology to design digital experiences that connect, engage, and inspire. From concept to completion, we deliver tailored solutions that elevate brands and drive results.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-4dd08c8 e-con-full e-flex e-con e-child" data-id="4dd08c8" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c84bab7 e-con-full mission-vision-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="c84bab7" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-91d35a2 e-con-full e-flex e-con e-child" data-id="91d35a2" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-438f303 mission-vision-img image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="438f303" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img fetchPriority="high" decoding="async" width="332" height="258" src="/wp-content/uploads/2024/11/our-mission-img-2.webp" className="attachment-full size-full wp-image-772" alt="" srcSet="./wp-content/uploads/2024/11/our-mission-img-2.webp 332w, ./wp-content/uploads/2024/11/our-mission-img-2-300x233.jpg 300w" sizes="(max-width: 332px) 100vw, 332px" /> </div>
</div>
<div className="elementor-element elementor-element-58f07f1 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="58f07f1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M38.5714 30V35.7143C38.5714 36.472 38.2704 37.1988 37.7346 37.7346C37.1988 38.2704 36.472 38.5714 35.7143 38.5714H30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30 1.42871H35.7143C36.472 1.42871 37.1988 1.72973 37.7346 2.26555C38.2704 2.80136 38.5714 3.52809 38.5714 4.28585V10.0001" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.42871 10.0001V4.28585C1.42871 3.52809 1.72973 2.80136 2.26555 2.26555C2.80137 1.72973 3.52809 1.42871 4.28585 1.42871H10.0001" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0001 38.5714H4.28585C3.52809 38.5714 2.80137 38.2704 2.26555 37.7346C1.72973 37.1988 1.42871 36.472 1.42871 35.7143V30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.8574 20.0001C32.8574 20.0001 27.1431 28.5715 20.0002 28.5715C12.8574 28.5715 7.14307 20.0001 7.14307 20.0001C7.14307 20.0001 12.8574 11.4287 20.0002 11.4287C27.1431 11.4287 32.8574 20.0001 32.8574 20.0001Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.0003 21.4286C20.7893 21.4286 21.4289 20.789 21.4289 20C21.4289 19.2111 20.7893 18.5715 20.0003 18.5715C19.2114 18.5715 18.5718 19.2111 18.5718 20C18.5718 20.789 19.2114 21.4286 20.0003 21.4286Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-ac48414 e-con-full e-flex e-con e-child" data-id="ac48414" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f6fc40f elementor-widget elementor-widget-icon-box" data-id="f6fc40f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Our Mission						</span>
</h3>
<p className="elementor-icon-box-description">
						Delivering transformative digital solutions that elevate brands connections.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1802448 e-con-full mission-vision-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="1802448" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-fd7d2c2 e-con-full e-flex e-con e-child" data-id="fd7d2c2" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-dc5b807 mission-vision-img image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="dc5b807" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img decoding="async" width="332" height="259" src="/wp-content/uploads/2024/11/our-vision-img-2.webp" className="attachment-full size-full wp-image-955" alt="" srcSet="./wp-content/uploads/2024/11/our-vision-img-2.webp 332w, ./wp-content/uploads/2024/11/our-vision-img-2-300x234.jpg 300w" sizes="(max-width: 332px) 100vw, 332px" /> </div>
</div>
<div className="elementor-element elementor-element-c5ad35c elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="c5ad35c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M9.28585 17.1429C13.6252 17.1429 17.143 13.6251 17.143 9.28573C17.143 4.94635 13.6252 1.42859 9.28585 1.42859C4.94647 1.42859 1.42871 4.94635 1.42871 9.28573C1.42871 13.6251 4.94647 17.1429 9.28585 17.1429Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.7146 17.1429C35.0539 17.1429 38.5717 13.6251 38.5717 9.28573C38.5717 4.94635 35.0539 1.42859 30.7146 1.42859C26.3752 1.42859 22.8574 4.94635 22.8574 9.28573C22.8574 13.6251 26.3752 17.1429 30.7146 17.1429Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.28585 38.5715C13.6252 38.5715 17.143 35.0537 17.143 30.7143C17.143 26.3749 13.6252 22.8572 9.28585 22.8572C4.94647 22.8572 1.42871 26.3749 1.42871 30.7143C1.42871 35.0537 4.94647 38.5715 9.28585 38.5715Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.7146 38.5715C35.0539 38.5715 38.5717 35.0537 38.5717 30.7143C38.5717 26.3749 35.0539 22.8572 30.7146 22.8572C26.3752 22.8572 22.8574 26.3749 22.8574 30.7143C22.8574 35.0537 26.3752 38.5715 30.7146 38.5715Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6499d0f e-con-full e-flex e-con e-child" data-id="6499d0f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-39bdc33 elementor-widget elementor-widget-icon-box" data-id="39bdc33" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Our Vision						</span>
</h3>
<p className="elementor-icon-box-description">
						Shaping the future through innovative and impactful digital experiences.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b75f0fd e-con-full mission-vision-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="b75f0fd" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-80b2401 e-con-full e-flex e-con e-child" data-id="80b2401" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-702c228 mission-vision-img image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="702c228" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="332" height="259" src="/wp-content/uploads/2024/11/our-value-img-2.webp" className="attachment-full size-full wp-image-954" alt="" srcSet="./wp-content/uploads/2024/11/our-value-img-2.webp 332w, ./wp-content/uploads/2024/11/our-value-img-2-300x234.jpg 300w" sizes="(max-width: 332px) 100vw, 332px" /> </div>
</div>
<div className="elementor-element elementor-element-a3ab9ee elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="a3ab9ee" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M45.5999 6.59998H14.3999C13.6806 6.61973 12.9761 6.80847 12.3432 7.15095C11.7104 7.49343 11.167 7.98003 10.7571 8.5714L2.95709 19.3714C2.3779 20.1899 2.08865 21.1783 2.13523 22.1799C2.18182 23.1815 2.56157 24.1388 3.21423 24.9L26.6142 51.8571C27.0148 52.3733 27.5282 52.7911 28.115 53.0784C28.7018 53.3658 29.3465 53.5152 29.9999 53.5152C30.6533 53.5152 31.2981 53.3658 31.8849 53.0784C32.4717 52.7911 32.9851 52.3733 33.3857 51.8571L56.7857 24.9C57.4383 24.1388 57.8181 23.1815 57.8646 22.1799C57.9112 21.1783 57.622 20.1899 57.0428 19.3714L49.2428 8.5714C48.8328 7.98003 48.2895 7.49343 47.6566 7.15095C47.0238 6.80847 46.3192 6.61973 45.5999 6.59998V6.59998Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M27.7714 6.55713L17.3142 22.7571L29.9999 53.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.3571 6.55713L42.7714 22.7571L30 53.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.22852 22.7571H57.7714" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-269493a elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="269493a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-660bea6 e-con-full e-flex e-con e-child" data-id="660bea6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fd0bfb7 elementor-widget elementor-widget-icon-box" data-id="fd0bfb7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Our Value						</span>
</h3>
<p className="elementor-icon-box-description">
						Integrity, creativity, innovation, collaboration, excellence, results.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9367172 who-we-are e-flex e-con-boxed e-con e-parent" data-id="9367172" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-f1baf88 e-con-full e-flex e-con e-child" data-id="f1baf88" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-add0139 e-con-full e-flex e-con e-child" data-id="add0139" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-327f8ed section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="327f8ed" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">WHO WE ARE</h2> </div>
</div>
<div className="elementor-element elementor-element-4d3643a at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="4d3643a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Experts in <span> digital </span> brand innovation</h2> </div>
</div>
<div className="elementor-element elementor-element-858f13f elementor-invisible elementor-widget elementor-widget-text-editor" data-id="858f13f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We specialize in transforming brands through cutting-edge digital strategies, blending creativity with technology to drive growth, enhance engagement, and deliver memorable experiences.</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-4a0e2d0 e-con-full e-flex e-con e-child" data-id="4a0e2d0" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-dea86c2 e-con-full experts-rating-video-image e-flex e-con e-child" data-id="dea86c2" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-916d7a0 video-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="916d7a0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="303" height="220" src="/wp-content/uploads/2024/11/experts-rating-video-bg-2.webp" className="attachment-full size-full wp-image-1867" alt="" srcSet="./wp-content/uploads/2024/11/experts-rating-video-bg-2.webp 303w, ./wp-content/uploads/2024/11/experts-rating-video-bg-2-300x218.jpg 300w" sizes="(max-width: 303px) 100vw, 303px" /> </div>
</div>
<div className="elementor-element elementor-element-dc56212 video-play-button elementor-absolute elementor-widget elementor-widget-elementskit-video" data-id="dc56212" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_video_popup_close_icon&quot;:{&quot;value&quot;:&quot;icon icon-cancel&quot;,&quot;library&quot;:&quot;ekiticons&quot;},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-video.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <div className="video-content" data-video-player="[]" data-video-setting="{&quot;videoVolume&quot;:&quot;horizontal&quot;,&quot;startVolume&quot;:0.8,&quot;videoType&quot;:&quot;iframe&quot;,&quot;videoClass&quot;:&quot;mfp-fade&quot;,&quot;popupIcon&quot;:{&quot;value&quot;:&quot;icon icon-cancel&quot;,&quot;library&quot;:&quot;ekiticons&quot;},&quot;videoStyle&quot;:&quot;popup&quot;,&quot;videoTypeName&quot;:&quot;youtube&quot;,&quot;autoplay&quot;:false,&quot;muted&quot;:false,&quot;loop&quot;:false,&quot;bg_color&quot;:&quot;&quot;}">
<div className="ekit-hidden-icons" style={{"display": "none"}}>
<div className="ekit-popup-close-icon">
<i aria-hidden="true" className="icon icon-cancel"></i> </div>
</div>
<a className="ekit_icon_button glow-ripple ekit-video-popup ekit-video-popup-btn" href="https://www.youtube.com/embed/Y-x0efG1seA?feature=oembed?playlist=Y-x0efG1seA&mute=0&autoplay=0&loop=no&controls=0&start=0&end=" aria-label="video-popup">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></a>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-9f27f9a e-con-full e-flex e-con e-child" data-id="9f27f9a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a76d95c elementor-invisible elementor-widget elementor-widget-rating" data-id="a76d95c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemType="https://schema.org/Rating" itemScope={true} itemProp="reviewRating">
<meta itemProp="worstRating" content="0" />
<meta itemProp="bestRating" content="5" />
<div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d6f866f elementor-widget elementor-widget-counter" data-id="d6f866f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix">( </span>
<span className="elementor-counter-number" data-duration="2000" data-to-value="40" data-from-value="0" data-delimiter=",">0</span>
<span className="elementor-counter-number-suffix">+ Reviews )</span>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-8258622 e-con-full e-flex e-con e-child" data-id="8258622" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-da573ad image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="da573ad" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp" className="attachment-full size-full wp-image-2217" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-2f28dce image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="2f28dce" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp" className="attachment-full size-full wp-image-2218" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-d5aa7e4 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="d5aa7e4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp" className="attachment-full size-full wp-image-2219" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-fbd1ec0 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="fbd1ec0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-4-2.webp" className="attachment-full size-full wp-image-2220" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-c38ff9d image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="c38ff9d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-5-2.webp" className="attachment-full size-full wp-image-2221" alt="" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-32ce081 contact-now-btn elementor-invisible elementor-widget elementor-widget-button" data-id="32ce081" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </span>
<span className="elementor-button-text">Contact Now</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-32986d8 e-con-full e-flex e-con e-child" data-id="32986d8" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-390d607 e-con-full e-flex e-con e-child" data-id="390d607" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-bd51c96 e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="bd51c96" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-13b8d12 elementor-widget elementor-widget-elementskit-funfact" data-id="13b8d12" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-funfact text-left">
<div className="elementskit-funfact-inner position_top">
<div className="funfact-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none"><path d="M13.6385 13.9868C17.1889 13.9868 20.0671 11.1086 20.0671 7.55821C20.0671 4.00781 17.1889 1.12964 13.6385 1.12964C10.0881 1.12964 7.20996 4.00781 7.20996 7.55821C7.20996 11.1086 10.0881 13.9868 13.6385 13.9868Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.2098 35.4153H0.78125V31.1296C0.80399 28.9518 1.37833 26.8154 2.4506 24.9198C3.52288 23.0242 5.05811 21.4313 6.91289 20.2899C8.76768 19.1485 10.8815 18.4958 13.0569 18.3928C15.2323 18.2898 17.3984 18.7399 19.3527 19.701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.3525 21.1296V38.2725" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.7812 29.7009H37.9241" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
<div className="funfact-content">
<div className="number-percentage-wraper">
<span className="number-percentage" data-value="35" data-animation-duration="3500" data-style="static">0</span>
						k+											</div>
<h3 className="funfact-title">Happy Customer Around the Word</h3> </div>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-d2d422f e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="d2d422f" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-105fd5a elementor-widget elementor-widget-elementskit-funfact" data-id="105fd5a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-funfact text-left">
<div className="elementskit-funfact-inner position_top">
<div className="funfact-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="37" viewBox="0 0 39 37" fill="none"><path d="M13.6385 13.8437C17.1889 13.8437 20.0671 10.9656 20.0671 7.41518C20.0671 3.86474 17.1889 0.986572 13.6385 0.986572C10.0881 0.986572 7.20996 3.86474 7.20996 7.41518C7.20996 10.9656 10.0881 13.8437 13.6385 13.8437Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.4955 35.2722H0.78125V32.415C0.78125 29.0051 2.13584 25.7349 4.54702 23.3237C6.9582 20.9125 10.2285 19.5579 13.6384 19.5579C17.0483 19.5579 20.3186 20.9125 22.7298 23.3237C25.1409 25.7349 26.4955 29.0051 26.4955 32.415V35.2722Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M25.0669 0.986572C26.7719 0.986572 28.407 1.66387 29.6126 2.86946C30.8182 4.07505 31.4955 5.71018 31.4955 7.41518C31.4955 9.12008 30.8182 10.7553 29.6126 11.9609C28.407 13.1664 26.7719 13.8437 25.0669 13.8437" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.6382 20.1008C32.072 21.0266 34.1673 22.6696 35.6469 24.8124C37.1264 26.9552 37.9205 29.4968 37.9239 32.1008V35.2722H33.6382" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
<div className="funfact-content">
<div className="number-percentage-wraper">
<span className="number-percentage" data-value="250" data-animation-duration="3500" data-style="static">0</span>
						+											</div>
<h3 className="funfact-title">trusted best partners and sponsers</h3> </div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-73f5416 e-con-full experts-counter-box e-flex e-con e-child" data-id="73f5416" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-108b1ee e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="108b1ee" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-2c8aae9 elementor-widget elementor-widget-elementskit-funfact" data-id="2c8aae9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-funfact text-left">
<div className="elementskit-funfact-inner position_top">
<div className="funfact-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 34 40" fill="none"><path d="M17.3523 26.8438C21.2972 26.8438 24.4952 23.6459 24.4952 19.701C24.4952 15.7561 21.2972 12.5581 17.3523 12.5581C13.4074 12.5581 10.2095 15.7561 10.2095 19.701C10.2095 23.6459 13.4074 26.8438 17.3523 26.8438Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.3525 12.5582V1.12964" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.4951 38.2724V33.9866H30.2094C30.9672 33.9866 31.6939 33.6856 32.2297 33.1498C32.7655 32.614 33.0665 31.8873 33.0665 31.1295V19.7009C33.0671 16.804 32.2668 13.9634 30.7542 11.4927C29.2416 9.0221 27.0755 7.0177 24.4951 5.70093" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.2095 5.70093C7.62811 7.01692 5.46077 9.021 3.9471 11.4917C2.43343 13.9624 1.63232 16.8034 1.63232 19.7009C1.63232 22.5984 2.43343 25.4395 3.9471 27.9102C5.46077 30.3809 7.62811 32.3849 10.2095 33.7009V38.2724" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
<div className="funfact-content">
<div className="number-percentage-wraper">
<span className="number-percentage" data-value="120" data-animation-duration="3500" data-style="static">0</span>
						+											</div>
<h3 className="funfact-title">best client support award achieved</h3> </div>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-00a69c7 e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="00a69c7" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-d5d879f elementor-widget elementor-widget-elementskit-funfact" data-id="d5d879f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-funfact text-left">
<div className="elementskit-funfact-inner position_top">
<div className="funfact-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><path d="M9.98145 17.4152L17.2386 5.81517C17.5198 5.35668 17.915 4.97885 18.3857 4.71848C18.8564 4.45811 19.3864 4.32409 19.9243 4.32946V4.32946C20.3479 4.31417 20.7703 4.38395 21.1664 4.53468C21.5626 4.6854 21.9246 4.91402 22.2309 5.20701C22.5372 5.50001 22.7816 5.85143 22.9498 6.24052C23.118 6.6296 23.2065 7.04845 23.21 7.47231V15.7866H35.7529C36.2163 15.8016 36.6714 15.9146 37.0881 16.1181C37.5048 16.3215 37.8737 16.6109 38.1705 16.9671C38.4674 17.3234 38.6855 17.7384 38.8105 18.1849C38.9355 18.6315 38.9645 19.0994 38.8957 19.558L36.61 34.3009C36.5125 35.0888 36.1306 35.8139 35.5361 36.3401C34.9416 36.8662 34.1753 37.1571 33.3814 37.158H14.6386C13.7464 37.1615 12.8657 36.956 12.0672 36.558L10.01 35.5295" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.98145 17.4152V35.4437" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.20982 17.4152H9.98125V35.4437H3.20982C2.83094 35.4437 2.46758 35.2932 2.19967 35.0253C1.93176 34.7574 1.78125 34.394 1.78125 34.0152V18.8437C1.78125 18.4649 1.93176 18.1015 2.19967 17.8336C2.46758 17.5657 2.83094 17.4152 3.20982 17.4152V17.4152Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
<div className="funfact-content">
<div className="number-percentage-wraper">
<span className="number-percentage" data-value="5" data-animation-duration="3500" data-style="static">0</span>
						k+											</div>
<h3 className="funfact-title">active users using our best services</h3> </div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b360f03 e-flex e-con-boxed e-con e-parent" data-id="b360f03" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-a00e2a5 e-con-full e-flex e-con e-child" data-id="a00e2a5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-9629238 e-con-full backdrop-filter e-flex e-con e-child" data-id="9629238" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a666630 e-con-full e-flex e-con e-child" data-id="a666630" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0545526 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="0545526" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">EXECUTIVE PARTNERS</h2> </div>
</div>
<div className="elementor-element elementor-element-063e5d4 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="063e5d4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">100+ <span>partners</span> & supporters</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-b058d56 e-con-full e-flex e-con e-child" data-id="b058d56" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3fb7231 elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="3fb7231" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="124" height="30" src="/wp-content/uploads/2024/11/company-logo-1-2.svg" className="attachment-full size-full wp-image-2112" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-2f765d4 elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="2f765d4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="124" height="30" src="/wp-content/uploads/2024/11/company-logo-2-2.svg" className="attachment-full size-full wp-image-3077" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-90deef0 elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="90deef0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="123" height="30" src="/wp-content/uploads/2024/11/company-logo-3-2.svg" className="attachment-full size-full wp-image-3084" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-442969f elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="442969f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="123" height="30" src="/wp-content/uploads/2024/11/company-logo-3-2.svg" className="attachment-full size-full wp-image-3084" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-02a1bba elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="02a1bba" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:400,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="124" height="30" src="/wp-content/uploads/2024/11/company-logo-5-2.svg" className="attachment-full size-full wp-image-3090" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-278452c elementor-widget__width-initial at-image-animation at-animation-image-none elementor-invisible elementor-widget elementor-widget-image" data-id="278452c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="124" height="30" src="/wp-content/uploads/2024/11/company-logo-1-2.svg" className="attachment-full size-full wp-image-2112" alt="" /> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-5cb65e5 our-features e-flex e-con-boxed e-con e-parent" data-id="5cb65e5" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-7e589f6 e-con-full e-flex e-con e-child" data-id="7e589f6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-dd7117f e-con-full e-flex e-con e-child" data-id="dd7117f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-d5afbae section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="d5afbae" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">FEATURES</h2> </div>
</div>
<div className="elementor-element elementor-element-3a79286 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="3a79286" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Innovative <span>features</span> for your digital success</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-111339f e-con-full e-flex e-con e-child" data-id="111339f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4e8c74c elementor-invisible elementor-widget elementor-widget-text-editor" data-id="4e8c74c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p> </div>
</div>
<div className="elementor-element elementor-element-159a3a9 elementor-invisible elementor-widget elementor-widget-button" data-id="159a3a9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
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
<div className="elementor-element elementor-element-66b0387 e-con-full e-flex e-con e-child" data-id="66b0387" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-d1d3274 e-con-full digital-features-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="d1d3274" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-35e7090 digital-features-image features-item-1 elementor-position-top elementor-widget elementor-widget-image-box" data-id="35e7090" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="625" height="270" src="/wp-content/uploads/2024/11/digital-features-img-1-2.webp" className="attachment-full size-full wp-image-2245" alt="" srcSet="./wp-content/uploads/2024/11/digital-features-img-1-2.webp 625w, ./wp-content/uploads/2024/11/digital-features-img-1-2-300x130.jpg 300w" sizes="(max-width: 625px) 100vw, 625px" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Custom Branding Solutions</h3><p className="elementor-image-box-description">Unique brand identity development, including logos, color palettes.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-6629b90 e-con-full digital-features-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="6629b90" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-b434f9c digital-features-image features-item-2 elementor-position-top elementor-widget elementor-widget-image-box" data-id="b434f9c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="372" height="270" src="/wp-content/uploads/2024/11/digital-features-img-2-2.webp" className="attachment-full size-full wp-image-2315" alt="" srcSet="./wp-content/uploads/2024/11/digital-features-img-2-2.webp 372w, ./wp-content/uploads/2024/11/digital-features-img-2-2-300x218.jpg 300w" sizes="(max-width: 372px) 100vw, 372px" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Data-Driven Digital Marketing</h3><p className="elementor-image-box-description">Strategies combining SEO, PPC, content marketing</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-01dac9a e-con-full backdrop-filter e-flex e-con e-child" data-id="01dac9a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-b8f9541 e-con-full e-flex e-con e-child" data-id="b8f9541" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-533475d e-con-full e-flex elementor-invisible e-con e-child" data-id="533475d" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-0ddd1fc at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="0ddd1fc" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Content Creation And Strategy</h2> </div>
</div>
<div className="elementor-element elementor-element-7d8cc24 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="7d8cc24" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-49655e7 e-con-full e-flex e-con e-child" data-id="49655e7" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-45c42ad agency-free-consultation elementor-widget__width-auto elementor-widget elementor-widget-text-path" data-id="45c42ad" data-element_type="widget" data-e-type="widget" data-settings="{&quot;text&quot;:&quot;. Get free consultation . Get free consultation&quot;,&quot;align&quot;:&quot;right&quot;,&quot;align_tablet&quot;:&quot;right&quot;,&quot;link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;start_point&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-path.default">
<div className="elementor-widget-container">
<div className="e-text-path" data-text=". Get free consultation . Get free consultation" data-url="./wp-content/plugins/elementor/assets/svg-paths/circle.svg" data-link-url=""></div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1393232 e-con-full e-flex e-con e-child" data-id="1393232" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a01a4af agency-supports-slider elementor-widget elementor-widget-image-carousel" data-id="a01a4af" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;6&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;none&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;slides_to_show_tablet&quot;:&quot;4&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-carousel.default">
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
<div className="elementor-element elementor-element-ade73f4 our-team e-flex e-con-boxed e-con e-parent" data-id="ade73f4" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-3741873 e-con-full e-flex e-con e-child" data-id="3741873" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-bd716da e-con-full e-flex e-con e-child" data-id="bd716da" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5af9a5a section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="5af9a5a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">OUR TEAM</h2> </div>
</div>
<div className="elementor-element elementor-element-dddfd07 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="dddfd07" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Dynamic <span>team</span> of digital experts</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-470a718 e-con-full e-flex e-con e-child" data-id="470a718" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-132ead1 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="132ead1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p> </div>
</div>
<div className="elementor-element elementor-element-f12f173 elementor-invisible elementor-widget elementor-widget-button" data-id="f12f173" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">More About</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-5e35228 e-con-full e-flex e-con e-child" data-id="5e35228" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-39efa24 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="39efa24" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-f121bd2 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="f121bd2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="555" src="/wp-content/uploads/2024/11/team-1-2.webp" className="attachment-full size-full wp-image-1770" alt="" srcSet="./wp-content/uploads/2024/11/team-1-2.webp 400w, ./wp-content/uploads/2024/11/team-1-2-216x300.jpg 216w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-f13ab87 e-con-full team-body e-flex e-con e-child" data-id="f13ab87" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-697184d at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="697184d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/sarah-mitchell/index.html">Sarah Mitchell</a></h2> </div>
</div>
<div className="elementor-element elementor-element-3b6c254 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="3b6c254" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Senior Project Manager</p> </div>
</div>
<div className="elementor-element elementor-element-ee6e3d7 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="ee6e3d7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
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
<div className="elementor-element elementor-element-db92f41 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="db92f41" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-b14e150 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="b14e150" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-info-image-box ekit-image-box text-center simple-card">
<a href="#">
<div className="elementskit-box-header image-box-img-center">
<img loading="lazy" decoding="async" width="400" height="554" src="/wp-content/uploads/2024/11/team-2-2.webp" className="attachment-full size-full wp-image-2529" alt="" srcSet="./wp-content/uploads/2024/11/team-2-2.webp 400w, ./wp-content/uploads/2024/11/team-2-2-217x300.jpg 217w" sizes="(max-width: 400px) 100vw, 400px" />
</div>
</a>
<div className="elementskit-box-body ekit-image-box-body">
<div className="elementskit-box-content ekit-image-box-body-inner">
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-c053835 e-con-full team-body e-flex e-con e-child" data-id="c053835" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-b1a0f78 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="b1a0f78" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/brooklyn-simmons/index.html">Brooklyn Simmons</a></h2> </div>
</div>
<div className="elementor-element elementor-element-0c251cf at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="0c251cf" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Marketing Directoer</p> </div>
</div>
<div className="elementor-element elementor-element-03eef17 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="03eef17" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
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
<div className="elementor-element elementor-element-7942b8e e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="7942b8e" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-892d43e team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="892d43e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
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
<div className="elementor-element elementor-element-6a75493 e-con-full team-body e-flex e-con e-child" data-id="6a75493" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fab2763 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="fab2763" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/emily-davis/index.html">Emily Davis</a></h2> </div>
</div>
<div className="elementor-element elementor-element-bea0e85 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="bea0e85" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Product Manager</p> </div>
</div>
<div className="elementor-element elementor-element-f0b2e16 team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="f0b2e16" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
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
<div className="elementor-element elementor-element-5d11b02 e-con-full team-item e-flex elementor-invisible e-con e-child" data-id="5d11b02" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-d1b48d9 team-image image-anime ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box" data-id="d1b48d9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-image-box.default">
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
<div className="elementor-element elementor-element-c285990 e-con-full team-body e-flex e-con e-child" data-id="c285990" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fef2c1d at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="fef2c1d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default"><a href="./team/jessica-taylor/index.html">Jessica Taylor</a></h2> </div>
</div>
<div className="elementor-element elementor-element-2cafbc2 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="2cafbc2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<p className="elementor-heading-title elementor-size-default">Communications Specialist</p> </div>
</div>
<div className="elementor-element elementor-element-8566b2a team-social-list elementor-widget elementor-widget-elementskit-social-media" data-id="8566b2a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
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
<div className="elementor-element elementor-element-9469901 why-choose-us e-flex e-con-boxed e-con e-parent" data-id="9469901" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-51ff4e6 e-con-full e-flex e-con e-child" data-id="51ff4e6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-17100ba e-con-full e-flex e-con e-child" data-id="17100ba" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1d61e6b section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="1d61e6b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">WHY CHOOSE</h2> </div>
</div>
<div className="elementor-element elementor-element-4203e89 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="4203e89" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Expertise for<span> your digital</span> growth journey</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-836fbdb e-con-full e-flex e-con e-child" data-id="836fbdb" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-43a6b10 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="43a6b10" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-ccab501 e-con-full e-flex e-con e-child" data-id="ccab501" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fa94dee e-con-full why-choose-content e-flex e-con e-child" data-id="fa94dee" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-2bad3e3 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="2bad3e3" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-039deda elementor-widget elementor-widget-icon-box" data-id="039deda" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Data-Driven Approach						</span>
</h3>
<p className="elementor-icon-box-description">
						We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e952558 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="e952558" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-bbaaaea elementor-widget elementor-widget-icon-box" data-id="bbaaaea" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Competitive Pricing						</span>
</h3>
<p className="elementor-icon-box-description">
						We offer our top-quality services at competitive prices, providing you with great value for your investment.					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-3e70ead e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="3e70ead" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-f5e566e elementor-widget elementor-widget-icon-box" data-id="f5e566e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Ethical Business Practices						</span>
</h3>
<p className="elementor-icon-box-description">
						We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-f7d1ee7 e-con-full e-flex e-con e-child" data-id="f7d1ee7" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-357a7c6 image-anime why-choose-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="357a7c6" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="594" height="549" src="/wp-content/uploads/2024/11/why-choose-image-2.webp" className="attachment-full size-full wp-image-1037" alt="" srcSet="./wp-content/uploads/2024/11/why-choose-image-2.webp 594w, ./wp-content/uploads/2024/11/why-choose-image-2-300x277.jpg 300w" sizes="(max-width: 594px) 100vw, 594px" /> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9c88b30 our-testimonial e-flex e-con-boxed e-con e-parent" data-id="9c88b30" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-7f287a6 e-con-full e-flex e-con e-child" data-id="7f287a6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-be2c40b e-con-full e-flex e-con e-child" data-id="be2c40b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-46ee590 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="46ee590" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">TESTIMONIALS</h2> </div>
</div>
<div className="elementor-element elementor-element-b25e249 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="b25e249" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Read what they have to say about <span> working with us </span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-9171fac e-con-full e-flex e-con e-child" data-id="9171fac" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e34a378 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="e34a378" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Discover how our clients have achieved success through our innovative solutions and dedicated support.</p> </div>
</div>
<div className="elementor-element elementor-element-55092c4 elementor-invisible elementor-widget elementor-widget-button" data-id="55092c4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./testimonial/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">All Testimonials</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-60eafba e-con-full e-flex e-con e-child" data-id="60eafba" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-ec9133b e-con-full backdrop-filter e-flex e-con e-child" data-id="ec9133b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-66ce6bd testimonial-review-counter elementor-widget elementor-widget-counter" data-id="66ce6bd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix"></span>
<span className="elementor-counter-number" data-duration="2000" data-to-value="4.9" data-from-value="0" data-delimiter=",">0</span>
<span className="elementor-counter-number-suffix"></span>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-13a81f3 elementor-widget elementor-widget-rating" data-id="13a81f3" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemType="https://schema.org/Rating" itemScope={true} itemProp="reviewRating">
<meta itemProp="worstRating" content="0" />
<meta itemProp="bestRating" content="5" />
<div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-50d17e4 elementor-widget elementor-widget-text-editor" data-id="50d17e4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>( 40+ Reviews )</p> </div>
</div>
<div className="elementor-element elementor-element-f172296 at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="f172296" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Customer experiences that speak for themselves</h3> </div>
</div>
<div className="elementor-element elementor-element-5558abe e-con-full e-flex e-con e-child" data-id="5558abe" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-280fa31 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="280fa31" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp" className="attachment-full size-full wp-image-2217" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-bf0c098 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="bf0c098" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp" className="attachment-full size-full wp-image-2218" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-ef4c60f image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="ef4c60f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp" className="attachment-full size-full wp-image-2219" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-189f289 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="189f289" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-4-2.webp" className="attachment-full size-full wp-image-2220" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-74669d0 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="74669d0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-5-2.webp" className="attachment-full size-full wp-image-2221" alt="" /> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1d7beae e-con-full e-flex e-con e-child" data-id="1d7beae" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0d03e2c testimonial-slider arrow-using-ekit elementor-widget elementor-widget-elementskit-testimonial" data-id="0d03e2c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-testimonial.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><div className="elementskit-testimonial-slider ekit_testimonial_style_5 arrow_inside" data-config="{&quot;rtl&quot;:false,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;pauseOnHover&quot;:false,&quot;autoplay&quot;:false,&quot;speed&quot;:1100,&quot;slidesPerGroup&quot;:1,&quot;slidesPerView&quot;:1,&quot;loop&quot;:true,&quot;spaceBetween&quot;:&quot;&quot;,&quot;breakpoints&quot;:{&quot;320&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;768&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;1024&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:15}}}">
<div className="ekit-main-swiper swiper">
<div className="swiper-wrapper">
<div className="swiper-slide">
<div className="swiper-slide-inner">
<div className="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-two elementor-repeater-item-0bddc1b">
<div className="elementskit-commentor-header">
<ul className="elementskit-stars">
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
</ul>
<div className="elementskit-icon-content elementskit-watermark-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="124" height="30" viewBox="0 0 124 30" fill="none"><path d="M36.7866 19.5857H45.5549V16.9307H39.9031V6.93018H36.7866V19.5857Z" fill="white"></path><path d="M50.7501 17.8168C49.5 17.8168 48.8485 16.7194 48.8485 15.0733C48.8485 13.4272 49.5 12.3121 50.7501 12.3121C52.0002 12.3121 52.6693 13.4272 52.6693 15.0733C52.6693 16.7194 52.0002 17.8168 50.7501 17.8168ZM50.7677 19.87C53.6729 19.87 55.5744 17.7991 55.5744 15.0733C55.5744 12.3475 53.6729 10.2766 50.7677 10.2766C47.8801 10.2766 45.9434 12.3475 45.9434 15.0733C45.9434 17.7991 47.8801 19.87 50.7677 19.87Z" fill="white"></path><path d="M60.6033 22.7186C61.9414 22.7186 63.1211 22.4177 63.9134 21.7097C64.6353 21.0548 65.1107 20.0636 65.1107 18.7007V10.5233H62.364V11.4968H62.3288C61.8005 10.7357 60.9906 10.2578 59.7933 10.2578C57.5572 10.2578 56.0078 12.134 56.0078 14.789C56.0078 17.5679 57.8918 19.0901 59.9166 19.0901C61.0082 19.0901 61.6949 18.6476 62.2231 18.0458H62.2935V18.9485C62.2935 20.0459 61.7829 20.6831 60.568 20.6831C59.6173 20.6831 59.1419 20.276 58.9834 19.7981H56.2015C56.4832 21.692 58.1207 22.7186 60.6033 22.7186ZM60.5857 16.9484C59.5116 16.9484 58.8073 16.0634 58.8073 14.7005C58.8073 13.3199 59.5116 12.4349 60.5857 12.4349C61.7829 12.4349 62.4168 13.4615 62.4168 14.6828C62.4168 15.9572 61.8358 16.9484 60.5857 16.9484Z" fill="white"></path><path d="M70.7579 17.8168C69.5078 17.8168 68.8563 16.7194 68.8563 15.0733C68.8563 13.4272 69.5078 12.3121 70.7579 12.3121C72.008 12.3121 72.6771 13.4272 72.6771 15.0733C72.6771 16.7194 72.008 17.8168 70.7579 17.8168ZM70.7755 19.87C73.6807 19.87 75.5819 17.7991 75.5819 15.0733C75.5819 12.3475 73.6807 10.2766 70.7755 10.2766C67.8879 10.2766 65.9512 12.3475 65.9512 15.0733C65.9512 17.7991 67.8879 19.87 70.7755 19.87Z" fill="white"></path><path d="M76.4204 19.5857H79.2904V10.5233H76.4204V19.5857ZM76.4204 9.26658H79.2904V6.93018H76.4204V9.26658Z" fill="white"></path><path d="M80.5356 22.577H83.4056V18.6476H83.4408C84.0042 19.4087 84.8318 19.8689 85.9938 19.8689C88.3532 19.8689 89.9202 17.9927 89.9202 15.0545C89.9202 12.3287 88.4588 10.2578 86.0643 10.2578C84.8318 10.2578 83.9514 10.8065 83.3352 11.6207H83.2823V10.5233H80.5356V22.577ZM85.2543 17.6387C84.0218 17.6387 83.3176 16.6298 83.3176 15.1607C83.3176 13.6916 83.9514 12.5765 85.2015 12.5765C86.434 12.5765 87.015 13.6031 87.015 15.1607C87.015 16.7006 86.346 17.6387 85.2543 17.6387Z" fill="white"></path><path d="M94.5922 19.8689C96.9515 19.8689 98.6946 18.8423 98.6946 16.8599C98.6946 14.5412 96.8283 14.1341 95.2436 13.8686C94.0992 13.6562 93.078 13.5677 93.078 12.9305C93.078 12.3641 93.6238 12.0986 94.3281 12.0986C95.1204 12.0986 95.6662 12.3464 95.7718 13.1606H98.4129C98.272 11.3729 96.8987 10.2578 94.3457 10.2578C92.2152 10.2578 90.4545 11.249 90.4545 13.1606C90.4545 15.2846 92.1272 15.7094 93.6942 15.9749C94.8915 16.1873 95.9831 16.2758 95.9831 17.09C95.9831 17.6741 95.4373 17.9927 94.5746 17.9927C93.6238 17.9927 93.0251 17.5502 92.9195 16.6475H90.208C90.296 18.6476 91.9511 19.8689 94.5922 19.8689Z" fill="white"></path><path d="M102.594 19.8516C103.844 19.8516 104.636 19.356 105.287 18.471H105.34V19.5861H108.087V10.5237H105.217V15.5859C105.217 16.6656 104.618 17.409 103.632 17.409C102.717 17.409 102.277 16.8603 102.277 15.8691V10.5237H99.4243V16.4709C99.4243 18.4887 100.516 19.8516 102.594 19.8516Z" fill="white"></path><path d="M109.335 19.5857H112.205V14.5058C112.205 13.4261 112.734 12.665 113.632 12.665C114.494 12.665 114.899 13.2314 114.899 14.2049V19.5857H117.769V14.5058C117.769 13.4261 118.28 12.665 119.195 12.665C120.058 12.665 120.463 13.2314 120.463 14.2049V19.5857H123.333V13.6916C123.333 11.6561 122.312 10.2578 120.269 10.2578C119.107 10.2578 118.139 10.7534 117.435 11.8508H117.399C116.942 10.8773 116.044 10.2578 114.864 10.2578C113.561 10.2578 112.698 10.8773 112.135 11.8154H112.082V10.5233H109.335V19.5857Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.5054 8.80343C18.3132 8.0026 16.9114 7.57514 15.4775 7.57514V0.286865C18.3454 0.286865 21.1488 1.14177 23.5333 2.74346C25.9178 4.34514 27.7763 6.62169 28.8738 9.28519C29.9712 11.9487 30.2584 14.8796 29.6989 17.7072C29.1394 20.5347 27.7585 23.132 25.7306 25.1706C23.7027 27.2092 21.1191 28.5974 18.3063 29.1599C15.4936 29.7223 12.5781 29.4336 9.92861 28.3304C7.2791 27.2271 5.01451 25.3588 3.42123 22.9617C1.82795 20.5646 0.977539 17.7464 0.977539 14.8634H8.22754C8.22754 16.3049 8.65275 17.714 9.44938 18.9126C10.246 20.1111 11.3783 21.0453 12.7031 21.5969C14.0278 22.1486 15.4856 22.2929 16.8919 22.0116C18.2983 21.7304 19.5901 21.0363 20.6041 20.017C21.618 18.9977 22.3085 17.6991 22.5882 16.2853C22.868 14.8715 22.7244 13.406 22.1757 12.0743C21.6269 10.7425 20.6977 9.60427 19.5054 8.80343Z" fill="#BFF747"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.22754 0.286869C8.22754 1.24398 8.04002 2.19172 7.67567 3.07597C7.31132 3.96022 6.77729 4.76368 6.10406 5.44046C5.43084 6.11724 4.63161 6.65409 3.75199 7.02036C2.87238 7.38662 1.92962 7.57514 0.977539 7.57514L0.977539 14.8634C2.8817 14.8634 4.76723 14.4864 6.52645 13.7538C8.28568 13.0213 9.88416 11.9476 11.2306 10.594C12.577 9.24051 13.6451 7.63359 14.3738 5.86507C15.1025 4.09656 15.4775 2.20108 15.4775 0.286865L8.22754 0.286869Z" fill="#BFF747"></path></svg> </div>
</div>
<div className="elementskit-commentor-content"><p>The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p></div>
<div className="elementskit-commentor-bio">
<div className="elementkit-commentor-details client_left">
<div className="elementskit-commentor-image ekit-testimonial--avatar">
<img loading="lazy" decoding="async" width="60" height="60" src="/wp-content/uploads/2024/11/author-1-2.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/author-1-2.webp 270w, ./wp-content/uploads/2024/11/author-1-2-150x150.jpg?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
<div className="elementskit-profile-info">
<strong className="elementskit-author-name">Sarah Mitchell</strong>
<span className="elementskit-author-des">Marketing Director</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="swiper-slide-inner">
<div className="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-two elementor-repeater-item-5cbfe8b">
<div className="elementskit-commentor-header">
<ul className="elementskit-stars">
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
</ul>
<div className="elementskit-icon-content elementskit-watermark-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="124" height="30" viewBox="0 0 124 30" fill="none"><path d="M36.7866 19.5857H45.5549V16.9307H39.9031V6.93018H36.7866V19.5857Z" fill="white"></path><path d="M50.7501 17.8168C49.5 17.8168 48.8485 16.7194 48.8485 15.0733C48.8485 13.4272 49.5 12.3121 50.7501 12.3121C52.0002 12.3121 52.6693 13.4272 52.6693 15.0733C52.6693 16.7194 52.0002 17.8168 50.7501 17.8168ZM50.7677 19.87C53.6729 19.87 55.5744 17.7991 55.5744 15.0733C55.5744 12.3475 53.6729 10.2766 50.7677 10.2766C47.8801 10.2766 45.9434 12.3475 45.9434 15.0733C45.9434 17.7991 47.8801 19.87 50.7677 19.87Z" fill="white"></path><path d="M60.6033 22.7186C61.9414 22.7186 63.1211 22.4177 63.9134 21.7097C64.6353 21.0548 65.1107 20.0636 65.1107 18.7007V10.5233H62.364V11.4968H62.3288C61.8005 10.7357 60.9906 10.2578 59.7933 10.2578C57.5572 10.2578 56.0078 12.134 56.0078 14.789C56.0078 17.5679 57.8918 19.0901 59.9166 19.0901C61.0082 19.0901 61.6949 18.6476 62.2231 18.0458H62.2935V18.9485C62.2935 20.0459 61.7829 20.6831 60.568 20.6831C59.6173 20.6831 59.1419 20.276 58.9834 19.7981H56.2015C56.4832 21.692 58.1207 22.7186 60.6033 22.7186ZM60.5857 16.9484C59.5116 16.9484 58.8073 16.0634 58.8073 14.7005C58.8073 13.3199 59.5116 12.4349 60.5857 12.4349C61.7829 12.4349 62.4168 13.4615 62.4168 14.6828C62.4168 15.9572 61.8358 16.9484 60.5857 16.9484Z" fill="white"></path><path d="M70.7579 17.8168C69.5078 17.8168 68.8563 16.7194 68.8563 15.0733C68.8563 13.4272 69.5078 12.3121 70.7579 12.3121C72.008 12.3121 72.6771 13.4272 72.6771 15.0733C72.6771 16.7194 72.008 17.8168 70.7579 17.8168ZM70.7755 19.87C73.6807 19.87 75.5819 17.7991 75.5819 15.0733C75.5819 12.3475 73.6807 10.2766 70.7755 10.2766C67.8879 10.2766 65.9512 12.3475 65.9512 15.0733C65.9512 17.7991 67.8879 19.87 70.7755 19.87Z" fill="white"></path><path d="M76.4204 19.5857H79.2904V10.5233H76.4204V19.5857ZM76.4204 9.26658H79.2904V6.93018H76.4204V9.26658Z" fill="white"></path><path d="M80.5356 22.577H83.4056V18.6476H83.4408C84.0042 19.4087 84.8318 19.8689 85.9938 19.8689C88.3532 19.8689 89.9202 17.9927 89.9202 15.0545C89.9202 12.3287 88.4588 10.2578 86.0643 10.2578C84.8318 10.2578 83.9514 10.8065 83.3352 11.6207H83.2823V10.5233H80.5356V22.577ZM85.2543 17.6387C84.0218 17.6387 83.3176 16.6298 83.3176 15.1607C83.3176 13.6916 83.9514 12.5765 85.2015 12.5765C86.434 12.5765 87.015 13.6031 87.015 15.1607C87.015 16.7006 86.346 17.6387 85.2543 17.6387Z" fill="white"></path><path d="M94.5922 19.8689C96.9515 19.8689 98.6946 18.8423 98.6946 16.8599C98.6946 14.5412 96.8283 14.1341 95.2436 13.8686C94.0992 13.6562 93.078 13.5677 93.078 12.9305C93.078 12.3641 93.6238 12.0986 94.3281 12.0986C95.1204 12.0986 95.6662 12.3464 95.7718 13.1606H98.4129C98.272 11.3729 96.8987 10.2578 94.3457 10.2578C92.2152 10.2578 90.4545 11.249 90.4545 13.1606C90.4545 15.2846 92.1272 15.7094 93.6942 15.9749C94.8915 16.1873 95.9831 16.2758 95.9831 17.09C95.9831 17.6741 95.4373 17.9927 94.5746 17.9927C93.6238 17.9927 93.0251 17.5502 92.9195 16.6475H90.208C90.296 18.6476 91.9511 19.8689 94.5922 19.8689Z" fill="white"></path><path d="M102.594 19.8516C103.844 19.8516 104.636 19.356 105.287 18.471H105.34V19.5861H108.087V10.5237H105.217V15.5859C105.217 16.6656 104.618 17.409 103.632 17.409C102.717 17.409 102.277 16.8603 102.277 15.8691V10.5237H99.4243V16.4709C99.4243 18.4887 100.516 19.8516 102.594 19.8516Z" fill="white"></path><path d="M109.335 19.5857H112.205V14.5058C112.205 13.4261 112.734 12.665 113.632 12.665C114.494 12.665 114.899 13.2314 114.899 14.2049V19.5857H117.769V14.5058C117.769 13.4261 118.28 12.665 119.195 12.665C120.058 12.665 120.463 13.2314 120.463 14.2049V19.5857H123.333V13.6916C123.333 11.6561 122.312 10.2578 120.269 10.2578C119.107 10.2578 118.139 10.7534 117.435 11.8508H117.399C116.942 10.8773 116.044 10.2578 114.864 10.2578C113.561 10.2578 112.698 10.8773 112.135 11.8154H112.082V10.5233H109.335V19.5857Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.5054 8.80343C18.3132 8.0026 16.9114 7.57514 15.4775 7.57514V0.286865C18.3454 0.286865 21.1488 1.14177 23.5333 2.74346C25.9178 4.34514 27.7763 6.62169 28.8738 9.28519C29.9712 11.9487 30.2584 14.8796 29.6989 17.7072C29.1394 20.5347 27.7585 23.132 25.7306 25.1706C23.7027 27.2092 21.1191 28.5974 18.3063 29.1599C15.4936 29.7223 12.5781 29.4336 9.92861 28.3304C7.2791 27.2271 5.01451 25.3588 3.42123 22.9617C1.82795 20.5646 0.977539 17.7464 0.977539 14.8634H8.22754C8.22754 16.3049 8.65275 17.714 9.44938 18.9126C10.246 20.1111 11.3783 21.0453 12.7031 21.5969C14.0278 22.1486 15.4856 22.2929 16.8919 22.0116C18.2983 21.7304 19.5901 21.0363 20.6041 20.017C21.618 18.9977 22.3085 17.6991 22.5882 16.2853C22.868 14.8715 22.7244 13.406 22.1757 12.0743C21.6269 10.7425 20.6977 9.60427 19.5054 8.80343Z" fill="#BFF747"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.22754 0.286869C8.22754 1.24398 8.04002 2.19172 7.67567 3.07597C7.31132 3.96022 6.77729 4.76368 6.10406 5.44046C5.43084 6.11724 4.63161 6.65409 3.75199 7.02036C2.87238 7.38662 1.92962 7.57514 0.977539 7.57514L0.977539 14.8634C2.8817 14.8634 4.76723 14.4864 6.52645 13.7538C8.28568 13.0213 9.88416 11.9476 11.2306 10.594C12.577 9.24051 13.6451 7.63359 14.3738 5.86507C15.1025 4.09656 15.4775 2.20108 15.4775 0.286865L8.22754 0.286869Z" fill="#BFF747"></path></svg> </div>
</div>
<div className="elementskit-commentor-content"><p>The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p></div>
<div className="elementskit-commentor-bio">
<div className="elementkit-commentor-details client_left">
<div className="elementskit-commentor-image ekit-testimonial--avatar">
<img loading="lazy" decoding="async" width="60" height="60" src="/wp-content/uploads/2024/11/author-2-1-2.webp" className="attachment-full size-full" alt="" srcSet="./wp-content/uploads/2024/11/author-2-1-2.webp 270w, ./wp-content/uploads/2024/11/author-2-1-2-150x150.jpg?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
<div className="elementskit-profile-info">
<strong className="elementskit-author-name">Sarah Mitchell</strong>
<span className="elementskit-author-des">Marketing Director</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-navigation-button swiper-button-prev">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.32424 8.01077L16.4964 8.01076L16.4964 10.0105L4.32495 10.0112L9.68835 15.3746L8.27414 16.7888L0.495969 9.01062L8.27414 1.23244L9.68836 2.64666L4.32424 8.01077Z" fill="CurrentColor"></path></svg> </div>
<div className="swiper-navigation-button swiper-button-next">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.6679 10.0102L1.49581 10.0102L1.49581 8.01054L13.6672 8.00982L8.30384 2.64642L9.71805 1.23221L17.4962 9.01038L9.71804 16.7886L8.30383 15.3743L13.6679 10.0102Z" fill="CurrentColor"></path></svg> </div>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e13971e e-con-full e-flex e-con e-child" data-id="e13971e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-ac17188 e-con-full backdrop-filter e-flex e-con e-child" data-id="ac17188" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c9a1d70 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="c9a1d70" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-0351bac elementor-widget elementor-widget-elementskit-pricing" data-id="0351bac" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="40" viewBox="0 0 37 40" fill="none"><path d="M18.5 28.5278V31.4135" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 14.2134V16.8991" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5002 38.4422C28.5002 38.4422 35.6431 34.8993 35.6431 27.0136C35.6431 18.4422 31.3574 12.7279 22.7859 8.44219L26.1574 4.09933C26.3287 3.81439 26.4216 3.48923 26.4267 3.15681C26.4318 2.8244 26.3489 2.49654 26.1865 2.20647C26.024 1.9164 25.7878 1.67443 25.5017 1.50508C25.2156 1.33574 24.8898 1.24504 24.5574 1.24219H12.4431C12.1106 1.24504 11.7849 1.33574 11.4988 1.50508C11.2127 1.67443 10.9764 1.9164 10.814 2.20647C10.6516 2.49654 10.5687 2.8244 10.5738 3.15681C10.5789 3.48923 10.6718 3.81439 10.8431 4.09933L14.2145 8.47076C5.64313 12.785 1.35742 18.4993 1.35742 27.0708C1.35742 34.8993 8.50024 38.4422 18.5002 38.4422Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.6435 27.2135C15.9921 27.6273 16.4308 27.9558 16.9261 28.1737C17.4214 28.3916 17.96 28.4932 18.5006 28.4706C19.3269 28.527 20.1429 28.2607 20.7769 27.7279C21.411 27.1951 21.8138 26.4372 21.9006 25.6135C21.8138 24.7898 21.411 24.0319 20.7769 23.4991C20.1429 22.9663 19.3269 22.7 18.5006 22.7564C17.6743 22.8127 16.8583 22.5464 16.2243 22.0136C15.5902 21.4808 15.1874 20.7229 15.1006 19.8992C15.1804 19.0727 15.5813 18.3104 16.217 17.7762C16.8527 17.2419 17.6727 16.9784 18.5006 17.0421C19.0317 17.0096 19.5634 17.0952 20.0574 17.2928C20.5515 17.4904 20.9956 17.7951 21.3577 18.1849" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<h3 className="elementskit-pricing-title">Low Cost					</h3>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-7c3f13b">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-asterisk" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg>								
								Competitive fee								
															</li>
<li className="elementor-repeater-item-48b5bf7">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>								
								Flexible rates								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="#" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-05218f9 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="05218f9" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-ead09dd elementor-widget elementor-widget-elementskit-pricing" data-id="ead09dd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none"><path d="M36.3859 15.6138H2.61447C1.01447 15.6138 0.328755 13.8709 1.5859 13.0423L18.4716 1.98518C18.7833 1.80179 19.1384 1.70508 19.5001 1.70508C19.8618 1.70508 20.217 1.80179 20.5287 1.98518L37.4144 13.0423C38.6716 13.8709 37.9859 15.6138 36.3859 15.6138Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M36.643 31.3281H2.35728C1.5683 31.3281 0.928711 31.9677 0.928711 32.7567V37.0424C0.928711 37.8314 1.5683 38.471 2.35728 38.471H36.643C37.4319 38.471 38.0715 37.8314 38.0715 37.0424V32.7567C38.0715 31.9677 37.4319 31.3281 36.643 31.3281Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.21436 15.6138V31.3281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.3569 15.6138V31.3281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.5 15.6138V31.3281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.6431 15.6138V31.3281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M33.7856 15.6138V31.3281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<h3 className="elementskit-pricing-title">Permission Less					</h3>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-7c3f13b">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-asterisk" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg>								
								Open for integration								
															</li>
<li className="elementor-repeater-item-48b5bf7">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>								
								Run your own nodes								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="#" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-246e3b9 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="246e3b9" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-2b80b5c elementor-widget elementor-widget-elementskit-pricing" data-id="2b80b5c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M35.5617 3.93506L25.8188 13.6779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.13281 3.93506L13.8757 13.6779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.13281 35.364L13.8757 25.6211" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M35.5617 35.364L25.8188 25.6211" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.8473 38.221C30.104 38.221 38.4187 29.9063 38.4187 19.6496C38.4187 9.39281 30.104 1.07812 19.8473 1.07812C9.5906 1.07812 1.27588 9.39281 1.27588 19.6496C1.27588 29.9063 9.5906 38.221 19.8473 38.221Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.8475 28.0783C24.5025 28.0783 28.2761 24.3047 28.2761 19.6498C28.2761 14.9948 24.5025 11.2212 19.8475 11.2212C15.1925 11.2212 11.4189 14.9948 11.4189 19.6498C11.4189 24.3047 15.1925 28.0783 19.8475 28.0783Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<h3 className="elementskit-pricing-title">Secure Data					</h3>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-7c3f13b">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-asterisk" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg>								
								Open source sheet								
															</li>
<li className="elementor-repeater-item-48b5bf7">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>								
								360 Security								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="#" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-ff3e1de e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="ff3e1de" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-08eef3b elementor-widget elementor-widget-elementskit-pricing" data-id="08eef3b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M12.8574 21.3281H10.0002C8.42225 21.3281 7.14307 22.6073 7.14307 24.1853V35.6138C7.14307 37.1918 8.42225 38.471 10.0002 38.471H12.8574C14.4353 38.471 15.7145 37.1918 15.7145 35.6138V24.1853C15.7145 22.6073 14.4353 21.3281 12.8574 21.3281Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.9999 21.3281H27.1428C25.5648 21.3281 24.2856 22.6073 24.2856 24.1853V35.6138C24.2856 37.1918 25.5648 38.471 27.1428 38.471H29.9999C31.5779 38.471 32.8571 37.1918 32.8571 35.6138V24.1853C32.8571 22.6073 31.5779 21.3281 29.9999 21.3281Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.42871 27.0424V19.8996C1.42871 14.9741 3.38534 10.2504 6.86816 6.76758C10.351 3.28476 15.0747 1.32813 20.0001 1.32812C24.9256 1.32813 29.6493 3.28476 33.1321 6.76758C36.6149 10.2504 38.5716 14.9741 38.5716 19.8996V27.0424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<h3 className="elementskit-pricing-title">24 X 7 Support					</h3>
</div>
<div className="elementskit-pricing-content">
<ul className="elementskit-pricing-lists">
<li className="elementor-repeater-item-7c3f13b">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-asterisk" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg>								
								Toll free number								
															</li>
<li className="elementor-repeater-item-48b5bf7">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>								
								Ticket systems								
															</li>
</ul>
</div>
<div className="elementskit-pricing-btn-wraper">
<a href="#" className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-">
</a>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-469b31a e-flex e-con-boxed e-con e-parent" data-id="469b31a" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-7b6c3ca e-con-full e-flex e-con e-child" data-id="7b6c3ca" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f364acb faq-img-2 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="f364acb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="495" height="522" src="/wp-content/uploads/2024/11/faq-img-2-2.webp" className="attachment-full size-full wp-image-3890" alt="" srcSet="./wp-content/uploads/2024/11/faq-img-2-2.webp 495w, ./wp-content/uploads/2024/11/faq-img-2-2-284x300.jpg 284w" sizes="(max-width: 495px) 100vw, 495px" /> </div>
</div>
<div className="elementor-element elementor-element-e56693f elementor-absolute faq-img-1 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="e56693f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="330" height="336" src="/wp-content/uploads/2024/11/faq-img-1-2.webp" className="attachment-full size-full wp-image-3894" alt="" srcSet="./wp-content/uploads/2024/11/faq-img-1-2.webp 330w, ./wp-content/uploads/2024/11/faq-img-1-2-295x300.jpg 295w" sizes="(max-width: 330px) 100vw, 330px" /> </div>
</div>
<div className="elementor-element elementor-element-42eaf3d elementor-absolute faq-cta-box elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="42eaf3d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
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
<div className="elementor-element elementor-element-b043151 e-con-full e-flex e-con e-child" data-id="b043151" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-671532e section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="671532e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">HAVE ANY QUESTIONS?</h2> </div>
</div>
<div className="elementor-element elementor-element-ada3cba at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="ada3cba" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Let us address your <span>questions</span> today!</h2> </div>
</div>
<div className="elementor-element elementor-element-318c974 elementor-invisible elementor-widget elementor-widget-elementskit-accordion" data-id="318c974" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-accordion.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-accordion accoedion-primary" id="accordion-6a3d8cf244164">
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-0-318c974">
<a href="#collapse-77754716a3d8cf244164" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-77754716a3d8cf244164" aria-expanded="false" aria-controls="Collapse-77754716a3d8cf244164">
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
<div id="Collapse-77754716a3d8cf244164" className="collapse" aria-labelledby="primaryHeading-0-318c974" data-parent="#accordion-6a3d8cf244164">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card active">
<div className="elementskit-card-header" id="primaryHeading-1-318c974">
<a href="#collapse-e260b7e6a3d8cf244164" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-e260b7e6a3d8cf244164" aria-expanded="true" aria-controls="Collapse-e260b7e6a3d8cf244164">
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
<div id="Collapse-e260b7e6a3d8cf244164" className="show collapse" aria-labelledby="primaryHeading-1-318c974" data-parent="#accordion-6a3d8cf244164">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-2-318c974">
<a href="#collapse-2b87c736a3d8cf244164" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-2b87c736a3d8cf244164" aria-expanded="false" aria-controls="Collapse-2b87c736a3d8cf244164">
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
<div id="Collapse-2b87c736a3d8cf244164" className="collapse" aria-labelledby="primaryHeading-2-318c974" data-parent="#accordion-6a3d8cf244164">
<div className="elementskit-card-body ekit-accordion--content">
<p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p> </div>
</div>
</div>{/* .elementskit-card END */}
<div className="elementskit-card">
<div className="elementskit-card-header" id="primaryHeading-3-318c974">
<a href="#collapse-0fc63786a3d8cf244164" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-0fc63786a3d8cf244164" aria-expanded="false" aria-controls="Collapse-0fc63786a3d8cf244164">
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
<div id="Collapse-0fc63786a3d8cf244164" className="collapse" aria-labelledby="primaryHeading-3-318c974" data-parent="#accordion-6a3d8cf244164">
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
