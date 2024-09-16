import { rootHandler, server } from "../app";
import { Request, Response } from "express";

describe("API Tests", () => {
  afterAll((done) => {
    server.close(done);
  });

  describe("GET /", () => {
    it("should return the correct message", (done) => {
      const req = {} as Request;
      req.method = "GET";
      req.url = "/";

      const res = {} as Response;
      let responseData = "";
      res.send = (message: string) => {
        responseData = message;
        try {
          expect(responseData).toBe("The sedulous hyena ate the antelope!");
          done();
        } catch (error) {
          done(error);
        }
        return res;
      };

      rootHandler(req, res);
    });
  });
});
