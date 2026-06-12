from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..extensions import db
from ..models.user import User
from ..models.client_profile import ClientProfile

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if User.query.filter_by(email=data.get("email")).first():
        return jsonify({"error": "Email already registered"}), 400
    user = User(
        full_name=data["full_name"],
        email=data["email"],
        phone=data.get("phone", ""),
        role="client"
    )
    user.set_password(data["password"])
    db.session.add(user)
    db.session.flush()
    profile = ClientProfile(user_id=user.id, business_name=data.get("business_name", ""))
    db.session.add(profile)
    db.session.commit()
    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token, "user": user.to_dict()}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data.get("email")).first()
    if not user or not user.check_password(data.get("password", "")):
        return jsonify({"error": "Invalid credentials"}), 401
    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token, "user": user.to_dict()})

@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    data = user.to_dict()
    if user.client_profile:
        data["profile"] = user.client_profile.to_dict()
    return jsonify(data)

@auth_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    data = request.get_json()
    user.full_name = data.get("full_name", user.full_name)
    user.phone = data.get("phone", user.phone)
    if user.client_profile:
        user.client_profile.business_name = data.get("business_name", user.client_profile.business_name)
        user.client_profile.business_type = data.get("business_type", user.client_profile.business_type)
        user.client_profile.location = data.get("location", user.client_profile.location)
        user.client_profile.preferred_contact_method = data.get("preferred_contact_method", user.client_profile.preferred_contact_method)
    db.session.commit()
    return jsonify({"message": "Profile updated", "user": user.to_dict()})

@auth_bp.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    return jsonify({"message": "Logged out"})
