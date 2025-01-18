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

function generateCustomPassword(sentence, pattern) {
    const parts = [];
    let currentIndex = 0;

    // Process each character in the pattern
    for (let i = 0; i < pattern.length; i += 2) {
        const type = pattern[i];
        const count = parseInt(pattern[i + 1]);
        
        switch (type) {
            case 'U': // Uppercase letters
                parts.push(sentence.match(/[A-Z]/g)?.slice(0, count).length || 0);
                break;
            case 'L': // Lowercase letters
                parts.push(sentence.match(/[a-z]/g)?.slice(0, count).length || 0);
                break;
            case 'N': // Numbers
                parts.push(sentence.match(/[0-9]/g)?.slice(0, count).length || 0);
                break;
            case 'S': // Special characters
                parts.push(sentence.match(/[^A-Za-z0-9\s]/g)?.slice(0, count).length || 0);
                break;
            default:
                console.warn('Unknown pattern type:', type);
        }
    }
    
    return parts.join('');
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
            correctPassword = generateCustomPassword(currentPrompt.text, currentPrompt.pattern);
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