const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

//Function to create table
function createTable(tableName) {
  const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_name TEXT NOT NULL,
    score INTEGER NOT NULL
  )`;

  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

//Create all the tables
async function main() {
  try {
    await createTable("high_scores_easy");
    await createTable("high_scores_medium");
    await createTable("high_scores_hard");
    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error.message);
  } finally {
    db.close((err) => {
      if (err) {
        console.error("Error closing database:", err.message);
      }
    });
  }
}

main();
