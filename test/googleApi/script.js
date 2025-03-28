// --- Constants and Variables ---
const lowerBound = 1;
const upperBound = 100;
let secretNumber;
let guessesTaken;

// --- DOM Element References ---
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const feedbackElement = document.getElementById('feedback');
const guessCountElement = document.getElementById('guessCount');
const playAgainButton = document.getElementById('playAgain');
const lowerBoundSpan = document.getElementById('lower-bound');
const upperBoundSpan = document.getElementById('upper-bound');

// --- Functions ---

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateFeedback(message, type = 'hint') {
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback ${type}`;
}

function checkGuess() {
    const userGuessStr = guessInput.value;

    if (userGuessStr === '') {
        updateFeedback('Please enter a number.', 'error');
        return;
    }

    const userGuess = parseInt(userGuessStr, 10);

    if (isNaN(userGuess)) {
        updateFeedback('That is not a valid number.', 'error');
        guessInput.value = '';
        return;
    }

    if (userGuess < lowerBound || userGuess > upperBound) {
        updateFeedback(`Please enter a number between ${lowerBound} and ${upperBound}.`, 'error');
        return;
    }

    guessesTaken++;
    guessCountElement.textContent = `Guesses: ${guessesTaken}`;

    if (userGuess < secretNumber) {
        updateFeedback('Too low!', 'hint');
    } else if (userGuess > secretNumber) {
        updateFeedback('Too high!', 'hint');
    } else {
        updateFeedback(`Correct! You got it in ${guessesTaken} guesses!`, 'success');
        endGame();
    }

    guessInput.value = '';
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
    playAgainButton.classList.remove('hidden');
}

function resetGame() {
    guessesTaken = 0;
    secretNumber = getRandomInt(lowerBound, upperBound);
    console.log(`New secret number: ${secretNumber}`);

    updateFeedback('\u00A0');
    guessCountElement.textContent = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
    guessInput.value = '';
    playAgainButton.classList.add('hidden');

    lowerBoundSpan.textContent = lowerBound;
    upperBoundSpan.textContent = upperBound;
    guessInput.min = lowerBound;
    guessInput.max = upperBound;

    guessInput.focus();
}

// --- Event Listeners ---
submitButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkGuess();
    }
});
playAgainButton.addEventListener('click', resetGame);

// --- Initial Game Setup ---
resetGame();