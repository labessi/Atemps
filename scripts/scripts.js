// Script for interactivity (smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Target element not found: ${this.getAttribute('href')}`);
        }
    });
});
