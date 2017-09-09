#!/bin/sh

comment=`date`

git add -A
git commit -m "$comment"
git push origin master
