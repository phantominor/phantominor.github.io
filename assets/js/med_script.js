document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const header = block.querySelector('.block-header');
        const preview = block.querySelector('.block-preview');
        const navigateIcon = block.querySelector('.navigate-icon');

        // Toggle preview on click
        header.addEventListener('click', function(e) {
            // Check if click was on or near the navigate icon
            const rect = navigateIcon.getBoundingClientRect();
            const clickNearNavigateIcon = 
                e.clientX >= rect.left - 20 && 
                e.clientX <= rect.right + 20 && 
                e.clientY >= rect.top - 20 && 
                e.clientY <= rect.bottom + 20;

            if (clickNearNavigateIcon) {
                // Navigate to the page
                const link = block.querySelector('.preview-link');
                if (link) {
                    window.location.href = link.href;
                }
            } else {
                // Toggle preview
                const isExpanded = block.classList.contains('active');
                
                // Close all other blocks
                blocks.forEach(otherBlock => {
                    if (otherBlock !== block) {
                        otherBlock.classList.remove('active');
                    }
                });

                // Toggle current block
                block.classList.toggle('active');

                // Smooth scroll if expanding
                if (!isExpanded) {
                    setTimeout(() => {
                        block.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            }
        });

        // Add hover effect hint
        header.addEventListener('mouseenter', function(e) {
            if (!block.classList.contains('active')) {
                block.querySelector('.expand-icon').style.transform = 'translateY(2px)';
            }
        });

        header.addEventListener('mouseleave', function(e) {
            if (!block.classList.contains('active')) {
                block.querySelector('.expand-icon').style.transform = 'none';
            }
        });
    });

    // Close expanded blocks when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.block')) {
            blocks.forEach(block => {
                block.classList.remove('active');
            });
        }
    });
});