import React from "react";
import { pages } from "../App";

export const CommunityPage = (props) => {
  return (
    <div>
      <h1> Manage Community</h1>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Welcome Page </p>
    </div>
  );
};
