import { Request, Response, NextFunction } from "express";

export function IsPublic() {
  return (req: Request, res: Response, next: NextFunction) => {
    next();
  };
}

export function IsPrivate(strategy: string, roles?: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userRoles = ["ADMIN"];

    if (roles && !roles.some((role) => userRoles.includes(role))) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
    return undefined;
  };
}
