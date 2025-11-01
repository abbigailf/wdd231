// 1. Select the button and the navigation menu elements
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

// 2. Add an event listener to the button to toggle the 'show' class
if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        // This toggles the visibility, allowing the menu to show/hide
        mainNav.classList.toggle('show');
    });
}