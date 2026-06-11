
// Grab the navbar element
const navbar = document.getElementById('navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled down by more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Adds the new styling
    } else {
        navbar.classList.remove('scrolled'); // Reverts to transparent styling at top
    }
});