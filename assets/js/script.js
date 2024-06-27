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

// function loadFile(elementId, filePath) {
//     fetch(filePath)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//         })
//         .catch(error => console.error(`Error loading ${filePath}:`, error));
// }

// function loadHeaderFooter() {
//     const path = window.location.pathname;
//     const depth = (path.match(/\//g) || []).length;

//     let headerPath = '';
//     let footerPath = '';

//     switch (depth) {
//         case 2: // in the 'games' directory
//             headerPath = '../templates/header.html';
//             footerPath = '../templates/footer.html';
//             break;
//         default: // in the root directory
//             headerPath = 'templates/header.html';
//             footerPath = 'templates/footer.html';
//             break;
//     }

//     loadFile('headerPage', headerPath);
//     loadFile('footerPage', footerPath);
// }

// document.addEventListener('DOMContentLoaded', loadHeaderFooter);



// JavaScript to load the sidebar
function loadSidebar() {
  fetch('templates/sidebar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('sidebarPage').innerHTML = data;
          generateSidebarMenu(); // Generate the sidebar menu after loading the sidebar
          setupSidebarToggle();  // Set up the sidebar toggle after loading the sidebar
      })
      .catch(error => console.error('Error loading sidebar:', error));
}

// JavaScript to generate sidebar menu
function generateSidebarMenu() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  const headers = document.querySelectorAll('h2, h3'); // Select the headers you want in the TOC

  headers.forEach((header, index) => {
      // Skip the first h2 element (the "Contents" heading)
      if (index === 0 && header.tagName === 'H2') {
          return;
      }

      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `#${header.id}`;
      anchor.textContent = header.textContent;

      if (header.tagName === 'H3') {
          listItem.style.paddingLeft = '20px'; // Indent H3 items
      }

      listItem.appendChild(anchor);
      sidebarMenu.appendChild(listItem);
  });
}

// JavaScript to set up the sidebar toggle
function setupSidebarToggle() {
  document.querySelector('.sidebar-toggle').addEventListener('click', function() {
      document.querySelector('.sidebar-content').classList.toggle('active');
  });
}

// Load header, footer, and sidebar
loadHeader();
loadFooter();
loadSidebar();