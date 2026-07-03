"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
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
    <div className="elementor elementor-11570" data-elementor-id="11570" data-elementor-type="wp-page">
<div className="elementor-element elementor-element-464af3d e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="464af3d" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/demo.awaikenthemes.com\/assets\/videos\/artistic-video.mp4&quot;,&quot;background_play_on_mobile&quot;:&quot;yes&quot;}">
<div className="e-con-inner">
<div className="elementor-background-video-container">
<video autoPlay={true} className="elementor-background-video-hosted" loop={true} muted={true} playsInline={true} role="presentation"></video>
</div><div className="elementor-element elementor-element-c07ab99 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="c07ab99">
<div className="elementor-element elementor-element-3db5f57 custome-fancy-text elementor-widget elementor-widget-elementskit-fancy-animated-text" data-e-type="widget" data-element_type="widget" data-id="3db5f57" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-fancy-animated-text.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <h1 className="ekit-fancy-text clip is-full-width" data-animation-settings="{&quot;animationStyle&quot;:&quot;animated&quot;,&quot;animationDelay&quot;:2500,&quot;loadingBar&quot;:3800,&quot;lettersDelay&quot;:50,&quot;typeLettersDelay&quot;:150,&quot;duration&quot;:500,&quot;revealDuration&quot;:600,&quot;revealAnimationDelay&quot;:1500}" data-id="3db5f57">
<span className="ekit-fancy-prefix-text">
				Innovative solutions for			</span>
