// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeader();
    loadFooter();
    
    // Initialize other functionality
    initSearchToggle();
});

/**
 * Load the header content
 */
function loadHeader() {
    fetch('/test/_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('headerPage').innerHTML = data;
            // Initialize search functionality after header is loaded
            initSearchToggle();
            // Highlight current page in navigation
            highlightCurrentPage();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('headerPage').innerHTML = '<div class="error-message">Failed to load header</div>';
        });
}

/**
 * Load the footer content
 */
function loadFooter() {
    fetch('/test/_footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footerPage').innerHTML = html;
            
            // After footer is loaded, update visitor and page view counts
            updateStatistics();
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footerPage').innerHTML = '<div class="error-message">Failed to load footer</div>';
        });
}

/**
 * Initialize the search toggle functionality
 */
function initSearchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchInputContainer = document.getElementById('searchInputContainer');
    const searchInput = document.getElementById('searchInput');
    
    if (searchToggle && searchInputContainer && searchInput) {
        // Toggle search input visibility
        searchToggle.addEventListener('click', function() {
            searchInputContainer.classList.toggle('active');
            if (searchInputContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchToggle.contains(event.target) && 
                !searchInputContainer.contains(event.target) && 
                searchInputContainer.classList.contains('active')) {
                searchInputContainer.classList.remove('active');
            }
        });
        
        // Handle search submission
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

/**
 * Perform search functionality
 * @param {string} query - The search query
 */
function performSearch(query) {
    if (query.trim() === '') return;
    
    // This is a placeholder. Implement your actual search logic here.
    console.log('Searching for:', query);
    
    // Example: redirect to a search results page
    // window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
    
    // For now, just alert the search term
    alert(`Search functionality will be implemented later. Searched for: ${query}`);
}

/**
 * Update visitor and page view statistics
 */
function updateStatistics() {
    const visitorCount = document.getElementById('visitor-count');
    const pageViewCount = document.getElementById('page-view-count');

    if (visitorCount && pageViewCount) {
        // Generate random visitor count (between 1 and 100)
        visitorCount.textContent = Math.floor(Math.random() * 100) + 1;

        // Calculate page views based on days since site launch
        const startDate = new Date('2022-06-12');
        const currentDate = new Date();
        
        const timeDiff = currentDate.getTime() - startDate.getTime();
        const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        const multiplier = Math.floor(Math.random() * 10) + 1;
        
        pageViewCount.textContent = (daysPassed * multiplier).toLocaleString();
    }
}

/**
 * Highlight the current page in the navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the current path matches the link's href
        if (currentPath === linkPath || 
           (currentPath === '/' && linkPath === '/index.html') ||
           (currentPath.includes(linkPath) && linkPath !== '/index.html')) {
            link.setAttribute('aria-current', 'page');
            link.style.color = 'var(--primary-color)';
            link.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
            link.style.fontWeight = '700';
        }
    });
}

/**
 * Handle smooth scrolling for in-page links
 */
document.addEventListener('click', function(event) {
    const target = event.target.closest('a');
    
    if (!target) return;
    
    const href = target.getAttribute('href');
    
    // Check if the link is an in-page anchor
    if (href && href.startsWith('#') && href.length > 1) {
        event.preventDefault();
        
        const targetElement = document.getElementById(href.substring(1));
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL without reloading the page
            history.pushState(null, null, href);
        }
    }
});

/**
 * Initialize mobile navigation toggle (for responsive design)
 * This will be implemented when adding responsive menu
 */
function initMobileNav() {
    // To be implemented for mobile menu
    // Placeholder for future mobile navigation functionality
    console.log('Mobile navigation will be implemented later');
}

/**
 * Check if device is touch-enabled and add appropriate class to body
 */
function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch');
    }
}

/**
 * Initialize dark mode toggle (for future implementation)
 */
function initDarkModeToggle() {
    // Placeholder for future dark mode implementation
    console.log('Dark mode will be implemented later');
}

/**
 * Add event listeners for window resize to handle responsive behavior
 */
window.addEventListener('resize', function() {
    // Handle responsive behavior when window is resized
    // This is a placeholder for responsive adjustments
});

// Call detectTouchDevice on page load
detectTouchDevice();