from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models.user import User
from ..models.inquiry import Inquiry
from ..models.service_request import ServiceRequest
from ..models.onboarding import Onboarding
from ..utils.auth import role_required

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/admin/dashboard", methods=["GET"])
@role_required("admin")
def admin_dashboard():
    total_users = User.query.count()
    total_clients = User.query.filter_by(role="client").count()
    total_staff = User.query.filter_by(role="staff").count()
    total_inquiries = Inquiry.query.count()
    new_inquiries = Inquiry.query.filter_by(status="new").count()
    converted_leads = Inquiry.query.filter_by(status="converted").count()
    total_requests = ServiceRequest.query.count()
    pending_requests = ServiceRequest.query.filter_by(status="pending").count()
    completed_requests = ServiceRequest.query.filter_by(status="completed").count()
    in_progress = ServiceRequest.query.filter_by(status="in_progress").count()

    recent_inquiries = Inquiry.query.order_by(Inquiry.created_at.desc()).limit(5).all()
    recent_requests = ServiceRequest.query.order_by(ServiceRequest.created_at.desc()).limit(5).all()

    return jsonify({
        "stats": {
            "total_users": total_users,
            "total_clients": total_clients,
            "total_staff": total_staff,
            "total_inquiries": total_inquiries,
            "new_inquiries": new_inquiries,
            "converted_leads": converted_leads,
            "total_requests": total_requests,
            "pending_requests": pending_requests,
            "completed_requests": completed_requests,
            "in_progress": in_progress,
        },
        "recent_inquiries": [i.to_dict() for i in recent_inquiries],
        "recent_requests": [r.to_dict() for r in recent_requests],
    })

@dashboard_bp.route("/staff/dashboard", methods=["GET"])
@role_required("staff", "admin")
def staff_dashboard():
    user_id = int(get_jwt_identity())
    assigned_inquiries = Inquiry.query.filter_by(assigned_staff_id=user_id).all()
    assigned_requests = ServiceRequest.query.filter_by(assigned_staff_id=user_id).all()
    return jsonify({
        "assigned_inquiries": [i.to_dict() for i in assigned_inquiries],
        "assigned_requests": [r.to_dict() for r in assigned_requests],
    })

@dashboard_bp.route("/client/dashboard", methods=["GET"])
@jwt_required()
def client_dashboard():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    requests = ServiceRequest.query.filter_by(client_id=user_id).order_by(ServiceRequest.created_at.desc()).limit(5).all()
    onboardings = Onboarding.query.filter_by(client_id=user_id).all()
    return jsonify({
        "user": user.to_dict() if user else None,
        "requests": [r.to_dict() for r in requests],
        "onboarding": [o.to_dict() for o in onboardings],
    })

@dashboard_bp.route("/admin/users", methods=["GET"])
@role_required("admin")
def get_users():
    users = User.query.order_by(User.created_at.desc()).all()
    return jsonify([u.to_dict() for u in users])
