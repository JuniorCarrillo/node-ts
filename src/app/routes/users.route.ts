import { Router, Request, Response } from "express";
import { IsPrivate } from "../decorators";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: John Doe
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Unauthorized
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     description: Returns a list of all users.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", (req: Request, res: Response) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

/**
 * @swagger
 * /users/me:
 *   get:
 *     tags: [Users]
 *     summary: Get authenticated user
 *     description: Returns the authenticated user's information.
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: The authenticated user's information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get(
  "/me",
  IsPrivate("jwt", ["ADMIN"]),
  (req: Request, res: Response) => {
    res.json({ id: 1, name: "John Doe" });
  },
);

export default router;
