import React from "react";
// import { pages } from "../App";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import { Row } from "react-bootstrap";

export const BorrowItemPage = (props) => {
    return (
        <div>
          <Row className="align-items-center">
            <Col xs="auto"><Button href="/welcomePage" variant="outline-dark">Back</Button></Col>
            <Col xs="auto"><h1>Borrow item</h1></Col>
          </Row>
          
          <Form>
            <Row className="align-items-center">
              <Col xs="auto"></Col>
              <Col sm={4}>
              <Form.Group className="mb-3" controlId="Item Name">
                <Form.Control type="itemInfo" placeholder="Item Name:" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Item Type">
                <Form.Control type="itemInfo" placeholder="Type:" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Item Lender">
                <Form.Control type="itemInfo" placeholder="Lender:" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Item Description">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col sm={3}>
              <Row className="align-items-center">
                <Col xs="auto"><p><Button href="/welcomePage" variant="outline-light" size="sm">Cancel</Button> </p></Col>
                <Col xs="auto"><p><Button href="/welcomePage" type="submit" variant="secondary">Request to borrow</Button> </p></Col>
              </Row>
              </Col>
            </Row>
          </Form>
          {/* <p onClick={(e) => props.changePage("/WelcomePage)}>Request to borrow </p> */}
          <Link to="/WelcomePage"> Request to borrow </Link>
          <Link to="/WelcomePage"> Back to welcome </Link>
          {/* <p onClick={(e) => props.changePage(pages.WelcomePage)}></p> */}
        </div>
    );
};