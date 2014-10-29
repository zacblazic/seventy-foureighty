$(document).ready(function() {

  var form = $("form")[0];
  var submitButton = $("#submit-button");
  var resetButton = $("#reset-button");

  submitButton.click(function() {
    // The serialize method requires that input elements have name attributes
    var data = $(form).serialize();

    // Post using xml http request...

    // Prevent the page from submitting
    return false;
  });

  resetButton.click(function() {
    // Reset the form to default values
    form.reset();

    // Prevent the page from submitting
    return false;
  });

  form.onsubmit = function() {
    // Only runs when submitting via button click, not programatically
    console.log("Submitting...");
  };

});
