#!/bin/bash

SHELL_PATH=$(dirname $0)

echo "[deploy] Start deployment..."
sh ${SHELL_PATH}/build.sh
echo "[deploy] Finished."
