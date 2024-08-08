import React, { useState, useEffect } from "react";
import { json, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct
import { clientListeningClassification } from "../clientListeningClassification.ts";
import { Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';
import { intakeToClassificationMadeAccessible } from "../intakeToClassificationMadeAccessible.ts";
// import playlistCompImage from '../../playlist_comp.png'; // playlist_comp.png Ensure the path to your logo is correct


const auth = getAuth(firebaseApp);

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
      <h1 className="text-center">Psionic Synchronicity</h1>
      

      <Row className="justify-content-center">
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Counter</h1></Card.Title>
              <Card.Text>
                <div style={{ width: '100%', height: '300px' }}>
                  <Bar data={barChartData} options={{ responsive: true }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={100} md={15} lg={20} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Radar Chart</h1></Card.Title>
              <Card.Text>
                <div className="radar-chart-container">
                <img src={`${process.env.PUBLIC_URL}/playlist_comp.png`} className="card-logo" alt="playlist_comp_image" />
                </div>
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
export default ProfOverview;


