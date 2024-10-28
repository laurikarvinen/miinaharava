import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Info from './Info';
import Minesweeper from './Minesweeper';
import Scoreboard from './Scoreboard';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Minesweeper</Link>
          <Link to="/scoreboard">Scoreboard</Link>
          <Link to="/info">Info</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Minesweeper />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;