//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Select the button and dropdown list
    const removeButton = document.querySelector('input[type="button"]');
    const colorSelect = document.getElementById('colorSelect');

    // Add an event listener to the button
    removeButton.addEventListener('click', function() {
        // Get the selected index from the dropdown list
        const selectedIndex = colorSelect.selectedIndex;
        
        // Remove the selected option from the dropdown list
        if (selectedIndex !== -1) {
            colorSelect.remove(selectedIndex);
        }
    });
});
