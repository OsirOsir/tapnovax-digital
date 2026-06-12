from ..extensions import db
from datetime import datetime

class ServiceRequest(db.Model):
    __tablename__ = "service_requests"
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("services.id"), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    budget_range = db.Column(db.String(50))
    preferred_contact_method = db.Column(db.String(50))
    status = db.Column(db.String(30), default="pending")  # pending, reviewing, approved, in_progress, completed, cancelled
    assigned_staff_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    admin_notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    service = db.relationship("Service", backref="requests", lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "service_id": self.service_id,
            "service_name": self.service.name if self.service else None,
            "title": self.title,
            "description": self.description,
            "budget_range": self.budget_range,
            "preferred_contact_method": self.preferred_contact_method,
            "status": self.status,
            "assigned_staff_id": self.assigned_staff_id,
            "admin_notes": self.admin_notes,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
