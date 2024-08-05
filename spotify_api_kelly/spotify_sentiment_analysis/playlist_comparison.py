import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json

# Spotify API credentials
client_id = '84ee8abea38c435ab9675406ab7d34c2'
client_secret = '604d37eb0a0d4f7c8fc4158d42a05dc0'
redirect_uri = 'http://localhost:5000'

# Initialize Spotipy with client credentials
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

plists = {}

def get_features_for_playlist(uri):
    # Extract playlist ID from URI
    playlist_id = uri.split(':')[2].split('?')[0]  # Remove any query parameters

    try:
        # Fetch playlist tracks
        results = sp.playlist_tracks(playlist_id)
        
        # Ensure there's at least one track to get the playlist name
        if not results['items']:
            print(f"No tracks found in playlist with ID {playlist_id}")
            return
        
        # Initialize the dictionary
        playlist_name = results['items'][0]['track']['album']['name']  # Getting playlist name from the first track's album name
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
            if features and features[0]:  # Check if features are not None
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

    except spotipy.exceptions.SpotifyException as e:
        print(f"Spotify API error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

# Example call to the function with correct URIs
uris = [
    'spotify:playlist:15hlGlYND1H0C6iMwaGOFg', #Metro Boomin
    'spotify:playlist:37i9dQZF1DX7aUUBCKwo4Y', #Country Music
    'spotify:playlist:37i9dQZF1EIVuPYebobASF' #Omega Tribe
]

for uri in uris:
    get_features_for_playlist(uri)

# print(plists)


# Save plists to a JSON file
with open('plists.json', 'w') as f:
    json.dump(plists, f)

