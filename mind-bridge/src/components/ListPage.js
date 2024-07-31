import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct

const auth = getAuth(firebaseApp);

const ListPage = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        console.log('User:', user);
      } else {
        setUserEmail(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const onButtonClick = () => {
    navigate('/profOverview');  
  }

  return (
    <div className="mainContainer">
      <h1>Mind Bridge</h1>
      <h1> {userEmail}</h1>
      

      <Row xs={1} md={10} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="secondary">
              <Card.Body>
                <Card.Title><h1>Clients</h1></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Client 1</li>
                    <li>Client 2</li>
                    <li>Client 3</li>
                    <li>Client 4</li>
                    <li>Client 5</li>
                  </ul>
                  <div className={''}>
                    <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Remove Client'}
        />
      </div>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'See  Overview'}
        />
      </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    </div>
  );
}

export default ListPage;
