
import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import DifficultySelector from './DifficultySelector';
import './Minesweeper.css';

const Minesweeper = () => {
  const [boardSize, setBoardSize] = useState(10);
  const [mineCount, setMineCount] = useState(Math.floor((10 * 10) * 0.2));
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    createBoard();
  }, [boardSize, mineCount]);

  const setDifficulty = (size) => {
    setBoardSize(size);
    setMineCount(Math.floor((size * size) * 0.2));
    setGameOver(false);
    createBoard();
  };

  const createBoard = () => {
    setGameOver(false);
    const newBoard = Array.from({ length: boardSize }, () =>
      Array.from({ length: boardSize }, () => ({ isMine: false, revealed: false, value: null }))
    );
    placeMines(newBoard);
    setBoard(newBoard);
  };

  const placeMines = (board) => {
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const row = Math.floor(Math.random() * boardSize);
      const col = Math.floor(Math.random() * boardSize);
      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        minesPlaced++;
      }
    }
  };

  const handleCellClick = (row, col) => {
    if (gameOver || board[row][col].revealed) return;
    revealCell(row, col);
  };

  const revealCell = (row, col) => {
    const newBoard = [...board];
    const cell = newBoard[row][col];

    if (cell.revealed) return;
    cell.revealed = true;

    if (cell.isMine) {
      setGameOver(true);
      alert('Game Over!');
    } else {
      const minesAround = countMinesAround(row, col);
      if (minesAround > 0) {
        cell.value = minesAround;
      } else {
        revealSurroundingCells(row, col, newBoard);
      }
    }
    setBoard(newBoard);
  };

  const countMinesAround = (row, col) => {
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
  };

  const revealSurroundingCells = (row, col, newBoard) => {
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        const newRow = row + r;
        const newCol = col + c;
        if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
          if (!newBoard[newRow][newCol].revealed) {
            revealCell(newRow, newCol);
          }
        }
      }
    }
  };

  return (
    <div id="gameContainer">
      <h1>Minesweeper</h1>
      <div
        id="gameBoard"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 30px)`,
          gridTemplateRows: `repeat(${boardSize}, 30px)`
        }}
      >
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                row={rowIndex}
                col={colIndex}
                revealed={cell.revealed}
                isMine={cell.isMine}
                value={cell.value}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div id="buttonContainer">
        <DifficultySelector setDifficulty={setDifficulty} />
        <button onClick={createBoard}>Restart Game</button>
      </div>
    </div>
  );
};

export default Minesweeper;
