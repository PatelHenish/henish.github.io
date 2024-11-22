// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Game Class: Handles the main game logic
class Game {
  constructor() {
    this.boardSize = 3; // Start with a 3x3 grid
    this.board = [];
    this.emptyTile = { row: 2, col: 2 }; // Position of the empty tile
    this.moves = 0;
    this.time = 0;
    this.timerInterval = null;
    this.createBoard();
  }

  // Creates the initial puzzle board
  createBoard() {
    let number = 1;
    for (let row = 0; row < this.boardSize; row++) {
      this.board[row] = [];
      for (let col = 0; col < this.boardSize; col++) {
        if (row === this.boardSize - 1 && col === this.boardSize - 1) {
          this.board[row][col] = null; // Empty space
        } else {
          this.board[row][col] = number++;
        }
      }
    }
    this.shuffleBoard();
    this.renderBoard();
  }

  // Shuffles the puzzle board randomly
  shuffleBoard() {
    let shuffled = false;
    while (!shuffled) {
      shuffled = true;
      for (let row = 0; row < this.boardSize; row++) {
        for (let col = 0; col < this.boardSize; col++) {
          if (Math.random() < 0.5) {
            const newRow = Math.floor(Math.random() * this.boardSize);
            const newCol = Math.floor(Math.random() * this.boardSize);
            if (this.board[newRow][newCol] !== null) {
              [this.board[row][col], this.board[newRow][newCol]] = [this.board[newRow][newCol], this.board[row][col]];
              if (this.checkVictory()) return;
              shuffled = false;
            }
          }
        }
      }
    }
  }

  // Check if the player has won the game
  checkVictory() {
    let number = 1;
    for (let row = 0; row < this.boardSize; row++) {
      for (let col = 0; col < this.boardSize; col++) {
        if (this.board[row][col] !== number && !(row === this.boardSize - 1 && col === this.boardSize - 1)) {
          return false;
        }
        number++;
      }
    }
    return true;
  }

  // Render the game board on the page
  renderBoard() {
    const boardContainer = document.getElementById('board');
    boardContainer.innerHTML = '';
    for (let row = 0; row < this.boardSize; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      for (let col = 0; col < this.boardSize; col++) {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (this.board[row][col] !== null) {
          tileElement.textContent = this.board[row][col];
          tileElement.onclick = () => this.moveTile(row, col);
        } else {
          tileElement.classList.add('empty');
        }
        rowElement.appendChild(tileElement);
      }
      boardContainer.appendChild(rowElement);
    }
  }

  // Move the tile if it’s adjacent to the empty space
  moveTile(row, col) {
    const { row: emptyRow, col: emptyCol } = this.emptyTile;
    if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
      [this.board[row][col], this.board[emptyRow][emptyCol]] = [this.board[emptyRow][emptyCol], this.board[row][col]];
      this.emptyTile = { row, col };
      this.moves++;
      this.renderBoard();

      if (this.checkVictory()) {
        clearInterval(this.timerInterval);
        alert(`You win! Moves: ${this.moves}`);
        this.adjustDifficulty();
      }
    }
  }

  // Adjust difficulty based on performance
  adjustDifficulty() {
    if (this.moves < 15) {
      this.boardSize++;
      this.createBoard();
    }
  }

  // Start the game timer
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.time++;
      document.getElementById('timer').textContent = `Time: ${this.time}s`;
    }, 1000);
  }

  // Stop the timer
  stopTimer() {
    clearInterval(this.timerInterval);
  }
}

// Initialize the game
const game = new Game();
game.startTimer();

// HTML Elements for User Interface
const resetButton = document.getElementById('reset');
resetButton.onclick = () => {
  game.createBoard();
  game.moves = 0;
  game.time = 0;
  game.startTimer();
};

