from flask_cors import CORS
from flask import Flask, request
from utils import responsify, create_jwt_token


app = Flask(__name__)
CORS(app)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8888, debug=True)
