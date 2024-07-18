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
  <div>
      <ul>
        <li>Blender</li>
        <li>Rake</li>
        <li>Car</li>
        <li>Bike</li>
        <li>Drill</li>
        <li>Ladder</li>
        <li>Kayak</li>
        <li>The Office DVD Box Set</li>
        <li>Cart</li>

      </ul>
    </div>
};
