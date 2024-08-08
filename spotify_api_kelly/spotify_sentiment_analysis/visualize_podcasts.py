import matplotlib.pyplot as plt
import json

# Load podcasts from JSON file
with open('podcasts.json', 'r') as f:
    podcasts = json.load(f)

# Extract podcast names
podcast_names = [podcast['name'] for podcast in podcasts]
num_podcasts = len(podcast_names)

# Create a bar chart for podcasts
plt.figure(figsize=(10, 8))
plt.barh(podcast_names, range(num_podcasts), color='lightgreen')
plt.xlabel('Podcasts')
plt.title('Top Podcasts')
plt.gca().invert_yaxis()  # Invert y-axis to have the highest value on top
plt.tight_layout()
plt.savefig('podcasts.png')
plt.show()
