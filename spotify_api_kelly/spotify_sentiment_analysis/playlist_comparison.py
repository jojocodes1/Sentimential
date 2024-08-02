import spotipy
import numpy
from spotipy.oauth2 import SpotifyClientCredentials

username ='kellyocean1234@gmail.com'
client_id = '84ee8abea38c435ab9675406ab7d34c2'; 
client_secret = '604d37eb0a0d4f7c8fc4158d42a05dc0'
redirecturi = 'http://localhost:5000'
thescope = 'playlist-read-private'
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
plists = {}

def get_features_for_playlist(uri):
    playlist_id = uri.split(':')[2]
    results = sp.user_playlist(username, playlist_id)
    
    # debug statement if you want to visualize the JSON structure
    # print(json.dumps(results, indent=4))
    
    # initialize the dictionary
    playlist_name = results['name']
    plists[playlist_name] = {}
    plists[playlist_name]['name'] = []
    plists[playlist_name]['track uri'] = []
    plists[playlist_name]['acousticness'] = []
    plists[playlist_name]['danceability'] = []
    plists[playlist_name]['energy'] = [] #energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity
    plists[playlist_name]['instrumentalness'] = []
    plists[playlist_name]['liveness'] = []
    plists[playlist_name]['loudness'] = []
    plists[playlist_name]['speechiness'] = []
    plists[playlist_name]['tempo'] = []
    plists[playlist_name]['valence'] = [] #high valence = happy, low valence = sad
    plists[playlist_name]['popularity'] = []

    for track in results['tracks']['items']:
        # DEBUG STATEMENT
        # print(json.dumps(track, indent=4))              
        
        # save metadata stuff
        name = track['track']['name']
        print(name)
        track_uri = track['track']['uri']
        plists[playlist_name]['name'].append(name)
        plists[playlist_name]['track uri'].append(track_uri)

        # extract features
        features = sp.audio_features(track_uri)
        plists[playlist_name]['acousticness'].append(features[0]['acousticness'])
        plists[playlist_name]['danceability'].append(features[0]['danceability'])
        plists[playlist_name]['energy'].append(features[0]['energy'])
        plists[playlist_name]['instrumentalness'].append(features[0]['instrumentalness'])
        plists[playlist_name]['liveness'].append(features[0]['liveness'])
        plists[playlist_name]['loudness'].append(features[0]['loudness'])
        plists[playlist_name]['speechiness'].append(features[0]['speechiness'])
        plists[playlist_name]['tempo'].append(features[0]['tempo'])
        plists[playlist_name]['valence'].append(features[0]['valence'])
    
# example call to the function (the 3 cohesive playlists are rap, sad, and instrumental)
uris = ['spotify:playlist:2XF4xx2KLOCRqB8GE4S48E', 'spotify:playlist:601xuhoIObcc1GWqe3dgtN', 'spotify:playlist:0J27PjFNHSi4XpbY8TEChh']
for uri in uris:
    get_features_for_playlist(uri)

print(plists)