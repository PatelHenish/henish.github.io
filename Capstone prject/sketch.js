
// Capstonbe project 
// Henish and Sahil "patel" 
// 12/02/2024    Month/day/year
// We are creating a simple and working chess game  

const pieceSymbol = {
  empty:"",
  whitePawn: "♙",
  WhiteRook: "♖",
  WhiteKnight: "♘",
  WhiteBishop: "♗",
  WhiteQueen: "♕",
  WhiteKing:"♔",
  BlackPawn: "♙",
  BlackRook: "♖",
  BlackKnight: "♘",
  Blackbishop: "♗",
  BlackQueen: "♕",
  BlackKing: "♔",

};

let boardState = Array.from({ length: 8 }, () => Array(8).fill(pieceSymbols.empty)); 


function initializeBoard() {
  // Black pieces
  boardState[0] = [
      pieceSymbols.blackRook,
      pieceSymbols.blackKnight,
      pieceSymbols.blackBishop,
      pieceSymbols.blackQueen,
      pieceSymbols.blackKing,
      pieceSymbols.blackBishop,
      pieceSymbols.blackKnight,
      pieceSymbols.blackRook,
  ];
  boardState[1] = Array(8).fill(pieceSymbols.blackPawn);

  // White pieces
  boardState[6] = Array(8).fill(pieceSymbols.whitePawn);
  boardState[7] = [
      pieceSymbols.whiteRook,
      pieceSymbols.whiteKnight,
      pieceSymbols.whiteBishop,
      pieceSymbols.whiteQueen,
      pieceSymbols.whiteKing,
      pieceSymbols.whiteBishop,
      pieceSymbols.whiteKnight,
      pieceSymbols.whiteRook,
  ];
}

function renderBoard() {
  const chessboard = document.getElementById("chessboard");
  chessboard.innerHTML = ""; // Clear the board

  for (let row = 0; row < 8; row++) {
      const tableRow = document.createElement("tr");
      for (let col = 0; col < 8; col++) {
          const cell = document.createElement("td");
          cell.className = (row + col) % 2 === 0 ? "light" : "dark";
          cell.textContent = boardState[row][col];
          cell.dataset.row = row;
          cell.dataset.col = col;

          // Add click handler for interaction
          cell.addEventListener("click", function () {
              return handleCellClick(cell);
            });

          tableRow.appendChild(cell);
      }
      chessboard.appendChild(tableRow);
  }
  
}
