const { Router } = require("express");
const { addConversation } = require("../controllers/conversation.controller");

const router = Router();

router.post("/", addConversation);

module.exports = router;
