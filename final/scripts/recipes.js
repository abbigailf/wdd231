const spotlightBoxes = [
    document.getElementById('spotlight1'),
    document.getElementById('spotlight2'),
    document.getElementById('spotlight3'),
    document.getElementById('spotlight4'),
];

async function loadRecipes() {
    try {
        // Correct path from index.html → data/data.json
        const response = await fetch('data/data.json');
        if (!response.ok) throw new Error('Failed to load recipes');

        const recipes = await response.json();

        // Shuffle recipes for randomness
        const shuffled = recipes.sort(() => 0.5 - Math.random());

        // Pick 4 random spotlight recipes
        const selected = shuffled.slice(0, 4);

        displaySpotlightRecipes(selected);

    } catch (error) {
        console.error('Error loading recipes:', error);
    }
}

function displaySpotlightRecipes(recipes) {
    spotlightBoxes.forEach((box, index) => {
        const recipe = recipes[index];
        if (!recipe) return;

        box.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <details>
                <summary>Instructions</summary>
                <p>${recipe.instructions}</p>
            </details>
        `;
    });
}

// Run after DOM loads
document.addEventListener('DOMContentLoaded', loadRecipes);
