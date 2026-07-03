<?php
/**
 * The template for displaying project.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
global $ARTISTIC_STORAGE;
$archive_page_layout	=	get_theme_mod( 'portfolio_archive_page_layout', $ARTISTIC_STORAGE['portfolio_archive_page_layout'] );
if($archive_page_layout == 'full-width') {
	$column = 'col-md-12';
}	
else{
	$column = 'col-lg-9 col-md-12';
}

$background_image 	= get_theme_mod( 'project_page_header_background_image', $ARTISTIC_STORAGE['project_page_header_background_image'] );
if($background_image) {
	$background_image 	= 	wp_get_attachment_image_src( $background_image , 'full' );
	if(isset($background_image[0])) {
		$background_image	=	$background_image[0];
	}
}

$taxonomies = '';
if(is_post_type_archive('awaiken-project')) {
	$taxonomies = get_terms( array(
		'taxonomy' => 'awaiken-project-category',
		'hide_empty' => true
	) );
}

?>
<main id="content" class="site-main">
	<div class="page-header" <?php if($background_image) { ?> style="background-image: url('<?php echo esc_url($background_image); ?>')"<?php } ?>>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<h1 class="entry-title"><?php 
									$page_title = artistic_get_archive_title();
									echo wp_kses_data( $page_title ); ?></h1>
								<?php
									the_archive_description( '<div class="taxonomy-description">', '</div>' );
								?>
						<?php do_action('artistic_action_get_breadcrumb'); ?>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="page-content">
		<div class="page-blog-archive">
			<div class="container">
				<div class="row">
					<div class="<?php echo esc_attr( $column ); ?>">
						<div class="row">
							<div class="col-md-12">
								<div class="elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 awaiken-portfolio-gutter-30 elementor-widget artistic-archive-portfolio artistic-archive-project elementor-widget-soare-portfolio-grid">
									<div id="awaiken-portfolio">
										<?php  if ( !empty($taxonomies) ) { ?>
										<ul class="awaiken-portfolio-grid__filters portfolio_filter-design-1">
												<li class="awaiken-portfolio-grid__filter active" data-filter="*"><?php esc_html_e( 'All', 'artistics' ); ?></li>
											<?php foreach ( $taxonomies as $term ) : ?>
												<li class="awaiken-portfolio-grid__filter-label" data-filter=".awaiken-project-category-<?php echo esc_attr( $term->slug ); ?>"><?php echo esc_html( $term->name ); ?></li>
											<?php endforeach; ?>
										</ul>
										<?php } ?>

									<div class="awaiken-portfolio-grid elementor-grid awaiken-portfolio-layout-grid awaiken-portfolio-item-design-2">
											<?php
											while ( have_posts() ) {
												the_post();
												$post_link 			= get_permalink();
												$portfolio_category = wp_get_post_terms( get_the_ID(), 'awaiken-project-category' );
												?>
												<article <?php post_class( 'awaiken-portfolio-grid-item' ); ?>>
													<div class="awaiken-portfolio-grid-item__wrapper">
										
														<div class="awaiken-portfolio-grid-item__image">
															<?php if ( has_post_thumbnail() ) : ?>
															<div class="awaiken-portfolio-grid-item__img">
																<?php the_post_thumbnail(); ?>
															</div>
															
															<div class="awaiken-portfolio-grid-item__categories">
																<ul>
																	<li><?php
																		if ($portfolio_category && !is_wp_error($portfolio_category)) {
																			$first_category = $portfolio_category[0];
																			echo '<a href="' . esc_url(get_term_link($first_category)) . '">' . esc_html($first_category->name) . '</a>';
																		}
																	?></li>
																</ul>
															</div>

															<div class="awaiken-portfolio-grid-item__readmore">
																<a class="awaiken-portfolio-grid-item__link" href="<?php echo esc_url( get_permalink() ); ?>">
																	<?php echo artistic_render_svg($ARTISTIC_STORAGE['read_more_icon']); ?>
																</a>
															</div>
															<?php endif; ?>
														</div>

														<div class="awaiken-portfolio-grid-item__content">
															<div class="awaiken-portfolio-grid-title__wrap">
																<a class="awaiken-portfolio-grid-item__link" href="<?php echo get_permalink(); ?>">
																	<h3 class="awaiken-portfolio-grid-item__title"><?php the_title(); ?></h3>
																</a>
																<div class="awaiken-portfolio-grid-item__excerpt">
																	<?php the_excerpt(); ?>
																</div>
															</div>
														</div>

													</div>
												</article>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<?php 
					if($archive_page_layout == 'with-sidebar'):
						get_sidebar('project');
					endif;
				?>
				</div>
			</div>
		</div>
	</div>
</main>