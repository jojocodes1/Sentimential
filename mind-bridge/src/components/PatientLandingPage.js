import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import '../App.css';
import { FaSpotify, FaMusic, FaMicrophone, FaBook, FaPodcast } from 'react-icons/fa';

const PatientLandingPage = () => {


  const handleButtonClick = () => {
    // Open in a new window
    window.open('http://localhost:8888', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mainContainer">
      <div className="content-wrapper">
        <header className="page-header">
          {/* Optional: Page header content */}
        </header>

        <div className="data-grid">
          <div className="data-card">
            <h2><FaMusic /> Recent Tracks</h2>
            <div className="image-container">
              <img src="/top_tracks.png" alt="Top Tracks Visualization" style={{ width: '100%', maxWidth: '800px' }} />
            </div>
          </div>

          <div className="data-card">
            <h2><FaMicrophone /> Top Artists</h2>
            <div className="image-container">
              <img src="/top_artists.png" alt="Top Artists Visualization" style={{ width: '100%', maxWidth: '800px' }} />
            </div>
          </div>

          <div className="data-card">
            <h2><FaBook /> Audiobooks</h2>
            <div className="image-container">
              <img src="/audiobooks.png" alt="Audiobooks Visualization" style={{ width: '100%', maxWidth: '800px' }} />
            </div>
          </div>

          <div className="data-card">
            <h2><FaPodcast /> Podcasts</h2>
            <div className="image-container">
              <img src="/podcasts.png" alt="Podcasts Visualization" style={{ width: '100%', maxWidth: '800px' }} />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="inputButton" onClick={handleButtonClick}>
            <FaSpotify /> Link Spotify Account
          </button>
          <br />
          <br />
          <button className="inputButton" onClick={handleButtonClick}>
            <FaSpotify /> Disconnect Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientLandingPage;
