import Script from 'next/script';
import type { Metadata } from "next";
import "./globals.css";
import "./home-elementor.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientInit from "@/components/layout/ClientInit";
import LenisProvider from "@/components/layout/LenisProvider";
import ConsultationModal from "@/components/layout/ConsultationModal";
import GlobalReviews from "@/components/layout/GlobalReviews";

export const metadata: Metadata = {
        title: "Brandexa",
        description: "Innovative solutions for Social Marketing, Art & Design, Digital World",
        icons: {
                icon: [
                        { url: "/favicon.ico" },
                        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
                        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
                ],
                apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en-GB">
                        <head>
                                <meta name="robots" content="max-image-preview:large" />
                                <link rel="dns-prefetch" href="//cdn.elementor.com" />
                                <link rel="dns-prefetch" href="//fonts-api.wp.com" />
                                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                                <link rel="alternate" type="application/rss+xml" title="Brandexa » Feed" href="./index.html?feed=rss2" />
                                <link rel="alternate" type="application/rss+xml" title="Brandexa » Comments Feed" href="./index.html?feed=comments-rss2" />
                                <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="./index.php?rest_route=%2Foembed%2F1.0%2Fembed&url=.%2F%2F" />
                                <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="./index.php?rest_route=%2Foembed%2F1.0%2Fembed&url=.%2F%2F&format=xml" />
                                <style id="wp-img-auto-sizes-contain-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
`}} />
                                <style id="wp-emoji-styles-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
`}} />
                                <style id="classic-theme-styles-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
`}} />
                                <link rel="stylesheet" id="jetpack-forms-layout-css" href="/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-forms/dist/contact-form/css/jetpack-forms-layout.css?ver=16.0-a.5" media="all" />
                                <link rel="stylesheet" id="mediaelement-css" href="/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17" media="all" />
                                <link rel="stylesheet" id="wp-mediaelement-css" href="/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=7.0" media="all" />
                                <style id="jetpack-sharing-buttons-style-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `
