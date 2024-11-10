
          // Navbar Scroll Effect
          window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(32, 30, 67, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = 'var(--primary)';
                navbar.style.backdropFilter = 'none';
            }
        });


        document.addEventListener('DOMContentLoaded', function() {
            // Animation for cards on scroll
            const cards = document.querySelectorAll('.club-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';
                observer.observe(card);
            });

            // Filter buttons functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                });
            });

            // Search animation
            const searchInput = document.querySelector('.search-bar input');
            searchInput.addEventListener('focus', () => {
                searchInput.style.boxShadow = '0 0 10px rgba(80,140,155,0.3)';
            });
            searchInput.addEventListener('blur', () => {
                searchInput.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            });
        });