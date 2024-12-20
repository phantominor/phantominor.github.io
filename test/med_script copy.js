document.addEventListener('DOMContentLoaded', () => {
  // Sample data structures (these would typically come from a backend)
  const notesData = [
      {
          system: 'Neurological',
          description: 'Comprehensive overview of neurological system disorders and classifications'
      },
      {
          system: 'Cardiovascular',
          description: 'Detailed insights into heart and circulatory system conditions'
      },
      {
          system: 'Digestive',
          description: 'In-depth exploration of gastrointestinal tract diseases and treatments'
      }
  ];

  const caseData = [
      {
          id: 1,
          title: 'Right atrial isomerism, hypoplastic LV, ECD, DORV, pulmonary atresia, supracardiac type TAPVR',
          date: '2024-09-12',
          introduction: '<li>Birth date: 2024/07/08</li><li>G5P4AA1, GA: 38+3 wks</li><li>BBW = 3150 gm (70-75 percentile)</li><li>48 cm (25-50 percentile)</li><li>Apgar score = 8~9</li><li>FHx: No related congenital heart disease history</li><li>ABO blood type: mother O, father A</li><li>G6PD deficiency (-)</li>',
          fullDetails: '...'
      },
      // More case entries...
  ];

  const reviewHighlights = [
      {
          title: 'Breakthrough in Cancer Immunotherapy',
          journal: 'Nature Medicine',
          month: 'January 2024',
          abstract: 'Recent studies show promising results in targeted immune responses...',
          interpretation: 'This research suggests a potential paradigm shift in cancer treatment...'
      },
      // More research highlights...
  ];

  const reflectionData = [
      {
          id: 1,
          title: 'My Journey in Emergency Medicine',
          author: 'Anonymous',
          date: '2024-01-20',
          summary: 'Reflections on the challenges and rewards of emergency medical practice...',
          fullContent: '...'
      },
      // More reflection entries...
  ];

  // Utility Functions
  function createModal(content) {
      const modal = document.getElementById('modal');
      const modalContent = document.getElementById('modalContent');
      modalContent.innerHTML = content;
      modal.style.display = 'block';

      const closeModal = document.querySelector('.close-modal');
      closeModal.onclick = () => {
          modal.style.display = 'none';
      };

      window.onclick = (event) => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      };
  }

  // Populate Notes Section
  function populateNotes() {
    const notesContainer = document.getElementById('notesContainer');
    
    // Add console logs for debugging
    console.log('Notes Container:', notesContainer);
    console.log('Notes Data:', notesData);

    if (!notesContainer) {
        console.error('Notes container not found!');
        return;
    }

    notesData.forEach(note => {

        const systemId = `${note.system.toLowerCase()}System`;
        const noteSystem = document.getElementById(systemId);

        if (noteSystem) {
            const detailsElement = noteSystem.querySelector('.system-details');
            
            if (detailsElement) {
                detailsElement.innerHTML = `
                    <p>${note.description}</p>
                `;
            } else {
                console.error(`No details element found for ${systemId}`);
            }
        } else {
            console.error(`No system element found for ${systemId}`);
        }
    });
}

  // Case Section Population
  function populateCases() {
      const caseListContainer = document.getElementById('caseListContainer');
      caseListContainer.innerHTML = ''; // Clear existing content

      caseData.forEach(caseItem => {
          const caseCard = document.createElement('div');
          caseCard.classList.add('case-card');
          caseCard.innerHTML = `
              <h3>${caseItem.title}</h3>
              <p>Date: ${caseItem.date}</p>
              <p>${caseItem.introduction}</p>
              <div class="card-actions">
                  <a href="#" class="details-btn" onclick="showCaseDetails(${caseItem.id})">Details</a>
              </div>
          `;
          caseListContainer.appendChild(caseCard);
      });
  }

  // Reviews Section Population
  function populateReviews() {
      const highlightsContainer = document.getElementById('researchHighlights');
      highlightsContainer.innerHTML = ''; // Clear existing content

      reviewHighlights.forEach(highlight => {
          const highlightCard = document.createElement('div');
          highlightCard.classList.add('review-card');
          highlightCard.innerHTML = `
              <h3>${highlight.title}</h3>
              <p><strong>Journal:</strong> ${highlight.journal}</p>
              <p><strong>Month:</strong> ${highlight.month}</p>
              <div class="card-actions">
                  <a href="#" class="details-btn" onclick="showFullReviewDetails()">Read More</a>
              </div>
          `;
          highlightsContainer.appendChild(highlightCard);
      });
  }

  // Reflections Section Population
  function populateReflections() {
      const reflectionListContainer = document.getElementById('essayListContainer');
      reflectionListContainer.innerHTML = ''; // Clear existing content

      reflectionData.forEach(reflection => {
          const reflectionCard = document.createElement('div');
          reflectionCard.classList.add('essay-card');
          reflectionCard.innerHTML = `
              <h3>${reflection.title}</h3>
              <p>By: ${reflection.author}</p>
              <p>Date: ${reflection.date}</p>
              <p>${reflection.summary}</p>
              <div class="card-actions">
                  <a href="#" class="details-btn" onclick="showReflectionDetails(${reflection.id})">Full Reflection</a>
              </div>
          `;
          reflectionListContainer.appendChild(reflectionCard);
      });
  }

  // Global modal interaction functions
  window.showCaseDetails = (caseId) => {
      const selectedCase = caseData.find(c => c.id === caseId);
      createModal(`
          <h2>${selectedCase.title}</h2>
          <p>Date: ${selectedCase.date}</p>
          <p>${selectedCase.fullDetails}</p>
      `);
  };

  window.showReflectionDetails = (reflectionId) => {
      const selectedReflection = reflectionData.find(r => r.id === reflectionId);
      createModal(`
        <h2>${selectedReflection.title}</h2>
        <p>By: ${selectedReflection.author}</p>
        <p>Date: ${selectedReflection.date}</p>
        <p>${selectedReflection.fullContent}</p>
    `);
  };

  window.showFullReviewDetails = () => {
    const latestReview = reviewHighlights[0];
    createModal(`
        <h2>${latestReview.title}</h2>
        <p><strong>Journal:</strong> ${latestReview.journal}</p>
        <p><strong>Month:</strong> ${latestReview.month}</p>
        <p><strong>Abstract:</strong> ${latestReview.abstract}</p>
        <p><strong>Interpretation:</strong> ${latestReview.interpretation}</p>
    `);
};

// Exam Resources Section
function populateExamResources() {
    const questionList = document.getElementById('questionList');
    const studyStrategies = document.getElementById('studyStrategies');
    const bookRecommendations = document.getElementById('bookRecommendations');

    // Clear existing content
    questionList.innerHTML = '';
    studyStrategies.innerHTML = '';
    bookRecommendations.innerHTML = '';

    // Sample exam questions
    const questions = [
        'Pathophysiology of Type 2 Diabetes',
        'Neurological Assessment Techniques',
        'Advanced Pharmacological Interventions'
    ];

    questions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        questionList.appendChild(li);
    });

    // Study strategies
    studyStrategies.innerHTML = `
        <ul>
            <li>Create structured study schedules</li>
            <li>Use active recall techniques</li>
            <li>Practice mock exams regularly</li>
        </ul>
    `;

    // Book recommendations
    bookRecommendations.innerHTML = `
        <ul>
            <li>Harrison's Principles of Internal Medicine</li>
            <li>First Aid for the USMLE Step 1</li>
            <li>Robbins Basic Pathology</li>
        </ul>
    `;
}

