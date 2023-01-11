import React from 'react';
import './Chats.css';
import Chat from './Chat';
function Chats() {
  return (
// chats:
    <div className='chats'>
      <Chat 
      // passing props to the chat component
      name="ines"
      message ="Hey!"
      timestamp="40 seconds ago"
      profilePic="https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"/>
      <Chat 
      name="khaled"
      message ="Hi!"
      timestamp="50 minutes ago"
      profilePic="https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"/>
    </div>
  )
}

export default Chats
