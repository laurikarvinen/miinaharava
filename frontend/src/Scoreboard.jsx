import React, { useEffect, useState } from "react";
import "./Scoreboard.css";

const API_BASE_URL = "http://localhost:5000/api";

const fetchScores = async (difficulty) => {
  try {
    const response = await fetch(`${API_BASE_URL}/top-${difficulty}-scores`);
    if (!response.ok) {
      throw new Error(`Error fetching ${difficulty} scores: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Scoreboard = () => {
  const [easyScores, setEasyScores] = useState([]);
  const [mediumScores, setMediumScores] = useState([]);
  const [hardScores, setHardScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllScores = async () => {
      setLoading(true);
      try {
        const [easy, medium, hard] = await Promise.all([
          fetchScores("easy"),
          fetchScores("medium"),
          fetchScores("hard"),
        ]);
        setEasyScores(easy);
        setMediumScores(medium);
        setHardScores(hard);
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllScores();
  }, []);

  if (loading) {
    return <div className="scoreboard-container">Loading scores...</div>;
  }

  return (
    <div className="scoreboard-container">
      <h1>Scoreboard</h1>

      <section>
        <h2>Easy Difficulty</h2>
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {easyScores.map((entry, index) => (
              <tr key={index}>
                <td>{entry.player_name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Medium Difficulty</h2>
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {mediumScores.map((entry, index) => (
              <tr key={index}>
                <td>{entry.player_name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Hard Difficulty</h2>
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {hardScores.map((entry, index) => (
              <tr key={index}>
                <td>{entry.player_name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Scoreboard;
