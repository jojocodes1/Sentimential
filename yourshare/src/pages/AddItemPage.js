import React from "react";
import { pages } from "../App";
import Button from 'react-bootstrap/Button';



export const AddItemPage = (props) => {

  return (
    <div>

      <h1>Borrow item</h1>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Request tomorrow </p>
      

          

      <h2>Add Item</h2>
      <p><Button href="/welcomePage">Cancel</Button> </p>
      <p><Button href="/welcomePage" type="submit">Add Item</Button> </p>

    </div>

    
  );
};
