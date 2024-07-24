import React from "react";
import { pages } from "../App";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import { Row } from "react-bootstrap";

export const BorrowItemPage = (props) => {
    return (
        <div>
          <Row>
            <Col sm={1}><Button href="/welcomePage" variant="outline-dark">Back</Button></Col>
            <Col sm={2}><h1>Borrow item</h1></Col>
          </Row>
          
          <Form>
            <Row>
              <Col sm={1}></Col>
              <Col sm={5}>
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
              <Row>
                <Col sm={2}><p><Button href="/welcomePage" variant="outline-light">Cancel</Button> </p></Col>
                <Col sm={6}><p><Button href="/welcomePage" type="submit" variant="secondary">Request to borrow</Button> </p></Col>
              </Row>
              </Col>
            </Row>
          </Form>
        </div>
    );
};