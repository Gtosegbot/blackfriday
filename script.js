document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            header.style.padding = '0.5rem 5%';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '1rem 5%';
        }
    });
});
