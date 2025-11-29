// scripts/discover.js

import { places } from "../data/discover-cards.mjs";

// ---------- VISIT MESSAGE ----------
const visitMessage = document.querySelector("#visit-message");
const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = today - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", today);

// ---------- BUILD DISCOVER CARDS (Simplified for CSS Grid) ----------
const grid = document.querySelector("#discoverGrid");

places.forEach((place, index) => {
    const card = document.createElement("div");
    card.classList.add("discover-card", `card${index + 1}`);

    card.innerHTML = `
    <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>
        <p>${place.description}</p>
        <address>${place.address}</address>
        <a href="#" class="learn-more-btn">Learn More</a>
`  ;

    grid.appendChild(card);
});