<span className="ekit-fancy-text-lists">
<b className="ekit-fancy-text elementor-repeater-item-d3fe5b6 is-visible">Social Marketing</b>
<b className="ekit-fancy-text elementor-repeater-item-32e2d82">Art & Design</b>
<b className="ekit-fancy-text elementor-repeater-item-0b5b5fd">Digital World</b>
</span>
</h1>
</div> </div>
</div>
<div className="elementor-element elementor-element-a12fa04 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a12fa04">
<div className="elementor-element elementor-element-14f4311 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="14f4311">
<div className="elementor-element elementor-element-a2569c5 hero-content-video elementor-widget elementor-widget-elementskit-video" data-e-type="widget" data-element_type="widget" data-id="a2569c5" data-settings="{&quot;ekit_video_popup_close_icon&quot;:{&quot;value&quot;:&quot;icon icon-cancel&quot;,&quot;library&quot;:&quot;ekiticons&quot;},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-video.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <div className="video-content" data-video-player="[]" data-video-setting="{&quot;videoVolume&quot;:&quot;horizontal&quot;,&quot;startVolume&quot;:0.8,&quot;videoType&quot;:&quot;iframe&quot;,&quot;videoClass&quot;:&quot;mfp-fade&quot;,&quot;popupIcon&quot;:{&quot;value&quot;:&quot;icon icon-cancel&quot;,&quot;library&quot;:&quot;ekiticons&quot;},&quot;videoStyle&quot;:&quot;popup&quot;,&quot;videoTypeName&quot;:&quot;youtube&quot;,&quot;autoplay&quot;:false,&quot;muted&quot;:false,&quot;loop&quot;:false,&quot;bg_color&quot;:&quot;&quot;}">
<div className="ekit-hidden-icons" style={{"display": "none"}}>
<div className="ekit-popup-close-icon">
<i aria-hidden="true" className="icon icon-cancel"></i> </div>
</div>
<a aria-label="video-popup" className="ekit_icon_button ekit-video-popup ekit-video-popup-btn" href="https://www.youtube.com/embed/Y-x0efG1seA?feature=oembed?playlist=Y-x0efG1seA&mute=0&autoplay=0&loop=no&controls=0&start=0&end=">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></a>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-1c9f544 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1c9f544">
<div className="elementor-element elementor-element-b7f4fe6 learn-more-circle elementor-widget elementor-widget-text-path" data-e-type="widget" data-element_type="widget" data-id="b7f4fe6" data-settings="{&quot;text&quot;:&quot; LEARN MORE * LEARN MORE * LEARN MORE *&quot;,&quot;text_path_direction&quot;:&quot;ltr&quot;,&quot;link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;start_point&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-path.default">
<div className="elementor-widget-container">
<div className="e-text-path" data-link-url="" data-text=" LEARN MORE * LEARN MORE * LEARN MORE *" data-url="./wp-content/plugins/elementor/assets/svg-paths/circle.svg"></div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-35f2f1e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="35f2f1e">
<div className="elementor-element elementor-element-fabc151 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="fabc151" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-f66ef66 elementor-align-center elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="f66ef66" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Get In Touch</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-13430fb e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="13430fb">
<div className="elementor-element elementor-element-032655d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="032655d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-element elementor-element-f505c36 ticker-position-left elementor-widget elementor-widget-elementskit-content-ticker" data-e-type="widget" data-element_type="widget" data-id="f505c36" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-content-ticker.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="ekit-content-ticker-wrapper" data-content-settings="{&quot;type&quot;:&quot;content_ticker&quot;,&quot;settingOptions&quot;:{&quot;tickerSpeed&quot;:40,&quot;tickerDirection&quot;:null,&quot;tickerEffect&quot;:&quot;marquee&quot;,&quot;tickerAutoPlay&quot;:null,&quot;tickerDelay&quot;:3,&quot;tickerReverseDirection&quot;:&quot;&quot;,&quot;tickerGapBetween&quot;:&quot;&quot;,&quot;tickerGrabCursor&quot;:null}}" id="content-ticker-f505c36">
<div className="ekit-content-items">
<div className="ticker ekitMarqueeSwiper ekit-marquee">
<div className="marquee-wrapper">
<div className="elementor-repeater-item-1b6f577 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Custom Branding</a>
</div>
</div>
<div className="elementor-repeater-item-0cc9e5b ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Website Design</a>
</div>
</div>
<div className="elementor-repeater-item-65ae54a ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Digital Marketing</a>
</div>
</div>
<div className="elementor-repeater-item-311850b ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Strategy Consulting</a>
</div>
</div>
<div className="elementor-repeater-item-f7eac34 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Analytics & Reporting</a>
</div>
</div>
<div className="elementor-repeater-item-3b64483 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Custom Branding</a>
</div>
</div>
<div className="elementor-repeater-item-ac912d8 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Website Design</a>
</div>
</div>
<div className="elementor-repeater-item-9afc3e8 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Digital Marketing</a>
</div>
</div>
<div className="elementor-repeater-item-e84bd52 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
<div className="ekit-title-and-description">
<a>Strategy Consulting</a>
</div>
</div>
<div className="elementor-repeater-item-c85c956 ekit-marquee-item ticker-item">
<img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
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
<div className="elementor-element elementor-element-b55c785 about-agency e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="b55c785">
<div className="e-con-inner">
<div className="elementor-element elementor-element-badd256 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="badd256">
<div className="elementor-element elementor-element-7dd56ae e-con-full sticky-column e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7dd56ae">
<div className="elementor-element elementor-element-0c0e379 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="0c0e379" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">ABOUT AGENCY</h2> </div>
</div>
<div className="elementor-element elementor-element-984c2fd at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="984c2fd" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Crafting <span>unique digital</span> experiences that elevate your brand
</h2> </div>
</div>
<div className="elementor-element elementor-element-ef1816f elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="ef1816f" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./contact-us/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Contact Us</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b472638 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="b472638">
<div className="elementor-element elementor-element-cd20cb2 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="cd20cb2" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="39" viewBox="0 0 40 39" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M15.8858 2.33325H1.6001V16.619H15.8858V2.33325Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.0289 38.0475H23.7432" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M23.7432 23.7618H38.0289" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M23.7432 30.9047H38.0289" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.7431 16.6189H23.0288L30.886 0.904663L38.7431 16.6189Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M8.74296 38.0475C12.6878 38.0475 15.8858 34.8495 15.8858 30.9046C15.8858 26.9597 12.6878 23.7618 8.74296 23.7618C4.79806 23.7618 1.6001 26.9597 1.6001 30.9046C1.6001 34.8495 4.79806 38.0475 8.74296 38.0475Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
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
<div className="elementor-element elementor-element-b3a9f39 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="b3a9f39" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="39" viewBox="0 0 40 39" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M35.8858 0.904663H4.45724C2.87928 0.904663 1.6001 2.18385 1.6001 3.76181V35.1904C1.6001 36.7683 2.87928 38.0475 4.45724 38.0475H35.8858C37.4638 38.0475 38.743 36.7683 38.743 35.1904V3.76181C38.743 2.18385 37.4638 0.904663 35.8858 0.904663Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M20.1714 32.3333C25.6942 32.3333 30.1714 27.8561 30.1714 22.3333C30.1714 16.8104 25.6942 12.3333 20.1714 12.3333C14.6485 12.3333 10.1714 16.8104 10.1714 22.3333C10.1714 27.8561 14.6485 32.3333 20.1714 32.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M1.6001 9.47607H10.1715" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M30.1714 9.47607H38.7428" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M20.1714 22.2476V32.2476" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M11.6001 17.1904L20.1715 22.2475" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M28.7428 17.1904L20.1714 22.2475" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
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
<div className="elementor-element elementor-element-bea4b98 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="bea4b98" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="39" viewBox="0 0 40 39" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
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
<div className="elementor-element elementor-element-a53fed5 agency-item-content elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-invisible elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="a53fed5" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
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
<div className="elementor-element elementor-element-8c4eec4 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="8c4eec4">
<div className="e-con-inner">
<div className="elementor-element elementor-element-6d2a58c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6d2a58c">
<div className="elementor-element elementor-element-98c076e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="98c076e">
<div className="elementor-element elementor-element-b0b60e8 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="b0b60e8" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">OUR SERVICES</h2> </div>
</div>
<div className="elementor-element elementor-element-e421479 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="e421479" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Our <span> digital services </span> to grow your brand</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-4135222 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4135222">
<div className="elementor-element elementor-element-70ca73a elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="70ca73a" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.</p> </div>
</div>
<div className="elementor-element elementor-element-26328bc elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="26328bc" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./services/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">All Services</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-3edb675 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3edb675">
<div className="elementor-element elementor-element-3ee705f e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="3ee705f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-1e99c43 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1e99c43">
<div className="elementor-element elementor-element-ef6a159 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="ef6a159" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M45.5999 6.59998H14.3999C13.6806 6.61973 12.9761 6.80847 12.3432 7.15095C11.7104 7.49343 11.167 7.98003 10.7571 8.5714L2.95709 19.3714C2.3779 20.1899 2.08865 21.1783 2.13523 22.1799C2.18182 23.1815 2.56157 24.1388 3.21423 24.9L26.6142 51.8571C27.0148 52.3733 27.5282 52.7911 28.115 53.0784C28.7018 53.3658 29.3465 53.5152 29.9999 53.5152C30.6533 53.5152 31.2981 53.3658 31.8849 53.0784C32.4717 52.7911 32.9851 52.3733 33.3857 51.8571L56.7857 24.9C57.4383 24.1388 57.8181 23.1815 57.8646 22.1799C57.9112 21.1783 57.622 20.1899 57.0428 19.3714L49.2428 8.5714C48.8328 7.98003 48.2895 7.49343 47.6566 7.15095C47.0238 6.80847 46.3192 6.61973 45.5999 6.59998V6.59998Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M27.7714 6.55713L17.3142 22.7571L29.9999 53.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M32.3571 6.55713L42.7714 22.7571L30 53.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M2.22852 22.7571H57.7714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-4308116 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="4308116" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/branding-and-identity/index.html">
<svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a1e75a1 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a1e75a1">
<div className="elementor-element elementor-element-1235a9e ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="1235a9e" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a className="ekit_global_links" href="#">
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
<div className="elementor-element elementor-element-4a5901f e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="4a5901f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-80cdd1b e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="80cdd1b">
<div className="elementor-element elementor-element-73bf7b7 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="73bf7b7" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M45 2.14288H15C7.89916 2.14288 2.14282 7.89922 2.14282 15V45C2.14282 52.1008 7.89916 57.8572 15 57.8572H45C52.1008 57.8572 57.8571 52.1008 57.8571 45V15C57.8571 7.89922 52.1008 2.14288 45 2.14288Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M10.7144 30.0858H19.2858L25.7144 19.3286L32.1429 42.9L40.7144 30.0858H49.2858" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-cbdafe7 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="cbdafe7" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/digital-marketing/index.html">
<svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1b95654 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1b95654">
<div className="elementor-element elementor-element-53c6cb0 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="53c6cb0" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a className="ekit_global_links" href="#">
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
<div className="elementor-element elementor-element-5410483 e-con-full service-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="5410483" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-f47903e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f47903e">
<div className="elementor-element elementor-element-0dbb0f5 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="0dbb0f5" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M19.2859 55.7143C28.7537 55.7143 36.4288 48.0392 36.4288 38.5714C36.4288 29.1037 28.7537 21.4286 19.2859 21.4286C9.81818 21.4286 2.14307 29.1037 2.14307 38.5714C2.14307 48.0392 9.81818 55.7143 19.2859 55.7143Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M40.7146 55.7143C50.1824 55.7143 57.8575 48.0392 57.8575 38.5714C57.8575 29.1037 50.1824 21.4286 40.7146 21.4286C31.2469 21.4286 23.5718 29.1037 23.5718 38.5714C23.5718 48.0392 31.2469 55.7143 40.7146 55.7143Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M30.0003 38.5714C39.468 38.5714 47.1431 30.8963 47.1431 21.4286C47.1431 11.9608 39.468 4.28571 30.0003 4.28571C20.5325 4.28571 12.8574 11.9608 12.8574 21.4286C12.8574 30.8963 20.5325 38.5714 30.0003 38.5714Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-232651b service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="232651b" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<a className="elementor-icon" href="./services/creative-content-production/index.html">
<svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-52a15cf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="52a15cf">
<div className="elementor-element elementor-element-7e91cc1 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="7e91cc1" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
<a className="ekit_global_links" href="#">
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
<div className="elementor-element elementor-element-655574c e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="655574c" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-36b2cfd service-footer elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="36b2cfd" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Let’s make something great work together. <a href="./contact-us/index.html">Get Free Quote</a></p> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e953eb0 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="e953eb0">
<div className="e-con-inner">
<div className="elementor-element elementor-element-1300297 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1300297">
<div className="elementor-element elementor-element-58edb6d e-con-full digital-success-box e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="58edb6d" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
<div className="elementor-element elementor-element-65386c3 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="65386c3">
<div className="elementor-element elementor-element-5a7d2ec at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="5a7d2ec" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Expertise that drives digital <span>success</span></h2> </div>
</div>
<div className="elementor-element elementor-element-3bce9a0 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3bce9a0">
<div className="elementor-element elementor-element-2f0afe9 elementor-widget__width-initial success-counter-item elementor-widget elementor-widget-counter" data-e-type="widget" data-element_type="widget" data-id="2f0afe9" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-title">By optimizing your website for search engines.</div> <div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix">+</span>
<span className="elementor-counter-number" data-delimiter="," data-duration="2000" data-from-value="0" data-to-value="60">0</span>
<span className="elementor-counter-number-suffix">%</span>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d7e5338 elementor-widget__width-initial success-counter-item elementor-widget elementor-widget-counter" data-e-type="widget" data-element_type="widget" data-id="d7e5338" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-title">Rise in revenue as more visitors convert into paying customers.</div> <div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix">+</span>
<span className="elementor-counter-number" data-delimiter="," data-duration="2000" data-from-value="0" data-to-value="30">0</span>
<span className="elementor-counter-number-suffix">%</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b5dd269 e-con-full digital-success-list e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="b5dd269">
<div className="elementor-element elementor-element-e935011 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="e935011" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.638 9.86031L9.8713 7.99746L14.6794 6.13461C14.9281 6.05182 15.0939 5.76204 15.0525 5.51366C14.9696 4.9755 14.7209 4.47874 14.4307 4.02338C14.182 3.52662 13.8504 3.11265 13.436 2.74008C13.2287 2.5745 12.9386 2.5745 12.7313 2.74008L8.71072 5.96902L9.53971 0.877236C9.62261 0.58746 9.45681 0.33908 9.20811 0.256287C8.71072 0.0493038 8.13043 -0.0334888 7.59158 0.0079078C7.05274 -0.0334888 6.47245 0.0493038 5.97506 0.256287C5.72636 0.33908 5.56057 0.628857 5.64347 0.877236L6.47245 5.96902L2.45186 2.74008C2.24461 2.5331 1.95447 2.5331 1.74722 2.74008C1.33273 3.07126 1.00113 3.52662 0.752437 4.02338C0.420841 4.47874 0.213593 4.9755 0.0892453 5.51366C0.0477959 5.80344 0.213594 6.05182 0.46229 6.13461L5.18752 7.99746L0.379391 9.86031C0.130695 9.9431 -0.0351017 10.2329 0.00634774 10.4813C0.0892465 11.0194 0.296494 11.5162 0.628089 11.9715C0.876785 12.4683 1.20838 12.8823 1.62287 13.2548C1.83012 13.4204 2.12027 13.4204 2.32751 13.2548L6.3481 10.0259L5.51912 15.1177C5.43622 15.4075 5.60202 15.6558 5.85071 15.78C6.38955 15.9456 6.9284 16.0284 7.46724 15.987C8.00608 16.0284 8.58637 15.9456 9.08377 15.78C9.33246 15.6972 9.49826 15.4075 9.41536 15.1177L8.58637 10.0259L12.607 13.2548C12.8142 13.4204 13.1044 13.4204 13.3531 13.2548C13.7675 12.9237 14.0991 12.5097 14.3478 12.0129C14.6794 11.5576 14.8867 11.0608 15.011 10.5227C15.0525 10.1915 14.9281 9.9431 14.638 9.86031Z"></path></svg> </span>
<span className="elementor-icon-list-text"><strong>Social Media Management:</strong> Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.638 9.86031L9.8713 7.99746L14.6794 6.13461C14.9281 6.05182 15.0939 5.76204 15.0525 5.51366C14.9696 4.9755 14.7209 4.47874 14.4307 4.02338C14.182 3.52662 13.8504 3.11265 13.436 2.74008C13.2287 2.5745 12.9386 2.5745 12.7313 2.74008L8.71072 5.96902L9.53971 0.877236C9.62261 0.58746 9.45681 0.33908 9.20811 0.256287C8.71072 0.0493038 8.13043 -0.0334888 7.59158 0.0079078C7.05274 -0.0334888 6.47245 0.0493038 5.97506 0.256287C5.72636 0.33908 5.56057 0.628857 5.64347 0.877236L6.47245 5.96902L2.45186 2.74008C2.24461 2.5331 1.95447 2.5331 1.74722 2.74008C1.33273 3.07126 1.00113 3.52662 0.752437 4.02338C0.420841 4.47874 0.213593 4.9755 0.0892453 5.51366C0.0477959 5.80344 0.213594 6.05182 0.46229 6.13461L5.18752 7.99746L0.379391 9.86031C0.130695 9.9431 -0.0351017 10.2329 0.00634774 10.4813C0.0892465 11.0194 0.296494 11.5162 0.628089 11.9715C0.876785 12.4683 1.20838 12.8823 1.62287 13.2548C1.83012 13.4204 2.12027 13.4204 2.32751 13.2548L6.3481 10.0259L5.51912 15.1177C5.43622 15.4075 5.60202 15.6558 5.85071 15.78C6.38955 15.9456 6.9284 16.0284 7.46724 15.987C8.00608 16.0284 8.58637 15.9456 9.08377 15.78C9.33246 15.6972 9.49826 15.4075 9.41536 15.1177L8.58637 10.0259L12.607 13.2548C12.8142 13.4204 13.1044 13.4204 13.3531 13.2548C13.7675 12.9237 14.0991 12.5097 14.3478 12.0129C14.6794 11.5576 14.8867 11.0608 15.011 10.5227C15.0525 10.1915 14.9281 9.9431 14.638 9.86031Z"></path></svg> </span>
<span className="elementor-icon-list-text"><strong>E-commerce Solutions:</strong> Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-900c3d3 why-choose-us e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="900c3d3">
<div className="e-con-inner">
<div className="elementor-element elementor-element-44ad8fb e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="44ad8fb">
<div className="elementor-element elementor-element-f0ca804 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f0ca804">
<div className="elementor-element elementor-element-4ba303f section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4ba303f" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">WHY CHOOSE</h2> </div>
</div>
<div className="elementor-element elementor-element-e53cb4b at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="e53cb4b" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Expertise for<span> your digital</span> growth journey</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-19ff876 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="19ff876">
<div className="elementor-element elementor-element-5ce3831 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="5ce3831" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a04fb2c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a04fb2c">
<div className="elementor-element elementor-element-d038685 e-con-full why-choose-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="d038685">
<div className="elementor-element elementor-element-f9c01b1 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="f9c01b1" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-6026189 elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="6026189" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-911bd01 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="911bd01" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-c7b4e46 elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="c7b4e46" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-5bb90e1 e-con-full why-choose-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="5bb90e1" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-04c7193 elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="04c7193" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
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
<div className="elementor-element elementor-element-1f2fd28 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1f2fd28">
<div className="elementor-element elementor-element-e0b2fbf image-anime why-choose-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="e0b2fbf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-1037" decoding="async" fetchPriority="high" height="549" sizes="(max-width: 594px) 100vw, 594px" src="/wp-content/uploads/2024/11/why-choose-image-2.webp" srcSet="./wp-content/uploads/2024/11/why-choose-image-2.webp 594w, ./wp-content/uploads/2024/11/why-choose-image-2-300x277.jpg 300w" width="594" /> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9307b97 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="9307b97">
<div className="e-con-inner">
<div className="elementor-element elementor-element-ff82b5d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ff82b5d">
<div className="elementor-element elementor-element-89a12e3 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="89a12e3">
<div className="elementor-element elementor-element-656d3c2 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="656d3c2" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">JOIN AGENCY</h2> </div>
</div>
<div className="elementor-element elementor-element-6a32270 at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6a32270" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Join our <span>agency</span> of creative innovators</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-30a7a07 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="30a7a07">
<div className="elementor-element elementor-element-1d2c6c8 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1d2c6c8" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1fdf852 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1fdf852">
<div className="elementor-element elementor-element-1efc536 elementor-widget__width-initial agency-social-item ekit-equal-height-disable elementor-invisible elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="1efc536" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
<div className="elementskit-box-header elementor-animation-">
<div className="elementskit-info-box-icon">
<svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
</div>
</div>
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Follow Us On Twitter                </h3>
<p>@artistic_official</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="#">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-4f2c651 elementor-widget__width-initial agency-social-item ekit-equal-height-disable elementor-invisible elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="4f2c651" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
<div className="elementskit-box-header elementor-animation-">
<div className="elementskit-info-box-icon">
<svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
</div>
</div>
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Join Us On Linked In                </h3>
<p>user.artistic_official</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="#">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-09e1e1b elementor-widget__width-initial agency-social-item ekit-equal-height-disable elementor-invisible elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="09e1e1b" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
<div className="elementskit-box-header elementor-animation-">
<div className="elementskit-info-box-icon">
<i aria-hidden="true" className="elementkit-infobox-icon icon icon-instagram-1"></i>
</div>
</div>
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Follow On Instagram                </h3>
<p>@artistic_insta_official</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="#">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-419375d how-it-work e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="419375d">
<div className="e-con-inner">
<div className="elementor-element elementor-element-ebecc5c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ebecc5c">
<div className="elementor-element elementor-element-124e896 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="124e896">
<div className="elementor-element elementor-element-c75d147 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="c75d147" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">HOW IT WORK</h2> </div>
</div>
<div className="elementor-element elementor-element-97b0b68 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="97b0b68" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Our proven <span>process</span> for achieving success</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-8cd393b e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8cd393b">
<div className="elementor-element elementor-element-99ece90 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="99ece90" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-cd10e7d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="cd10e7d">
<div className="elementor-element elementor-element-9b239db e-con-full work-process-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="9b239db" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-d5d6273 work-process-content ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="d5d6273" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Discovery Phase                </h3>
<p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./contact-us/index.html">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-ed5ab78 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ed5ab78">
<div className="elementor-element elementor-element-e44789c elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="e44789c" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">STEP</h3><p className="elementor-image-box-description">01</p></div></div> </div>
</div>
<div className="elementor-element elementor-element-b5b3656 elementor-widget__width-initial elementor-absolute work-process-icon-box elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="b5b3656" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M9.28585 17.1429C13.6252 17.1429 17.143 13.6251 17.143 9.28573C17.143 4.94635 13.6252 1.42859 9.28585 1.42859C4.94647 1.42859 1.42871 4.94635 1.42871 9.28573C1.42871 13.6251 4.94647 17.1429 9.28585 17.1429Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M30.7146 17.1429C35.0539 17.1429 38.5717 13.6251 38.5717 9.28573C38.5717 4.94635 35.0539 1.42859 30.7146 1.42859C26.3752 1.42859 22.8574 4.94635 22.8574 9.28573C22.8574 13.6251 26.3752 17.1429 30.7146 17.1429Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9.28585 38.5715C13.6252 38.5715 17.143 35.0537 17.143 30.7143C17.143 26.3749 13.6252 22.8572 9.28585 22.8572C4.94647 22.8572 1.42871 26.3749 1.42871 30.7143C1.42871 35.0537 4.94647 38.5715 9.28585 38.5715Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M30.7146 38.5715C35.0539 38.5715 38.5717 35.0537 38.5717 30.7143C38.5717 26.3749 35.0539 22.8572 30.7146 22.8572C26.3752 22.8572 22.8574 26.3749 22.8574 30.7143C22.8574 35.0537 26.3752 38.5715 30.7146 38.5715Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1782b13 e-con-full work-process-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="1782b13" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-609467c work-process-content ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="609467c" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Implementation                </h3>
<p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./contact-us/index.html">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-52b4e44 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="52b4e44">
<div className="elementor-element elementor-element-fb7db19 elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="fb7db19" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">STEP</h3><p className="elementor-image-box-description">02</p></div></div> </div>
</div>
<div className="elementor-element elementor-element-5fc0d5e elementor-widget__width-initial elementor-absolute work-process-icon-box elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="5fc0d5e" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="39" viewBox="0 0 40 39" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6760adb e-con-full work-process-item backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="6760adb" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-2aacd15 work-process-content ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-id="2aacd15" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> {/* link opening */}
{/* end link opening */}
<div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
<div className="box-body">
<h3 className="elementskit-info-box-title">
                    Collaboration                </h3>