// Smooth scrolling and page navigation
function setupNavigation() {
    // Smooth scrolling for main navigation
    document.querySelectorAll('.med-main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add breadcrumb interaction (optional)
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-list a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // You can add custom navigation logic here if needed
            // For now, it will follow the href attribute
        });
    });
}

// Initialize all sections
function initializeMedicalNotesPage() {
    // Populate different sections
    populateNotes();
    populateCases();
    populateReviews();
    populateReflections();
    populateExamResources();

    // Setup navigation
    setupNavigation();
}

// Run initialization when DOM is fully loaded
initializeMedicalNotesPage();

// Optional: Search functionality
function searchContent(query) {
    const searchResults = [
        ...notesData,
        ...caseData,
        ...reviewHighlights,
        ...reflectionData
    ].filter(item => 
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );

    createModal(`
        <h2>Search Results for "${query}"</h2>
        ${searchResults.length > 0 
            ? searchResults.map(result => `
                <div class="search-result">
                    <h3>${result.title || result.system || 'Untitled'}</h3>
                    <p>${result.introduction || result.description || result.summary || 'No preview available'}</p>
                </div>
            `).join('')
            : '<p>No results found.</p>'
        }
    `);
}

// Expose search function globally if needed
window.searchMedicalContent = searchContent;
});

// Optional: Add service worker for potential offline capabilities
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
    navigator.serviceWorker.register('/med-notes-sw.js')
        .then(registration => {
            console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
});
}