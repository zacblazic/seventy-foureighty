# Web Workers

Background threads in the browser. There are two types of web workers, dedicated and shared.

## Dedicated Worker
Linked to the window/script that spawned the worker.

## Shared Worker
Linked to the domain. Not much support for this as of yet.

## Features

Web workers can access:
* The `navigator` object
* Timers
* `XmlHttpRequest`
* Importing external scripts using `importScripts()`
* Spawning other web workers

## Limitations

Web workers cannot access:
* The DOM (not thread-safe)
* The `window` object (some read-only properties)
* The `document` object
* The `parent` object

This means that some libraries won't work on web workers.
