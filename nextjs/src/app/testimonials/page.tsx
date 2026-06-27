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
    <div data-elementor-type="wp-page" data-elementor-id="3938" className="elementor elementor-3938">
<div className="elementor-element elementor-element-3124fd6 e-flex e-con-boxed e-con e-parent" data-id="3124fd6" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="e-con-inner">
<div className="elementor-element elementor-element-08d0142 e-con-full e-flex e-con e-child" data-id="08d0142" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-09b8ea6 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-id="09b8ea6" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Testimonial</h1> </div>
</div>
<div className="elementor-element elementor-element-63c1834 elementor-invisible elementor-widget elementor-widget-elementskit-breadcrumb" data-id="63c1834" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><ol className="ekit-breadcrumb"><li className="ekit_breadcrumbs_start"><a href="/">Home</a></li> <li className="brd_sep"><span className="separate_icon"><svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg></span></li> <li>Testimonial</li></ol></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-f372211 e-con-full e-flex e-con e-parent" data-id="f372211" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-04104e1 e-con-full e-flex e-con e-child" data-id="04104e1" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-6644332 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-id="6644332" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div id="content-ticker-6644332" className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}">
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
<div className="elementor-element elementor-element-037bd18 e-flex e-con-boxed e-con e-parent" data-id="037bd18" data-element_type="container" data-e-type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-46afa71 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="46afa71" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-12b22d1 e-con-full e-flex e-con e-child" data-id="12b22d1" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-3ad2aef client-author-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="3ad2aef" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img fetchPriority="high" decoding="async" width="270" height="270" src="/wp-content/uploads/2024/11/author-1-2.webp" className="attachment-full size-full wp-image-4048" alt="" srcSet="./wp-content/uploads/2024/11/author-1-2.webp 270w, ./wp-content/uploads/2024/11/author-1-2-150x150.jpg?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-8331aae e-con-full e-flex e-con e-child" data-id="8331aae" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-fcc27d3 elementor-widget elementor-widget-rating" data-id="fcc27d3" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-391b10b elementor-widget elementor-widget-text-editor" data-id="391b10b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>The team transformed our brand’s online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p> </div>
</div>
<div className="elementor-element elementor-element-9a0a5ef elementor-position-inline-end client-author-content elementor-view-default elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="9a0a5ef" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="123" height="30" viewBox="0 0 123 30" fill="none"><path d="M36.1267 19.4865H44.895V16.8455H39.2432V6.89746H36.1267V19.4865Z" fill="white"></path><path d="M50.0899 17.7267C48.8398 17.7267 48.1884 16.635 48.1884 14.9976C48.1884 13.3601 48.8398 12.2509 50.0899 12.2509C51.34 12.2509 52.0091 13.3601 52.0091 14.9976C52.0091 16.635 51.34 17.7267 50.0899 17.7267ZM50.1075 19.7691C53.0127 19.7691 54.9143 17.7091 54.9143 14.9976C54.9143 12.2861 53.0127 10.2261 50.1075 10.2261C47.22 10.2261 45.2832 12.2861 45.2832 14.9976C45.2832 17.7091 47.22 19.7691 50.1075 19.7691Z" fill="white"></path><path d="M59.9431 22.6029C61.2812 22.6029 62.4609 22.3036 63.2532 21.5993C63.9751 20.9478 64.4505 19.9618 64.4505 18.6061V10.4716H61.7038V11.44H61.6686C61.1404 10.6829 60.3305 10.2075 59.1332 10.2075C56.8971 10.2075 55.3477 12.0739 55.3477 14.7149C55.3477 17.4792 57.2316 18.9934 59.2564 18.9934C60.3481 18.9934 61.0347 18.5533 61.563 17.9546H61.6334V18.8526C61.6334 19.9442 61.1228 20.5781 59.9079 20.5781C58.9571 20.5781 58.4817 20.1731 58.3233 19.6977H55.5413C55.823 21.5817 57.4605 22.6029 59.9431 22.6029ZM59.9255 16.863C58.8515 16.863 58.1472 15.9826 58.1472 14.6269C58.1472 13.2535 58.8515 12.3732 59.9255 12.3732C61.1228 12.3732 61.7566 13.3944 61.7566 14.6093C61.7566 15.877 61.1756 16.863 59.9255 16.863Z" fill="white"></path><path d="M70.0977 17.7267C68.8476 17.7267 68.1962 16.635 68.1962 14.9976C68.1962 13.3601 68.8476 12.2509 70.0977 12.2509C71.3478 12.2509 72.0169 13.3601 72.0169 14.9976C72.0169 16.635 71.3478 17.7267 70.0977 17.7267ZM70.1153 19.7691C73.0205 19.7691 74.9217 17.7091 74.9217 14.9976C74.9217 12.2861 73.0205 10.2261 70.1153 10.2261C67.2278 10.2261 65.291 12.2861 65.291 14.9976C65.291 17.7091 67.2278 19.7691 70.1153 19.7691Z" fill="white"></path><path d="M75.7603 19.4865H78.6302V10.4717H75.7603V19.4865ZM75.7603 9.22159H78.6302V6.89746H75.7603V9.22159Z" fill="white"></path><path d="M79.8755 22.462H82.7454V18.5533H82.7807C83.3441 19.3104 84.1716 19.7682 85.3337 19.7682C87.693 19.7682 89.2601 17.9018 89.2601 14.979C89.2601 12.2675 87.7987 10.2075 85.4041 10.2075C84.1716 10.2075 83.2913 10.7533 82.675 11.5633H82.6222V10.4716H79.8755V22.462ZM84.5942 17.5497C83.3617 17.5497 82.6574 16.5461 82.6574 15.0847C82.6574 13.6233 83.2913 12.514 84.5414 12.514C85.7739 12.514 86.3549 13.5353 86.3549 15.0847C86.3549 16.6165 85.6858 17.5497 84.5942 17.5497Z" fill="white"></path><path d="M93.9323 19.7682C96.2916 19.7682 98.0347 18.7469 98.0347 16.775C98.0347 14.4684 96.1684 14.0635 94.5837 13.7994C93.4393 13.5881 92.418 13.5 92.418 12.8662C92.418 12.3028 92.9639 12.0387 93.6681 12.0387C94.4605 12.0387 95.0063 12.2852 95.1119 13.0951H97.753C97.6121 11.3168 96.2388 10.2075 93.6858 10.2075C91.5553 10.2075 89.7946 11.1935 89.7946 13.0951C89.7946 15.2079 91.4673 15.6305 93.0343 15.8946C94.2316 16.1059 95.3232 16.1939 95.3232 17.0038C95.3232 17.5849 94.7774 17.9018 93.9147 17.9018C92.9639 17.9018 92.3652 17.4616 92.2596 16.5637H89.5481C89.6361 18.5533 91.2912 19.7682 93.9323 19.7682Z" fill="white"></path><path d="M101.934 19.7511C103.184 19.7511 103.976 19.2581 104.628 18.3777H104.68V19.487H107.427V10.4722H104.557V15.5078C104.557 16.5818 103.958 17.3213 102.972 17.3213C102.057 17.3213 101.617 16.7755 101.617 15.7895V10.4722H98.7644V16.3881C98.7644 18.3953 99.856 19.7511 101.934 19.7511Z" fill="white"></path><path d="M108.676 19.4864H111.545V14.4332C111.545 13.3592 112.074 12.6021 112.972 12.6021C113.834 12.6021 114.239 13.1655 114.239 14.1339V19.4864H117.109V14.4332C117.109 13.3592 117.62 12.6021 118.535 12.6021C119.398 12.6021 119.803 13.1655 119.803 14.1339V19.4864H122.673V13.6233C122.673 11.5985 121.652 10.2075 119.61 10.2075C118.447 10.2075 117.479 10.7005 116.775 11.7922H116.74C116.282 10.8238 115.384 10.2075 114.204 10.2075C112.901 10.2075 112.038 10.8238 111.475 11.7569H111.422V10.4716H108.676V19.4864Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.65239 2.89703C5.61516 3.62229 4.67723 4.47978 3.86302 5.44506C7.19026 5.13616 11.4174 5.64056 16.3251 8.09442C21.5658 10.7147 25.7859 10.8033 28.7229 10.2368C28.4564 9.42994 28.1208 8.65448 27.7235 7.9173C24.3614 8.2719 20.0513 7.80253 15.0282 5.29106C11.8385 3.6962 9.02679 3.03923 6.65239 2.89703ZM25.7595 5.1219C23.1045 2.15545 19.2461 0.288574 14.9516 0.288574C13.6905 0.288574 12.4668 0.449602 11.3003 0.752198C12.8802 1.18329 14.5586 1.81396 16.3251 2.69722C20.0027 4.53601 23.1778 5.12807 25.7595 5.1219ZM29.3508 13.0689C25.8027 13.7696 20.903 13.6257 15.0282 10.6883C9.53589 7.9421 5.16448 7.97668 2.21624 8.63186C2.06406 8.66565 1.91547 8.70117 1.77046 8.73815C1.38446 9.57763 1.07635 10.4604 0.855269 11.3771C1.09139 11.314 1.33539 11.254 1.58713 11.1981C5.16385 10.4033 10.2175 10.4378 16.3251 13.4916C21.8175 16.2378 26.1889 16.2032 29.1371 15.548C29.2381 15.5256 29.3377 15.5024 29.4356 15.4785C29.4463 15.2499 29.4517 15.0198 29.4517 14.7886C29.4517 14.2068 29.4174 13.6329 29.3508 13.0689ZM28.9621 18.5385C25.4484 19.1528 20.6915 18.917 15.0282 16.0854C9.53589 13.3393 5.16448 13.3739 2.21624 14.0291C1.56182 14.1744 0.973109 14.3515 0.453784 14.5385C0.452368 14.6217 0.45166 14.705 0.45166 14.7886C0.45166 22.7967 6.94353 29.2886 14.9516 29.2886C21.663 29.2886 27.3095 24.729 28.9621 18.5385Z" fill="#BFF747"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Alexander Bennett						</span>
</h3>
<p className="elementor-icon-box-description">
						Senior Brand Strategist					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-de974b8 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="de974b8" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-98e2b4d e-con-full e-flex e-con e-child" data-id="98e2b4d" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-e2efb34 client-author-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="e2efb34" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img decoding="async" width="270" height="270" src="/wp-content/uploads/2024/11/author-2-3.webp" className="attachment-full size-full wp-image-4525" alt="" srcSet="./wp-content/uploads/2024/11/author-2-3.webp 270w, ./wp-content/uploads/2024/11/author-2-3-150x150.jpg?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-f7397f1 e-con-full e-flex e-con e-child" data-id="f7397f1" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-4489a2a elementor-widget elementor-widget-rating" data-id="4489a2a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-5c7a0dd elementor-widget elementor-widget-text-editor" data-id="5c7a0dd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We approached Isabella Morgan with the goal of completely transforming our brand’s digital presence, and they exceeded all expectations. Their team took the time to understand our business.</p> </div>
