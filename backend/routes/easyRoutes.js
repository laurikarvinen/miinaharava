const express = require("express");
const router = express.Router();
const highScoreController = require("../highScoreController");

router.post("/", highScoreController.addEasyScore);
router.get("/", highScoreController.getEasyScores);

module.exports = router;
