"use strict";

(function() {

  var letters = ["a", "b", "c", "d"];

  // Remove and access last element
  var last = letters.pop();
  console.log(last);

  // Add element to end
  letters.push("z");
  console.log(JSON.stringify(letters));

})();
