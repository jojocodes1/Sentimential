import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.png'; // Ensure you have the logo image in your assets

import a from '../a.jpg';
import b from '../b.jpg';
import c from '../c.jpg';
import d from '../d.jpg';
import e from '../e.jpg';

import '../App.css';

const auth = getAuth(firebaseApp);

const clientsData = [
  { id: 1, name: 'Sophia Bennett', info: 'In cognitive-behavioral therapy and mindfulness techniques.', image: a },
  { id: 2, name: 'Jackson Miller', info: 'Dont know much about her she is very shy and reserved.', image: b },
  { id: 3, name: 'Olivia Johnson', info: 'having problem in relationship.', image: c },
  { id: 4, name: 'Liam Smith', info: 'started new job and is currently happy.', image: d },
  { id: 5, name: 'Isabella Davis', info: 'very very angry but doesnt know how to express it.', image: e }
];

const ListPage = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPhotoURL, setUserPhotoURL] = useState('path/to/default/profile.jpg');
  const [clients, setClients] = useState(clientsData);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setUserPhotoURL(user.photoURL || 'path/to/default/profile.jpg');
        console.log('User:', user);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="mainContainer">
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <span className="text-light mr-3">Welcome: {userEmail}</span>
            <Nav.Link onClick={() => handleNavigation('/invite')}>Invite Page</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/profOverview')}>Prof Overview</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/logout')}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="content">
        <div className="clientList">
          {clients.map((client) => (
            <Card key={client.id} border="secondary" className="clientCard">
  <div className="cardContent">
    <Card.Img className="card-img" variant="top" src={client.image} alt={`Image of ${client.name}`} />
    <div className="cardDetails">
      <Card.Title><b>{client.name}</b></Card.Title>
      <Card.Text>{client.info}</Card.Text>
      <Card.Text>
        <button
          className="btn btn-dark"
          onClick={() => handleNavigation('/profOverview')}
        >
          See Overview
        </button>
      </Card.Text>
    </div>
  </div>
</Card>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
