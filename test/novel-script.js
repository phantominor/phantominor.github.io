document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Header and Footer Import
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
      });

  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      });

  // Sidebar Toggle Functionality
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = sidebar.querySelector('.sidebar-toggle');
  const mainContent = document.querySelector('.main-content');

  sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
  });

  // Dynamic Page Outline Generation
  function generatePageOutline() {
      const outlineContainer = document.getElementById('page-outline');
      const headings = document.querySelectorAll('main h2, main h3');

      headings.forEach((heading, index) => {
          // Create a unique ID if not already present
          if (!heading.id) {
              heading.id = `section-${index}`;
          }

          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = `#${heading.id}`;
          link.textContent = heading.textContent;
          
          listItem.appendChild(link);
          outlineContainer.appendChild(listItem);
      });
  }

  generatePageOutline();

  // Footer Social Icons (assuming you'll replace with actual icon library)
  const socialIcons = {
      facebook: '📘',
      instagram: '📸',
      youtube: '▶️',
      github: '💻'
  };

  const footerSocialLinks = [
      { platform: 'facebook', url: 'https://facebook.com/yourprofile' },
      { platform: 'instagram', url: 'https://instagram.com/yourprofile' },
      { platform: 'youtube', url: 'https://youtube.com/yourChannel' },
      { platform: 'github', url: 'https://github.com/yourusername' }
  ];

  // This function would be called after footer is loaded
  function setupSocialIcons() {
      const socialLinksContainer = document.querySelector('.social-links');
      if (socialLinksContainer) {
          footerSocialLinks.forEach(social => {
              const link = document.createElement('a');
              link.href = social.url;
              link.innerHTML = socialIcons[social.platform];
              link.classList.add('social-icon');
              socialLinksContainer.appendChild(link);
          });
      }
  }

  // Delay social icon setup to ensure footer is loaded
  setTimeout(setupSocialIcons, 100);
});