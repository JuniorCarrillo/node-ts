import { Request, Response, NextFunction } from "express";

import { IsPublic, IsPrivate } from "src/app/decorators/auth.decorator";

describe("Auth Decorators", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe("IsPublic", () => {
    it("should call next function", () => {
      const isPublic = IsPublic();
      isPublic(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe("IsPrivate", () => {
    it("should return 401 if no token is provided", () => {
      req.headers = {};

      const isPrivate = IsPrivate("strategy");
      isPrivate(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized" });
    });

    it("should return 403 if user does not have required roles", () => {
      req.headers = { authorization: "Bearer token" };

      const isPrivate = IsPrivate("strategy", ["USER"]);
      isPrivate(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ message: "Forbidden" });
    });

    it("should call next function if user has required roles", () => {
      req.headers = { authorization: "Bearer token" };

      const isPrivate = IsPrivate("strategy", ["ADMIN"]);
      isPrivate(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });

    it("should call next function if no roles are required", () => {
      req.headers = { authorization: "Bearer token" };

      const isPrivate = IsPrivate("strategy");
      isPrivate(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
