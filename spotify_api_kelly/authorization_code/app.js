const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
const request = require('request');
const crypto = require('crypto');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fetch = require('node-fetch');
const fs = require('fs');
const { queryGeniusAPI } = require('../genius_api/user_top_songs_genius_query.js');

// Read secrets from file
const rawData = fs.readFileSync('secrets.json');
const secrets = JSON.parse(rawData);

const spotify_client_id = secrets.spotify_client_id;
const spotify_client_secret = secrets.spotify_client_secret;
const redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

const spotifyApi = new SpotifyWebApi({
  clientId: spotify_client_id,
  clientSecret: spotify_client_secret,
  redirectUri: redirect_uri
});

// Generate a random state string
const generateRandomString = (length) => crypto.randomBytes(length).toString('hex');

const app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser())
   .use(session({
     secret: 'your-session-secret', // Change this to a strong, unique secret
     resave: false,
     saveUninitialized: true
   }));
   
app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie('spotify_auth_state', state);
  
    const scopes = [
      'user-library-read',
      'user-library-modify',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-top-read',
      'user-follow-read',
      'user-follow-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-private',
      'user-read-email',
      'user-read-recently-played',
      'app-remote-control',
      'streaming',
      'ugc-image-upload',
      'user-read-playback-position'
    ];
    
    const authUrl = spotifyApi.createAuthorizeURL(scopes, state);
    
    res.redirect(authUrl);
  });

app.get('/callback', (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies['spotify_auth_state'] : null;
  
    if (state === null || state !== storedState) {
      res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }));
    } else {
      res.clearCookie('spotify_auth_state');
      
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString('base64')
        },
        json: true
      };
  
      request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const access_token = body.access_token;
          const refresh_token = body.refresh_token;
  
          req.session.access_token = access_token; // Store token in session
  
          const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          request.get(options, (error, response, body) => {
            console.log(body);
          });
  
          topTracks(access_token);
  
          res.redirect('/#' + querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
        } else {
          res.redirect('/#' + querystring.stringify({ error: 'invalid_token' }));
        }
      });
    }
  });


  app.get('/refresh_token', (req, res) => {
    const refresh_token = req.query.refresh_token;
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString('base64')
      },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        res.send({
          access_token: access_token,
          refresh_token: body.refresh_token
        });
      }
    });
  });

  async function topTracks(accessToken) {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
  
      const data = await response.json();
       // Extract track names and artist names
      const tracks = data.items.map(track => ({
        name: track.name,
        artist: track.artists[0].name // Assuming the first artist is the primary artist
      }));
      
      // console.log(tracks); // Display tracks for debugging
      
      // Save tracks to a JSON file
      fs.writeFileSync('top_tracks.json', JSON.stringify(tracks));

      // query Genius API here
      await queryGeniusAPI(tracks);

    } catch (error) {
      console.error('Error fetching top tracks:', error);
    }
}



// async function getBrunoMars(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C?si=mSDucTY2Rx2IBW6oDzrXQA', { //can do bruno mars and it works, MUST GO TO LOGIN PAGE FIRST
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi bruno mars")

//   const data = await response.json();
//   console.log(data);
// }

// async function getDrake(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4?si=kP-fU28vSvi83-LckOA_ng', { 
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi drake")

//   const data = await response.json();
//   console.log(data);
// }

// async function getMetro(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp?si=T4CCnmzdSZukNoZc2ekLzQ', { 
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi Metro Boomin")

//   const data = await response.json();
//   console.log(data);
// }

// async function getSkeletonWitch(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/213mmq3zkNWx7CtfzftTC5?si=pHa9_9EHRUWabpERTJcPvQ', { 
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi Skeletonwitch")

//   const data = await response.json();
//   console.log(data);
// }

// async function getOmah(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/5yOvAmpIR7hVxiS6Ls5DPO?si=_BCNA9OfRkyTyKcqgg9vqw', { 
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi Omah Lay")

//   const data = await response.json();
//   console.log(data);
// }

// async function getAsake(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg?si=Vs3DQim4SQyVAocYXuh31Q', { 
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   console.log("hi Asake")

//   const data = await response.json();
//   console.log(data);
// }

//OLD STUFF, FOR WHEN WE HARDCODED SONGS
// const top_tracks = ['Overdue (with Travis Scott)', 'I Know ?', 'A Bar Song (Tipsy)', 'Ric Flair Drip', 'Like That', 'Type Shit'];
// fs.writeFileSync('top_tracks.json', JSON.stringify(top_tracks));


//this part is working, go to new page localhost:8888/artist
// app.get('/artist', function(req, res) {
//   let accessToken = sessionStorage.getItem('access_token');

//   var options = {
//     url: 'https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C?si=Mik8x-U5QPeBbibepb-T0w',
//     headers: { 'Authorization': 'Bearer ' + access_token },
//     json: true
//   };

//   // use the access token to access the Spotify Web API
//   request.get(options, function(error, response, body) {
//     console.log(body);
//   });
// });



console.log('Listening on 8888');
app.listen(8888);

// Run the app.js file in the terminal
// Creates an access_token specific to the user


//TODO: needs to direct to Joel's user stats page