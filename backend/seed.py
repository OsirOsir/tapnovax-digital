from app import create_app
from app.extensions import db
from app.models.user import User
from app.models.service import Service
import re

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

app = create_app()

with app.app_context():
    db.create_all()

    # Admin user
    if not User.query.filter_by(email="admin@tapnovax.com").first():
        admin = User(full_name="Admin User", email="admin@tapnovax.com", phone="+254700000001", role="admin")
        admin.set_password("admin123")
        db.session.add(admin)

    # Staff user
    if not User.query.filter_by(email="staff@tapnovax.com").first():
        staff = User(full_name="Sales Staff", email="staff@tapnovax.com", phone="+254700000002", role="staff")
        staff.set_password("staff123")
        db.session.add(staff)

    # Client user
    if not User.query.filter_by(email="client@tapnovax.com").first():
        client = User(full_name="Test Client", email="client@tapnovax.com", phone="+254700000003", role="client")
        client.set_password("client123")
        db.session.add(client)

    # Services
    services_data = [
        {"name": "Online Marketing", "category": "Digital Marketing", "description": "Comprehensive online marketing strategies to grow your business reach and attract new customers through targeted digital campaigns.", "price_type": "monthly", "base_price": 15000, "is_featured": True},
        {"name": "Business Promotion", "category": "Online Promotion", "description": "Strategic business promotion services to increase your brand visibility and drive customer engagement across digital platforms.", "price_type": "custom", "is_featured": True},
        {"name": "Customer Onboarding", "category": "Customer Onboarding", "description": "Structured onboarding programs to welcome new clients, set up accounts, and ensure a seamless start to the business relationship.", "price_type": "fixed", "base_price": 8000},
        {"name": "Sales Support", "category": "Sales Support", "description": "Dedicated sales support services to help your team close deals, manage leads, and follow up with prospects effectively.", "price_type": "monthly", "base_price": 12000, "is_featured": True},
        {"name": "Digital Campaign Management", "category": "Digital Marketing", "description": "End-to-end management of digital marketing campaigns across all major platforms including social media, search, and display.", "price_type": "monthly", "base_price": 20000},
        {"name": "Social Media Management", "category": "Online Promotion", "description": "Professional management of your social media presence to build community, increase engagement, and grow your audience.", "price_type": "monthly", "base_price": 10000},
        {"name": "Lead Generation", "category": "Lead Generation", "description": "Data-driven lead generation services to identify, attract, and qualify potential customers for your business.", "price_type": "custom", "is_featured": True},
        {"name": "Business Technology Support", "category": "Business Technology Support", "description": "Technology-enabled support services to streamline your business operations and improve efficiency through digital tools.", "price_type": "negotiable"},
    ]

    for svc in services_data:
        if not Service.query.filter_by(slug=slugify(svc["name"])).first():
            s = Service(
                name=svc["name"],
                slug=slugify(svc["name"]),
                category=svc["category"],
                description=svc["description"],
                price_type=svc.get("price_type", "custom"),
                base_price=svc.get("base_price"),
                is_featured=svc.get("is_featured", False),
                is_active=True,
            )
            db.session.add(s)

    db.session.commit()
    print("Seed complete.")
    print("Admin: admin@tapnovax.com / admin123")
    print("Staff: staff@tapnovax.com / staff123")
    print("Client: client@tapnovax.com / client123")
