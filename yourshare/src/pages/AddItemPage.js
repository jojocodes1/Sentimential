import React from "react";
// import { pages } from "../App";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/esm/Col";
import { Row } from "react-bootstrap";



export const AddItemPage = (props) => {

  return (
    


    <div>
       <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> </Navbar.Brand>
          <Nav className="me-auto">
           
          </Nav>
        </Container>
      </Navbar>
      <Row className="align-items-center">
            <Col xs="auto"><Button href="/welcomePage" variant="outline-dark">Back</Button></Col>
            <Col xs="auto"><h1>Add item</h1></Col>
          </Row>
          
      

      <form>
      <Row className="align-items-center">
              <Col sm={7}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="Item name" placeholder="Item name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="Info" placeholder="Type" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={3}  placeholder="Description"/>
      </Form.Group>

      </Col>
      <Row className="align-items-center">
        <Col></Col>
              <Col sm={4}>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      </Col>
      </Row>
      </Row>
    </form>
    <Row>
              <Col></Col>
              <Col sm={3}>
              <Row className="align-items-center">
                <Col xs="auto"><p><Button href="/welcomePage" variant="outline-light" size="sm">Cancel</Button> </p></Col>
                <Col xs="auto"><p><Button href="/welcomePage" type="submit" variant="secondary">Add Item </Button> </p></Col>
              </Row>
              </Col>
            </Row>
    

   

    </div>

    




    
  );
};
export default AddItemPage;

