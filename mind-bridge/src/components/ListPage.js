import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase';
import { Navbar, Nav } from 'react-bootstrap';
import a from '../a.jpg';
import b from '../b.jpg';
import c from '../c.jpg';
import d from '../d.jpg';
import e from '../e.jpg';

import '../App.css';

const auth = getAuth(firebaseApp);

const ListPage = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPhotoURL, setUserPhotoURL] = useState('path/to/default/profile.jpg');
  const [clients, setClients] = useState([
    { id: 1, name: 'Client 1', image: a },
    { id: 2, name: 'Client 2', image: b },
    { id: 3, name: 'Client 3', image: c },
    { id: 4, name: 'Client 4', image: d },
    { id: 5, name: 'Client 5', image: e }
  ]);
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-links">
          <div className="ml-auto d-flex align-items-center">
            <span className="ml-2 text-light">Welcome: {userEmail}</span>
          </div>
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
              <Card.Img className="card-img" variant="top" src={client.image} alt={`Image of ${client.name}`} />
              <Card.Body>
                <Card.Title><h3>{client.name}</h3></Card.Title>
                <Card.Text>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleNavigation('/profOverview')}
                  >
                    See Overview
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
