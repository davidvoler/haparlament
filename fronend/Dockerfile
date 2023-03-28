FROM node:18.15.0 as builder

RUN mkdir /ngapp
WORKDIR /ngapp
COPY ui/package.json .
COPY ui/yarn.lock .
RUN yarn

COPY ./ui/ .

RUN yarn build 

