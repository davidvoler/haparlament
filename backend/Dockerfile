FROM golang:1.18.10-bullseye AS builder

RUN mkdir /app
WORKDIR /app
COPY src /app/
RUN go mod tidy
RUN go build 
RUN ls -la /app

FROM alpine:3.17.2
RUN mkdir /app
WORKDIR /app
COPY --from=builder app/main main  
RUN apk add --no-cache bash
EXPOSE 8080
ENTRYPOINT ["./main"]
