"use client";
 
import React, { useEffect, useState } from "react";
import Team4 from "@/components/mvpblocks/team-4";
import Testimonials from "@/components/mvpblocks/testimonials-marquee";
import OurWorkSection from "@/components/sections/OurWorkSection";
import WhoWeAreExperience from "@/components/sections/WhoWeAreExperience";
import "./about.css";

const brandexaTeamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Senior Project Manager",
    department: "operations",
    image: "/wp-content/uploads/2024/11/team-1-2.webp",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Marketing Director",
    department: "marketing",
    image: "/wp-content/uploads/2024/11/team-2-2.webp",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Manager",
    department: "product",
    image: "/wp-content/uploads/2024/11/team-3-2.webp",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    role: "Communications Specialist",
    department: "marketing",
    image: "/wp-content/uploads/2024/11/team-4-2.webp",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "UX Design Lead",
    department: "design",
    image: "/wp-content/uploads/2024/11/team-5-2.webp",
  },
  {
    id: 6,
    name: "Sophia Carter",
    role: "Brand Strategist",
    department: "design",
    image: "/wp-content/uploads/2024/11/team-6-2.webp",
  },
  {
    id: 7,
    name: "Daniel Brooks",
    role: "Growth Analyst",
    department: "marketing",
    image: "/wp-content/uploads/2024/11/team-7-2.webp",
  },
  {
    id: 8,
    name: "Ava Morgan",
    role: "Client Success Lead",
    department: "operations",
    image: "/wp-content/uploads/2024/11/team-8-2.webp",
  },
];

const brandexaTeamDepartments = [
  { id: "all" as const, label: "View all" },
  { id: "design" as const, label: "Design" },
  { id: "marketing" as const, label: "Marketing" },
  { id: "product" as const, label: "Product" },
  { id: "operations" as const, label: "Operations" },
];
 
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
<WhoWeAreExperience />
<Team4
  title="Dynamic team of digital experts"
  subtitle="Meet the strategists, designers, and growth thinkers shaping distinctive digital experiences for ambitious brands."
  teamMembers={brandexaTeamMembers}
  departments={brandexaTeamDepartments}
  backgroundColor="#000000"
  textColor="#ffffff"
  secondaryColor="rgba(255,255,255,0.68)"
  className="brandexa-mvp-team"
/>
<OurWorkSection />
<div className="elementor-element elementor-element-9367172 who-we-are brandexa-legacy-who-hidden e-flex e-con-boxed e-con e-parent" data-id="9367172" data-element_type="container" data-e-type="container">
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
<span className="elementor-counter-number" data-duration="2000" data-to-value="40" data-from-value="0" data-delimiter=",">40</span>
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
<div className="elementor-element elementor-element-4a0e2d0 e-con-full e-flex e-con e-child" data-id="4a0e2d0" data-element_type="container" data-e-type="container">
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
<span className="number-percentage" data-value="35" data-animation-duration="3500" data-style="static">35</span>
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
<span className="number-percentage" data-value="250" data-animation-duration="3500" data-style="static">250</span>
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
<span className="number-percentage" data-value="120" data-animation-duration="3500" data-style="static">120</span>
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
<span className="number-percentage" data-value="5" data-animation-duration="3500" data-style="static">5</span>
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
<Testimonials />
</div>
</div>
</div>
</div>
  );
}
