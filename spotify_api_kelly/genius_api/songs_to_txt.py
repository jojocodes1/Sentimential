#GeniusAPI doesn't offer a way to get access to song lyrics
# To solve this problem, LyricsGenius combines the Genius API with the web scraping library BeautifulSoup to get lyrics for a song.
import lyricsgenius
import json
import os

top_tracks_file_path = os.path.join(os.path.dirname(__file__), '..', 'authorization_code', 'top_tracks.json')

# Construct the path to the secrets.json file
secrets_file_path = os.path.join(os.path.dirname(__file__), '..', 'authorization_code', 'secrets.json')

# Read the artists.json file
with open(top_tracks_file_path, 'r') as tracks_file:
    tracks = json.load(tracks_file)

# Read the secrets.json file
with open(secrets_file_path, 'r') as secrets_file:
    secrets = json.load(secrets_file)

# Get the client_access_token
genius_access_token = secrets.get('genius_access_token')

print("songs:", tracks)

LyricsGenius = lyricsgenius.Genius(genius_access_token)

def queryGeniusAPI(tracks):
    for song in tracks:
        song = LyricsGenius.search_song(song)
        print(song.lyrics)
        filename = f'{song.title}'
        song.save_lyrics(filename = filename, extension='json', overwrite=True, ensure_ascii=True, sanitize=True, verbose=False) #Saving the lyrics to a JSON file, can also do txt file

# print(song.lyrics)
# print(artist.songs)

# for song in artist.songs:
#     filename = f'{song.title}'
#     # full_path = os.path.join(directory, filename)

#     song.save_lyrics(filename = filename, extension='txt', overwrite=True, ensure_ascii=True, sanitize=True, verbose=True) #Saving the lyrics to a JSON file, can also do txt file
#     #TODO: how to save_lyrics into a specific directory  directory='C:\\Users\\v-zhangkelly\\Downloads\\spotify_api_kelly\\genius_api\\lyrics_jsons'