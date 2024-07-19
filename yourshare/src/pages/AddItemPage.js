import React from "react";
import { pages } from "../App";
import Button from 'react-bootstrap/Button';



export const AddItemPage = (props) => {

  return (
    <div>
          

      <h2>Add Item</h2>
      <p><Button href="/welcomePage">Cancel</Button> </p>
      <p><Button href="/welcomePage" type="submit">Add Item</Button> </p>

    </div>
  );
};
