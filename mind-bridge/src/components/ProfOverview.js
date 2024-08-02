import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct
import { Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';

// Register the necessary components for Bar and Radar charts
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement
);

const auth = getAuth(firebaseApp);

// Sample data for the bar chart
const barChartData = {
  labels: ['Happy', 'Sad', 'Angry'],
  datasets: [
    {
      label: 'Amount of Songs',
      data: [143, 340, 26],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 3,
    },
  ],
};

// Sample data for the radar chart
const radarChartData = {
  labels: ['acousticness', 'danceability', 'energy', 'valence', 'instrumentalness', 'tempo', 'speechiness'],
  datasets: [
    {
      label: 'acousticness',
      data: [0.7, 1, 0.9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
    {
      label: 'danceability',
      data: [1, 0.6, 0.8],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
    },
    {
      label: 'energy',
      data: [.8, 0.7, 0.6],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
    {
      label: 'valence',
      data: [8, 7, 6],
      backgroundColor: 'rgba(175, 238, 238, 0.2)', // Pale Turquoise
      borderColor: 'rgba(175, 238, 238, 1)',       // Darker Turquoise
      borderWidth: 2,
    },
    {
      label: 'instrumentalness',
      data: [6, 8, 4],
      backgroundColor: 'rgba(255, 218, 185, 0.2)', // Peach Puff
      borderColor: 'rgba(255, 218, 185, 1)',       // Darker Peach
      borderWidth: 2,
    },{
      label: 'tempo',
      data: [4, 2, 8],
      backgroundColor: 'rgba(255, 228, 225, 0.2)', // Misty Rose
      borderColor: 'rgba(255, 228, 225, 1)',       // Darker Rose
      borderWidth: 2,
    },{
      label: 'speechiness',
      data: [2, 5 , 9],
      backgroundColor: 'rgba(255, 160, 122, 0.2)', // Light Salmon
      borderColor: 'rgba(255, 160, 122, 1)',       // Darker Salmon
      borderWidth: 2,
    },
  ],
};

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
      <h1 className="text-center">Mind Bridge</h1>
      <h2 className="text-center">{userEmail}</h2>

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
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Radar Chart</h1></Card.Title>
              <Card.Text>
                <div className="radar-chart-container">
                  <Radar data={radarChartData} options={{ responsive: true }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Common Genres</h1></Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
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


