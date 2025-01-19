// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;
let tableData = [];

// Fetch data from JSON file
async function fetchTableData() {
    try {
        const response = await fetch('/med/postlist/list.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        tableData = data.posts;
        renderTable();
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('tableBody').innerHTML = `
            <tr><td colspan="4">Error loading data. Please try again later.</td></tr>
        `;
    }
}

// Function to format tags
function formatTags(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
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
            <td><a href="${item.topic.url}" class="topic-url">${item.topic.text}</a></td>
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
    fetchTableData(); // Fetch data when page loads
});

// Function to add new data
function addTableData(newData) {
    tableData = [...tableData, ...newData];
    renderTable();
}