</div>
<div className="elementor-element elementor-element-f4d4cbd elementor-position-inline-end client-author-content elementor-view-default elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="f4d4cbd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="123" height="30" viewBox="0 0 123 30" fill="none"><path d="M36.1267 19.4865H44.895V16.8455H39.2432V6.89746H36.1267V19.4865Z" fill="white"></path><path d="M50.0899 17.7267C48.8398 17.7267 48.1884 16.635 48.1884 14.9976C48.1884 13.3601 48.8398 12.2509 50.0899 12.2509C51.34 12.2509 52.0091 13.3601 52.0091 14.9976C52.0091 16.635 51.34 17.7267 50.0899 17.7267ZM50.1075 19.7691C53.0127 19.7691 54.9143 17.7091 54.9143 14.9976C54.9143 12.2861 53.0127 10.2261 50.1075 10.2261C47.22 10.2261 45.2832 12.2861 45.2832 14.9976C45.2832 17.7091 47.22 19.7691 50.1075 19.7691Z" fill="white"></path><path d="M59.9431 22.6029C61.2812 22.6029 62.4609 22.3036 63.2532 21.5993C63.9751 20.9478 64.4505 19.9618 64.4505 18.6061V10.4716H61.7038V11.44H61.6686C61.1404 10.6829 60.3305 10.2075 59.1332 10.2075C56.8971 10.2075 55.3477 12.0739 55.3477 14.7149C55.3477 17.4792 57.2316 18.9934 59.2564 18.9934C60.3481 18.9934 61.0347 18.5533 61.563 17.9546H61.6334V18.8526C61.6334 19.9442 61.1228 20.5781 59.9079 20.5781C58.9571 20.5781 58.4817 20.1731 58.3233 19.6977H55.5413C55.823 21.5817 57.4605 22.6029 59.9431 22.6029ZM59.9255 16.863C58.8515 16.863 58.1472 15.9826 58.1472 14.6269C58.1472 13.2535 58.8515 12.3732 59.9255 12.3732C61.1228 12.3732 61.7566 13.3944 61.7566 14.6093C61.7566 15.877 61.1756 16.863 59.9255 16.863Z" fill="white"></path><path d="M70.0977 17.7267C68.8476 17.7267 68.1962 16.635 68.1962 14.9976C68.1962 13.3601 68.8476 12.2509 70.0977 12.2509C71.3478 12.2509 72.0169 13.3601 72.0169 14.9976C72.0169 16.635 71.3478 17.7267 70.0977 17.7267ZM70.1153 19.7691C73.0205 19.7691 74.9217 17.7091 74.9217 14.9976C74.9217 12.2861 73.0205 10.2261 70.1153 10.2261C67.2278 10.2261 65.291 12.2861 65.291 14.9976C65.291 17.7091 67.2278 19.7691 70.1153 19.7691Z" fill="white"></path><path d="M75.7603 19.4865H78.6302V10.4717H75.7603V19.4865ZM75.7603 9.22159H78.6302V6.89746H75.7603V9.22159Z" fill="white"></path><path d="M79.8755 22.462H82.7454V18.5533H82.7807C83.3441 19.3104 84.1716 19.7682 85.3337 19.7682C87.693 19.7682 89.2601 17.9018 89.2601 14.979C89.2601 12.2675 87.7987 10.2075 85.4041 10.2075C84.1716 10.2075 83.2913 10.7533 82.675 11.5633H82.6222V10.4716H79.8755V22.462ZM84.5942 17.5497C83.3617 17.5497 82.6574 16.5461 82.6574 15.0847C82.6574 13.6233 83.2913 12.514 84.5414 12.514C85.7739 12.514 86.3549 13.5353 86.3549 15.0847C86.3549 16.6165 85.6858 17.5497 84.5942 17.5497Z" fill="white"></path><path d="M93.9323 19.7682C96.2916 19.7682 98.0347 18.7469 98.0347 16.775C98.0347 14.4684 96.1684 14.0635 94.5837 13.7994C93.4393 13.5881 92.418 13.5 92.418 12.8662C92.418 12.3028 92.9639 12.0387 93.6681 12.0387C94.4605 12.0387 95.0063 12.2852 95.1119 13.0951H97.753C97.6121 11.3168 96.2388 10.2075 93.6858 10.2075C91.5553 10.2075 89.7946 11.1935 89.7946 13.0951C89.7946 15.2079 91.4673 15.6305 93.0343 15.8946C94.2316 16.1059 95.3232 16.1939 95.3232 17.0038C95.3232 17.5849 94.7774 17.9018 93.9147 17.9018C92.9639 17.9018 92.3652 17.4616 92.2596 16.5637H89.5481C89.6361 18.5533 91.2912 19.7682 93.9323 19.7682Z" fill="white"></path><path d="M101.934 19.7511C103.184 19.7511 103.976 19.2581 104.628 18.3777H104.68V19.487H107.427V10.4722H104.557V15.5078C104.557 16.5818 103.958 17.3213 102.972 17.3213C102.057 17.3213 101.617 16.7755 101.617 15.7895V10.4722H98.7644V16.3881C98.7644 18.3953 99.856 19.7511 101.934 19.7511Z" fill="white"></path><path d="M108.676 19.4864H111.545V14.4332C111.545 13.3592 112.074 12.6021 112.972 12.6021C113.834 12.6021 114.239 13.1655 114.239 14.1339V19.4864H117.109V14.4332C117.109 13.3592 117.62 12.6021 118.535 12.6021C119.398 12.6021 119.803 13.1655 119.803 14.1339V19.4864H122.673V13.6233C122.673 11.5985 121.652 10.2075 119.61 10.2075C118.447 10.2075 117.479 10.7005 116.775 11.7922H116.74C116.282 10.8238 115.384 10.2075 114.204 10.2075C112.901 10.2075 112.038 10.8238 111.475 11.7569H111.422V10.4716H108.676V19.4864Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.65239 2.89703C5.61516 3.62229 4.67723 4.47978 3.86302 5.44506C7.19026 5.13616 11.4174 5.64056 16.3251 8.09442C21.5658 10.7147 25.7859 10.8033 28.7229 10.2368C28.4564 9.42994 28.1208 8.65448 27.7235 7.9173C24.3614 8.2719 20.0513 7.80253 15.0282 5.29106C11.8385 3.6962 9.02679 3.03923 6.65239 2.89703ZM25.7595 5.1219C23.1045 2.15545 19.2461 0.288574 14.9516 0.288574C13.6905 0.288574 12.4668 0.449602 11.3003 0.752198C12.8802 1.18329 14.5586 1.81396 16.3251 2.69722C20.0027 4.53601 23.1778 5.12807 25.7595 5.1219ZM29.3508 13.0689C25.8027 13.7696 20.903 13.6257 15.0282 10.6883C9.53589 7.9421 5.16448 7.97668 2.21624 8.63186C2.06406 8.66565 1.91547 8.70117 1.77046 8.73815C1.38446 9.57763 1.07635 10.4604 0.855269 11.3771C1.09139 11.314 1.33539 11.254 1.58713 11.1981C5.16385 10.4033 10.2175 10.4378 16.3251 13.4916C21.8175 16.2378 26.1889 16.2032 29.1371 15.548C29.2381 15.5256 29.3377 15.5024 29.4356 15.4785C29.4463 15.2499 29.4517 15.0198 29.4517 14.7886C29.4517 14.2068 29.4174 13.6329 29.3508 13.0689ZM28.9621 18.5385C25.4484 19.1528 20.6915 18.917 15.0282 16.0854C9.53589 13.3393 5.16448 13.3739 2.21624 14.0291C1.56182 14.1744 0.973109 14.3515 0.453784 14.5385C0.452368 14.6217 0.45166 14.705 0.45166 14.7886C0.45166 22.7967 6.94353 29.2886 14.9516 29.2886C21.663 29.2886 27.3095 24.729 28.9621 18.5385Z" fill="#BFF747"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Isabella Morgan						</span>
</h3>
<p className="elementor-icon-box-description">
						Director Of Digital Marketing					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6c2712e e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="6c2712e" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-2e808e9 e-con-full e-flex e-con e-child" data-id="2e808e9" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-0b27c49 client-author-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="0b27c49" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="270" height="270" src="/wp-content/uploads/2024/11/author-3-2.webp" className="attachment-full size-full wp-image-4526" alt="" srcSet="./wp-content/uploads/2024/11/author-3-2.webp 270w, ./wp-content/uploads/2024/11/author-3-2-150x150.png?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-b5202d2 e-con-full e-flex e-con e-child" data-id="b5202d2" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-91bed85 elementor-widget elementor-widget-rating" data-id="91bed85" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-19fde27 elementor-widget elementor-widget-text-editor" data-id="19fde27" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Collaborating with Christopher Hughes was an absolute pleasure. Their team brought fresh ideas to the table and helped us completely reimagine our online branding and user experience.</p> </div>
