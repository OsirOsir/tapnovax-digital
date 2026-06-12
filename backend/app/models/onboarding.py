from ..extensions import db
from datetime import datetime

class Onboarding(db.Model):
    __tablename__ = "onboardings"
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    full_name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    email = db.Column(db.String(120))
    business_name = db.Column(db.String(150))
    business_type = db.Column(db.String(100))
    location = db.Column(db.String(150))
    service_needed = db.Column(db.String(200))
    goals = db.Column(db.Text)
    current_online_presence = db.Column(db.Text)
    preferred_start_date = db.Column(db.Date)
    notes = db.Column(db.Text)
    status = db.Column(db.String(30), default="submitted")  # submitted, under_review, contacted, approved, active, rejected
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email,
            "business_name": self.business_name,
            "business_type": self.business_type,
            "location": self.location,
            "service_needed": self.service_needed,
            "goals": self.goals,
            "current_online_presence": self.current_online_presence,
            "preferred_start_date": str(self.preferred_start_date) if self.preferred_start_date else None,
            "notes": self.notes,
            "status": self.status,
            "created_at": self.created_at.isoformat(),
        }
