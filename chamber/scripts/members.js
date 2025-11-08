const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error loading members:", error);
        container.innerHTML = "<p>Unable to load member data.</p>";
    }
}

function displayMembers(members) {
    members.forEach((member) => {
        // Create elements
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const image = document.createElement("img");
        const membership = document.createElement("p");
        const notes = document.createElement("p");

        // Fill in content
        name.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = "Visit Website";
        website.href = member.website;
        website.target = "_blank";
        membership.textContent = `Membership Level: ${member.membership}`;
        notes.textContent = `Notes: ${member.notes}`;

        // Image setup
        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `Logo of ${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");

        // Build card
        card.classList.add("member-card");
        card.append(image, name, address, phone, website, membership, notes);

        // Add card to container
        container.appendChild(card);
    });
}

getMembersData();
