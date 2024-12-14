// JavaScript to load the header
function loadHeader() {
    fetch('templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerPage').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// JavaScript to load the footer
function loadFooter() {
    fetch('templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerPage').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// JavaScript to load the profile column
function loadProfileColumn() {
    fetch('templates/profile-column.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('profileColumnPage').innerHTML = data;
            generatePageContents(); // Generate page contents after loading profile column
        })
        .catch(error => console.error('Error loading profile column:', error));
}

// Function to generate page contents
function generatePageContents() {
    const pageTOC = document.getElementById('page-toc');
    if (!pageTOC) return; // Exit if TOC element doesn't exist

    // Clear previous contents
    pageTOC.innerHTML = '';

    // Select headers within the main content area
    const headers = document.querySelectorAll('main h2, main h3');

    headers.forEach((header, index) => {
        // Assign an ID if not already present
        if (!header.id) {
            header.id = `section-${index}`;
        }

        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${header.id}`;
        anchor.textContent = header.textContent;

        // Indent subsections
        if (header.tagName === 'H3') {
            listItem.style.paddingLeft = '15px';
        }

        listItem.appendChild(anchor);
        pageTOC.appendChild(listItem);
    });
}

// Modify the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    loadProfileColumn();
});