.jetpack-sharing-buttons__services-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:0;list-style-type:none;margin:5px;padding:0}.jetpack-sharing-buttons__services-list.has-small-icon-size{font-size:12px}.jetpack-sharing-buttons__services-list.has-normal-icon-size{font-size:16px}.jetpack-sharing-buttons__services-list.has-large-icon-size{font-size:24px}.jetpack-sharing-buttons__services-list.has-huge-icon-size{font-size:36px}@media print{.jetpack-sharing-buttons__services-list{display:none!important}}.editor-styles-wrapper .wp-block-jetpack-sharing-buttons{gap:0;padding-inline-start:0}ul.jetpack-sharing-buttons__services-list.has-background{padding:1.25em 2.375em}
/*# sourceURL=./wp-content/plugins/jetpack/_inc/blocks/sharing-buttons/view.css */
`}} />
                                <link rel="stylesheet" id="gravatar-enhanced-patterns-shared-css" href="/wp-content/plugins/gravatar-enhanced/build/patterns-shared.css?ver=226b181ff45084e801e6" media="all" />
                                <link rel="stylesheet" id="gravatar-enhanced-patterns-edit-css" href="/wp-content/plugins/gravatar-enhanced/build/patterns-edit.css?ver=a2fa5a272b4a5f94db7a" media="all" />
                                <style id="global-styles-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:root :where(.wp-block-icon svg){width: 24px;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */
`}} />
                                <link rel="stylesheet" id="contact-form-7-css" href="/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.6" media="all" />
                                <link rel="stylesheet" id="gravatar-enhanced-patterns-view-css" href="/wp-content/plugins/gravatar-enhanced/build/patterns-view.css?ver=c8f3511e42e7f7bff2d6" media="all" />
                                <link rel="stylesheet" id="ea11y-widget-fonts-css" href="/wp-content/plugins/pojo-accessibility/assets/build/fonts.css?ver=4.1.0" media="all" />
                                <link rel="stylesheet" id="ea11y-skip-link-css" href="/wp-content/plugins/pojo-accessibility/assets/build/skip-link.css?ver=4.1.0" media="all" />
                                <link rel="stylesheet" id="gravatar-enhanced-hovercards-css" href="/wp-content/plugins/gravatar-enhanced/build/style-hovercards.css?ver=3a9944bc78e1a6139244" media="all" />
                                <link rel="stylesheet" id="elementor-frontend-css" href="/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="artistics-bootstrap-css" href="/wp-content/themes/artistics/assets/css/bootstrap.min.css?ver=1.0.0" media="all" />
                                <link rel="stylesheet" id="artistics-animate-css" href="/wp-content/themes/artistics/assets/css/animate.css?ver=1.0.0" media="all" />
                                <link rel="stylesheet" id="artistics-slicknav-css" href="/wp-content/themes/artistics/assets/css/slicknav.min.css?ver=1.0.0" media="all" />
                                <link rel="stylesheet" id="artistics-all-min-css" href="/wp-content/themes/artistics/assets/css/all.min.css?ver=1.0.0" media="all" />
                                <link rel="stylesheet" id="artistics-css-variable-css" href="/wp-content/themes/artistics/assets/css/css-variable.css?ver=1.0.0" media="all" />
                                <link rel="stylesheet" id="artistics-style-css" href="/wp-content/themes/artistics/style.css?ver=1.0.0" media="all" />
                                {/* Elementor Frontend Styles imported as home-elementor.css */}
                                <link rel="stylesheet" id="widget-text-path-css" href="/wp-content/plugins/elementor/assets/css/widget-text-path.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="e-animation-fadeInUp-css" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-heading-css" href="/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-icon-box-css" href="/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-counter-css" href="/wp-content/plugins/elementor/assets/css/widget-counter.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-icon-list-css" href="/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-image-css" href="/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-image-box-css" href="/wp-content/plugins/elementor/assets/css/widget-image-box.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="swiper-css" href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5" media="all" />
                                <link rel="stylesheet" id="e-swiper-css" href="/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-image-carousel-css" href="/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="widget-rating-css" href="/wp-content/plugins/elementor/assets/css/widget-rating.min.css?ver=4.1.4" media="all" />
                                <link rel="stylesheet" id="base-desktop-css" href="/wp-content/uploads/elementor/css/base-desktop.css?ver=6a3c571fbab5d" media="all" />
                                <link rel="stylesheet" id="ekit-widget-styles-css" href="/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=3.9.9" media="all" />
                                <link rel="stylesheet" id="ekit-widget-styles-pro-css" href="/wp-content/plugins/elementskit/widgets/init/assets/css/widget-styles-pro.css?ver=4.5.1" media="all" />
                                <link rel="stylesheet" id="ekit-responsive-css" href="/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css?ver=3.9.9" media="all" />
                                <link rel="stylesheet" id="artistic-font-manrope-css" href="https://fonts-api.wp.com/css2?family=Plus+Jakarta+Sans%3Aital%2Cwght%400%2C200..800%3B1%2C200..800&display=swap" media="all" />
                                <link rel="stylesheet" id="artistic-css-variable-css" href="/wp-content/themes/artistics/assets/css/css-variable.css?ver=1.0.17" media="all" />
                                <link rel="stylesheet" id="fontawesome-6.4.0-css" href="/wp-content/themes/artistics/assets/css/all.min.css?ver=1.0.17" media="all" />
                                <link rel="stylesheet" id="bootstrap-5.3.2-css" href="/wp-content/themes/artistics/assets/css/bootstrap.min.css?ver=1.0.17" media="all" />
                                <link rel="stylesheet" id="artistic-style-css" href="/wp-content/themes/artistics/style.css?ver=1.0.17" media="all" />
                                <link rel="stylesheet" id="artistic-woo-css" href="/wp-content/themes/artistics/assets/css/woo.css?ver=1.0.17" media="all" />
                                <style id="jetpack-global-styles-frontend-style-inline-css" dangerouslySetInnerHTML={{
                                        '__html': `
:root { --font-headings: unset; --font-base: unset; --font-headings-default: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif; --font-base-default: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;}
/*# sourceURL=jetpack-global-styles-frontend-style-inline-css */
`}} />
                                <link rel="stylesheet" id="elementor-gf-plusjakartasans-css" href="https://fonts-api.wp.com/css?family=Plus+Jakarta+Sans:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap" media="all" />
                                <link rel="stylesheet" id="elementor-icons-ekiticons-css" href="/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=3.9.9" media="all" />
                                <link rel="https://api.w.org/" href="./index.php?rest_route=%2F" />
                                <link rel="alternate" title="JSON" type="application/json" href="./index.php?rest_route=%2Fwp%2Fv2%2Fpages%2F11570" />
                                <link rel="EditURI" type="application/rsd+xml" title="RSD" href="./xmlrpc.php?rsd" />
                                <link rel="canonical" href="./index.html" />
                                <link rel="shortlink" href="./index.html" />
                                <meta name="generator" content="Site Kit by Google 1.181.0" />
                                <style dangerouslySetInnerHTML={{ '__html': `img#wpstats{display:none}` }} />
                                <meta name="theme-color" content="#000000" />
                                <link rel="icon" href="/wp-content/uploads/2026/06/icon-about-agency-2-1.svg" sizes="32x32" />
                                <link rel="icon" href="/wp-content/uploads/2026/06/icon-about-agency-2-1.svg" sizes="192x192" />
                                <link rel="apple-touch-icon" href="/wp-content/uploads/2026/06/icon-about-agency-2-1.svg" />
                                <meta name="msapplication-TileImage" content="./wp-content/uploads/2026/06/icon-about-agency-2-1.svg" />
                        </head>
                        <body className="antialiased tt-magic-cursor demo-1" suppressHydrationWarning>
                                <Script type="text/javascript" dangerouslySetInnerHTML={{
                                        '__html': `
		var elementskit = {
			resturl: '//index.php?rest_route=/elementskit/v1/',
		}

		`}} />
                                <Script id="jetpack-mu-wpcom-settings-js-before" dangerouslySetInnerHTML={{
                                        '__html': `
var JETPACK_MU_WPCOM_SETTINGS = {"assetsUrl":"//wp-content/mu-plugins/wpcomsh/jetpack_vendor/automattic/jetpack-mu-wpcom/src/build/"};
//# sourceURL=jetpack-mu-wpcom-settings-js-before
`}} />
                                <Script id="jquery-core-js" strategy="beforeInteractive" src="/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" />
                                <Script id="jquery-migrate-js" strategy="beforeInteractive" src="/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" />
                                <Script id="wp-browser-compat-shims" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
