import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers required components for Chart.js
import '../App.css'; // Ensure the correct path to the CSS file

const PatientLandingPage = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [topGenres, setTopGenres] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch top tracks and genres from an API or your data source
    async function fetchData() {
      // Example data fetching; replace with actual API calls
      const tracksResponse = await fetch('/api/top-tracks');
      const tracksData = await tracksResponse.json();
      setTopTracks(tracksData.tracks);

      const genresResponse = await fetch('/api/top-genres');
      const genresData = await genresResponse.json();
      setTopGenres(genresData.genres);
    }
    fetchData();
  }, []);

  const handleButtonClick = () => {
    // Route to sign up, change to patientspotify to see page
    navigate(''); 
  };
/*<Col xs={12} md={5} lg={5} className="mb-4">
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
        </Col>*/
  const genreData = {
    labels: Object.keys(topGenres),
    datasets: [
      {
        label: 'Top Genres',
        data: Object.values(topGenres),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mainContainer">
      <div className="patientbox">
        <h1> Psionic Synchronicity </h1>
        <br></br>
        <br></br>
        <button className="dis4rmspot" onClick={handleButtonClick}>Disconnect Spotify Account</button>
      </div>
    </div>
  );
};

export default PatientLandingPage;

