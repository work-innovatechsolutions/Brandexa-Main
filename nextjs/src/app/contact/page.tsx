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
    <div data-elementor-type="wp-page" data-elementor-id="4737" className="elementor elementor-4737">
<div className="elementor-element elementor-element-7ce73ba e-flex e-con-boxed e-con e-parent" data-id="7ce73ba" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-e0a4741 e-con-full e-flex e-con e-child" data-id="e0a4741" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-7045e3e at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="7045e3e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Contact <span>us</span></h1> </div>
</div>
<div className="elementor-element elementor-element-6684923 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="6684923" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Contact us</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c62e977 e-con-full e-flex e-con e-parent" data-id="c62e977" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4602de2 e-con-full e-flex e-con e-child" data-id="4602de2" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-cd5d7e9 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="cd5d7e9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-cd5d7e9" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-d57788b e-flex e-con-boxed e-con e-parent" data-id="d57788b" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-4073cad e-con-full e-flex e-con e-child" data-id="4073cad" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0430a94 e-con-full e-flex e-con e-child" data-id="0430a94" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e87257e at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="e87257e" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Get in <span>touch</span> with us</h2> </div>
</div>
<div className="elementor-element elementor-element-344d12c elementor-invisible elementor-widget elementor-widget-text-editor" data-id="344d12c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We’d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p> </div>
</div>
</div>
<div className="elementor-element elementor-element-7fba004 e-con-full contact-info-box e-flex e-con e-child" data-id="7fba004" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-5162cf8 e-con-full e-flex elementor-invisible e-con e-child" data-id="5162cf8" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-b83a0f1 elementor-mobile-position-inline-start elementor-widget__width-initial contact-info-item elementor-view-default elementor-position-block-start elementor-widget elementor-widget-icon-box" data-id="b83a0f1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<a href="tel:(309)%208855-314" className="elementor-icon" tabIndex={-1} aria-label="Phone Number">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><path d="M39.5185 31.1202C38.4948 30.0543 37.2601 29.4845 35.9516 29.4845C34.6536 29.4845 33.4084 30.0438 32.3425 31.1096L29.0078 34.4338C28.7334 34.286 28.4591 34.1488 28.1953 34.0117C27.8154 33.8217 27.4566 33.6423 27.1505 33.4524C24.0269 31.4684 21.1882 28.883 18.4655 25.5377C17.1464 23.8704 16.26 22.4668 15.6163 21.0422C16.4816 20.2507 17.2836 19.4276 18.0645 18.6362C18.36 18.3407 18.6555 18.0346 18.951 17.7392C21.1671 15.5231 21.1671 12.6527 18.951 10.4366L16.07 7.55568C15.7429 7.22854 15.4052 6.89085 15.0886 6.55316C14.4555 5.89888 13.7906 5.2235 13.1047 4.59033C12.0811 3.57726 10.8569 3.03906 9.56949 3.03906C8.28204 3.03906 7.03681 3.57726 5.98152 4.59033C5.97097 4.60088 5.97097 4.60088 5.96042 4.61144L2.37245 8.23106C1.02169 9.58183 0.251331 11.2281 0.0824858 13.1381C-0.170782 16.2196 0.736762 19.0899 1.43325 20.9683C3.14281 25.5799 5.6966 29.8538 9.50617 34.4338C14.1283 39.9529 19.6897 44.3112 26.0425 47.3821C28.4696 48.5324 31.7094 49.8937 35.329 50.1258C35.5506 50.1364 35.7827 50.1469 35.9938 50.1469C38.4315 50.1469 40.4788 49.2711 42.0828 47.5298C42.0933 47.5087 42.1145 47.4982 42.125 47.4771C42.6738 46.8123 43.3069 46.2107 43.9718 45.567C44.4255 45.1343 44.8899 44.6806 45.3436 44.2057C46.3884 43.1188 46.9371 41.8524 46.9371 40.5544C46.9371 39.2459 46.3778 37.9901 45.312 36.9348L39.5185 31.1202ZM43.2964 42.2323C43.2858 42.2429 43.2858 42.2323 43.2964 42.2323C42.8848 42.6755 42.4627 43.0765 42.0089 43.5198C41.323 44.174 40.6265 44.86 39.9722 45.6303C38.9064 46.77 37.6506 47.3082 36.0044 47.3082C35.8461 47.3082 35.6772 47.3082 35.5189 47.2977C32.3847 47.0972 29.4721 45.873 27.2877 44.8283C21.3148 41.9368 16.07 37.8318 11.7117 32.6292C8.1132 28.292 5.70715 24.2819 4.11367 19.9764C3.13226 17.3487 2.77346 15.3015 2.93175 13.3703C3.03728 12.1356 3.51216 11.112 4.38805 10.2361L7.98656 6.63758C8.50365 6.15215 9.0524 5.88833 9.5906 5.88833C10.2554 5.88833 10.7936 6.28934 11.1313 6.62703C11.1419 6.63758 11.1524 6.64813 11.163 6.65869C11.8067 7.2602 12.4188 7.88282 13.0625 8.54765C13.3896 8.88534 13.7273 9.22303 14.065 9.57127L16.9459 12.4522C18.0645 13.5708 18.0645 14.605 16.9459 15.7236C16.6399 16.0296 16.3444 16.3356 16.0384 16.6311C15.1519 17.5387 14.3077 18.3829 13.3896 19.206C13.3685 19.2271 13.3474 19.2377 13.3369 19.2588C12.4293 20.1663 12.5982 21.0528 12.7881 21.6543C12.7987 21.6859 12.8092 21.7176 12.8198 21.7493C13.569 23.5643 14.6243 25.2739 16.2283 27.3106L16.2389 27.3212C19.1515 30.9091 22.2223 33.7056 25.6098 35.8478C26.0425 36.1222 26.4857 36.3438 26.9078 36.5549C27.2877 36.7448 27.6465 36.9242 27.9525 37.1142C27.9948 37.1353 28.037 37.167 28.0792 37.1881C28.438 37.3675 28.7757 37.4519 29.1239 37.4519C29.9998 37.4519 30.5485 36.9031 30.7279 36.7237L34.337 33.1147C34.6958 32.7559 35.2657 32.3232 35.9305 32.3232C36.5848 32.3232 37.123 32.7348 37.4501 33.0936C37.4606 33.1041 37.4607 33.1041 37.4712 33.1147L43.2858 38.9293C44.3728 40.0057 44.3728 41.1137 43.2964 42.2323Z" fill="currentColor"></path><path d="M27.0242 12.0449C29.7891 12.5092 32.3006 13.8178 34.3057 15.8228C36.3107 17.8278 37.6087 20.3394 38.0836 23.1043C38.1997 23.8007 38.8012 24.2862 39.4871 24.2862C39.5715 24.2862 39.6454 24.2756 39.7298 24.2651C40.5108 24.1384 41.0278 23.3997 40.9012 22.6188C40.3314 19.2736 38.7484 16.2238 36.3318 13.8072C33.9152 11.3906 30.8655 9.80768 27.5202 9.23782C26.7393 9.11119 26.0111 9.62828 25.874 10.3986C25.7368 11.169 26.2433 11.9182 27.0242 12.0449Z" fill="currentColor"></path><path d="M49.9469 22.2045C49.0077 16.6959 46.4117 11.6833 42.4227 7.69433C38.4337 3.70536 33.4211 1.10936 27.9126 0.170157C27.1422 0.0329698 26.4141 0.560612 26.2769 1.33097C26.1502 2.11188 26.6673 2.84003 27.4482 2.97721C32.3659 3.81089 36.8508 6.14307 40.4177 9.69937C43.9845 13.2662 46.3062 17.7512 47.1398 22.6688C47.2559 23.3653 47.8574 23.8507 48.5434 23.8507C48.6278 23.8507 48.7017 23.8402 48.7861 23.8296C49.5564 23.7136 50.0841 22.9749 49.9469 22.2045Z" fill="currentColor"></path></svg> </a>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<a href="tel:(309)%208855-314">
							Phone Number						</a>
