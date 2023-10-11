# TechBlog
Dynamic category filter

The idea was to develop a dynamic filter for a landing page in WordPress where one or several categories could be selected at a time and the posts tagged with those categories could be displayed and all this would work without having to reload the page.

To carry out this, something very simple was thought of. Well, without needing to modify much of the theme (incidentally index.php and functions.php), two files "custom-script.js" and "custom-css.css" were created. The logic is quite simple: make AJAX requests for the posts you want to display every time you click on one of the category buttons.
