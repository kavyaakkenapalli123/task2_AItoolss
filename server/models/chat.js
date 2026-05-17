const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({

  sender: {
    type: String
  },

  message: {
    type: String
  },

  summary: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Chat', chatSchema);