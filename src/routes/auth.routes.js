// registro
// login
const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();
/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - Auth
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
 *                   example: user created
 */

router.post("/register", register);
router.post("/login", login);

module.exports = router; // ahorita lo usamos en app
