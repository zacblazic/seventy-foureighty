"use strict";

(function() {

  var name = document.getElementById("name");
  var randomButton = document.getElementById("random-button");
  var opacityButton = document.getElementById("opacity-button");
  var otherButton = document.getElementById("other-button");

  // Define event handler as a named function
  function randomButtonClick() {
    console.log("Clicked");
  }

  // Assign to click event handler
  // Note the function is copied, not referenced
  randomButton.onclick = randomButtonClick;

  // Remove event handler
  randomButton.onmouseover = null;

  // Use an anonymous function as the event handler
  name.onfocus = function() {
    console.log("Focused");
  };

  opacityButton.onclick = function() {
    // The "this" keyword inside event handlers will always reference the
    // element from which the event was fired.

    if (this.style.opacity == 0.5) {
      this.style.opacity = 1;
    } else {
      this.style.opacity = 0.5;
    }
  };

  // Register first event handler
  otherButton.onclick = firstEventHandler;

  // Registering a second one will overwrite the first one. This is a drawback
  // of the traditional event model.
  otherButton.onclick = secondEventHandler;

  // To "fix" this drawback, we can just call both methods in an anonymous
  // event handler.
  otherButton.onclick = function() {
    firstEventHandler();
    secondEventHandler();
  };

  function firstEventHandler() {
    console.log("Other: first event handler");
  }

  function secondEventHandler() {
    console.log("Other: second event handler");
  }

})();
