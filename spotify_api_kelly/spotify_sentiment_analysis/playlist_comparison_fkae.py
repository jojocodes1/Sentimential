import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

username ='kellyocean1234@gmail.com'
client_id = '84ee8abea38c435ab9675406ab7d34c2'; 
client_secret = '604d37eb0a0d4f7c8fc4158d42a05dc0'
redirecturi = 'http://localhost:5000'
thescope = 'playlist-read-private'

# Initialize Spotipy with client credentials
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

plists = {}

def get_features_for_playlist(uri):
    playlist_id = uri.split(':')[2]
    results = sp.playlist_tracks(playlist_id)
    
    # Initialize the dictionary
    playlist_name = results['items'][0]['track']['album']['name']  # Adjusted to get playlist name
    plists[playlist_name] = {
        'name': [],
        'track uri': [],
        'acousticness': [],
        'danceability': [],
        'energy': [],
        'instrumentalness': [],
        'liveness': [],
        'loudness': [],
        'speechiness': [],
        'tempo': [],
        'valence': [],
        'popularity': []
    }

    for track in results['items']:
        # Extract metadata
        name = track['track']['name']
        track_uri = track['track']['uri']
        plists[playlist_name]['name'].append(name)
        plists[playlist_name]['track uri'].append(track_uri)

        # Extract features
        features = sp.audio_features(track_uri)
        if features[0]:  # Check if features are not None
            plists[playlist_name]['acousticness'].append(features[0]['acousticness'])
            plists[playlist_name]['danceability'].append(features[0]['danceability'])
            plists[playlist_name]['energy'].append(features[0]['energy'])
            plists[playlist_name]['instrumentalness'].append(features[0]['instrumentalness'])
            plists[playlist_name]['liveness'].append(features[0]['liveness'])
            plists[playlist_name]['loudness'].append(features[0]['loudness'])
            plists[playlist_name]['speechiness'].append(features[0]['speechiness'])
            plists[playlist_name]['tempo'].append(features[0]['tempo'])
            plists[playlist_name]['valence'].append(features[0]['valence'])
            plists[playlist_name]['popularity'].append(track['track']['popularity'])

# Example call to the function
# public spotify playlists
uris = ['spotify:playlist:15hlGlYND1H0C6iMwaGOFg?si=d7e2dc77c9004a1a', 'spotify:playlist:4lk2crD7bYMphqBOM4hJC4?si=ac6f9b50697c4407', 'spotify:playlist:37i9dQZF1DX0SM0LYsmbMT?si=04b50b02399e4a30']
# https://open.spotify.com/playlist/15hlGlYND1H0C6iMwaGOFg?si=d7e2dc77c9004a1a
# https://open.spotify.com/playlist/4lk2crD7bYMphqBOM4hJC4?si=ac6f9b50697c4407
# https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT?si=04b50b02399e4a30
for uri in uris:
    get_features_for_playlist(uri)

print(plists)