document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.header, .navbar a, .home-content h1, .home-content h3, .home-content p, .button a, .home-sec a');
    let delay = 0;

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
        delay += 500; // Adjust this delay to control the speed of each element appearing
    });
});