(function () {
  window.wp = window.wp || {};

  if (!window.wp.hooks) {
    var callbacks = {};
    var getBucket = function (hook) {
      callbacks[hook] = callbacks[hook] || [];
      return callbacks[hook];
    };

    window.wp.hooks = {
      addAction: function (hook, namespace, callback, priority) {
        if (typeof namespace === "function") {
          priority = callback;
          callback = namespace;
          namespace = "default";
        }
        getBucket(hook).push({
          namespace: namespace || "default",
          callback: callback,
          priority: priority || 10
        });
        getBucket(hook).sort(function (a, b) { return a.priority - b.priority; });
      },
      addFilter: function (hook, namespace, callback, priority) {
        this.addAction(hook, namespace, callback, priority);
      },
      removeAction: function (hook, namespace) {
        callbacks[hook] = getBucket(hook).filter(function (item) {
          return item.namespace !== namespace;
        });
      },
      removeFilter: function (hook, namespace) {
        this.removeAction(hook, namespace);
      },
      doAction: function (hook) {
        var args = Array.prototype.slice.call(arguments, 1);
        getBucket(hook).forEach(function (item) {
          if (typeof item.callback === "function") {
            item.callback.apply(null, args);
          }
        });
      },
      applyFilters: function (hook, value) {
        var args = Array.prototype.slice.call(arguments, 2);
        return getBucket(hook).reduce(function (current, item) {
          return typeof item.callback === "function"
            ? item.callback.apply(null, [current].concat(args))
            : current;
        }, value);
      }
    };
  }

  if (!window.elementorFrontend) {
    window.elementorFrontend = {
      config: window.elementorFrontendConfig || { swiperClass: "swiper" },
      hooks: window.wp.hooks,
      init: function () {},
      isEditMode: function () { return false; },
      getCurrentDeviceMode: function () { return "desktop"; }
    };
  } else {
    window.elementorFrontend.config = window.elementorFrontend.config || window.elementorFrontendConfig || { swiperClass: "swiper" };
    window.elementorFrontend.hooks = window.elementorFrontend.hooks || window.wp.hooks;
    window.elementorFrontend.isEditMode = window.elementorFrontend.isEditMode || function () { return false; };
    window.elementorFrontend.getCurrentDeviceMode = window.elementorFrontend.getCurrentDeviceMode || function () { return "desktop"; };
  }

  if (!window.ElementsKit_Helper) {
    var pendingWidgets = [];
    var runWidget = function (widgetName, callback, scope) {
      if (!window.jQuery || typeof callback !== "function") return;
      var $scope = scope ? window.jQuery(scope) : window.jQuery('[data-widget_type="' + widgetName + '"]');
      $scope.each(function () {
        var element = window.jQuery(this);
        if (element.data("ekitCompatReady")) return;
        element.data("ekitCompatReady", true);
        callback(element);
      });
    };

    window.ElementsKit_Helper = {
      registerWidget: function (widgetName, callback) {
        pendingWidgets.push({ widgetName: widgetName, callback: callback });

        if (window.elementorFrontend && window.elementorFrontend.hooks) {
          window.elementorFrontend.hooks.addAction("frontend/element_ready/" + widgetName, "ekit-compat-" + widgetName, function (scope) {
            runWidget(widgetName, callback, scope);
          });
        }

        if (document.readyState !== "loading") {
          runWidget(widgetName, callback);
        } else {
          document.addEventListener("DOMContentLoaded", function () {
            runWidget(widgetName, callback);
          }, { once: true });
        }
      },
      escapeHtml: function (value) {
        return String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      },
      isValidURL: function (value) {
        try {
          new URL(value, window.location.href);
          return true;
        } catch (error) {
          return false;
        }
      },
      observeElement: function (element, callback) {
        if (!element || typeof callback !== "function") return;
        if (!("IntersectionObserver" in window)) {
          callback();
          return;
        }
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              callback();
              observer.disconnect();
            }
          });
        });
        observer.observe(element);
      },
      swiper: function (element, config) {
        return new Promise(function (resolve, reject) {
          if (typeof window.Swiper !== "function") {
            reject(new Error("Swiper is not loaded"));
            return;
          }
          var node = element && element.jquery ? element.get(0) : element;
          resolve(new window.Swiper(node, config || {}));
        });
      },
      flushRegisteredWidgets: function () {
        pendingWidgets.forEach(function (item) {
          runWidget(item.widgetName, item.callback);
        });
      }
    };

    window.jQuery && window.jQuery(window).on("elementor/frontend/init", function () {
      window.ElementsKit_Helper.flushRegisteredWidgets();
    });
  }

  window.mejs = window.mejs || { plugins: {}, Utility: {}, Utils: {}, Features: {} };
  window.mejs.Utils = window.mejs.Utils || {};
  window.mejs.Utils.getTypeFromFile = window.mejs.Utils.getTypeFromFile || function (file) {
    var extension = String(file || "").split("?")[0].split(".").pop();
    return extension ? "video/" + extension : "";
  };
})();
//# sourceURL=wp-browser-compat-shims
`}} />
                                <Script type="text/javascript" dangerouslySetInnerHTML={{ '__html': `var elementskit_module_parallax_url = "//wp-content/plugins/elementskit/modules/parallax/";` }} />
                                <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '<div id="magic-cursor"><div id="ball"></div></div>' }} />
                                <LenisProvider>
                                        <Header />
                                        <ClientInit />
                                        {children}
                                        <GlobalReviews />
                                        <Footer />
                                        <ConsultationModal />
                                </LenisProvider>
                                <Script id="wp-skip-link-navigation" dangerouslySetInnerHTML={{
                                        '__html': `
