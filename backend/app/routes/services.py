from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from ..extensions import db
from ..models.service import Service
from ..utils.auth import role_required
import re

services_bp = Blueprint("services", __name__)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

@services_bp.route("/services", methods=["GET"])
def get_services():
    services = Service.query.filter_by(is_active=True).all()
    return jsonify([s.to_dict() for s in services])

@services_bp.route("/services/<int:id>", methods=["GET"])
def get_service(id):
    s = Service.query.get_or_404(id)
    return jsonify(s.to_dict())

@services_bp.route("/services/slug/<slug>", methods=["GET"])
def get_service_by_slug(slug):
    s = Service.query.filter_by(slug=slug).first_or_404()
    return jsonify(s.to_dict())

@services_bp.route("/admin/services", methods=["GET"])
@role_required("admin")
def admin_get_services():
    services = Service.query.all()
    return jsonify([s.to_dict() for s in services])

@services_bp.route("/admin/services", methods=["POST"])
@role_required("admin")
def create_service():
    data = request.get_json()
    s = Service(
        name=data["name"],
        slug=slugify(data["name"]),
        category=data.get("category", ""),
        description=data.get("description", ""),
        price_type=data.get("price_type", "custom"),
        base_price=data.get("base_price"),
        is_active=data.get("is_active", True),
        is_featured=data.get("is_featured", False),
    )
    db.session.add(s)
    db.session.commit()
    return jsonify(s.to_dict()), 201

@services_bp.route("/admin/services/<int:id>", methods=["PUT"])
@role_required("admin")
def update_service(id):
    s = Service.query.get_or_404(id)
    data = request.get_json()
    for field in ["name", "category", "description", "price_type", "base_price", "is_active", "is_featured"]:
        if field in data:
            setattr(s, field, data[field])
    if "name" in data:
        s.slug = slugify(data["name"])
    db.session.commit()
    return jsonify(s.to_dict())

@services_bp.route("/admin/services/<int:id>", methods=["DELETE"])
@role_required("admin")
def delete_service(id):
    s = Service.query.get_or_404(id)
    db.session.delete(s)
    db.session.commit()
    return jsonify({"message": "Deleted"})
