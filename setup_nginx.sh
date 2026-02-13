#!/bin/bash

# Configuration
APP_NAME="hello-world-react"
# Assuming we are running this script from the parent directory of 'dist' or 'dist' is in the same dir
SOURCE_DIR="dist" 
TARGET_DIR="/var/www/html" # Standard Nginx root

echo "🚀 Starting deployment for $APP_NAME..."

# 1. Update and Install Nginx
echo "📦 Installing Nginx..."
if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y nginx
elif [ -x "$(command -v yum)" ]; then
    sudo yum update -y
    sudo yum install -y nginx
else
    echo "❌ Package manager not found. Please install Nginx manually."
    exit 1
fi

# 2. Setup Application Directory
echo "📂 Setting up application directory..."
# Check if dist exists in current directory
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Error: '$SOURCE_DIR' directory not found."
    echo "   Please make sure you copied the 'dist' folder to this server"
    echo "   and are running this script in the same directory."
    exit 1
fi

# Remove default html if it exists
sudo rm -rf $TARGET_DIR/*

# Copy files
echo "   Copying files to $TARGET_DIR..."
sudo cp -r $SOURCE_DIR/* $TARGET_DIR/

# 3. Set Permissions
echo "🔒 Setting permissions..."
# Detect Nginx user
if id "www-data" &>/dev/null; then
    NGINX_USER="www-data"
elif id "nginx" &>/dev/null; then
    NGINX_USER="nginx"
else
    NGINX_USER="root"
    echo "⚠️  Warning: Could not detect Nginx user. Using root."
fi

sudo chown -R $NGINX_USER:$NGINX_USER $TARGET_DIR
sudo chmod -R 755 $TARGET_DIR

# 4. Configure Nginx for React Router (SPA)
echo "⚙️  Configuring Nginx..."

CONFIG_CONTENT="server {
    listen 80;
    listen [::]:80;
    root $TARGET_DIR;
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}"

# Write config based on OS
if [ -d "/etc/nginx/sites-available" ]; then
    # Debian/Ubuntu
    echo "$CONFIG_CONTENT" | sudo tee /etc/nginx/sites-available/default > /dev/null
    sudo ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
    
elif [ -d "/etc/nginx/conf.d" ]; then
    # RHEL/Amazon Linux
    # Check if nginx.conf includes conf.d
    echo "$CONFIG_CONTENT" | sudo tee /etc/nginx/conf.d/default.conf > /dev/null
fi

# 5. Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Configuration Complete!"
echo "   Visit your EC2 Public IP to see your website."
