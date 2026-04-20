// Smooth scrolling and simple interactions
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '&#9776;';
        toggleBtn.className = 'mobile-menu-btn';
        navbar.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('mobile-open');
        });
    }

    // Add scroll listener for navbar background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 13, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Reveal animations on scroll
    const cards = document.querySelectorAll('.card');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(card);
    });
});
