import { Router } from "express";
import usersRouter from "./users.route";
import healthRouter from "./health.route";

const router = Router();

// Usar las rutas
router.use("/users", usersRouter);
router.use("/health", healthRouter);

export default router;
