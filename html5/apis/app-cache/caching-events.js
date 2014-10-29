$(document).ready(function() {

  var logList = $("#log");

  var log = function(msg) {
    logList.append($("<li>", {
      text: msg
    }));
  };

  if (window.applicationCache) {

    applicationCache.onupdateready = function() {
      log("Update ready");
      log("Swapping cache");
      applicationCache.swapCache();

      // Automatically reload page
      location.reload();
    }

    applicationCache.onchecking = function() {
      log("Checking cache");
    };

    applicationCache.oncached = function() {
      log("Cached");
    };

    applicationCache.onnoupdate = function() {
      log("No update");
    };

    applicationCache.onobsolete = function() {
      log("Obsolete");
    }

    applicationCache.ondownloading = function() {
      log("Downloading");
    }

    applicationCache.onerror = function() {
      log("Error");
    }

    log("Window load");
  }

});
