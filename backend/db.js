const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

// Create tables for high scores
//Easy
db.run(`CREATE TABLE IF NOT EXISTS high_scores_easy (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL
)`);

//Medium
db.run(`CREATE TABLE IF NOT EXISTS high_scores_medium (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL
)`);

//Hard
db.run(`CREATE TABLE IF NOT EXISTS high_scores_hard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL
)`);

module.exports = db;
