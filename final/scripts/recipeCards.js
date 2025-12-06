// recipeCards.js
const url = "data/data.json";
const container = document.querySelector("#recipes"); // FIXED ID

// Load recipe data
async function loadRecipes() {
    try {
        const response = await fetch(url);
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error loading recipes:", error);
        container.innerHTML = "<p>Error loading recipes.</p>";
    }
}

// Display recipe cards (exact layout you already have)
function displayRecipes(recipes) {
    container.innerHTML = "";

    recipes.forEach(recipe => {
        const card = document.createElement("section");
        card.classList.add("recipe-card");

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;
        img.loading = "lazy";

        const title = document.createElement("h2");
        title.textContent = recipe.name;

        const desc = document.createElement("p");
        desc.textContent = recipe.description;

        const button = document.createElement("button");
        button.classList.add("open-modal");
        button.dataset.id = recipe.id;
        button.textContent = "View Recipe";

        card.append(img, title, desc, button);
        container.appendChild(card);
    });

    attachModalEvents(recipes);
}

// Connect to your global modal.js system
function attachModalEvents(recipes) {
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", () => {
            const recipe = recipes.find(r => r.id == button.dataset.id);
            openRecipeModal(recipe);
        });
    });
}

// Use your existing modal.js styling & system
function openRecipeModal(recipe) {
    const modal = document.getElementById("modal");
    const content = document.querySelector(".modal-content-body");

    content.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>${recipe.description}</p>

        <h3>Instructions</h3>
        <p>${recipe.instructions}</p>
    `;

    modal.classList.add("show");
}

loadRecipes();

// ===============================
// GRID / LIST VIEW BUTTONS
// ===============================

const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");
const recipesContainer = document.getElementById("recipes");

// Default = grid view (already active)
gridBtn.addEventListener("click", () => {
    recipesContainer.classList.add("grid-view");
    recipesContainer.classList.remove("list-view");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    recipesContainer.classList.add("list-view");
    recipesContainer.classList.remove("grid-view");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});