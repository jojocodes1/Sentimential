from pathlib import Path
directory_path = 0 #TODO, insert directory path here

for file in Path(directory_path).glob('*.json'):
    print(file)