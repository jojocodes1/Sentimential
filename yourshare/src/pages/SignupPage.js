import React from "react";
import { pages } from "../App";

export const SignupPage = (props) => {
  return (
    <div>
      <h1>Click on Join or Sign-in</h1>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Join</p>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Sign-in</p>
    </div>
  );
};
