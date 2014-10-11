# New JavaScript APIs

## Canvas

Related to the new `canvas` element. 2D or 3D context to use as a drawing surface in the browser.

## Contacts

Common contacts repository in the browser available to websites. Yet to be implemented.

## File Storage

Gives browsers access to sandboxed areas of user's computer to store data on the file system.

## Forms

Built-in & custom validation.

## Geolocation

Allows the browser to request location of the user. Browser uses different methods to determine user's location.

## IndexedDB

Stores sizeable amounts of structured data in the browser. Includes indexing for high performance queries. Object database rather than relational. Includes both synchronous and asynchronous.

## Media Capture

Allows the browser to natively access devices such as camera/microphone.

## Microdata

Allows pages to include data for computers (spiders) & people through metadata.  

## Messaging

Used in conjunction with other APIs such as Web Workers.

## Offline Web Applications

Mark pages and resources as being able to be available even when there is no internet connection. Similar to existing browser cache, except that resources are available on request to a site when offline. You can also mark certain resources as being "server-only".

## Selection

Adds support for advanced native DOM selection that includes jQuery like operations.

## Server-Sent Events

Allows the sending of messages from the server to the browser (single direction), whereas Web Sockets are full duplex (bidirectional). Allows streaming of data to connected clients. All of this is via HTTP.

## Web Notifications

Toasts and notifications in the operating system. Still experimental.

## Web Sockets

Allows you to open sockets to a web browser.

## Web Storage

Comes in two different types: local and session.

### Local Storage

Persists among sessions, but is sandboxed to the site of origin.

### Session Storage  

Data lives as long as the browser is open.

## Web Workers

Allows offloading of resource intensive tasks to a worker execution context that wont hang the UI thread. Messaging is then used to communicate between the worker and UI thread.

## XMLHttpRequest Level 2

Updates the original XMLHttpRequest. Improves the cross-origin resource sharing issues.
