<?php
use Elementor\Widget_Base;
use Elementor\Controls_Manager;

defined( 'ABSPATH' ) || die();

class artistic_widget_portfolio extends Widget_Base {

	private $_query = null;

	public function __construct( $data = array(), $args = null ) {
		parent::__construct( $data, $args );
	}

	public function get_name() {
		return 'artistic-portfolio-grid';
	}

	public function get_title() {
		return __( 'Artistic - Project Grid', 'artistics' );
	}

	public function get_icon() {
		return 'eicon-gallery-grid';
	}

	public function get_categories() {
		return array( 'general' );
	}

	public function get_script_depends() {
		return [
			'imagesloaded', 'isotope'
		];
	}

	public function get_query() {
		return $this->_query;
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_layout',
			[
				'label' => __( 'Layout', 'artistics' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'grid_layout',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Layout', 'artistics' ),
				'default' => 'grid',
				'options' => [
					'grid' => esc_html__( 'Grid', 'artistics' ),
					'masonry' => esc_html__( 'Masonry', 'artistics' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'aspect_ratio',
			[
				'label' => esc_html__( 'Aspect Ratio', 'artistics' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 1,
				],
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .awaiken-portfolio-grid-item__img' => 'aspect-ratio: {{SIZE}}',
				],
				'condition' => [
					'grid_layout' => 'grid',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'columns',
			[
				'label' => esc_html__( 'Columns', 'artistics' ),
				'type' => Controls_Manager::SELECT,
				'default' => '3',
				'tablet_default' => '2',
				'mobile_default' => '1',
				'options' => [
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
				],
				'prefix_class' => 'elementor-grid%s-',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'posts_per_page',
			[
				'label' => esc_html__( 'Number of Projects to Display', 'artistics' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 99,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_design_layout',
			[
				'label' => esc_html__( 'Items', 'artistics' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'item_design',
			[
				'label' => esc_html__( 'Item Design', 'artistics' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'1' => 'Minimal',
					'2' => 'Detailed',
				],
				'default' => '1',
			]
		);

		$this->add_control(
			'item_spacing',
			[
				'label' => esc_html__( 'Item Spacing', 'artistics' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'0' => '0px',
					'10' => '10px',
					'20' => '20px',
					'30' => '30px',
					'40' => '40px',
					'50' => '50px',
				],
				'default' => '30',
				'selectors' => [
					'{{WRAPPER}} .awaiken-portfolio-grid-item' => 'margin-bottom: {{SIZE}}px',
					'{{WRAPPER}} .awaiken-portfolio-grid' => '--portfolio-gap: {{SIZE}}px',
				],
				'prefix_class' => 'awaiken-portfolio-gutter-',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_settings',
			[
				'label' => __( 'Settings', 'artistics' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'show_filter_bar',
			[
				'label' => esc_html__( 'Show Filter', 'artistics' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Hide', 'artistics' ),
				'label_on' => esc_html__( 'Show', 'artistics' ),
				'return_value' => 'yes',
                'default' => '',
			]
		);
		
			

		//Category 
		$options = [];
		$taxonomies = get_terms( array(
			'taxonomy' => 'awaiken-project-category',
			'hide_empty' => true
		) );

		if (!empty($taxonomies) && !is_wp_error($taxonomies)) {
			foreach ( $taxonomies as $term ) {
				$options[$term->term_id] = html_entity_decode($term->name);
			}
		}

	
		$this->add_control(
			'filter_category',
			array(
				'label' => esc_html__( 'Select Category', 'artistics' ),
				'description' => esc_html__( 'If no category is selected, it will display all categories.', 'artistics' ),
				'type'        => Controls_Manager::SELECT2,
				'label_block' => true,
				'multiple' => true,
				'options' => $options,
				'condition' => [
					'show_filter_bar' => 'yes',
				],
			)
		);

		$this->add_control(
			'filter_design',
			[
				'label' => esc_html__( 'Filter Design', 'artistics' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'1' => 'Boxed',
					'2' => 'Underline',
				],
				'default' => '1',
				'condition' => [
					'show_filter_bar' => 'yes',
				],
			]
		);

		$this->add_control(
			'show_all_filter_label',
			[
				'label' => esc_html__( 'Show "All" Filter Label', 'artistics' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'artistics' ),
				'label_off' => esc_html__( 'Hide', 'artistics' ),
				'return_value' => 'yes',
                'default' => '',
				'condition' => [
					'show_filter_bar' => 'yes',
				],
			]
		);

		$this->add_control(
            'filter_all_label',
            [
                'label' => esc_html__( '"All" Filter Label', 'artistics' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'All', 'artistics' ),
				'condition' => [
					'show_filter_bar' => 'yes',
					'show_all_filter_label' => 'yes',
				],
            ]
        );

		$this->end_controls_section();

	}

	protected function get_posts_tags() {
		foreach ( $this->_query->posts as $post ) {

			if ( taxonomy_exists( 'awaiken-project-category' ) ) {
				$tags = wp_get_post_terms( $post->ID, 'awaiken-project-category' );

				$tags_slugs = [];

				foreach ( $tags as $tag ) {
					$tags_slugs[ $tag->term_id ] = $tag;
				}

				$post->tags = $tags_slugs;
			} else {
				$post->tags = [];
			}
		}
	}

		public function query_posts() {
			$filter_category = $this->get_settings( 'filter_category' );
			$query_params = array(
				'post_type' => 'awaiken-project',
				'post_status' => 'publish',
				'orderby' => 'date',
				'order' => 'desc',
				'posts_per_page' => $this->get_settings( 'posts_per_page' ),
			);
			
			if(!empty($filter_category)) { 
				$query_params['tax_query']      = array(
						array(
							'taxonomy' => 'awaiken-project-category',
							'field'    => 'ID',                     
							'terms'    => $filter_category, 
						),
					);
			}

			$wp_query = new \WP_Query( $query_params );

			$this->_query = $wp_query;
		}

	protected function render_grid_filter() {
		$settings = $this->get_settings_for_display();

		$this->add_render_attribute( 'filter-wrapper', [
			'class' => [ 'awaiken-portfolio-grid__filters', 'portfolio_filter-design-' . $settings['filter_design'],  ]
		] );

		$terms = [];
		
		if(empty($settings['filter_category'])) {
			foreach ( $this->_query->posts as $post ) {
				$terms += $post->tags;
			}
		}
		else{
			$terms = get_terms([
				'taxonomy' => 'awaiken-project-category',
				'include' => $settings['filter_category'],
				'hide_empty' => false,  
			]);
		}

		if ( empty( $terms ) ) {
			return;
		}

		usort( $terms, function( $a, $b ) {
			return strcmp( $a->name, $b->name );
		} );

		?>
		<ul <?php $this->print_render_attribute_string( 'filter-wrapper' ); ?>>
			<?php if ( $settings['show_all_filter_label'] == 'yes' ) : ?>
				<li class="awaiken-portfolio-grid__filter active" data-filter="*"><?php echo esc_html( $settings['filter_all_label'] ); ?></li>
			<?php endif; ?>
			<?php foreach ( $terms as $term ) : ?>
				<li class="awaiken-portfolio-grid__filter-label" data-filter=".portfolio-filter-<?php echo esc_attr( $term->term_id ); ?>"><?php echo esc_html( $term->name ); ?></li>
			<?php endforeach; ?>
		</ul>
		<?php
	}

	protected function render_grid_header() {
		$settings = $this->get_settings_for_display();
		$config = array(
					'rtl'           => is_rtl(),
					'id'			=> esc_attr( $this->get_id() ),
					'item_spacing'	=> esc_attr( $settings['item_spacing'] ),
					'show_filter_bar'	=> esc_attr( $settings['show_filter_bar'] )
				);
		?>
		<div id="awaiken-portfolio-<?php echo esc_attr($this->get_id()); ?>" class="awaiken-portfolio-widget" data-config='<?php echo esc_attr( json_encode( $config ) ); ?>'>
		<?php

		if ( $settings['show_filter_bar'] ) {
			$this->render_grid_filter();
		}

		$this->add_render_attribute( 'wrapper', [
			'class' => [ 'awaiken-portfolio-grid', 'elementor-grid', 'awaiken-portfolio-layout-' . $settings['grid_layout'], 'awaiken-portfolio-item-design-' . $settings['item_design'],  ]
		] );
		?>
		<div <?php $this->print_render_attribute_string( 'wrapper' ); ?>>
		<?php
	}

	protected function render_grid_footer() {
		?>
		</div>
		</div>
		<?php
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$this->query_posts();

		$wp_query = $this->get_query();

		if ( ! $wp_query->have_posts() ) {
			return;
		}

		$this->get_posts_tags();

		$this->render_grid_header();

		while ( $wp_query->have_posts() ) {
			$wp_query->the_post();

			$this->render_post();
		}

		$this->render_grid_footer();

		wp_reset_postdata();

	}

	protected function render_post_header() {
		global $post;

		if ( ! $post->tags ) {
			$tags_classes[] = '';
		} else {
			$tags_classes = array_map( function( $tag ) {
				return 'portfolio-filter-' . $tag->term_id;
			}, $post->tags );
		}

		$classes = [
			'awaiken-portfolio-grid-item',
			implode( ' ', $tags_classes ),
		];
		?>
		<article <?php post_class( $classes ); ?>>
			<div class="awaiken-portfolio-grid-item__wrapper">
		<?php
	}

	protected function render_thumbnail() {
		?>
			<div class="awaiken-portfolio-grid-item__image">
		<?php
		if ( has_post_thumbnail() ) : ?>
			<div class="awaiken-portfolio-grid-item__img">
				<?php the_post_thumbnail(); ?>
			</div>
		<?php endif;
	}

	protected function render_categories_names() {
		global $post, $ARTISTIC_STORAGE;

		if ( ! $post->tags ) {
			return;
		}

		$tags_array = [];

		foreach ( $post->tags as $tag ) {
			$tags_array[] = '<a href="' . get_term_link( $tag ) . '"><span class="awaiken-portfolio-grid-item__categories__category">' . esc_html( $tag->name ) . '</span></a>';
		}

		?>
			<div class="awaiken-portfolio-grid-item__categories">
				<?php echo implode( ' ', $tags_array ); ?>
			</div>

			<div class="awaiken-portfolio-grid-item__readmore">
				<a class="awaiken-portfolio-grid-item__link" href="<?php echo esc_url( get_permalink() ); ?>">
					<?php echo artistic_render_svg($ARTISTIC_STORAGE['read_more_icon']); ?>
				</a>
			</div>
		</div>
		<?php
	}

	protected function render_post_content_header() {
		?>
		<div class="awaiken-portfolio-grid-item__content">
		<?php
	}

	protected function render_title() {
		?>
		<a class="awaiken-portfolio-grid-item__link" href="<?php echo get_permalink(); ?>">
			<h3 class="awaiken-portfolio-grid-item__title"><?php the_title(); ?></h3>
		</a>
		<?php
	}
	
	protected function render_post_excerpt() {
		?>
		<div class="awaiken-portfolio-grid-item__excerpt">
			<?php the_excerpt(); ?>
		</div>
		<?php
	}

	protected function render_post_content_footer() {
		?>
		</div>
		<?php
	}

	protected function render_post_footer() {
		?>
		</div>
		</article>
		<?php
	}

	protected function render_post() {
		$this->render_post_header();
		$this->render_thumbnail();
		$this->render_categories_names();
		$this->render_post_content_header();
		$this->render_title();
		$this->render_post_excerpt();
		$this->render_post_content_footer();
		$this->render_post_footer();
	}

}
