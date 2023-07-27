import pymongo
import certifi

con_str = "mongodb+srv://FSDI108:Test1234@cluster0.acdyln7.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("Dedication")