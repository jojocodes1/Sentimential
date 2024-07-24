import React from "react";
// import { pages, App } from "../App";
import {Link} from "react-router-dom";

export const WelcomePage = (props) => {
  return (
    <div>
      <h1>Welcome []</h1>

      <Link to="/AddItemPage"> Add item </Link>
      <Link to="/CommunityPage"> Community </Link>
      <Link to="/BorrowItemPage"> Borrow Item </Link>

      {/* <p onClick={(e) => props.changePage(pages.AddItemPage)}>Add item</p>
      <p onClick={(e) => props.changePage(pages.CommunityPage)}>Community</p>
      <p onClick={(e) => props.changePage(pages.BorrowItemPage)}>Borrow Item</p> */}
    </div>

    
  );


      
};
