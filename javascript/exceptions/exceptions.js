"use strict";

(function() {

  var divideButton = document.getElementById("divide-button");
  var resultSpan = document.querySelector(".result");
  var dividendInput = document.getElementById("dividend");
  var divisorInput = document.getElementById("divisor");
  var logList = document.querySelector(".log");

  // Used to log messages to the document
  function log(message) {
    var msg = document.createElement("li");
    msg.innerHTML = message;
    logList.appendChild(msg);
  }

  divideButton.addEventListener("click", function() {

    try {
      // Parse the input values
      var dividend = parseFloat(dividendInput.value);
      var divisor = parseFloat(divisorInput.value);

      // If any of the inputs is not a number, we throw an error
      if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Input must be a number");
      }

      // Can't divide by zero, so thats an error too
      if (divisor == 0) {
        throw new Error("Divide by 0");
      }

      var result = dividend / divisor;
      resultSpan.innerHTML = result;

    } catch (e) {
      // Only executes when there is an exception thrown
      log(e.message);
    } finally {
      // This will always execute, even if there is no exception thrown
      log("We're doing this no matter what!")
    }

  }, false);


})();