</h3>
<p className="elementor-icon-box-description">
						(309) 8855-314					</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-eddff06 elementor-mobile-position-inline-start elementor-widget__width-initial contact-info-item elementor-view-default elementor-position-block-start elementor-widget elementor-widget-icon-box" data-id="eddff06" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<a href="mailto:info@domainname.com" className="elementor-icon" tabIndex={-1} aria-label="Email Address">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><path d="M45.6055 7.57031H4.39453C1.9665 7.57031 0 9.54902 0 11.9648V38.332C0 40.7622 1.98096 42.7266 4.39453 42.7266H45.6055C48.0132 42.7266 50 40.7705 50 38.332V11.9648C50 9.55332 48.0413 7.57031 45.6055 7.57031ZM44.99 10.5C44.0922 11.3931 28.6409 26.763 28.1074 27.2937C27.2773 28.1237 26.1738 28.5808 25 28.5808C23.8262 28.5808 22.7227 28.1236 21.8898 27.2909C21.5311 26.934 6.25029 11.7338 5.00996 10.5H44.99ZM2.92969 37.7357V12.563L15.5896 25.1562L2.92969 37.7357ZM5.01182 39.7969L17.6668 27.2224L19.821 29.3652C21.2044 30.7486 23.0437 31.5104 25 31.5104C26.9563 31.5104 28.7956 30.7486 30.1763 29.368L32.3332 27.2224L44.9882 39.7969H5.01182ZM47.0703 37.7357L34.4104 25.1562L47.0703 12.563V37.7357Z" fill="currentColor"></path></svg> </a>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<a href="mailto:info@domainname.com">
							Email Address						</a>
