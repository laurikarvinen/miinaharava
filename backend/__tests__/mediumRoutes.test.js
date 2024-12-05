const request = require("supertest");
const express = require("express");
const highScoreController = require("../highScoreController.js");
const mediumRoutes = require("../routes/mediumRoutes.js");

describe("Medium Routes", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/medium-scores", mediumRoutes);
  app.use("/api/top-medium-scores", mediumRoutes);

  describe("POST /api/medium-scores", () => {
    it("should add a medium score successfully", async () => {
      const res = await request(app)
        .post("/api/medium-scores")
        .send({ player_name: "Test Player", score: 150 });

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Medium score added successfully");
      expect(res.body.id).toBeDefined();
    });

    it("should return error if player name or score is missing", async () => {
      const res = await request(app)
        .post("/api/medium-scores")
        .send({ player_name: "" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe("Player name and score are required");
    });
  });

  describe("GET /api/medium-scores", () => {
    it("should retrieve top medium scores", async () => {
      const res = await request(app).get("/api/medium-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/top-medium-scores", () => {
    it("should retrieve top medium scores", async () => {
      const res = await request(app).get("/api/top-medium-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
