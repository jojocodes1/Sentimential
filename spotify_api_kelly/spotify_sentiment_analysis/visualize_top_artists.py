import matplotlib.pyplot as plt
import json

# Load top artists from JSON file
with open('top_artists.json', 'r') as f:
    top_artists = json.load(f)

# Extract artist names and number of genres (for illustration purposes)
artist_names = [artist['name'] for artist in top_artists]
num_artists = len(artist_names)

# Create a bar chart for top artists
plt.figure(figsize=(10, 8))
plt.barh(artist_names, range(num_artists), color='salmon')
plt.xlabel('Top Artists')
plt.title('Top Artists')
plt.gca().invert_yaxis()  # Invert y-axis to have the highest value on top
plt.tight_layout()
plt.savefig('top_artists.png')
plt.show()
