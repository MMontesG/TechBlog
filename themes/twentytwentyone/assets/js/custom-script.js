document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const filteredPosts = document.getElementById('filtered-posts');
    const allCategoriesBtn = document.getElementById('all-categories');
    const selectedCategories = new Set();

    selectedCategories.add('all');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            if (category != "all") {
                selectedCategories.delete('all');
                allCategoriesBtn.classList.remove('selected');
            } else {
                selectedCategories.clear();
                selectedCategories.add('all');
                allCategoriesBtn.classList.add('selected');
                for (let i = 1; i < categoryButtons.length; i++) {
                    categoryButtons[i].classList.remove('selected');
                }
            }
            
            if (selectedCategories.has(category) && category != "all") {
                selectedCategories.delete(category);
                button.classList.remove('selected');
            } else {
                selectedCategories.add(category);
                button.classList.add('selected');
            }
            
            fetchPosts(selectedCategories);
        });
    });

    function fetchPosts(categories) {
        if (categories.has('all')) {
            categories = "";
        }

        fetch(my_ajax_object.ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `action=filter_by_category&category=${Array.from(categories).join(',')}`,
        })
        .then(response => response.text())
        .then(data => {
            filteredPosts.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    fetchPosts(selectedCategories);
});


