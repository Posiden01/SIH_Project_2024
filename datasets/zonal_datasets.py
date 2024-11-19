import pandas as pd
import random

# Refined data generation for authenticity
def generate_authentic_zonal_data(num_entries=20):
    data = []
    used_names = set()  # To avoid duplicate names

    for i in range(1, num_entries + 1):
        # Generate zone ID and name
        zone_type = random.choice(["Sector", "Industrial Area", "Residential Block"])
        zone_num = random.randint(1, 50)
        zone_sub = random.choice(["", "A", "B", "C"])  # Add suffix for variation
        zone_name = f"{zone_type} {zone_num}{zone_sub}".strip()
        while zone_name in used_names:  # Ensure unique zone names
            zone_num = random.randint(1, 50)
            zone_name = f"{zone_type} {zone_num}{zone_sub}".strip()
        used_names.add(zone_name)
        zone_id = f"{zone_type[:3].upper()}{zone_num}{zone_sub}"

        # Land type and associated constraints
        land_type = random.choice(["Residential", "Commercial", "Industrial", "Agricultural"])
        legal_status = (
            "Fully Legal" if land_type in ["Residential", "Commercial"]
            else random.choice(["Restricted", "Mixed"])
        )
        unauthorized_rules = {
            "Residential": "No commercial buildings allowed.",
            "Commercial": "Construction allowed only with prior approval.",
            "Industrial": "No construction without safety clearance.",
            "Agricultural": "Strictly no non-agricultural construction."
        }[land_type]

        # Area size
        area_size = {
            "Residential": round(random.uniform(2, 10), 2),
            "Commercial": round(random.uniform(1, 5), 2),
            "Industrial": round(random.uniform(5, 20), 2),
            "Agricultural": round(random.uniform(10, 50), 2),
        }[land_type]

        # Latitude/Longitude ranges
        latitude_start = round(random.uniform(28.000, 28.800), 6)
        latitude_end = round(latitude_start + random.uniform(0.02, 0.05), 6)
        longitude_start = round(random.uniform(77.000, 77.800), 6)
        longitude_end = round(longitude_start + random.uniform(0.02, 0.05), 6)
        latitude_range = f"{latitude_start}-{latitude_end}"
        longitude_range = f"{longitude_start}-{longitude_end}"

        data.append({
            "zone_id": zone_id,
            "zone_name": zone_name,
            "land_type": land_type,
            "area_size": area_size,
            "legal_status": legal_status,
            "unauthorized_rules": unauthorized_rules,
            "latitude_range": latitude_range,
            "longitude_range": longitude_range
        })
    
    return pd.DataFrame(data)

# Generate and save the dataset
zonal_dataset = generate_authentic_zonal_data()
file_path = "datasets/zonal_dataset_authentic.csv"
zonal_dataset.to_csv(file_path, index=False)

print(f"Authentic Zonal Dataset generated and saved as '{file_path}'.")

