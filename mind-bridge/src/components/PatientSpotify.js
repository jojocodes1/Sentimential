import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure the correct path to the CSS file

const PatientSpotify = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    //route to sign up, change to patientspotify to see page
    navigate('/profSignUp'); 
  };

  return (
    <div>
      <button className="linc2spot" onClick={handleButtonClick}>Link Spotify Account</button>
    </div>
  );
};

export default PatientSpotify;
