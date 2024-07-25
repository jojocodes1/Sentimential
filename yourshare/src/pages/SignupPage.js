import React, { useState } from "react";
import logo from "../images/YS_icon.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

export const SignupPage = (props) => { //username React state variable and setUsername function
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleJoinClick = () => {
    navigate("/WelcomePage", { state: { username } });
  };

  return (
    <div>
      
      <h1>Join your community</h1>
      <p style={{ position: 'relative', left: '20%', transform: 'translateX(-50%)' }}><h2>YourShare</h2></p>
      
      <img src={logo} className="App-logo" alt="logo" />

      <h2>Sign-Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="Username:">
          <Form.Control 
            type="text" 
            placeholder="Username:" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Phone number:">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Phone number:" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Zip code:">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Zip code:" />
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <Button onClick={handleJoinClick}> Join </Button>
      <Link to="/WelcomePage"> Sign-In </Link>
    </div>
  );
};
