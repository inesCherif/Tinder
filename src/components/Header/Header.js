import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import Logo from "../../img/logo.png";
//Since i'm using visual studio code I installed some Reactjs code snippets that make it easier to enter repeating code patterns and with that mitigates the need for a developer to spend time writing lines of code from scratch. 
// rfce Creates a React Functional Component 
// The function returns react element, in other word it returns some JSX
// JSX (Javasript Syntax Extension) basically looks like HTML mixed with Javascript. It converts HTML tags into reat elements.
// header is function that return the header of our website 
function header() {
  return (
    <div className='header'>
        {/* profile icon */}
        <IconButton>
          <PersonIcon className='header_icon' fontSize='large'/>
        </IconButton>
        {/* Tinder Logo */}
        <img className='header_logo' src={Logo} alt="Tinder Logo" />
        {/* messages icon */}
        <IconButton>
          <ForumIcon className='header_icon' fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default header // export header funtion so it can be used in any other file of either the same program or even in an entirely different program with the help of the import statements 



