import React from "react";
// import { pages } from "../App";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



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
          
      <h2>Add Item</h2>
      

      <form>
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
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
    </form>

    <p><Button href="/welcomePage">Cancel</Button> </p>
      <p><Button href="/welcomePage" type="submit">Add Item</Button> </p>

    </div>

    




    
  );
};
export default AddItemPage;

