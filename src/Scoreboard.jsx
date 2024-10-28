
import React from 'react';
import './Scoreboard.css';

const Scoreboard = () => {

  const scores = [
    { name: 'Alice', score: 25 },
    { name: 'Bob', score: 20 },
    { name: 'Charlie', score: 18 },
    { name: 'Dana', score: 15 },
    { name: 'Eve', score: 12 }
  ];

  return (
    <div className="scoreboard-container">
      <h1>Scoreboard</h1>
      <table className="scoreboard-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
