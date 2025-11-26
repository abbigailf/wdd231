// Fetch spotlight members (membership 2 or 3)
async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    // Filter: Gold (3) & Silver (2)
    const eligible = members.filter(m => m.membership >= 2);

    // Shuffle & pick 3
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach((member, index) => {
        const box = document.getElementById(`spotlight${index + 1}`);
        box.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.notes}</p>
            <p><strong>${member.phone}</strong></p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
    });
}

loadSpotlights();