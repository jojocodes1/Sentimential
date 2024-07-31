import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct

const auth = getAuth(firebaseApp);

const emotionImages = [
  { src: 'path/to/happy.png', alt: 'Happiness' },
  { src: 'path/to/sad.png', alt: 'Sadness' },
  { src: 'path/to/angry.png', alt: 'Anger' },
  { src: 'path/to/fear.png', alt: 'Fear' },
  { src: 'path/to/surprise.png', alt: 'Surprise' },
];

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
      <h1>{userEmail}</h1>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card border="secondary">
            <Card.Body>
              <Card.Title><h1>Sentiment Analysis Emotion Images</h1></Card.Title>
              <Card.Text>
                <Row xs={1} md={5} className="g-2">
                  {emotionImages.map((image, idx) => (
                    <Col key={idx}>
                      <Card.Img variant="top" src={image.src} alt={image.alt} />
                      <Card.Text>{image.alt}</Card.Text>
                    </Col>
                  ))}
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                  <br />
        <Col>
          <Card border="secondary">
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
      </Row>
      <br />
      <Row xs={1} md={10} className="g-4">
        <Col>
          <Card border="secondary">
            <Card.Body>
              <Card.Title><h1>Common Genres</h1></Card.Title>
              <Card.Text>
                <ul>
                  <li>Rap</li>
                  <li>Country</li>
                  <li>Gospel</li>
                  <li>Rock</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
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
