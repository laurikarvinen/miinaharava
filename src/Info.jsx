import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <h1>How to Play Minesweeper</h1>
      <p>
        Minesweeper is a game where you clear a grid of squares without hitting any mines. The number on each square represents the number of mines in the adjacent squares. Use logic to clear squares without triggering a mine!
      </p>
      <h2>Scoring</h2>
      <p>
        You earn 1 point for every safe square you reveal. The goal is to maximize your score by revealing as many safe squares as possible without hitting a mine. Hitting a mine ends the game, so be careful!
      </p>
      <h2>Mine Distribution</h2>
      <p>
        Mines are always 20% of the total grid size.
      </p>
      <h2>Custom Grid Size</h2>
      <p>
        You can set a custom grid size between 1 and 30.
      </p>
      <h2>Additional Information</h2>
      <ul>
        <li>To set a custom grid size, enter a number in the custom size input and press "Set Custom Difficulty".</li>
        <li>Use the "Restart Game" button to start a new game at any time.</li>
        <li>Check the "Scoreboard" to see high scores from previous games.</li>
      </ul>
    </div>
  );
};

export default Info;
