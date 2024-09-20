import request from "supertest";
import express from "express";
import healthRoute from "src/app/routes/health.route";

const app = express();
app.use("/health", healthRoute);

describe("Health Route", () => {
  it("should return a message indicating the service is healthy", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Service is healthy" });
  });
});
