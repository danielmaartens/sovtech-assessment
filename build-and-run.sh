#!/bin/bash

docker network create --subnet=172.7.0.0/16 chucklenet 2>/dev/null

cd client

docker build -t chucklegen/app .

cd ../server

docker build -t chucklegen/server .

cd ..

docker-compose up -d