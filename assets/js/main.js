// Include header and footer
function includeHTML(selector, filePath) {
    fetch(filePath)
    .then(res => res.text())
    .then(html => {
        document.querySelector(selector).innerHTML = html;
    });
}

// Usage:
includeHTML('#header', '/templates/common/header.html');
includeHTML('#footer', '/templates/common/footer.html'); 

// Filter toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.querySelector('.filter-toggle');
    const filterSection = document.querySelector('.filter-section');
    const filterOverlay = document.querySelector('.filter-overlay');
    const filterClose = document.querySelector('.filter-close');
    
    if(filterToggle) {
        filterToggle.addEventListener('click', function() {
            filterSection.classList.add('active');
            filterOverlay.classList.add('active');
        });
    }
    
    if(filterClose) {
        filterClose.addEventListener('click', function() {
            filterSection.classList.remove('active');
            filterOverlay.classList.remove('active');
        });
    }
    
    if(filterOverlay) {
        filterOverlay.addEventListener('click', function() {
            filterSection.classList.remove('active');
            filterOverlay.classList.remove('active');
        });
    }
});


// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('border-b-2', 'border-primary', 'text-primary');
            });
            
            // Add active class to current button
            this.classList.add('border-b-2', 'border-primary', 'text-primary');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show current tab content
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize the first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('border-b-2', 'border-primary', 'text-primary');
    }
});

                
// Initializes hotel details tab switching after dynamic content is loaded
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('border-b-2', 'border-primary', 'text-primary'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('border-b-2', 'border-primary', 'text-primary');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Initialize first tab
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('border-b-2', 'border-primary', 'text-primary');
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        document.getElementById(firstTabId).classList.add('active');
    }
}



async function getRandomHotelName() {
    try {
      const response = await fetch('/data/hotels.json');
      const hotels = await response.json();
      const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];
      return randomHotel.name;
    } catch (error) {
      console.error('Failed to load hotels:', error);
      return null;
    }
}

// Give me a function that shortens the description of the hotel
function shortenDescription(description) {
    return description.slice(0, 190) + '...';
}
