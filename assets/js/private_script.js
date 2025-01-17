const prompts = [
  {
      text: "Type in the password to unlock the page",
      type: "wordLength"
  },
  {
      text: "Dancing leaves whisper secrets through autumn's golden embrace",
      type: "wordLength"
  },
  {
      text: "Where mirror meets mirror, truth splits infinity",
      type: "charCount"
  },
  // Add more prompts as needed
];

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

let currentPrompt;

function initializePrompt() {
  currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = currentPrompt.text;
}

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const error = document.getElementById('error');
  
  // Generate the correct password based on the prompt type
  const correctPassword = currentPrompt.type === 'wordLength' 
      ? generateWordLengthPassword(currentPrompt.text)
      : generateCharCountPassword(currentPrompt.text);
  
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

// Previous event listeners remain the same
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      checkPassword();
  }
});

// Initialize on page load
initializePrompt();