<p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
<div className="box-footer disable_hover_button">
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./contact-us/index.html">
<svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path></svg> </a>
</div>
</div>
</div>
</div>
</div> </div>
</div>
<div className="elementor-element elementor-element-f5a7997 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f5a7997">
<div className="elementor-element elementor-element-a924d2e elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="a924d2e" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">STEP</h3><p className="elementor-image-box-description">03</p></div></div> </div>
</div>
<div className="elementor-element elementor-element-6537b47 elementor-widget__width-initial elementor-absolute work-process-icon-box elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="6537b47" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
<div className="elementor-widget-container">
<div className="elementor-icon-wrapper">
<div className="elementor-icon">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-5ec7c99 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="5ec7c99">
<div className="e-con-inner">
<div className="elementor-element elementor-element-5b8ccd6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5b8ccd6">
<div className="elementor-element elementor-element-382fa9a e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="382fa9a">
<div className="elementor-element elementor-element-6902461 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6902461" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">HOW IT WORK</h2> </div>
</div>
<div className="elementor-element elementor-element-00a04ea at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="00a04ea" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Our proven <span>process</span> for achieving success</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-131fb6f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="131fb6f">
<div className="elementor-element elementor-element-95e8a70 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="95e8a70" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b505714 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="b505714">
<div className="elementor-element elementor-element-737ae8b elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 awaiken-portfolio-gutter-30 elementor-invisible elementor-widget elementor-widget-artistic-portfolio-grid" data-e-type="widget" data-element_type="widget" data-id="737ae8b" data-settings="{&quot;grid_layout&quot;:&quot;masonry&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;columns&quot;:&quot;3&quot;,&quot;columns_tablet&quot;:&quot;2&quot;,&quot;columns_mobile&quot;:&quot;1&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="artistic-portfolio-grid.default">
<div className="elementor-widget-container">
<div className="awaiken-portfolio-widget" data-config="{&quot;rtl&quot;:false,&quot;id&quot;:&quot;737ae8b&quot;,&quot;item_spacing&quot;:&quot;30&quot;,&quot;show_filter_bar&quot;:&quot;yes&quot;}" id="awaiken-portfolio-737ae8b">
<ul className="awaiken-portfolio-grid__filters portfolio_filter-design-1">
<li className="awaiken-portfolio-grid__filter active" data-filter="*">All</li>
<li className="awaiken-portfolio-grid__filter-label" data-filter=".portfolio-filter-11">Branding & Identity</li>
<li className="awaiken-portfolio-grid__filter-label" data-filter=".portfolio-filter-12">Digital Marketing</li>
<li className="awaiken-portfolio-grid__filter-label" data-filter=".portfolio-filter-13">SEO & Analytics</li>
<li className="awaiken-portfolio-grid__filter-label" data-filter=".portfolio-filter-14">Web Design</li>
</ul>
<div className="awaiken-portfolio-grid elementor-grid awaiken-portfolio-layout-masonry awaiken-portfolio-item-design-2">
<article className="awaiken-portfolio-grid-item portfolio-filter-11 portfolio-filter-12 portfolio-filter-14 post-8604 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-branding-identity awaiken-project-category-digital-marketing awaiken-project-category-web-design">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-1-2.webp" srcSet="./wp-content/uploads/2024/11/project-1-2.webp 1200w, ./wp-content/uploads/2024/11/project-1-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-1-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-1-2-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=branding-identity"><span className="awaiken-portfolio-grid-item__categories__category">Branding & Identity</span></a> <a href="./index.html?awaiken-project-category=digital-marketing"><span className="awaiken-portfolio-grid-item__categories__category">Digital Marketing</span></a> <a href="./index.html?awaiken-project-category=web-design"><span className="awaiken-portfolio-grid-item__categories__category">Web Design</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=dynamic-e-commerce-platform">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=dynamic-e-commerce-platform">
<h3 className="awaiken-portfolio-grid-item__title">Dynamic E-Commerce Platform</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Dynamic E-Commerce Platform Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
<article className="awaiken-portfolio-grid-item portfolio-filter-12 portfolio-filter-14 post-8602 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-digital-marketing awaiken-project-category-web-design">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-2-3.webp" srcSet="./wp-content/uploads/2024/11/project-2-3.webp 1200w, ./wp-content/uploads/2024/11/project-2-3-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-2-3-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-2-3-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=digital-marketing"><span className="awaiken-portfolio-grid-item__categories__category">Digital Marketing</span></a> <a href="./index.html?awaiken-project-category=web-design"><span className="awaiken-portfolio-grid-item__categories__category">Web Design</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=innovative-identity-design">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=innovative-identity-design">
<h3 className="awaiken-portfolio-grid-item__title">Innovative Identity Design</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Innovative design identity Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
<article className="awaiken-portfolio-grid-item portfolio-filter-11 portfolio-filter-13 post-8600 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-branding-identity awaiken-project-category-seo-analytics">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-3-2.webp" srcSet="./wp-content/uploads/2024/11/project-3-2.webp 1200w, ./wp-content/uploads/2024/11/project-3-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-3-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-3-2-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=branding-identity"><span className="awaiken-portfolio-grid-item__categories__category">Branding & Identity</span></a> <a href="./index.html?awaiken-project-category=seo-analytics"><span className="awaiken-portfolio-grid-item__categories__category">SEO & Analytics</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=dynamic-digital-campaign">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=dynamic-digital-campaign">
<h3 className="awaiken-portfolio-grid-item__title">Dynamic Digital Campaign</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Dynamic Digital Campaign Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
<article className="awaiken-portfolio-grid-item portfolio-filter-11 portfolio-filter-13 portfolio-filter-14 post-8598 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-branding-identity awaiken-project-category-seo-analytics awaiken-project-category-web-design">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-4-2.webp" srcSet="./wp-content/uploads/2024/11/project-4-2.webp 1200w, ./wp-content/uploads/2024/11/project-4-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-4-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-4-2-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=branding-identity"><span className="awaiken-portfolio-grid-item__categories__category">Branding & Identity</span></a> <a href="./index.html?awaiken-project-category=seo-analytics"><span className="awaiken-portfolio-grid-item__categories__category">SEO & Analytics</span></a> <a href="./index.html?awaiken-project-category=web-design"><span className="awaiken-portfolio-grid-item__categories__category">Web Design</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=impactful-content-creation">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=impactful-content-creation">
<h3 className="awaiken-portfolio-grid-item__title">Impactful Content Creation</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Impactful Content Creation Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
<article className="awaiken-portfolio-grid-item portfolio-filter-14 post-8596 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-web-design">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-5-2.webp" srcSet="./wp-content/uploads/2024/11/project-5-2.webp 1200w, ./wp-content/uploads/2024/11/project-5-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-5-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-5-2-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=web-design"><span className="awaiken-portfolio-grid-item__categories__category">Web Design</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=visionary-growth-strategy">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=visionary-growth-strategy">
<h3 className="awaiken-portfolio-grid-item__title">Visionary Growth Strategy</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Visionary Growth Strategy Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
<article className="awaiken-portfolio-grid-item portfolio-filter-11 portfolio-filter-13 post-8594 awaiken-project type-awaiken-project status-publish has-post-thumbnail hentry awaiken-project-category-branding-identity awaiken-project-category-seo-analytics">
<div className="awaiken-portfolio-grid-item__wrapper">
<div className="awaiken-portfolio-grid-item__image">
<div className="awaiken-portfolio-grid-item__img">
<img alt="" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" height="800" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/wp-content/uploads/2024/11/project-6-2.webp" srcSet="./wp-content/uploads/2024/11/project-6-2.webp 1200w, ./wp-content/uploads/2024/11/project-6-2-300x200.jpg 300w, ./wp-content/uploads/2024/11/project-6-2-1024x683.jpg 1024w, ./wp-content/uploads/2024/11/project-6-2-768x512.jpg 768w" width="1200" /> </div>
<div className="awaiken-portfolio-grid-item__categories">
<a href="./index.html?awaiken-project-category=branding-identity"><span className="awaiken-portfolio-grid-item__categories__category">Branding & Identity</span></a> <a href="./index.html?awaiken-project-category=seo-analytics"><span className="awaiken-portfolio-grid-item__categories__category">SEO & Analytics</span></a> </div>
<div className="awaiken-portfolio-grid-item__readmore">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=interactive-website-redesign">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.731 9.97455L8.12396 18.5815L6.70996 17.1675L15.316 8.56055H7.73096V6.56055H18.731V17.5605H16.731V9.97455Z" fill="currentColor"></path></svg> </a>
</div>
</div>
<div className="awaiken-portfolio-grid-item__content">
<a className="awaiken-portfolio-grid-item__link" href="./index.html?awaiken-project=interactive-website-redesign">
<h3 className="awaiken-portfolio-grid-item__title">Interactive Website Redesign</h3>
</a>
<div className="awaiken-portfolio-grid-item__excerpt">
<p>Interactive Website Redesign Home Custom Branding Website Design Digital Marketing Strategy Consulting […]</p>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c9b7212 our-testimonial e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="c9b7212">
<div className="e-con-inner">
<div className="elementor-element elementor-element-a9ba08e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a9ba08e">
<div className="elementor-element elementor-element-4f37585 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4f37585">
<div className="elementor-element elementor-element-cb27ec5 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="cb27ec5" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">TESTIMONIALS</h2> </div>
</div>
<div className="elementor-element elementor-element-ad1aca5 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ad1aca5" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Read what they have to say about <span> working with us </span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-27c7f08 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="27c7f08">
<div className="elementor-element elementor-element-6538b5d elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="6538b5d" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Discover how our clients have achieved success through our innovative solutions and dedicated support.</p> </div>
</div>
<div className="elementor-element elementor-element-b12113e elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="b12113e" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="./testimonial/index.html">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">All Testimonials</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-272595e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="272595e">
<div className="elementor-element elementor-element-11ce930 e-con-full backdrop-filter e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="11ce930">
<div className="elementor-element elementor-element-35996e0 testimonial-review-counter elementor-widget elementor-widget-counter" data-e-type="widget" data-element_type="widget" data-id="35996e0" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix"></span>
<span className="elementor-counter-number" data-delimiter="," data-duration="2000" data-from-value="0" data-to-value="4.9">0</span>
<span className="elementor-counter-number-suffix"></span>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-101bc3b elementor-widget elementor-widget-rating" data-e-type="widget" data-element_type="widget" data-id="101bc3b" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope={true} itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Rated 5 out of 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
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
<div className="elementor-element elementor-element-d2ea7ac elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="d2ea7ac" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>( 40+ Reviews )</p> </div>
</div>
<div className="elementor-element elementor-element-7996837 at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="7996837" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Customer experiences that speak for themselves</h3> </div>
</div>
<div className="elementor-element elementor-element-63a8459 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="63a8459">
<div className="elementor-element elementor-element-cae949a image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="cae949a" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-2217" decoding="async" height="40" loading="lazy" src="/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp" width="40" /> </div>
</div>
<div className="elementor-element elementor-element-c6cbb2d image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="c6cbb2d" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-2218" decoding="async" height="40" loading="lazy" src="/wp-content/uploads/2024/11/satisfy-client-img-2-2.webp" width="40" /> </div>
</div>
<div className="elementor-element elementor-element-5e1bf4a image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="5e1bf4a" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-2219" decoding="async" height="40" loading="lazy" src="/wp-content/uploads/2024/11/satisfy-client-img-3-2.webp" width="40" /> </div>
</div>
<div className="elementor-element elementor-element-8fe2d62 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="8fe2d62" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-2220" decoding="async" height="40" loading="lazy" src="/wp-content/uploads/2024/11/satisfy-client-img-4-2.webp" width="40" /> </div>
</div>
<div className="elementor-element elementor-element-d8be101 image-anime satisfy-client-image at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="d8be101" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-2221" decoding="async" height="40" loading="lazy" src="/wp-content/uploads/2024/11/satisfy-client-img-5-2.webp" width="40" /> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-24c4c0e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="24c4c0e">
<div className="elementor-element elementor-element-2bd171a testimonial-slider arrow-using-ekit elementor-widget elementor-widget-elementskit-testimonial" data-e-type="widget" data-element_type="widget" data-id="2bd171a" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-testimonial.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con"><div className="elementskit-testimonial-slider ekit_testimonial_style_5 arrow_inside" data-config="{&quot;rtl&quot;:false,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;pauseOnHover&quot;:false,&quot;autoplay&quot;:false,&quot;speed&quot;:1100,&quot;slidesPerGroup&quot;:1,&quot;slidesPerView&quot;:1,&quot;loop&quot;:true,&quot;spaceBetween&quot;:&quot;&quot;,&quot;breakpoints&quot;:{&quot;320&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;768&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;1024&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:15}}}">
<div className="ekit-main-swiper swiper">
<div className="swiper-wrapper">
<div className="swiper-slide">
<div className="swiper-slide-inner">
<div className="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-two elementor-repeater-item-0bddc1b">
<div className="elementskit-commentor-header">
<ul className="elementskit-stars">
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
</ul>
<div className="elementskit-icon-content elementskit-watermark-icon">
<svg fill="none" height="30" viewBox="0 0 124 30" width="124" xmlns="http://www.w3.org/2000/svg"><path d="M36.7866 19.5857H45.5549V16.9307H39.9031V6.93018H36.7866V19.5857Z" fill="white"></path><path d="M50.7501 17.8168C49.5 17.8168 48.8485 16.7194 48.8485 15.0733C48.8485 13.4272 49.5 12.3121 50.7501 12.3121C52.0002 12.3121 52.6693 13.4272 52.6693 15.0733C52.6693 16.7194 52.0002 17.8168 50.7501 17.8168ZM50.7677 19.87C53.6729 19.87 55.5744 17.7991 55.5744 15.0733C55.5744 12.3475 53.6729 10.2766 50.7677 10.2766C47.8801 10.2766 45.9434 12.3475 45.9434 15.0733C45.9434 17.7991 47.8801 19.87 50.7677 19.87Z" fill="white"></path><path d="M60.6033 22.7186C61.9414 22.7186 63.1211 22.4177 63.9134 21.7097C64.6353 21.0548 65.1107 20.0636 65.1107 18.7007V10.5233H62.364V11.4968H62.3288C61.8005 10.7357 60.9906 10.2578 59.7933 10.2578C57.5572 10.2578 56.0078 12.134 56.0078 14.789C56.0078 17.5679 57.8918 19.0901 59.9166 19.0901C61.0082 19.0901 61.6949 18.6476 62.2231 18.0458H62.2935V18.9485C62.2935 20.0459 61.7829 20.6831 60.568 20.6831C59.6173 20.6831 59.1419 20.276 58.9834 19.7981H56.2015C56.4832 21.692 58.1207 22.7186 60.6033 22.7186ZM60.5857 16.9484C59.5116 16.9484 58.8073 16.0634 58.8073 14.7005C58.8073 13.3199 59.5116 12.4349 60.5857 12.4349C61.7829 12.4349 62.4168 13.4615 62.4168 14.6828C62.4168 15.9572 61.8358 16.9484 60.5857 16.9484Z" fill="white"></path><path d="M70.7579 17.8168C69.5078 17.8168 68.8563 16.7194 68.8563 15.0733C68.8563 13.4272 69.5078 12.3121 70.7579 12.3121C72.008 12.3121 72.6771 13.4272 72.6771 15.0733C72.6771 16.7194 72.008 17.8168 70.7579 17.8168ZM70.7755 19.87C73.6807 19.87 75.5819 17.7991 75.5819 15.0733C75.5819 12.3475 73.6807 10.2766 70.7755 10.2766C67.8879 10.2766 65.9512 12.3475 65.9512 15.0733C65.9512 17.7991 67.8879 19.87 70.7755 19.87Z" fill="white"></path><path d="M76.4204 19.5857H79.2904V10.5233H76.4204V19.5857ZM76.4204 9.26658H79.2904V6.93018H76.4204V9.26658Z" fill="white"></path><path d="M80.5356 22.577H83.4056V18.6476H83.4408C84.0042 19.4087 84.8318 19.8689 85.9938 19.8689C88.3532 19.8689 89.9202 17.9927 89.9202 15.0545C89.9202 12.3287 88.4588 10.2578 86.0643 10.2578C84.8318 10.2578 83.9514 10.8065 83.3352 11.6207H83.2823V10.5233H80.5356V22.577ZM85.2543 17.6387C84.0218 17.6387 83.3176 16.6298 83.3176 15.1607C83.3176 13.6916 83.9514 12.5765 85.2015 12.5765C86.434 12.5765 87.015 13.6031 87.015 15.1607C87.015 16.7006 86.346 17.6387 85.2543 17.6387Z" fill="white"></path><path d="M94.5922 19.8689C96.9515 19.8689 98.6946 18.8423 98.6946 16.8599C98.6946 14.5412 96.8283 14.1341 95.2436 13.8686C94.0992 13.6562 93.078 13.5677 93.078 12.9305C93.078 12.3641 93.6238 12.0986 94.3281 12.0986C95.1204 12.0986 95.6662 12.3464 95.7718 13.1606H98.4129C98.272 11.3729 96.8987 10.2578 94.3457 10.2578C92.2152 10.2578 90.4545 11.249 90.4545 13.1606C90.4545 15.2846 92.1272 15.7094 93.6942 15.9749C94.8915 16.1873 95.9831 16.2758 95.9831 17.09C95.9831 17.6741 95.4373 17.9927 94.5746 17.9927C93.6238 17.9927 93.0251 17.5502 92.9195 16.6475H90.208C90.296 18.6476 91.9511 19.8689 94.5922 19.8689Z" fill="white"></path><path d="M102.594 19.8516C103.844 19.8516 104.636 19.356 105.287 18.471H105.34V19.5861H108.087V10.5237H105.217V15.5859C105.217 16.6656 104.618 17.409 103.632 17.409C102.717 17.409 102.277 16.8603 102.277 15.8691V10.5237H99.4243V16.4709C99.4243 18.4887 100.516 19.8516 102.594 19.8516Z" fill="white"></path><path d="M109.335 19.5857H112.205V14.5058C112.205 13.4261 112.734 12.665 113.632 12.665C114.494 12.665 114.899 13.2314 114.899 14.2049V19.5857H117.769V14.5058C117.769 13.4261 118.28 12.665 119.195 12.665C120.058 12.665 120.463 13.2314 120.463 14.2049V19.5857H123.333V13.6916C123.333 11.6561 122.312 10.2578 120.269 10.2578C119.107 10.2578 118.139 10.7534 117.435 11.8508H117.399C116.942 10.8773 116.044 10.2578 114.864 10.2578C113.561 10.2578 112.698 10.8773 112.135 11.8154H112.082V10.5233H109.335V19.5857Z" fill="white"></path><path clipRule="evenodd" d="M19.5054 8.80343C18.3132 8.0026 16.9114 7.57514 15.4775 7.57514V0.286865C18.3454 0.286865 21.1488 1.14177 23.5333 2.74346C25.9178 4.34514 27.7763 6.62169 28.8738 9.28519C29.9712 11.9487 30.2584 14.8796 29.6989 17.7072C29.1394 20.5347 27.7585 23.132 25.7306 25.1706C23.7027 27.2092 21.1191 28.5974 18.3063 29.1599C15.4936 29.7223 12.5781 29.4336 9.92861 28.3304C7.2791 27.2271 5.01451 25.3588 3.42123 22.9617C1.82795 20.5646 0.977539 17.7464 0.977539 14.8634H8.22754C8.22754 16.3049 8.65275 17.714 9.44938 18.9126C10.246 20.1111 11.3783 21.0453 12.7031 21.5969C14.0278 22.1486 15.4856 22.2929 16.8919 22.0116C18.2983 21.7304 19.5901 21.0363 20.6041 20.017C21.618 18.9977 22.3085 17.6991 22.5882 16.2853C22.868 14.8715 22.7244 13.406 22.1757 12.0743C21.6269 10.7425 20.6977 9.60427 19.5054 8.80343Z" fill="#BFF747" fillRule="evenodd"></path><path clipRule="evenodd" d="M8.22754 0.286869C8.22754 1.24398 8.04002 2.19172 7.67567 3.07597C7.31132 3.96022 6.77729 4.76368 6.10406 5.44046C5.43084 6.11724 4.63161 6.65409 3.75199 7.02036C2.87238 7.38662 1.92962 7.57514 0.977539 7.57514L0.977539 14.8634C2.8817 14.8634 4.76723 14.4864 6.52645 13.7538C8.28568 13.0213 9.88416 11.9476 11.2306 10.594C12.577 9.24051 13.6451 7.63359 14.3738 5.86507C15.1025 4.09656 15.4775 2.20108 15.4775 0.286865L8.22754 0.286869Z" fill="#BFF747" fillRule="evenodd"></path></svg> </div>
</div>
<div className="elementskit-commentor-content"><p>The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p></div>
<div className="elementskit-commentor-bio">
<div className="elementkit-commentor-details client_left">
<div className="elementskit-commentor-image ekit-testimonial--avatar">
<img alt="" className="attachment-full size-full" decoding="async" height="60" loading="lazy" sizes="(max-width: 270px) 100vw, 270px" src="/wp-content/uploads/2024/11/author-1-2.webp" srcSet="./wp-content/uploads/2024/11/author-1-2.webp 270w, ./wp-content/uploads/2024/11/author-1-2-150x150.jpg?crop=1 150w" width="60" /> </div>
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
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
<li><a><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></a></li>
</ul>
<div className="elementskit-icon-content elementskit-watermark-icon">
<svg fill="none" height="30" viewBox="0 0 124 30" width="124" xmlns="http://www.w3.org/2000/svg"><path d="M36.7866 19.5857H45.5549V16.9307H39.9031V6.93018H36.7866V19.5857Z" fill="white"></path><path d="M50.7501 17.8168C49.5 17.8168 48.8485 16.7194 48.8485 15.0733C48.8485 13.4272 49.5 12.3121 50.7501 12.3121C52.0002 12.3121 52.6693 13.4272 52.6693 15.0733C52.6693 16.7194 52.0002 17.8168 50.7501 17.8168ZM50.7677 19.87C53.6729 19.87 55.5744 17.7991 55.5744 15.0733C55.5744 12.3475 53.6729 10.2766 50.7677 10.2766C47.8801 10.2766 45.9434 12.3475 45.9434 15.0733C45.9434 17.7991 47.8801 19.87 50.7677 19.87Z" fill="white"></path><path d="M60.6033 22.7186C61.9414 22.7186 63.1211 22.4177 63.9134 21.7097C64.6353 21.0548 65.1107 20.0636 65.1107 18.7007V10.5233H62.364V11.4968H62.3288C61.8005 10.7357 60.9906 10.2578 59.7933 10.2578C57.5572 10.2578 56.0078 12.134 56.0078 14.789C56.0078 17.5679 57.8918 19.0901 59.9166 19.0901C61.0082 19.0901 61.6949 18.6476 62.2231 18.0458H62.2935V18.9485C62.2935 20.0459 61.7829 20.6831 60.568 20.6831C59.6173 20.6831 59.1419 20.276 58.9834 19.7981H56.2015C56.4832 21.692 58.1207 22.7186 60.6033 22.7186ZM60.5857 16.9484C59.5116 16.9484 58.8073 16.0634 58.8073 14.7005C58.8073 13.3199 59.5116 12.4349 60.5857 12.4349C61.7829 12.4349 62.4168 13.4615 62.4168 14.6828C62.4168 15.9572 61.8358 16.9484 60.5857 16.9484Z" fill="white"></path><path d="M70.7579 17.8168C69.5078 17.8168 68.8563 16.7194 68.8563 15.0733C68.8563 13.4272 69.5078 12.3121 70.7579 12.3121C72.008 12.3121 72.6771 13.4272 72.6771 15.0733C72.6771 16.7194 72.008 17.8168 70.7579 17.8168ZM70.7755 19.87C73.6807 19.87 75.5819 17.7991 75.5819 15.0733C75.5819 12.3475 73.6807 10.2766 70.7755 10.2766C67.8879 10.2766 65.9512 12.3475 65.9512 15.0733C65.9512 17.7991 67.8879 19.87 70.7755 19.87Z" fill="white"></path><path d="M76.4204 19.5857H79.2904V10.5233H76.4204V19.5857ZM76.4204 9.26658H79.2904V6.93018H76.4204V9.26658Z" fill="white"></path><path d="M80.5356 22.577H83.4056V18.6476H83.4408C84.0042 19.4087 84.8318 19.8689 85.9938 19.8689C88.3532 19.8689 89.9202 17.9927 89.9202 15.0545C89.9202 12.3287 88.4588 10.2578 86.0643 10.2578C84.8318 10.2578 83.9514 10.8065 83.3352 11.6207H83.2823V10.5233H80.5356V22.577ZM85.2543 17.6387C84.0218 17.6387 83.3176 16.6298 83.3176 15.1607C83.3176 13.6916 83.9514 12.5765 85.2015 12.5765C86.434 12.5765 87.015 13.6031 87.015 15.1607C87.015 16.7006 86.346 17.6387 85.2543 17.6387Z" fill="white"></path><path d="M94.5922 19.8689C96.9515 19.8689 98.6946 18.8423 98.6946 16.8599C98.6946 14.5412 96.8283 14.1341 95.2436 13.8686C94.0992 13.6562 93.078 13.5677 93.078 12.9305C93.078 12.3641 93.6238 12.0986 94.3281 12.0986C95.1204 12.0986 95.6662 12.3464 95.7718 13.1606H98.4129C98.272 11.3729 96.8987 10.2578 94.3457 10.2578C92.2152 10.2578 90.4545 11.249 90.4545 13.1606C90.4545 15.2846 92.1272 15.7094 93.6942 15.9749C94.8915 16.1873 95.9831 16.2758 95.9831 17.09C95.9831 17.6741 95.4373 17.9927 94.5746 17.9927C93.6238 17.9927 93.0251 17.5502 92.9195 16.6475H90.208C90.296 18.6476 91.9511 19.8689 94.5922 19.8689Z" fill="white"></path><path d="M102.594 19.8516C103.844 19.8516 104.636 19.356 105.287 18.471H105.34V19.5861H108.087V10.5237H105.217V15.5859C105.217 16.6656 104.618 17.409 103.632 17.409C102.717 17.409 102.277 16.8603 102.277 15.8691V10.5237H99.4243V16.4709C99.4243 18.4887 100.516 19.8516 102.594 19.8516Z" fill="white"></path><path d="M109.335 19.5857H112.205V14.5058C112.205 13.4261 112.734 12.665 113.632 12.665C114.494 12.665 114.899 13.2314 114.899 14.2049V19.5857H117.769V14.5058C117.769 13.4261 118.28 12.665 119.195 12.665C120.058 12.665 120.463 13.2314 120.463 14.2049V19.5857H123.333V13.6916C123.333 11.6561 122.312 10.2578 120.269 10.2578C119.107 10.2578 118.139 10.7534 117.435 11.8508H117.399C116.942 10.8773 116.044 10.2578 114.864 10.2578C113.561 10.2578 112.698 10.8773 112.135 11.8154H112.082V10.5233H109.335V19.5857Z" fill="white"></path><path clipRule="evenodd" d="M19.5054 8.80343C18.3132 8.0026 16.9114 7.57514 15.4775 7.57514V0.286865C18.3454 0.286865 21.1488 1.14177 23.5333 2.74346C25.9178 4.34514 27.7763 6.62169 28.8738 9.28519C29.9712 11.9487 30.2584 14.8796 29.6989 17.7072C29.1394 20.5347 27.7585 23.132 25.7306 25.1706C23.7027 27.2092 21.1191 28.5974 18.3063 29.1599C15.4936 29.7223 12.5781 29.4336 9.92861 28.3304C7.2791 27.2271 5.01451 25.3588 3.42123 22.9617C1.82795 20.5646 0.977539 17.7464 0.977539 14.8634H8.22754C8.22754 16.3049 8.65275 17.714 9.44938 18.9126C10.246 20.1111 11.3783 21.0453 12.7031 21.5969C14.0278 22.1486 15.4856 22.2929 16.8919 22.0116C18.2983 21.7304 19.5901 21.0363 20.6041 20.017C21.618 18.9977 22.3085 17.6991 22.5882 16.2853C22.868 14.8715 22.7244 13.406 22.1757 12.0743C21.6269 10.7425 20.6977 9.60427 19.5054 8.80343Z" fill="#BFF747" fillRule="evenodd"></path><path clipRule="evenodd" d="M8.22754 0.286869C8.22754 1.24398 8.04002 2.19172 7.67567 3.07597C7.31132 3.96022 6.77729 4.76368 6.10406 5.44046C5.43084 6.11724 4.63161 6.65409 3.75199 7.02036C2.87238 7.38662 1.92962 7.57514 0.977539 7.57514L0.977539 14.8634C2.8817 14.8634 4.76723 14.4864 6.52645 13.7538C8.28568 13.0213 9.88416 11.9476 11.2306 10.594C12.577 9.24051 13.6451 7.63359 14.3738 5.86507C15.1025 4.09656 15.4775 2.20108 15.4775 0.286865L8.22754 0.286869Z" fill="#BFF747" fillRule="evenodd"></path></svg> </div>
</div>
<div className="elementskit-commentor-content"><p>The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p></div>
<div className="elementskit-commentor-bio">
<div className="elementkit-commentor-details client_left">
<div className="elementskit-commentor-image ekit-testimonial--avatar">
<img alt="" className="attachment-full size-full" decoding="async" height="60" loading="lazy" sizes="(max-width: 270px) 100vw, 270px" src="/wp-content/uploads/2024/11/author-2-1-2.webp" srcSet="./wp-content/uploads/2024/11/author-2-1-2.webp 270w, ./wp-content/uploads/2024/11/author-2-1-2-150x150.jpg?crop=1 150w" width="60" /> </div>
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
<svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4.32424 8.01077L16.4964 8.01076L16.4964 10.0105L4.32495 10.0112L9.68835 15.3746L8.27414 16.7888L0.495969 9.01062L8.27414 1.23244L9.68836 2.64666L4.32424 8.01077Z" fill="CurrentColor"></path></svg> </div>
<div className="swiper-navigation-button swiper-button-next">
<svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.6679 10.0102L1.49581 10.0102L1.49581 8.01054L13.6672 8.00982L8.30384 2.64642L9.71805 1.23221L17.4962 9.01038L9.71804 16.7886L8.30383 15.3743L13.6679 10.0102Z" fill="CurrentColor"></path></svg> </div>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6e5998c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6e5998c">
<div className="elementor-element elementor-element-e51b254 e-con-full backdrop-filter e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="e51b254">
<div className="elementor-element elementor-element-dedf1aa e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="dedf1aa" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-582042c elementor-widget elementor-widget-elementskit-pricing" data-e-type="widget" data-element_type="widget" data-id="582042c" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg fill="none" height="40" viewBox="0 0 37 40" width="37" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 28.5278V31.4135" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 14.2134V16.8991" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5002 38.4422C28.5002 38.4422 35.6431 34.8993 35.6431 27.0136C35.6431 18.4422 31.3574 12.7279 22.7859 8.44219L26.1574 4.09933C26.3287 3.81439 26.4216 3.48923 26.4267 3.15681C26.4318 2.8244 26.3489 2.49654 26.1865 2.20647C26.024 1.9164 25.7878 1.67443 25.5017 1.50508C25.2156 1.33574 24.8898 1.24504 24.5574 1.24219H12.4431C12.1106 1.24504 11.7849 1.33574 11.4988 1.50508C11.2127 1.67443 10.9764 1.9164 10.814 2.20647C10.6516 2.49654 10.5687 2.8244 10.5738 3.15681C10.5789 3.48923 10.6718 3.81439 10.8431 4.09933L14.2145 8.47076C5.64313 12.785 1.35742 18.4993 1.35742 27.0708C1.35742 34.8993 8.50024 38.4422 18.5002 38.4422Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M15.6435 27.2135C15.9921 27.6273 16.4308 27.9558 16.9261 28.1737C17.4214 28.3916 17.96 28.4932 18.5006 28.4706C19.3269 28.527 20.1429 28.2607 20.7769 27.7279C21.411 27.1951 21.8138 26.4372 21.9006 25.6135C21.8138 24.7898 21.411 24.0319 20.7769 23.4991C20.1429 22.9663 19.3269 22.7 18.5006 22.7564C17.6743 22.8127 16.8583 22.5464 16.2243 22.0136C15.5902 21.4808 15.1874 20.7229 15.1006 19.8992C15.1804 19.0727 15.5813 18.3104 16.217 17.7762C16.8527 17.2419 17.6727 16.9784 18.5006 17.0421C19.0317 17.0096 19.5634 17.0952 20.0574 17.2928C20.5515 17.4904 20.9956 17.7951 21.3577 18.1849" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
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
<a className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-" href="#">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-a28c504 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="a28c504" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-eb59322 elementor-widget elementor-widget-elementskit-pricing" data-e-type="widget" data-element_type="widget" data-id="eb59322" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg fill="none" height="40" viewBox="0 0 39 40" width="39" xmlns="http://www.w3.org/2000/svg"><path d="M36.3859 15.6138H2.61447C1.01447 15.6138 0.328755 13.8709 1.5859 13.0423L18.4716 1.98518C18.7833 1.80179 19.1384 1.70508 19.5001 1.70508C19.8618 1.70508 20.217 1.80179 20.5287 1.98518L37.4144 13.0423C38.6716 13.8709 37.9859 15.6138 36.3859 15.6138Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M36.643 31.3281H2.35728C1.5683 31.3281 0.928711 31.9677 0.928711 32.7567V37.0424C0.928711 37.8314 1.5683 38.471 2.35728 38.471H36.643C37.4319 38.471 38.0715 37.8314 38.0715 37.0424V32.7567C38.0715 31.9677 37.4319 31.3281 36.643 31.3281Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M5.21436 15.6138V31.3281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.3569 15.6138V31.3281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.5 15.6138V31.3281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M26.6431 15.6138V31.3281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M33.7856 15.6138V31.3281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
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
<a className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-" href="#">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-1690d8b e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="1690d8b" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-220613b elementor-widget elementor-widget-elementskit-pricing" data-e-type="widget" data-element_type="widget" data-id="220613b" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg fill="none" height="39" viewBox="0 0 40 39" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M35.5617 3.93506L25.8188 13.6779" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M4.13281 3.93506L13.8757 13.6779" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M4.13281 35.364L13.8757 25.6211" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M35.5617 35.364L25.8188 25.6211" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.8473 38.221C30.104 38.221 38.4187 29.9063 38.4187 19.6496C38.4187 9.39281 30.104 1.07812 19.8473 1.07812C9.5906 1.07812 1.27588 9.39281 1.27588 19.6496C1.27588 29.9063 9.5906 38.221 19.8473 38.221Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.8475 28.0783C24.5025 28.0783 28.2761 24.3047 28.2761 19.6498C28.2761 14.9948 24.5025 11.2212 19.8475 11.2212C15.1925 11.2212 11.4189 14.9948 11.4189 19.6498C11.4189 24.3047 15.1925 28.0783 19.8475 28.0783Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
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
<a className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-" href="#">
</a>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-12821a4 e-con-full testimonial-benefits-item e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="12821a4" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-8bb3737 elementor-widget elementor-widget-elementskit-pricing" data-e-type="widget" data-element_type="widget" data-id="8bb3737" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-pricing.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="elementskit-single-pricing">
<div className="elementskit-pricing-header">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M12.8574 21.3281H10.0002C8.42225 21.3281 7.14307 22.6073 7.14307 24.1853V35.6138C7.14307 37.1918 8.42225 38.471 10.0002 38.471H12.8574C14.4353 38.471 15.7145 37.1918 15.7145 35.6138V24.1853C15.7145 22.6073 14.4353 21.3281 12.8574 21.3281Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M29.9999 21.3281H27.1428C25.5648 21.3281 24.2856 22.6073 24.2856 24.1853V35.6138C24.2856 37.1918 25.5648 38.471 27.1428 38.471H29.9999C31.5779 38.471 32.8571 37.1918 32.8571 35.6138V24.1853C32.8571 22.6073 31.5779 21.3281 29.9999 21.3281Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M1.42871 27.0424V19.8996C1.42871 14.9741 3.38534 10.2504 6.86816 6.76758C10.351 3.28476 15.0747 1.32813 20.0001 1.32812C24.9256 1.32813 29.6493 3.28476 33.1321 6.76758C36.6149 10.2504 38.5716 14.9741 38.5716 19.8996V27.0424" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
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
<a className="elementskit-pricing-btn ekit-pricing-btn-icon-pos-" href="#">
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
<div className="elementor-element elementor-element-48a6226 agency-benefits e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="48a6226">
<div className="e-con-inner">
<div className="elementor-element elementor-element-6e14f78 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6e14f78">
<div className="elementor-element elementor-element-96e4a96 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="96e4a96">
<div className="elementor-element elementor-element-52e7b95 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="52e7b95" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">KEY BENEFITS</h2> </div>
</div>
<div className="elementor-element elementor-element-6733b94 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6733b94" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Discover the <span>benefits</span> of choosing us today</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-a777452 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a777452">
<div className="elementor-element elementor-element-e146ba4 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="e146ba4" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Experience unparalleled creativity, data-driven strategies, and dedicated support that drive real results for your brand.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c97c631 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="c97c631">
<div className="elementor-element elementor-element-6d39048 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="6d39048" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
<div className="elementor-element elementor-element-c32d88c at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="c32d88c" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">01</h2> </div>
</div>
<div className="elementor-element elementor-element-1edb416 elementor-tablet-position-block-start elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="1edb416" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="60" viewBox="0 0 61 60" width="61" xmlns="http://www.w3.org/2000/svg"><path d="M40.7464 6.42856H47.1749C48.3116 6.42856 49.4017 6.88009 50.2054 7.68381C51.0091 8.48754 51.4607 9.57763 51.4607 10.7143V53.5714C51.4607 54.7081 51.0091 55.7981 50.2054 56.6019C49.4017 57.4056 48.3116 57.8571 47.1749 57.8571H12.8892C11.7526 57.8571 10.6625 57.4056 9.85877 56.6019C9.05504 55.7981 8.60352 54.7081 8.60352 53.5714V10.7143C8.60352 9.57763 9.05504 8.48754 9.85877 7.68381C10.6625 6.88009 11.7526 6.42856 12.8892 6.42856H19.3178" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M36.4602 2.14285H23.6031C21.2362 2.14285 19.3174 4.06163 19.3174 6.42857V8.57142C19.3174 10.9384 21.2362 12.8571 23.6031 12.8571H36.4602C38.8272 12.8571 40.746 10.9384 40.746 8.57142V6.42857C40.746 4.06163 38.8272 2.14285 36.4602 2.14285Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 23.5714H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 34.2857H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 45H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Personalized Approach						</span>
</h3>
<p className="elementor-icon-box-description">
						We customize strategies to fit your brand's specific needs, ensuring alignment.					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a9673ce e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="a9673ce" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
