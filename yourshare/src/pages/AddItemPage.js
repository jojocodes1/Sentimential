import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

//import CreateUpload from "./components/ImageUpload";

export const AddItemForm = () => {
  const [formData, setFormData] = useState({
    Item_Name: "",
    Type: "",
    Description: ""
  });

  const { Item_Name, Type, Description } = formData;
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: Item_Name,
      lender: "A Friend", 
      type: Type,
      description: Description
    };
    navigate("/welcomePage", {
      state: { username: location.state.username, newItem }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formItem_Name">
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          name="Item_Name"
          value={Item_Name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formType">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          name="Type"
          value={Type}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea" 
          rows={5} 
          name="Description"
          value={Description}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export const AddItemPage = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs="auto">
          <Link to="/welcomePage">
            <Button style={{ backgroundColor: "black", borderColor: "#black" }}>
              Back
            </Button>
          </Link>
        </Col>
        <Col xs="auto" className="ml-auto">
          <h1>Add Item</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddItemForm/>
        </Col>
        <Col xs={4} className="text-right">
         
        </Col>
      </Row>
      
     


      <Row className="align-items-center">
        <Col></Col>
              <Col sm={4}>
              <Image src="/YS_upload.png" rounded />
              <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      </Col>
      </Row>


      
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <Link to="/welcomePage" className="mr-2">
            <Button style={{ backgroundColor: "black", borderColor:"black" }}>
              Cancel
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <Link to="/welcomePage" className="mr-2">
            <Button style={{ backgroundColor: "black", borderColor: "black" }}>
              Add Item
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItemPage;

