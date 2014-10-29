"use strict";

(function() {

  var letters = ["a", "b", "c", "d"];

  // Normal for loop
  for (var i = 0; i < letters.length; i++) {
    console.log("Index: " + i + " Value: " + letters[i]);
  }

  // For-in loop
  for (var index in letters) {
    console.log("Index: " + index + " Value: " + letters[index]);
  }

})();