<div className="elementor-element elementor-element-0b389f7 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="0b389f7" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">02</h2> </div>
</div>
<div className="elementor-element elementor-element-f75daca elementor-tablet-position-block-start elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="f75daca" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="61" viewBox="0 0 60 61" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M22.4143 10.2754L24.2571 5.51825C24.5679 4.71281 25.1147 4.02001 25.8259 3.53059C26.5371 3.04116 27.3795 2.77794 28.2428 2.77539H31.7571C32.6204 2.77794 33.4629 3.04116 34.174 3.53059C34.8852 4.02001 35.432 4.71281 35.7428 5.51825L37.5857 10.2754L43.8428 13.8754L48.9 13.104C49.742 12.9897 50.5991 13.1283 51.3622 13.5022C52.1253 13.8761 52.76 14.4685 53.1857 15.204L54.9 18.204C55.3393 18.9512 55.5416 19.814 55.4804 20.6786C55.4192 21.5432 55.0973 22.369 54.5571 23.0468L51.4285 27.0325V34.2325L54.6428 38.2182C55.183 38.8961 55.5049 39.7218 55.5661 40.5864C55.6274 41.451 55.425 42.3139 54.9857 43.0611L53.2714 46.0611C52.8457 46.7966 52.211 47.3889 51.4479 47.7629C50.6848 48.1368 49.8278 48.2754 48.9857 48.1611L43.9285 47.3897L37.6714 50.9897L35.8285 55.7468C35.5178 56.5523 34.971 57.2451 34.2598 57.7345C33.5486 58.2239 32.7061 58.4871 31.8428 58.4897H28.2428C27.3795 58.4871 26.5371 58.2239 25.8259 57.7345C25.1147 57.2451 24.5679 56.5523 24.2571 55.7468L22.4143 50.9897L16.1571 47.3897L11.1 48.1611C10.2579 48.2754 9.40086 48.1368 8.63775 47.7629C7.87465 47.3889 7.23993 46.7966 6.81426 46.0611L5.09997 43.0611C4.66069 42.3139 4.4583 41.451 4.51951 40.5864C4.58072 39.7218 4.90266 38.8961 5.44283 38.2182L8.5714 34.2325V27.0325L5.35711 23.0468C4.81694 22.369 4.49501 21.5432 4.4338 20.6786C4.37259 19.814 4.57498 18.9512 5.01426 18.204L6.72854 15.204C7.15421 14.4685 7.78893 13.8761 8.55204 13.5022C9.31514 13.1283 10.1722 12.9897 11.0143 13.104L16.0714 13.8754L22.4143 10.2754Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M30 43.4897C37.1008 43.4897 42.8571 37.7333 42.8571 30.6325C42.8571 23.5317 37.1008 17.7754 30 17.7754C22.8992 17.7754 17.1428 23.5317 17.1428 30.6325C17.1428 37.7333 22.8992 43.4897 30 43.4897Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M30 17.7754V30.6325H42.8571" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M30.0005 30.6328L20.9148 39.7185" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Experienced Team						</span>
</h3>
<p className="elementor-icon-box-description">
						Combines industry knowledge and creativity to exceptional results for your brand.					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-de01684 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="de01684" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
