//Henish Patel
// 11/20/2024 Starting date 
// Making a puzzle in which we will get random black box and we have to use blocks to maek it white
// we can use c change and shift and left click to cheat    


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

// random board
function randomizeBoard() {
    board = board.map(row => row.map(() => Math.random() < 0.5 ? 0 : 255));
}

// draw board
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, i) => row.forEach((cell, j) => {
        ctx.fillStyle = cell === 0 ? "black" : "white";
        ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
    }));
    checkWinCondition();
}

// draw the overlay based on the selected square
function drawOverlay(row, col) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // transparent red
    if (crossMode) {
        [0, -1, 1].forEach(offset => {
            toggleOverlay(row + offset, col); // Center, Top, Bottom
            toggleOverlay(row, col + offset); // Left, Right
        });
    } else {
        [-1, 0, 1].forEach(i => {
            [-1, 0, 1].forEach(j => {
                toggleOverlay(row + i, col + j);
            });
        });
    }
}

// overlay for a specific square
function toggleOverlay(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
        ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
}

// Color of a square
function toggleSquare(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
        board[row][col] = board[row][col] === 0 ? 255 : 0;
    }
}

// Flip squares 
function flipCross(row, col) {
    [0, -1, 1].forEach(offset => {
        toggleSquare(row + offset, col); //enter, Top, Bottom
        toggleSquare(row, col + offset); // Left, Right
    });
}

// Flip squares 
function flipSquare(row, col) {
    [-1, 0, 1].forEach(i => {
        [-1, 0, 1].forEach(j => {
            toggleSquare(row + i, col + j);
        });
    });
}

// win condition
function checkWinCondition() {
    const firstColor = board[0][0];
    const won = board.every(row => row.every(cell => cell === firstColor));
    if (won) {
        alert("You Win!");
        resetGame(); // Optional reset game after winning
    }
}

// handle mouse clicks
canvas.addEventListener("click", (event) => {
    const row = Math.floor(event.offsetY / squareSize);
    const col = Math.floor(event.offsetX / squareSize);

    if (event.shiftKey) {
        toggleSquare(row, col);
    } else {
        crossMode ? flipCross(row, col) : flipSquare(row, col);
    }
    drawBoard();
});

// draw overlay when the mouse is over a square
canvas.addEventListener("mousemove", (event) => {
    const row = Math.floor(event.offsetY / squareSize);
    const col = Math.floor(event.offsetX / squareSize);
    drawBoard(); // Redraw the board first to clear previous overlays
    drawOverlay(row, col); // Draw the overlay for the current square
});

// changebetween cross and square mode when space bar is pressed
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

// Running the game
randomizeBoard();
drawBoard();