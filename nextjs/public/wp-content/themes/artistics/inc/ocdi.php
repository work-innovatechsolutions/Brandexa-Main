<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('admin_head', 'artistic_admin_head');
function artistic_admin_head() {
  echo '<style>
    .ocdi-install-plugins-content-content,
.ocdi-install-plugins-content-header,
.ocdi-imported-footer a:first-of-type
{
		    display: none;
	}
  </style>';
}

function artistic_ocdi_before_content_import( $selected_import ) {
	update_option( 'elementor_experiment-e_font_icon_svg', 'inactive' );
	update_option( 'elementor_experiment-nested-elements', 'active' );
	update_option( 'elementor_experiment-e_optimized_markup', 'inactive' );
	update_option( 'elementor_experiment-e_lazyload', 'inactive' );
	update_option( 'elementor_experiment-e_element_cache', 'inactive' );
	update_option( 'elementor_element_cache_ttl', 'disable' );
	update_option( 'elementor_local_google_fonts', '0' );
	update_option( 'elementor_unfiltered_files_upload', '1' );
}
add_action( 'ocdi/before_content_import', 'artistic_ocdi_before_content_import' );

function artistic_ocdi_plugin_intro_text( $default_text ) {
    $default_text = '<div class="ocdi__intro-text"><p>'.esc_html__( 'Importing demo data (post, pages, images, theme settings, etc.) is the quickest and easiest way to set up your new theme. It allows you to simply edit everything instead of creating content and layouts from scratch.', 'artistics' ).'</p></div>';
 
    return $default_text;
}
add_filter( 'ocdi/plugin_intro_text', 'artistic_ocdi_plugin_intro_text' );

function artistic_ocdi_import_files() {
	
  return array(
    array(
      'import_file_name'           => '1. Digital Marketing Agency',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/1/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/1/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/',
    ),
	array(
      'import_file_name'           => '2. SEO',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/2/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/2/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo2.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/seo/',
    ),
	array(
      'import_file_name'           => '3. Social Media Marketing',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/3/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/3/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo3.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/social-media-marketing/',
    ),
	array(
      'import_file_name'           => '4. IT company',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/4/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/4/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo4.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/it-company/',
    ),
	array(
      'import_file_name'           => '5. Freelancer',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/5/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/5/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo5.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/freelancer/',
    ),
	array(
      'import_file_name'           => '6. Design Agency',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/6/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/6/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo6.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/design-agency/',
    ),
	array(
      'import_file_name'           => '7. Web Agency',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/7/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/7/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo7.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/web-agency/',
    ),
	array(
      'import_file_name'           => '8. SaaS & Tech Startup',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/8/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/8/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo8.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/saas-tech-startup/',
    ),
	array(
      'import_file_name'           => '9. Creative Portfolio',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/9/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/9/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo9.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/creative-portfolio/',
    ),
	array(
      'import_file_name'           => '10. Software Company',
      'import_file_url'            => 'https://cdn.awaikenthemes.com/demo-content/artistics/10/artistics.xml',
      'import_customizer_file_url' => 'https://cdn.awaikenthemes.com/demo-content/artistics/10/artistics.dat',
	  'import_preview_image_url'   => 'https://demo.awaikenthemes.com/artistics/assets/demo10.jpg',
      'preview_url'                => 'https://demo.awaikenthemes.com/artistics/software-company/',
    )
  );
}
add_filter( 'ocdi/import_files', 'artistic_ocdi_import_files' );

