# Deployment Guide — Tapnovax Digital

## Target Environment

- Ubuntu 22.04 LTS
- PostgreSQL 15
- Python 3.11
- Gunicorn
- Nginx
- Let's Encrypt SSL

---

## 1. Server Preparation

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install python3.11 python3.11-venv python3-pip postgresql nginx certbot python3-certbot-nginx git -y
```

---

## 2. PostgreSQL Setup

```bash
sudo -u postgres psql
CREATE DATABASE tapnovax_db;
CREATE USER tapnovax_user WITH PASSWORD 'strongpassword';
GRANT ALL PRIVILEGES ON DATABASE tapnovax_db TO tapnovax_user;
\q
```

---

## 3. Clone & Configure Backend

```bash
git clone https://github.com/yourorg/tapnovax-digital.git /var/www/tapnovax
cd /var/www/tapnovax/backend

python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Create .env
cp .env.example .env
nano .env
```

**.env values:**
```
FLASK_ENV=production
SECRET_KEY=your-very-long-secret-key
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=postgresql://tapnovax_user:strongpassword@localhost:5432/tapnovax_db
FRONTEND_URL=https://yourdomain.com
```

```bash
flask db upgrade
python seed.py
```

---

## 4. Gunicorn Service

Create `/etc/systemd/system/tapnovax.service`:

```ini
[Unit]
Description=Tapnovax Digital Backend
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/tapnovax/backend
Environment="PATH=/var/www/tapnovax/backend/.venv/bin"
ExecStart=/var/www/tapnovax/backend/.venv/bin/gunicorn -w 4 -b 127.0.0.1:5000 "run:app"
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable tapnovax
sudo systemctl start tapnovax
```

---

## 5. Build Frontend

```bash
cd /var/www/tapnovax/frontend
npm install
npm run build
# Output: /var/www/tapnovax/frontend/dist
```

---

## 6. Nginx Configuration

Create `/etc/nginx/sites-available/tapnovax`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/tapnovax/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/tapnovax /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 8. Testing Checklist

- [ ] Homepage loads at https://yourdomain.com
- [ ] Services page loads correctly
- [ ] Contact form submits successfully
- [ ] User registration works
- [ ] Login redirects to correct dashboard
- [ ] Admin dashboard shows statistics
- [ ] Admin can create/edit services
- [ ] Client can submit service request
- [ ] Staff can view assigned leads
- [ ] PostgreSQL records are created correctly
- [ ] SSL certificate is valid
