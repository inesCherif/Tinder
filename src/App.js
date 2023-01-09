import React from 'react';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path='/chat' element={<h1>I am the chat page</h1>}/>
          {/* <Route path='/' element={<TinderCards />}/> */}
          <Route path='/' element={<TinderCards/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
 