import pandas as pd
import random

# Function to generate unique coordinates
def generate_unique_coordinates(existing_coords, lat_range, lon_range):
    while True:
        latitude = round(random.uniform(*lat_range), 6)
        longitude = round(random.uniform(*lon_range), 6)
        if (latitude, longitude) not in existing_coords:
            existing_coords.add((latitude, longitude))
            return latitude, longitude

# Generate fake building data with unique coordinates
def generate_building_data(num_entries=50):
    data = []
    existing_coords = set()  # To ensure unique coordinates
    lat_range = (28.500, 28.900)  # Latitude range
    lon_range = (77.000, 77.500)  # Longitude range
    
    for i in range(1, num_entries + 1):
        building_id = f"B{i:03}"  # Unique ID, e.g., B001
        latitude, longitude = generate_unique_coordinates(existing_coords, lat_range, lon_range)
        height = random.randint(5, 100)  # Building height in meters
        building_type = random.choice(["Residential", "Commercial", "Industrial"])
        status = random.choice(["Authorized", "Unauthorized"])
        width = random.randint(10, 50)  # Width in meters
        length = random.randint(10, 50)  # Length in meters
        dimensions = f"{width}x{length}"  # Building dimensions
        number_of_stories = random.randint(1, 20)  # Number of stories

        data.append({
            "building_id": building_id,
            "latitude": latitude,
            "longitude": longitude,
            "height": height,
            "type": building_type,
            "status": status,
            "building_dimensions": dimensions,
            "number_of_stories": number_of_stories
        })
    
    return pd.DataFrame(data)

# Generate and save the dataset
building_dataset = generate_building_data()
file_path = "FINAL HAHAHA/datasets/building_dataset.csv"
building_dataset.to_csv(file_path, index=False)

print(f"Fake Building Dataset with unique coordinates generated and saved as '{file_path}'.")
