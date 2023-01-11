import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import Logo from "../../img/logo.png";
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

//Since i'm using visual studio code I installed some Reactjs code snippets that make it easier to enter repeating code patterns and with that mitigates the need for a developer to spend time writing lines of code from scratch. 
// rfce Creates a React Functional Component 
// The function returns react element, in other word it returns some JSX
// JSX (Javasript Syntax Extension) basically looks like HTML mixed with Javascript. It converts HTML tags into reat elements.
// header is function that return the header of our website 
function header({ backButton }) {
  return (
    <div className='header'>
      {backButton ? (
        <Link to="/">
          <IconButton >
          <ArrowBackIosIcon fontSize='large' className='header_icon'/>
        </IconButton>
        </Link>
        
      ):(
      //profile icon 
        <IconButton>
          <PersonIcon className='header_icon' fontSize='large'/>
        </IconButton>
      )}
        {/* when we click on the log it takes us to the main page */}
        <Link to="/">
        {/* Tinder Logo */}
        <img className='header_logo' src={Logo} alt="Tinder Logo" />
        </Link>
        
        {/* when we click on the chat icon it take us to the chat page */}
        <Link to="/chat ">
        <IconButton>
        {/* messages icon */}
          <ForumIcon className='header_icon' fontSize='large'/>
        </IconButton>
        </Link>

    </div>
  )
}

export default header // export header funtion so it can be used in any other file of either the same program or even in an entirely different program with the help of the import statements 