function artistic_ocdi_after_import_setup( $selected_import ) {
	global $wpdb;
	if( get_option( 'artistic_demo_imported' ) !== '1' ) {
	
		// Assign menus to their locations.
		update_option( 'artistic_demo_imported', 1, 'no' );
		
		if ( '1. Digital Marketing Agency' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 1, 'no' );
		}elseif ( '2. SEO' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 2, 'no' );
		}elseif ( '3. Social Media Marketing' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 3, 'no' );
		}elseif ( '4. IT company' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 4, 'no' );
		}elseif ( '5. Freelancer' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 5, 'no' );
		}elseif ( '6. Design Agency' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 6, 'no' );
		}elseif ( '7. Web Agency' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 7, 'no' );
		}elseif ( '8. SaaS & Tech Startup' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 8, 'no' );
		}elseif ( '9. Creative Portfolio' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 9, 'no' );
		}elseif ( '10. Software Company' === $selected_import['import_file_name'] ) {
			update_option( 'artistic_active_demo', 10, 'no' );
		}

		// Assign menus to their locations.
		$menu_locations = get_theme_mod( 'nav_menu_locations' );
		if ( ! is_array( $menu_locations ) ) {
			$menu_locations = array();
		}
		
		$header_menu = get_term_by( 'name', 'Header Menu', 'nav_menu' );
		if ( isset( $header_menu->term_id ) ) {
			$menu_locations['header'] = $header_menu->term_id;
		}

		$footer_menu = get_term_by( 'name', 'Footer Menu', 'nav_menu' );
		if ( isset( $footer_menu->term_id ) ) {
			$menu_locations['footer'] = $footer_menu->term_id;
		}

		set_theme_mod( 'nav_menu_locations', $menu_locations );
		
		 // Get the front page.
		  $front_page = get_posts(
			[
			  'post_type'              => 'page',
			  'title'                  => 'Home',
			  'post_status'            => 'all',
			  'numberposts'            => 1,
			  'update_post_term_cache' => false,
			  'update_post_meta_cache' => false,
			]
		  );
		 
		  if ( ! empty( $front_page ) ) {
			update_option( 'show_on_front', 'page' );
			update_option( 'page_on_front', $front_page[0]->ID );
		  }
		  
		  // Get the blog page.
		  $blog_page = get_posts(
			[
			  'post_type'              => 'page',
			  'title'                  => 'Blog',
			  'post_status'            => 'all',
			  'numberposts'            => 1,
			  'update_post_term_cache' => false,
			  'update_post_meta_cache' => false,
			]
		  );
		
		 if ( ! empty( $blog_page ) ) {
			update_option( 'page_for_posts', $blog_page[0]->ID );
		  }
		
		
		  // Get elementor Kit.
		  $kit_page = get_posts(
			[
			  'post_type'              => 'elementor_library',
			  'title'                  => 'Artistics - Default Kit',
			  'post_status'            => 'all',
			  'numberposts'            => 1,
			  'update_post_term_cache' => false,
			  'update_post_meta_cache' => false,
			]
		  );
		
		 if ( ! empty( $kit_page ) ) {
			update_option( 'elementor_active_kit', $kit_page[0]->ID );
		}
	}
	else {
		// Get all headers with meta 'elementskit_template_type' = 'header'
		$headers = $wpdb->get_results( "
					SELECT p.* FROM {$wpdb->posts} p
					INNER JOIN {$wpdb->postmeta} pm
						ON p.ID = pm.post_id
					WHERE p.post_type = 'elementskit_template'
					  AND p.post_status = 'publish'
					  AND pm.meta_key = 'elementskit_template_type'
					  AND pm.meta_value = 'header'
					ORDER BY pm.meta_id ASC
				" );

		if ( ! empty( $headers ) ) {
			$is_first = true;

			foreach ( $headers as $header ) {
				
				if ( $is_first ) {
					$elementskit_template_condition_a = get_post_meta( $header->ID,'elementskit_template_condition_a', true );
					$elementskit_template_activation = get_post_meta( $header->ID,'elementskit_template_activation', true );
					
					if( $elementskit_template_condition_a === 'entire_site' && $elementskit_template_activation === 'yes' ) {
						$is_first = false;
					}
				} else {
					// Reset all others
					update_post_meta( $header->ID, 'elementskit_template_activation', '' );
				}
			}
		}
		
		// Get all headers with meta 'elementskit_template_type' = 'footer'
		$footers = $wpdb->get_results( "
					SELECT p.* FROM {$wpdb->posts} p
					INNER JOIN {$wpdb->postmeta} pm
						ON p.ID = pm.post_id
					WHERE p.post_type = 'elementskit_template'
					  AND p.post_status = 'publish'
					  AND pm.meta_key = 'elementskit_template_type'
					  AND pm.meta_value = 'footer'
					ORDER BY pm.meta_id ASC
				" );

		if ( ! empty( $footers ) ) {
			$is_first = true;

			foreach ( $footers as $footer ) {
				
				if ( $is_first ) {
					$elementskit_template_condition_a = get_post_meta( $footer->ID,'elementskit_template_condition_a', true );
					$elementskit_template_activation = get_post_meta( $footer->ID,'elementskit_template_activation', true );
					
					if( $elementskit_template_condition_a === 'entire_site' && $elementskit_template_activation === 'yes' ) {
						$is_first = false;
					}
				} else {
					// Reset all others
					update_post_meta( $footer->ID, 'elementskit_template_activation', '' );
				}
			}
		}
	}
	
	// Demo URL 
    $old_url = untrailingslashit( $selected_import['preview_url'] );
    
    // Get the current site's home URL without trailing slash
    $new_url = untrailingslashit( home_url() );
	
	if( $old_url && $new_url ) {
	
		
		// Replace in _elementor_data (postmeta)
		$escaped_from = str_replace( '/', '\\/', $old_url );
		$escaped_to = str_replace( '/', '\\/', $new_url );
		$meta_value_like = '[%'; // meta_value LIKE '[%' are json formatted

		$rows_affected = $wpdb->query(
			$wpdb->prepare(
				"UPDATE {$wpdb->postmeta} " .
				'SET `meta_value` = REPLACE(`meta_value`, %s, %s) ' .
				"WHERE `meta_key` = '_elementor_data' AND `meta_value` LIKE %s;",
				$escaped_from,
				$escaped_to,
				$meta_value_like
			)
		);

		// Replace in custom menu item links (with and without trailing slash)
		$menu_items = get_posts( array(
			'post_type'      => 'nav_menu_item',
			'posts_per_page' => -1,
			'post_status'    => 'any',
			'fields'         => 'ids',
		) );

		if ( ! empty( $menu_items ) && is_array( $menu_items ) ) {
			foreach ( $menu_items as $menu_item_id ) {

				// Get the current custom URL from menu item
				$url = get_post_meta( $menu_item_id, '_menu_item_url', true );

				// Skip if no URL or it's not a valid string
				if ( empty( $url ) || ! is_string( $url ) ) {
					continue;
				}

				// Replace old URL with new one (handling both with and without trailing slash)
				$new_link = str_replace(
					array( untrailingslashit( $old_url ), trailingslashit( $old_url ) ),
					array( untrailingslashit( $new_url ), trailingslashit( $new_url ) ),
					$url
				);

				// Only update if something changed
				if ( $new_link !== $url ) {
					update_post_meta( $menu_item_id, '_menu_item_url', esc_url_raw( $new_link ) );
				}
			}
		}
	}

	// Check if Elementor is active
    if ( did_action( 'elementor/loaded' ) ) {
        // Regenerate CSS files
        \Elementor\Plugin::instance()->files_manager->clear_cache();
    }

}
add_action( 'ocdi/after_import', 'artistic_ocdi_after_import_setup' );