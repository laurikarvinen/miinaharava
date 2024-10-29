const express = require("express");
const router = express.Router();
const highScoreController = require("../highScoreController");

router.post("/", highScoreController.addMediumScore);
router.get("/", highScoreController.getMediumScores);

module.exports = router;
