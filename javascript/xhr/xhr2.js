"use strict";

$(document).ready(function() {

  var logList = $("#xhr2-fetch-log");
  var fetchButton = $("#xhr2-fetch-button");

  var log = function(message) {
    var item = $("<li>", {
      text: message
    });

    logList.append(item);7
  }

  fetchButton.click(function() {
    // Create the xml http request object
    var xhr = new XMLHttpRequest();

    // Specify the method type, endpoint and whether or not the call is asynchronous
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,za", true);

    // Handle the response
    xhr.onload = function() {
      if (this.status == 200) {
        log(this.response);
      }
    };

    // Send the request, can also pass data as an argument
    xhr.send();

  });

  var fetchBinary = function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/path/to/image.png', true);

    // Response type can be set to "text", "arraybuffer", "blob", or "document".
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      if (this.status == 200) {
        // Note: .response instead of .responseText
        var blob = new Blob([this.response], {type: 'image/png'});
      }
    };

    xhr.send();
  };

});
