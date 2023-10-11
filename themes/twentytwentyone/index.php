<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?>

<?php if ( is_home() && ! is_front_page() && ! empty( single_post_title( '', false ) ) ) : ?>
	<header class="page-header alignwide">
		<h1 class="page-title"><?php single_post_title(); ?></h1>
	</header><!-- .page-header -->
<?php endif; ?>

<div id="category-filter" class="default-max-width">
	<p>Select one or more categories according to the content you want to see:</p>
	<button id="all-categories" class="category-button all-categories selected" data-category="all">All</button>
    <?php
    $categories = get_categories();

    foreach ($categories as $category) :
    ?>
    <button class="category-button" data-category="<?php echo esc_attr($category->slug); ?>"><?php echo esc_html($category->name); ?></button>
    <?php endforeach; ?>
</div>

<div id="filtered-posts">
	<!-- Filtered posts -->
</div>

<?php

get_footer();
