from flask import Flask
from .extensions import db, jwt, migrate, cors
from .config import config
import os

def create_app():
    app = Flask(__name__)
    env = os.environ.get("FLASK_ENV", "development")
    app.config.from_object(config[env])

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/api/*": {"origins": app.config["FRONTEND_URL"]}})

    from .routes.auth import auth_bp
    from .routes.services import services_bp
    from .routes.inquiries import inquiries_bp
    from .routes.service_requests import service_requests_bp
    from .routes.onboarding import onboarding_bp
    from .routes.dashboard import dashboard_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(services_bp, url_prefix="/api")
    app.register_blueprint(inquiries_bp, url_prefix="/api")
    app.register_blueprint(service_requests_bp, url_prefix="/api")
    app.register_blueprint(onboarding_bp, url_prefix="/api")
    app.register_blueprint(dashboard_bp, url_prefix="/api")

    return app
