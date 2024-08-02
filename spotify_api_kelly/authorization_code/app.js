//import variables from secrets.json file

const fs = require('fs');
// Read the secrets.json file
const rawData = fs.readFileSync('secrets.json');
// Parse the JSON data
const secrets = JSON.parse(rawData);

// Access your API keys
const spotify_client_id = secrets.spotify_client_id;
const spotify_client_secret = secrets.spotify_client_secret;

// request authorization from the user so that our app can access to the Spotify resources on the user's behalf. 

const sessionStorage = require('node-sessionstorage');
var express = require('express');
var request = require('request');
var crypto = require('crypto');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri


const generateRandomString = (length) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotify_client_id,
      redirect_uri: redirect_uri,
      state: state,
      scope: scope
    }));
  
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        sessionStorage.setItem('access_token', access_token); //storing into session storage

        var options = {
          url: 'https://api.spotify.com/v1/me', //log user data
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        
        let accessToken = sessionStorage.getItem('access_token');
        topTracks(accessToken);
        // getBrunoMars(accessToken);
        // getDrake(accessToken);
        // getMetro(accessToken);
        // getSkeletonWitch(accessToken);
        // getOmah(accessToken);
        // getAsake(accessToken);

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});

async function topTracks(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', { //can do bruno mars and it works, MUST GO TO LOGIN PAGE FIRST
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  console.log("hi top tracks")

  const data = await response.json();
  console.log(data);
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

const top_tracks = ['Overdue (with Travis Scott)', 'I Know ?', 'A Bar Song (Tipsy)', 'Ric Flair Drip', 'Like That', 'Type Shit'];
fs.writeFileSync('top_tracks.json', JSON.stringify(top_tracks));


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