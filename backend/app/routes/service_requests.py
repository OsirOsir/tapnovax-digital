from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..extensions import db
from ..models.service_request import ServiceRequest
from ..utils.auth import role_required

service_requests_bp = Blueprint("service_requests", __name__)

@service_requests_bp.route("/client/service-requests", methods=["POST"])
@jwt_required()
def create_request():
    user_id = get_jwt_identity()
    data = request.get_json()
    sr = ServiceRequest(
        client_id=int(user_id),
        service_id=data["service_id"],
        title=data["title"],
        description=data.get("description", ""),
        budget_range=data.get("budget_range", ""),
        preferred_contact_method=data.get("preferred_contact_method", ""),
    )
    db.session.add(sr)
    db.session.commit()
    return jsonify(sr.to_dict()), 201

@service_requests_bp.route("/client/service-requests", methods=["GET"])
@jwt_required()
def get_client_requests():
    user_id = get_jwt_identity()
    requests = ServiceRequest.query.filter_by(client_id=int(user_id)).order_by(ServiceRequest.created_at.desc()).all()
    return jsonify([r.to_dict() for r in requests])

@service_requests_bp.route("/client/service-requests/<int:id>", methods=["GET"])
@jwt_required()
def get_client_request(id):
    user_id = get_jwt_identity()
    sr = ServiceRequest.query.filter_by(id=id, client_id=int(user_id)).first_or_404()
    return jsonify(sr.to_dict())

@service_requests_bp.route("/admin/service-requests", methods=["GET"])
@role_required("admin", "staff")
def get_all_requests():
    requests = ServiceRequest.query.order_by(ServiceRequest.created_at.desc()).all()
    return jsonify([r.to_dict() for r in requests])

@service_requests_bp.route("/admin/service-requests/<int:id>/status", methods=["PUT"])
@role_required("admin", "staff")
def update_request_status(id):
    sr = ServiceRequest.query.get_or_404(id)
    data = request.get_json()
    sr.status = data.get("status", sr.status)
    sr.admin_notes = data.get("admin_notes", sr.admin_notes)
    db.session.commit()
    return jsonify(sr.to_dict())

@service_requests_bp.route("/admin/service-requests/<int:id>/assign", methods=["PUT"])
@role_required("admin")
def assign_request(id):
    sr = ServiceRequest.query.get_or_404(id)
    data = request.get_json()
    sr.assigned_staff_id = data.get("staff_id")
    db.session.commit()
    return jsonify(sr.to_dict())

@service_requests_bp.route("/staff/service-requests", methods=["GET"])
@role_required("staff", "admin")
def get_staff_requests():
    from flask_jwt_extended import get_jwt_identity
    user_id = get_jwt_identity()
    requests = ServiceRequest.query.filter_by(assigned_staff_id=int(user_id)).all()
    return jsonify([r.to_dict() for r in requests])
