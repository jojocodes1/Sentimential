import matplotlib.pyplot as plt
import numpy as np
import json

# Load plists from a JSON file
with open('plists.json', 'r') as f:
    plists = json.load(f)

# Extract playlist names
playlist_names = list(plists.keys())
print("Available playlists:", playlist_names)

# Visualizations of playlist comparison (acousticness, danceability, energy, valence, instrumentalness, tempo, speechiness)
for playlist in plists:
    print("-" * 70)
    print(playlist)
    for feature in plists[playlist]:
        if feature != 'name' and feature != 'track uri':
            print(feature.upper(), 
                  "| median:", np.median(plists[playlist][feature]), 
                  "| mean:", np.mean(plists[playlist][feature]))

labels = ['acousticness', 'danceability', 'energy', 'valence', 'instrumentalness', 'tempo', 'speechiness']
num_vars = len(labels)

# Split the circle into even parts and save the angles so we know where to put each axis.
angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()
angles += angles[:1]  # Repeat the first value to close the circle

fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))

# Helper function to plot each playlist on the radar chart.
def add_to_radar(playlist, color):
    if playlist not in plists:
        print(f"Playlist '{playlist}' not found in plists.")
        return

    values = [np.median(plists[playlist]['acousticness']), np.median(plists[playlist]['danceability']), np.median(plists[playlist]['energy']),
              np.median(plists[playlist]['valence']), np.mean(plists[playlist]['instrumentalness']), np.median(plists[playlist]['tempo']),
              np.median(plists[playlist]['speechiness'])]
    # Adjust values
    values[-2] = values[-2] / 220  # Tempo
    values[-1] = values[-1] * 4    # Speechiness
    values += values[:1]  # Repeat the first value to close the circle
    ax.plot(angles, values, color=color, linewidth=1, label=playlist)
    ax.fill(angles, values, color=color, alpha=0.25)

# Add playlists to the chart (update with correct names from your JSON)
add_to_radar('WE DON\'T TRUST YOU', 'red')
add_to_radar('A Bar Song (Tipsy)', 'green') 
add_to_radar('ANOTHER SUMMER', 'blue')      # Use correct name as verified

# Polar coordinates math stuff
ax.set_theta_offset(np.pi / 2)
ax.set_theta_direction(-1)

# Draw axis lines for each angle and label.
ax.set_thetagrids(np.degrees(angles[:-1]), labels)  # Exclude the last angle for labels

# Adjust label alignment based on their position in the circle.
for label, angle in zip(ax.get_xticklabels(), angles[:-1]):  # Exclude the last angle for alignment
    if angle in (0, np.pi):
        label.set_horizontalalignment('center')
    elif 0 < angle < np.pi:
        label.set_horizontalalignment('left')
    else:
        label.set_horizontalalignment('right')

# Set position of y-labels (0-100) to be in the middle of the first two axes.
ax.set_ylim(0, 1)
ax.set_rlabel_position(180 / num_vars)

# Add custom styling.
ax.tick_params(colors='#222222')         # Color of tick labels
ax.tick_params(axis='y', labelsize=8)    # Y-axis labels
ax.grid(color='#AAAAAA')                 # Color of circular gridlines
ax.spines['polar'].set_color('#222222')  # Color of outermost gridline (spine)
ax.set_facecolor('#FAFAFA')              # Background color inside the circle itself

# Lastly, give the chart a title and a legend
ax.set_title('Playlist Comparison', y=1.08)
ax.legend(loc='upper right', bbox_to_anchor=(1.1, 1.1))

fig.savefig('playlist_comp.png')
