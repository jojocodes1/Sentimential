import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import if needed for internal routing
import '../App.css'; // Ensure the path to the CSS file is correct

const PatientSpotify = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    // Redirect to an external URL
    window.location.href = 'http://localhost:8888'; 
  };

  const onButtonClick = () => {
    navigate('/patientLandingPage');  
  }

  return (
    <div className="button-container">
      <button  onClick={handleButtonClick}>
        Link Spotify Account
      </button>

      <button  type='button' onClick={onButtonClick}>Continue</button>
    </div>
  );
};

export default PatientSpotify;
