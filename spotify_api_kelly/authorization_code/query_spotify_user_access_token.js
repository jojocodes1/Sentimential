// Useless file right now, but I'm keeping it here for reference. I will delete it later.

const sessionStorage = require('node-sessionstorage');

// const { access_token } = require('./app');

async function getProfile(access_token) {
  console.log("printing access token");
  console.log(sessionStorage.getItem('access_token')); // Outputs: your_access_token


  let accessToken = sessionStorage.getItem('access_token');
  let refreshToken = sessionStorage.getItem('refresh_token');

  
  console.log(accessToken);

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
}

// request.get(options, (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//       console.log(body);
//   } else {
//       console.error('Failed to fetch data:', error);
//   }
// });

//C:\Users\v-zhangkelly\Downloads\Team14-2024-AppPrototype\spotify_api_kelly\authorization_code\query_spotify_user_access_token.js