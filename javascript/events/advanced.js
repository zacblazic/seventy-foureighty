"use strict";

(function() {

  var name = document.getElementById("name");
  var randomButton = document.getElementById("random-button");
  var opacityButton = document.getElementById("opacity-button");
  var otherButton = document.getElementById("other-button");

  // Add or register an event handler for the "focus" event
  name.addEventListener("focus", function() {
    console.log("Focused");
  }, false);

  // We can easily register two event handlers for the same element
  otherButton.addEventListener("click", firstEventHandler, false);
  otherButton.addEventListener("click", secondEventHandler, false);

  function firstEventHandler() {
    console.log("Other: first event handler");
  }

  function secondEventHandler() {
    console.log("Other: second event handler");
  }

  // Anonymous functions work too
  opacityButton.addEventListener("click", function() {
    // The "this" keyword inside event handlers will always reference the
    // element from which the event was fired.

    if (this.style.opacity == 0.5) {
      this.style.opacity = 1;
    } else {
      this.style.opacity = 0.5;
    }
  }, false);

  // We can remove an event listener just as easily. However this means that
  // the function must be a named function and not an anonymous one.
  function fireAndForget() {
    console.log("Firing once, and removing event listener");
    randomButton.removeEventListener("click", fireAndForget, false);
  }

  randomButton.addEventListener("click", fireAndForget, false);

})();
