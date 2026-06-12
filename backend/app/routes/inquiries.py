from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.inquiry import Inquiry
from ..utils.auth import role_required

inquiries_bp = Blueprint("inquiries", __name__)

@inquiries_bp.route("/inquiries", methods=["POST"])
def submit_inquiry():
    data = request.get_json()
    inquiry = Inquiry(
        full_name=data["full_name"],
        email=data["email"],
        phone=data.get("phone", ""),
        business_name=data.get("business_name", ""),
        service_interest=data.get("service_interest", ""),
        message=data.get("message", ""),
        source=data.get("source", "website"),
    )
    db.session.add(inquiry)
    db.session.commit()
    return jsonify({"message": "Inquiry received", "id": inquiry.id}), 201

@inquiries_bp.route("/admin/inquiries", methods=["GET"])
@role_required("admin", "staff")
def get_inquiries():
    inquiries = Inquiry.query.order_by(Inquiry.created_at.desc()).all()
    return jsonify([i.to_dict() for i in inquiries])

@inquiries_bp.route("/admin/inquiries/<int:id>", methods=["GET"])
@role_required("admin", "staff")
def get_inquiry(id):
    inquiry = Inquiry.query.get_or_404(id)
    return jsonify(inquiry.to_dict())

@inquiries_bp.route("/admin/inquiries/<int:id>/status", methods=["PUT"])
@role_required("admin", "staff")
def update_inquiry_status(id):
    inquiry = Inquiry.query.get_or_404(id)
    data = request.get_json()
    inquiry.status = data.get("status", inquiry.status)
    db.session.commit()
    return jsonify(inquiry.to_dict())

@inquiries_bp.route("/admin/inquiries/<int:id>/assign", methods=["PUT"])
@role_required("admin")
def assign_inquiry(id):
    inquiry = Inquiry.query.get_or_404(id)
    data = request.get_json()
    inquiry.assigned_staff_id = data.get("staff_id")
    db.session.commit()
    return jsonify(inquiry.to_dict())

@inquiries_bp.route("/admin/inquiries/<int:id>/notes", methods=["POST"])
@role_required("admin", "staff")
def add_inquiry_notes(id):
    inquiry = Inquiry.query.get_or_404(id)
    data = request.get_json()
    inquiry.notes = data.get("notes", inquiry.notes)
    db.session.commit()
    return jsonify(inquiry.to_dict())
