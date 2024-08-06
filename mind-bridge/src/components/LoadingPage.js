import React from 'react';
import '../LoadingPage.css'; // Import the CSS for styling

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="logo-container">
        <img src={require('../logo.png')} alt="Logo" className="logo" />
      </div>
      <div className="loading-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
