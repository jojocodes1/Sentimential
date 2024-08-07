//GeniusAPI doesn't offer a way to get access to song lyrics
// To solve this problem, LyricsGenius combines the Genius API with the web scraping library BeautifulSoup to get lyrics for a song.
// import lyricsgenius
// import json
// import os

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
// const { intakeToClassificationMadeAccessible } = require('../../mind-bridge/src/intakeToClassificationMadeAccessible.ts');


async function queryGeniusAPI(tracks) {
    const secrets = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'authorization_code', 'secrets.json'), 'utf8'));
    const geniusAccessToken = secrets.genius_api_key;

    lyrics_array = [];

    for (const track of tracks) {
        try {
            const query = `${track.name} ${track.artist}`.replace(/ *\([^)]*\) */g, ''); // Remove anything in parentheses
            const searchResponse = await axios.get('https://api.genius.com/search', {
                params: { q: query },
                headers: { Authorization: `Bearer ${geniusAccessToken}` }
            });

            const songData = searchResponse.data.response.hits[0]?.result;
            if (songData) {
                const lyricsPath = songData.path;
                const lyricsResponse = await axios.get(`https://genius.com${lyricsPath}`);
                const lyrics = extractLyrics(lyricsResponse.data);
                
                lyrics_array.push(lyrics);

                const filename = path.join(__dirname, `${track.name}.json`);
                fs.writeFileSync(filename, JSON.stringify({ lyrics }, null, 2), 'utf8');
                console.log(`Saved lyrics for "${track.name}" by ${track.artist} to ${filename}`);
            } else {
                console.log(`No lyrics found for "${track.name}" by ${track.artist}`);
            }
        } catch (error) {
            console.error(`Error fetching lyrics for "${track.name}" by ${track.artist}:`, error.response ? error.response.data : error.message);
        }
    }
    console.log(lyrics_array);
    module.exports = { lyrics_array };
    

    // const instance = intakeToClassificationMadeAccessible.getInstance(lyrics_array, length(lyrics_array));

    // instance.classifyAllLyrics()
    //     .then((result) => {
    //         console.log('Classified Lyrics Map:', result);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

}

function extractLyrics(html) {
    // Load the HTML content into cheerio
    const $ = cheerio.load(html);

    // Find the container with the lyrics
    const lyricsContainer = $('div[data-lyrics-container="true"]');

    
    if (lyricsContainer.length > 0) {
        // Extract the text from the lyrics container
        let lyrics = lyricsContainer.text().trim();
        
        // Remove section headers like [Verse 1], [Chorus], etc.
        // This regex will match headers in the form of [Section Name]
        lyrics = lyrics.replace(/\[.*?\]/g, '').trim();
        
        // Remove extra line breaks and multiple spaces
        lyrics = lyrics.replace(/\n+/g, '\n').replace(/\s{2,}/g, ' ');

        // Output or return the cleaned lyrics
        // console.log(lyrics);
        return lyrics;
    } else {
        console.log("Lyrics container not found.");
        return null;
    }
}

module.exports = { queryGeniusAPI };