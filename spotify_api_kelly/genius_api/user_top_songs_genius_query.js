//GeniusAPI doesn't offer a way to get access to song lyrics
// To solve this problem, LyricsGenius combines the Genius API with the web scraping library BeautifulSoup to get lyrics for a song.
// import lyricsgenius
// import json
// import os

const axios = require('axios');
const fs = require('fs');


// Read secrets from file
const rawData = fs.readFileSync('../authorization_code/secrets.json');
const secrets = JSON.parse(rawData);

const geniusApiKey = secrets.genius_api_key;

async function queryGeniusAPI(tracks) {
  try {
    for (const track of tracks) {
      const query = `${track.name} ${track.artist}`;
      const searchResponse = await axios.get('https://api.genius.com/search', {
        params: { q: query },
        headers: { Authorization: `Bearer ${geniusApiKey}` }
      });
      
      const songData = searchResponse.data.response.hits[0]?.result;
      if (songData) {
        const songUrl = songData.url;
        console.log(`Lyrics for "${track.name}" by ${track.artist}: ${songUrl}`);
      } else {
        console.log(`No lyrics found for "${track.name}" by ${track.artist}`);
      }
    }
  } catch (error) {
    console.error('Error querying Genius API:', error);
  }
}

module.exports = { queryGeniusAPI };