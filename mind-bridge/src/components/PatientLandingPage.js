import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers required components for Chart.js
import '../App.css'; // Ensure the correct path to the CSS file

const PatientLandingPage = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
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

        const genresResponse = await fetch('/api/top-genres');
        const genresData = await genresResponse.json();
        setTopGenres(genresData.genres);

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
      <div className="patientbox">
        <h1>Psionic Synchronicity</h1>
        <br />
        <br />
        <button className="dis4rmspot" onClick={handleButtonClick}>Disconnect Spotify Account</button>
        <h2>Top Tracks</h2>
        <ul>
          {topTracks.map((track, index) => (
            <li key={index}>{track.name} by {track.artist}</li>
          ))}
        </ul>

        <h2>Top Artists</h2>
        <ul>
          {topArtists.map((artist, index) => (
            <li key={index}>{artist.name} - Genres: {artist.genres.join(', ')}</li>
          ))}
        </ul>

        <h2>Top Genres</h2>
        <Bar
          data={{
            labels: topGenres,
            datasets: [{
              label: 'Top Genres',
              data: topGenres.map(() => 1), // Dummy data for display; adjust as needed
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }]
          }}
        />

        <h2>Audiobooks</h2>
        <ul>
          {audiobooks.map((audiobook, index) => (
            <li key={index}>{audiobook.name}: {audiobook.description}</li>
          ))}
        </ul>

        <h2>Podcasts</h2>
        <ul>
          {podcasts.map((podcast, index) => (
            <li key={index}>{podcast.name}: {podcast.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientLandingPage;

