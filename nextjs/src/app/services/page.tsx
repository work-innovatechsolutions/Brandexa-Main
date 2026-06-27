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
    <div data-elementor-type="wp-page" data-elementor-id="11571" className="elementor elementor-11571">
<div className="elementor-element elementor-element-713745c e-flex e-con-boxed e-con e-parent" data-id="713745c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-4493a9f e-con-full e-flex e-con e-child" data-id="4493a9f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-27c2f02 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="27c2f02" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Our <span> services </span></h1> </div>
</div>
<div className="elementor-element elementor-element-c971277 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="c971277" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Services</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-34a4421 e-con-full e-flex e-con e-parent" data-id="34a4421" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-27163aa e-con-full e-flex e-con e-child" data-id="27163aa" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-754c56c ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="754c56c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-754c56c" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-4ec4244 e-flex e-con-boxed e-con e-parent" data-id="4ec4244" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-30534fa e-con-full e-flex e-con e-child" data-id="30534fa" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-07e8c93 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="07e8c93" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-c1fec5e e-con-full e-flex e-con e-child" data-id="c1fec5e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f271486 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="f271486" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M45.5999 6.59998H14.3999C13.6806 6.61973 12.9761 6.80847 12.3432 7.15095C11.7104 7.49343 11.167 7.98003 10.7571 8.5714L2.95709 19.3714C2.3779 20.1899 2.08865 21.1783 2.13523 22.1799C2.18182 23.1815 2.56157 24.1388 3.21423 24.9L26.6142 51.8571C27.0148 52.3733 27.5282 52.7911 28.115 53.0784C28.7018 53.3658 29.3465 53.5152 29.9999 53.5152C30.6533 53.5152 31.2981 53.3658 31.8849 53.0784C32.4717 52.7911 32.9851 52.3733 33.3857 51.8571L56.7857 24.9C57.4383 24.1388 57.8181 23.1815 57.8646 22.1799C57.9112 21.1783 57.622 20.1899 57.0428 19.3714L49.2428 8.5714C48.8328 7.98003 48.2895 7.49343 47.6566 7.15095C47.0238 6.80847 46.3192 6.61973 45.5999 6.59998V6.59998Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M27.7714 6.55713L17.3142 22.7571L29.9999 53.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.3571 6.55713L42.7714 22.7571L30 53.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.22852 22.7571H57.7714" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-f9805d9 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="f9805d9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/branding-and-identity/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-bd3bbb6 e-con-full e-flex e-con e-child" data-id="bd3bbb6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-8d6cb39 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="8d6cb39" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Branding And Identity                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-8896677 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="8896677" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-8ff2151 e-con-full e-flex e-con e-child" data-id="8ff2151" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-71e0bae service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="71e0bae" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M45 2.14288H15C7.89916 2.14288 2.14282 7.89922 2.14282 15V45C2.14282 52.1008 7.89916 57.8572 15 57.8572H45C52.1008 57.8572 57.8571 52.1008 57.8571 45V15C57.8571 7.89922 52.1008 2.14288 45 2.14288Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.7144 30.0858H19.2858L25.7144 19.3286L32.1429 42.9L40.7144 30.0858H49.2858" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-bfd9b48 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="bfd9b48" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/digital-marketing/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-283d67c e-con-full e-flex e-con e-child" data-id="283d67c" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3455b34 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="3455b34" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Digital Marketing                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-83ed253 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="83ed253" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-86651c6 e-con-full e-flex e-con e-child" data-id="86651c6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0c9a181 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="0c9a181" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M19.2859 55.7143C28.7537 55.7143 36.4288 48.0392 36.4288 38.5714C36.4288 29.1037 28.7537 21.4286 19.2859 21.4286C9.81818 21.4286 2.14307 29.1037 2.14307 38.5714C2.14307 48.0392 9.81818 55.7143 19.2859 55.7143Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M40.7146 55.7143C50.1824 55.7143 57.8575 48.0392 57.8575 38.5714C57.8575 29.1037 50.1824 21.4286 40.7146 21.4286C31.2469 21.4286 23.5718 29.1037 23.5718 38.5714C23.5718 48.0392 31.2469 55.7143 40.7146 55.7143Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M30.0003 38.5714C39.468 38.5714 47.1431 30.8963 47.1431 21.4286C47.1431 11.9608 39.468 4.28571 30.0003 4.28571C20.5325 4.28571 12.8574 11.9608 12.8574 21.4286C12.8574 30.8963 20.5325 38.5714 30.0003 38.5714Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0842f30 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="0842f30" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/creative-content-production/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-7ecfb8f e-con-full e-flex e-con e-child" data-id="7ecfb8f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-64948e2 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="64948e2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Creative Content Production                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1e473c0 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="1e473c0" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-e0b5413 e-con-full e-flex e-con e-child" data-id="e0b5413" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-a56b7cb service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="a56b7cb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none"><path d="M40.7464 6.42856H47.1749C48.3116 6.42856 49.4017 6.88009 50.2054 7.68381C51.0091 8.48754 51.4607 9.57763 51.4607 10.7143V53.5714C51.4607 54.7081 51.0091 55.7981 50.2054 56.6019C49.4017 57.4056 48.3116 57.8571 47.1749 57.8571H12.8892C11.7526 57.8571 10.6625 57.4056 9.85877 56.6019C9.05504 55.7981 8.60352 54.7081 8.60352 53.5714V10.7143C8.60352 9.57763 9.05504 8.48754 9.85877 7.68381C10.6625 6.88009 11.7526 6.42856 12.8892 6.42856H19.3178" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M36.4602 2.14285H23.6031C21.2362 2.14285 19.3174 4.06163 19.3174 6.42857V8.57142C19.3174 10.9384 21.2362 12.8571 23.6031 12.8571H36.4602C38.8272 12.8571 40.746 10.9384 40.746 8.57142V6.42857C40.746 4.06163 38.8272 2.14285 36.4602 2.14285Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.3174 23.5714H40.746" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.3174 34.2857H40.746" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.3174 45H40.746" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c706110 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="c706110" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/content-creation/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d01f836 e-con-full e-flex e-con e-child" data-id="d01f836" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-36c40e4 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="36c40e4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Content Creation                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e6e8a60 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="e6e8a60" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:400}">
<div className="elementor-element elementor-element-e870807 e-con-full e-flex e-con e-child" data-id="e870807" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-7d4c28e service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="7d4c28e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M30.0319 58.6071C45.417 58.6071 57.8891 46.1351 57.8891 30.75C57.8891 15.3649 45.417 2.89285 30.0319 2.89285C14.6469 2.89285 2.1748 15.3649 2.1748 30.75C2.1748 46.1351 14.6469 58.6071 30.0319 58.6071Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.1748 30.75H57.8891" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M40.746 30.75C40.2197 40.9371 36.4674 50.6929 30.0317 58.6071C23.5959 50.6929 19.8437 40.9371 19.3174 30.75C19.8437 20.5629 23.5959 10.8071 30.0317 2.89285C36.4674 10.8071 40.2197 20.5629 40.746 30.75V30.75Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-28efab7 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="28efab7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/e-commerce-solutions/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-fba74d5 e-con-full e-flex e-con e-child" data-id="fba74d5" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c31c642 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="c31c642" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    E-Commerce Solutions                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0edef26 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-id="0edef26" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:500}">
<div className="elementor-element elementor-element-19a1a9a e-con-full e-flex e-con e-child" data-id="19a1a9a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3716244 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-id="3716244" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none"><path d="M36.981 21.4286C39.348 21.4286 41.2667 19.5098 41.2667 17.1429C41.2667 14.7759 39.348 12.8571 36.981 12.8571C34.6141 12.8571 32.6953 14.7759 32.6953 17.1429C32.6953 19.5098 34.6141 21.4286 36.981 21.4286Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.8382 42.8572C21.0216 42.8572 21.981 41.8978 21.981 40.7143C21.981 39.5308 21.0216 38.5714 19.8382 38.5714C18.6547 38.5714 17.6953 39.5308 17.6953 40.7143C17.6953 41.8978 18.6547 42.8572 19.8382 42.8572Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.8375 27.8571C22.2044 27.8571 24.1232 25.9384 24.1232 23.5714C24.1232 21.2045 22.2044 19.2857 19.8375 19.2857C17.4705 19.2857 15.5518 21.2045 15.5518 23.5714C15.5518 25.9384 17.4705 27.8571 19.8375 27.8571Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M41.3521 52.6286C41.3044 51.7973 41.0155 50.9979 40.5208 50.3281C40.0261 49.6584 39.3469 49.1472 38.5664 48.8571C36.628 48.22 34.9805 46.9124 33.92 45.1692C32.8595 43.426 32.4556 41.3617 32.781 39.3474C33.1064 37.3331 34.1397 35.5009 35.6951 34.1803C37.2505 32.8597 39.226 32.1372 41.2664 32.1429H49.2807C50.6553 32.1467 52.0106 31.8199 53.2323 31.19C54.4541 30.5601 55.5064 29.6456 56.3006 28.5237C57.0948 27.4018 57.6075 26.1053 57.7955 24.7437C57.9835 23.382 57.8412 21.9951 57.3807 20.7C55.6761 15.887 52.6815 11.6351 48.7241 8.40877C44.7666 5.18246 39.9985 3.10587 34.9408 2.40589C29.8831 1.7059 24.7303 2.40945 20.0453 4.43966C15.3603 6.46987 11.3235 9.74864 8.37578 13.9178C5.42806 18.0869 3.68289 22.9859 3.33092 28.0797C2.97896 33.1735 4.03374 38.2661 6.38003 42.801C8.72632 47.3359 12.2739 51.1387 16.6351 53.794C20.9963 56.4493 26.0034 57.8549 31.1093 57.8571C33.6308 57.8642 36.1409 57.518 38.5664 56.8286C39.4573 56.579 40.2287 56.0175 40.7401 55.2465C41.2515 54.4755 41.4687 53.5464 41.3521 52.6286V52.6286Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6b9f1c8 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-id="6b9f1c8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/ux-ui-design/index.html">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-471fa23 e-con-full e-flex e-con e-child" data-id="471fa23" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-afbd150 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="afbd150" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a href="#" className="ekit_global_links">
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    UX/UI Design                </h3>
<p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
</div>
</div>
</a>
</div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-cdcae18 why-choose-us e-flex e-con-boxed e-con e-parent" data-id="cdcae18" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-4bf0baf e-con-full e-flex e-con e-child" data-id="4bf0baf" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5d44277 e-con-full e-flex e-con e-child" data-id="5d44277" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-41562ca section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="41562ca" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">WHY CHOOSE</h2> </div>
</div>
<div className="elementor-element elementor-element-b15f4d5 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="b15f4d5" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Expertise for<span> your digital</span> growth journey</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-05a835e e-con-full e-flex e-con e-child" data-id="05a835e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-be62721 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="be62721" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6b2e25a e-con-full e-flex e-con e-child" data-id="6b2e25a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-28e53a9 e-con-full why-choose-content e-flex e-con e-child" data-id="28e53a9" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fb3109d e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="fb3109d" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-d4fca00 elementor-widget elementor-widget-icon-box" data-id="d4fca00" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-3306dc3 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="3306dc3" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-50603d6 elementor-widget elementor-widget-icon-box" data-id="50603d6" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-b9eafbb e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-id="b9eafbb" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-9d51b8e elementor-widget elementor-widget-icon-box" data-id="9d51b8e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-36d4afd e-con-full e-flex e-con e-child" data-id="36d4afd" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-8b6c6cb image-anime why-choose-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="8b6c6cb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img fetchPriority="high" decoding="async" width="594" height="549" src="/wp-content/uploads/2024/11/why-choose-image-2.webp" className="attachment-full size-full wp-image-1037" alt="" srcSet="./wp-content/uploads/2024/11/why-choose-image-2.webp 594w, ./wp-content/uploads/2024/11/why-choose-image-2-300x277.jpg 300w" sizes="(max-width: 594px) 100vw, 594px" /> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-42c65d7 e-flex e-con-boxed e-con e-parent" data-id="42c65d7" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-a11f834 e-con-full e-flex e-con e-child" data-id="a11f834" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-851b5ac e-con-full e-flex e-con e-child" data-id="851b5ac" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5ee66cf section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="5ee66cf" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">WHO WE ARE</h2> </div>
</div>
<div className="elementor-element elementor-element-e60cf07 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="e60cf07" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Experts in <span> digital </span> brand innovation</h2> </div>
</div>
<div className="elementor-element elementor-element-f9bca28 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="f9bca28" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We specialize in transforming brands through cutting-edge digital strategies, blending creativity with technology to drive growth, enhance engagement, and deliver memorable experiences.</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-acb4076 e-con-full e-flex e-con e-child" data-id="acb4076" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e3e2656 e-con-full experts-rating-video-image e-flex e-con e-child" data-id="e3e2656" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fae0df6 video-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="fae0df6" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img decoding="async" width="303" height="220" src="/wp-content/uploads/2024/11/experts-rating-video-bg-2.webp" className="attachment-full size-full wp-image-1867" alt="" srcSet="./wp-content/uploads/2024/11/experts-rating-video-bg-2.webp 303w, ./wp-content/uploads/2024/11/experts-rating-video-bg-2-300x218.jpg 300w" sizes="(max-width: 303px) 100vw, 303px" /> </div>
</div>
<div className="elementor-element elementor-element-f2d073d video-play-button elementor-absolute elementor-widget elementor-widget-elementskit-video" data-id="f2d073d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_video_popup_close_icon&quot;:{&quot;value&quot;:&quot;icon icon-cancel&quot;,&quot;library&quot;:&quot;ekiticons&quot;},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-video.default">
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
<div className="elementor-element elementor-element-b2895f7 e-con-full e-flex e-con e-child" data-id="b2895f7" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-f9e9fd7 elementor-invisible elementor-widget elementor-widget-rating" data-id="f9e9fd7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-4351dc1 elementor-widget elementor-widget-counter" data-id="4351dc1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
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
<div className="elementor-element elementor-element-b581261 e-con-full e-flex e-con e-child" data-id="b581261" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-805b76e image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="805b76e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp" className="attachment-full size-full wp-image-2217" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-452d06e image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="452d06e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp" className="attachment-full size-full wp-image-2218" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-939660a image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="939660a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp" className="attachment-full size-full wp-image-2219" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-850fb2a image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="850fb2a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-4-2.webp" className="attachment-full size-full wp-image-2220" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-a31b7b6 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="a31b7b6" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-5-2.webp" className="attachment-full size-full wp-image-2221" alt="" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-f026d3a contact-now-btn elementor-invisible elementor-widget elementor-widget-button" data-id="f026d3a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Contact Now</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c975e93 e-con-full e-flex e-con e-child" data-id="c975e93" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-451dfaf e-con-full e-flex e-con e-child" data-id="451dfaf" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-ae02644 e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="ae02644" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-8fdcccc elementor-widget elementor-widget-elementskit-funfact" data-id="8fdcccc" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
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
<div className="elementor-element elementor-element-cc9aa7d e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="cc9aa7d" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-3bbec6f elementor-widget elementor-widget-elementskit-funfact" data-id="3bbec6f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
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
<div className="elementor-element elementor-element-c449bc6 e-con-full experts-counter-box e-flex e-con e-child" data-id="c449bc6" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-71cb4f1 e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="71cb4f1" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-2f7d853 elementor-widget elementor-widget-elementskit-funfact" data-id="2f7d853" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
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
<div className="elementor-element elementor-element-fdc26d4 e-con-full experts-counter-item backdrop-filter e-flex e-con e-child" data-id="fdc26d4" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-ad352cf elementor-widget elementor-widget-elementskit-funfact" data-id="ad352cf" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-funfact.default">
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
<div className="elementor-element elementor-element-3bda6ad our-testimonial e-flex e-con-boxed e-con e-parent" data-id="3bda6ad" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-dc69d6f e-con-full e-flex e-con e-child" data-id="dc69d6f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1f77b3f e-con-full e-flex e-con e-child" data-id="1f77b3f" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-1fe847b section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="1fe847b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">TESTIMONIALS</h2> </div>
</div>
<div className="elementor-element elementor-element-f22743e at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="f22743e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Read what they have to say about <span> working with us </span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-0ea3cfc e-con-full e-flex e-con e-child" data-id="0ea3cfc" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-2cdfd9a elementor-invisible elementor-widget elementor-widget-text-editor" data-id="2cdfd9a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Discover how our clients have achieved success through our innovative solutions and dedicated support.</p> </div>
</div>
<div className="elementor-element elementor-element-3b697e3 elementor-invisible elementor-widget elementor-widget-button" data-id="3b697e3" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
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
<div className="elementor-element elementor-element-64d840e e-con-full e-flex e-con e-child" data-id="64d840e" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-9210499 e-con-full backdrop-filter e-flex e-con e-child" data-id="9210499" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c242c06 testimonial-review-counter elementor-widget elementor-widget-counter" data-id="c242c06" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
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
<div className="elementor-element elementor-element-bce429d elementor-widget elementor-widget-rating" data-id="bce429d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-3300da9 elementor-widget elementor-widget-text-editor" data-id="3300da9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>( 40+ Reviews )</p> </div>
</div>
<div className="elementor-element elementor-element-ddaf84a at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-id="ddaf84a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Customer experiences that speak for themselves</h3> </div>
</div>
<div className="elementor-element elementor-element-c877b24 e-con-full e-flex e-con e-child" data-id="c877b24" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4b59ecb image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="4b59ecb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp" className="attachment-full size-full wp-image-2217" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-9378f42 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="9378f42" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp" className="attachment-full size-full wp-image-2218" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-187dbb8 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="187dbb8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp" className="attachment-full size-full wp-image-2219" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-8ed5900 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="8ed5900" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-4-2.webp" className="attachment-full size-full wp-image-2220" alt="" /> </div>
</div>
<div className="elementor-element elementor-element-f8c4f8d image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="f8c4f8d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="40" height="40" src="/wp-content/uploads/2024/11/satisfy-client-img-5-2.webp" className="attachment-full size-full wp-image-2221" alt="" /> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-3080368 e-con-full e-flex e-con e-child" data-id="3080368" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-c8cb8e0 testimonial-slider arrow-using-ekit elementor-widget elementor-widget-elementskit-testimonial" data-id="c8cb8e0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-testimonial.default">
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
<div className="elementor-element elementor-element-a100d2b e-con-full e-flex e-con e-child" data-id="a100d2b" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-99a49fe e-con-full backdrop-filter e-flex e-con e-child" data-id="99a49fe" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4f4faae e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="4f4faae" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-498abd3 elementor-widget elementor-widget-elementskit-pricing" data-id="498abd3" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
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
<div className="elementor-element elementor-element-f57af3e e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="f57af3e" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-5937edc elementor-widget elementor-widget-elementskit-pricing" data-id="5937edc" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
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
<div className="elementor-element elementor-element-f53268b e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="f53268b" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-a211521 elementor-widget elementor-widget-elementskit-pricing" data-id="a211521" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
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
<div className="elementor-element elementor-element-fc72df5 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-id="fc72df5" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-8c09a7a elementor-widget elementor-widget-elementskit-pricing" data-id="8c09a7a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
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
</div>
  );
}
