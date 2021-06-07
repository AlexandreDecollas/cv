FROM nginx:latest

RUN mkdir /app
WORKDIR /app

COPY ./conf/nginx-dev.conf /etc/nginx/conf.d

SHELL ["/bin/bash", "-c"]

RUN apt-get update && apt-get install -y nodejs
RUN npm install -g yarn


