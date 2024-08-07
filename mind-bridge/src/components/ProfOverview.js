import React, { useState, useEffect } from "react";
import { json, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct
import { clientListeningClassification } from "../clientListeningClassification.ts";
import { Bar, Radar } from 'react-chartjs-2';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';
//import { intakeToClassificationMadeAccessible } from "../intakeToClassificationMadeAccessible.ts";
//import playlistCompImage from '../../playlist_comp.png'; // playlist_comp.png Ensure the path to your logo is correct

const { lyrics_array } = require('../../../spotify_api_kelly/genius_api/user_top_songs_genius_query.js');
console.log(lyrics_array);

const auth = getAuth(firebaseApp);


const dummy = new clientListeningClassification("patient");


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

// Sample data for the radar chart
const radarChartData = {
  labels: ['acousticness', 'danceability', 'energy', 'valence', 'instrumentalness', 'tempo', 'speechiness'],
  datasets: [
    {
      label: 'acousticness',
      data: [7, 1, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
    {
      label: 'danceability',
      data: [1, 6, 8],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
    },
    {
      label: 'energy',
      data: [8, 9, 1],
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
      data: [2, 8, 4],
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

  const barChartData = {
    labels: ['Joy', 'Sadness', 'Anger', 'Fear'],
    datasets: [
      {
        label: 'Amount of Songs',
        data: [0, 0, 0, 0], // Static data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
      },
    ],
  };

  useEffect(()=> {
    Promise.all(lyrics_array.map(lyrics_array => { return dummy.classifyThis(lyrics_array)})).then((results) => {
      const dummyMap = dummy.getMap();
      const jsonData = JSON.parse(dummyMap);
      // const valuesString = intakeToClassificationMadeAccessible.accessible.lyricMap;
      // const valueMap = JSON.parse(valuesString);
      barChartData({
        labels: ['Joy', 'Sadness', 'Anger', 'Fear' ],
        datasets: [
          {
            label: 'Amount of Songs',
            data: [jsonData['Joy'], jsonData['Sadness'], jsonData['Anger'], jsonData['Fear']],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 3,
          },
        ],
      });
    });
  },[]);

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
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar py-2 fixed-top">
        <Container>
          <Navbar.Brand href="/listPage" className="d-flex align-items-center">
            <span className="font-weight-bold">Psionic Synchronicity</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="d-flex align-items-center">
                <FaUserCircle className="text-light mr-2" size={24} />
                <span className="text-light"> DR. ALEXANDER </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      

      {/* Add a div with padding-top to create space below the navbar */}
      <div style={{ paddingTop: '80px' }}>
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
    </div>
  );
}

export default ProfOverview;


