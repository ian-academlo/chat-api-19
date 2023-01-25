const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const { users, messages, participants, conversations } = models;

module.exports = {
  users,
  messages,
  participants,
  conversations,
};
