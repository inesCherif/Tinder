import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import ChatScreen from './components/Chats/ChatScreen'
import './App.css';
import Chats from './components/Chats/Chats';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      {/* Header */}
      
      <Router>
        <Routes>
          {/* messages of a chat */}
        <Route path='/chat/:person' element={[<Header backButton="/chat" />,<ChatScreen />]}/>
        {/* chats */}
          <Route path='/chat' element={[<Header backButton="/" />,<Chats />]}/>
          {/* main page  */}
          <Route path='/' element={[<Header />,<TinderCards/>,<SwipeButtons/>]} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 