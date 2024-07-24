import React from "react";
// import { pages } from "../App";
import logo from "../images/YS_icon.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const SignupPage = (props) => {
  return (
    <div>
      <b><h1>YourShare</h1></b>
      
      <h1>Join your community</h1>
      <img src={logo} className="App-logo" alt="logo" />

      <h2>Sign-Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="Username:">
        <Form.Control type="itemInfo" placeholder="Username:" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Phone number:">
        <Form.Label></Form.Label>
        <Form.Control type="itemInfo" placeholder="Phone number:" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Zip code:">
        <Form.Label></Form.Label>
        <Form.Control type="itemInfo" placeholder="Zip code:" />
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <Link to="/WelcomePage"> <Button> Join </Button> </Link>
      <Link to="/WelcomePage"> Sign-In </Link>
      {/* <p><Button onClick={(e) => props.changePage(pages.WelcomePage)} href="/welcomePage">Join</Button> </p>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Sign-in</p> */}
    </div>
  );
};
