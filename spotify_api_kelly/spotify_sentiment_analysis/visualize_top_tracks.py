import matplotlib.pyplot as plt
import json

# Load top tracks from JSON file
with open('top_tracks.json', 'r') as f:
    top_tracks = json.load(f)

# Extract track names and artists
track_names = [track['name'] for track in top_tracks]
artists = [track['artist'] for track in top_tracks]

# Create a bar chart for top tracks
plt.figure(figsize=(10, 8))
plt.barh(track_names, range(len(track_names)), color='skyblue')
plt.xlabel('Top Tracks')
plt.title('Top Tracks')
plt.gca().invert_yaxis()  # Invert y-axis to have the highest value on top
plt.tight_layout()
plt.savefig('top_tracks.png')
plt.show()
