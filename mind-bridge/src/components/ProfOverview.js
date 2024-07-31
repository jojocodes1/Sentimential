import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct

const auth = getAuth(firebaseApp);

const ProfOverview = () => {
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
    navigate('/listPage');  
  }

  return (
    <div className="mainContainer">
      <h1>Mind Bridge</h1>
      <h1> {userEmail}</h1>
      

      <Row xs={1} md={10} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="secondary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title><h1>Sentiment Analysis Emotion Images</h1></Card.Title>
                <Card.Text>
                  <p>Radar Graph of metrics on Top songs</p>
                  <p>Sentimental Analysis Emotion Chart</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Row xs={1} md={10} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="secondary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title><h1>Common Keywords</h1></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Pain</li>
                    <li>Cry</li>
                    <li>Happy</li>
                    <li>Need You</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Row xs={1} md={10} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="secondary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title><h1>Common Genres</h1></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Pain</li>
                    <li>Cry</li>
                    <li>Happy</li>
                    <li>Need You</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Back To Client List'}
        />
      </div>
    </div>
  );
}

export default ProfOverview;
