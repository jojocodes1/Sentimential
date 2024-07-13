import React from "react";
import { pages } from "../App";

export const WelcomePage = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p onClick={(e) => props.changePage(pages.AddItemPage)}>Add item</p>
      <p onClick={(e) => props.changePage(pages.CommunityPage)}>Community</p>
    </div>
  );
};
