"use client";

import React, { useEffect, useState } from "react";

const HERO_WORDS = ["Social Marketing", "Art & Design", "Digital World"];
const HERO_TITLE_HOLD_MS = 2500;
const HERO_TITLE_REVEAL_MS = 600;
const HERO_TITLE_REVEAL_PAUSE_MS = 1500;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [isHeroWordClipped, setIsHeroWordClipped] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    let isActive = true;
    let clipTimer: number;
    let switchTimer: number;
    let nextTimer: number;

    const runHeroTitleCycle = () => {
      clipTimer = window.setTimeout(() => {
        if (!isActive) {
          return;
        }

        setIsHeroWordClipped(true);

        switchTimer = window.setTimeout(() => {
          if (!isActive) {
            return;
          }

          setHeroWordIndex((index) => (index + 1) % HERO_WORDS.length);
          setIsHeroWordClipped(false);
          nextTimer = window.setTimeout(runHeroTitleCycle, HERO_TITLE_REVEAL_MS + HERO_TITLE_REVEAL_PAUSE_MS);
        }, HERO_TITLE_REVEAL_MS);
      }, HERO_TITLE_HOLD_MS);
    };

    runHeroTitleCycle();

    return () => {
      isActive = false;
      window.clearTimeout(clipTimer);
      window.clearTimeout(switchTimer);
      window.clearTimeout(nextTimer);
    };
  }, [mounted]);

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
<div className="elementor-element elementor-element-3db5f57 custome-fancy-text brandexa-hero-fancy-text elementor-widget" data-e-type="widget" data-element_type="widget" data-id="3db5f57" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}">
<div className="elementor-widget-container">
<div className="ekit-wid-con"> <h1 className="ekit-fancy-text clip is-full-width brandexa-hero-title">
<span className="ekit-fancy-prefix-text">
				Innovative solutions for			</span>
<span className={`ekit-fancy-text-lists brandexa-fancy-word-list${isHeroWordClipped ? " is-clipping" : ""}`} style={{ "--brandexa-word-width": `${HERO_WORDS[heroWordIndex].length + 1}ch` } as React.CSSProperties} aria-live="polite">
{HERO_WORDS.map((word, index) => (
<b className={`ekit-fancy-text elementor-repeater-item-${index}${index === heroWordIndex ? " is-visible" : " is-hidden"}`} key={word}>{word}</b>
))}
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
<a className="brandexa-hero-cta" data-consultation-trigger="true" href="#book-consultation">
<span className="brandexa-hero-cta__label">Book a Free Consultation</span>
<span aria-hidden="true" className="brandexa-hero-cta__arrow">
<svg fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg>
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
<a className="elementor-button elementor-button-link elementor-size-sm" href="/services">
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
<a className="elementor-icon" href="/services/branding-and-identity">
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
<a className="elementor-icon" href="/services/digital-marketing">
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
<a className="elementor-icon" href="/services/creative-content-production">
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
<section className="brandexa-social-section" aria-labelledby="brandexa-social-title">
<div className="brandexa-social-inner">
<div className="brandexa-social-top">
<div className="brandexa-social-heading">
<p className="brandexa-section-kicker" id="brandexa-social-title">JOIN AGENCY</p>
<h2>Join our <span>agency</span> of creative innovators</h2>
</div>
<p className="brandexa-social-copy">Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.</p>
</div>
<div className="brandexa-social-grid">
{[
  {
    name: "LinkedIn",
    title: "Join Us On LinkedIn",
    handle: "@brandexagrowth",
    href: "https://www.linkedin.com/company/brandexagrowth/?viewAsMember=true",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    ),
  },
  {
    name: "Facebook",
    title: "Follow On Facebook",
    handle: "@brandexagrowth",
    href: "https://www.facebook.com/brandexagrowth/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
    ),
  },
  {
    name: "YouTube",
    title: "Follow On YouTube",
    handle: "@brandexagrowth",
    href: "https://www.youtube.com/@brandexagrowth",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C14.999 166.945 15 256 15 256s-.001 89.055 11.345 131.917c6.281 23.65 24.787 42.276 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.322 42.003-24.947 48.284-48.597C561.001 345.055 561 256 561 256s.001-89.055-11.345-131.917zM232 334V178l142 78-142 78z"></path></svg>
    ),
  },
  {
    name: "Instagram",
    title: "Follow On Instagram",
    handle: "@brandexagrowth",
    href: "https://www.instagram.com/brandexagrowth/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
    ),
  },
].map((social) => (
<a className="brandexa-social-card" href={social.href} key={social.name} rel="noopener noreferrer" target="_blank">
<span className="brandexa-social-icon">{social.icon}</span>
<span className="brandexa-social-text">
<span>{social.title}</span>
<strong>{social.handle}</strong>
</span>
<span className="brandexa-social-arrow" aria-hidden="true">
<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
))}
</div>
</div>
</section>
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
<a className="elementskit-entry-thumb" href="./index.html?p=1">
<img alt="Web Development Strategies for Modern Business Growth" decoding="async" src="/wp-content/uploads/2024/11/post-3-2.webp" />
</a>{/* .elementskit-entry-thumb END */}
</div>{/* .elementskit-entry-header END */}
<div className="elementskit-post-body">
<h2 className="entry-title">
<a href="./index.html?p=1">
                            Web Development Strategies for Modern Business Growth                    </a>
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
