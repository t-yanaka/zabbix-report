#!/bin/sh

LIST=`docker ps -a | awk '{print $1}' | grep -v "CONTAINER"`
for line in `echo $LIST`
do
   docker stop $line
   docker rm $line
done


for line in `docker image ls | awk '{print $3}' | grep -v "IMAGE"`
do
   docker rmi -f $line
done

docker ps -a
echo ================================================================================================================
docker image ls

