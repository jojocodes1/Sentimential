import React from "react";
// import { pages } from "../App";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export const BorrowItemPage = (props) => {
    return (
        <div>
          <h1>Borrow item</h1>
          <Form>
            <Form.Group className="mb-3" controlId="Item Name">
            <Form.Control type="itemInfo" placeholder="Item Name:" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Item Type">
            <Form.Label></Form.Label>
            <Form.Control type="itemInfo" placeholder="Type:" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Item Lender">
            <Form.Label></Form.Label>
            <Form.Control type="itemInfo" placeholder="Lender:" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Item Description">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          {/* <p onClick={(e) => props.changePage("/WelcomePage)}>Request to borrow </p> */}
          <Link to="/WelcomePage"> Request to borrow </Link>
          <Link to="/WelcomePage"> Back to welcome </Link>
          {/* <p onClick={(e) => props.changePage(pages.WelcomePage)}></p> */}
        </div>
    );
};