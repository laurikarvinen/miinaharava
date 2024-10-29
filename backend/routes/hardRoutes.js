const express = require("express");
const router = express.Router();
const highScoreController = require("../highScoreController");

router.post("/", highScoreController.addHardScore);
router.get("/", highScoreController.getHardScores);

module.exports = router;
