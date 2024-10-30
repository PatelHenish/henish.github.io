//Henish Patel
// 11/20/2024
// Making a puzzle in which we will get random black box and we have to make it white  


// Canvas and context setup
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

const rows = 5;
const cols = 5;
const squareSize = canvas.width / cols;
let board = Array.from({ length: rows }, () => Array(cols).fill(0));
let crossMode = true; // Starts in cross mode

// Randomize the board
function randomizeBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] = Math.random() < 0.5 ? 0 : 255;
        }
    }
}

// Draw the board
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.fillStyle = board[i][j] === 0 ? "black" : "white";
            ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
        }
    }
    checkWinCondition();
}

// Draw the overlay based on the selected square
function drawOverlay(row, col) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Semi-transparent red
    if (crossMode) {
        toggleOverlay(row, col); // Center
        toggleOverlay(row - 1, col); // Top
        toggleOverlay(row + 1, col); // Bottom
        toggleOverlay(row, col - 1); // Left
        toggleOverlay(row, col + 1); // Right
    } else {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                toggleOverlay(row + i, col + j);
            }
        }
    }
}

// Toggle overlay for a specific square
function toggleOverlay(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
        ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
}

// Toggle the color of a square
function toggleSquare(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
        board[row][col] = board[row][col] === 0 ? 255 : 0;
    }
}

// Flip squares in a cross pattern
function flipCross(row, col) {
    toggleSquare(row, col); // Center
    toggleSquare(row - 1, col); // Top
    toggleSquare(row + 1, col); // Bottom
    toggleSquare(row, col - 1); // Left
    toggleSquare(row, col + 1); // Right
}

// Flip squares in a square (3x3) pattern
function flipSquare(row, col) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            toggleSquare(row + i, col + j);
        }
    }
}

// Check for win condition
function checkWinCondition() {
    const firstColor = board[0][0];
    let won = true;
    for (let row of board) {
        for (let cell of row) {
            if (cell !== firstColor) {
                won = false;
                break;
            }
        }
        if (!won) break;
    }
    if (won) {
        alert("You Win!");
        resetGame(); // Optional: reset game after winning
    }
}

// Handle mouse clicks
canvas.addEventListener("click", (event) => {
    const row = Math.floor(event.offsetY / squareSize);
    const col = Math.floor(event.offsetX / squareSize);

    if (event.shiftKey) {
        // Shift-click flips only the clicked square
        toggleSquare(row, col);
    } else {
        // Regular click flips in cross or square pattern based on mode
        if (crossMode) {
            flipCross(row, col);
        } else {
            flipSquare(row, col);
        }
    }
    drawBoard();
});

// Draw overlay when the mouse is over a square
canvas.addEventListener("mousemove", (event) => {
    const row = Math.floor(event.offsetY / squareSize);
    const col = Math.floor(event.offsetX / squareSize);
    drawBoard(); // Redraw the board first to clear previous overlays
    drawOverlay(row, col); // Draw the overlay for the current square
});

// Toggle between cross and square mode when space bar is pressed
window.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        crossMode = !crossMode;
    }
});

// Reset the game board
function resetGame() {
    randomizeBoard();
    drawBoard();
}

// Initialize the game
randomizeBoard();
drawBoard();