</h3>
<p className="elementor-icon-box-description">
						info@domainname.com					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e782dc1 e-con-full e-flex elementor-invisible e-con e-child" data-id="e782dc1" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-ba89a29 elementor-position-inline-start elementor-mobile-position-inline-start elementor-view-default elementor-widget elementor-widget-icon-box" data-id="ba89a29" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none"><path d="M41.9192 18.5952C41.9192 27.488 25.8478 48.9523 25.8478 48.9523C25.8478 48.9523 9.77637 27.488 9.77637 18.5952C9.77637 14.3328 11.4696 10.2449 14.4836 7.23095C17.4976 4.21698 21.5854 2.52374 25.8478 2.52374C30.1102 2.52374 34.198 4.21698 37.212 7.23095C40.226 10.2449 41.9192 14.3328 41.9192 18.5952V18.5952Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M25.8474 23.9523C28.806 23.9523 31.2045 21.5538 31.2045 18.5952C31.2045 15.6365 28.806 13.238 25.8474 13.238C22.8887 13.238 20.4902 15.6365 20.4902 18.5952C20.4902 21.5538 22.8887 23.9523 25.8474 23.9523Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Address						</span>
</h3>
<p className="elementor-icon-box-description">
						123 Creative Lane London, SW1A 1AA United Kingdom					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c53868a e-con-full e-flex e-con e-child" data-id="c53868a" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e4374bf e-con-full e-flex e-con e-child" data-id="e4374bf" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-dc90421 elementor-invisible elementor-widget elementor-widget-elementskit-contact-form7" data-id="dc90421" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-contact-form7.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><div className="ekit-form">
<div className="wpcf7 no-js" id="wpcf7-f3488-p4737-o1" lang="en-US" dir="ltr" data-wpcf7-id="3488">
<div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/?page_id=4737&simply_static_page=7443#wpcf7-f3488-p4737-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
<fieldset className="hidden-fields-container"><input type="hidden" name="_wpcf7" defaultValue="3488" /><input type="hidden" name="_wpcf7_version" defaultValue="6.1.6" /><input type="hidden" name="_wpcf7_locale" defaultValue="en_US" /><input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f3488-p4737-o1" /><input type="hidden" name="_wpcf7_container_post" defaultValue="4737" /><input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
</fieldset>
<div className="row">
<div className="form-group col-md-6 col-12 mb-4">
<p><span className="wpcf7-form-control-wrap" data-name="first-name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="name" aria-required="true" aria-invalid="false" placeholder="First Name" defaultValue="" type="text" name="first-name" /></span>
</p>
</div>
<div className="form-group col-md-6 col-12 mb-4">
<p><span className="wpcf7-form-control-wrap" data-name="last-name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Last Name" defaultValue="" type="text" name="last-name" /></span>
</p>
</div>
<div className="form-group col-md-12 col-12 mb-4">
<p><span className="wpcf7-form-control-wrap" data-name="phone"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel form-control" id="phone" aria-required="true" aria-invalid="false" placeholder="Phone No" defaultValue="" type="tel" name="phone" /></span>
</p>
</div>
<div className="form-group col-md-12 col-12 mb-4">
<p><span className="wpcf7-form-control-wrap" data-name="email"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" id="email" aria-required="true" aria-invalid="false" placeholder="E-mail" defaultValue="" type="email" name="email" /></span>
</p>
</div>
<div className="form-group col-md-12 col-12 mb-4">
<p><span className="wpcf7-form-control-wrap" data-name="message"><textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea form-control" id="msg" aria-invalid="false" placeholder="Message" name="message"></textarea></span>
</p>
</div>
<div className="col-md-12 col-12 form-btn">
<p><input className="wpcf7-form-control wpcf7-submit has-spinner btn-default" id="msgSubmit" type="submit" defaultValue="Submit Message" />
</p>
</div>
</div><p style={{"display": "none !important"}} className="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>Δ<textarea name="_wpcf7_ak_hp_textarea" cols={45} rows={8} maxLength={100}></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" defaultValue="185" />
</p><div className="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-09823e8 e-flex e-con-boxed e-con e-parent" data-id="09823e8" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-d8653a4 e-con-full e-flex e-con e-child" data-id="d8653a4" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-b4cd3bd google-map-iframe elementor-widget elementor-widget-google_maps" data-id="b4cd3bd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="google_maps.default">
<div className="elementor-widget-container">
<div className="elementor-custom-embed">
<iframe loading="lazy" src="https://maps.google.com/maps?q=new%20york&t=m&z=10&output=embed&iwloc=near" title="new york" aria-label="new york"></iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  );
}
