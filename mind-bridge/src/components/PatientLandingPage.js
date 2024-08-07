import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { FaSpotify, FaMusic, FaMicrophone, FaBook, FaPodcast } from 'react-icons/fa';

const PatientLandingPage = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [audiobooks, setAudiobooks] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const tracksResponse = await fetch('/api/top-tracks');
        const tracksData = await tracksResponse.json();
        setTopTracks(tracksData.tracks);

        const artistsResponse = await fetch('/api/top-artists');
        const artistsData = await artistsResponse.json();
        setTopArtists(artistsData.artists);

        const audiobooksResponse = await fetch('/api/audiobooks');
        const audiobooksData = await audiobooksResponse.json();
        setAudiobooks(audiobooksData.audiobooks);

        const podcastsResponse = await fetch('/api/podcasts');
        const podcastsData = await podcastsResponse.json();
        setPodcasts(podcastsData.podcasts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleButtonClick = () => {
    navigate(''); // Adjust navigation path if needed
  };

  return (
    <div className="mainContainer">
      <div className="content-wrapper">
        <header className="page-header">
        
        </header>
        
        <div className="data-grid">
          <div className="data-card">
            <h2><FaMusic /> Recent Tracks</h2>
            <ul className="data-list">
              {topTracks.slice(0, 5).map((track, index) => (
                <li key={index}>
                  <span className="rank">{index + 1}</span>
                  <div>
                    <span className="name">{track.name}</span>
                    <span className="artist">{track.artist}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="data-card">
            <h2><FaMicrophone /> Top Artists</h2>
            <ul className="data-list">
              {topArtists.slice(0, 5).map((artist, index) => (
                <li key={index}>
                  <span className="rank">{index + 1}</span>
                  <div>
                    <span className="name">{artist.name}</span>
                    <span className="genres">{artist.genres.slice(0, 2).join(', ')}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="data-card">
            <h2><FaBook /> Audiobooks</h2>
            <ul className="data-list">
              {audiobooks.slice(0, 3).map((audiobook, index) => (
                <li key={index}>
                  <span className="name">{audiobook.name}</span>
                  <span className="description">{audiobook.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="data-card">
            <h2><FaPodcast /> Podcasts</h2>
            <ul className="data-list">
              {podcasts.slice(0, 3).map((podcast, index) => (
                <li key={index}>
                  <span className="name">{podcast.name}</span>
                  <span className="description">{podcast.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='button-container'>
          <button className="disconnect-spotify" onClick={handleButtonClick}>
            <FaSpotify /> Disconnect Spotify
          </button>
          
          
        </div>
      </div>
    </div>
  );
};

export default PatientLandingPage;