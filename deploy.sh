#!/bin/bash

set -e

echo "Cleaning old build..."
sudo rm -rf /var/www/html/*

echo "Copying new build..."
sudo cp -r ~/app/* /var/www/html/

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "🚀 Deployed successfully" 
