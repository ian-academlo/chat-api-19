const { Router } = require("express");
const { addConversation } = require("../controllers/conversation.controller");

/**
 * @openapi
 * /api/v1/conversations:
 *   post:
 *     summary: create a new conversation
 *     tags: [Converstions]
 *     requestBody:
 *       description: Required field into body request to create a new conversation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createConversation'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: conversation created
 *     400:
 *       description: Bad request
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: something wrong / title or user id not provided
 */

const router = Router();

router.post("/", addConversation);

module.exports = router;
