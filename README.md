# Tapnovax Digital — Full-Stack SaaS Platform

A premium SaaS-style digital services platform for **Tapnovax Digital**, built with Flask (Python) and React (TypeScript).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | Python 3.11+, Flask, SQLAlchemy |
| Database | PostgreSQL (SQLite for dev) |
| Auth | JWT (Flask-JWT-Extended) |
| Deployment | Gunicorn + Nginx on Ubuntu VPS |

---

## Project Structure

```
tapnovax-digital/
├── backend/          Flask API
│   ├── app/
│   │   ├── models/   Database models
│   │   ├── routes/   API route blueprints
│   │   └── utils/    Auth helpers
│   ├── seed.py       Sample data seeder
│   └── run.py        Dev server entry
└── frontend/         React SPA
    └── src/
        ├── api/       Axios API clients
        ├── pages/     All page components
        ├── layouts/   Public + Dashboard layouts
        └── context/   Auth context
```

---

## Quick Start (Local)

### 1. Backend Setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Copy and edit environment file
cp .env.example .env
# Edit .env: set SECRET_KEY, JWT_SECRET_KEY, DATABASE_URL

# Database setup
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

# Seed sample data
python seed.py

# Start dev server
python run.py
```

Backend runs at: http://localhost:5000

### 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs at: http://localhost:5173

---

## Test Accounts (after seeding)

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@tapnovax.com | admin123 |
| Staff | staff@tapnovax.com | staff123 |
| Client | client@tapnovax.com | client123 |

---

## Key Features

- **Public website**: Homepage, services, about, contact with inquiry form
- **Authentication**: JWT-based login/register with role-based access
- **Admin dashboard**: Full CRM — users, services, inquiries, requests, onboarding
- **Staff panel**: Assigned leads and service requests with status management
- **Client portal**: Request services, track status, submit onboarding

---

## API Endpoints Summary

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me

GET    /api/services
POST   /api/admin/services
PUT    /api/admin/services/:id

POST   /api/inquiries          (public)
GET    /api/admin/inquiries
PUT    /api/admin/inquiries/:id/status

POST   /api/client/service-requests
GET    /api/client/service-requests
GET    /api/admin/service-requests

POST   /api/onboarding
GET    /api/admin/onboarding

GET    /api/admin/dashboard
GET    /api/staff/dashboard
GET    /api/client/dashboard
```

---

See **DEPLOYMENT.md** for Ubuntu VPS production setup.
