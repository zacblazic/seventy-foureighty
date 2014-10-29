"use strict";

(function() {

  // Bubbling vs capturing
  var logList = document.querySelector(".log");
  var log = function(msg) {
    var message = document.createElement("li");
    message.innerHTML = msg;
    logList.appendChild(message);
  };

  var bubble = function() {
    log("Bubbling: " + this.firstChild.nodeValue);
  };

  var capture = function() {
    log("Capturing: " + this.firstChild.nodeValue);
  };

  var foreach = Array.prototype.forEach;
  var eventSources = document.querySelectorAll(".event-source");
  foreach.call(eventSources, function(element, index) {
    element.addEventListener("click", capture, true);
    element.addEventListener("click", bubble, false);
  });

})();
