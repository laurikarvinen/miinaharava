const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

//Add easy difficulty score
exports.addEasyScore = (req, res) => {
  const { player_name, score } = req.body;

  if (!player_name || !score) {
    return res
      .status(400)
      .json({ message: "Player name and score are required" });
  }

  const sql = "INSERT INTO high_scores_easy (player_name, score) VALUES (?, ?)";
  db.run(sql, [player_name, score], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Error adding high score" });
    }

    res.json({
      message: "High score added successfully",
      id: this.lastID,
    });
  });
};

//Get easy difficulty score
exports.getEasyScores = (req, res) => {
  const limit = 10;

  db.all(
    `SELECT * FROM high_scores_easy ORDER BY score DESC LIMIT ?`,
    [limit],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Error retrieving top scores" });
      }

      res.json(rows);
    }
  );
};

//Add medium difficulty score
exports.addMediumScore = (req, res) => {
  const { player_name, score } = req.body;

  if (!player_name || !score) {
    return res
      .status(400)
      .json({ message: "Player name and score are required" });
  }

  const sql =
    "INSERT INTO high_scores_medium (player_name, score) VALUES (?, ?)";
  db.run(sql, [player_name, score], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Error adding medium score" });
    }

    res.json({
      message: "Medium score added successfully",
      id: this.lastID,
    });
  });
};

//Get medium difficulty score
exports.getMediumScores = (req, res) => {
  const limit = 10;

  db.all(
    `SELECT * FROM high_scores_medium ORDER BY score DESC LIMIT ?`,
    [limit],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ message: "Error retrieving top medium scores" });
      }

      res.json(rows);
    }
  );
};

//Add hard difficulty score
exports.addHardScore = (req, res) => {
  const { player_name, score } = req.body;

  if (!player_name || !score) {
    return res
      .status(400)
      .json({ message: "Player name and score are required" });
  }

  const sql = "INSERT INTO high_scores_hard (player_name, score) VALUES (?, ?)";
  db.run(sql, [player_name, score], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Error adding hard score" });
    }

    res.json({
      message: "Hard score added successfully",
      id: this.lastID,
    });
  });
};

//Get hard difficulty score
exports.getHardScores = (req, res) => {
  const limit = 10;

  db.all(
    `SELECT * FROM high_scores_hard ORDER BY score DESC LIMIT ?`,
    [limit],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ message: "Error retrieving top hard scores" });
      }

      res.json(rows);
    }
  );
};
