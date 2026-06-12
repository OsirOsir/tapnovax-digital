from ..extensions import db
from datetime import datetime

class ClientProfile(db.Model):
    __tablename__ = "client_profiles"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    business_name = db.Column(db.String(150))
    business_type = db.Column(db.String(100))
    location = db.Column(db.String(150))
    address = db.Column(db.Text)
    preferred_contact_method = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "business_name": self.business_name,
            "business_type": self.business_type,
            "location": self.location,
            "address": self.address,
            "preferred_contact_method": self.preferred_contact_method,
        }
