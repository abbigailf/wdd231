document.body.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("open-modal")) return;

    const id = e.target.dataset.id;

    const response = await fetch("data.json");
    const recipes = await response.json();
    const recipe = recipes.find(r => r.id == id);

    document.getElementById("modal-title").textContent = recipe.name;
    document.getElementById("modal-img").src = recipe.image;
    document.getElementById("modal-desc").textContent = recipe.description;
    document.getElementById("modal-steps").textContent = recipe.instructions;

    document.getElementById("modal").classList.add("show");
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("show");
});
