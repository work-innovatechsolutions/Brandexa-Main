<?php
/**
 * Theme functions and definitions
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'ARTISTIC_THEME_VERSION', wp_get_theme()->get( 'Version' ) );
define( 'ARTISTIC_THEME_DIR', get_template_directory() );
define( 'ARTISTIC_THEME_URL', get_template_directory_uri() );
define( 'AWAIKEN_ITEM_ID', 8042 );
define( 'AWAIKEN_ITEM_NAME', 'Artistics' );
define( 'AWAIKEN_THEME_SLUG', 'artistics' );
define( 'AWAIKEN_MP', 'TF' ); 

if ( ! isset( $content_width ) ) {
	$content_width = 800; // Pixels.
}

// Theme storage
// Attention! Must be in the global namespace to compatibility with WP-CLI
//-------------------------------------------------------------------------
$GLOBALS['ARTISTIC_STORAGE'] = array(
		'social_sharing' => 'facebook,whatsapp,linkedin',
		'social_urls' => 'https://www.instagram.com/ ,https://www.facebook.com/ ,https://www.youtube.com/',
		'show_preloader' => 0,
		'magic_cursor' => 1,
		'show_small_heading_icon' => 1,
		'small_heading_icon' => '',
		'footer_copyright_text' => '',
		'smooth_scrolling' => 0,
		'archive_page_layout' => 'full-width',
		'blog_single_page_layout' => 'full-width',
		'preloader_icon' => '',
		'portfolio_page_title' => '',
		'portfolio_archive_page_layout' => 'full-width',
		'portfolio_single_page_layout' => 'full-width',
		'header_background_image' => '',
		'project_page_header_background_image' => '',
		'blog_page_header_background_image' => '',
		'read_more_icon' => ARTISTIC_THEME_DIR.'/assets/images/arrow-white.svg',
		'shop_page_header_background_image' => '',
		'shop_page_layout' => 'full-width',
		'product_single_layout' => 'full-width',
);

if ( ! function_exists( 'artistic_slug_fonts_url' ) ) {
	function artistic_slug_fonts_url() {
		$fonts_url = ''; 
		  
		/* Translators: If there are characters in your language that are not
		* supported by Plus Jakarta Sans, translate this to 'off'. Do not translate
		* into your own language.
		*/
		$font = _x( 'on', 'Plus Jakarta Sans font: on or off', 'artistics' );
		 
		if ( 'off' !== $font ) {
			
			$font_families = array();
			 
			if ( 'off' !== $font ) {
				$font_families[] = 'Plus Jakarta Sans:ital,wght@0,200..800;1,200..800';
			}
			 
			$query_args = array(
				'family'	=> urlencode( implode( '&family=', $font_families ) ),
				'display' 	=> urlencode( 'swap' ),
			);
		
			$query_args = str_replace(array('%26','%3D'), array('&','='), $query_args);
			
			$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
		}
		
		return esc_url_raw( $fonts_url );
	}
}

if ( ! function_exists( 'artistic_theme_setup' ) ) {
	/**
	 * Set up theme support.
	 *
	 * @return void
	 */
	function artistic_theme_setup() {
	
		register_nav_menus( 
			array( 
					'header' => esc_html__( 'Header', 'artistics' ) ,
					'footer' => esc_html__( 'Footer', 'artistics' ) 
				 )		
		);

		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'editor-styles' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			)
		);
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 100,
				'width'       => 350,
				'flex-height' => true,
				'flex-width'  => true,
			)
		);
		
		/*
		 * Gutenberg wide images.
		 */
		add_theme_support( 'align-wide' );
		
		/**
        * Load textdomain.
        */
        load_theme_textdomain( 'artistics', ARTISTIC_THEME_DIR . '/languages' );

		if ( is_admin() ) { 
			add_editor_style( array( artistic_slug_fonts_url(), 'assets/css/css-variable.css', 'assets/css/all.min.css', 'style-editor.css' ) );
		}
		
		// WooCommerce in general.
		add_theme_support( 'woocommerce' );
		// zoom.
		add_theme_support( 'wc-product-gallery-zoom' );
		// lightbox.
		add_theme_support( 'wc-product-gallery-lightbox' );
		// swipe.
		add_theme_support( 'wc-product-gallery-slider' );

		// Disable block-based widget support
		remove_theme_support( 'widgets-block-editor' );
	}

}
add_action( 'after_setup_theme', 'artistic_theme_setup' );

/**
 * Enqueue styles
 */
