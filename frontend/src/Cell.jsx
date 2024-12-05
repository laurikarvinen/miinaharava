
import React, { useState } from 'react';
import Flag from './Flag';
import './Minesweeper.css';

const Cell = ({ row, col, revealed, isMine, value, onClick }) => {
  const [flagged, setFlagged] = useState(false);

  const handleRightClick = (event) => {
    event.preventDefault();
    if (!revealed) {
      setFlagged(!flagged);
    }
  };

  let cellClass = 'cell';
  if (revealed) {
    cellClass += ' revealed';
    if (isMine) {
      cellClass += ' mine';
    } else if (value) {
      cellClass += ` number-${value}`;
    }
  }

  return (
    <div
      className={cellClass}
      onClick={onClick}
      onContextMenu={handleRightClick}
      data-testid={`cell-${row}-${col}`}
    >
      {revealed ? (isMine ? '💣' : (value !== null ? value : '')) : (flagged ? <Flag /> : '')}
    </div>
  );
};

export default Cell;