(function() {

			const onSkipLinkClick = () => {
				const htmlElement = document.querySelector('html');

				htmlElement.style['scroll-behavior'] = 'smooth';

				setTimeout( () => htmlElement.style['scroll-behavior'] = null, 1000 );
			}
			document.addEventListener("DOMContentLoaded", () => {
				if (!document.querySelector('#content')) {
					const el = document.querySelector('.ea11y-skip-to-content-link');
					if (el) el.remove();
				}
			});
		
})();
`}} />

                                <Script defer={true} src="https://s0.wp.com/wp-content/js/bilmur.min.js?m=202626" />

                                <Script defer={true} src="https://s0.wp.com/wp-content/js/bilmur.min.js?m=202626" />
                                <Script id="elementor-ally-widget-action" dangerouslySetInnerHTML={{
                                        '__html': `
(function() {

				const registerAllyAction = () => {
					if ( ! window?.ElementorProFrontendConfig || ! window?.elementorFrontend?.utils?.urlActions ) {
						return;
					}

					elementorFrontend.utils.urlActions.addAction( 'allyWidget:open', () => {
						if (window?.ea11yWidget?.widget?.open) {
							return window.ea11yWidget.widget.isOpen()
								? window.ea11yWidget.widget.close()
								: window.ea11yWidget.widget.open();
						}
					} );
				};

				const waitingLimit = 30;
				let retryCounter = 0;

				const waitForElementorPro = () => {
					return new Promise( ( resolve ) => {
						const intervalId = setInterval( () => {
							if ( retryCounter === waitingLimit ) {
								resolve( null );
							}

							retryCounter++;

							if ( window.elementorFrontend && window?.elementorFrontend?.utils?.urlActions ) {
								clearInterval( intervalId );
								resolve( window.elementorFrontend );
							}
								}, 100 ); // Check every 100 milliseconds for availability of elementorFrontend
					});
				};

				waitForElementorPro().then( () => { registerAllyAction(); });
			
})();
`}} />
                                <Script id="ekit-widget-scripts-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=3.9.9" />
                                <Script id="wp-hooks-js" src="/wp-includes/js/dist/hooks.min.js?ver=7496969728ca0f95732d" />
                                <Script id="wp-i18n-js" src="/wp-includes/js/dist/i18n.min.js?ver=781d11515ad3d91786ec" />
                                <Script id="wp-i18n-js-after" dangerouslySetInnerHTML={{
                                        '__html': `
