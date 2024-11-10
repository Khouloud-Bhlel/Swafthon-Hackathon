let allEvents = []; // Store all events globally

async function loadEvents() {
    try {
        const response = await fetch("{% static 'data/events.json' %}");
        const data = await response.json();
        allEvents = data.events; // Store all events
        displayEvents(allEvents); // Display all events initially
        setupCategoryFilters(); // Setup category filters
    } catch (error) {
        console.error('Error loading events:', error);
        const eventsGrid = document.getElementById('eventsGrid');
        eventsGrid.innerHTML = '<p>Failed to load events. Please try again later.</p>';
    }
}

function displayEvents(events) {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = ''; // Clear existing content
    
    if (events.length === 0) {
        eventsGrid.innerHTML = '<p>No events found matching your criteria.</p>';
        return;
    }

    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

// Search functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredEvents = allEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm)
    );
    
    displayEvents(filteredEvents);
}

// Category filter functionality
function setupCategoryFilters() {
    const categories = [...new Set(allEvents.map(event => event.category))];
    const filtersContainer = document.querySelector('.filters');
    
    // Clear existing filters and create new ones without inline styles
    filtersContainer.innerHTML = `
        <button class="filter-btn active" data-category="all">All</button>
        ${categories.map(category => 
            `<button class="filter-btn" data-category="${category}">${category}</button>`
        ).join('')}
    `;

    // Add click handlers to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Filter events
            const category = button.dataset.category;
            const filteredEvents = category === 'all' 
                ? allEvents 
                : allEvents.filter(event => event.category === category);
            
            displayEvents(filteredEvents);
        });
    });
}

// Add event listeners when document loads
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    
    // Add search input handler
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', handleSearch);
    
    // Add search on enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

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
// Animation for cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.event-card');
    
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

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <div class="event-image">
            <img src="${event.img}" alt="${event.title}">
        </div>
        <div class="event-content">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-details">
                <p><i class="far fa-calendar"></i> ${event.date}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                <p><i class="fas fa-users"></i> ${event.participants} participants</p>
            </div>
            <div class="event-footer">
                <span><i class="fas fa-star"></i> ${event.category}</span>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>
    `;

    // Add click event to the entire card
    card.addEventListener('click', () => {
        window.location.href = '/login';
    });

    // Prevent navigation when clicking the register button (optional)
    const registerBtn = card.querySelector('.register-btn');
    registerBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the card click event
        window.location.href = '/login';
    });

    return card;
}

// Load events when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    
    // Add hover effect to event cards
    const style = document.createElement('style');
    style.textContent = `
        .event-card {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});