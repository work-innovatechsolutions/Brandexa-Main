<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function artistic_admin_css() {
	wp_enqueue_style( 'theme-default-font-admin', artistic_slug_fonts_url(), array(), null );
	wp_enqueue_style( 'artistic-admin', ARTISTIC_THEME_URL . '/assets/css/admin.css', array(), ARTISTIC_THEME_VERSION );

	$documentation_link = apply_filters('artistic_documentation_link', true);

    if ($documentation_link) {
		wp_enqueue_script( 'artistic-admin-js', ARTISTIC_THEME_URL . '/assets/js/admin.js', array( 'jquery' ), ARTISTIC_THEME_VERSION, true );    
    }	
}

// Hook the custom_admin_css function to the admin_enqueue_scripts action.
add_action('admin_enqueue_scripts', 'artistic_admin_css', 11);


add_action('admin_menu', 'artistic_custom_appearance_submenu');

function artistic_custom_appearance_submenu() {
	
    $documentation_link = apply_filters('artistic_documentation_link', true);

    if (!$documentation_link) {
        return;
    }
	
    add_submenu_page(
        'themes.php', 
        __( 'Documentation', 'artistics' ), 
        __( 'Documentation', 'artistics' ), 
        'manage_options', 
        'custom_documentation_link', 
        '__return_null' 
    );
}