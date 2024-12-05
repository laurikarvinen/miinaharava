import React, { useState } from 'react';

const DifficultySelector = ({ setDifficulty }) => {
  const [customSize, setCustomSize] = useState(10);

  return (
    <div>
      <div id="difficultyButtons">
        <button onClick={() => setDifficulty(5, 'easy')}>5x5</button>
        <button onClick={() => setDifficulty(10, 'medium')}>10x10</button>
        <button onClick={() => setDifficulty(15, 'hard')}>15x15</button>
      </div>
      <div id="difficultyContainer">
        <input
          type="number"
          value={customSize}
          onChange={(e) => setCustomSize(Number(e.target.value))}
          placeholder="Custom size"
          min="1"
          max="25"
        />
        <button onClick={() => setDifficulty(customSize, 'custom')}>Set Custom Difficulty</button>
      </div>
    </div>
  );
};

export default DifficultySelector;
