#!/bin/sh

./docker-down.sh
#docker-compose run $1
docker-compose up -d $1
