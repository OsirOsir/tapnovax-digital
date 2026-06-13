#!/bin/bash

# ─────────────────────────────────────────
#  Tapnovax Digital — Deploy Script
#  Usage: ./deploy.sh
#  Runs from your local machine
# ─────────────────────────────────────────

set -e

SERVER="root@104.207.75.150"
REPO_DIR="/var/www/tapnovax-digital"

echo ""
echo "🚀 Tapnovax Digital — Deploying..."
echo "──────────────────────────────────"

# Step 1: Push local changes to GitHub
echo ""
echo "📦 Step 1: Pushing to GitHub..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "   Nothing new to commit — continuing..."
git push origin main
echo "   ✅ GitHub updated"

# Step 2: SSH into server and deploy
echo ""
echo "🖥️  Step 2: Deploying to server..."
ssh $SERVER << 'ENDSSH'
set -e
cd /var/www/tapnovax-digital

echo "   → Pulling latest code..."
git pull origin main

echo "   → Building frontend..."
cd frontend
npm install --silent
npm run build

echo "   → Restarting backend..."
systemctl restart tapnovax

echo ""
echo "✅ Deployment complete!"
echo "🌍 Live at: https://tapnovax.online"
ENDSSH

echo ""
echo "──────────────────────────────────"
echo "✅ All done! Visit https://tapnovax.online"
echo ""
