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

  var createXmlHttpRequest = function() {
    var xhr;

    try {
      if (window.XMLHttpRequest) {
        // Most modern browsers should support this
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        // IE 6 and lower
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
      } else if (window.createRequest){
        // Old opera syntax
        xhr = window.createRequest()
      }
    } catch (e) {
      xhr = null;
    }

    return xhr;
  }

  fetchButton.click(function() {
    // Create the cross-browser xml http request object
    var xhr = createXmlHttpRequest();

    if (xhr) {

      // Specify the method type, endpoint and whether or not the call is asynchronous
      xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,za", true);
      xhr.onreadystatechange = function() {
        // If the readyState is 4 and the status is 200, it was successful
        if (this.readyState == 4 && this.status == "200") {
          // Here we get the response text, as it is json. If using xml, you can
          // use xhr.responseXML
          log(this.responseText);
        }
      };

      // Send the request, can also pass data as an argument
      xhr.send();
    }

  });

  sendButton.click(function() {
    sendText("Hello");
  });

  // Sending text using xml http request
  var sendText = function(txt) {
    var xhr = new XMLHttpRequest();

    // This example doesn't actually send anything, but it is still posting
    xhr.open("POST", "http://echo.jsontest.com/key/value/one/two", true);
    xhr.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        log(this.responseText);
      }
    };

    xhr.send(txt);
  };

  var fetchBinary = function(url) {
    // Create the cross-browser xml http request object
    var xhr = createXmlHttpRequest();
    xhr.open("GET", url, true);

    // Hack to pass bytes through unprocessed
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.onreadystatechange = function(e) {
      // Check for success
      if (this.readyState == 4 && this.status == 200) {
        var binaryString = this.responseText;
        for (var i = 0, len = binaryString.length; i < len; ++i) {
          var c = binStr.charCodeAt(i);
          //String.fromCharCode(c & 0xff);
          var byte = c & 0xff;  // byte at offset i
        }
      }
    };

    xhr.send();
  };

});