(function checkWP() {
  if (window.wp && window.wp.i18n) {
    window.wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );
  } else {
    setTimeout(checkWP, 50);
  }
})();
//# sourceURL=wp-i18n-js-after
`}} />
                                <Script id="gsap-theme-js" strategy="beforeInteractive" src="/wp-content/themes/artistics/assets/js/gsap.min.js?ver=1.0.17" />
                                <Script id="magiccursor-theme-js" src="/wp-content/themes/artistics/assets/js/magiccursor.js?ver=1.0.17" />
                                <Script id="SplitText-theme-js" src="/wp-content/themes/artistics/assets/js/SplitText.js?ver=1.0.17" />
                                <Script id="ScrollTrigger-theme-js" src="/wp-content/themes/artistics/assets/js/ScrollTrigger.min.js?ver=1.0.17" />
                                <Script id="jquery-isotope-js" src="/wp-content/plugins/elementor/assets/lib/jquery-isotope/jquery-isotope.min.js?ver=3.0.6" />
                                <Script id="theme-js-js" src="/wp-content/themes/artistics/assets/js/function.js?ver=1.0.17" />
                                <Script id="gravatar-enhanced-hovercards-js-extra" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
var gravatarEnhancedHovercardsI18n = {"View profile \\u2192":"View profile \\u2192","Edit your profile \\u2192":"Edit your profile \\u2192","Contact":"Contact","Send money":"Send money","Email":"Email","Home Phone":"Home Phone","Work Phone":"Work Phone","Cell Phone":"Cell Phone","Contact Form":"Contact Form","Calendar":"Calendar","Sorry, we are unable to load this Gravatar profile.":"Sorry, we are unable to load this Gravatar profile.","Gravatar not found.":"Gravatar not found.","Too Many Requests.":"Too Many Requests.","Internal Server Error.":"Internal Server Error.","Is this you?":"Is this you?","Claim your free profile.":"Claim your free profile."};
//# sourceURL=gravatar-enhanced-hovercards-js-extra
`}} />
                                <Script id="gravatar-enhanced-hovercards-js" src="/wp-content/plugins/gravatar-enhanced/build/hovercards.js?ver=3a9944bc78e1a6139244" />
                                <Script id="elementor-webpack-runtime-js" src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=4.1.4" />
                                <Script id="elementor-frontend-modules-js" src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=4.1.4" />
                                <Script id="jquery-ui-core-js" src="/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" />                                <Script id="elementor-frontend-js-before" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                         '__html': `
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_panel_promotions":true,"e_pro_free_trial_popup":true,"nested-elements":true,"e_atomic_elements":true,"atomic_widgets_should_enforce_capabilities":true,"editor_mcp":true,"e_bc_migrations":true,"e_editor_design_system_panel":true,"e_classes":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_variables_manager":true,"e_opt_in_v4_page":true,"e_opt_in_v4":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true},"urls":{"assets":"\\/wp-content\\/plugins\\/elementor\\/assets\\/","ajaxurl":"\\/wp-admin\\/admin-ajax.php","uploadUrl":"\\/wp-content\\/uploads"},"nonces":{"floatingButtonsClickTracking":"8f99a06323","atomicFormsSendForm":"8938c3cf67"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":11570,"title":"Brandexa","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before
`}} />
                                <Script id="elementor-frontend-js" src="/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=4.1.4" />
                                <Script id="ekit-core-js-extra" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
