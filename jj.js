const recipes = [
    { id: 1, category: 'appetizers', name: 'Bruschetta', description: 'A delicious appetizer with tomatoes and basil.' },
    { id: 2, category: 'appetizers', name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs.' },
    { id: 3, category: 'main-course', name: 'Grilled Chicken', description: 'Juicy grilled chicken with herbs.' },
    { id: 4, category: 'desserts', name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache.' },
    // Add more recipes as needed
];

function filterCategory(category) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category === category);

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Initial load of all recipes
filterCategory('all');
