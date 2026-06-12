from ..extensions import db
from datetime import datetime

class Inquiry(db.Model):
    __tablename__ = "inquiries"
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20))
    email = db.Column(db.String(120), nullable=False)
    business_name = db.Column(db.String(150))
    service_interest = db.Column(db.String(150))
    message = db.Column(db.Text)
    source = db.Column(db.String(50), default="website")
    status = db.Column(db.String(30), default="new")  # new, contacted, qualified, converted, lost, closed
    assigned_staff_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email,
            "business_name": self.business_name,
            "service_interest": self.service_interest,
            "message": self.message,
            "source": self.source,
            "status": self.status,
            "assigned_staff_id": self.assigned_staff_id,
            "notes": self.notes,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
