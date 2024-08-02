const { access_token } = require('./app');

var client_id = '84ee8abea38c435ab9675406ab7d34c2'; 
var client_secret = '604d37eb0a0d4f7c8fc4158d42a05dc0';

// Code to get new Access Token
// curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=84ee8abea38c435ab9675406ab7d34c2&client_secret=604d37eb0a0d4f7c8fc4158d42a05dc0"

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});

// Example of result
// {"access_token":"BQCBT8-kjlLeDYScQMF30PLRvD4Cjh6utI9a6LK7cyBKWoSFufCd0MSeg8BWQQxacNAhYwnropueegnR9aK4hqr3EV4f8hDgULimjmwGAfW5V6ViTnc","token_type":"Bearer","expires_in":3600}
//{"access_token":"BQA7dy_Z4pSW_BhpDrLaNSBRBIYa1x8S8bL2qEpO_Zgajdvz6om-akg1EnM18kaQdVlTNR-O79vIfuWXczhzaLdMODVHNVimZ2MhU6oNVQwAxSdSx40","token_type":"Bearer","expires_in":3600}
//^new today 7/31/24

// call the API with artist ID
//curl "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C?si=Mik8x-U5QPeBbibepb-T0w" / -H "Authorization: Bearer BQCSWTVOrckTyzucTiGEW9ETdFTVa7UwW_FXpdtFXlp7Dr7GXNTZUaBMt3yzILBwGZaIlqS0fBrSfCWwkUmkWsgPlqQwPGFDUYGQ3gBOqxytuC3rhCk"
//Example of result
// {
//   "external_urls" : {
//     "spotify" : "https://open.spotify.com/artist/31W5EY0aAly4Qieq6OFu6I"
//   },
//   "followers" : {
//     "href" : null,
//     "total" : 8309471
//   },
//   "genres" : [ "melodic rap", "rap", "trap" ],
//   "href" : "https://api.spotify.com/v1/artists/31W5EY0aAly4Qieq6OFu6I",
//   "id" : "31W5EY0aAly4Qieq6OFu6I",
//   "images" : [ {
//     "height" : 640,
//     "url" : "https://i.scdn.co/image/ab6761610000e5ebebe9d9f649d6ef85497f71af",
//     "width" : 640
//   }, {
//     "height" : 320,
//     "url" : "https://i.scdn.co/image/ab67616100005174ebe9d9f649d6ef85497f71af",
//     "width" : 320
//   }, {
//     "height" : 160,
//     "url" : "https://i.scdn.co/image/ab6761610000f178ebe9d9f649d6ef85497f71af",
//     "width" : 160
//   } ],
//   "name" : "A Boogie Wit da Hoodie",
//   "popularity" : 79,
//   "type" : "artist",
//   "uri" : "spotify:artist:31W5EY0aAly4Qieq6OFu6I"
// }
