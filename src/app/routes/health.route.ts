import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Health check operations
 */

/**
 * @swagger
 * /health:
 *   get:
 *     tags: [Health]
 *     summary: Check the health of the service
 *     description: Returns a message indicating the health status of the service.
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 */
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Service is healthy" });
});

export default router;
