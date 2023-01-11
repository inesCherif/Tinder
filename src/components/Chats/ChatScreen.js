import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import "./ChatScreen.css"
function ChatScreen() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    {
        name:"ines",
        image: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
        message: 'heeeey <3'
    },
    {
        name:"khaled",
        image: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
        message: 'Okay'
    },
    {
        // name:"mark",
        image: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
        message: 'hows it going! '
    }
  ]);

  const handleset = e =>{
    e.preventDefault();
    setMessages([...messages,{message : input}]);
    setInput('');
  }

  return (
    <div className='chatScreen'>
      <p className='chatScreen_timestamp'>YOU MATCHED WITH INES ON 01/01/2023</p>
      {messages.map((message) =>(
        message.name ? (
            <div className='chatScreen_message'>
            <Avatar
            className='chatScreen_image'
            alt={message.name}
            src={message.image}
            />
            <p className='ChatScreen_text'>{message.message}</p>
            </div>
        ):(
            <div className='chatScreen_message'>
                <p className='chatScreenText'>{message.message}</p>
            </div>
        )
        
      ))}

      <div>
        <form className='chatScreen_input'>
          <input 
          value={input}
          onChange={e =>setInput(e.target.value)}
          className='chatScreen_inputField' placeholder='Type a message...' type="text" />
          <button
          onClick={handleset}
          type='submit'
          className='chatScreen_inputButton'>SEND</button>
        </form>
      </div>


    </div>
  )
}

export default ChatScreen
