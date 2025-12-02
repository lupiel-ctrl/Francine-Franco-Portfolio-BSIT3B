// Waits until the entire HTML document is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Selects all elements with the class 'content-btn'
    const buttons = document.querySelectorAll('.content-btn');
    
    // Loops through each button to attach a click handler
    buttons.forEach(btn => {
        // Assigns a click function to each button
        btn.onclick = function(e) {
            e.preventDefault(); // Stops default image behavior (e.g., drag or context menu)

            // Reads the custom 'data-target' attribute (e.g., "thirdPage")
            const id = this.getAttribute('data-target');

            // Tries to find the section with that ID in the document
            const target = document.getElementById(id);

            // If the target section exists...
            if (target) {
                // Smoothly scrolls the viewport to bring that section into view
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If not found, alerts the user
                alert('⚠️ Section "' + id + '" not found!');
            }
        };
    });
});