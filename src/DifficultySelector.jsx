import React, { useState } from 'react';

const DifficultySelector = ({ setDifficulty }) => {
  const [customSize, setCustomSize] = useState(10);

  return (
    <div>
      <button onClick={() => setDifficulty(5)}>5x5</button>
      <button onClick={() => setDifficulty(10)}>10x10</button>
      <button onClick={() => setDifficulty(15)}>15x15</button>
      <div>
        <input
          type="number"
          value={customSize}
          onChange={(e) => setCustomSize(Number(e.target.value))}
          placeholder="Custom size"
          min="1"
          max="25"
        />
        <button onClick={() => setDifficulty(customSize)}>Set Custom Difficulty</button>
      </div>
    </div>
  );
};

export default DifficultySelector;