</div>
<div className="elementor-element elementor-element-3664697 elementor-position-inline-end client-author-content elementor-view-default elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="3664697" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="123" height="30" viewBox="0 0 123 30" fill="none"><path d="M36.1267 19.4865H44.895V16.8455H39.2432V6.89746H36.1267V19.4865Z" fill="white"></path><path d="M50.0899 17.7267C48.8398 17.7267 48.1884 16.635 48.1884 14.9976C48.1884 13.3601 48.8398 12.2509 50.0899 12.2509C51.34 12.2509 52.0091 13.3601 52.0091 14.9976C52.0091 16.635 51.34 17.7267 50.0899 17.7267ZM50.1075 19.7691C53.0127 19.7691 54.9143 17.7091 54.9143 14.9976C54.9143 12.2861 53.0127 10.2261 50.1075 10.2261C47.22 10.2261 45.2832 12.2861 45.2832 14.9976C45.2832 17.7091 47.22 19.7691 50.1075 19.7691Z" fill="white"></path><path d="M59.9431 22.6029C61.2812 22.6029 62.4609 22.3036 63.2532 21.5993C63.9751 20.9478 64.4505 19.9618 64.4505 18.6061V10.4716H61.7038V11.44H61.6686C61.1404 10.6829 60.3305 10.2075 59.1332 10.2075C56.8971 10.2075 55.3477 12.0739 55.3477 14.7149C55.3477 17.4792 57.2316 18.9934 59.2564 18.9934C60.3481 18.9934 61.0347 18.5533 61.563 17.9546H61.6334V18.8526C61.6334 19.9442 61.1228 20.5781 59.9079 20.5781C58.9571 20.5781 58.4817 20.1731 58.3233 19.6977H55.5413C55.823 21.5817 57.4605 22.6029 59.9431 22.6029ZM59.9255 16.863C58.8515 16.863 58.1472 15.9826 58.1472 14.6269C58.1472 13.2535 58.8515 12.3732 59.9255 12.3732C61.1228 12.3732 61.7566 13.3944 61.7566 14.6093C61.7566 15.877 61.1756 16.863 59.9255 16.863Z" fill="white"></path><path d="M70.0977 17.7267C68.8476 17.7267 68.1962 16.635 68.1962 14.9976C68.1962 13.3601 68.8476 12.2509 70.0977 12.2509C71.3478 12.2509 72.0169 13.3601 72.0169 14.9976C72.0169 16.635 71.3478 17.7267 70.0977 17.7267ZM70.1153 19.7691C73.0205 19.7691 74.9217 17.7091 74.9217 14.9976C74.9217 12.2861 73.0205 10.2261 70.1153 10.2261C67.2278 10.2261 65.291 12.2861 65.291 14.9976C65.291 17.7091 67.2278 19.7691 70.1153 19.7691Z" fill="white"></path><path d="M75.7603 19.4865H78.6302V10.4717H75.7603V19.4865ZM75.7603 9.22159H78.6302V6.89746H75.7603V9.22159Z" fill="white"></path><path d="M79.8755 22.462H82.7454V18.5533H82.7807C83.3441 19.3104 84.1716 19.7682 85.3337 19.7682C87.693 19.7682 89.2601 17.9018 89.2601 14.979C89.2601 12.2675 87.7987 10.2075 85.4041 10.2075C84.1716 10.2075 83.2913 10.7533 82.675 11.5633H82.6222V10.4716H79.8755V22.462ZM84.5942 17.5497C83.3617 17.5497 82.6574 16.5461 82.6574 15.0847C82.6574 13.6233 83.2913 12.514 84.5414 12.514C85.7739 12.514 86.3549 13.5353 86.3549 15.0847C86.3549 16.6165 85.6858 17.5497 84.5942 17.5497Z" fill="white"></path><path d="M93.9323 19.7682C96.2916 19.7682 98.0347 18.7469 98.0347 16.775C98.0347 14.4684 96.1684 14.0635 94.5837 13.7994C93.4393 13.5881 92.418 13.5 92.418 12.8662C92.418 12.3028 92.9639 12.0387 93.6681 12.0387C94.4605 12.0387 95.0063 12.2852 95.1119 13.0951H97.753C97.6121 11.3168 96.2388 10.2075 93.6858 10.2075C91.5553 10.2075 89.7946 11.1935 89.7946 13.0951C89.7946 15.2079 91.4673 15.6305 93.0343 15.8946C94.2316 16.1059 95.3232 16.1939 95.3232 17.0038C95.3232 17.5849 94.7774 17.9018 93.9147 17.9018C92.9639 17.9018 92.3652 17.4616 92.2596 16.5637H89.5481C89.6361 18.5533 91.2912 19.7682 93.9323 19.7682Z" fill="white"></path><path d="M101.934 19.7511C103.184 19.7511 103.976 19.2581 104.628 18.3777H104.68V19.487H107.427V10.4722H104.557V15.5078C104.557 16.5818 103.958 17.3213 102.972 17.3213C102.057 17.3213 101.617 16.7755 101.617 15.7895V10.4722H98.7644V16.3881C98.7644 18.3953 99.856 19.7511 101.934 19.7511Z" fill="white"></path><path d="M108.676 19.4864H111.545V14.4332C111.545 13.3592 112.074 12.6021 112.972 12.6021C113.834 12.6021 114.239 13.1655 114.239 14.1339V19.4864H117.109V14.4332C117.109 13.3592 117.62 12.6021 118.535 12.6021C119.398 12.6021 119.803 13.1655 119.803 14.1339V19.4864H122.673V13.6233C122.673 11.5985 121.652 10.2075 119.61 10.2075C118.447 10.2075 117.479 10.7005 116.775 11.7922H116.74C116.282 10.8238 115.384 10.2075 114.204 10.2075C112.901 10.2075 112.038 10.8238 111.475 11.7569H111.422V10.4716H108.676V19.4864Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.65239 2.89703C5.61516 3.62229 4.67723 4.47978 3.86302 5.44506C7.19026 5.13616 11.4174 5.64056 16.3251 8.09442C21.5658 10.7147 25.7859 10.8033 28.7229 10.2368C28.4564 9.42994 28.1208 8.65448 27.7235 7.9173C24.3614 8.2719 20.0513 7.80253 15.0282 5.29106C11.8385 3.6962 9.02679 3.03923 6.65239 2.89703ZM25.7595 5.1219C23.1045 2.15545 19.2461 0.288574 14.9516 0.288574C13.6905 0.288574 12.4668 0.449602 11.3003 0.752198C12.8802 1.18329 14.5586 1.81396 16.3251 2.69722C20.0027 4.53601 23.1778 5.12807 25.7595 5.1219ZM29.3508 13.0689C25.8027 13.7696 20.903 13.6257 15.0282 10.6883C9.53589 7.9421 5.16448 7.97668 2.21624 8.63186C2.06406 8.66565 1.91547 8.70117 1.77046 8.73815C1.38446 9.57763 1.07635 10.4604 0.855269 11.3771C1.09139 11.314 1.33539 11.254 1.58713 11.1981C5.16385 10.4033 10.2175 10.4378 16.3251 13.4916C21.8175 16.2378 26.1889 16.2032 29.1371 15.548C29.2381 15.5256 29.3377 15.5024 29.4356 15.4785C29.4463 15.2499 29.4517 15.0198 29.4517 14.7886C29.4517 14.2068 29.4174 13.6329 29.3508 13.0689ZM28.9621 18.5385C25.4484 19.1528 20.6915 18.917 15.0282 16.0854C9.53589 13.3393 5.16448 13.3739 2.21624 14.0291C1.56182 14.1744 0.973109 14.3515 0.453784 14.5385C0.452368 14.6217 0.45166 14.705 0.45166 14.7886C0.45166 22.7967 6.94353 29.2886 14.9516 29.2886C21.663 29.2886 27.3095 24.729 28.9621 18.5385Z" fill="#BFF747"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Christopher Hughes						</span>
</h3>
<p className="elementor-icon-box-description">
						Chief Technology Officer					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-5778f70 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-id="5778f70" data-element_type="container" data-e-type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-1820f0d e-con-full e-flex e-con e-child" data-id="1820f0d" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-661f885 client-author-image image-anime at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="661f885" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img loading="lazy" decoding="async" width="270" height="270" src="/wp-content/uploads/2024/11/author-4-2.jpg" className="attachment-full size-full wp-image-4527" alt="" srcSet="./wp-content/uploads/2024/11/author-4-2.jpg 270w, ./wp-content/uploads/2024/11/author-4-2-150x150.jpg?crop=1 150w" sizes="(max-width: 270px) 100vw, 270px" /> </div>
