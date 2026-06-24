// A Tic-Tac-Toe game using Node.js and CLI terminal
// Use prompt-sync to prompt terminal for player positions
const prompt = require("prompt-sync")();
const {
  checkWin,
  checkTie,
  printBoard,
  recordPosition,
  validateMove,
} = require("./utils");

// Sequence of events for each turn
function playCurrentTurn(currentPlayer) {
  console.log(`Your turn player ${currentPlayer}`);
  let move = prompt("What position would you like to take?");

  // A way to easily exit the game
  if (move.toLowerCase() === "q") {
    console.log("Game exited.");
    process.exit(0);
  }
  // Validate the current player's move
  // And check if there is a win, a tie, or recurring turn
  if (validateMove(move) === true) {
    recordPosition(move, currentPlayer);
    printBoard();
    if (checkWin(currentPlayer) === true) {
      console.log(`Player ${currentPlayer}, you win!`);
      return;
    }
    if (checkTie() === true) {
      console.log("Ops! The game is tied!");
      return;
    }
    playCurrentTurn(currentPlayer === "X" ? "O" : "X");
  } else {
    console.log("Not a valid input. please try again...");
    playCurrentTurn(currentPlayer);
  }
}

// Start game and randomly select a player
console.log("Start Game! Pick a position after each turn (or Q to quit) \n");
console.log(
  " 1 | 2 | 3 \n" +
    " --------- \n" +
    " 4 | 5 | 6 \n" +
    " --------- \n" +
    " 7 | 8 | 9 \n"
);
let currentPlayer = Math.random() < 0.5 ? "X" : "O";
console.log("Randomly selected starting player");
playCurrentTurn(currentPlayer);
