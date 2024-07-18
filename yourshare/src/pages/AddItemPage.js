import React from "react";
import { pages } from "../App";



export const AddItemPage = (props) => {

  return (
    <div>
          

      <h2>Add Item</h2>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Cancel </p>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Add  Item </p>

    </div>
  );
};
