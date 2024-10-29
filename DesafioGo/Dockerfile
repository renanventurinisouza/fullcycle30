FROM golang:latest

WORKDIR /usr/src/app

COPY fullcyclerocks.go /usr/src/app/

RUN go mod init fullcyclerocks && \
    go build -ldflags '-s -w' /usr/src/app/ ./...

    CMD ["./fullcyclerocks"]