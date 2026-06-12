from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..extensions import db
from ..models.onboarding import Onboarding
from ..utils.auth import role_required

onboarding_bp = Blueprint("onboarding", __name__)

@onboarding_bp.route("/onboarding", methods=["POST"])
@jwt_required()
def submit_onboarding():
    user_id = get_jwt_identity()
    data = request.get_json()
    ob = Onboarding(
        client_id=int(user_id),
        full_name=data.get("full_name", ""),
        phone=data.get("phone", ""),
        email=data.get("email", ""),
        business_name=data.get("business_name", ""),
        business_type=data.get("business_type", ""),
        location=data.get("location", ""),
        service_needed=data.get("service_needed", ""),
        goals=data.get("goals", ""),
        current_online_presence=data.get("current_online_presence", ""),
        preferred_start_date=data.get("preferred_start_date"),
        notes=data.get("notes", ""),
    )
    db.session.add(ob)
    db.session.commit()
    return jsonify(ob.to_dict()), 201

@onboarding_bp.route("/client/onboarding", methods=["GET"])
@jwt_required()
def get_client_onboarding():
    user_id = get_jwt_identity()
    obs = Onboarding.query.filter_by(client_id=int(user_id)).order_by(Onboarding.created_at.desc()).all()
    return jsonify([o.to_dict() for o in obs])

@onboarding_bp.route("/admin/onboarding", methods=["GET"])
@role_required("admin", "staff")
def get_all_onboarding():
    obs = Onboarding.query.order_by(Onboarding.created_at.desc()).all()
    return jsonify([o.to_dict() for o in obs])

@onboarding_bp.route("/admin/onboarding/<int:id>/status", methods=["PUT"])
@role_required("admin")
def update_onboarding_status(id):
    ob = Onboarding.query.get_or_404(id)
    data = request.get_json()
    ob.status = data.get("status", ob.status)
    ob.notes = data.get("notes", ob.notes)
    db.session.commit()
    return jsonify(ob.to_dict())
