#!/bin/sh

LIST=`docker ps -a | awk '{print $1}' | grep -v "CONTAINER"`
for line in `echo $LIST`
do
   docker stop $line
   docker rm $line
done

docker ps -a
