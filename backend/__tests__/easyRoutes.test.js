const request = require("supertest");
const express = require("express");
const highScoreController = require("../highScoreController.js");
const easyRoutes = require("../routes/easyRoutes.js");

describe("Easy Routes", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/easy-scores", easyRoutes);
  app.use("/api/top-easy-scores", easyRoutes);

  describe("POST /api/easy-scores", () => {
    it("should add an easy score successfully", async () => {
      const res = await request(app)
        .post("/api/easy-scores")
        .send({ player_name: "Test Player", score: 100 });

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("High score added successfully");
      expect(res.body.id).toBeDefined();
    });

    it("should return error if player name or score is missing", async () => {
      const res = await request(app)
        .post("/api/easy-scores")
        .send({ player_name: "" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe("Player name and score are required");
    });
  });

  describe("GET /api/easy-scores", () => {
    it("should retrieve top easy scores", async () => {
      const res = await request(app).get("/api/easy-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/top-easy-scores", () => {
    it("should retrieve top easy scores", async () => {
      const res = await request(app).get("/api/top-easy-scores");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
