const { participants } = require("../models");

class ParticipantService {
  static async add(conversationId, userId) {
    try {
      const result = await participants.create({
        conversation_id: conversationId,
        user_id: userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ParticipantService;
