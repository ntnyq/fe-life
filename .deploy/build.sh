#!/bin/bash

WEB_PATH=$(dirname $0)

echo "[deploy] Fetch and rebuilding..."
cd $WEB_PATH
cd ..
echo "[deploy] path:" ${pwd}
echo "[deploy] pulling source code..."
git fetch --all && git reset --hard origin/master && git pulling
git checkout master
echo "[deploy] building start..."
yarn
yarn build
echo "[deploy] building done."