<div className="elementor-element elementor-element-b5c61b3 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="b5c61b3" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">03</h2> </div>
</div>
<div className="elementor-element elementor-element-8f7147c elementor-tablet-position-block-start elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="8f7147c" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="60" viewBox="0 0 61 60" width="61" xmlns="http://www.w3.org/2000/svg"><path d="M40.7464 6.42856H47.1749C48.3116 6.42856 49.4017 6.88009 50.2054 7.68381C51.0091 8.48754 51.4607 9.57763 51.4607 10.7143V53.5714C51.4607 54.7081 51.0091 55.7981 50.2054 56.6019C49.4017 57.4056 48.3116 57.8571 47.1749 57.8571H12.8892C11.7526 57.8571 10.6625 57.4056 9.85877 56.6019C9.05504 55.7981 8.60352 54.7081 8.60352 53.5714V10.7143C8.60352 9.57763 9.05504 8.48754 9.85877 7.68381C10.6625 6.88009 11.7526 6.42856 12.8892 6.42856H19.3178" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M36.4602 2.14285H23.6031C21.2362 2.14285 19.3174 4.06163 19.3174 6.42857V8.57142C19.3174 10.9384 21.2362 12.8571 23.6031 12.8571H36.4602C38.8272 12.8571 40.746 10.9384 40.746 8.57142V6.42857C40.746 4.06163 38.8272 2.14285 36.4602 2.14285Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 23.5714H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 34.2857H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M19.3174 45H40.746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Data-Driven Decisions						</span>
</h3>
<p className="elementor-icon-box-description">
						We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.					</p>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-9cba014 e-con-full backdrop-filter e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="9cba014" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-843f5f2 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="843f5f2" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">04</h2> </div>