</div>
</div>
<div className="elementor-element elementor-element-dd42714 e-con-full e-flex e-con e-child" data-id="dd42714" data-element_type="container" data-e-type="container">
<div className="elementor-element elementor-element-243f973 elementor-widget elementor-widget-rating" data-id="243f973" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
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
<div className="elementor-element elementor-element-a8d21ea elementor-widget elementor-widget-text-editor" data-id="a8d21ea" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>When we first partnered with Olivia Reynolds, we were in need of a complete website overhaul. They not only delivered a beautiful, responsive website, but they also implemented a robust digital marketing strategy.</p> </div>
</div>
<div className="elementor-element elementor-element-40b50b9 elementor-position-inline-end client-author-content elementor-view-default elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="40b50b9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="123" height="30" viewBox="0 0 123 30" fill="none"><path d="M36.1267 19.4865H44.895V16.8455H39.2432V6.89746H36.1267V19.4865Z" fill="white"></path><path d="M50.0899 17.7267C48.8398 17.7267 48.1884 16.635 48.1884 14.9976C48.1884 13.3601 48.8398 12.2509 50.0899 12.2509C51.34 12.2509 52.0091 13.3601 52.0091 14.9976C52.0091 16.635 51.34 17.7267 50.0899 17.7267ZM50.1075 19.7691C53.0127 19.7691 54.9143 17.7091 54.9143 14.9976C54.9143 12.2861 53.0127 10.2261 50.1075 10.2261C47.22 10.2261 45.2832 12.2861 45.2832 14.9976C45.2832 17.7091 47.22 19.7691 50.1075 19.7691Z" fill="white"></path><path d="M59.9431 22.6029C61.2812 22.6029 62.4609 22.3036 63.2532 21.5993C63.9751 20.9478 64.4505 19.9618 64.4505 18.6061V10.4716H61.7038V11.44H61.6686C61.1404 10.6829 60.3305 10.2075 59.1332 10.2075C56.8971 10.2075 55.3477 12.0739 55.3477 14.7149C55.3477 17.4792 57.2316 18.9934 59.2564 18.9934C60.3481 18.9934 61.0347 18.5533 61.563 17.9546H61.6334V18.8526C61.6334 19.9442 61.1228 20.5781 59.9079 20.5781C58.9571 20.5781 58.4817 20.1731 58.3233 19.6977H55.5413C55.823 21.5817 57.4605 22.6029 59.9431 22.6029ZM59.9255 16.863C58.8515 16.863 58.1472 15.9826 58.1472 14.6269C58.1472 13.2535 58.8515 12.3732 59.9255 12.3732C61.1228 12.3732 61.7566 13.3944 61.7566 14.6093C61.7566 15.877 61.1756 16.863 59.9255 16.863Z" fill="white"></path><path d="M70.0977 17.7267C68.8476 17.7267 68.1962 16.635 68.1962 14.9976C68.1962 13.3601 68.8476 12.2509 70.0977 12.2509C71.3478 12.2509 72.0169 13.3601 72.0169 14.9976C72.0169 16.635 71.3478 17.7267 70.0977 17.7267ZM70.1153 19.7691C73.0205 19.7691 74.9217 17.7091 74.9217 14.9976C74.9217 12.2861 73.0205 10.2261 70.1153 10.2261C67.2278 10.2261 65.291 12.2861 65.291 14.9976C65.291 17.7091 67.2278 19.7691 70.1153 19.7691Z" fill="white"></path><path d="M75.7603 19.4865H78.6302V10.4717H75.7603V19.4865ZM75.7603 9.22159H78.6302V6.89746H75.7603V9.22159Z" fill="white"></path><path d="M79.8755 22.462H82.7454V18.5533H82.7807C83.3441 19.3104 84.1716 19.7682 85.3337 19.7682C87.693 19.7682 89.2601 17.9018 89.2601 14.979C89.2601 12.2675 87.7987 10.2075 85.4041 10.2075C84.1716 10.2075 83.2913 10.7533 82.675 11.5633H82.6222V10.4716H79.8755V22.462ZM84.5942 17.5497C83.3617 17.5497 82.6574 16.5461 82.6574 15.0847C82.6574 13.6233 83.2913 12.514 84.5414 12.514C85.7739 12.514 86.3549 13.5353 86.3549 15.0847C86.3549 16.6165 85.6858 17.5497 84.5942 17.5497Z" fill="white"></path><path d="M93.9323 19.7682C96.2916 19.7682 98.0347 18.7469 98.0347 16.775C98.0347 14.4684 96.1684 14.0635 94.5837 13.7994C93.4393 13.5881 92.418 13.5 92.418 12.8662C92.418 12.3028 92.9639 12.0387 93.6681 12.0387C94.4605 12.0387 95.0063 12.2852 95.1119 13.0951H97.753C97.6121 11.3168 96.2388 10.2075 93.6858 10.2075C91.5553 10.2075 89.7946 11.1935 89.7946 13.0951C89.7946 15.2079 91.4673 15.6305 93.0343 15.8946C94.2316 16.1059 95.3232 16.1939 95.3232 17.0038C95.3232 17.5849 94.7774 17.9018 93.9147 17.9018C92.9639 17.9018 92.3652 17.4616 92.2596 16.5637H89.5481C89.6361 18.5533 91.2912 19.7682 93.9323 19.7682Z" fill="white"></path><path d="M101.934 19.7511C103.184 19.7511 103.976 19.2581 104.628 18.3777H104.68V19.487H107.427V10.4722H104.557V15.5078C104.557 16.5818 103.958 17.3213 102.972 17.3213C102.057 17.3213 101.617 16.7755 101.617 15.7895V10.4722H98.7644V16.3881C98.7644 18.3953 99.856 19.7511 101.934 19.7511Z" fill="white"></path><path d="M108.676 19.4864H111.545V14.4332C111.545 13.3592 112.074 12.6021 112.972 12.6021C113.834 12.6021 114.239 13.1655 114.239 14.1339V19.4864H117.109V14.4332C117.109 13.3592 117.62 12.6021 118.535 12.6021C119.398 12.6021 119.803 13.1655 119.803 14.1339V19.4864H122.673V13.6233C122.673 11.5985 121.652 10.2075 119.61 10.2075C118.447 10.2075 117.479 10.7005 116.775 11.7922H116.74C116.282 10.8238 115.384 10.2075 114.204 10.2075C112.901 10.2075 112.038 10.8238 111.475 11.7569H111.422V10.4716H108.676V19.4864Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.65239 2.89703C5.61516 3.62229 4.67723 4.47978 3.86302 5.44506C7.19026 5.13616 11.4174 5.64056 16.3251 8.09442C21.5658 10.7147 25.7859 10.8033 28.7229 10.2368C28.4564 9.42994 28.1208 8.65448 27.7235 7.9173C24.3614 8.2719 20.0513 7.80253 15.0282 5.29106C11.8385 3.6962 9.02679 3.03923 6.65239 2.89703ZM25.7595 5.1219C23.1045 2.15545 19.2461 0.288574 14.9516 0.288574C13.6905 0.288574 12.4668 0.449602 11.3003 0.752198C12.8802 1.18329 14.5586 1.81396 16.3251 2.69722C20.0027 4.53601 23.1778 5.12807 25.7595 5.1219ZM29.3508 13.0689C25.8027 13.7696 20.903 13.6257 15.0282 10.6883C9.53589 7.9421 5.16448 7.97668 2.21624 8.63186C2.06406 8.66565 1.91547 8.70117 1.77046 8.73815C1.38446 9.57763 1.07635 10.4604 0.855269 11.3771C1.09139 11.314 1.33539 11.254 1.58713 11.1981C5.16385 10.4033 10.2175 10.4378 16.3251 13.4916C21.8175 16.2378 26.1889 16.2032 29.1371 15.548C29.2381 15.5256 29.3377 15.5024 29.4356 15.4785C29.4463 15.2499 29.4517 15.0198 29.4517 14.7886C29.4517 14.2068 29.4174 13.6329 29.3508 13.0689ZM28.9621 18.5385C25.4484 19.1528 20.6915 18.917 15.0282 16.0854C9.53589 13.3393 5.16448 13.3739 2.21624 14.0291C1.56182 14.1744 0.973109 14.3515 0.453784 14.5385C0.452368 14.6217 0.45166 14.705 0.45166 14.7886C0.45166 22.7967 6.94353 29.2886 14.9516 29.2886C21.663 29.2886 27.3095 24.729 28.9621 18.5385Z" fill="#BFF747"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Olivia Reynolds						</span>
</h3>
<p className="elementor-icon-box-description">
						Senior Marketing Manager					</p>
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
