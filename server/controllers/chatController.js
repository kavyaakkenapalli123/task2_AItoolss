const chats = [];

const addChat = async (req, res) => {

  try {

    const { sender, message } = req.body;

    const newChat = {
      id: Date.now(),
      sender,
      message,
      summary: `Summary: ${message.substring(0, 40)}...`
    };

    chats.push(newChat);

    res.json(newChat);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const getChats = async (req, res) => {

  try {

    res.json(chats);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
  addChat,
  getChats
};