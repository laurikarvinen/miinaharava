const boardSize = 10;
const mineCount = 10;
let board = [];

function createBoard() {
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';
  board = [];

  for (let row = 0; row < boardSize; row++) {
    const rowArray = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-row', row);
      cell.setAttribute('data-col', col);
      cell.addEventListener('click', handleCellClick);
      gameBoard.appendChild(cell);
      rowArray.push({ isMine: false, revealed: false });
    }
    board.push(rowArray);
  }

  placeMines();
}

function placeMines() {
  let minesPlaced = 0;
  while (minesPlaced < mineCount) {
    const row = Math.floor(Math.random() * boardSize);
    const col = Math.floor(Math.random() * boardSize);
    if (!board[row][col].isMine) {
      board[row][col].isMine = true;
      minesPlaced++;
    }
  }
}

function handleCellClick(event) {
  const cell = event.target;
  const row = parseInt(cell.getAttribute('data-row'));
  const col = parseInt(cell.getAttribute('data-col'));
  revealCell(row, col);
}

function revealCell(row, col) {
  const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
  const cellData = board[row][col];

  if (cellData.revealed) return;
  cellData.revealed = true;
  cell.classList.add('revealed');

  if (cellData.isMine) {
    cell.textContent = '💣';
    alert('Game Over!');
    return;
  }

  const minesAround = countMinesAround(row, col);
  if (minesAround > 0) {
    cell.textContent = minesAround;
  } else {
    revealSurroundingCells(row, col);
  }
}

function countMinesAround(row, col) {
  let mineCount = 0;
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      const newRow = row + r;
      const newCol = col + c;
      if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
        if (board[newRow][newCol].isMine) mineCount++;
      }
    }
  }
  return mineCount;
}

function revealSurroundingCells(row, col) {
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      const newRow = row + r;
      const newCol = col + c;
      if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
        revealCell(newRow, newCol);
      }
    }
  }
}

document.getElementById('restartBtn').addEventListener('click', createBoard);

createBoard();