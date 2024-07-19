import React from "react";
import { pages } from "../App";

export const BorrowItemPage = (props) => {
    return (
        <div>
          <h1>Borrow item</h1>
          <p onClick={(e) => props.changePage(pages.WelcomePage)}>Request to borrow </p>
          <p onClick={(e) => props.changePage(pages.WelcomePage)}>Back to welcome</p>
        </div>
    );
};