let prompts = [];
let currentPrompt;

// Load prompts from JSON file
async function loadPrompts() {
    try {
        const response = await fetch('/private/key_prompts.json');
        const data = await response.json();
        prompts = data.prompts;
        initializePrompt();
    } catch (error) {
        console.error('Error loading prompts:', error);
    }
}

function generateWordLengthPassword(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.map(word => 
        word.replace(/[.,!?;:"'()\-]/g, '').length
    ).join('');
}

function generateCharCountPassword(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.map(word => word.length).join('');
}

function initializePrompt() {
    currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById('prompt').textContent = currentPrompt.text;
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const error = document.getElementById('error');
    
    let correctPassword;
    
    switch (currentPrompt.type) {
        case 'wordLength':
            correctPassword = generateWordLengthPassword(currentPrompt.text);
            break;
        case 'charCount':
            correctPassword = generateCharCountPassword(currentPrompt.text);
            break;
        case 'custom':
            correctPassword = currentPrompt.key;
            break;
        default:
            console.error('Unknown prompt type:', currentPrompt.type);
            return;
    }
    
    if (input === correctPassword) {
        document.getElementById('loginOverlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
        initializePrompt();
        document.getElementById('passwordInput').value = '';
    }
}

// Event listeners
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadPrompts);