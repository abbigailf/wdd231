// 1. DYNAMIC COPYRIGHT YEAR
// Select the span element with the id 'currentyear'
const yearSpan = document.getElementById('currentyear');

// Check if the element exists to prevent errors
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}


// 2. DYNAMIC LAST MODIFIED DATE
const lastModifiedElement = document.getElementById('lastModified');

// Check if the element exists
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}
