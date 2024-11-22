from pymongo import MongoClient

# Replace this with your connection string
MONGO_URI = "mongodb+srv://pikachu:<ICYN4bjdSJ8JYy5u>@cluster0.7ddgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(MONGO_URI)
db = client["construction_monitoring"]  # Database name

print("Connected to MongoDB!")

