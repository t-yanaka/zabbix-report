#!/bin/sh
docker ps -a
echo -n "IMAGE ID?> "
read INPUT
input_id=$INPUT
docker stop $INPUT && docker rm $INPUT

docker image ls
echo -n "IMAGE ID?> "
read INPUT
input_id=$INPUT
docker rmi $INPUT

