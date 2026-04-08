#!/bin/sh

# Ensure media directory is writable (volume mount creates it as root)
mkdir -p /app/public/media
chown nextjs:nodejs /app/public/media

# Start the application as nextjs user
export HOSTNAME="0.0.0.0"
exec su-exec nextjs node server.js