</div>
<div className="elementor-element elementor-element-b6cb295 elementor-tablet-position-block-start elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="b6cb295" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg fill="none" height="61" viewBox="0 0 60 61" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M6.42878 26.3467H10.7145C11.2828 26.3467 11.8279 26.5724 12.2297 26.9743C12.6316 27.3762 12.8574 27.9212 12.8574 28.4895V39.2038C12.8574 39.7721 12.6316 40.3172 12.2297 40.7191C11.8279 41.1209 11.2828 41.3467 10.7145 41.3467H6.42878C5.29214 41.3467 4.20205 40.8951 3.39832 40.0914C2.5946 39.2877 2.14307 38.1976 2.14307 37.061V30.6324C2.14307 29.4958 2.5946 28.4057 3.39832 27.6019C4.20205 26.7982 5.29214 26.3467 6.42878 26.3467V26.3467Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M53.5717 41.3467H49.286C48.7177 41.3467 48.1726 41.1209 47.7708 40.7191C47.3689 40.3172 47.1431 39.7721 47.1431 39.2038V28.4895C47.1431 27.9212 47.3689 27.3762 47.7708 26.9743C48.1726 26.5724 48.7177 26.3467 49.286 26.3467H53.5717C54.7083 26.3467 55.7984 26.7982 56.6022 27.6019C57.4059 28.4057 57.8574 29.4958 57.8574 30.6324V37.061C57.8574 38.1976 57.4059 39.2877 56.6022 40.0914C55.7984 40.8951 54.7083 41.3467 53.5717 41.3467V41.3467Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M40.7144 53.1324C42.9876 53.1324 45.1678 52.2293 46.7753 50.6219C48.3827 49.0144 49.2858 46.8342 49.2858 44.561V41.3467" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M35.3575 47.7754C36.7783 47.7754 38.1409 48.3398 39.1456 49.3445C40.1502 50.3491 40.7146 51.7117 40.7146 53.1325C40.7146 54.5533 40.1502 55.9159 39.1456 56.9206C38.1409 57.9253 36.7783 58.4897 35.3575 58.4897H28.9289C27.5081 58.4897 26.1455 57.9253 25.1408 56.9206C24.1362 55.9159 23.5718 54.5533 23.5718 53.1325C23.5718 51.7117 24.1362 50.3491 25.1408 49.3445C26.1455 48.3398 27.5081 47.7754 28.9289 47.7754H35.3575Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.7144 26.3468V22.0611C10.7144 16.9462 12.7462 12.0408 16.363 8.42404C19.9798 4.80727 24.8852 2.77539 30.0001 2.77539C35.115 2.77539 40.0204 4.80727 43.6371 8.42404C47.2539 12.0408 49.2858 16.9462 49.2858 22.0611V26.3468" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M23.5718 17.7754V24.204" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M36.4287 17.7754V24.204" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M23.5718 32.7754C23.5718 38.4754 36.4289 38.4754 36.4289 32.7754" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Ongoing Support						</span>
</h3>
<p className="elementor-icon-box-description">
						We provide continuous support and maintenance to keep your digital assets at their best.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-23d1005 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="23d1005">
