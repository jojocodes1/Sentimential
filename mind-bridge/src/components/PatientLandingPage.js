import React from 'react';
import 'chart.js/auto';
import '../App.css';
import { FaSpotify, FaMusic, FaMicrophone, FaBook, FaPodcast } from 'react-icons/fa';
import topTracks from '../top_tracks.json';
import topArtistsData from '../top_artists.json';
import getPodcasts from '../getPodcasts.json';

const PatientLandingPage = () => {
  const handleButtonClick = () => {
    // Open in a new window
    window.open('http://localhost:8888', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mainContainer">
      <div className="content-wrapper">
        <header className="page-header">
          {/* Header content here */}
        </header>
       
        <div className="data-grid">
          <div className="data-card">
            <h2><FaMusic /> Top Tracks </h2>
            <ul>
              {topTracks.map((track, index) => (
                <li key={index}>
                  {track.name} - {track.artist}
                </li>
              ))}
            </ul>
          </div>
 
          <div className="data-card">
            <h2><FaMicrophone /> Top Artists</h2>
            <ul>
              {topArtistsData.map((artist, index) => (
                <li key={index}>{artist.name}</li>
              ))}
            </ul>
          </div>
 
          <div className="data-card">
            <h2><FaBook /> Audiobooks</h2>
            {/* Audiobooks content here */}
          </div>
 
          <div className="data-card">
            <h2><FaPodcast /> Podcasts</h2>
            <ul>
              {getPodcasts.map((podcast, index) => (
                <li key={index}>
                  <strong>{podcast.name}</strong>: {podcast.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
       
        <div className='button-container'>
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
