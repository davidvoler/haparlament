#build frontend
FROM node:18.15.0 as uibuilder
RUN mkdir /ngapp
WORKDIR /ngapp
COPY frontend/ui/package.json .
COPY frontend/ui/yarn.lock .
RUN yarn
COPY ./frontend/ui/ .
RUN yarn build 

# build backend 
FROM golang:1.18.10-bullseye AS backendbuilder
RUN mkdir /app
WORKDIR /app
COPY backend/src /app/
RUN rm -rf /app/ui/build
COPY --from=uibuilder /ngapp/build /app/ui/build  
RUN go mod tidy
RUN go build main.go

FROM alpine:3.17.2
RUN mkdir /app
WORKDIR /app
COPY --from=backendbuilder app/main main  
RUN apk add --no-cache bash
EXPOSE 8080
ENTRYPOINT ["./app/main"]



