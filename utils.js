// The tic tac toe board representing the board positions as an object
let board = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
};

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function validateMove(pos) {
  return Number.isInteger(+pos) && board[pos] === " " && pos >= 1 && pos <= 9;
}

function recordPosition(pos, player) {
  board[pos] = player.toUpperCase();
}

function checkWin(player) {
  return winningCombos.some((combo) =>
    combo.every((position) => board[position] === player)
  );
}

function checkTie() {
  return !Object.values(board).includes(" ");
}

function printBoard() {
  console.log(
    "\n " +
      board[1] +
      " | " +
      board[2] +
      " | " +
      board[3] +
      "\n" +
      " ---------\n" +
      " " +
      board[4] +
      " | " +
      board[5] +
      " | " +
      board[6] +
      "\n" +
      " ---------\n" +
      " " +
      board[7] +
      " | " +
      board[8] +
      " | " +
      board[9] +
      "\n"
  );
}

module.exports = {
  checkWin,
  checkTie,
  recordPosition,
  printBoard,
  validateMove,
};
