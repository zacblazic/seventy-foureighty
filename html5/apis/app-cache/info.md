# Offline Applications

## What Are Offline Applications?

Offline application will continue to work without Internet connection. Files
that are required to have the application working correctly (not all) are
downloaded and saved in a location where they can be reliably served up.

You can set up certain parts of your site to be accessible offline. However,
something to note is that even when you're connected to the Internet, the files
for those parts of your site will be served from the application cache. This
can cause issues and be a bit tricky.

In basic terms, it is the combination of browser events and the application
cache.

## Anatomy Of An Offline Application

### HTML Document

    <!doctype html>
    // Must have the manifest attribute defined
    <html manifest="application-manifest.aspx">
        .
        .
        <script>

          // Used to determine if we are online
          function isOnline() {
            return navigator.onLine;
          }

        </script>
      </body>
    </html>

### Cache Manifest

    CACHE MANIFEST // Must be the first line
    # version 1    // Mechanism to "update" the manifest (versioning)

    CACHE: // List of files that should be available offline
    journal.aspx
    journal-css.aspx
    scripts/jquery-1.5.1.min.js
    offline.js
    journal-bkg.jpg

    NETWORK: // Pages that should never be cached (requires connectivity)
    journal/list

    FALLBACK: // Map pages to be served when working offline
    /home /journal-fallback.aspx

The application is "installed" in a transactional way, so if one of the required
files fails to download, none are the files are used in the application. On the
bright side, this means you know that if successful, all files have been
downloaded reliably.

The cache manifest must be served as `text/cache-manifest` and encoded as `utf-8`

## Understanding Caching

### Browser Caching

When you go to a site, the html, images, css etc is downloaded to your machine
and when you subsequently go back to the site later, rather than having to
go fetch the same files again, if its the same file - it serves it from the
browser cache. If it doesn't have a file or it's expired then it will fetch it
from the server again.

### Application Caching

Rather than having disparate files that make up your application, it groups them
together into an application manifest file. These files are set aside and are reliably served from the application cache.

#### Gotcha
You should not mix browser caching with application caching!

Consider the scenario where you make a change to a javascript file, then update
the manifest file, but the browser still thinks the javascript file hasn't
changed and therefore serves it from browser cache.

In order to avoid this pitfall, you can disable caching using html headers.

## Progression Of Events

Located in `window.applicationCache`

First load:
* Checking - checks if any files in the manifest need to be downloaded
  * Downloading
  * Progress
  * Cached - fires once all files are available  

Second load (manifest not update):
* Checking
  * No update

Third load (update manifest):
* Checking
  * Downloading
  * Progress
  * Cached

### Cache States

* Uncached - Cache not initialized
* Idle - Cache not being update
* Checking - Looking for manifest changes
* Downloading - Serving files in manifest to browser
* UpdateReady - All files in manifest are downloaded
* Contents of cache are stale and need to be downloaded again
