// Display current year and last modified date (Always run)
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// --- MOBILE MENU CODE (Moved outside the 'if' block to run on ALL pages) ---

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const navMenu = document.querySelector("nav ul");

  // Check if the menu button exists before trying to add a listener
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});


// --- DIRECTORY PAGE SPECIFIC LOGIC (Remains inside the 'if' block) ---

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const membersContainer = document.querySelector("#members");

if (gridButton && listButton && membersContainer) {
  gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
  });

  listButton.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
  });
}