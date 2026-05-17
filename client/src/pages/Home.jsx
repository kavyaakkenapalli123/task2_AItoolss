import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const res = await axios.get('http://localhost:5000/api/chats');
    setChats(res.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const saveChat = async () => {

    if (!sender || !message) {
      alert('Please fill all fields');
      return;
    }

    await axios.post('http://localhost:5000/api/chats/add', {
      sender,
      message
    });

    setSender('');
    setMessage('');

    fetchChats();
  };

  return (
    <div className="container">

      <h1>WhatsApp AI Smart Recall</h1>

      <input
        type="text"
        placeholder="Sender Name"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />

      <textarea
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button onClick={saveChat}>
        Save Chat
      </button>

      <div className="chat-list">

        {chats.map((chat) => (
          <div className="chat-card" key={chat._id}>

            <h3>{chat.sender}</h3>

            <p>{chat.message}</p>

            <small>{chat.summary}</small>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;