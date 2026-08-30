"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DynamicHomePortfolioSection, DynamicHomeBlogsSection } from "@/components/admin/DynamicPublicSections";

const HERO_WORDS = ["Growth", "Leads", "Revenue"];
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
				We Turn Attention Into			</span>
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
<p>We help ambitious brands grow online through scroll-stopping content, high-performing social media, conversion-focused websites, and data-driven advertising. From building your online presence to generating qualified leads, we create digital systems designed to move your business forward.</p> </div>
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
{[
  "Social Media Management",
  "Short-Form Video Editing",
  "AI UGC Content",
  "Meta Ads",
  "Lead Generation",
  "Website Development",
  "Performance Marketing",
  "Social Media Management",
  "Short-Form Video Editing",
  "AI UGC Content",
  "Meta Ads",
  "Lead Generation",
  "Website Development",
  "Performance Marketing",
].map((item, i) => (
  <div className="ekit-marquee-item ticker-item" key={i}>
    <img alt="" className="attachment-full size-full wp-image-345" decoding="async" height="25" src="/wp-content/uploads/2024/11/asterisk-icon-2.svg" width="24" />
    <div className="ekit-title-and-description">
      <a>{item}</a>
    </div>
  </div>
))}
</div>
</div>
</div>
</div>
</div>
</div> </div>
</div>
</div>
<div className="elementor-element elementor-element-b55c785 about-agency e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="b55c785">
<div className="e-con-inner">
<div className="elementor-element elementor-element-badd256 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="badd256">
<div className="elementor-element elementor-element-7dd56ae e-con-full sticky-column e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7dd56ae">
<div className="elementor-element elementor-element-0c0e379 section-title at-heading-animation at-animation-heading-none elementor-invisible elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="0c0e379" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">ABOUT OUR SYSTEM</h2> </div>
</div>
<div className="elementor-element elementor-element-984c2fd at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="984c2fd" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">We Don&apos;t Just Post. <span>We Engineer Profitable Growth Engines.</span></h2> </div>
</div>
<div className="elementor-element elementor-element-ef1816f elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="ef1816f" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="/contact">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Join Our Partnership</span>
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
<span>ROI-First Strategy</span>
</h3>
<p className="elementor-icon-box-description">
We ignore vanity metrics. Everything we execute—from creative assets to funnel architecture—is built exclusively to drive scalable leads and bottom-line revenue.
</p>
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
<span>Conversion-Driven Creative</span>
</h3>
<p className="elementor-icon-box-description">
We craft content specifically engineered to capture attention in the feed, optimize click-through rates, and convert prospects into qualified leads.
</p>
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
<span>Unified Marketing System</span>
</h3>
<p className="elementor-icon-box-description">
We remove the friction of working with multiple vendors. We integrate your creative, media, and tech stack into one cohesive growth machine.
</p>
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
<span>Transparent Accountability</span>
</h3>
<p className="elementor-icon-box-description">
We build every campaign around clear, measurable outcomes. You will always know how your investment is performing and exactly where the growth is coming from.
</p>
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
<h2 className="elementor-heading-title elementor-size-default">The Full-Stack <span>Digital Growth System</span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-4135222 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4135222">
<div className="elementor-element elementor-element-70ca73a elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="70ca73a" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We provide the specialized services your brand needs to scale, managed by one cohesive team focused on the same business targets.</p> </div>
</div>
<div className="elementor-element elementor-element-26328bc elementor-invisible elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="26328bc" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="/services">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg> </span>
<span className="elementor-button-text">Explore Our Growth Solutions</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-3edb675 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3edb675">
{[
  {
    id: "svc-smm",
    href: "/services/social-media-management",
    title: "Social Media Management",
    desc: "We manage your daily presence, community interaction, and content programming to turn your social channels into active growth channels.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="50" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="45" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="50" cy="45" r="6" stroke="currentColor" strokeWidth="1.5"/><line stroke="currentColor" strokeWidth="1.5" x1="16" y1="23" x2="24" y2="27"/><line stroke="currentColor" strokeWidth="1.5" x1="36" y1="27" x2="44" y2="23"/><line stroke="currentColor" strokeWidth="1.5" x1="16" y1="42" x2="24" y2="35"/><line stroke="currentColor" strokeWidth="1.5" x1="36" y1="35" x2="44" y2="42"/></svg>,
  },
  {
    id: "svc-video",
    href: "/services/short-form-video-editing",
    title: "High-Retention Video",
    desc: "Editing designed for the modern attention span. We craft Reels, TikToks, and Shorts that drive views and lead to meaningful conversions.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><rect height="38" rx="4" stroke="currentColor" strokeWidth="1.5" width="42" x="5" y="11"/><path d="M25 22l14 8-14 8V22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    id: "svc-ugc",
    href: "/services/ai-ugc-content",
    title: "Strategic AI Content",
    desc: "Scalable creative assets designed for ad performance. We blend human-led creative direction with modern AI tools to iterate and test creatives faster.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><rect height="38" rx="4" stroke="currentColor" width="1.5" x="9" y="11"/><circle cx="30" cy="28" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M18 49c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: "svc-meta",
    href: "/services/paid-social-meta-ads",
    title: "Performance Meta Ads",
    desc: "Precision media buying focused on ROI. We manage your full-funnel ad strategy to ensure every dollar spent drives qualified leads and sales.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M10 42V30c0-11.046 8.954-20 20-20s20 8.954 20 20v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 42c0 4.418 3.582 8 8 8h4V34h-4c-4.418 0-8 3.582-8 8z" stroke="currentColor" strokeWidth="1.5"/><path d="M50 42c0 4.418-3.582 8-8 8h-4V34h4c4.418 0 8 3.582 8 8z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    id: "svc-lead",
    href: "/services/lead-generation",
    title: "Lead Generation Systems",
    desc: "We build entire lead-generation funnels, from landing pages and lead magnets to automated nurture sequences that your sales team can actually sell to.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M30 8l5 14h14l-11 8 4 14-12-9-12 9 4-14L11 22h14l5-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    id: "svc-web",
    href: "/services/website-design-development",
    title: "Conversion-Focused Web",
    desc: "Your website shouldn't just look good—it should be a primary sales driver. We build fast, responsive, and conversion-optimized sites.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><rect height="42" rx="4" stroke="currentColor" strokeWidth="1.5" width="50" x="5" y="9"/><line stroke="currentColor" strokeWidth="1.5" x1="5" y1="21" x2="55" y2="21"/><circle cx="14" cy="15" r="2" fill="currentColor"/><circle cx="22" cy="15" r="2" fill="currentColor"/><circle cx="30" cy="15" r="2" fill="currentColor"/><path d="M18 33h24M18 40h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: "svc-perf",
    href: "/services/performance-marketing-analytics",
    title: "Marketing Analytics & Growth",
    desc: "We track the metrics that actually move the needle, giving you full visibility into your customer acquisition cost and lifetime value.",
    icon: <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M8 48L20 32l10 8 10-16 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="52" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
].map((svc, idx) => (
  <div className="elementor-element elementor-element-3ee705f e-con-full service-item backdrop-filter e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id={svc.id} data-settings={`{"background_background":"classic","animation":"fadeInUp","animation_delay":${idx * 100}}`} key={svc.id}>
    <div className="elementor-element elementor-element-1e99c43 service-top-row e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container">
      <div className="elementor-element elementor-element-ef6a159 service-item-icon elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <div className="elementor-icon">{svc.icon}</div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-4308116 service-item-btn elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <a className="elementor-icon" href={svc.href}>
              <svg fill="currentColor" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-a1e75a1 service-bottom-row e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container">
      <div className="elementor-element elementor-element-1235a9e ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-e-type="widget" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
        <div className="elementor-widget-container">
          <div className="ekit-wid-con">
            <a className="ekit_global_links" href={svc.href}>
              <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                <div className="box-body">
                  <h3 className="elementskit-info-box-title">{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
<div className="elementor-element elementor-element-655574c e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="655574c" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
<div className="elementor-element elementor-element-36b2cfd service-footer elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="36b2cfd" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>From attention to leads to growth — let&apos;s build your digital system. <a data-consultation-trigger="true" href="#book-consultation">Book a Free Consultation</a></p> </div>
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
<h2 className="elementor-heading-title elementor-size-default">We Turn Data Into <span>Predictable Revenue</span></h2> </div>
</div>
<div className="elementor-element elementor-element-3bce9a0 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3bce9a0">
<div className="elementor-element elementor-element-2f0afe9 elementor-widget__width-initial success-counter-item elementor-widget elementor-widget-counter" data-e-type="widget" data-element_type="widget" data-id="2f0afe9" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-title">Conversion optimization lift on average for our partners.</div> <div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix">+</span>
<span className="elementor-counter-number" data-delimiter="," data-duration="2000" data-from-value="0" data-to-value="65">0</span>
<span className="elementor-counter-number-suffix">%</span>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d7e5338 elementor-widget__width-initial success-counter-item elementor-widget elementor-widget-counter" data-e-type="widget" data-element_type="widget" data-id="d7e5338" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="counter.default">
<div className="elementor-widget-container">
<div className="elementor-counter">
<div className="elementor-counter-title">Cost per lead reduction through targeted campaign testing.</div> <div className="elementor-counter-number-wrapper">
<span className="elementor-counter-number-prefix">-</span>
<span className="elementor-counter-number" data-delimiter="," data-duration="2000" data-from-value="0" data-to-value="40">0</span>
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
<span className="elementor-icon-list-text"><strong>Full-Funnel Ownership:</strong> We don't stop at leads. We optimize the entire path from ad creative to closed revenue.</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.638 9.86031L9.8713 7.99746L14.6794 6.13461C14.9281 6.05182 15.0939 5.76204 15.0525 5.51366C14.9696 4.9755 14.7209 4.47874 14.4307 4.02338C14.182 3.52662 13.8504 3.11265 13.436 2.74008C13.2287 2.5745 12.9386 2.5745 12.7313 2.74008L8.71072 5.96902L9.53971 0.877236C9.62261 0.58746 9.45681 0.33908 9.20811 0.256287C8.71072 0.0493038 8.13043 -0.0334888 7.59158 0.0079078C7.05274 -0.0334888 6.47245 0.0493038 5.97506 0.256287C5.72636 0.33908 5.56057 0.628857 5.64347 0.877236L6.47245 5.96902L2.45186 2.74008C2.24461 2.5331 1.95447 2.5331 1.74722 2.74008C1.33273 3.07126 1.00113 3.52662 0.752437 4.02338C0.420841 4.47874 0.213593 4.9755 0.0892453 5.51366C0.0477959 5.80344 0.213594 6.05182 0.46229 6.13461L5.18752 7.99746L0.379391 9.86031C0.130695 9.9431 -0.0351017 10.2329 0.00634774 10.4813C0.0892465 11.0194 0.296494 11.5162 0.628089 11.9715C0.876785 12.4683 1.20838 12.8823 1.62287 13.2548C1.83012 13.4204 2.12027 13.4204 2.32751 13.2548L6.3481 10.0259L5.51912 15.1177C5.43622 15.4075 5.60202 15.6558 5.85071 15.78C6.38955 15.9456 6.9284 16.0284 7.46724 15.987C8.00608 16.0284 8.58637 15.9456 9.08377 15.78C9.33246 15.6972 9.49826 15.4075 9.41536 15.1177L8.58637 10.0259L12.607 13.2548C12.8142 13.4204 13.1044 13.4204 13.3531 13.2548C13.7675 12.9237 14.0991 12.5097 14.3478 12.0129C14.6794 11.5576 14.8867 11.0608 15.011 10.5227C15.0525 10.1915 14.9281 9.9431 14.638 9.86031Z"></path></svg> </span>
<span className="elementor-icon-list-text"><strong>Continuous Optimization:</strong> We treat every campaign as a test, constantly iterating based on real-world performance.</span>
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
<h2 className="elementor-heading-title elementor-size-default">WHY CHOOSE US</h2> </div>
</div>
<div className="elementor-element elementor-element-e53cb4b at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="e53cb4b" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Your Growth <span>Engineering Partner</span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-19ff876 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="19ff876">
<div className="elementor-element elementor-element-5ce3831 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="5ce3831" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We provide the strategic framework for digital growth. By aligning your content strategy with performance-based advertising, we turn digital channels into repeatable systems for your business.</p> </div>
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
<span>Data-Backed Optimization</span>
</h3>
<p className="elementor-icon-box-description">
We use real-time performance data to identify bottlenecks and scale winners, removing guesswork from your growth strategy.
</p>
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
<span>High-Conversion Creative</span>
</h3>
<p className="elementor-icon-box-description">
Our creative assets are specifically designed to meet your audience where they are, stop them mid-scroll, and guide them toward a conversion.
</p>
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
<span>Tailored Growth Systems</span>
</h3>
<p className="elementor-icon-box-description">
We do not use cookie-cutter plans. We build custom-tailored digital ecosystems designed for your specific business model and revenue goals.
</p>
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
<p className="brandexa-section-kicker" id="brandexa-social-title">JOIN OUR NETWORK</p>
<h2>Join our community of <span>growth innovators</span></h2>
</div>
<p className="brandexa-social-copy">Stay connected for daily insights on digital growth, performance marketing, and creative strategy.</p>
</div>
<div className="brandexa-social-grid">
{[
  {
    name: "LinkedIn",
    title: "Connect On LinkedIn",
    handle: "@brandexagrowth",
    href: "https://www.linkedin.com/company/brandexagrowth/?viewAsMember=true",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    ),
  },
  {
    name: "Facebook",
    title: "Join Us On Facebook",
    handle: "@brandexagrowth",
    href: "https://www.facebook.com/brandexagrowth/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
    ),
  },
  {
    name: "YouTube",
    title: "Watch On YouTube",
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
<h2 className="elementor-heading-title elementor-size-default">OUR PROCESS</h2> </div>
</div>
<div className="elementor-element elementor-element-97b0b68 at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="97b0b68" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Growth Engineered For <span>Scalable Results.</span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-8cd393b e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8cd393b">
<div className="elementor-element elementor-element-99ece90 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="99ece90" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>We work in three phases to ensure your growth is sustainable, measurable, and repeatable.</p> </div>
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
<h3 className="elementskit-info-box-title">Research & Strategy</h3>
<p>We identify your most profitable customer segments and build a comprehensive growth strategy tailored to your business goals.</p>
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
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">PHASE</h3><p className="elementor-image-box-description">01</p></div></div> </div>
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
<h3 className="elementskit-info-box-title">Execution & Launch</h3>
<p>We deploy high-converting campaigns across social, search, and your own website, ensuring that every asset is designed for performance.</p>
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
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">PHASE</h3><p className="elementor-image-box-description">02</p></div></div> </div>
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
<h3 className="elementskit-info-box-title">Analyze & Scale</h3>
<p>We monitor performance, identify growth opportunities, and optimize every element to ensure your returns only move in one direction.</p>
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
<div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">PHASE</h3><p className="elementor-image-box-description">03</p></div></div> </div>
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
<h2 className="elementor-heading-title elementor-size-default">Our Works</h2> </div>
</div>
<div className="elementor-element elementor-element-00a04ea at-heading-animation at-animation-heading-style-2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="00a04ea" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Strategy Into <span>Measurable Growth</span></h2> </div>
</div>
</div>
<div className="elementor-element elementor-element-131fb6f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="131fb6f">
<div className="elementor-element elementor-element-95e8a70 elementor-invisible elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="95e8a70" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>See how our systems have helped brands scale their acquisition and revenue.</p> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-b505714 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="b505714">
<div className="elementor-element elementor-element-737ae8b elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 awaiken-portfolio-gutter-30 elementor-invisible elementor-widget elementor-widget-artistic-portfolio-grid" data-e-type="widget" data-element_type="widget" data-id="737ae8b" data-settings="{&quot;grid_layout&quot;:&quot;masonry&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;columns&quot;:&quot;3&quot;,&quot;columns_tablet&quot;:&quot;2&quot;,&quot;columns_mobile&quot;:&quot;1&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="artistic-portfolio-grid.default">
<DynamicHomePortfolioSection />
<div className="brandexa-see-more-wrap">
  <Link className="brandexa-see-more-btn" href="/our-work">
    <span className="brandexa-see-more-btn__label">See More Works</span>
    <span aria-hidden="true" className="brandexa-see-more-btn__arrow">
      <svg fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg>
    </span>
  </Link>
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
<h2 className="elementor-heading-title elementor-size-default">Latest Blogs</h2> </div>
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
<DynamicHomeBlogsSection />
<div className="brandexa-see-more-wrap">
  <Link className="brandexa-see-more-btn" href="/blogs">
    <span className="brandexa-see-more-btn__label">See More Blogs</span>
    <span aria-hidden="true" className="brandexa-see-more-btn__arrow">
      <svg fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z" fill="currentColor"></path></svg>
    </span>
  </Link>
</div>
</div>
</div>
</div>
</div>
  );
}
