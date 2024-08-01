import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure the correct path to the CSS file

const PatientLandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Route to sign up, change to patientspotify to see page
    navigate(''); 
  };

  return (
    <div>
      <div className="patientbox">
        <h1>Medical Professional</h1>
        <br></br>
        <br></br>
        <button className="dis4rmspot" onClick={handleButtonClick}>Disconnect Spotify Account</button>
      </div>
    </div>
  );
};

export default PatientLandingPage;
