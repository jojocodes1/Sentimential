#GeniusAPI doesn't offer a way to get access to song lyrics
# To solve this problem, LyricsGenius combines the Genius API with the web scraping library BeautifulSoup to get lyrics for a song.
import lyricsgenius
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

LyricsGenius = lyricsgenius.Genius(genius_access_token)

for artist in artists:
    artist = LyricsGenius.search_artist(artist, max_songs=5, sort="popularity") #Finding songs by the artist

    for song in artist.songs:
        filename = f'{song.title}'
        song.save_lyrics(filename = filename, extension='txt', overwrite=True, ensure_ascii=True, sanitize=True, verbose=False) #Saving the lyrics to a JSON file, can also do txt file


# artist = LyricsGenius.search_artist("Bruno Mars", max_songs=5, sort="popularity") #Finding songs by the artist

# song = LyricsGenius.search_song("Paradise", artist.name) #Finding a specific song by the artist

# print(song.lyrics)
# print(artist.songs)

# for song in artist.songs:
#     filename = f'{song.title}'
#     # full_path = os.path.join(directory, filename)

#     song.save_lyrics(filename = filename, extension='txt', overwrite=True, ensure_ascii=True, sanitize=True, verbose=True) #Saving the lyrics to a JSON file, can also do txt file
#     #TODO: how to save_lyrics into a specific directory  directory='C:\\Users\\v-zhangkelly\\Downloads\\spotify_api_kelly\\genius_api\\lyrics_jsons'