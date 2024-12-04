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
 
// white pieces 
boardState[8] = Array(8).fill(pieceSymbol.BlackPawn);
boardState[7]= 
    pieceSymbols.whiteRook,
    pieceSymbols.whiteKnight,
    pieceSymbols.whiteBishopBishop,
    pieceSymbols.whiteQueen,
    pieceSymbols.whiteKing,
    pieceSymbols.whiteBishop,
    pieceSymbols.whiteKnight,
    pieceSymbols.whiteRook,
    
}