<div className="e-con-inner">
<div className="elementor-element elementor-element-eba3c7f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="eba3c7f">
<div className="elementor-element elementor-element-bb3cc4c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="bb3cc4c">
<div className="elementor-element elementor-element-ea3c877 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ea3c877" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">LATEST NEWS</h2> </div>
</div>
<div className="elementor-element elementor-element-b862add at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="b862add" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Insights on digital <span>innovation</span> and growth</h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-f76ed54 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f76ed54">
<div className="elementor-element elementor-element-fcb85d6 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="fcb85d6" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive in a rapidly evolving digital landscape.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-532a45a e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="532a45a">
<div className="elementor-element elementor-element-10438dc our-blog elementor-invisible elementor-widget elementor-widget-elementskit-blog-posts" data-e-type="widget" data-element_type="widget" data-id="10438dc" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-blog-posts.default">
<div className="elementor-widget-container">
<div className="ekit-wid-con">
<div className="row post-items ekit-blog-posts-content wihout-masonry" data-enable="no" id="post-items--10438dc">
{/* Blog Carousel markup render */}
<div className="col-lg-4 col-md-6">
<div className="elementskit-post-image-card">
<div className="elementskit-entry-header">
</div>{/* .elementskit-entry-header END */}
<div className="elementskit-post-body">
<h2 className="entry-title">
<a href="./index.html?p=1">
                            Hello world!                    </a>
