# Web Sockets

Web sockets enable bidirectional, full duplex client/server
communication.

Web sockets are something you can create in the browser which
have their own frame and protocol.

## Half vs Full Duplex

Half duplex allows for communication in one direction
at a time only. HTTP is half-duplex.

Full duplex allows for communication in both directions simultaneously.
This can be faked by sending many messages in quick succession.

## Before Web Sockets

* AJAX
* Comet

Polling, Long Polling, Streaming

## Polling

Making multiple requests in a short period of time in order to get
new data.

### Short Polling

Uses a timer and asks server if there is new data.
Roughly similar to "refreshing" the page at a regular interval.
Not real-time, but useful if your data doesn't change too often.

### Long Polling

Instead of using a timer, it has an event based algorithm.

1. Client sends a request.
2. Server checks for changes in data.
3. If there are changes, the data is returned.
4. If there are no changes, the server waits for a short while
    and jumps to 2.

## Streaming

A connection is made to the server and the server never sends the end
response. Data is then continually sent using the same response.

## Sockets

Client opens a connection to the server, which stays open. Server can then
continually send responses.

Saves bandwidth, server resources and is real-time.

## HTTP Header vs Socket Header

HTTP headers are 100's of bytes, whereas a socket's framed data is only 2 bytes.

Web sockets sends an initial request to the server, which then upgrades the
connection to web sockets protocol. That connection is then maintained.
