const request = require("supertest");
const express = require("express");
const highScoreController = require("../highScoreController.js");
const hardRoutes = require("../routes/hardRoutes.js");

describe("Hard Routes", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/hard-scores", hardRoutes);
  app.use("/api/top-hard-scores", hardRoutes);

  describe("POST /api/hard-scores", () => {
    it("should add a hard score successfully", async () => {
      const res = await request(app)
        .post("/api/hard-scores")
        .send({ player_name: "Test Player", score: 200 });

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Hard score added successfully");
      expect(res.body.id).toBeDefined();
    });

    it("should return error if player name or score is missing", async () => {
      const res = await request(app)
        .post("/api/hard-scores")
        .send({ player_name: "" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe("Player name and score are required");
    });
  });

  describe("GET /api/hard-scores", () => {
    it("should retrieve top hard scores", async () => {
      const res = await request(app).get("/api/hard-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/top-hard-scores", () => {
    it("should retrieve top hard scores", async () => {
      const res = await request(app).get("/api/top-hard-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
