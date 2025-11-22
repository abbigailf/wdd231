document.addEventListener("DOMContentLoaded", () => {
    // === 1. Mobile Menu Functionality ===
    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav ul");

    // Check if the menu button exists before trying to add a listener
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // === 2. Footer Date/Time Details (FIXED MISSING LOGIC) ===
    const currentYearSpan = document.querySelector("#currentYear");
    const lastModifiedSpan = document.querySelector("#lastModified");

    if (currentYearSpan) {
        // Set the current year
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        // Set the last modified date/time of the page
        lastModifiedSpan.textContent = document.lastModified;
    }


    // === 3. Timestamp Generation (For Form Submission Tracking) ===
    const timestampField = document.querySelector("#timestamp");

    // Find the form element
    const joinForm = document.querySelector(".join-form form");

    // Check if the form and timestamp field exist on the page
    if (joinForm && timestampField) {
        // Function to format the timestamp as a readable string
        const formatTimestamp = () => {
            // Get the current time in the user's local timezone
            const now = new Date();

            // Format the time as YYYY-MM-DD HH:MM:SS
            const dateStr = now.toLocaleDateString('en-CA');
            const timeStr = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            return `${dateStr} ${timeStr}`;
        };

        // When the form is about to be submitted, fill the hidden field
        joinForm.addEventListener("submit", () => {
            timestampField.value = formatTimestamp();
        });
    }
});


// ===== 4. Modal Functionality (FIXED CODE) =====

// Open modal: Adds the 'show' class to the modal
document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            // FIX: Use classList.add() to SHOW the modal
            modal.classList.add("show");
        }
    });
});

// Close modal when clicking X: Removes the 'show' class
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        // Parent is modal-content, grandparent is modal
        const modal = closeBtn.parentElement.parentElement;
        // FIX: Use classList.remove() to HIDE the modal
        modal.classList.remove("show");
    });
});

// Close modal if clicking outside content: Removes the 'show' class
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            // FIX: Use classList.remove() to HIDE the modal
            modal.classList.remove("show");
        }
    });
});