var ekit_config = {"ajaxurl":"//wp-admin/admin-ajax.php","nonce":"436508157a","errorMessage":"Something went wrong. Please try again.","widgets":{"eventCalendar":{"headerIcons":{"prev":"","next":"","year":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3V15ZM5.625 12.5625C6.14271 12.5625 6.5625 12.9822 6.5625 13.5C6.5625 14.0178 6.14271 14.4375 5.625 14.4375C5.10729 14.4375 4.6875 14.0178 4.6875 13.5C4.6875 12.9822 5.10729 12.5625 5.625 12.5625ZM9.09668 12.5674C9.56933 12.6155 9.93848 13.0146 9.93848 13.5C9.93848 14.0177 9.51859 14.4373 9.00098 14.4375C8.51575 14.4375 8.11633 14.0687 8.06836 13.5957L8.06348 13.5L8.06836 13.4043C8.11633 12.9313 8.51575 12.5625 9.00098 12.5625L9.09668 12.5674ZM12.375 12.5566C12.8928 12.5566 13.3124 12.9764 13.3125 13.4941C13.3125 14.0119 12.8928 14.4316 12.375 14.4316C11.8575 14.4316 11.4375 14.0121 11.4375 13.4941C11.4376 12.9762 11.8575 12.5566 12.375 12.5566ZM5.625 9.5625C6.14271 9.5625 6.5625 9.98215 6.5625 10.5C6.5625 11.0178 6.14271 11.4375 5.625 11.4375C5.10729 11.4375 4.6875 11.0178 4.6875 10.5C4.6875 9.98215 5.10729 9.5625 5.625 9.5625ZM9.09668 9.56738C9.56933 9.61549 9.93848 10.0146 9.93848 10.5C9.93848 11.0177 9.51859 11.4373 9.00098 11.4375C8.51575 11.4375 8.11633 11.0687 8.06836 10.5957L8.06348 10.5L8.06836 10.4043C8.11633 9.93133 8.51575 9.5625 9.00098 9.5625L9.09668 9.56738ZM12.375 9.5625C12.8928 9.5625 13.3125 9.98221 13.3125 10.5C13.3125 11.0178 12.8928 11.4375 12.375 11.4375C11.8572 11.4375 11.4375 11.0178 11.4375 10.5C11.4375 9.98221 11.8572 9.5625 12.375 9.5625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","month":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3V15ZM5.625 12.5625C6.14271 12.5625 6.5625 12.9822 6.5625 13.5C6.5625 14.0178 6.14271 14.4375 5.625 14.4375C5.10729 14.4375 4.6875 14.0178 4.6875 13.5C4.6875 12.9822 5.10729 12.5625 5.625 12.5625ZM9.09668 12.5674C9.56933 12.6155 9.93848 13.0146 9.93848 13.5C9.93848 14.0177 9.51859 14.4373 9.00098 14.4375C8.51575 14.4375 8.11633 14.0687 8.06836 13.5957L8.06348 13.5L8.06836 13.4043C8.11633 12.9313 8.51575 12.5625 9.00098 12.5625L9.09668 12.5674ZM5.625 9.5625C6.14271 9.5625 6.5625 9.98215 6.5625 10.5C6.5625 11.0178 6.14271 11.4375 5.625 11.4375C5.10729 11.4375 4.6875 11.0178 4.6875 10.5C4.6875 9.98215 5.10729 9.5625 5.625 9.5625ZM9.09668 9.56738C9.56933 9.61549 9.93848 10.0146 9.93848 10.5C9.93848 11.0177 9.51859 11.4373 9.00098 11.4375C8.51575 11.4375 8.11633 11.0687 8.06836 10.5957L8.06348 10.5L8.06836 10.4043C8.11633 9.93133 8.51575 9.5625 9.00098 9.5625L9.09668 9.56738ZM12.375 9.5625C12.8928 9.5625 13.3125 9.98221 13.3125 10.5C13.3125 11.0178 12.8928 11.4375 12.375 11.4375C11.8572 11.4375 11.4375 11.0178 11.4375 10.5C11.4375 9.98221 11.8572 9.5625 12.375 9.5625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","week":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 8.25V15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3ZM9.75 12.75C10.1642 12.75 10.5 13.0858 10.5 13.5C10.5 13.9142 10.1642 14.25 9.75 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H9.75ZM12 12.75C12.4142 12.75 12.75 13.0858 12.75 13.5C12.75 13.9142 12.4142 14.25 12 14.25H11.9932C11.579 14.25 11.2432 13.9142 11.2432 13.5C11.2432 13.0858 11.579 12.75 11.9932 12.75H12ZM6.00684 9.75C6.421 9.75005 6.75684 10.0858 6.75684 10.5C6.75684 10.9142 6.421 11.2499 6.00684 11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H6.00684ZM12 9.75C12.4142 9.75 12.75 10.0858 12.75 10.5C12.75 10.9142 12.4142 11.25 12 11.25H8.25C7.83579 11.25 7.5 10.9142 7.5 10.5C7.5 10.0858 7.83579 9.75 8.25 9.75H12ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","day":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 8.25V15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3ZM7.5 9.375C7.91416 9.375 8.24992 9.71086 8.25 10.125V13.875C8.25 14.2892 7.91421 14.625 7.5 14.625C7.08579 14.625 6.75 14.2892 6.75 13.875V10.875C6.33579 10.875 6 10.5392 6 10.125C6.00008 9.71086 6.33584 9.375 6.75 9.375H7.5ZM11.625 9.375C11.8621 9.375 12.085 9.48751 12.2266 9.67773C12.368 9.86793 12.4119 10.1138 12.3438 10.3408L11.2188 14.0889C11.0997 14.4856 10.6809 14.7109 10.2842 14.5918C9.88769 14.4726 9.66233 14.0548 9.78125 13.6582L10.6162 10.875H9.75C9.33579 10.875 9 10.5392 9 10.125C9 9.71079 9.33579 9.375 9.75 9.375H11.625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","list":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                         \\u003Cpath d=\\"M4.5 10.6875C4.81066 10.6875 5.0625 10.9393 5.0625 11.25V13.5C5.0625 13.8107 4.81066 14.0625 4.5 14.0625H2.8125V15.1875H4.5C4.81066 15.1875 5.0625 15.4393 5.0625 15.75C5.0625 16.0607 4.81066 16.3125 4.5 16.3125H2.25C1.93946 16.3124 1.6875 16.0606 1.6875 15.75V13.5C1.6875 13.1894 1.93946 12.9376 2.25 12.9375H3.9375V11.8125H2.25C1.93934 11.8125 1.6875 11.5607 1.6875 11.25C1.6875 10.9393 1.93934 10.6875 2.25 10.6875H4.5ZM15.75 12.9375C16.0607 12.9375 16.3125 13.1893 16.3125 13.5C16.3125 13.8107 16.0607 14.0625 15.75 14.0625H8.25C7.93934 14.0625 7.6875 13.8107 7.6875 13.5C7.6875 13.1893 7.93934 12.9375 8.25 12.9375H15.75ZM15.75 8.4375C16.0607 8.4375 16.3125 8.68934 16.3125 9C16.3125 9.31066 16.0607 9.5625 15.75 9.5625H8.25C7.93934 9.5625 7.6875 9.31066 7.6875 9C7.6875 8.68934 7.93934 8.4375 8.25 8.4375H15.75ZM3.375 1.6875C3.68566 1.6875 3.9375 1.93934 3.9375 2.25V6.1875H4.5C4.81066 6.1875 5.0625 6.43934 5.0625 6.75C5.0625 7.06066 4.81066 7.3125 4.5 7.3125H2.25C1.93934 7.3125 1.6875 7.06066 1.6875 6.75C1.6875 6.43934 1.93934 6.1875 2.25 6.1875H2.8125V2.8125H2.25C1.93934 2.8125 1.6875 2.56066 1.6875 2.25C1.6875 1.93934 1.93934 1.6875 2.25 1.6875H3.375ZM15.75 3.9375C16.0607 3.9375 16.3125 4.18934 16.3125 4.5C16.3125 4.81066 16.0607 5.0625 15.75 5.0625H8.25C7.93934 5.0625 7.6875 4.81066 7.6875 4.5C7.6875 4.18934 7.93934 3.9375 8.25 3.9375H15.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E"}}}};
//# sourceURL=ekit-core-js-extra
`}} />
                                <Script id="ekit-core-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/core.js?ver=3.9.9" />
                                <Script id="ekit-pro-core-js" src="/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/core.js?ver=4.5.1" />
                                <Script id="ekit-pro-fancy-animated-text-js" src="/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/fancy-animated-text.js?ver=4.5.1" />
                                <Script id="ekit-video-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/video.js?ver=3.9.9" />
                                <Script id="mediaelement-core-js-before" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
//# sourceURL=mediaelement-core-js-before
`}} />
                                <Script id="mediaelement-core-js" src="/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.17" />
                                <Script id="mediaelement-migrate-js" src="/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=7.0" />
                                <Script id="mediaelement-js-extra" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
