import React from "react";
import { pages } from "../App";
import logo from "../images/YS_icon.png";

export const SignupPage = (props) => {
  return (
    <div>
      <h1>YourShare</h1>
      <h1>Join your community</h1>
      <img src={logo} className="App-logo" alt="logo" />


      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Join</p>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Sign-in</p>
    </div>
  );
};
