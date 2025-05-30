// Sample data structure with URLs
let tableData = [
    {
        date: "2024/03/06",
        topic: "Precocious puberty",
        url: "/med/daily_posts/20250306.html",
        links: 4,
        tags: ["reproductive", "clinical medicine"]
    },
    {
        date: "2024/03/05",
        topic: "Assisted reproductive technique",
        url: "/med/daily_posts/20250305.html",  // Add URL for each topic
        links: 7,
        tags: ["reproductive endocrinology", "clinical medicine", "pharmacology"]
    },
    {
        date: "2024/03/03",
        topic: "TVOR",
        url: "/med/daily_posts/20250303.html",  // Add URL for each topic
        links: 7,
        tags: ["obstetrics", "gynecology", "reproductive endocrinology", "clinical medicine"]
    },
    {
        date: "2024/02/16",
        topic: "Pancreatitis",
        url: "/med/daily_posts/20250216.html",  // Add URL for each topic
        links: 5,
        tags: ["pathology"]
    },
    {
        date: "2024/02/14",
        topic: "Air in abdomen",
        url: "/med/daily_posts/20250214.html",  // Add URL for each topic
        links: 2,
        tags: ["radiology"]
    },
    {
        date: "2024/02/12",
        topic: "Flap and dressings",
        url: "/med/daily_posts/20250212.html",  // Add URL for each topic
        links: 5,
        tags: ["osteology", "plastic surgery"]
    },
    {
        date: "2024/02/10",
        topic: "AVF removal",
        url: "/med/daily_posts/20250210.html",  // Add URL for each topic
        links: 7,
        tags: ["physiology", "pathology", "plastic surgery"]
    },
    {
        date: "2024/01/24",
        topic: "SMA syndrome",
        url: "/med/daily_posts/20250124.html",  // Add URL for each topic
        links: 3,
        tags: ["anatomy", "pathology"]
    },
    {
        date: "2024/01/20",
        topic: "Thymidine",
        url: "/med/daily_posts/20250120.html",  // Add URL for each topic
        links: 14,
        tags: ["biochemistry", "pharmacology", "pathology"]
    },
    {
        date: "2024/01/18",
        topic: "Tuberculosis",
        url: "/med/daily_posts/20250118.html",  // Add URL for each topic
        links: 5,
        tags: ["microbiology", "pharmacology", "pathology"]
    }
];

// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;

// Function to format tags
function formatTags(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

// Function to create safe HTML links
function createTopicLink(topic, url) {
    if (url) {
        return `<a href="${url}" class="topic-link">${topic}</a>`;
    }
    return topic; // Return plain text if no URL is provided
}

// Function to render table data
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = tableData.slice(start, end);

    tableBody.innerHTML = paginatedData.map(item => `
        <tr>
            <td>${item.date}</td>
            <td>${createTopicLink(item.topic, item.url)}</td>
            <td>${item.links}</td>
            <td>${formatTags(item.tags)}</td>
        </tr>
    `).join('');

    updatePagination();
}

// Function to generate pagination numbers with ellipsis
function generatePaginationNumbers(currentPage, totalPages) {
    let pages = [];
    const visiblePages = 3;

    pages.push(1);

    if (totalPages <= visiblePages + 4) {
        for (let i = 2; i < totalPages; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage <= visiblePages) {
            for (let i = 2; i <= visiblePages + 1; i++) {
                pages.push(i);
            }
            pages.push('...');
        } else if (currentPage > totalPages - visiblePages) {
            pages.push('...');
            for (let i = totalPages - visiblePages; i < totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push('...');
        }
    }

    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}

// Function to update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    const pages = generatePaginationNumbers(currentPage, totalPages);
    
    const pageNumbersHTML = pages.map(page => {
        if (page === '...') {
            return '<span class="ellipsis">...</span>';
        }
        return `
            <button class="page-number ${currentPage === page ? 'active' : ''}"
                    onclick="goToPage(${page})">${page}</button>
        `;
    }).join('');

    pageNumbers.innerHTML = pageNumbersHTML;
}

// Navigation functions
function goToPage(page) {
    currentPage = page;
    renderTable();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prevPage').addEventListener('click', prevPage);
    document.getElementById('nextPage').addEventListener('click', nextPage);
    renderTable();
});

// Function to add new data
function addTableData(newData) {
    tableData = [...tableData, ...newData];
    renderTable();
}