</h2>
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./index.html?p=1">
                                            Read More                                            <svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>{/* .elementskit-post-body END */}
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="elementskit-post-image-card">
<div className="elementskit-entry-header">
<a className="elementskit-entry-thumb" href="./index.html?p=4660">
<img alt="UI/UX Design Principles for Better User Engagement" decoding="async" src="/wp-content/uploads/2024/11/post-1-3.webp" />
</a>{/* .elementskit-entry-thumb END */}
</div>{/* .elementskit-entry-header END */}
<div className="elementskit-post-body">
<h2 className="entry-title">
<a href="./index.html?p=4660">
                            UI/UX Design Principles for Better User Engagement                    </a>
</h2>
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./index.html?p=4660">
                                            Read More                                            <svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>{/* .elementskit-post-body END */}
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="elementskit-post-image-card">
<div className="elementskit-entry-header">
<a className="elementskit-entry-thumb" href="./index.html?p=4649">
<img alt="Why Your Business Needs a Mobile-Optimized Website" decoding="async" src="/wp-content/uploads/2024/11/post-2-3.webp" />
</a>{/* .elementskit-entry-thumb END */}
</div>{/* .elementskit-entry-header END */}
<div className="elementskit-post-body">
<h2 className="entry-title">
<a href="./index.html?p=4649">
                            Why Your Business Needs a Mobile-Optimized Website                    </a>
</h2>
<div className="btn-wraper">
<a className="elementskit-btn whitespace--normal" href="./index.html?p=4649">
                                            Read More                                            <svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg> </a>
</div>
</div>{/* .elementskit-post-body END */}
</div>
</div> </div>
</div> </div>
</div>
</div>
</div>
</div>
</div>
  );
}
