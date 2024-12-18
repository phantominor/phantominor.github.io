// Featured Sections Data Management
let featuredSectionsData = {
  recentUpdates: [],
  popularContent: []
};

// Pagination state
let currentPage = {
  recentUpdates: 1,
  popularContent: 1
};

// Number of items per page
const ITEMS_PER_PAGE = 3;

// Function to fetch JSON data
async function fetchFeaturedSectionsData() {
  try {
      // Fetch recent updates
      const recentUpdatesResponse = await fetch('/index/recent-updates.json');
      const recentUpdatesData = await recentUpdatesResponse.json();
      featuredSectionsData.recentUpdates = recentUpdatesData.recentUpdates;

      // Fetch popular content
      const popularContentResponse = await fetch('/index/popular-content.json');
      const popularContentData = await popularContentResponse.json();
      featuredSectionsData.popularContent = popularContentData.popularContent;

      // Render the sections after fetching
      renderFeaturedSections();
      setupPagination();
  } catch (error) {
      console.error('Error fetching featured sections data:', error);
  }
}

// Function to render featured sections with pagination
function renderFeaturedSections() {
  // Render Recent Updates
  const recentUpdatesList = document.querySelector('.recent-updates .featured-list');
  if (recentUpdatesList) {
      recentUpdatesList.innerHTML = ''; // Clear existing items
      
      // Calculate start and end indices based on current page
      const startIndex = (currentPage.recentUpdates - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      
      // Slice and render items for current page
      featuredSectionsData.recentUpdates
          .slice(startIndex, endIndex)
          .forEach(item => {
              const itemElement = createFeaturedItemElement(item, true);
              recentUpdatesList.appendChild(itemElement);
          });
  }

  // Render Popular Content
  const popularContentList = document.querySelector('.popular-content .featured-list');
  if (popularContentList) {
      popularContentList.innerHTML = ''; // Clear existing items
      
      // Calculate start and end indices based on current page
      const startIndex = (currentPage.popularContent - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      
      // Slice and render items for current page
      featuredSectionsData.popularContent
          .slice(startIndex, endIndex)
          .forEach(item => {
              const itemElement = createFeaturedItemElement(item);
              popularContentList.appendChild(itemElement);
          });
  }
}

// Function to set up pagination
function setupPagination() {
  // Setup Recent Updates Pagination
  const recentUpdatesPagination = document.querySelector('.recent-updates .featured-pagination');
  if (recentUpdatesPagination) {
      recentUpdatesPagination.innerHTML = ''; // Clear existing pagination
      
      // Calculate total pages
      const totalRecentUpdatePages = Math.ceil(
          featuredSectionsData.recentUpdates.length / ITEMS_PER_PAGE
      );
      
      // Create page numbers
      for (let i = 1; i <= Math.min(totalRecentUpdatePages, 3); i++) {
          const pageSpan = document.createElement('span');
          pageSpan.textContent = i;
          pageSpan.classList.add('page-number');
          if (i === currentPage.recentUpdates) {
              pageSpan.classList.add('active');
          }
          pageSpan.addEventListener('click', () => {
              currentPage.recentUpdates = i;
              renderFeaturedSections();
              setupPagination();
          });
          recentUpdatesPagination.appendChild(pageSpan);
      }
      
      // Add More/Next page link if needed
      if (totalRecentUpdatePages > 1) {
          const moreLink = document.createElement('a');
          moreLink.href = '#';
          moreLink.textContent = 'More...';
          moreLink.addEventListener('click', (e) => {
              e.preventDefault();
              if (currentPage.recentUpdates < totalRecentUpdatePages) {
                  currentPage.recentUpdates++;
                  renderFeaturedSections();
                  setupPagination();
              }
          });
          recentUpdatesPagination.appendChild(moreLink);
      }
  }

  // Setup Popular Content Pagination
  const popularContentPagination = document.querySelector('.popular-content .featured-pagination');
  if (popularContentPagination) {
      popularContentPagination.innerHTML = ''; // Clear existing pagination
      
      // Calculate total pages
      const totalPopularContentPages = Math.ceil(
          featuredSectionsData.popularContent.length / ITEMS_PER_PAGE
      );
      
      // Create page numbers
      for (let i = 1; i <= Math.min(totalPopularContentPages,3); i++) {
          const pageSpan = document.createElement('span');
          pageSpan.textContent = i;
          pageSpan.classList.add('page-number');
          if (i === currentPage.popularContent) {
              pageSpan.classList.add('active');
          }
          pageSpan.addEventListener('click', () => {
              currentPage.popularContent = i;
              renderFeaturedSections();
              setupPagination();
          });
          popularContentPagination.appendChild(pageSpan);
      }
      
      // Add More/Next page link if needed
      if (totalPopularContentPages > 1) {
          const moreLink = document.createElement('a');
          moreLink.href = '#';
          moreLink.textContent = 'More...';
          moreLink.addEventListener('click', (e) => {
              e.preventDefault();
              if (currentPage.popularContent < totalPopularContentPages) {
                  currentPage.popularContent++;
                  renderFeaturedSections();
                  setupPagination();
              }
          });
          popularContentPagination.appendChild(moreLink);
      }
  }
}

// Function to create a featured item element
function createFeaturedItemElement(item, isRecentUpdate = false) {
  const itemElement = document.createElement('div');
  itemElement.classList.add('featured-item');

  // Create meta information
  const metaElement = document.createElement('div');
  metaElement.classList.add('item-meta');

  // Add date for recent updates
  if (isRecentUpdate && item.date) {
      const dateSpan = document.createElement('span');
      dateSpan.classList.add('update-date');
      dateSpan.textContent = item.date;
      metaElement.appendChild(dateSpan);
  }

  // Add category
  const categorySpan = document.createElement('span');
  categorySpan.classList.add(isRecentUpdate ? 'update-category' : 'category');
  categorySpan.textContent = item.category;
  metaElement.appendChild(categorySpan);

  itemElement.appendChild(metaElement);

  // Create title link
  const titleLink = document.createElement('a');
  titleLink.href = item.link;
  titleLink.classList.add('item-title');
  titleLink.textContent = item.title;
  itemElement.appendChild(titleLink);

  // Create remarks
  const remarksElement = document.createElement('p');
  remarksElement.classList.add('item-remarks');
  remarksElement.textContent = item.remarks;
  itemElement.appendChild(remarksElement);

  return itemElement;
}

// Function to save updated data back to JSON files
async function saveFeaturedSectionsData() {
  try {
      // Save recent updates
      const recentUpdatesResponse = await fetch('/index/recent-updates.json', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ recentUpdates: featuredSectionsData.recentUpdates })
      });

      // Save popular content
      const popularContentResponse = await fetch('/index/popular-content.json', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ popularContent: featuredSectionsData.popularContent })
      });

      console.log('Featured sections data saved successfully');
  } catch (error) {
      console.error('Error saving featured sections data:', error);
  }
}

// Function to add a new item to recent updates
function addRecentUpdate(updateItem) {
  // Add to the beginning of the array
  featuredSectionsData.recentUpdates.unshift(updateItem);
  
  // Re-render the sections
  renderFeaturedSections();
  setupPagination();  // Added setup pagination here

  // Save updated data
  saveFeaturedSectionsData();
}

// Function to add a new item to popular content
function addPopularContent(contentItem) {
  // Add to the beginning of the array
  featuredSectionsData.popularContent.unshift(contentItem);
  
  // Re-render the sections
  renderFeaturedSections();
  setupPagination();  // Added setup pagination here

  // Save updated data
  saveFeaturedSectionsData();
}

// Modify the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {

  // Fetch and render featured sections
  fetchFeaturedSectionsData();
});

// Expose functions globally if you want to use them from the console or other scripts
window.addRecentUpdate = addRecentUpdate;
window.addPopularContent = addPopularContent;