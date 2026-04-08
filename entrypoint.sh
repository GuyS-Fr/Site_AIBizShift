#!/bin/sh

# Copy seed media files to the volume if it's empty (first launch)
if [ -d /app/public/media-seed ] && [ -z "$(ls -A /app/public/media 2>/dev/null)" ]; then
  echo "First launch: copying seed media files to volume..."
  cp -r /app/public/media-seed/* /app/public/media/
  echo "Done."
fi

# Start the application
exec HOSTNAME="0.0.0.0" node server.js
