const express = require('express');

const router = express.Router();

const {
  addChat,
  getChats
} = require('../controllers/chatController');

router.post('/add', addChat);

router.get('/', getChats);

module.exports = router;