var _wpmejsSettings = {"pluginPath":"/wp-includes/js/mediaelement/","classPrefix":"mejs-","stretching":"responsive","audioShortcodeLibrary":"mediaelement","videoShortcodeLibrary":"mediaelement"};
//# sourceURL=mediaelement-js-extra
`}} />
                                <Script id="wp-mediaelement-js" src="/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=7.0" />
                                <Script id="magnific-popup-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/jquery.magnific-popup.min.js?ver=3.9.9" />
                                <Script id="ekit-pro-content-ticker-js" src="/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/content-ticker.js?ver=4.5.1" />
                                <Script id="jquery-numerator-js" src="/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js?ver=0.2.1" />
                                <Script id="swiper-js" src="/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5" />
                                <Script id="imagesloaded-js" src="/wp-includes/js/imagesloaded.min.js?ver=5.0.0" />
                                <Script id="ekit-testimonial-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/testimonial.js?ver=3.9.9" />
                                <Script id="ekit-info-tip-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/info-tip.js?ver=3.9.9" />
                                <Script id="ekit-pro-blog-posts-js" src="/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/blog-posts.js?ver=4.5.1" />
                                <Script id="jetpack-stats-js-before" dangerouslySetInnerHTML={{
                                        '__html': `
_stq = window._stq || [];
_stq.push([ "view", {"v":"ext","blog":"232411193","post":"11570","tz":"1","srv":"brandexagrowth.com","hp":"atomic","ac":"2","amp":"0","j":"1:16.0-a.5"} ]);
_stq.push([ "clickTrackerInit", "232411193", "11570" ]);
//# sourceURL=jetpack-stats-js-before
`}} />
                                <Script data-wp-strategy="defer" defer={true} fetchPriority="low" id="jetpack-stats-js" src="https://stats.wp.com/e-202626.js" />
                                <Script id="ekit-header-offcanvas-js" src="/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/header-offcanvas.js?ver=3.9.9" />
                                <Script id="ekit-pro-vertical-menu-js" src="/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/vertical-menu.js?ver=4.5.1" />
                                <Script id="wp-emoji-settings" type="application/json" strategy="beforeInteractive" dangerouslySetInnerHTML={{
                                        '__html': `
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"/wp-includes/js/wp-emoji-release.min.js?ver=7.0"}}
`}} />
                                <Script id="wp-emoji-loader" type="module" dangerouslySetInnerHTML={{
                                        '__html': `
(function() {

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=//wp-includes/js/wp-emoji-loader.min.js

})();
`}} />
                        </body>
                </html>
        );
}
