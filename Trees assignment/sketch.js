const board = document.getElementById('board');
const movesCountElem = document.getElementById('movesCount');
const timerElem = document.getElementById('timer');
const restartButton = document.getElementById('restartButton');

let cardsArray = ["A", "B", "C", "D", "A", "B", "C", "D"];
let moves = 0;
let flippedCards = [];
let matchedPairs = 0;
let timer;
let seconds = 0;

// Shuffle the cards
function shuffleCards() {
    cardsArray.sort(() => Math.random() - 0.5);
}

// Set up the game
function setupGame() {
    board.innerHTML = "";
    shuffleCards();
    cardsArray.forEach((cardValue, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = cardValue;

        // Front and back of the card
        const front = document.createElement("div");
        front.classList.add("front");
        front.textContent = cardValue;

        const back = document.createElement("div");
        back.classList.add("back");

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener("click", () => flipCard(card));
        board.appendChild(card);
    });

    moves = 0;
    seconds = 0;
    matchedPairs = 0;
    movesCountElem.textContent = moves;
    timerElem.textContent = "00:00";
    clearInterval(timer);
    startTimer();
}

// Flip a card
function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flip") && card !== flippedCards[0]) {
        card.classList.add("flip");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

// Check for a match
function checkForMatch() {
    moves++;
    movesCountElem.textContent = moves;

    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        matchedPairs++;
        flippedCards = [];

        // Check if all pairs are matched
        if (matchedPairs === cardsArray.length / 2) {
            clearInterval(timer);
            alert("You win!");
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            flippedCards = [];
        }, 1000);
    }
}

// Start the timer
function startTimer() {
    timer = setInterval(() => {
        seconds++;
        let mins = Math.floor(seconds / 60).toString().padStart(2, "0");
        let secs = (seconds % 60).toString().padStart(2, "0");
        timerElem.textContent = `${mins}:${secs}`;
    }, 1000);
}

// Restart game
restartButton.addEventListener("click", setupGame);

// Initialize game
setupGame();
