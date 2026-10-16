#!/usr/bin/env bash
# Run after every data update (daily refresh): bumps the cache-busting version in
# index.html (data.js?v=..., chart.json?v=..., expected version) and DASH.ver in data.js.
set -e; cd "$(dirname "$0")/.."
NEW="VER_$(date +%Y%m%d%H%M%S)"
sed -i -E "s/VER_[0-9a-z]+/$NEW/g" index.html data.js
echo "version -> $NEW"
