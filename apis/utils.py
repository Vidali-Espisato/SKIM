from flask import make_response, jsonify
from settings import db, _jwt, JWT_SECRET_KEY


def responsify(response, status_code=None):

    if not status_code:
        status_code = 400 if isinstance(response, dict) and "error" in response else 200

    if isinstance(response, dict):
        return make_response(jsonify(response), status_code)
    return make_response(jsonify({"data": response}))


def create_jwt_token(payload):
    username = payload.get("payload")

    exists = db.get("users", {"username": username})
    if exists:
        return {"error": "Username already taken."}

    inserted_id = db.add("users", payload)
    jwt_token = _jwt.encode({"pk": inserted_id}, JWT_SECRET_KEY, "HS256")

    return {"token": jwt_token}
