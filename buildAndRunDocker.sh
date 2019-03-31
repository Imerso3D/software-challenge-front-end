#!/usr/bin/env bash

IMAGE_NAME=imerso3d/scan-list-app
APP_PORT=8888

docker build -t ${IMAGE_NAME} .

echo App available on: http://localhost:${APP_PORT}

docker run -p ${APP_PORT}:80 -it --rm ${IMAGE_NAME}

