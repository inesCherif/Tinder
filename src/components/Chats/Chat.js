import React from 'react';
import './Chats'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

// chat function with parameters (props)
function Chat({name, message, timestamp, profilePic}) {
  return (
    <Link to={`/chat/${name}`}>
    <div className='chat'>
      <Avatar className="chat_image" src={profilePic}/>
      <div className='chat_details'>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className='chat_timestamp'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat
