"use strict";

$(document).ready(function() {

  var logList = $("#fetch-log");
  var fetchButton = $("#fetch-button");
  var sendButton = $("#send-button");

  var log = function(message) {
    var item = $("<li>", {
      text: message
    });

    logList.append(item);
  }

  fetchButton.click(function() {
    // Create the xml http request object
    var xhr = new XMLHttpRequest();

    // Specify the method type, endpoint and whether or not the call is asynchronous
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,za", true);

    // Handle the response
    xhr.onload = function() {
      log(this.responseText);
    };

    // Send the request, can also pass data as an argument
    xhr.send();

  });

  sendButton.click(function() {
    sendText("Hello");
  });

  // Sending text using xml http request
  var sendText = function(txt) {
    var xhr = new XMLHttpRequest();

    // This example doesn't actually send anything, but it is still posting
    xhr.open("POST", "http://echo.jsontest.com/key/value/one/two", true);
    xhr.responseType = "text";
    xhr.onload = function(e) {
      if (this.status == 200) {
        // Notice that we are using response, not responseText
        log(this.response);
      }
    };

    xhr.send(txt);
  };

  var fetchBinary = function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/path/to/image.png', true);
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
