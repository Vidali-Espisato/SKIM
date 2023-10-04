import os
from jwt import JWT
from datetime import timedelta
from dotenv import load_dotenv
from mongo import MongoWrapper

load_dotenv()

JWT_SECRET_KEY = os.environ.get("APP_SECRET")

DB_NAME = os.environ.get("DB_NAME")
DB_URI = os.environ.get("DB_URI")

db = MongoWrapper(DB_NAME, DB_URI)
_jwt = JWT()