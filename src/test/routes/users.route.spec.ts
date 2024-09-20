import express, { Request, Response, NextFunction } from "express";
import request from "supertest";
import usersRoute from "src/app/routes/users.route";

jest.mock("src/app/decorators/auth.decorator", () => ({
  IsPrivate: jest.fn(
    () => (req: Request, res: Response, next: NextFunction) => next(),
  ),
}));

const app = express();
app.use("/users", usersRoute);

describe("Users Route", () => {
  it("should return a list of users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: "John Doe" }]);
  });

  it("should return the authenticated user's information", async () => {
    const response = await request(app).get("/users/me");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: "John Doe" });
  });
});
