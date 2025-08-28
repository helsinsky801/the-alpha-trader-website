// Function to open a popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }
}

// Function to close a popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Close popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            closePopup(popup.id);
        }
    });
});

// Close popup when pressing the Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openPopups = document.querySelectorAll('.popup[style*="display: flex"]');
        openPopups.forEach(popup => {
            closePopup(popup.id);
        });
    }
});
