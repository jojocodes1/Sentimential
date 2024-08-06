import requests
import pandas as pd #Pandas dataframe
import json
import os

artists_file_path = os.path.join(os.path.dirname(__file__), '..', 'authorization_code', 'artists.json')

# Construct the path to the secrets.json file
secrets_file_path = os.path.join(os.path.dirname(__file__), '..', 'authorization_code', 'secrets.json')

# Read the artists.json file
with open(artists_file_path, 'r') as artists_file:
    artists = json.load(artists_file)

# Read the secrets.json file
with open(secrets_file_path, 'r') as secrets_file:
    secrets = json.load(secrets_file)

# Get the client_access_token
genius_access_token = secrets.get('genius_access_token')

print("Artists:", artists)

#Genius API - Basic Search
for artist in artists:
    search_term = artist
    search_url = "https://api.genius.com/search?q=" + search_term + "&access_token=" + genius_access_token
    response = requests.get(search_url)
    json_data = response.json()
    # print(json_data)

    artist_songs = []
    for song in json_data['response']['hits']:
        artist_songs.append([song['result']['title'], song['result']['primary_artist']['name']])

    print(artist_songs)

# #make Pandas dataframe from a list
# kanye_df = pd.DataFrame(kanye_songs, columns = ['Song', 'Artist'])
# kanye_df
