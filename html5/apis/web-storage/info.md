# Web Storage

 Comes in two different flavours, namely local storage and session storage. However the API is the same for both.

## Local

 Similar to a cookie. Write data to user's machine.


## Session

Lifecycle is scoped to session. (page closed)

## Security

Restricted:
* Per session
* Per domain

## Capacity

* Client controlled
* Between 2 - 10 MB (usually 5MB)

## Web Storage vs Cookies

* Client only (aren't sent to server with each request)
* Larger capacity

## Web Storage vs IndexedDB

* Simpler API
* Key value pairs only
* More available

## API

    storage.clear
    storage.getItem
    storage.key
    storage.length
    storage.remainingSpace
    storage.removeItem
    storage.setItem

    storage event
