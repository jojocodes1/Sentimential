import React from "react";
import { pages } from "../App";
import logo from "../images/YS_icon.png";

export const SignupPage = (props) => {
  return (
    <div>
      <h1>Join your community</h1>
      <p style={{ position: 'relative', left: '20%', transform: 'translateX(-50%)' }}><h2>YourShare</h2></p>
      
      
      <img src={logo} className="App-logo" alt="logo" />
      <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={(e) => props.changePage(pages.WelcomePage)}>Join</p>
      <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={(e) => props.changePage(pages.WelcomePage)}>Sign-in</p>
    </div>
  );
};
