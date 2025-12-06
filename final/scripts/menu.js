const menuButton = document.getElementById("menuButton");
const navList = document.querySelector("header nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("show");
});