if ( ! function_exists( 'artistic_theme_load_styles' ) ) {
	function artistic_theme_load_styles() {
		$active_demo =  artistic_get_active_demo();
		if( get_option( 'artistic_demo_imported' ) !== '1' ) {
			wp_enqueue_style( 'artistic-font-manrope', artistic_slug_fonts_url(), array(), null );	
		}
		
		wp_enqueue_style( 'artistic-css-variable', ARTISTIC_THEME_URL . '/assets/css/css-variable.css', array(), ARTISTIC_THEME_VERSION );
		wp_enqueue_style( 'fontawesome-6.4.0', ARTISTIC_THEME_URL . '/assets/css/all.min.css', array(), ARTISTIC_THEME_VERSION );
		wp_enqueue_style( 'bootstrap-5.3.2', ARTISTIC_THEME_URL . '/assets/css/bootstrap.min.css', array(), ARTISTIC_THEME_VERSION );
		wp_enqueue_style( 'artistic-style', ARTISTIC_THEME_URL . '/style.css', array('bootstrap-5.3.2','fontawesome-6.4.0'), ARTISTIC_THEME_VERSION );
		wp_enqueue_style( 'artistic-woo', ARTISTIC_THEME_URL . '/assets/css/woo.css', array('artistic-style','bootstrap-5.3.2','fontawesome-6.4.0'), ARTISTIC_THEME_VERSION );
		
		for($i = 1;$i<=10;$i++) {
			wp_register_style( 'demo-'.esc_attr($i), ARTISTIC_THEME_URL . '/assets/css/demo-'.esc_attr($i).'.css', array(), ARTISTIC_THEME_VERSION, 'all' );
		}

		if($active_demo > 1) {
			wp_enqueue_style( 'demo-'.esc_attr($active_demo));
		}
		
		if (is_singular()) {
			$body_class = get_post_meta(get_the_ID(), '_artistics_body_class', true);
			if ( !empty($body_class) ) {
				
				 $body_class = explode(' ', $body_class);
				 if( is_array($body_class) && count($body_class) > 0 ) {
					foreach($body_class as $demo_class) {
						wp_enqueue_style( $demo_class );
					}
				 }
			}
		}
		
		if ( class_exists( 'WooCommerce' ) ) {
			if ( get_option( 'woocommerce_coming_soon' ) === 'yes' ) {
				$css_rules[] = '.woocommerce-coming-soon-mode .ekit-template-content-header{
					background: var(--e-global-color-secondary); 
				}
				
				.woocommerce-coming-soon-mode.woocommerce-shop .ekit-template-content-header .header-version-1,
				.woocommerce-coming-soon-mode.single-product .ekit-template-content-header .header-version-1,
				.woocommerce-coming-soon-mode.woocommerce-cart .ekit-template-content-header .header-version-1{
					position: inherit; !important;
				} ';
			}
		}
		
		if (!empty($css_rules)) {
			wp_add_inline_style( 'artistic-style',implode("\n", $css_rules) );
		}
		
	}
}
add_action( 'wp_enqueue_scripts', 'artistic_theme_load_styles', 998 );

/**
 * Enqueue scripts
 */
if ( ! function_exists( 'artistic_theme_load_scripts' ) ) {
	function artistic_theme_load_scripts() {
		global $ARTISTIC_STORAGE;
	
		if( get_theme_mod( 'smooth_scrolling', $ARTISTIC_STORAGE['smooth_scrolling'] ) ) { 
			wp_enqueue_script( 'SmoothScroll-theme', ARTISTIC_THEME_URL . '/assets/js/SmoothScroll.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		}
		
		wp_enqueue_script( 'gsap-theme', ARTISTIC_THEME_URL . '/assets/js/gsap.min.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		if( get_theme_mod( 'magic_cursor', $ARTISTIC_STORAGE['magic_cursor'] ) ) { 
		wp_enqueue_script( 'magiccursor-theme', ARTISTIC_THEME_URL . '/assets/js/magiccursor.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		}
		
		wp_enqueue_script( 'SplitText-theme', ARTISTIC_THEME_URL . '/assets/js/SplitText.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		wp_enqueue_script( 'ScrollTrigger-theme', ARTISTIC_THEME_URL . '/assets/js/ScrollTrigger.min.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		
		if ( is_post_type_archive('awaiken-project') || is_tax('awaiken-project-category') ) { 
			wp_enqueue_script('imagesloaded');
			wp_enqueue_script( 'isotope');
		}
		
		wp_enqueue_script( 'theme-js', ARTISTIC_THEME_URL . '/assets/js/function.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );
		
		// js for comments
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

	}
}
add_action( 'wp_enqueue_scripts', 'artistic_theme_load_scripts' );


/**
 * Register widget area.
 */
if ( ! function_exists( 'artistic_widgets_init' ) ) {
	function artistic_widgets_init() {
		
		register_sidebar( array(
			'name'          => esc_html__( 'Sidebar', 'artistics' ),
			'id'            => 'main-sidebar',
			'description'   => esc_html__( 'Add widgets here to appear in your sidebar.', 'artistics' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
		
		register_sidebar( array(
			'name'          => esc_html__( 'Project sidebar', 'artistics' ),
			'id'            => 'project-sidebar',
			'description'   => esc_html__( 'Add widgets here to appear in your Project sidebar.', 'artistics' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
		
	}
}
add_action( 'widgets_init', 'artistic_widgets_init' );

/**
*	Change post per page for project
*/
function artistic_pre_get_posts_project( $query ) {
	if ( ! is_admin() && $query->is_main_query() && is_post_type_archive( 'awaiken-project' ) ) {
		$query->set( 'posts_per_page', 999 );
		return;
	}
}
add_action( 'pre_get_posts', 'artistic_pre_get_posts_project', 11 );

/**
*	Include required file
*/
require_once ARTISTIC_THEME_DIR . '/inc/init.php';